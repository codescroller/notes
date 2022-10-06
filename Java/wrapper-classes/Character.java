/*
-: Character Class 
=================
    - Normally, when we work with characters, we use primitive data types char.
        char ch = 'a';

    - Unicode for uppercase Greek omega character
        char uniChar = '\u039A'; 

    - an array of chars
        char[] charArray = { 'a', 'b', 'c', 'd', 'e' }; 

    - However in development, we come across situations where we need to use objects instead of primitive data types

    - The Character class offers a number of useful class (i.e., static) methods for manipulating characters. We can create a Character object with the Character constructor

    Character ch = new Character('a');

    - The Java compiler will also create a Character object for you under some circumstances
    
    - For example, if you pass a primitive char into a method that expects an object, the compiler automatically converts the char to a Character for you. This feature is called autoboxing or unboxing, if the conversion goes the other way.
    
    Example
        - Here following primitive char 'a'
        - is boxed into the Character object ch
            Character ch = 'a';

        - Here primitive 'x' is boxed for method test,
        - return is unboxed to char 'c'
            char c = test('x');


-: Character Methods (static)
================

1. static boolean isDigit(char ch) : is used to determine whether the specific character value (ch) is a digit or not. It checks whether the value is a digit that is 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
    Example
    =======
        char ch = 'A';
        char ch1 = '1';  
        System.out.println(Character.isDigit(ch));   //   false
        System.out.println(Character.isDigit(ch1));   //   true

2. static boolean isLetter(char ch) : is used to determine whether the specific character value (ch) is a letter or not. It checks whether the value is a letter that is, [ A – Z ] or [ a – z ].
    Example
    =======
        char ch = 65; //Passing an ASCII value 65 which is equal to ‘A’
        char ch1 = '3'; 
        System.out.println(Character.isDigit(ch));   //   true
        System.out.println(Character.isDigit(ch1));   //   false

3. static boolean isWhiteSpace(char ch) : It determines whether the given char(ch) is whitespace or not, 
    Example-1
    =======
        char ch = 65; //Passing an ASCII value 65 which is equal to ‘A’
        char ch1 = '3'; 
        System.out.println(Character.isWhiteSpace(ch));   //   true
        System.out.println(Character.isWhiteSpace(ch1));   //   false
    
    Note: - Whitespace in Java can be considered as space, tab, or a new line
    Example-2
    =======
        System.out.println(Character.isDigit('\t'));   //   true
        System.out.println(Character.isDigit('\n'));   //   true

4. static boolean isUpperCase(char ch) : is used to determine whether the specific character value (ch) is an uppercase letter or not. It checks whether the value is a letter that is, [ A – Z ].
    Example
    =======
        char ch = 65; //Passing an ASCII value 65 which is equal to ‘A’
        char ch1 = 'a'; 
        char ch2 = 'B'; 
        System.out.println(Character.isUpperCase(ch));   //   true
        System.out.println(Character.isUpperCase(ch1));   //   false
        System.out.println(Character.isUpperCase(ch2));   //   false

5. static boolean isLowerCase(char ch) : is used to determine whether the specific character value (ch) is an lowercase letter or not. It checks whether the value is a letter that is, [ a – z ].
    Example
    =======
        char ch = 97; //Passing an ASCII value 65 which is equal to ‘a’
        char ch1 = 'n'; 
        char ch2 = 'B'; 
        System.out.println(Character.isLowerCase(ch));   //   true
        System.out.println(Character.isLowerCase(ch1));   //   true
        System.out.println(Character.isLowerCase(ch2));   //   false

6. static char toUpperCase(char ch) : The method toUpperCase() is used to convert the specific character value (ch) into an uppercase letter. It returns the uppercase form of the input char value.
    Example
    =======
        char ch = 122;    //ASCII value of z is 122
        char ch1 = 108;    //ASCII value of l is 108 
        char ch2 = 'b'; 
        System.out.println(Character.toUpperCase(ch));    // 'Z'
        System.out.println(Character.toUpperCase(ch1));   // 'L'
        System.out.println(Character.isLowerCase(ch2));   // 'B'

7. static char toLowerCase(char ch) : The method toLowerCase() is used to convert the specific character value (ch) into an uppercase letter. It returns the uppercase form of the input char value.
    Example
    =======
        char ch = 65;    //ASCII value of A is 65
        char ch1 = 'B'; 
        System.out.println(Character.toLowerCase(ch));    // 'a'
        System.out.println(Character.toLowerCase(ch1));   // 'b'

8. static String toString(char ch) : The toString(char ch) method in Java returns an object of String class for the specified char value. In simple words, it converts a char value into String.
    Example
    =======
        char ch = 'R';
        char ch1 = 'B'; 
        System.out.println(Character.toString(ch));    // "R"
        System.out.println(Character.toString(ch1));   // "B"
*/

