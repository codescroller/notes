/* 
-: Java Data Types
===========
- Data types are divided into two groups:
    - Primitive data types - byte, short, int, long, float, double, boolean and char
    - Non-primitive data types - String, Arrays and Classes (learn more about these in a later)


    - Primitive Data Types
        - A primitive data type specifies the size and type of variable values, and it has no additional methods

        - There are eight primitive data types in Java:

    Data Type	Size	Description
    ========    ====    ===========
    byte	    1 byte	    Stores whole numbers from -128 to 127
    short	    2 bytes	    Stores whole numbers from -32,768 to 32,767
    int	        4 bytes	    Stores whole numbers from -2,147,483,648 to 2,147,483,647
    long	    8 bytes	    Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
    float	    4 bytes	    Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
    double	    8 bytes	    Stores fractional numbers. Sufficient for storing 15 decimal digits
    boolean	    1 bit	    Stores true or false values
    char	    2 bytes	    Stores a single character/letter or ASCII values
*/


/*
-: Numbers Types
===============
    - Primitive number types are divided into two groups:

    - A) Integer types stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are byte, short, int and long. Which type you should use, depends on the numeric value.

    - B) Floating point types represents numbers with a fractional part, containing one or more decimals. There are two types: float and double.

*/

/*
-: A) Integer Types
===============
    - i) Byte
    ========
    - The byte data type can store whole numbers from -128 to 127.

    - Example
        byte myNum = 100;

    - ii) Short
    =========
    - The short data type can store whole numbers from -32768 to 32767:

    - Example

    - iii) Int
    =========
    - The int data type can store whole numbers from -2147483648 to 2147483647.

    - Example
    - int myNum = 100000;

    - iv) Long
    =========
    - The long data type can store whole numbers from -9223372036854775808 to 9223372036854775807. 
    
    - This is used when int is not large enough to store the value. Note that you should end the value with an "L":.

    - Example
    - long myNum = 15000000000L;
*/


/*
 -: B) Floating Point Types
 ================
    - You should use a floating point type whenever you need a number with a decimal, such as 9.99 or 3.14515.

    - The float and double data types can store fractional numbers. Note that you should end the value with an "f" for floats and "d" for doubles:

    - Float Example
        float myNum = 5.75f;
    - Double Example
        double myNum = 19.99d;


 -: *) Use float or double?
 ================
    - The precision of a floating point value indicates how many digits the value can have after the decimal point. 
    
    - The precision of float is only six or seven decimal digits, while double variables have a precision of about 15 digits. 
    
    - Therefore it is safer to use double for most calculations.

*/


/*
 -: *) Scientific Numbers
 ================
    - A floating point number can also be a scientific number with an "e" to indicate the power of 10: 
    
    - Example:
        float f1 = 35e3f;
        double d1 = 12E4d;
*/


/*
 -: Boolean Type
 ================
    - A boolean data type is declared with the boolean keyword and can only take the values true or false:
    
    - Example:
        boolean isJavaFun = true;
        boolean isFishTasty = false;
*/



/*
 -: Characters Type
 ================
    - The char data type is used to store a single character.
    - The character must be surrounded by single quotes, like 'A' or 'c':
    
    - Example-1:
        char myGrade = 'B';

    - Alternatively, if you are familiar with ASCII values, you can use those to display certain characters:

    - Example-2:
        char myVar1 = 65, myVar2 = 66, myVar3 = 67;
*/

/*
 -: Strings Type
 ================
    - The String data type is used to store a sequence of characters (text). String values must be surrounded by double quotes:
    
    - Example-1:
        String greeting = "Hello World";

    - Note: A String in Java is actually a non-primitive data type, because it refers to an object. The String object has methods that are used to perform certain operations on strings

*/



// ======================================================================


/*
 -: 2) Non-Primitive Data Types
 ================
    - Non-primitive data types are called reference types because they refer to objects.
    
        - Primitive types are predefined (already defined) in Java. 
        
        - Non-primitive types are created by the programmer and is not defined by Java (except for String)

        - Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.

        - A primitive type has always a value, while non-primitive types can be null

        - A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.

        - The size of a primitive type depends on the data type, while non-primitive types have all the same size.
*/



