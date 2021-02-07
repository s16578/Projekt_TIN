CREATE OR ALTER FUNCTION castDateNode(@date date) RETURNS NVARCHAR(20)
AS
BEGIN
	DECLARE @datec AS NVARCHAR(20)
	DECLARE @yeardate AS INT
	DECLARE @monthdate AS INT
	DECLARE @daydate AS INT
	SET @yeardate = YEAR(@date)
	SET @monthdate = MONTH(@date)
	SET @daydate = DATEPART(DAY, @date)
	SET @datec = CAST(@yearDate AS VARCHAR)  + '-' 
				+ CASE WHEN @monthdate < 10 THEN '0'
					 WHEN @monthdate > 9 THEN ''
				END
				+ CAST(@monthdate AS VARCHAR) + '-' + 
				CASE WHEN @daydate < 10 THEN '0'
					 WHEN @daydate > 9 THEN ''
			
				END
				+ CAST(@daydate AS VARCHAR)
	RETURN @datec
END;
