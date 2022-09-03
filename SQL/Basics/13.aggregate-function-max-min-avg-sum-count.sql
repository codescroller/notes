/*
-: Aggregate functions in SQL
=========
    - In database management an aggregate function is a function where the values of multiple rows are grouped together as input on certain criteria to form a single value of more significant meaning.

    - Some Aggregate function is
        1) COUNT()
        2) SUM()
        3) AVG()
        4) MIN()
        5) MAX()
*/


-- ############# COUNT() ################ --
-- COUNT(*) : Returns total number of records
-- COUNT(email) : Return number of Non Null values over the column email
-- COUNT(DISTINCT city) : Return number of distinct Non Null values over the column city

-- Example1
SELECT COUNT(*) as total
FROM students;

-- Example2
SELECT COUNT(email) as total_emails
FROM students;

-- Example3
SELECT COUNT(DISTINCT city)
FROM students;




-- ############# SUM() ################ --
-- SUM(marks) :  Sum all Non Null values of Column marks
-- SUM(DISTINCT marks) : Sum of all distinct Non-Null values

-- Example-1
SELECT SUM(marks) as total_marks
FROM students;

-- Example-2
SELECT SUM(DISTINCT marks) as total_dist_marks
FROM students;

-- Example-3
SELECT SUM(marks) FROM students;


-- ############# AVG() ################ --
-- AVG(marks) = Sum(marks) / count(marks)
-- AVG(Distinct marks) = sum(Distinct marks) / Count(Distinct marks)

-- Example-1
SELECT AVG(marks) 
FROM students;

-- Example-2
SELECT AVG(DISTINCT marks) as avarage_marks 
FROM students;



-- ############# MIN() and MAX() ################ --
    -- MIN(marks): Minimum value in the marks column except NULL
    
    -- MAX(marks): Maximum value in the marks

-- Example-1
SELECT MIN(marks) 
FROM students;

-- Example-2
SELECT MAX(marks) 
FROM students;

