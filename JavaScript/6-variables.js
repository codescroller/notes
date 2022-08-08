// ==== Variables ====
// A variable is a “named storage” for data. We can use variables to store  data.

// To create a variable in JavaScript, use the let, var keyword.

// Declares variable
let message;

// Put Data into the variable using assignment operator =
message = "Hello";

// We can combine the variable declaration and assignment into a single line:
let msg = "Hello!"; // define the variable and assign the value

// We can also declare multiple variables in one line:
// let user = "John", age = 25, text = "Hello";

// That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

let myName = "John";
let myAge = 25;
let myMessage = "Hello";

// Some people also define multiple variables in this multiline style:
let user = "John",
  age = 25,
  m = "Hello";

// Or even in the “comma-first” style:
// let user = 'John'
//   , age = 25
//   , message = 'Hello';

// Declare variable using var
var newMessage = "Hello";

// The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.

// Declaring twice triggers an error
// let name = "Rahul Jain";
// let name = "That"; // SyntaxError: 'name' has already been declared

// ======== Variable naming ===========
// 1. The name must contain only letters, digits, or the symbols $ and _.
// 2. The first character must not be a digit.
// Examples of valid names:

let userName;
let test123;
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

// ==== Case matters =====
// Variables named apple and APPLE are two different variables.

// Non-Latin letters are allowed, but not recommended
let имя = "...";
let 我 = "...";

// ==== Reserved names ====
// There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

// For example: let, class, return, and function are reserved.

// The code below gives a syntax error:

// let let = 5; // can't name a variable "let", error!
// let return = 5; // also can't name it "return", error!

// =========================
// Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let.

num = 5; // the variable "num" is created if it didn't exist

// ==== Constants ====
// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = "18.04.1982";

// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

// ==== Uppercase constants ====
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ==== Summary ====
/*
We can declare variables to store data by using the var, let, or const keywords.

1. let – is a modern variable declaration.
2. var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
3. const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.
*/
