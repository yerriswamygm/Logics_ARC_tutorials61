//? 1. fibonacci series
// let num = Number(prompt("enter number here"));
// let defaultNumber1 = 0;
// let defaultNumber2 = 1;
// let sum = 0;
// for (let i = 0; i <= num; i++){
//     if (i <= 1) {
//         sum = i;
//     } else {
//         sum = defaultNumber1 + defaultNumber2;
//         defaultNumber1 = defaultNumber2;
//         defaultNumber2 = sum;
//     }
//     console.log(sum);
// }

//? 2. factors of a given number
// let num = Number(prompt("enter number here"));
// for (let i = 1; i <= num; i++){
//     if (num % i === 0) {
//         console.log(i);
//     }
// }

//? 3. filter data
// let arr = ["ritesh", "yerriswamy", "manjunah", "govind"];
// let filteredData = arr.filter((value, index) => {
//     if (value.length > 6) {
//         return value;
//     }
// });
// console.log(filteredData);

//? 4. fizz buzz
// for (let i = 1; i <= 15; i++){
//     if (i % 15 == 0) console.log("fizz buzz");
//     else if (i % 3 == 0) console.log("fizz");
//     else if (i % 5 == 0) console.log("buzz");
//     else console.log(i);
// }

//? 5. hcf
// let num1 = Number(prompt("enter num1 here"));
// let num2 = Number(prompt("enter num2 here"));
// let hcm;
// for (i = 1; i <= num1 && i <= num2;i++){
//     if (num1 % i == 0 && num2 % i == 0) {
//         hcm=i;
//     }
// }
// console.log(hcm);

//? 6.largest among number
// let arr = [25, 2, 5, 58, 96, 63, 89];
// let largestNumber = arr[0];
// for (let i = 0; i <= arr.length;i++){
//     if (largestNumber < arr[i]) {
//         largestNumber=arr[i]
//     }
// }
// console.log(largestNumber);

