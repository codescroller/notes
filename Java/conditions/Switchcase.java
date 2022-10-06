/*
-: Switch Statements
============

    - Syntax
    ======
    switch(expression){
        case a:
            // code block
            break;
        case b:
            // code block
            break;
        default:
            // code block
    }

    - This is how it works:
        - The switch expression is evaluated once.
        - The value of the expression is compared with the values of each case.
        - If there is a match, the associated block of code is executed.
        - The break and default keywords are optional

    - The break Keyword
    ===========
        - When Java reaches a break keyword, it breaks out of the switch block.
        - This will stop the execution of more code and case testing inside the block.
        - When a match is found, and the job is done, it's time for a break. There is no need for more testing.
    
        Note: A break can save a lot of execution time because it "ignores" the execution of all the rest of the code in the switch block.
    
    - The default Keyword
    ===========
        - The default keyword specifies some code to run if there is no case match:

        - Note that if the default statement is used as the last statement in a switch block, it does not need a break.

*/

package conditions;

public class Switchcase {
    public static void main(String[] args) {
        int day = 4;
        switch (day) {
        case 1:
            System.out.println("Monday");
            break;
        case 2:
            System.out.println("Tuesday");
            break;
        case 3:
            System.out.println("Wednesday");
            break;
        case 4:
            System.out.println("Thursday");
            break;
        case 5:
            System.out.println("Friday");
            break;
        case 6:
            System.out.println("Saturday");
            break;
        case 7:
            System.out.println("Sunday");
            break;
        }
        // Outputs "Thursday" (day 4)
    }
}
