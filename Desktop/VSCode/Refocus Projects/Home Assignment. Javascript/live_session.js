// // let month = 2;
// // let year = 2016;

// // if (month < 1 || month > 12){
// //     console.log("Invalid month");
// // }
// // else if(month == 2){
// //     if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
// //         console.log("The month has 29 days");
// //     }
// //     else {
// //         console.log("The month has 28 days")
// //     }
// // }

// // else if (month == 4 || month == 6 || month == 9 || month == 11){
// //     console.log("The month has 30 days");
// // }

// // else {
// //     console.log("The month has 31 days")
// // }

// let studentGrade = [
//     {
//         examName: "1st Quarter",
//         grade: 80
//     },
//     {
//         examName: "2nd Quarter",
//         grade: 70
//     },
//     {
//         examName: "3rd Quarter",
//         grade: 90
//     },
//     {
//         examName: "4th Quarter",
//         grade: 85
//     }
// ];

// let totalMarks = 0;
// for(let index = 0; index<studentGrade.length; index++){
//     console.log(`Exam: ${studentGrade[index].examName} Grade: ${studentGrade[index].grade}`)
//     totalMarks += studentGrade[index].grade;
// }

// let average = totalMarks/studentGrade.length;

// console.log(`The average grade is ${average}`)

// if (average<60){
//     console.log("Grade: F")
// } else if (average<70){
//     console.log("Grade: D")
// } else if (average<80){
//     console.log("Grade: C")
// } else if (average<90){
//     console.log("Grade: B")
// } else if (average<100){
//     console.log("Grade: A")
// }

// const array_sample = [[1,2,3],[4,5,6],[7,8,9],[10,34,33]];

// let maximum = array_sample[0][0];
// for (let outerIndex = 0; outerIndex < array_sample.length; outerIndex++){
//     for (let innerIndex = 0; innerIndex < array_sample[outerIndex].length; innerIndex++) {
//         if(array_sample[outerIndex][innerIndex] > maximum){
//             maximum = array_sample[outerIndex][innerIndex];
//         }
//     }
// }

// console.log("Maximum value is " + maximum)

let inputString = "saippuakivikauppias ";
let originalString = inputString;
let regex = /[\W_]/g;

inputString = inputString.toLowerCase().replace(regex, "");

let isPalindrome = true;
for (let tracker = 0; tracker<inputString.length/2; tracker ++){
    if(inputString[tracker] != inputString[inputString.length - 1 - tracker]){
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log (`Yes, the string "${originalString}" is a palindrome.`)
}
else {
    console.log (`No, the string "${originalString}" is not a palindrome.`)
}