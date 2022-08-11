/*
Basic operators, maths
=============

Terms: “unary”, “binary”, “operand”
=========

An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is unary if it has a single operand

An operator is binary if it has two operands


Maths
====
The following math operations are supported:
    => Addition +,
    => Subtraction -,
    => Multiplication *,
    => Division /,
    => Remainder %,
    => Exponentiation **.
*/

// Remainder %
alert(5 % 2); // 1, a remainder of 5 divided by 2

// Exponentiation **
// The exponentiation operator a ** b raises a to the power of b.
alert(2 ** 2); // 2² = 4
alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

// String concatenation with binary +
let s = "my" + "string";
alert(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.
alert("1" + 2); // "12"
alert(2 + "1"); // "21"

// See, it doesn’t matter whether the first operand is a string or the second one.
alert(2 + 2 + "1"); // "41" and not "221"

// Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.
alert("1" + 2 + 2); // "122" and not "14"

// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:

alert(6 - "2"); // 4, converts '2' to a number
alert("6" / "2"); // 3, converts both operands to numbers

/*
Numeric conversion, unary +
===========
    => The plus + exists in two forms: the binary form that we used above and the unary form.

    => The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
*/
// No effect on numbers
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0

// It actually does the same thing as Number(...), but is shorter.

// Some Comples Example
let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23", the binary plus concatenates strings

// If we want to treat them as numbers, we need to convert and then sum them:

let banana = "2";
let graps = "3";

// both values converted to numbers before the binary plus
alert(+banana + +graps); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

/*
Operator precedence
========
Here’s an extract from the precedence table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones):

Precedence      	Name        	        Sign
==========          ====                    ====
15	                unary plus	            +
15	                unary negation	        -
14	                exponentiation	        **
13	                multiplication	        *
13	                division	            /
12	                addition	            +
12	                subtraction	            -
2	                assignment	            =
…	                …	…
*/

// As we can see, the “unary plus” has a priority of 15 which is higher than the 12 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.

/* 
Assignment
========
    => Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

    => That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.
*/

let xx = 2 * 2 + 1;

alert(xx); // 5

/*
Assignment = returns a value
============
    => All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

    => The call x = value writes the value into x and then returns it.

    => Here’s a demo that uses an assignment as part of a more complex expression:
*/

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

// In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.

// Funny code, isn’t it? We should understand how it works, because sometimes we see it in JavaScript libraries.

// Although, please don’t write the code like that. Such tricks definitely don’t make code clearer or readable.

/* 
Chaining assignments
========
    => Another interesting feature is the ability to chain assignments:
*/

let aa, bb, cc;

aa = bb = cc = 2 + 2;

alert(aa); // 4
alert(bb); // 4
alert(cc); // 4

// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

// Once again, for the purposes of readability it’s better to split such code into few lines:
cc = 2 + 2;
bb = cc;
aa = cc;

/*
Modify-in-place
=========
We often need to apply an operator to a variable and store the new result in that same variable.
let n = 2;
n = n + 5;

This notation can be shortened using the operators += and *=:
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)

Note: Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.


let n = 2;
n *= 3 + 5;
alert( n ); // 16  (right part evaluated first, same as n *= 8)
*/

/*
Increment/decrement
==============
    => Increment ++ increases a variable by 1:
        let counter = 2;
        counter++;  // works the same as counter = counter + 1, but is shorter
    
    => Decrement -- decreases a variable by 1:
        let counter = 2;
        counter--;   // works the same as counter = counter - 1, but is shorter

The operators ++ and -- can be placed either before or after a variable.
    => When the operator goes after the variable, it is in “postfix form”: counter++.

    =>The “prefix form” is when the operator goes before the variable: ++counter.


Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

To see the difference, here’s an example:
===========
    => let counter = 1;
    => let a = ++counter; // (*)
    => alert(a); // 2

Now, let’s use the postfix form
==========
    => let counter = 1;
    => let a = counter++; // (*) changed ++counter to counter++
    => alert(a); // 1

To summarize:
==========
    => If the result of increment/decrement is not used, there is no difference in which form to use:
        => let counter = 0;
        => counter++;
        => ++counter;
        => alert( counter ); // 2, the lines above did the same
    
    => If we’d like to increase a value and immediately use the result of the operator, we need the prefix form
        => let counter = 0;
        => alert( ++counter ); // 1
    
    => If we’d like to increment a value but use its previous value, we need the postfix form:
        =let counter = 0;
        =>alert( counter++ ); // 0

Note:
    The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.
    
    Example
    ====
    => let counter = 1;
    => alert( 2 * ++counter ); // 4

    Compare with:
    ====
    => let counter = 1;
    => alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

    We advise a style of “one line – one action”:
    ====
    => let counter = 1;
    => alert( 2 * counter );
    => counter++;

*/

/*
Bitwise operators
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.

*/

// Commma operator (need learning)
