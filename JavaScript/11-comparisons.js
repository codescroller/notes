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
    =====
        => alert( null === undefined ); // false

    For a non-strict check ==
    =====
        => alert( null == undefined ); // true

    => For maths and other comparisons < > <= >=
    => null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN. but in comperision == it it doesnt convert to number.

    For Example
        => alert( null > 0 );  // (1) false
        => alert( null == 0 ); // (2) false
        => alert( null >= 0 ); // (3) true

    The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

    On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

*/

/*
An incomparable undefined
==============
    => alert( undefined > 0 ); // false (1)
    => alert( undefined < 0 ); // false (2)
    => alert( undefined == 0 ); // false (3)

Why does it dislike zero so much? Always false!

We get these results because:
    => Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
   
    => The equality check (3) returns false because undefined only equals null, undefined, and no other value.
*/

/*
Summary
======
    => Comparison operators return a boolean value.
    => Strings are compared letter-by-letter in the “dictionary” order.
    => When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
    => The values null and undefined equal == each other and do not equal any other value.
    => Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
*/
