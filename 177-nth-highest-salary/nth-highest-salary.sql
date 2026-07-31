CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
--   set N = if(N>=0, if(N>1, N-1 , 0), N);
set N = N-1;
  RETURN (
      # Write your MySQL query statement below.
    select distinct salary as getNthHighestSalary from Employee
    order by salary desc limit N, 1
    
  );
END