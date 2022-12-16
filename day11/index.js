//! 1. Logical programmes in JS

//? 1. String Palindrome
// let stringName = prompt("enter stringName here");
// let stringStoringName ="";
// for (let i = stringName.length - 1; i >= 0; i--){
//     stringStoringName = stringStoringName + stringName.charAt(i);
// }
// console.log(stringStoringName==stringName?"Palindrome":"Not a Palindrome");

//? 2. String Reverse
// let stringName = prompt("enter stringName here");
// let stringStoringName = "";
// for (let i = stringName.length - 1; i >= 0; i--){
//     stringStoringName = stringStoringName + stringName.charAt(i);
// }
// console.log(stringStoringName);

//? 3. Armstrong Number
let num = Number(prompt("enter number here"));
let temp = num;
let sum = 0;
while (temp > 0) {
    rem = temp % 10;
    sum = sum + rem * rem * rem;
    temp = parseInt(temp / 10);
}
console.log(sum == num ? "Armstrong" : "Not a Armstrong");


//? 1. alphabetical order
// function alphabeticalOrder(str) {
//     return str.split("").sort().join("");
// }
// console.log(alphabeticalOrder("Javascript"));

//? 2. area of the circle
// function areaOfCircle(r) {
//     let area = Math.PI * (r * r);
//     console.log(area);
// }
// areaOfCircle(10);

//? 3. area of triangle
// let breadth = Number(prompt("enter breadth here"));
// let height = Number(prompt("enter height here"));
// let areaOfTriangle = (breadth * height) / 2;
// console.log(areaOfTriangle);

//? 4. ascending order
// let array = [20, 2, 65, 53, 58, 94, 25];
// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

//? 5.descending order
// let array = [25, 36, 24, 1, 5, 89, 635, 78954];
// for (let i = 1; i < array.length; i++){
//     for (let j = 0; j < i; j++){
//         if (array[i] > array[j]) {
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }
// console.log(array);

//? 6. combine
// let a = ["hello"];
// let b = ["hiii"];
// let c = ["seeyou"];

// let d = a.concat(b, c);
// console.log(d);
// let e = [...a, ...b, ...c];
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

