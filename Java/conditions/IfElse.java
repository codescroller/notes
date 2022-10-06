/* 
-: Java Conditional statements
================
    - Java has the following conditional statements:
        - Use if to specify a block of code to be executed, if a specified condition is true
        - Use else to specify a block of code to be executed, if the same condition is false
        - Use else if to specify a new condition to test, if the first condition is false
        - Use switch to specify many alternative blocks of code to be executed
*/



/*
-: The if Statement
==========
    - Use the if statement to specify a block of Java code to be executed if a condition is true.

    - Syntax
    ======
        if (condition) {
            // block of code to be executed if the condition is true
        }
    
    - Note : if is in lowercase letters. Uppercase letters (If or IF) will generate an error.

    - Example
    =======
        int x = 20;
        int y = 18;
        if (x > y) {
            System.out.println("x is greater than y");
        } 
-: else Statement
==============
    - Use the else statement to specify a block of code to be executed if the condition is false.
    
    - Syntax
    =====
    if (condition) {
        // block of code to be executed if the condition is true
    } else {
        // block of code to be executed if the condition is false
    }

    - Example
    =======
        int time = 20;
        if (time < 18) {
            System.out.println("Good day.");
        } else {
            System.out.println("Good evening.");
        }
        // Outputs "Good evening."

-: else if Statement
============
    - Use the else if statement to specify a new condition if the first condition is false.

    - Syntax
    ======
        if (condition1) {
            // block of code to be executed if condition1 is true
        } else if (condition2) {
            // block of code to be executed if the condition1 is false and condition2 is true
        } else {
            // block of code to be executed if the condition1 is false and condition2 is false
        }
-: Note
======
    - If the if or else block having only single statement then you can ommit the curly brackets

    - Example
    ========
        int isAdult = false;
        if(isAdult)
            System.out.println("You are Adult");
        else
            System.out.println("You are not Adult");

*/

