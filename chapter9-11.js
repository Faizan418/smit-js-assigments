// //1...) Write a program to take "city" name as input from user. If user enters "Karachi", welcome the user like this: "Welcome to city of lights"...

// let cityName = prompt("Enter a city name.!");

// if(cityName === "karachi"){
//     var msg = ("Mobile nekaal karwy...");
// }
// else if(cityName === "lahore"){
//     var msg = ("Lahore daa pawa akhtar lawaa...");
// }else{
//     var msg = ("wrong..!");
// }
// document.write("Welcome to: " + msg + "<br>");


// //2...) Write a profram to take "gender" as input from user. If the user is male, give the message: Good Morning Sir, If the user is female, give the message: Good Morning Me'em...

// let gender = prompt("Pleace Enter your Gender...");

// if(gender === "male"){
//     var output = ("Good Morning sir,")
// }else if(gender === "female"){
//     var output = ("Good Morning Me'em,")
// }else{
//     var output = ("Pleace currect your answer!!")
// }
// document.write(output);


// //3...) Write a program to take input color of road traffic signal from the user & show the message according to this table: !........................... red:Must stop,  yellow:Ready to move,  Green:move now ..............................!

// let color = prompt("Enter color of road traffic signal...");

// if(color === "red"){
//     var message = ("Must stop..!");
// }else if(color === "yellow"){
//     var message = ("Ready to move..!");
// }else if(color === "green"){
//     var message = ("Move now..!");
// }else{
//     var message = ("Invalid color..!");
// }
// document.write(message);


//4...) Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25 litres, show the message "Please refill the fuel in your car"

//5...) Run this script, & check whether alert messsage would be displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("Given condition for variable a is true")
// }


// // 6...) Write a program to take input the marks otained in three subjects & total marks. Compute & show the resulting precentage on your page. Take percentage & compute grade as par following table:

// let SudentName = prompt('Pleace Enter Your Name...', NaN)
// let Totalmarks = 300;
// let Obtaine = prompt("Enter your Obtaine Mark's... 0 to 300");
// let percentage = Obtaine / Totalmarks * 100
// let Percentage = percentage;

// if(Percentage >= 76 && Percentage <= 100){
//     var Grade = ("A"); 
//     var Remarks = ("Exclent..!")
// }
// else if(Percentage >= 50 && Percentage <= 75){
//     var Grade = ("B")
//     var Remarks = ("Not bad..!")
// }
// else if(Percentage >= 33 && Percentage <= 49){
//     var Grade = ("C")
//     var Remarks = ("You Need Improve..!")
// }
// else{
//     var Grade = ("You are fail..!", NaN);
//     var Remarks = ("Shame on You..!", NaN)
// }
// document.write("<br>" +"Mark Sheet..." + "<br>" + "<br>")

// document.write("Sudent Name: " + SudentName + "<br>")
// document.write("Total Mark's: " + Totalmarks + "<br>")
// document.write("Obtaine Mark's: " + Obtaine + "<br>")
// document.write("Percentage: " + Percentage + "%" + "<br>")
// document.write("Grade: " + Grade + "<br>")
// document.write("Remark's: " + Remarks + "<br>")


// 7...) Guess game: Store asecret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
//  a..) If user's guesses the same number, show "Bingo! Correct Answer".
//  b..) If the guessed number +1 is the secret number, show "Close, enough to the correct answer".




// 8...) Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.




// 9...) Write a program that checks whether the given input is an even number or an odd number.



// // 10...) Write a program that takes temperature as input and shows a message based on following criteria:
// //  a..) T > 40 then "It is too hot outside."
// //  b..) T > 30 then "The Weather today is Normal."
// //  c..) T > 20 then "Today's weather is Cool."
// //  d..) T > 10 then "OMG! Today's weather is Cool!"

// let temperature = prompt("Enter Temperature...0 to 40");

// if(temperature >= 31 && temperature <= 40){
//     var message = ("It is too hot outside.");
// }else if(temperature >= 21 && temperature <= 30){
//     var message = ("The weather today is Normal.");
// }else if(temperature >= 11 && temperature <= 20){
//     var message = ("Today's weather is Cool.");
// }else if(temperature >= 0 && temperature <= 10){
//     var message = ("OMG! Today's weather is Cool!");
// }else{
//     var message = ("Invalid Temperature.");
// }
// document.write(message);



// // 11...) Write a program to create a calculator for +, -, *, / % operations. using if statements. Take the following input:
// //  a..) First number..
// //  b..) Second number..
// //  c..) Operation (+, -, *, /, %)..
// // Compute & show the Calculator result to user...

// let num1 = prompt("Enter First Number...");
// let num2 = prompt("Enter Second Number...");
// let operator = prompt("Enter Operator (+, -, *, /, %)...");

// let result;

// if(operator === "+"){
//     result = Number(num1) + Number(num2);
// }else if(operator === "-"){
//     result = Number(num1) - Number(num2);
// }else if(operator === "*"){
//     result = Number(num1) * Number(num2);
// }else if(operator === "/"){
//     if(num2 === "0"){
//         alert("Cannot divide by zero!");
//     }else{
//         result = Number(num1) / Number(num2);}
// }else if(operator === "%"){
//     if(num2 === "0"){
//         alert("Cannot percentage by zero!");
//     }else{
//         result = Number(num1) % Number(num2);}
// }
// else{
//     alert("Invalid operator!");}
// document.write("Result: " + result);

