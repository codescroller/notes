/*
-: SQL AND, OR and NOT Operators
=========
    - The AND and OR operators are used to filter records based on more than one condition:
        - The AND operator displays a record if all the conditions separated by AND are TRUE.
        - The OR operator displays a record if any of the conditions separated by OR is TRUE.
        - The NOT operator displays a record if the condition(s) is NOT TRUE.

    - Syntax for AND
        SELECT column1, column2 FROM table_name
        WHERE condition1 AND condition2...;
    
    - Syntax for OR
        SELECT column1, column2 FROM table_name
        WHERE condition1 OR condition2...;
    
    - Syntax for NOT
        SELECT column1, column2 FROM table_name
        WHERE NOT condition;
*/

-- Example for AND
SELECT * FROM students
WHERE name='Tanu' AND email = 'tanusingh@gmail.com';

-- The above example get all students records which have the name 'Tanu' and email 'tanusingh@gmail.com' 

-- Example for OR
SELECT * FROM students
WHERE name='Tanu' OR email = 'tanusingh@gmail.com';

-- The above example get all students records which have either the name 'Tanu' or email 'tanusingh@gmail.com'


-- Example for NOT
SELECT * FROM students
WHERE NOT email = 'tanusingh@gmail.com';

-- The above example get all students records except those record which having email 'tanusingh@gmail.com'

-- We can combine the AND, and OR operators
SELECT * FROM students
WHERE name = 'Tanu' AND (email: 'tanu@gmail.com' OR email: 'tanusingh@gmail.com');

-- The above query get all records which having the name 'Tanu' And email either 'tanu@gmail.com' or email: 'tanusingh@gmail.com'



-- We can combine the AND || OR with NOT operator
SELECT * FROM students
WHERE NOT name = 'Tanu' AND NOT email: 'tanusingh@gmail.com';

-- The above query get all records which not having the name of 'Tanu' And email of 'tanusingh@gmail.com'























