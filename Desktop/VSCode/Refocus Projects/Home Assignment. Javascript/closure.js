function bank(name) {
    let balance = 0;
    console.log(name);

    function deposit(amount) {
        balance += amount;
        console.log("You deposited money: " + amount);
    }

    function widthdraw(amount) {
        if (amount <= balance){
            balance -= amount;
            console.log("You widthdrew money: " + amount);
        }
        else {
            console.log("Widthdrawal amount is greater than balance, cannot widthdraw.")
        }
    }

    function checkbalance(){
        console.log("Your balance is: " + balance);
    }

    return {
        dep: deposit,
        check: checkbalance,
        width: widthdraw
    }
}

var bnk = bank("Junel");

bnk.dep(500);
bnk.dep(800);
bnk.width(1300);
bnk.check();