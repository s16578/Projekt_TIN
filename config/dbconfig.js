const sql = require("mssql/msnodesqlv8");

const pool = new sql.ConnectionPool({
    server: 'db-mssql',
    database: 's16578',
    driver: 'msnodesqlv8',
    options: { trustedConnection: true }
})

exports.pool = pool