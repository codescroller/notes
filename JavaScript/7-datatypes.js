// ====   Data types  =====
// There are eight basic data types in JavaScript

/* 
==== 1. Number =====
For Example:
123, 12.3 , NaN (Not a Numner)
*/

/*
==== 2. BigInt ====

In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.

BigInt type was recently added to the language to represent integers of arbitrary length.

A BigInt value is created by appending n to the end of an integer:
*/
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

/*
==== 3.String ====
A string in JavaScript must be surrounded by quotes.
*/
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;
/*
In JavaScript, there are 3 types of quotes.
1. Double quotes: "Hello".
2. Single quotes: 'Hello'.
3. Backticks: `Hello`.

The expression inside ${…} is evaluated and the result becomes a part of the string
*/

/*
====  4.Boolean (logical type) ====
The boolean type has only two values: true and false.
*/
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:
let isGreater = 4 > 1;

/*
==== 5. The “null” value ====
The special null value does not belong to any of the types described above.
It forms a separate type of its own which contains only the null value:
*/

let age = null;

/*
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

But typeof null represents 'object' that is error in js
*/

/*
==== 6. The “undefined” value ====
=> The special value undefined also stands apart. It makes a type of its own, just like null.

=>The meaning of undefined is “value is not assigned”.

=> If a variable is declared, but not assigned, then its value is undefined:
*/

let check;
typeof check; // undefined

// We can explicitly assign undefined to a variable:
let name = "Bikash";
name = undefined;

// But not recommend doing that, assign null to an “empty” or “unknown”
/*
7. Objects and Symbols

The object type is special.

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.
*/

/* 
==== The typeof operator ====
=> It is used to check the type of variable or values
=> A call to typeof x returns a string with the type name:
*/
// For Example
typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)

// Note:
// The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility

/* ==== Summery ====
There are 8 basic data types in JavaScript.

Seven primitive data types:
    1. number for numbers of any kind: integer or floating-point, integers are limited by ±(2^53-1).
    2. bigint for integer numbers of arbitrary length.
    3. string for strings. A string may have zero or more characters, there’s no separate single-character type.
    4. boolean for true/false.
    5. null for unknown values – a standalone type that has a single value null.
    6. undefined for unassigned values – a standalone type that has a single value undefined.
    7. symbol for unique identifiers.
And one non-primitive data type:
    1. object for more complex data structures.

The typeof operator allows us to see which type is stored in a variable.
    1. Usually used as typeof x, but typeof(x) is also possible.
    2. Returns a string with the name of the type, like "string".
    3. For null returns "object" – this is an error in the language, it’s not actually an object.

*/
