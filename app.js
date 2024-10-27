//! Chapter no 21 to 25 start

//? Question no 1 start

// var userInput1 = prompt("Enter your first name");
// var userInput2 = prompt("Enter your last name");

// var sum = userInput1 + userInput2;

// alert("Welcome" + " " + sum);

//? Question no 1 end

//? Question no 2 start

// var favoritePhone = "Samsung Galaxy S6 Edge Plus";

// var lengthOfInput = favoritePhone.length;

// document.write("Your favorite phone is: ",favoritePhone);

// document.write("<br>");

// document.write("Length of string: ",lengthOfInput);

//? Question no 2 end

//? Question no 3 start

// var Word = "Pakistani";

// var findLetter = "n";

// document.write("String:",Word);

// document.write("<br>");

// for (var i = 0; i < Word.length; i++) {
//     if(Word[i] == findLetter){
//         document.write('Index of "n": ',i);
//         break;
//     }
// }

//? Question no 3 end

//? Question no 4 start

// var Word = "Hello World";

// var findLetter = "l";

// document.write("String:",Word);

// document.write("<br>");

// for (var i = Word.length; i >= 0; i--) {
//     if(Word[i] == findLetter){
//         document.write('Index of "l": ',i);
//         break;
//     }
// }

//? Question no 4 end

//? Question no 5 start

// var Word = "Pakistani";

// var findLetter = Number(prompt("Enter the index number to find the character"));

// document.write("String:",Word);

// document.write("<br>");

// for (var i = 0; i <= findLetter-1; i++) {
//     if(i == findLetter-1){
//         document.write("Character at 3 index is:",Word[i]);
//     }
// }

//? Question no 5 end

//? Question no 6 start

// var userInput1 = prompt("Enter your first name");
// var userInput2 = prompt("Enter your last name");

// alert("Welcome" + " " +userInput1.concat(userInput2));

//? Question no 6 end

//? Question no 7 start

// var word = "Hyderabad";

// var replaceWord = "Islam";

// var delWord = "Hyder";

// document.write("String:",word);

// document.write("<br>");

// var updatedWord = word.replace(delWord,replaceWord);

// document.write("After replacement:",updatedWord);

//? Question no 7 end

//? Question no 8 start

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var delWord = "and";

// var replaceWord = "&";

// var updatedWord = "";

// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i, i + delWord) == delWord) {
//         updatedWord = message.slice(0, i) + replaceWord + message.slice(i + delWord.length);
//     }
// }
// console.log(updatedWord);

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = "&";
// var delWord = "and";
// var updatedArr = "";

// for (var i = 0; i < message.length; i++) {

//     if (message.slice(i, i + delWord.length) === delWord) {
//         updatedArr += replace;

//         i += delWord.length - 1;
//     } else {
//         updatedArr += arr[i];
//     }
// }

// console.log(updatedArr);

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replace = "&";

// var delWord = "and";

// var result = message.replaceAll(delWord,replace);

// console.log(result);

//? Question no 8 end

//? Question no 9 start

// var str = "472";

// document.write("Value:",str);

// document.write("<br>");

// document.write("Type:",typeof str);

// document.write("<br>");

// var num = Number(str);

// document.write("Value:",num);

// document.write("<br>");

// document.write("Type:",typeof num);

//? Question no 9 end

//? Question no 10 start

// var userInput = "peanut";

// var result = userInput.toUpperCase();

// document.write("User Input:",userInput)

// document.write("<br>");

// document.write("Upper Case:",result)

//? Question no 10 end

//? Question no 11 start

// var userInput = "javascript";

// document.write("User Input:", userInput)

// document.write("<br>");

// for (var i = 0; i < userInput.length; i++) {
//     if (i == 0) {
//         var result = userInput.charAt(0).toUpperCase();
//     } else {
//         result += userInput[i];
//     }
// }

// document.write("Title Case:", result);

//? Question no 11 end

//? Question no 12 start

// var number = 35.36;

// document.write("Number:", number);

// document.write("<br>")

// document.write("Result:",number.toString().replace(".",""));

//? Question no 12 end

//? Question no 13 start

// var userInput = prompt("Enter your username");

// var flag = false;

// alert("You Entered " + userInput);

// for (var i = 0; i < userInput.length; i++) {
//     if (userInput[i] == "@" || userInput[i] == "!" || userInput[i] == "," || userInput[i] == ".") {
//         alert("Enter a valid username");
//         break;
//     }
// }

//? Question no 13 end

//? Question no 14 start

// var userInput = prompt("Enter what you want from the bakery");

// userInput = userInput.toLowerCase();

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var flag = false;

// for (var i = 0; i < userInput.length; i++) {
//     if(userInput == A[i]){
//         flag = true;
//     }
// }

// if(flag){
//     alert("Yes it`s avaible");
// }else{
//     alert("Not avaible");
// }

//? Question no 14 end

//? Question no 15 start

// var userPass = prompt("Enter a password");

// var condition1 = "Password must be longer than 6 character";

// var condition2 = "Password must start with alphabets";

// let hasAlphabet = false;
// let hasNumber = false;

// if (userPass.length <= 6) {
//     alert(condition1);
// } else if (!isNaN(userPass.charAt(0))) {
//     alert(condition2);
// } else {

//     for (let i = 0; i < userPass.length; i++) {
//         let char = userPass.charAt(i);
//         if (/[a-zA-Z]/.test(char)) {
//             hasAlphabet = true;
//         }
//         if (/[0-9]/.test(char)) {
//             hasNumber = true;
//         }
//     }
// }

//? Question no 15 end

//? Question no 16 start

// var university = "University of Karachi";

// var result = university.split("");

// for (var i = 0; i < university.length; i++) {
//     document.write(result[i]);
//     document.write("<br>")
// }

//? Question no 16 end

//? Question no 17 start

// var str = "Pakistan";

// var result = str.charAt(str.length - 1);

// document.write("User input:", str);

// document.write("<br>");

// document.write("result:", result);

//? Question no 17 end

//? Question no 18 start

// var str = "The quick brown fox jumps over the lazy dog";

// str = str.toLowerCase();

// var findLetter = "the";

// var count = 0;

// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + findLetter.length) == findLetter) {
//         ++count;
//     }
// }

// document.write(count);

//? Question no 18 end

//! Chapter no 21 to 25 end

//! Chapter no 26 to 30 start

//? Question no 1 start

// var num = Number(prompt("Enter a decimal number"));

// document.write("Number:", num);

// document.write("<br>");

// document.write("Round Off Value:", Math.round(num));

// document.write("<br>");

// document.write("floor Value:", Math.floor(num));

// document.write("<br>");

// document.write("ceil Value:", Math.ceil(num));

//? Question no 1 end

//? Question no 2 start


// var num = Number(prompt("Enter a negative decimal number"));

// document.write("Number:", num);

// document.write("<br>");

// document.write("Round Off Value:", Math.round(num));

// document.write("<br>");

// document.write("floor Value:", Math.floor(num));

// document.write("<br>");

// document.write("ceil Value:", Math.ceil(num));

//? Question no 2 end

//? Question no 3 start

// var num = Number(prompt("Enter a number"));

// var absoluteValue = Math.abs(num);

// document.write("The absolute of ", num , " is ", absoluteValue);

//? Question no 3 end

//? Question no 4 start

// var randomNum = Math.round(Math.random() * 6);

// document.write("Random dice number is ", randomNum);

//? Question no 4 end

//? Question no 5 start

// var userGuess = prompt("Guess wheather it`s Head OR Tail");

// userGuess = userGuess.toLowerCase();

// var Guess = Math.round(Math.random() * 3);

// if (Guess == 2) {
//     Guess = "head";
//     if (userGuess == Guess) {
//         document.write("Correct! it`s:", Guess);
//     }
// } else if (Guess == 1) {
//     Guess = "tail";
//     if (userGuess == Guess) {
//         document.write("Correct! it`s:", Guess);
//     }
// } else {
//     document.write("Try again");
// }

//? Question no 5 end

//? Question no 6 start

// var randomNum = Math.round(Math.random() * 100);

// document.write("Random number between 1 to 100: ", randomNum);

//? Question no 6 end

//? Question no 7 start

//? Question no 7 end

//? Question no 8 start

// var userNum = Number(prompt("Enter a number between 1 to 10"));

// var secretNum = Math.round(Math.random() * 10);

// if (userNum == secretNum) {
//     document.write("Correct!")
// } else if (userNum == secretNum - 1) {
//     document.write("Close Enough");
// } else if (userNum == secretNum + 1) {
//     document.write("Close Enough");
// } else {
//     document.write("Try agin");
// }

//? Question no 8 end

//! Chapter no 26 to 30 end

//! Chapter no 31 to 34 start

//? Question no 1 start

// var currentTime = new Date();

// document.write(CurrentTime);

//? Question no 1 end

//? Question no 2 start

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var currentMonth = new Date().getMonth();

// alert("Current month: " + monthNames[currentMonth]);

//? Question no 2 end

//? Question no 3 start

// var dayNames = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];

// var currentDay = new Date().getDay();

// alert("Today is: " + dayNames[currentDay]);

//? Question no 3 end

//? Question no 4 start

// var currentDay = new Date().getDay();

// var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

// var flag = false;

// for (var i = 0; i < dayNames.length; i++) {
//     dayNames[i] = dayNames[i].toLowerCase();
//     if (dayNames[currentDay] == "sat" || dayNames[currentDay] == "sun") {
//         flag = true;
//     }
// }

// if (flag) {
//     alert("It`s Fun day")
// } else {
//     alert("It`s Work day")
// }

//? Question no 4 end

//? Question no 5 start

// var currentDate = new Date().getDate();

// console.log(currentDate)

// if(currentDate < 16){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last fifteen days of the month");
// }

//? Question no 5 end

//? Question no 6 start

// var currentDate = new Date();

// document.write("Current Date: ", currentDate)

// document.write("<br>");

// var currentDateInMilliSec = currentDate.getTime();

// document.write("Elapsed milliseconds since January 1,1970: ", currentDateInMilliSec);

// document.write("<br>");

// var currentDateInMin = currentDate.getTime();

// document.write("Elapsed milliseconds since January 1,1970: ", Math.round(currentDateInMin / (1000 * 60)));

//? Question no 6 end

//? Question no 7 start

// var currentHours = new Date().getHours();

// if (currentHours < 12) {
//     alert("It`s AM");
// } else {
//     alert("It`s PM");
// }

//? Question no 7 end

//? Question no 8 start

// var laterDate = new Date("December 31 , 2020");

// document.write("Later Date: ",laterDate);

//? Question no 8 end

//? Question no 9 start

// var ramadanDate = new Date("2024, March 12");

// var ramadanDateInMilliSec = ramadanDate.getTime();

// var currentDate = new Date();

// var currentDateInMilliSec = currentDate.getTime();

// var dayPassed = currentDateInMilliSec - ramadanDateInMilliSec;

// document.write(Math.round(dayPassed / (1000 * 60 * 60 * 24)), " days have passed since 1st Ramadan,2024");

//? Question no 9 end

//? Question no 10 start

// var referenceDate = new Date("Dec 05 , 2023");

// var referenceDateInMilliSec = referenceDate.getTime();

// var currentDate = new Date();

// var currentDateInMilliSec = currentDate.getTime();

// var secPassed = currentDateInMilliSec - referenceDateInMilliSec;

// document.write("On reference date " + referenceDate + " , " + Math.round(secPassed / (1000)) + " seconds had passed since beginning of 2023");

//? Question no 10 end

//? Question no 11 start

// var currentDate = new Date();

// document.write("current date: ",currentDate)

// var currentDateInHours = currentDate.getHours();

// currentDate.setHours(currentDateInHours - 1);

// document.write("<br>");

// document.write("1 hours ago, it was ",currentDate );

//? Question no 11 end

//? Question no 12 start

// var currentDate = new Date();

// alert("Current date: " + currentDate);

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("100 year back, it was " + currentDate);

//? Question no 12 end

//? Question no 13 start

// var userAge = Number(prompt("Enter your age"));

// document.write("Your age is: ",userAge);

// document.write("<br>");

// var currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - userAge);

// document.write("Your birth year is: ",currentDate.getFullYear());

//? Question no 13 end

//? Question no 14 start

// document.write("<h1>K-Electric Bill</h1>")

// var userName = prompt("Enter your name");

// document.write("Customer Name: ", `<b> ${userName} </b>`);

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var currentMonth = new Date().getMonth();

// document.write("<br>");
// document.write("<br>");

// document.write("Month: ", `<b> ${monthNames[currentMonth]} </b>`);

// document.write("<br>");
// document.write("<br>");

// var NumOfUnits = Number(prompt("Enter how many units you consume"));

// document.write("Number of units: ", `<b> ${NumOfUnits} </b>`);

// document.write("<br>");
// document.write("<br>");

// var unitCharge = 45;

// document.write("Charges per unit: ", `<b> ${unitCharge} </b>`)

// document.write("<br>");
// document.write("<br>");

// var amountPayableDueDate = (NumOfUnits * unitCharge).toFixed(2);

// document.write("Amount Payable (within Due Date): ", `<b> ${amountPayableDueDate} </b>`);

// document.write("<br>");
// document.write("<br>");

// var lateSurcharge = 350;

// document.write("Late payment surcharge: ", `<b> ${lateSurcharge} </b>`);

// document.write("<br>");
// document.write("<br>");

// var amountPayableAfterDueDate = (parseFloat(amountPayableDueDate) + lateSurcharge).toFixed(2);

// document.write("Gross Amount Payable (after Due Date): ", `<b> ${amountPayableAfterDueDate} </b>`);

//? Question no 14 end

//! Chapter no 31 to 34 end