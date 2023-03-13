var isLoggedIn = false;
var userId = null;

var bank = {
    bankName: "Bank of Refocus",
    address: "Philippines",
    bankMoney: 0,
    accounts: [
        {
            firstName: "Lou-Junel",
            lastName: "Velasco",
            gender: "Male",
            address: "Cavite",
            balance: 0,
            pin: 12345678,
            userName: "abc123",
            password: "abc123"
        },
        {
            firstName: "Ofelia",
            lastName: "Velasco",
            gender: "Female",
            address: "Cavite",
            balance: 123456789,
            pin: 12345678,
            userName: "123abc",
            password: "123abc"
        }
    ],
    checkBankBalance: function(){
        console.log("The bank balance is: Php" + this.bankMoney);
    },
    depositBankMoney: function(amount){
        if(amount < 0){
            console.log("Transaction failed, please try again.");
        }
        else if(amount == 0){
            console.log("No deposit amount specified, balance retained.")
        }
        else{
            this.bankMoney += amount;
            console.log("Deposited: Php" + amount);
        }
    },
    widthrawBankMoney: function(amount){
        if(amount <= this.bankMoney && amount > 0){
            this.bankMoney -= amount;
            console.log("Widthrew: Php" + amount);
        }
        else if(amount == 0){
            console.log("No widthdraw amount specified, balance retained.")
        }
        else if(amount > this.bankMoney){
            console.log("Insufficient balance.")
        }
        else{
            console.log("Transaction failed, please try again later.");
        }
    }
}

function loginUser(username, password){
    bank.accounts.forEach((element, index) => {
        if (element.userName == username && element.password == password){
            isLoggedIn = true;
            userId = index;

            console.log("Hi " + element.firstName + " " + element.lastName);
        };
    });

    if(!isLoggedIn){
        userId = null;
        console.log("Invalid credentials.");
    };
}

function depositMoney(amount){
    if(isLoggedIn){
        bank.accounts[userId].balance += amount;
        bank.depositBankMoney(amount);

        console.log("You deposited Php" + amount.toFixed(2) + " to your account");
    }

    else{
        showError("Please log in first.");
    }
}

function withdrawMoney(amount=0){
    if(isLoggedIn && bank.accounts[userId].balance >= amount && amount != 0){
        bank.accounts[userId].balance -= amount;
        bank.widthrawBankMoney(amount);

        console.log("You widthdrew Php" + amount.toFixed(2) + " from your account");
    }

    else if(isLoggedIn && bank.accounts[userId].balance < amount){
        console.log("Cannot withdraw right now.")
    }

    else if(isLoggedIn && amount == 0){
        console.log("No widthdraw amount specified. Balance retained.")
    }

    else{
        showError("Please log in first.");
    }
}

function showError(msg){
    console.error(msg);
}

loginUser("abc123","abc123")
depositMoney(1000);
withdrawMoney(500);
bank.checkBankBalance();

function addUser(info){
    bank.accounts.push(info);
    console.log(info.firstName + " " + info.lastName + " has been added.");
}

function removeUser(id){
    isLoggedIn = false;
    userId = null;

    console.log(bank.accounts[id].firstName + " " + bank.accounts[id].lastName + " has been removed.");
    bank.accounts.splice(id, 1);
}

addUser({
    firstName: "Tony",
    lastName: "Starks",
    gender: "Male",
    address: "USA",
    balance: 0,
    pin: 12345678,
    userName: "qwe123",
    password: "qwe123"
});

console.log(bank.accounts);

removeUser(2);