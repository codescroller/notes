/*
-: SQL LIKE Operator
=======
    - The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

    - There are two wildcards often used in conjunction with the LIKE operator:
         - The percent sign (%) represents zero, one, or multiple characters
        -The underscore sign (_) represents one, single character

    - Syntax
    SELECT column1, column2,..
    FROM table_name
    WHERE columnN LIKE pattern;
*/

-- Note: MS Access uses an asterisk (*) instead of the percent sign (%), and a question mark (?) instead of the underscore (_).

-- Example-1
SELECT * FROM students
WHERE name LIKE = 'ta%';

-- It gets all the records with a name starting with 'ta';



-- Example-2
SELECT * FROM students
WHERE name LIKE '%NU';

-- It gets all the records which have the name that is end with the 'nu' 

-- Note: Here case doesn't matters;



-- Example-3
SELECT * FROM studenst 
WHERE name LIKE '%a%';

-- If selects all the records with a name that have 'a' in any position;



-- Example-4
SELECT * FROM studenst 
WHERE name LIKE '_a%';

-- It gets all the records with the name that have the 'a' in the second position



-- Example-5
SELECT * FROM studenst 
WHERE name LIKE 'a__%';

-- The above SQL statement selects all students with a name that starts with "a" and are at least 3 characters in length:



-- Example-6
SELECT * FROM students
WHERE name LIKE 'a%o';

-- The above SQL statement selects all studenta with a name that starts with "a" and ends with "o":


-- ################################## --

/*
-: SQL NOT LIKE Operator
=======
    - NOT LIKE Operator works just opposite of LIKE operator

    - Syntax
    SELECT column1, column2,..
    FROM table_name
    WHERE columnN NOT LIKE pattern;
*/

-- Example-1
SELECT * FROM studenst
WHERE name NOT LIKE 'a%';

-- It selects all students with a name that does NOT start with "a":

-- ######################## --
/*
LIKE Operator	                Description
=============                   ===========
WHERE CustomerName LIKE 'a%'	Finds any values that start with "a"
WHERE CustomerName LIKE '%a'	Finds any values that end with "a"
WHERE CustomerName LIKE '%or%'	Finds any values that have "or" in any position
WHERE CustomerName LIKE '_r%'	Finds any values that have "r" in the second position
WHERE CustomerName LIKE 'a_%'	any values that start with "a" and are at least 2 characters in length
WHERE CustomerName LIKE 'a__%'	any values that start with "a" and are at least 3 characters in length
WHERE ContactName LIKE 'a%o'	Finds any values that start with "a" and ends with "o"
*/

