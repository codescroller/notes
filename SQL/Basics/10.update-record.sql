/*
-: SQL UPDATE Statement
    - The UPDATE statement is used to modify the existing records in a table.

    - Syntax
    ===
        UPDATE table_name
        SET column1=value1, column2=value2,...
        WHERE condition;  
*/

-- Example for update the email
UPDATE students 
SET email='tanusingh@gmail.com'
WHERE id=1;

-- It will update the data which id is 1.

-- Example for update multiple records
UPDATE students
SET city='Purnia'
WHERE city='Purnea';

-- It will update all records which having the city nane 'Purnia' to 'Purnea';


-- Update Warning: Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!

-- Example
UPDATE students
SET email='example@gmail.com';

-- It will update all the recods of students table because the statement has not the Where clouse;