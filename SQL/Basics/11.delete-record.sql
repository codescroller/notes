/*
-: SQL DELETE Statement
==========
    - The DELETE statement is used to delete existing records in a table not table itself.

    - Syntax
    ====
        DELETE FROM table_name
        WHERE condition;
*/

-- Example1 : Delete the single record
DELETE FROM students
WHERE id=1;

-- Example2 : Delete multiple record
DELETE FROM students
WHERE city='Purnia';

-- Example3 : Delete all records
DELETE FROM students;

-- Delete Warning: While deleting the record  The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, all records in the table will be deleted!



-- Delete records using TRUNCATE Statement
TRUNCATE TABLE students;


