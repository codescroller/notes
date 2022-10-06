/*
-: Java String
=============
    - Strings are used for storing text.
    - A String variable contains a collection of characters surrounded by double quotes:
    - string is basically an object that represents sequence of char values
    - Generally, String is a sequence of characters. But in Java, string is an object that represents a sequence of characters. The java.lang.String class is used to create a string object.

    - How to create a string object?
    ===============================
        1) By string literal
        2) By new keyword

        1) String Literal
        ================
            - Java String literal is created by using double quotes. For Example:
            String s="welcome";   

        2) Creting by new keyword
        String s=new String("Welcome");
*/


public class Strings {
    // Creating string by the string literals
    String s = "Welcome";
    String ss = new String("Welcome");


    // convert character array to string
    char ch[] = {'s','t','r','i','n','g','s'};
    String arrToString = new String(ch);
}



/*
 -: Java String class methods
 =================
    - The java.lang.String class provides many useful methods to perform operations on sequence of char values.

    1) char charAt(int index) : It returns char value for the particular index
    2) int length() : It returns the length of the string
    3) String substring(int beginIndex) : It returns substring for given begin index.
    4) String substring(int beginIndex, int endIndex) : It returns substring for given begin index and end index.
    5) boolean contains(CharSequence s) : It returns true or false after matching the sequence of char value.
    6) boolean isEmpty() : It checks if string is empty.
    7) String concat(String str) : It concatenates the specified string.

    8) String[] split(String regex) : It returns a split string matching regex.
*/
