//! 1. Logical Programmes in JS-09

//? 1. String Palindrome
// let stringName = prompt("enter stringName here");
// let stringStoringName = "";
// for (let i = stringName.length - 1; i >= 0; i--){
//     stringStoringName = stringStoringName + stringName.charAt(i);
// }
// console.log(stringStoringName == stringName ? "Palindrome" : "Not a Palindrome");

//? 2. String Reverse
// let stringName = prompt("enter stringName here");
// let stringStoringName = "";
// for (let i = stringName.length - 1; i >= 0; i--){
//     stringStoringName = stringStoringName + stringName.charAt(i);
// }
// console.log(stringStoringName);

//? 3. Armstrong Number
// let num = Number(prompt("enter number here"));
// let temp = num;
// let sum = 0;
// while (temp > 0) {
//     rem = temp % 10;
//     sum = sum + rem * rem * rem;
//     temp = parseInt(temp / 10);
// }
// console.log(sum == num ? "Armstrong" : "Not a Armstrong");

//? 4. Reverse Number
// let num = Number(prompt("enter number here"));
// let temp = num;
// let sum = 0;
// while (temp > 0) {
//     rem = temp % 10;
//     sum = sum * 10 + rem;
//     temp = parseInt(temp / 10);
// }
// console.log(sum);

//? 5. Tables
// let num = Number(prompt("enter number here"));
// for (let i = 1; i <= num; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i}*${j}=${i * j}`);
//     }
// }

//? 6. String Anagram
// let stringName1 = prompt("enter stringName1 here");
// let stringName2 = prompt("enter stringName2 here");
// let string1 = [...stringName1].sort().join("");
// let string2 = [...stringName2].sort().join("");
// console.log(string1 == string2 ? "Anagram" : "Not an Anagram");

//? 7. Prime Number or Not
// let num = Number(prompt("enter number here"));
// let primeNumber = true;
// for (let i = 2; i < num; i++){
//     if (num % i == 0 && num != 2) {
//         primeNumber = false;
//     }
// }
// console.log(primeNumber == true ? "Prime Number" : "Not a Prime Number");

//? 8. Sum of Prime Numbers
// let num = Number(prompt("enter number here"));
// let sum = 0;
// for (let i = 2; i < num; i++) {
//   count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

//? 9. Fibonacci Series
// let num = Number(prompt("enter number here"));
// let defaultNumber1 = 0;
// let defaultNumber2 = 1;
// let sum = 0;
// for (let i = 0; i <= num; i++){
//     if (i <= 1) {
//         sum = i;
//     } else {
//         sum = defaultNumber1 + defaultNumber2;
//         defaultNumber1 = defaultNumber1;
//         defaultNumber2 = sum;
//     }
//     console.log(sum);
// }
