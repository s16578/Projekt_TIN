const db = require('../config/dbconfig');

exports.getRepairs = (callback) => {
    let query = "SELECT e.name + ' ' + e.surname AS name, c.model, r.status, r.id FROM Repairs AS r "
        + 'INNER JOIN Computers AS c '
        + 'ON r.computer_id = c.id '
        + 'INNER JOIN Employees AS e '
        + 'ON r.employee_id = e.id';
    try {
        db.pool.connect(() => {
            db.pool.request().query(query, (err, res) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(res.recordset);
                    callback(res.recordset);
                }
            })

        })
    } catch (error) {
        console.log(error);
    }
};

exports.getRepairById = (repairId, callback) => {
    let query = 'SELECT r.id, r.status, dbo.castDateNode(r.date_start) AS date_start, dbo.castDateNode(r.date_end) AS date_end, r.note, r.cost, '
        + 'e.name, e.surname, e.role, c.model, c.customer_note, c.Ram, c.Disc, c.Gpu '
        + 'FROM Repairs r '
        + 'INNER JOIN Computers c '
        + 'ON c.id = r.computer_id '
        + 'INNER JOIN Employees e '
        + 'ON r.employee_id = e.id '
        + 'WHERE r.id = @repairId'
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('repairId', repairId)
                .query(query, (err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(res.recordset);
                        callback(res.recordset);
                    }
                })

        });
    } catch (error) {
        console.log(error);
    }
};

exports.createRepair = (newRepairData, callback) => {
    let query = 'BEGIN TRANSACTION '
        + 'INSERT INTO Repairs (employee_id, computer_id, date_start, status) '
        + "VALUES (@empId, @compId, (SELECT CAST (GETDATE() AS DATE)), 'W realizacji') "
        + 'COMMIT TRANSACTION';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('empId', newRepairData.empId)
                .input('compId', newRepairData.compId)
                .query(query, (err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        callback(res.rowsAffected);
                    }
                })
        })
    } catch (error) {
        console.log(error);
    }
};

exports.updateRepair = (repairId, repairData, callback) => {
    let query = 'BEGIN TRANSACTION '
        + 'UPDATE Repairs SET date_end = @date_end, status = @status, note = @note, cost = @cost '
        + 'WHERE id = @repairId '
        + 'COMMIT TRANSACTION;';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('status', repairData.status)
                .input('note', repairData.note)
                .input('date_end', repairData.date_end)
                .input('cost', repairData.cost)
                .input('repairId', repairId)
                .query(query, (err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        callback(res);
                    }
                })
        })
    }
    catch (error) {
        console.log(error);
    }
};

exports.deleteRepair = (repairId, callback) => {
    let query = 'BEGIN TRANSACTION '
        + 'DELETE FROM Repairs WHERE id = @repairId '
        + 'COMMIT TRANSACTION;'
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('repairId', repairId)
                .query(query, (err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        callback(res.rowsAffected);
                    }
                })

        });
    } catch (error) {
        console.log(error);
    }
};
