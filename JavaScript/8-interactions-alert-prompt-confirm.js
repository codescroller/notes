/* 
===== Interaction: alert, prompt, confirm =====
    => As we’ll be using the browser as our demo environment, let’s see a couple of functions to interact with the user: alert, prompt and confirm.
*/

/*
1. alert
    => It shows a message and waits for the user to press “OK”.
    => alert automatically converts any value to a string to show it
    => For Example

    alert("Welcome")
*/

/*
2. prompt
    => It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
    => The function prompt accepts two arguments:

    Syntax
    result = prompt(title, [default]);

    Where
        => title: The text to show the visitor. 
        => default: An optional second parameter, the initial value for the input field.
        => [..] denote the parameter is optional, not required.

    The visitor can type something in the prompt input field and press OK. Then we get that text in the result. Or they can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.

    The call to prompt returns the text from the input field or null if the input was canceled.
*/
let age = prompt("How old are you?", 100);

alert(`You are ${age} years old!`); // You are 100 years old!

/*
3.confirm
    => The function confirm shows a modal window with a question and two buttons: OK and Cancel.

    => The result is true if OK is pressed and false otherwise.

    For Example
*/
let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed

/*
===== Summary ====
We covered 3 browser-specific functions to interact with visitors:

1. alert
    => shows a message.
2. prompt
    => shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
3. confirm
    => shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

Note: 
    => All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.
*/
