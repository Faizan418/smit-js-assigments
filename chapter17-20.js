// // 1...) Declear and initialize an empty multidimensional array... (Array of array):

// let multiArray = [];



// // 2...) Declare and initialize a multidimensional array respresenting the following matrix:
// //      0123
// //      1012
// //      2101
// //      3210

// let matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1], [3, 2, 1, 0]];
// console.log(matrix);



// // 3...) Write a program to print numeric counting from 1 to 10...

// for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }



// // 4...) Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user...

// let tableNumber = prompt("Enter the table number:");
// let tableLength = prompt("Enter the length of the table:");
// for (let i = 1; i <= tableLength; i++) {
//     console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
// }



// // 5...) Write a program to print items of the following array using for loop:

// fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }



// // 6...) Generate the following series in your browser. See example output:

// //  a..) Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ...
// //  b..) Reverse counting: 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ...
// //  c..) Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ...
// //  d..) Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ...
// //  e..) Series: 2k, 4k, 6k, 8k, 10k, 12, 12k, 14k, 16k, 18k, 20k ...

// let count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log("Counting: " + "\n" + count);

// console.log("Reverse counting: " + "\n" + count.reverse());
//-------------------------------------------------------------------------------------------------
// let even = count.filter(num => num % 2 === 0);
// console.log("Even: " + "\n" + even);
//-------------------------------------------------------------------------------------------------
// let odd = count.filter(num => num % 2!== 0);
// console.log("Odd: " + "\n" + odd);
//-------------------------------------------------------------------------------------------------
// let series = count.map(num => num * 2);
// console.log("Series: " + "\n" + series);
//-------------------------------------------------------------------------------------------------



// // 7...) You have an array:
// // A = ["cake", "apple pie", "cookie", "chips", "patties"]
// // Write a program to enable "search by user input" in an array...
// // After searching, prompt the user whether the given item is found in the list or not. Example:

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = (prompt("Welcome to faizan's baker's what do you want to order sir/ma'am \n [ Cake, \n Apple pie, \n Cookie, \n Chips, \n Patties ]"));

// userInput = userInput.toLowerCase() ;
// let isFound = A.includes(userInput);

// if (isFound) {
//     console.log(`${userInput} is available in over bakery...`);
// } else {
//     console.log(`We are sorry, ${userInput} is not available in over bakery...`);
// }



// // 8...) Write a program to identify the largest number in the given array.

// A = [24, 53, 78, 91, 12]
// console.log("Array items: " + A);
// let largestNumber = Math.max(...A)
// console.log("The largest number in the given array is: " + largestNumber);



// // 9...) Write a program to identify the smallest number in the given array...

// A = [24, 53, 78, 91, 12]
// console.log("Array items: " + A);

// let smallestNumber = Math.min(...A)
// console.log("The smallest number in the given array is: " + smallestNumber);



// // 10...) Write a program to print multiples of 5 ranging 1 to 100 ...

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
// }
//     };


// function calculate(operation, num1, num2) {
//     switch(operation) {

//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         return num1 / num2;
//     case '%':
//         return num1 % num2;

//       default:
//         return "Invalid operation";
//     }
//   }
  
//   console.log(calculate('+', 5, 3));  
//   console.log(calculate('-', 4, 2));  
//   console.log(calculate('*', 5, 2));  
//   console.log(calculate('/', 5, 2));   
//   console.log(calculate('%', 5, 2));   
