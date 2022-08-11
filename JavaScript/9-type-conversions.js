/*
Type Conversions
    => Most of the time, operators and functions automatically convert the values given to them to the right type.

    => There are also cases when we need to explicitly convert a value to the expected type.
*/

/*
1. String Conversion
    => We can also call the String(value) function to convert a value to a string:

    Example
    =====
    let value = true;
    alert(typeof value); // boolean

    => String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.
*/

/*
2. Numeric Conversion
===================
    => Numeric conversion happens in mathematical functions and expressions automatically:

    Example
    =====
    => For example, when division / is applied to non-numbers:
*/
alert("6" / "2"); // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
let num = Number(str); // becomes a number 123

// If the string is not a valid number, the result of such a conversion is NaN. For instance:

/*
Numeric conversion rules:
Value	             Becomes
undefined	         NaN
null	             0
true and false	     1 and 0
string	            Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
*/

// Examples:

Number("   123   "); // 123
Number("123z"); // NaN (error reading a number at "z")
Number(true); // 1
Number(false); // 0

// Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.

/*
Boolean Conversion
=================
    => for boolean convirsion call to Boolean(value)

    The conversion rule:
    ===========
    => Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
    => Other values become true.
*/

// For instance:
Boolean(1); // true
Boolean(0); // false

Boolean("hello"); // true
Boolean(""); // false

// Please note: the string with zero "0" is true
// Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.

Boolean("0"); // true
Boolean(" "); // spaces, also true (any non-empty string is true)

/*
Summary
=======
    => String Conversion – String(value)
    => Numeric Conversion – Number(value).
    The conversion follows the rules:

        Value	        Becomes…
        =====           ======
        undefined	    NaN
        null	        0
        true / false	1 / 0
        string	The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN.
    
        =>Boolean Conversion –  Boolean(value).

        Follows the rules:
        
        Value	                        Becomes
        =====                           =======
        0, null, undefined, NaN, ""	    false
        any other value	                true

    Note:-
        => undefined is NaN as a number, not 0.
        => "0" and space-only strings like " " are true as a boolean.

*/
