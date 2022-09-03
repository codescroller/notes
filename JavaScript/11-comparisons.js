/*
Comparisons
========

    => All comparison operators return a boolean value:
        => true – means “yes”, “correct” or “the truth”.
        => false – means “no”, “wrong” or “not the truth”.
*/

// For Example
alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)

// A comparison result can be assigned to a variable, just like any value:

let result = 5 > 4; // assign the result of the comparison

/*
String comparison
========
    => strings are compared letter-by-letter.
*/
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true

/*
Comparison of different types
=============

When comparing values of different types, JavaScript converts the values to numbers.

For example:
*/
alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.
// For example:

alert(true == 1); // true
alert(false == 0); // true

// A funny consequence
let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true!

// From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.

/*
Strict equality
==============
    => A regular equality check == has a problem. It cannot differentiate 0 from false:
    
    alert( 0 == false ); // true
    alert( '' == false ); // true

    This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

What to do if we’d like to differentiate 0 from false?

A strict equality operator === checks the equality without type conversion.
For Example
======
alert( 0 === false ); // false, because the types are different

There is also a “strict non-equality” operator !== analogous to !=.

The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.

*/

/*
Comparison with null and undefined
================
    => These values are different, because each of them is a different type.
    
    For a strict equality check ===