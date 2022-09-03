/*
-: SQL ORDER BY Keyword
==========
    - The ORDER BY keyword is used to sort the result-set in ascending or descending order.
    - It sorts the records ascending order by default. to sort the record in descending order use DESC keuword

    - Syntax
    ===
        SELECT column1, column2 
        FROM table_name
        ORDER BY name ASC|DESC;
*/

-- Example-1 for Ascending Order
SELECT name, email 
FROM students
ORDER BY name;

-- You can sperify the ASC keyword by the name or you can leave it blank as on the above example

-- Example-2 for Descending Order
SELECT name, email 
FROM students
ORDER BY name DESC;


-- ######################## --

-- We can use multiple column for sort the record
-- Example-2 for Descending Order
SELECT name, email 
FROM students
ORDER BY name DESC state ASC;

-- Note : The above SQL statement selects all students from the "students" table, sorted by the "name" as Desending order and the "state" as Ascending order column. This means that it orders by name, but if some rows have the same name, it orders them by state:

-- =====================---------
-- We can use this technique to use order by with number they refres to the column name with the same sequence
SELECT name, email
FROM students 
ORDER BY 1,2 DESC;

-- Here 1 for the name, and 2 for the email