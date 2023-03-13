function calculate (num1,num2){
    result = num1+num2;
    if(result>10){
        return "More than 10";
    }
    else if (result==10){
        return "Exactly 10";
    }
    else {
        return "Less than 10";
    }
}

console.log(calculate(10,5));