// Comments
// As time goes on, programs become more and more complex. It becomes necessary to add comments which describe what the code does and why.

// Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.

// One-line comments start with two forward slash characters //.

// Like here:

// This comment occupies a line of its own
alert('Hello');

alert('World'); // This comment follows the statement

// Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.

/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');

// Nested comments are not supported!
// There may not be /*...*/ inside another /*...*/.

// Such code will die with an error:

// /*
//   /* nested comment ?!? */
// */
// alert( 'World' );
