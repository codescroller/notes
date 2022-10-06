/*
-: Variable
=========
    - Variables are containers for storing data values.

    - In Java, there are different types of variables, for example:

    - String - stores text, such as "Hello". String values are surrounded by double quotes
    - int - stores integers (whole numbers), without decimals, such as 123 or -123
    -float - stores floating point numbers, with decimals, such as 19.99 or -19.99
    -char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
    -boolean - stores values with two states: true or false

    - Declaring (Creating) Variables
        - type variableName = value;
        Example

        int number = 10;
        String friend = "Tanu";

    - You can also declare a variable without assigning the value, and assign the value later:
        int num;
        num = 30;
    
    --Note : that if you assign a new value to an existing variable, it will overwrite the previous value:

*/

// Example of creating the variable
public class variable {
    int num = 30;
    String name = "Code Scroller";
    float price = 3.4f;
    double pi = 3.14;
    public static void main(String args[]){
        // Create variables        
    }
}

/* 
-: Final Variables or Constant
============
    - To create the read only variable or constant use "final" keyword.
    - We cant overwrite the value or cant change its value;

    Syntax;
        final int number = 15;
        number = 30; // // will generate an error: cannot assign a value to a final variable


    Notes:
        - Write the identifier name in capital letters that we want to declare as constant. For example, MAX=12.

*/

// Example of creating the variable
class Constant {
    final double PI = 3.14;
}


/*
-: Java Print Variables
=========
    - The println() method is often used to display variables.

    -To combine both text and a variable, use the + character:


    Example-1
        String name = "John";
        System.out.println("Hello " + name);
    Example-2
        String firstName = "John ";
        String lastName = "Doe";
        String fullName = firstName + lastName;
        System.out.println(fullName);

        -- Note: for string + is used to concate the value
    Example-3
        int x = 5;
        int y = 6;
        System.out.println(x + y); // Print the value of x + y

        -- Note: For int + is used to add the value
*/


/*
-: Java Declare Multiple Variables
==============
    - To declare more than one variable of the same type, you can use a comma-separated list:


    Variable in multi line
        int x = 5;
        int y = 6;
        int z = 50;
        System.out.println(x + y + z);
    Variable in single line
        int x = 5, y = 6, z = 50;
        System.out.println(x + y + z);

    - You can also assign the same value to multiple variables in one line:
        int x, y, z;
        x = y = z = 50;
        System.out.println(x + y + z);

*/


/*
-: Java Identifiers
===========
    - All Java variables must be identified with unique names. these unique names are called identifiers.

    - It is recommended to use descriptive names in order to create understandable and maintainable code:

    -The general rules for naming variables are:

        - Names can contain letters, digits, underscores, and dollar signs
        - Names must begin with a letter
        - Names should start with a lowercase - letter and it cannot contain whitespace
        - Names can also begin with $ and _ (but we will not use it in this tutorial)
        - Names are case sensitive ("myVar" and "myvar" are different variables)
        -Reserved words (like Java keywords, such as int or boolean) cannot be used as names
*/