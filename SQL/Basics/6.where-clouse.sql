/*
-: The SQL WHERE Clause
==========
    - The WHERE clause is used to filter records.
    - WHERE Syntax
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition;

    - Note : The WHERE clause is not only used in SELECT statements, it is also used in UPDATE, DELETE, etc.!
*/

-- Example
SELECT * FROM srudents
WHERE name='tanu';

-- Note: SQL requires single quotes around text values (most database systems will also allow double quotes).

-- Another Example
    -- However, numeric fields should not be enclosed in quotes:
SELECT name,email FROM students 
WHERE id=1;

/*
Operators in The WHERE Clause
==========
    Operator	Description	Example
    =======     ===================
    =	        Equal	
    >	        Greater than	
    <	        Less than	
    >=	        Greater than or equal	
    <=	        Less than or equal	
    <>	        Not equal. Note: In some versions of SQL this operator may be written as !=	
    BETWEEN	    Between a certain range	
    LIKE	    Search for a pattern	
    IN	        To specify multiple possible values for a column
*/