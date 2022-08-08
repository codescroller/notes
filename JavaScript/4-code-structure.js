/* Code structure/* 
Q) Statements========
Statements are syntax constructs and commands that perform actions.
*/

// We can have as many statements in our code as we want (on the same line). Statements can be separated with a semicolon.

// alert("Hello"); alert("World");

// Usually, statements are written on separate lines to make the code more readable:
alert('Hello')
alert('World')

// Semicolons
// A semicolon may be omitted in most cases when a line break exists.

// This would also work:
// alert("Hello")
// alert("World")

// In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!

// There are cases when a newline does not mean a semicolon. For example:
// alert(3 +
//     1 +
//     2);

// The code outputs 6 because JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus "+", then it is an “incomplete expression”, so a semicolon there would be incorrect. And in this case, that works as intended.

// But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.

// Now let’s remove the semicolon after the alert:
alert('Hello')[(1, 2)].forEach(alert)

// If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.

// That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

// ==========  Note  =============
// We recommend putting semicolons between statements even if they are separated by newlines. This rule is widely adopted by the community. Let’s note once again – it is possible to leave out semicolons most of the time. But it’s safer – especially for a beginner – to use them.
