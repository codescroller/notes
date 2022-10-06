/*
-: Java char data type
====================
    - The Java char is a primitive data type. It is used to declare the character-type variables and methods. It is capable of holding the unsigned 16-bit Unicode characters.

    - Points to remember
        - The char range lies between 0 to 65,535 (inclusive).
        - Its default value is '\u0000'.
        - Its default size is 2 byte.
        - It is used to store characters.

    - Why char uses 2 bytes in java?
        - It is because Java uses Unicode system not ASCII code system.
    - What is \u0000 ?
        - The \u0000 is the lowest range of the Unicode system.
*/


// Example of cha
public class Char {
    public static void main(String[] args){
        
        // Exapmple-1 
        char char1 = 'a';  
        char char2 = 'A';

        System.out.println("char1: "+char1);   // char1: a
        System.out.println("char2: "+char2);   // char2: A

        // Example-2
        // In this example i am gonna store integer value to the char variable
        char char3=65;  
        char char4=97;  
          
        System.out.println("char3: "+char3);  // char3: a
        System.out.println("char4: "+char4);  // char4: A
        
        // Here, compiler implicitly typecast integer to char and display the corresponding ASCII value

        // Example-3
        // typecast the integer value to char explicitly
        int num1 = 65;  
        char char5 = (char)num1;  
          
        System.out.println("char5: "+char5);  // char3: a

        // Example-4
        // I am gonna represent the char value in Unicode System
        char char6='\u0061';  
        char char7='\u0041';  
          
  
        System.out.println("char6: "+char6);  // char6: a
        System.out.println("char7: "+char7);  // char6: A

        // Example-5
        // we increment the provided char value by 1
        char char8='A';  
        // char8=(char)(char8+1);  OR
        char8++;
          
        System.out.println("char: "+char8);  // char: B

    }

}
