/*
-: SQL INSERT INTO Statement
=========
    - The INSERT INTO statement is used to insert new records in a table.
    - INSERT INTO Syntax
    
        SQL allows us to use INSERT INTO statement in two ways:
            1. Specify both the column names and the values to be inserted:
                SYNTAX
                ====
                    INSERT INTO table_name (column1, column2,..)
                    VALUES (value1, value2,..);
            2. If you want to add the value for all column then you do not need to specify the column name.
               you can pass value for all column but make sure the order of the values is in the same order as the columns in the table.
                SYNTAX
                ====
                    INSERT INTO table_name
                    VALUES (value1, value2,..);
*/

-- Example-1 : Insert data for specified column 
INSERT INTO students (name, email)
VALUES ('Tanu', 'tanusingh@gmail.com');


-- Example-2 : Insert data fro all columns (name, email, age, class)
INSERT INTO students 
VALUES ('Akash', 'akashsingh@gmail.com', 23, 'BCA');


-- Insert multiple value at a time
INSERT INTO students (name, email)
VALUES ('Tanu', 'tanusingh@gmail.com'), ('Akash', 'akashsingh@gmail.com');