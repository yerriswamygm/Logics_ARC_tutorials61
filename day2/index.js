//! 1. Defining the variables in JS - var, let, const
//!    Syntax for defining the variable - 3 Points => VD,VI,VD & VI
//!    Difference between var, let, const - 6 Points => D, I, DI, RI, DI,RI DI

// 1. var
// var a;    // variable declaration

// var a;
// a = 10;   // variable initialization

// var a = 10;  // variable declaration and variable initialization

// var a;
// var a;     // variable Re-Declaration

// var a;
// a = 10;
// a = 10;      // variable Re-Initialization

// var a = 10;
// var a = 10;     // variable Re-declaration & variable Re-Initialization

// 2. let
// let a;              // variable declaration

// let a;
// a = 10;             // variable initialization

// let a = 10;         // variable declaration & variable Initialization

// let a;
// let a;               // variable Re-Declaration is not possible
// Uncaught SyntaxError: Identifier 'a' has already been declared

// let a;
// a = 10;
// a = 10;                  // variable Re-Initialization

// let a = 10;
// let a = 10;                // variable Re-declaration & variable Re-Initialization is not possible
// Uncaught SyntaxError: Identifier 'a' has already been declared

// 3. const
// const a;                  // variable declaration is not possible
//Uncaught SyntaxError: Missing initializer in const declaration

// const a;
// a = 10;                   //variable initialization is not possible
//Uncaught SyntaxError: Missing initializer in const declaration

// const a = 10;             // variable declaration & variable Initialization

// const a;
// const a;                  // variable Re-Declaration is not possible
//Uncaught SyntaxError: Missing initializer in const declaration

// const a;
// a = 10;
// a = 10;                  //variable Re-Initialization is not possible
//Uncaught SyntaxError: Missing initializer in const declaration

// const a = 10;
// const a = 10;            // variable Re-declaration & variable Re-Initialization is not possible
// Uncaught SyntaxError: Identifier 'a' has already been declared

//! 2. Basic Rules of JS - 3 Points

// 1. JS Keywords cannot be used as Identifier.
// examples :
// var delete=10;
// var const=10;
// let const=10;

// 2. Underscore(_) & Dollar($) Except these we cannot uses the remaining characters at the Identifier first letter.
// examples :
// var _a = 10;
// let $b = 20;

// 3. Identifier we can use alpha numeric value.
// var a12 = 20;
// let b25 = 30;
// const c30 = 40;

//! 3. Temporal Dead Zone(TDZ) => let & const

//? TDZ - Cannot access variable before initialization (Error : Uncaught ReferenceError)

// console.log(a);
// let a = 10;

// console.log(b);
// const b = 10;

//? undefined

// var a;
// console.log(a);

// console.log(b);
// var b;

// console.log(c);
// var c = 10;

// let d;
// console.log(d);

//? undefined

// var a;
// console.log(a);

// console.log(b);
// var b;

// console.log(c);
// var c = 10;

//! 4. Javascript Hoisting(function & variable can be used before declaration)

//? variable Hoisting
//ex1
// using test before declaring
// console.log(test);   // undefined
// var test;

//ex2
// above ex1 behaves like ex2
// var test;
// console.log(test);     // undefined

//ex3
// program to display value
// a = 5;
// console.log(a);
// var a; // 5

//ex4
// above ex3 behaves like ex4
// var a;
// a = 5;
// console.log(a); // 5

//ex5
// program to display value -However in JavaScript, initializations are not hoisted
// console.log(a);
// var a = 5;        //undefined

//ex6
// The above ex5 program behaves as ex6
// var a;
// console.log(a);
// a = 5;    //undefined
// Note : Only the declaration is moved to the memory in the compile phase. Hence, the value of variable a is undefined because a is printed without initializing it.

// program to display value
// var a = 4;
// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
// }
// greet();
// console.log(b);     //Uncaught ReferenceError: b is not defined
//? Note : In the above example, variable b is hoisted to the top of the function greet and becomes a local variable. Hence b is only accessible inside the function. b does not become a global variable
// Note: In hoisting, the variable declaration is only accessible to the immediate scope.

// program to display value
// If a variable is used with the let keyword, that variable is not hoisted. For example,
// a = 5;
// console.log(a);
// let a; //  Uncaught ReferenceError: Cannot access 'a' before initialization

//? Function Hoisting -A function can be called before declaring it. For example,
// program to print the text
// greet();
// function greet() {
//     console.log('Hi, there.');      //Hi, there.
// }
//? Note : In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.

// However, when a function is used as an expression, an error occurs because only declarations are hoisted. (It is called as the TDZ(Temporal Dead Zone)) For example;
// program to print the text
// greet();
// let greet = function() {
//   console.log("Hi, there."); //Uncaught ReferenceError: Cannot access 'greet' before initialization
// }

// greet();
// var greet = function () {
//   console.log("Hi, there.");
// };
//If var was used in the above program, the error would be:
// Uncaught TypeError: greet is not a function

//? Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting. In the case of variables, it is better to use let than var

// greet();
// function () {          //function greet(){ console.log("Hi, there.") };
//   console.log("Hi, there.");
// };
//? Note : Uncaught SyntaxError: Function statements require a function name

//? variable is not defined - (Error : Uncaught ReferenceError)
// console.log(e);

// "use strict";
// b = 10;
// console.log(b);

//? output - 10, without using "use strict" mode
// a = 10;
// console.log(a);

// console.log(a);
// var a;
// a = 10;

//? null
// var a = null;
// console.log(a);    //returns null

//? NaN (not a number)
// var a = "hello";
// var b = 10;
// var c = a - b;
// console.log(c);  //NaN

// var a = "hello";
// var b = 10;
// var c = a * b;
// console.log(c);   //NaN

// var a = "hello";
// var b = 10;
// var c = a / b;
// console.log(c);    //NaN

// console.log(1 - "a");  // NaN

// console.log(1 - "@");  //NaN

//? concatenation
// var a = "hello";
// var b = 10;
// var c = a + b;
// console.log(c);   //hello10

//! 5. Implicit Typecasting and Explicit Typecasting

//? Implicit Typecasting - by default prompt consider the string
//?concatenation
// let n1 = prompt("enter n1 here");
// let n2 = prompt("enter n2 here");
// let n3 = n1 + n2;
// console.log(n3);

//? concatenation -Implicit Typecasting - here number is converting into string
// console.log(1 + "1"); // 11
// console.log("1" + 1);  // 11
// console.log("1" + "1");  // 11
// console.log(1 + "a");   // 1a
// console.log(1 + "@");    // 1@

//? here string is converting into number
// console.log(1 - "1");  // 0
// console.log(1 - "a");  // NaN
// console.log(1 - "@");  //NaN
// console.log("1" - "1");   // 0 here both strings are converting into number
// console.log("a" - "a");  // NaN
// console.log(1 * "a");    //NaN
// console.log("5" * "5");  // 25
// console.log(1 / "a");   // NaN
// console.log("a" / "a");  //NaN
// console.log("12" / "4"); // 3

//? Explicit Typecasting - by default prompt consider the string
// let n1 = Number(prompt("enter n1 here"));
// let n2 = Number(prompt("enter n2 here"));
// let n3 = n1 + n2;
// console.log(n3);

//?output - multiplied value
// let n1 = prompt("enter n1 here");
// let n2 = prompt("enter n2 here");
// let n3 = n1 * n2;
// console.log(n3);

//?output - division value
// let n1 = prompt("enter n1 here");
// let n2 = prompt("enter n2 here");
// let n3 = n1 / n2;
// console.log(n3);

//?output - subtraction value
// let n1 = prompt("enter n1 here");
// let n2 = prompt("enter n2 here");
// let n3 = n1 - n2;
// console.log(n3);

//? Tricky questions

// {
//     var c = 30;
//     let d = 40;
//     const e = 50;
// }
// console.log(d)

// function test() {
//   var x = 100;
//   let y = 200;
// }
// test();
// console.log(x);  //not defined
// console.log(y);   //not defined
// console.log(m); //not defined
// console.log(this.m);  //undefined

// {
//   var x = 100;
//   let y;
// }
// x = 300;
// // console.log(x); //300
// console.log(this.x);

// "use strict";
// {
//   var x = 100;
//   let y;
// }
// x = 300;
// // console.log(x); //300
// console.log(this.x);     //300

// let x = {};
// console.log(typeof x);   //returns object
// console.log(typeof typeof x);   //returns string
// console.log(typeof typeof typeof x);   //returns string
//? Note : typeof is the operator

// let x = { hello};
// console.log(typeof x);  //hello is not defined

//! 6. Types of Errors in JS

//? 1. Uncaught ReferenceError variable is not defined
//ex1
// console.log(e);

//? 2. Uncaught SyntaxError: Function statements require a function name
// ex1
// greet();
// function () {          //function greet(){ console.log("Hi, there.") };
//   console.log("Hi, there.");
// };

//? 3. Uncaught TypeError: greet is not a function
// greet();
// var greet = function () {
//   console.log("Hi, there.");
// };
//If var was used in the above program, the error would be:
//Uncaught TypeError: greet is not a function
// Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting. In the case of variables, it is better to use let than var

//! 7. Logical Programmes in JS - 06
//? 1. String Palindrome
// let stringName = prompt("enter stringName here");
// let stringStoringName = "";
// for (let i = stringName.length - 1; i >= 0; i--){
//     stringStoringName = stringStoringName + stringName.charAt(i);
// }
// console.log(stringStoringName == stringName ? "Palindrome" : "Not a Palindrome");

//? 2. Reverse String
// let stringName = prompt("enter stringName here");
// let stringStoringName = "";
// for (let i = stringName.length - 1; i >= 0; i--){
//     stringStoringName = stringStoringName + stringName.charAt(i);
// }
// console.log(stringStoringName);

//? 3. Armstrong Number
// let num = Number(prompt("enter number here"))
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

//? 6. Anagram 
let stringName1 = prompt("enter stringName here");
let stringName2 = prompt("enter stringName2 here");
let str1 = [...stringName1].sort().join("");
let str2 = [...stringName2].sort().join("");
console.log(str1 == str2 ? "Anagram" : "Not an Anagram");

