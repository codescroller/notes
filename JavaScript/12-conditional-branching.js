/* Conditional branching: if, '?'
===============    
    => Sometimes, we need to perform different actions based on different conditions.

    => To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

*/

/*
The “if” statement
==========
    => The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
*/

// For Example
let answer = true;
if (answer == true) console.log("Your Awnser is Correct 👍");

// If we want to execute more than one statement, we have to wrap our code block inside curly braces:

if (answer == true) {
  console.log("Your Awnser is Correct 👍");
  console.log("You're so smart!");
}

// We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.

/*
Boolean conversion
=========
    => The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

    Let’s recall the conversion rules from the chapter Type Conversions:

    A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
    Other values become true, so they are called “truthy”.
    So, the code under this condition would never execute:
*/
if (0) {
  // 0 is falsy
  console.log("Not Welcome");
}

// and inside this condition – it always will:
if (1) {
  // 1 is truthy
  console.log("Welcome");
}

// We can also pass a pre-evaluated boolean value to if, like this:
let year = 2022;
let cond = year == 2022; // equality evaluates to true or false

if (cond) {
  console.log("Its 2022");
}

/*
The “else” clause
==========
    => The if statement may contain an optional “else” block. It executes when the condition is falsy.

    => For example:
 */

if (year == 2022) {
  console.log("You guessed it right!");
} else {
  console.log("How can you be so wrong?"); // any value except 2022
}

// Several conditions: “else if”
// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

if (year < 2015) {
  console.log("Too early...");
} else if (year > 2015) {
  console.log("Too late");
} else {
  console.log("Exactly!");
}

/*
Conditional operator ‘?’
=========
    => Sometimes, we need to assign a variable depending on a condition.

    Syntax
    =====
    let result = condition ? value1 : value2;
        => The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2

    => The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

    => The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

*/

// For Example
let age = 18;
let accessAllowed = age > 18 ? true : false;

// In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

// the same
let access_allowed = age > 18;

/*
Multiple ‘?’
======
    => A sequence of question mark operators ? can return a value that depends on more than one condition.
*/
let myAge = prompt("age?", 18);

let message =
  myAge < 3
    ? "Hi, baby!"
    : myAge < 18
    ? "Hello!"
    : myAge < 100
    ? "Greetings!"
    : "What an unusual age!";

console.log(message);

/*
Non-traditional use of ‘?’
==============
    => Sometimes the question mark ? is used as a replacement for if:
*/

// For Example
let company = prompt("Which company created JavaScript?", "");

company == "Netscape" ? alert("Right!") : alert("Wrong.");

// It’s not recommended to use the question mark operator in this way.

/*
Note
====
    => Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

    => The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.

*/
