// // 1...) Write a program that takes two user inputs for first and last name using prompt and marge tham  in a new variable titled fullName. Greet the user using his full name.

// let inp1 = prompt("Enter a fist name...");
// let inp2 = prompt("Enter a last name...");
// let fullName = inp1 + " " + inp2;
// console.log("Hello, " + fullName);



// // 2...) Write a program takes a user input about his favorite mobile phone model. Find and display the length of user input in your browser: 
// // My favorite mobile phone is: Samsung Galaxy S6 Edge Plus Length of Sting: 28................

// let userInput = prompt("Enter a favorite mobile phone model...");
// let lengthOfInput = userInput.length;
// console.log("My favorite mobile phone is: " + userInput + " Length of the String: " + lengthOfInput);



// // 3...) Write a program to find the index of latter "n" in the word "Pakistan" and display the result in your browser:
// // String: Pakistan .....
// // Index of 'n': 7 ......

// let word = "Pakistan";
// let n = "n";
// let index = word.indexOf(n);
// console.log("Index of '" + n + "': " + index);



// // 4...) Write a program to find the last index of letter "l" in the world "Hello World" and display the result in your browser:
// // String: Hello World ......
// // Last index of 'l': 9 .....

// let word = "Hello World ";
// let lastIndex = word.lastIndexOf("l");
// console.log("String: " + word + "\n\t" + "Last index of 'l': " + lastIndex);



// // 5...) Write a program to find the character at 3rd index in the word "Pakistan"  and display the result in your browser:
// // String: Pakistan .....
// // Character at index 3: i ......

// let word = "Pakistan";
// let character = word.charAt(3);
// console.log("String: " + word + "\n\t" + " Character at index 3: " + character);


// // 6...) Repeat Q1 using string concat() method...

// let inp1 = prompt("Enter a fist name...");
// let inp2 = prompt("Enter a last name...");

// let fullName = inp1.concat(" "+ inp2);
// console.log(fullName);



// // 7...) Write a program to replace the "Hyder" to "Islam" in the word "Hyderabad" and display the result in your browser:
// // City: Hyderabad ....
// // After replace Islamabad ....

// let city = "Hyderabad";
// let updatedCity = city.replace("Hyder", "Islam");
// console.log("City: " + city + "\n\t" + "After replace Islamabad: " + updatedCity);


// // 8...) Write a program to replace all occurrences of 'and' in the string with '&' disply the result in your browser...
// // let message = "Ali and sami are best friends. They play circket and football to gather..."

// let message = "Ali and sami are best friends. They play circket and football to gather ..."
// let updatedMessage = message.replace(/and/g, "&");
// console.log(updatedMessage);



// // 9...) Write a program to convert a string '473' to a number. 473 display the value & types in your browser:
// // Value: 473
// // Type: Sting
// // Value: 473
// // Type: Sting

// let str = "473";
// let num = parseInt(str);

// console.log("Value: " + str);
// console.log("Type: " + typeof str);
// console.log("Value: " + num);
// console.log("Type: " + typeof num);



// // 10...) Write a program that take user Input. Convert and show the input in capital letters:
// // User Input: peanuts
// // Upper case: PEANUTS

// let userInput = prompt("Enter a string...");
// let upperCase = userInput.toUpperCase();
// console.log("User Input: " + userInput);
// console.log("Upper case: " + upperCase);


// // 11...) Write a program that take user Input. Convert and show the input in tital case:
// // User Input: javascript
// // Tital case: Javascript

// let userInput = prompt("Enter a string...");
// let titalCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// console.log("User Input: " + userInput);
// console.log("Tital case: " + titalCase);


// // 12...) Write a program that converts the variable num to string:
// // let num = 35.36;
// // Remove the dot to display '3536' display in your browser ...

// let num = 35.36;
// let str = num.toString().replace('.', "");
// console.log(str);


// //-------------------------------------Extra----------------------------------------------
// // Create a method palindrome words check with space | UpperCase & LowerCase 

// var UserInput = prompt("Enter a word");
// let word = UserInput.toLowerCase()
// var splitstr = word.split("").reverse().join("");
// if(word === splitstr){
//      console.log(UserInput+"\n"+"\t"+"It's a palindrome word !")
// }else{
//      console.log(UserInput+"\n"+"\t"+"It's not a palindrome word !")
// }