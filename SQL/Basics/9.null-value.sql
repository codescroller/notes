/*
-: SQL NULL Values
=========
    - A field with a NULL value is a field with no value.

-: How to Test for NULL Values?
    - It is not possible to test for NULL values with comparison operators, such as =, <, or <>.

    - We will have to use the IS NULL and IS NOT NULL operators instead.

    1) Syntax for IS NULL Operator
    ====
    SELECT column1, column2 FROM table_name
    WHERE column1 IS NULL;

    2) Syntax for NOT NULL Operator
    SELECT column1, column2 FROM table_name
    WHERE column1 IN NOT NULL;
*/


-- Example of IS NULL Operator
SELECT name, email FROM students
WHERE email IS NULL;

-- It will fetch the all record which have the NULL value for email column;

-- Example of NOT NULL Operator
SELECT name, email FROM students
WHERE email IS NOT NULL;

-- It will fetch the all record which do not have the NULL value for email column;

-- Note: Always use IS NULL to look for NULL values.