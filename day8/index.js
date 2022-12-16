//! 1. Logical programmes in JS - SLOT-01 -15

//? 1. String Palindrome
// let stringName = prompt("enter stringName here");
// let stringStoringName = "";
// for (let i = stringName.length - 1; i >= 0; i--){
//     stringStoringName = stringStoringName + stringName.charAt(i);
// }
// console.log(stringStoringName == stringName ? "Palindrome" : "Not a Palindrome");

// let stringName = prompt("enter stringName here");
// let stringStoringName = "";
// for (let i = 0; i <stringName.length; i++){
//     stringStoringName = stringName[i]+stringStoringName;
// }
// console.log(stringStoringName == stringName ? "Palindrome" : "Not a Palindrome");

//? 2. String Reverse
// let stringName = prompt("enter stringName here");
// let stringStoringName = "";
// for (let i = stringName.length - 1; i >= 0; i--){
//     stringStoringName = stringStoringName + stringName.charAt(i);
// }
// console.log(stringStoringName);

//? 3. String Anagram
// let stringName1 = prompt("enter stringName1 here");
// let stringName2 = prompt("enter stringName2 here");
// let string1 = [...stringName1].sort().join("");
// let string2 = [...stringName2].sort().join("");
// console.log(string1 == string2 ? "Anagram" : "Not a Anagram");

//? 4. Armstrong Number
// let num = Number(prompt("enter number here"));
// let temp = num;
// let sum = 0;
// while (temp > 0) {
//     rem = temp % 10;
//     sum = sum + rem * rem * rem;
//     temp = parseInt(temp / 10);
// }
// console.log(sum == num ? "Armstrong" : "Not a Armstrong");

//? 5. Reverse Number
// let num = Number(prompt("enter number here"));
// let temp = num;
// let sum = 0;
// while (temp > 0) {
//     rem = temp % 10;
//     sum = sum * 10 + rem;
//     temp = parseInt(temp / 10);
// }
// console.log(sum);

//? 6. Fibonacci series
// let num = Number(prompt("enter number here"));
// let defaultNumber1 = 0;
// let defaultNumber2 = 1;
// for (let i = 0; i <= num; i++) {
//   if (i <= 1) {
//       sum = i;
//   } else {
//       sum = defaultNumber1 + defaultNumber2;
//       defaultNumber1 = defaultNumber2;
//       defaultNumber2 = sum;
//     }
//     console.log(sum);
// }

//? 7. Prime or not
// let num = Number(prompt("enter number here"));
// let primeNumber = true;
// for (let i = 2; i < num; i++){
//         if (num % i == 0 && num != 2) {
//             primeNumber = false;
//         }
// }
//  console.log(primeNumber == true ? "Prime Number" : "Not a Prime Number");

//? 8. Sum of Prime Number
// let num = Number(prompt("enter number here"));
// let sum = 0;
// for (let i = 2; i < num; i++){
//     count = 0;
//     for (let j = 1; j <= i; j++){
//         if (i % j == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

//? 9. Tables
// let num = Number(prompt("enter number here"));
// for (let i = 1; i <= num; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i}*${j}=${i * j}`);
//     }
// }

//? 10. Pattern
// for (let i = 5; i >= 1; i = i - 2){
//     let pattern = "";
//     for (let j = 0; j < i; j++){
//         pattern = pattern + 1;
//     }
//     console.log(pattern);
// }

//? 11. Factors
// let num = Number(prompt("enter number here"));
// for (let i = 1; i <= num; i++){
//     if (num % i == 0) {
//         console.log(i);
//     }
// }

//? 12. Factorial Number
// let num = Number(prompt("enter number here"));
// let fact = 1;
// for (let i = 1; i <= num; i++){
//     fact = fact * i;
// }
// console.log(fact);

//? 13. Perfect Number
// let num = Number(prompt("enter number here"));
// let perfectNumber = 0;
// for (let i = 1; i < num; i++) {
//   if (num % i == 0) {
//     perfectNumber = perfectNumber + i;
//   }
// }
// console.log(perfectNumber == num ? "Perfect Number" : "Not a Perfect Number");

// let n1 = Number(prompt("enter n1"));
// let num = n1;
// let temp = 0;
// for (let i = 1; i < n1; i++){
//     if (n1 % i == 0) {
//         temp += i;
//     }
// }
// console.log(temp == num ? "Perfect Number" : "Not Perfect Number");

//? 14. Square root
// let num = Number(prompt("enter number here"));
// let squareRoot = Math.sqrt(num);
// console.log(squareRoot);

let num = Number(prompt("enter number here"));
let squareRoot = num ** 0.5;
console.log(squareRoot);

//! 2. Logical programmes in JS-20

//? 1. Alphabetical Order
// function alphabetical_Order(str) {
//     return str.split("").sort().join("");
// }
// console.log(alphabetical_Order("Javascript"));
// console.log(alphabetical_Order("ReactJS"));

//? 2. Area of the Circle
// function area_Of_Circle(r) {
//     let area =Math.PI * (r * r);
//     console.log(area);
// }
// area_Of_Circle(10);

//? 3. Area of the Triangle
// let breadth = Number(prompt("enter breadth here"));
// let height = Number(prompt("enter height here"));
// let area_Of_Triangle = (breadth * height) / 2;
// console.log(area_Of_Triangle);

//? 4. Ascending Order of an array
// var array = [55, 35, 95, 2, 96, 22];
// for (let i = 1; i < array.length; i++){
//     for (let j = 0; j < i; j++){
//         if (array[i] < array[j]) {
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }
// console.log(array);

//? 5. Descending order of an array
// var array = [55, 30, 45, 2, 96, 34];
// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array[i] > array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

//? 6.Combine multiple into one array

// let a = ["Javascript"];
// let b = ["React"];
// let c = ["MongoDB"];

// // let d = a.concat(b, c);
// // console.log(d);

// let d = [...a, ...b, ...c];
// console.log(d);

//? 7. empty array
// var array = ["a", "b", "c", "d"];
// var anotherArray = array;
// var array = [];
// console.log(array);

//? 8. array empty or not
// var array = [2, 5, 8, 7, 9, 63];
// var array = [];
// console.log(array.length === 0 ? "Empty array" : "not a empty array");

//? 9. Object to array

//? 10. array to object

// let array = [
//     ["id", 1],
//     ["name", "swamy"],
//     ["job", "SE"],
// ];

// console.log(Object.fromEntries(array));

//? 11. average
// var array = [10, 20, 30, 40];
// var sum = 0;
// var avg;
// for (let i = 0; i < array.length; i++){
//     sum = sum + array[i];
// }
// var avg = sum / array.length;
// console.log(avg);

//? 12. calculator
// let operator = prompt("enter operation here");
// let number1 = parseFloat(prompt("enter number1 here"));
// let number2 = parseFloat(prompt("enter number2 here"));

// let result;
// if (operator == "+") {
//     result = number1 + number2;
// } else if (operator == "-") {
//     result = number1 - number2;
// } else if (operator == "*") {
//     result = number * number2;
// } else {
//     result = number1 / number2;
// }
// console.log(`${number1}${operator}${number2}=${result}`);

//? 13. ascii value
// let string = prompt("enter string here");
// let result = string.charCodeAt(0);
// console.log(result);

//? 14. odd or even
// let num = Number(prompt("enter number here"));
// console.log(num % 2 == 0 ? "even" : "odd");

//? 15. celsius
// const celsius = prompt("Enter a celsius value: ");
// const fahrenheit = celsius * 1.8 + 32;

// console.log(
//   `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`
// );
