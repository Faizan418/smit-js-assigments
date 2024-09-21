//1...) Write a program that take two numbers & add them in a new variable. Show the result in your browser.
const num1 = 3;
const num2 = 5;

let result = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is: " + result + "<br>" + "<br>");


//2...) Repeat task 1 for subtraction, multiplication, and division and modulus operations.

// let result = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is: " + result + "<br>");


// let result = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is: " + result + "<br>");


// let result = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is: " + result + "<br>");


// let result = num1 ** num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is: " + result + "<br>");



//3...) Do the following using JS Mathematic Expressions:


//  a..) Declare a variable...
let num = null;
//  b..) Show the value of variable in your browser like "calue after variable declaration is: ??"...
document.write(" Value after variable declaration is:undefined<br>") ;
//  c..) Initialize the variable wiht some number...
num = 8;
//  d..) Show the value of variable in your browser like "Initial value is: ??"...
document.write("Initial value is:" + num + "<br>");
//  e..) Increment the variable...
num++;
//  f..) Show the value of variable in your browser like "Value after increment is:6"...
document.write("Value after increment is:" + num + "<br>");
//  g..) Add 7 to the variable...
num += 7;
//  h..) Show the value of variable in your browser like "Value after adding is: 13"...
document.write("Value after adding is:" + num + "<br>");
//  i..) Decrement the variable...
num--;
//  j..) Show the value of variable in your browser like "Value after decrement is: 12"...
document.write("Value after decrement is:" + num + "<br>");
//  k..) Show the remainder after dividing the variable's value by 3...
num /= 3;
//  l..) Output: "The remainder is: 5"
document.write("The remainder is:" + num + "<br>"+ "<br>");



//4...) Cost of 1 movie ticket is 600 PKR. 
//Write a script to store  
//ticket price in a variable & calculate the cost of 5 tickets. 
//To a movie. 
//Example Output:

let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write(" Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR" + "<br>" + "<br>");



//5...) Write a scritp to display multiplication table of any number in your browser.E.g...

let tableNumber = 7;
document.write("Table of " + tableNumber + "<br>" + "<br>");
    document.write(tableNumber + " x 1 " + " = " + tableNumber * 1 + "<br>"); 
    document.write(tableNumber + " x 2 " + " = " + tableNumber * 2 + "<br>");
    document.write(tableNumber + " x 3 " + " = " + tableNumber * 3 + "<br>");
    document.write(tableNumber + " x 4 " + " = " + tableNumber * 4 + "<br>");
    document.write(tableNumber + " x 5 " + " = " + tableNumber * 5 + "<br>");
    document.write(tableNumber + " x 6 " + " = " + tableNumber * 6 + "<br>");
    document.write(tableNumber + " x 7 " + " = " + tableNumber * 7 + "<br>");
    document.write(tableNumber + " x 8 " + " = " + tableNumber * 8 + "<br>");
    document.write(tableNumber + " x 9 " + " = " + tableNumber * 9 + "<br>");
    document.write(tableNumber + " x 10 " + " = " + tableNumber * 10 + "<br>");


//6...)

//7...) Write program to implement checkout process of a shoppting cart system for an e-commerce website. Store the following in variables...
//  a..) price of item 1...
//  b..) price of item 2...
//  c..) Ordered quantity of item 1...
//  d..) Ordered quantity of item 2...
//  e..) Shipping charges...
// Compute the total cost & show the receipt in your browser...

document.write("<br>" + "<br>" + "Shopping Cart.........." + "<br>" + "<br>");

let item1Price = 200;
let item1Quantity = 2;

let item2Price = 350;
let item2Quantity = 1;

let shippingCharges = 100;

let totalItem1Cost = item1Price * item1Quantity;
let totalItem2Cost = item2Price * item2Quantity;

let totalPrice = totalItem1Cost + totalItem2Cost + shippingCharges;

document.write("Item 1 Price: " + item1Price + "<br>");
document.write("Quantity of item1: " + item1Quantity + "<br>");

document.write("Item 2 Price: " + item2Price + "<br>");
document.write("Quantity of item2: " + item2Quantity + "<br>");

document.write("Shipping Charges: " + shippingCharges + "<br>");

document.write("Total Price: " + totalPrice + "<br>");



//8...) Store total marks & marks obtained by a student in 2 variables. compute the percentage & show the result in your browser.

document.write("<br>" + "<br>" + "Student Performance Report.........." + "<br>");

let totalMarks = 1000;
let marksObtained = 850;
let percentage = marksObtained / totalMarks * 100;

document.write("<br>" + "Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");

document.write("Percentage: " + percentage + "%" + "<br>");


