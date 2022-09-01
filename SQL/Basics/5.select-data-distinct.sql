/*
-: The SQL SELECT Statement
===========
    - The SELECT statement is used to select data from a database.
    - Syntax
        SELECT column1, column2, ...
        FROM table_name;

    - Here, column1, column2, ... are the field names of the table you want to select data from. If you want to select all the fields available in the table, use the following:
    -Syntax
        SELECT * FROM table_name;
*/


-- Example to select name and email from the table
SELECT name, email FROM students;

-- Example to select all column available from table
SELECT * FROM students;

/*
-: The SELECT DISTINCT Statement
===========
    - The SELECT DISTINCT statement is used to return only distinct (different) values
    - Syntax
        SELECT DISTINCT column1, column2, ...
        FROM table_name;
*/

-- Select Distinct name from the students table
SELECT DISTINCT name FROM students;

-- We can use DISTINCT on multiple column name
SELECT DISTINCT name, email FROM students;