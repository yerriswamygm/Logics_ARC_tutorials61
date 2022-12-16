//! 1. How to define a class with properties and methods in JS
//? A class declared with a name which acts as its identifier. we can use name to
//? create new objects using the keyword new

// class Car{
//     constructor(model, name) {
//         this.model = model;
//         this.name = name;
//     }
//     start() {
//         console.log(`Name of the car : ${this.name}`)
//     }
// }
// bmw = new Car(620, "Sports edition");
// bmw.start();

//! 2. How to implement class inheritance in JS
//? A class can be extended by another class and the new class is inherit all of its parent class methods
//? the object that initializes the child class will then be able to use methods from both classes

// class Car {
//   constructor(model, name) {
//     this.model = model;
//     this.name = name;
//   }
//   start() {
//     console.log(`Name of the car : ${this.name}`);
//   }
//   end() {
//     console.log("car stopped");
//   }
// }

// class ElectricCar extends Car {
//   dashboard() {
//     console.log("I am child method");
//   }
//   start() {
//     super.start();
//     super.end();
//     this.dashboard();
//   }
// }

// evCar = new ElectricCar("Tesla", "A320");
// evCar.start();

//! 3. How to find duplicate elements in a given array
//? To find duplicates in an array, we can use of Array filter method
//? Filter method takes 3 parameters, element, index and array on which filter is applied
//? Then we check for the indexOf each element and return whichever does not match with the index

// let duplicatedArray = [14, 23, 6, 6, 14, 56, 87, 14];
// let duplicates = duplicatedArray.filter((element, index, array) => array.indexOf(element) !== index);
// console.log(duplicates);

//! 4. How to find the count of duplicates in an array
//? The fix will be the same for both number array as well as array of strings
//? We will make use of the array reduce method and using an object instance, we will check if the key value is present in object if yes, increment or else return 1

// const months = ["May", "Feb", "Feb", "April", "June", "May", "Feb", "July", "December"];
// const countOfDuplicates = months.reduce((obj, month) => {
//     if (obj[month] == undefined) {
//         obj[month] = 1;
//         return obj;
//     } else {
//         obj[month]++;
//         return obj;
//     }
// }, {});
// console.log(countOfDuplicates);

//! 5. How to check if a given number is integer
//? To check if a given variable is integer, we can make use of the isNaN() method
//? This method can also be used to check if a variable is not an integer

// const validateValue = 10.5;
// console.log(isNaN(validateValue));  // false

// const validateValue1 = 10.5;
// console.log(!isNaN(validateValue1));  // true

// const validateValue3 = "hello";
// console.log(isNaN(validateValue3));  // true

// const validateValue4 = ["hii"];
// console.log(isNaN(validateValue4));  // false

//! 6. Explain difference between Object.freeze() vs const
//? const applies to bindings("variables"), it creates an immutable binding, i.e you cannot assign a new value to the binding
//? Object.freeze works on values and more specifically, object values. it makes an object immutable i.e you cannot change its properties

// const month = "July";
// month = "Feb";
// console.log(month);    // Uncaught TypeError: Assignment to constant variable.

// "use strict"
// let person = {
//   name: "ARC Tutorials",
// };
// Object.freeze(person);
// person.name = "Hello World";
// console.log(person);

//! 7. How to sort a Number array
//? To sort an array of numbers, we will have to use a comparison method inside the sort method

// const unsortedArr = [10, 4, 29, 34, 63, 3, 87, 72];
// const sortedArr = unsortedArr.sort((a, b) => {
//   return a - b;
// });
// console.log(sortedArr);

//! 8. How to sort a given array of strings
//? To sort array of strings we will have to use a comparison method inside the sort method

// const months = ["Jan", "Feb", "March", "April", "May", "June", "July"];
// console.log(months.sort());

//! 9. How to find unique values in an array
//? To find unique values in an array, we are going to use the array filter method and check if the value is present using indexOf method

// const Ids = [10, 4, 5, 65, 34, 23, 85, 10, 34, 4, 5];
// const uniqueValues = Ids.filter((value, index, array) => array.indexOf(value) == index);
// console.log(uniqueValues);

//! 10. How to find unique values from an array in sorted order
//? we will be using the array filter method first and check if the element is present using the indexOf and then we will use the sort method to sort the array elements

// const Ids = [23, 45, 64, 67, 23, 45, 98, 75, 69];
// const sortedUniqueValues = Ids.filter((value, index, array) => array.indexOf(value) == index);
// sortedUniqueValues.sort((a, b) => {
//     return a - b;
// });
// console.log(sortedUniqueValues);

//! 11. How to find maximum value in a numbered array
//? to find maximum value in a numbered array, we are implementing a method which will find max value
//? inside the method we are making use of the array reduce method and for each element, we will check if the value is greater than the previous one.

// const numberArr = [5, 45, 154, 163, 87, 72, 98, 12, 10];
// function findMaxValue(arr) {
//     return arr.reduce(function (prev, curr) {
//         return prev > curr ? prev : curr;
//   })
// }
// console.log(findMaxValue(numberArr));

//! 12. How to find minimum value in a numbered array
//? to find minimum value in a numbered array, we are implementing a method, which will find minimum value
//? inside the method, we are making use the array reduce method and for each element, we will check if the value is less than the previous one

// const studentIds = [10, 2, 5, 7, 8, 13, 3, 75, 1];
// function findMinimum(arr) {
//   return arr.reduce(function (prev, curr) {
//     return prev < curr ? prev : curr;
//   });
// }
// console.log(findMinimum(studentIds));

//! 13. How to find the average og the numbers in the numbered array
//? using the array reduce method, we will get total count first and then we will get total length of the array
//? divide the total sum with the length of the array and we get the average of the numbers in the array

// const studentIds = [59, 53, 23, 1, 67, 84, 10];
// const totalCount = studentIds.reduce((a, b) => a + b, 0);
// const arrLength = studentIds.length;
// console.log(totalCount / arrLength);

//! 14. How can you uppercase the first character in a string array
// to capitalize the first character of every element in the array, we will have to get the first character using charAt method and then apply to toUpperCase and finally we will concatenate all the other characters using substr(1);

// const days = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];
// let updatedDays = [];
// for (day of days) {
//     day = day.charAt(0).toUpperCase() + day.substring(1);
//     updatedDays.push(day);
// }
// console.log(updatedDays);

//! 15. How to make a sentence out of given array
//? we need to use array join method to combine elements from a given array

// const elementsToJoin = [
//   "Welcome",
//   "to",
//   "ARC Tutorials",
//   "Javascript",
//   "Tutorials",
// ];
// var finalOutput = elementsToJoin.join(" ");
// console.log(finalOutput);

//! 16. How to check if an array contains any element of another array
//? to check if the array contains elements in another array, we will make use of the array includes method to see, if it includes any values from the array

// const studentIds = [1, 2, 34, 5, 6, 7, 8];
// // const passedIds = [2, 3, 7, 95]; // true
// const passedIds = [95,78,49];  // false
// let result = studentIds.some(ele => passedIds.includes(ele));
// console.log(result);

//! 17. Given two strings, how can you check if the strings are anagram for each other
//? anagram : a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman
//? steps : first we will make them lowercase, then we will sort the strings and finally we will join them back, the only thing then pending will be to compare the strings

// const string1 = "Mary";
// const string2 = "Army";
// function checkAnagram(string1, string2) {
//     var a = string1.toLowerCase();
//     var b = string2.toLowerCase();
//     a = a.split("").sort().join("");
//     b = b.split("").sort().join("");

//     return a === b;
// }
// console.log(checkAnagram(string1, string2));  // true

//! 18. How can you extract a few fields from the given JSON object and form a new array
//? we will need to use the map() method, we will pass the element and then only return the required key from that element

// const input = {
//   students: [
//     {
//       name: "ARC Tutorials",
//       id: 10,
//       email: "test1!@gmail.com",
//     },
//     {
//       name: "Soorya",
//       id: 11,
//       email: "test2!@gmail.com",
//     },
//     {
//       name: "Ram",
//       id: 12,
//       email: "test3!@gmail.com",
//     },
//   ],
// };

// const op = input.students.map(function (item) {
//     let studObj = {
//         name: item.name,
//         email: item.email,
//         id:item.id,
//     }
//     return studObj;
// })
// console.log(op);

//! 19. Filter a given object based on certain conditions and return the corresponding object
// const input = {
//   students: [
//     {
//       name: "Manjunath",
//       id: 10,
//       salary: 25000,
//     },
//     {
//       name: "Manjunath",
//       id: 15,
//       salary: 25000,
//     },
//     {
//       name: "Manjunath",
//       id: 20,
//       salary: 25000,
//     },
//     {
//       name: "Manjunath",
//       id: 25,
//       salary: 25000,
//     },
//   ],
// };

// var op = input.students.filter(function (item) {
//   return item.id > 10 ? item : "";
// });
// console.log(op);

//! note: true=1, false=0 : these true false values comparing with the 3rd value
// console.log(3 > 2 > 1);  //false => true>1 that means 1>1  so o/p false
// console.log(3 < 2 < 1);  //true => true<1 that means 1<1  so o/p true
// console.log(1 < 2 < 3);  //true  => true<3 that means 1<3 so o/p true
// console.log(1 > 2 > 3);  //false => false>3 that means 0>3 so o/p false

//! 20. Given an array of strings, reverse each word in the sentence
//? we will make use the string reverse, split and join to reverse each word in the sentence
// const str = "welcome to ARC Tutorials";
// var reverseStr = reverseStrBySeparator(str, "");
// function reverseStrBySeparator(sampleInput, separator) {
//   return sampleInput.split(separator).reverse().join(separator);
// }
// console.log(reverseStr);

//! 21.How to check if the variable passed is an array or not
//? most modern browsers support array method isArray, so we can use this method to determine if a given object is an array or not
// const studentArr = [25, 35, 65, 48, 96, 56];
// console.log(Array.isArray(studentArr));

//! 22. How to empty an array
//? assign[] to array
//? n.length=0;
//? while(n.length>0){n.pop()}
//? n.splice(0,n.length);

// let students = [12, 25, 63, 5, 89, 56];
//? technique1
// students = [];
//? technique2
// students.length = 0;
//? //? technique3
// while(students.length > 0) {
//   students.pop();
// }
//? //? technique4
// students.splice(0, students.length);

// console.log(students);
// console.log(students.length);

//! 23. what is IIFEs(Immediately Invoked function expression)
//? Its an Immediately invoked function expression (IIFEs), it executes immediately after its created
// function getData() {
//     console.log("Hii I am from regular method");
// }
// getData();
// (function getData() {
//   console.log("Hii I am from IIFE method");
// })();

//! 24. How do you sort and reverse an array without changing the original array
//? we can use slice() to make copy then reverse() it.

// let students = ["a", "b", "c", "d", "e", "f"];
// const newStudentArr = students.slice().reverse();
// console.log(newStudentArr);
// console.log(students);

//! 25. Write a function to check if a given string is Palindrome or not
//? we will need to write custom method using string method like replace, toLowerCase and reverse and finally join the string
//? ex : madam, level, appa, amma, malayalam
// function checkPalindrome(str) {
//   str = str.toLowerCase();
//     return (str === str.split("").reverse().join(""));
// }
// console.log(checkPalindrome("Madam")); //true
// console.log(checkPalindrome("Level")); //true
// console.log(checkPalindrome("Hello")); //false

//! 26. How can you combine two arrays into a third array using spread operator
//? two combine two or more arrays, we will use the spread operator
// let firstArr = [1, 2, 3, 4, 5, 6];
// let secondArr = [10, 20, 30, 40, 50, 60];
// let thirdArr = [...firstArr, ...secondArr];
// console.log(thirdArr);

// let fourthArr = firstArr.concat(secondArr);
// console.log(fourthArr);

//! 27. What is spread operator
//? spread operator allows an iterable to expand in places where 0+ arguments are  expected
//? it is mostly used in the variable array where there is more than one values are expected
//? it allows us the privilege to obtain a list parameters from an array
//? Syntax :  var variableName1=[...value];
//? let arr = [1,2,3];
//? let arr2 = [4, 5];
//? arr3=[...arr, ...arr2];
// //? console.log(arr3);   // [1,2,3,4,5];

// let students = [1, 2, 3];
// let courses = [4, 5];
// let lab = [...students, ...courses];
// console.log(lab);

// function readData(a, b, c) {
//   console.log(a);
//   console.log(b);
//   // console.log(c);
//   if (c) {
//     console.log(c);
//   }
// }
// readData(...courses);

//! 28. Different types of datatypes in javascript
//? number
//? string
//? boolean
//? null
//? symbol
//? undefined
//? object

// var tax = 40.67;

// var isActive = false;
// console.log(isActive); // false

// var salary;
// console.log(salary);  // undefined

// var isTaxable = null;
// console.log(isTaxable); // null

// console.log(null); //null

//! 29. How can you create an object in JS
//? var emp={
//? name: "Ritesh",
//? id:20,
//? }

// var book = {
//   id: 10,
//   book_name: "",
// };
// console.log(book);

// var contact = {
//   name: "ARC",
//   id: 10,
//   preferences: {
//     pageCount: 100,
//     defaultSort: "lastname",
//     },
//     contactMechanism: [
//         {
//             phone: 123456,
//             type: "Direct",
//         },
//         {
//             phone: 456789,
//             type:"Mobile",
//         }
//   ]
// };
// console.log(contact);
// console.log(contact.preferences);
// console.log(contact.preferences.contactMechanism);

//! 30. What is the purpose of this operator in JS
//? In JS this keyword belongs refers to the object it belong to : this has different values depending on where it is used, In a method this refers to the owner object in a function, in a function this refers to the global object

// class c1 {
//   constructor(stateTax, centreTax) {
//     this.stateTax = stateTax;
//     this.centreTax = centreTax;
//   }
//   calculateTax() {
//     console.log(this.stateTax);
//     console.log("this is function 1");
//   }
//   readCredentials() {
//     this.calculateTax();
//     console.log(this.centreTax);
//     console.log("this is function 2");
//   }
// }
// a = new c1(16, 16);
// a.calculateTax();
// a.readCredentials();

//?! 31. What is typeof operator in JS
//? the typeof operator is used to get the data type of its operand
//? the operand can be either a literal or a data structure such as a variable, a function, or an object
//? it is a unary operator that is placed before its single operand, which can be of any type
//? its value is a string indicating the datatype of the operand

// var tax = "";
// console.log(typeof(tax));  // string

// var tax = null;
// console.log(typeof tax);  // object

// console.log(null); // null

// var tax =true;
// console.log(typeof tax);  // boolean

// var tax;
// console.log(typeof tax);  // undefined

// var tax = 10;
// console.log(typeof tax);  // number

// var tax = NaN;
// console.log(typeof tax);   // number

// console.log(NaN === NaN); // false
// console.log(NaN == NaN);  // false
// console.log(NaN = NaN);  //NaN

//! 32. What is the difference b/w the operators  ==  and   ====
//? the main difference is that formerly compares variable by making type correction
//? ex : if you compare number with a string with numeric literal, == allows that, but === doesn't allow that, because it not only checks the value but also type of two variables are not of the same type === return false, while == return true

// var tax = 10;
// var taxStr = "10";
// if (tax == taxStr) {
//     console.log("values are matching");
// } else {
//     console.log("values are not matching");
// }

// if (tax === taxStr) {
//   console.log("values are matching");
// } else {
//   console.log("values are not matching");
// }

//! 33. What would be the result of 13+6+"2"
// console.log(13 + 6 + "2");  // 192 concatenation : here number is converted into string
// console.log(13 - 6 - "2");  // 5 here string is converted into number

//! 34. What do mean by null in JS
//? the null value is used to represent no value or no object
//? it implies no object or null string, no valid boolean value, no number and no array object

// var s = null;
// console.log(s);  // null
// console.log(typeof s);   // object

//! 35. How to detect clients operating system
//? in order to detect the operating system on the client machine, the navigator.platform string(property) should be used

// console.log(navigator.vendor); //Google Inc.
// console.log(navigator.platform); //Win32
// console.log(navigator.product); //Gecko
// console.log(navigator.productSub); //20030107
// console.log(navigator.permissions); //Permissions {}
// console.log(navigator.appName); //Netscape
// console.log(navigator.appVersion);     //5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
// console.log(navigator.appCodeName);   //Mozilla

//! 36. Of what JS type is an array
//? typeof is an array is always object

// var students = [10, 20, 30, 40, 50];
// console.log(students);
// console.log(typeof students);  // object

// var employees = ["Ritesh", "Chandru", "Sangamesh"];
// console.log(employees);
// console.log(typeof employees);   // object

//! 37. What properties tell you the length of the JS array
//? Array.length

// var students = [10, 20, 30, 40, 50];
// console.log(students);
// console.log(students.length); //5
// console.log(typeof students);  // object

// var employees = ["Ritesh", "Chandru", "Sangamesh"];
// console.log(employees);
// console.log(employees.length);  //3
// console.log(typeof employees);   // object

//! 38. What does array.shift() method return
//? it removes first element from the array and returns that element

// var employees = ["Ritesh", "Chandru", "Sangamesh"];
// console.log(employees);
// console.log(employees.length);  //3
// console.log(typeof employees);   // object

// let arrMethod = employees.shift();
// console.log(arrMethod);
// console.log(employees);

//! 39. Explain array.push() method
//? this method adds a new element to the end of the array
//? when doing so, arrays length property increases by one
//? after adding the new element to the end of the array, this method returns the new length of the array

// var employees = ["Ritesh", "Chandru", "Sangamesh"];
// console.log(employees);
// console.log(employees.length);  //3
// console.log(typeof employees);   // object

// let arrMethod = employees.push("Sanjay");
// console.log(arrMethod); //4
// console.log(employees.length); //4
// console.log(employees);

//! 40. Explain array.pop() method
//? this method removes the last element from the end of the array
//? when doing so,the arrays length property decreases by one
//?after removing the last element from the end of the array, this method returns the array element that was removed

// var employees = ["Ritesh", "Chandru", "Sangamesh"];
// console.log(employees);
// console.log(employees.length); //3
// console.log(typeof employees); // object

// let arrMethod = employees.pop();
// console.log(arrMethod); // Sangamesh
// console.log(employees.length); //2
// console.log(employees);

// let studentIds = [10, 20, 30, 40, 50, 60, 70];
// let Ids = studentIds.pop();
// console.log(Ids);  //70
// console.log(studentIds);

//! 41. Explain array.shift() method
//? this method removes the first element from the beginning of the array
//? when doing so,the arrays length property decreases by one
//? after removing the first element from the beginning of the array, this method returns the array element that was removed

// let students = [10, 20, 30, 40, 50];

// console.log(students.shift()); //10
// console.log(students.pop());  //50
// console.log(students);

// let employees = ["Aliston", "Manoj", "Amith", "Siddarth"];
// console.log(employees.shift());  //Aliston
// console.log(employees.pop());  //Siddarth
// console.log(employees);

//! 42. Explain array.unshift() method
//? this method adds a new element to the beginning of the array
//? when doing so, the arrays length property increases by one
//? after adding the new element to the beginning of the array, this method return the new length of the array
// let students = [10, 20, 30, 40, 50];
// console.log(students.unshift(3, 4, 5));
// console.log(students.push(60, 70, 80));
// console.log(students.length);
// console.log(students);
// console.log(students.shift());
// console.log(students.pop());
// console.log(students);

//! 43. Explain Template literals inES6
//? template literals are strings with embedded code & variables inside them
//? template literals allows us concatenation and interpolation in much ,more clear and easy way

// let city = "Raichur";
// let state = "Karnataka";
// let cityState = ` You selected city is ${city} & state is ${state}`;
// console.log(cityState);

//! 44. Whats the output following code
// var y = 1;
// if (function f() { }){
//     y += typeof f;
// }
// console.log(y); //1undefined

//! 45. What is NaN, What is its type
//? NaN - not a number
//? the special value results from an operation that could not be performed either because one of the operands was non numeric (ex : "abc"/4) or because the result of the operation is non numeric.
//? while this seems straightforward enough, there are a couple of somewhat surprising characteristics of NaN that can result in hair pulling bugs if one is not aware of them
//? for one thing, although NaN means "Not a Number", its type is, believe or not, Number
//? console.log(typeof ==="number")  //true
//? additionally, NaN compared to anything - even itself - is false
//? console.log(NaN===NaN);   //false

// console.log(typeof NaN);  // number
// console.log(typeof NaN === "number");   // true
// console.log(typeof NaN === NaN);   // false

//! 46. whats the output of following code
// function foo1() {
//     return {
//         bar: "hello",
//     }
// }
// console.log(foo1()); // returns object

// function foo2() {
//   return {
//     bar: "hello",
//   };
// }
// console.log(foo2());  // returns object

//! 47. Whats the output of bellow code
//? note : true=1,  false=0
// console.log(false == "0"); //true
// console.log(false === "0"); //false

//! 48. What will be code below output
// console.log(3 > 2 > 1);   // false
// console.log(3 < 2 < 1);   // true
// console.log(1 > 2 > 3);   // false
// console.log(1 < 2 < 3);   // true

//! 49. How do you clone an object
//? var obj = { a: 1, b: 2 };
//? var objclone = Object.assign({}, obj);
// var student = { name: "Sandeep", Id: 20, Dept: "Mech" };
// var intermediateState = { percentage: "65" };
// var newStudent = Object.assign(intermediateState, student);
// console.log(newStudent);

//! 50. Which keywords are used to handle exceptions
//? Try...Catch---finally is used to handle exceptions in JS'
//? try{}
//? catch(exp){}
//? finally{
//? code runs either finishes successfully or after catch
//? }

//! 51. What is variable typing
//? variable typing is used to assign different value of a different/same datatype to an already existing value Ex: a number value can be assigned to a variable and then assign string to the same variable

// let i = 10;
// i = "Testyantra";
// console.log(i); //Testyantra
// i = true;
// console.log(i);   //boolean : true

//! 52. How are object properties assigned
//? obj["class"]=12;
//? obj.class=12;
// let student = {};
// student["name"] = "Rashid";
// student.lastname = "Mullasab";
// console.log(student);    // {name: 'Rashid', lastname: 'Mullasab'}

//! 53. Explain window.onload and onDocumentReady
//? the onload function is not run until all the information on the page is loaded.this leads to a substantial delay before any code is executed
//? onDocumentReady loads the code just after the DOM is loaded. this allows early manipulation of the code

//! 54. Define event bubbling
//? JS allows DOM elements to be nested inside each other
//? in such case, if the handler of the child is clicked,the handler of parent will also work as if it were clicked too

//? note : event capturing-  from parent to child
//? note : event bubbling -  from child to parent
//? note : event targeting - default one
//? note : event delegation -event capturing+event bubbling+event targeting
//? note : by default event bubbling is true(that means parent to child)

//! 55. Is JS case sensitive
//? Yes JS is case sensitive
//? parseInt is not equal to parseint
//? built-in methods in camelCase
// function getStatus() {
//   if (document.getElementById("checkbox").checked) {
//     console.log("checkbox is checked");
//   } else {
//     console.log("checkbox is not checked");
//   }
// }

//! 56. What boolean operators can be used in JS
//? operators which always result in either true or false called as boolean operators
//? greater than >
//? less than <
//? AND operator &&
//? OR operator ||
//? NOT operator !

//! 57. What is the role of break & continue statements
//? break statement is used to come out of the current loop
//? the continue statement continues the current loop with a new occurrence

// function getStatusById() {
//   for (let i = 0; i < 10; i++) {
//     if (i == 10) {
//       break;
//     }
//     if (i == 4) {
//       continue;
//     }
//     console.log(i);
//   }
// }
// getStatusById();

//! 58. Define unescape() and escape() functions
//? the escape()  function is responsible for coding a string so as to make the transfer of the information from one computer to other, across a network
//? the unescape() function is very important as it decodes the coded string

// function getStatusById() {
//   console.log(escape("hello i am from TYSS")); //hello%20i%20am%20from%20TYSS
//   console.log(unescape("hello%20i%20am%20from%20TYSS"));  //hello i am from TYSS
//   for (let i = 0; i < 10; i++) {
//     if (i == 10) {
//       break;
//     }
//     if (i == 4) {
//       continue;
//     }
//     console.log(i);
//   }
// }
// getStatusById();

//! 59. Whats the output of following code
// var students = ["Ranjan", "Shreyas", "Manish", "Ritesh", "Amith"];
// console.log(students.length);  //5
// delete students[2];
// console.log("students length after deletion is:" + students.length);  //5

//! 60. What is the way to get the status of a checkbox
//? if the checkbox will be checked , this alert will return true
//? properties are assigned to objects in the following way
//? console.log(document.getElementById("checkbox1").checked)

// function getStatus() {
//   if (document.getElementById("checkbox").checked) {
//     console.log("checkbox is checked");
//   } else {
//     console.log("checkbox is not checked");
//   }
// }
// getStatus();

//! 61. Is it possible to write a multiline string in JS
//? Yes JS provides the facility to write a string in multiple lines
//? we can write multi-line string using the following three approaches
//? using backticks
//? using + operator
//? using \ backslash
// let str = `this is the first line
// this is the second line
// this is the third line`;
// console.log(str);
// str = str + "this is second line";