function showMessage (callback1, callback2, data = {}) {
    var result1 = callback1(data);
    var result2 = callback2(data);

    console.log(`Sum: ${result1}\nDifference: ${result2}`);
}

function addition({num1, num2}) {
    return num1 + num2;
}

function minus({num1, num2}) {
    return num1 - num2;
}


showMessage(addition, minus, {
    num1: 10,
    num2: 10
});