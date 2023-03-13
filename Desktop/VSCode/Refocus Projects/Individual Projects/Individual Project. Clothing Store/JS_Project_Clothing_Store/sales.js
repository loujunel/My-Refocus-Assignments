var isLoggedIn = false;
var userId = null;
var isCheckingOut = false;

var info = {
    shopName: "Zara",
    shopAddress: "Manhattan Avenue",
    shopCode: "NY656",
    userInfo: [
        {
            userFirstName: "Angelina",
            userLastName: "Jolie",
            userAge: "47",
            userBirthday: "04.06.1975",
            username: "angelina",
            password: "123456",
            cart: [
                {
                    itemName: "Blue jeans",
                    itemQuantity: 5,
                },
                {
                    itemName: "Red shirt",
                    itemQuantity: 5,
                }
            ]
        },
        {
            userFirstName: "Scarlett",
            userLastName: "Johansson",
            userAge: "38",
            userBirthday: "11.22.1984",
            username: "blackwidow",
            password: "112358",
            cart: [
                {
                    itemName: "Blue jeans",
                    itemQuantity: 10,
                },
                {
                    itemName: "Red shirt",
                    itemQuantity: 20,
                }
            ]
        }
    ],
    shopItems: [
        {
            itemName: "Blue jeans",
            itemCategory: "Trousers",
            itemPrice: 50,
            itemQuantity: 45,
        },
        {
            itemName: "Red shirt",
            itemCategory: "Tees",
            itemPrice: 25,
            itemQuantity: 100,
        }
    ]
}

function loginUser(username, password){
    info.userInfo.forEach((element, index) => {
        if (element.username == username && element.password == password){
            isLoggedIn = true;
            userId = index;

            console.log("\n========\nUSER INFORMATION\n========\nUser " + element.userFirstName + " " + element.userLastName + " has logged in.");
        };
    });

    if(!isLoggedIn){
        userId = null;
        console.log("\n========\nUSER INFORMATION\n========\nInvalid credentials. Please try again.");
    };
}

//add object properties of new user
function addUser(information){
    info.userInfo.push(information);
    console.log(`\n========\nSHOP NOTES\n========\nNew user ${information.userFirstName} ${information.userLastName} has been added.`);
}

//add object properties of new item
function addItems(iteminfo){
    if (iteminfo.itemPrice <= 0) {
        console.log("\n========\nSHOP NOTES\n========\nError: Item price must be greater than 0.");
        return;
    }
    else if (iteminfo.itemQuantity <= 0) {
        console.log("\n========\nSHOP NOTES\n========\nError: Item quantity must be greater than 0.");
        return;
    }
    else {
    info.shopItems.push(iteminfo);
    console.log(`\n========\nSHOP NOTES\n========\nNew item ${iteminfo.itemName} under ${iteminfo.itemCategory} category has been added.`);
    }
  }

//finds object containing the Item Name
function findItem(array, itemName) {
    let itemFound = null;
    array.forEach((element) => {
      if (element.itemName === itemName) {
        itemFound = element;
      }
    });
    return itemFound;
  }

function checkStocks(itemName, quantity) { 
    const item = findItem(info.shopItems, itemName);
    if (item) { //if item is found in the object, check current quantity
        if (item.itemQuantity >= quantity) {
        return true;
        } 
        else {
        console.log(`\n========\nSHOP NOTES\n========\nInsufficient stocks available.\nCurrently only have ${item.itemQuantity} available stocks for ${item.itemName}`);
        return false; //return true or false depending on availability 
        }
    } 
    else {
        console.log("\n========\nSHOP NOTES\n========\nItem not found in shop. Please add item first.");
        return false; //execute this if item is not found in shopItems
    }
}

function addStocks(itemName, quantity) {
    const item = findItem(info.shopItems, itemName);
    if (item) { //if item is found in the object, add quantity to current item's stock
        item.itemQuantity += quantity;
        console.log(`\n========\nSHOP NOTES\nSuccessfully restocked ${quantity} items to ${item.itemName}! New item count: ${item.itemQuantity}`);
    } 
    else { //if item is not currently in stock, display item as not found
        console.log("\n========\nSHOP NOTES\nItem not found in shop. Failed to restock.");
    }
}

function addToCart(itemName, quantity) {
    if (!isLoggedIn) {
        console.log("\n========\n========\nSHOP NOTES\nPlease login first.");
    } else {
        if (checkStocks(itemName, quantity)) { //check if item to be added in cart is found in shop items
            const userCart = info.userInfo[userId].cart;
            const cartItem = findItem(userCart, itemName);
                //if cart item to be added is found in current cart, check if the combined current cart and added cart items can be covered by current stock in shop items
                //continue adding to cart if shop item quantity is greater than total cart, otherwise display insufficient stock message
                if (cartItem) { 
                    if (checkStocks(itemName, cartItem.itemQuantity + quantity)) {
                        cartItem.itemQuantity += quantity;
                    }
                    else {
                        return;
                    }
                }
                else {//if cart item is not found in current cart, push value into cart
                    userCart.push({ itemName: itemName, itemQuantity: quantity });
                }
            console.log(`\n========\nCART INFORMATION\n========\nAdded ${quantity} ${itemName} to your cart!\nCurrent items in cart:`);
            userCart.forEach((item) => console.log(`${item.itemName}: ${item.itemQuantity}`));
        }
        else { //if item to be add to cart is not in shop items, return item not found message.
           return;
        }
    }
}

function checkOut(prompt, payment){
    if(!isLoggedIn){
        console.log("\n========\nSHOP NOTES\n========\nPlease login first."); //checks first if user is logged in
    }
    else if ((isLoggedIn) && prompt.toLowerCase() === "yes"){
        const userCart = info.userInfo[userId].cart;
        let totalAmount = 0;
        userCart.forEach((item) => { //calculate total amount of all items in cart
            const itemObj = findItem(info.shopItems, item.itemName);
            totalAmount += itemObj.itemPrice * item.itemQuantity;
        });
        if (payment >= totalAmount) { //check if payment is sufficient
            let change = payment - totalAmount;
            processPayment(payment, totalAmount);
            console.log(`\n========\nSHOP NOTES\n========\nChecked out the following items for ${info.userInfo[userId].userFirstName} ${info.userInfo[userId].userLastName}:`);
            userCart.forEach((item) => console.log(`${item.itemName}: ${item.itemQuantity}`));
            userCart.forEach((item) => deductStocks(item.itemName, item.itemQuantity));
            console.log(`\n========\nOFFICIAL RECEIPT\n========\nHere's your receipt, ${info.userInfo[userId].userFirstName} ${info.userInfo[userId].userLastName}:\n`);
            let totalItems = 0;
            userCart.forEach((item) => {
                printReceipt(item.itemName, item.itemQuantity);
                totalItems += item.itemQuantity;
            });
            console.log(`Total items purchased: ${totalItems}\n========\nTotal amount due: $${totalAmount}\nAmount paid: $${payment}`);
            if (change>=1){ //checks if change is needed
                console.log(`Change: $${change}`)
            }
            else{
                console.log(`Thank you for paying the exact amount!`)
            }
            console.log(`========\nTHANK YOU FOR SHOPPING WITH US!`)
            isLoggedIn = false;
        }
        else {
            console.log(`\n========\nSHOP NOTES\n========\nInsufficient payment. Total amount due is $${totalAmount}. Check out failed.`);
        }
    }
    else {
        console.log("\n\n========\nSHOP NOTES\n========\nOrder not confirmed, please confirm with 'yes' to proceed to checkout");
    }

    function deductStocks(itemName, quantity) {
        const item = findItem(info.shopItems, itemName);
        if (item) {
            item.itemQuantity -= quantity;
            console.log(`Successfully deducted ${quantity} items from ${item.itemName}! New stock count: ${item.itemQuantity}`);
        }
    }

    function printReceipt(itemName, quantity) {
        const item = findItem(info.shopItems, itemName);
        if (item) {
            const cost = item.itemPrice * quantity;
            console.log(`Item: ${item.itemName} x ${quantity}pcs. x $${item.itemPrice} ....... $${cost}`);
        }
    }

    function processPayment(payment, totalAmount) {
        const change = payment - totalAmount;
        return { payment, totalAmount, change };
    }
}



addUser({
    userFirstName: "Elizabeth",
    userLastName: "Olsen",
    userAge: "34",
    userBirthday: "02.16.1989",
    username: "wanda",
    password: "123456",
    cart: [{
        itemName: "Blue jeans",
        itemQuantity: 10,
    },
    {
        itemName: "Red shirt",
        itemQuantity: 20,
    }]
});

loginUser("wanda", "123456")
addToCart("Blue jeans", 2)
addToCart("Strapless Bra", 2)
addItems({
    itemName: "Strapless Bra",
    itemCategory: "Underwear",
    itemPrice: 65,
    itemQuantity: 50,
})
addToCart("Strapless Bra", 53)
addToCart("Strapless Bra", 50)
checkOut("yes", 900)
checkOut("no", 900)
checkOut("Yes", 4350)
checkOut("Yes", 4350)
loginUser("wanda", "123456")
addToCart("Strapless Bra", 50)