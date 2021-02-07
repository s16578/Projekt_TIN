const db = require('../config/dbconfig');

exports.getComputers = (callback) => {
    let query = 'SELECT * FROM Computers';
    try {
        db.pool.connect(() => {
            db.pool.request().query(query, (err, res) => {
                if (err) {
                    console.log(err)
                }
                else {
                    callback(res.recordset);
                }
            })

        });
    } catch (error) {
        console.log(error);
    }
};

exports.getComputerById = (compId, callback) => {
    let query = 'SELECT c.id, c.model, c.ram, c.disc, c.gpu, c.customer_note, r.status, r.cost, r.note, '
        + "e.name + ' ' + e.surname AS name "
        + 'FROM Computers AS c '
        + 'LEFT JOIN Repairs r '
        + 'ON c.id = r.computer_id '
        + 'LEFT JOIN Employees AS e '
        + 'ON r.employee_id = e.id '
        + 'WHERE c.id = @compId';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('compId', compId)
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

exports.createComputer = (newCompData, callback) => {
    let query = 'INSERT INTO Computers (model, Ram, Disc, Gpu, customer_note)'
        + ' VALUES (@model, @ram, @disc, @gpu, @customer_note)';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('model', newCompData.model)
                .input('ram', newCompData.ram)
                .input('disc', newCompData.disc)
                .input('gpu', newCompData.gpu)
                .input('customer_note', newCompData.customer_note)
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

exports.updateComputer = (compId, compData, callback) => {
    let query = 'UPDATE Computers SET model = @model, Ram = @ram, '
        + 'Disc = @disc, gpu = @gpu, customer_note = @customer_note WHERE id = @compId';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('model', compData.model)
                .input('ram', compData.ram)
                .input('disc', compData.disc)
                .input('gpu', compData.gpu)
                .input('customer_note', compData.customer_note)
                .input('compId', compId)
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

exports.deleteComputer = (compId, callback) => {
    let query = 'BEGIN TRANSACTION '
        + 'IF EXISTS (SELECT * FROM Repairs r WHERE r.computer_id = @compId) '
        + 'BEGIN '
        + 'DELETE Repairs WHERE computer_id = @compId '
        + 'END '
        + 'DELETE Computers WHERE id = @compId '
        + 'COMMIT TRANSACTION';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('compId', compId)
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
