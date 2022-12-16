//! 1. Logical programmes in JS - SLOT-01 -15

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
//   rem = temp % 10;
//   sum = sum + rem * rem * rem;
//   temp = parseInt(temp / 10);
// }
// console.log(sum == num ? "Armstrong" : "Not a Armstrong");

//? 5. Reverse Number
// let num = prompt("enter number here");
// let temp = num;
// let sum = 0;
// while (temp > 0) {
//   rem = temp % 10;
//   sum = sum * 10 + rem;
//   temp = parseInt(temp / 10);
// }
// console.log(sum);

//? 6. Fibonacci series
// let num = Number(prompt("enter number here"));
// let defaultNumber1 = 0;
// let defaultNumber2 = 1;
// for (let i = 0; i <= num; i++){
//   if (i <= 1) {
//     sum = i;
//   } else {
//     sum = defaultNumber1 + defaultNumber2;
//     defaultNumber1 = defaultNumber2;
//     defaultNumber2 = sum;
//   }
//   console.log(sum);
// }

//? 7. Prime Number or Not
// let num = Number(prompt("enter number here"));
// primeNumber = true;
// for (let i = 2; i < num; i++){
//   if (num % i == 0 && num != 2) {
//     primeNumber = false;
//   }
// }
// console.log(primeNumber == true ? "Prime Number" : "Not a Prime Number");

//? 8. Sum of Prime Number
// let num = Number(prompt("enter number here"));
// let sum = 0;
// for (let i = 2; i < num; i++){
//   count = 0;
//   for (let j = 1; j <= i; j++){
//     if (i % j == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

//? 9. Tables
// let num = Number(prompt("enter number here"));
// for (let i = 1; i <= num; i++){
//   for (let j = 1; j <= 10; j++){
//     console.log(`${i}*${j}=${i * j}`);
//   }
// }

//? 10. interview question
// for (let i = 5; i >= 0; i -= 2){
//     let str=""
//     for (let j = 0; j < i; j++){
//        str+="1"
//     }
//     console.log(str);
// }

//? 11. Factors
// let num = 6;
// for (let i = 1; i <= num; i++){
//     if (num % i == 0) {
//         console.log(i)
//     }
// }

//? 12. Factorial Number
// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++){
//     fact = fact * i;
// }
// console.log(fact);

//? 13. Perfect Number
// let n1 = Number(prompt("enter n1"));
// let temp = 0;
// for (let i = 1; i <= n1/2; i++){
//     if (n1 % i == 0) {
//         temp += i;
//     }
// }
// console.log(temp == n1 ? "Perfect Number" : "Not Perfect Number");

//? 14. Square root Number
//!Method-01
// let n1 = Number(prompt("enter n1"));
// let a = Math.sqrt(n1);
// console.log(a);

// let n1 = Number(prompt("enter n1"));
// let a = n1 ** (1 / 2);
// console.log(a);

//!Method-02

// let arr = [2, 3, 4, 5, 6];
// function square(element) {
//     console.log(element*element)
// }
// arr.forEach(square);

//!Method-03
// let num = parseInt(prompt("enter the number"));
// let i = prompt("enter SQRT or CBRT number");
// if (i == "CBRT") {
//     console.log(parseInt(num=num**1/3))
// } else if (i == "SQRT") {
//     console.log(parseInt(num=num**1/2))
// } else {
//     console.log("invalid number")
// }

//? 15. Cube Number
//!Method-01
// let arr1 = [2, 3, 4, 5, 6];
// function cube(element) {
//   console.log(element * element*element);
// }
// arr1.forEach(cube);

//! cube root
//!Method-02
// let n1 = Number(prompt("enter n1"));
// let a = Math.cbrt(n1);
// console.log(a);

// let n1 = Number(prompt("enter n1"));
// let a = n1 ** (1 / 3);
// console.log(a);


//! 2. Logical programmes in JS - SLOT-02 -15

//? 1. Alphabetical Order
// function alphabeticalOrder(str) {
//   return str.split("").sort().join("");
// }
// console.log(alphabeticalOrder("YERRISWAMY G M"));

// let stringStoringName ="SWAMY";
// let alphabeticalOrder = stringStoringName.split("").sort().join("");
// console.log(alphabeticalOrder);

// let stringStoringName = ["SWAMY"];
// let alphabeticalOrder = stringStoringName
//   .toString("")
//   .split("")
//   .sort()
//   .join("");
// console.log(alphabeticalOrder);

//? 2. Area of Circle
// function areaOfCircle(r) {
//   return Math.PI * (r * r);
// }
// console.log(areaOfCircle(10));

// function areaOfCircle(r) {
//   let area = Math.PI * (r * r);
//   console.log(area);
// }
// areaOfCircle(10);

// let r = 10;
// let area = Math.PI * (r * r);
// console.log(area);

//? 3. Area of Triangle
// let breadth = Number(prompt("enter breadth here"));
// let height = Number(prompt("enter height here"));
// let areaOfTriangle = 0.5 * breadth * height;
// console.log(areaOfTriangle);

// function areaOfTriangle(b, h) {
//   return 0.5 * b * h;
// }
// console.log(areaOfTriangle(6,6));

// function areaOfTriangle(b,h) {
//   let area = 0.5 * b * h;
//   console.log(area);
// }
// areaOfTriangle(6, 6);

//? 4. Ascending order of an array in given number
// let arr = [55, 26, 35, 45, 89, 65, 126, 46];
// for (let i = 1; i < +arr.length; i++){
//     for (let j = 0; j < i; j++){
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

//? 5. Descending order of an array in given number
// let arr = [12, 6, 45, 89, 85, 69, 78, 64, 89, 25, 3, 45, 87, 66, 59];
// for (let i = 1; i <= arr.length - 1; i++){
//     for (let j = 0; j <= i; j++){
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

//? 6. Combine multiple array into one array
// let a = ["HTML"];
// let b = ["CSS"];
// let c = ["JAVASCRIPT"];

// let d = a.concat(b, c);
// console.log(d);

// let e = [...a, ...b, ...c];
// console.log(e);

//? 7. How to empty of an array
// var arr = ["a", "b", "c", "d", "e"];
// var anotherArr = arr;
// var arr = [];
// console.log(arr);
// console.log(anotherArr);

// var arr = [1, 2, 3, 4, 5, 6];
// var arr = [];
// console.log(arr);

//? 8. whether array is empty or not
// var arr = [1, 2, 3, 4, 5];
// var arr = [];
// console.log(arr.length == 0 ? "Array is empty" : "Array is not empty");

//? 9. Object to array
// let obj = {
//   Name: "Yerriswamy",
//   Id: 25,
//   Salary: 25000,
// };
// console.log(obj);
// let arr = Object.entries(obj);
// // console.log(arr);
// let arr1 = arr.flat(1);
// console.log(arr1);

//? 10. Array to object
// let arr = [
//   ["Name", "Yerriswamy"],
//   ["Id", 20],
//   ["Salary", 25000],
// ];
// console.log(arr);
// console.log(arr.flat(1));

// let obj = Object.fromEntries(arr);
// console.log(obj);

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

//! 3. Logical programmes in JS - SLOT-03 -15

//? 1. filtered data
// let arr = ["doddanagouda", "sanjay", "kiran", "yerriswamy", "govind"];
// let filteredData = arr.filter((value,index) => {
//     if (value.length < 6) {
//         return value;
//     }
// })
// console.log(filteredData);

//? 2. fizz-buzz
// for (let i = 1; i <= 15; i++){
//     if (i % 15 == 0) console.log("fizz-buzz");
//     else if (i % 3 == 0) console.log("fizz");
//     else if (i % 5 == 0) console.log("buzz");
//     else console.log(i);
// }

//? 3. hcf
// let hcf;
// let num1 = Number(prompt("enter num1 here"));
// let num2 = Number(prompt("enter num2 here"));
// for (let i = 1; i <= num1 && i <= num2;i++){
//     if (num1 % i == 0 && num2 % i == 0) {
//         hcf = i;

//     }
// }
// console.log(hcf);

//? 4. largest number
// let arr = [5, 48, 25, 36, 89, 6548, 21, 6, 56, 8,];
// let largestNumber = arr[0];
// for (let i = 0; i <= arr.length; i++){
//     if (largestNumber < arr[i]) {
//         largestNumber = arr[i];
//     }
// }
// console.log(largestNumber);

//? 5. largest number among number
// let largestNumber = 0;
// function largestNum(a,b,c) {
//     if (a > b) {
//         largestNumber = a;
//     } else {
//         largestNumber = b;
//     }
//     if (c > largestNumber) {
//         largestNumber = c;
//     }
//     console.log(largestNumber)
// }
// largestNum(50,40,65);

//? 6. json

// let Obj = [
//     {
//         name: "Govind",
//         id: 1,
//     },
//     {
//         name: "Manjunath",
//         id: 2,
//     },
//     {
//         name: "Vishwanath",
//         id: 3,
//     },
//     {
//         name: "Pavitra",
//         id: 4,
//     },
// ];

// console.log(Obj);

// Obj[3].name = "Mounika";
// console.log(Obj[3]);

// let a = Obj.filter((value,index) => {
//     if (value.name == "Vishwanath") {
//         return value;
//     }
// })
// console.log(a);

// delete Obj[3];
// console.log(Obj);


//? pre increment - first increment & display the value
// let a = 5;
// console.log(++a); //6
// console.log(++a); //7
// console.log(++a); //8
// console.log(++a); //9
// console.log(++a); //10

//? post increment - first display the existing value & then increment
// let a = 5;
// console.log(a++); // 5
// console.log(a++); // 6
// console.log(a++); // 7
// console.log(a++); // 8
// console.log(a++); // 9
// console.log(a++); // 10

//? pre decrement - first decrement & display the value
// let a = 5;
// console.log(--a);
// console.log(--a);
// console.log(--a);
// console.log(--a);

//? post decrement - first display the existing value & then decrement
// let a = 5;
// console.log(a--);
// console.log(a--);
// console.log(a--);
// console.log(a--);
// console.log(a--);
