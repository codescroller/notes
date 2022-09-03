/*
-: SQL TOP, LIMIT, FETCH FIRST or ROWNUM Clause
=========
    - The SELECT TOP clause is used to specify the number of records to return.

    - Not all database systems support the SELECT TOP clause. MySQL supports the LIMIT clause to select a limited number of records, while Oracle uses FETCH FIRST n ROWS ONLY and ROWNUM.

    Ref: https://www.w3schools.com/sql/sql_top.asp


    - MySql Syntax
    ====
    SELECT column_name(s)
    FROM table_name
    WHERE condition
    LIMIT number
*/

-- Sql Server/Ms Access Example
SELECT TOP 3 * FROM students;

-- MySql Example
SELECT * FROM students LIMIT 3;

-- We can use WHERE CLAUSE
SELECT * FROM students
WHERE state='Bihar'
LIMIT 3;

