/*
-: Create Table
===========
    - The "CREATE TABLE" statement is used to create a new table in a database..
    - Syntax
        CREATE TABLE table_name
        (
            column_1 datatype,
            column_2 datatype,
            ...................
        );
*/

-- Example To Create Table
CREATE TABLE students (
    name VARCHAR(100),
    email VARCHAR(200),
    age INT,
    address VARCHAR(1000)
);

/*
-: Here:
=====
    - The column parameters specify the names of the columns of the table.
    -The datatype parameter specifies the type of data the column can hold (e.g. varchar, integer, date, etc.).
*/



/*
-: Create Table Using Another Table
===========
    - A copy of an existing table can also be created using "CREATE TABLE".
    - The new table gets the same column definitions. All columns or specific columns can be selected.
    - If you create a new table using an existing table, the new table will be filled with the existing values from the old table.

    - Syntax
    CREATE TABLE new_table_name AS 
    SELECT column1, column2 FROM existing_table 
    WHERE ...;
*/

-- The following SQL creates a new table called "TestTables" (which is a copy of the "Customers" table): 

CREATE TABLE copy_of_student AS
SELECT name, email, age FROM student;



/*
-: Drop Table
===========
    - The "DROP TABLE" statement is used to drop an existing table in a database.

    - Syntax
        DROP TABLE table_name;
*/

-- Example to Delete Table
    DROP TABLE students;


/*
-: SQL TRUNCATE TABLE
===========
    - The "TRUNCATE TABLE" statement is used to delete the data inside a table, but not the table itself.

    - Syntax
        TRUNCATE TABLE table_name;
*/

-- Example of TRUNCATE TABLE
TRUNCATE TABLE students;



/*
-: NOTE
===========
    - We can achieve the same thing by using DELETE command
    Syntax
    - DELETE FROM table_name;

    - It deletes all the data from the tables
*/

-- Example of TRUNCATE TABLE
DELETE FROM students;
