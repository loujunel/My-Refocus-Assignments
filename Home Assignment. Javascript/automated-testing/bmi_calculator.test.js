const calcBMI = require("./bmi_calculator")

test("Check if computed BMI is correct", () => {
    expect(calcBMI(64,1.65)).toBe(23.51);
});

test("Check if computed BMI is correct", () => {
    expect(calcBMI(65,1.70)).toBe(22.49);
});