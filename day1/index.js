//! 30.11.22

//! 1. Introduction to JS => 4 Points

// In 1994 developed the JS
// JS developed by Brendan Eich
//Company Name : Netscape Company
// Browser name : Netscape Navigator

//! 2. Characteristics of JS(IS SO WD) => 6 Points

// 1. Interpreted Language : read/executes line by line
// 2. Object Oriented Language : Inbuilt functions/methods (No classes,inheritance,encapsulation,polymorphism)
// => Object Based Language : OOP's Concepts like Classes,inheritance,encapsulation,polymorphism.
// 3. Synchronous : At a time, Only one task
// 4. Single threaded : all Synchronous JS functions are Single threaded, It does not deal with the complicated scenarios that arise in the multi-threaded environment
// 5. Weakly Typed/Loosely typed Language :You dont have to specify what type of information will be stored in a variable in advance based on what kind of information you assign to it
// 6. Dynamically Typed Language : Changing the datatype during the run time

//! 3. Output Methods of JS(APC DC) => 5 Points

// first three pop up methods
// 1. alert()  => "OK"  on UI
// 2. prompt() => "OK"  "CANCEL"  on UI
// 3. confirm() => "OK" "CANCEL"  on UI

// 4. document.write() / document.writeln()  => UI
// writeln() add new line after each statement
// 5. console.log()  => CONSOLE

// //? 1.alert()

// alert("are you login to the page");

// //? 2. prompt()
// prompt("enter your age here");

// //? 3. confirm();
// confirm("are you sure to exit from this page");

// //? 4. document.write()
// // document.write("Hello, This is Yerriswamy G M from TYSS Company");
// // document.write("I am from Racichur");

// document.writeln("I am daily coming from Rajajinagar");
// document.writeln("Because of TYSS Training");


// //? 5. console.log()
// console.log("Hello Govind")


//! 4. Logical programmes in JS -04

//? 1. String Palindrome (Given String is Palindrome or not)

// let stringName = prompt("enter stringName here");
// let stringStoringName = "";
// for (let i = stringName.length-1; i >= 0; i--){
//     stringStoringName = stringStoringName + stringName.charAt(i);
// }
// console.log(stringStoringName == stringName ? "It's Palindrome" : "It's not Palindrome");



//? 2. String Reverse

// let stringName = prompt("enter stringName here");
// let reverseStringName = "";
// for (let i = stringName.length-1; i >= 0; i--){
//     reverseStringName = reverseStringName + stringName.charAt(i);
// }
// console.log(reverseStringName);

//? 3. Armstrong Number

// let num = Number(prompt("enter number here"));
// let temp = num;
// let sum = 0;
// while (temp > 0) {
//     rem = temp % 10;
//     sum = sum + rem * rem * rem;
//     temp = parseInt(temp / 10);
// }
// console.log(sum == num ? "Its Armstrong Number" : "Its not a Armstrong Number");

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




