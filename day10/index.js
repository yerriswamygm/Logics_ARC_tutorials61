


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
//     if (num % i == 0) {
//         console.log(i);
//     }
// }

//? 3. filter data
// let arr = ["hello","hii","bye bye","how are you","niceee"];
// let filteredData = arr.filter((value, index) => {
//     if (value.length > 5) {
//         return value;
//     }
// })
// console.log(filteredData);

//? 4. fizz buzz
// for (let i = 1; i <= 15; i++){
//     if (i % 15 == 0) console.log("fiz buzz");
//     else if (i % 3 == 0) console.log("fizz");
//     else if (i % 5 == 0) console.log("buzz");
//     else console.log(i);
// }

//? 5. hcf
// let hcf;
// let num1 = Number(prompt("enter num1 here"));
// let num2 = Number(prompt("enter num2 here"));
// for (let i = 0; i <= num1 && i <= num2; i++){
//     if (num1 % i == 0 && num2 % i == 0) {
//         hcf = i;
//     }
// }
// console.log(hcf);

//? 6. largest number among number
// let arr = [12, 36, 15, 45, 85, 45, 65, 89, 564, 58];
// let largestNum = arr[0];
// for (let i = 0; i <= arr.length; i++){
//     if (largestNum < arr[i]) {
//         largestNum = arr[i];
//     }
// }
// console.log(largestNum);