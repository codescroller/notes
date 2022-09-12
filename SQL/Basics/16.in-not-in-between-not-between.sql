/*
-: SQL IN Operator
========
    - The IN operator allows you to specify multiple values in a WHERE clause.
    - The IN operator is a shorthand for multiple OR conditions.

    - IN Syntax
    ======
        SELECT column1, column2,...
        FROM table_name
        WHERE column IN (value1, value2, ..);

    ====== OR =====
        SELECT column_name(s)
        FROM table_name
        WHERE column_name IN (SELECT STATEMENT);
*/

-- Example-1
SELECT * FROM students 
WHERE city IN ('purnia', 'katihar', 'patna');

-- It selects all the students which are located in 'purnia', 'katihar' or 'patna';


-- Example-2
SELECT * FROM students 
WHERE city IN (SELECT city_name from cities);

-- It selects all studenst that are from the same city as the cities:


/*
-: SQL NOT IN Operator
========
    - The NOT IN operator works just opposit of IN operator.
    
    - NOT IN Syntax
    ======
        SELECT column1, column2,...
        FROM table_name
        WHERE column NOT IN (value1, value2, ..);

    ====== OR =====
        SELECT column_name(s)
        FROM table_name
        WHERE column_name NOT IN (SELECT STATEMENT);
*/

-- Example-1
SELECT * FROM students 
WHERE city NOT IN ('purnia', 'katihar', 'patna');

-- It selects all the students which are not located in 'purnia', 'katihar' or 'patna';


-- Example-2
SELECT * FROM students 
WHERE city NOT IN (SELECT city_name from cities);

-- It selects all studenst that are not from the same city as the cities:


/*
-: SQL BETWEEN Operator
========
    - The BETWEEN operator selects values within a given range. The values can  be numbers, text, or dates. 
    -The BETWEEN operator is inclusive: begin and end values are included.

    - BETWEEN Syntax
    ======
        SELECT column1, column2,...
        FROM table_name
        WHERE column BETWEEN value2 AND value2;
*/

-- Example-1
SELECT * FROM students
WHERE marks BETWEEN 50 AND 100;

-- It selects all students with a marks between 50 and 100:



/*
-: SQL NOT BETWEEN Operator
========
    - It works just opposit of BETWEEN Operator

    - NOT BETWEEN Syntax
    ======
        SELECT column1, column2,...
        FROM table_name
        WHERE column NOT BETWEEN value2 AND value2;
*/


-- Example-1
SELECT * FROM students
WHERE marks NOT BETWEEN 50 AND 100;

-- It selects all students with a marks not between 50 and 100:

-- #######   BETWEEN with IN Example  #########
SELECT * FROM students
WHERE marks BETWEEN 50 AND 80 AND id NOT IN (2,4,5);

-- selects all students with a marks between 50 and 80. In addition; do not show student with a id of 2,4, or 5:

-- #######   BETWEEN Text Values Example  #########
SELECT * FROM students
WHERE marks BETWEEN 50 AND 80 AND id NOT IN (2,4,5);