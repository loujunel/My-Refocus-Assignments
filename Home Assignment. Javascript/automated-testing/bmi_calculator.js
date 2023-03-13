function calculateBMI (weight, height){
    let BMI = (weight/(height*height)).toFixed(2);
    console.log("Your Body Mass Index (BMI) is " + BMI);
    return parseFloat(BMI);
}

calculateBMI(64,1.65) //correct
calculateBMI(65,1.70) //correct

module.exports = calculateBMI;

//64 / (1.65 * 1.65) = 23.51 rounded off to 2 decimal places
//65 / (1.70 * 1.70) = 22.49 rounded off to 2 decimal places