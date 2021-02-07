const db = require('../config/dbconfig');
//const empSchema = require('../model/joi/Employee');

exports.getEmployees = (callback) => {
    let query = 'SELECT * FROM Employees';
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

        });
    } catch (error) {
        console.log(error);
    }
};

exports.getEmployeeById = (empId, callback) => {
    let query = 'SELECT e.id, e.name, e.surname, e.role,'
        + ' c.model, r.note, r.status, dbo.castDateNode(r.date_start) AS date_start, dbo.castDateNode(r.date_end) AS date_end, r.cost'
        + ' FROM employees AS e'
        + ' LEFT JOIN repairs AS r'
        + ' ON e.id = r.employee_id'
        + ' LEFT JOIN computers AS c'
        + ' on r.computer_id = c.id'
        + ' WHERE e.id = @empid';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('empid', empId)
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

exports.createEmployee = (newEmpData, callback) => {
    //  const vRes = empSchema.validate(newEmpData, { abortEarly: false });
    //  if (vRes.error) {
    //     return Promise.reject(vRes.error);
    // }

    let query = 'INSERT INTO Employees (name, surname, role)'
        + ' VALUES (@name, @surname, @role)';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('name', newEmpData.name)
                .input('surname', newEmpData.surname)
                .input('role', newEmpData.role)
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


exports.updateEmployee = (empId, empData, callback) => {
    let query = 'UPDATE Employees SET name = @name, surname = @surname, '
        + 'role = @role WHERE id = @id';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('name', empData.name)
                .input('surname', empData.surname)
                .input('role', empData.role)
                .input('id', empId)
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

exports.deleteEmployee = (empId, callback) => {
    let query = 'BEGIN TRANSACTION '
        + 'IF EXISTS (SELECT * FROM Repairs r WHERE r.employee_id = @empId) '
        + 'BEGIN '
        + 'DELETE Repairs WHERE employee_id = @empId '
        + 'END '
        + 'DELETE Employees WHERE id = @empId '
        + 'COMMIT TRANSACTION';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('empid', empId)
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
