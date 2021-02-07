const db = require('../config/dbconfig');

exports.findByUser = (login, result) => {
    let query = 'SELECT login, password, role FROM Users WHERE login = @login';
    try {
        db.pool.connect(() => {
            db.pool.request()
                .input('login', login)
                .query(query, (err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    if (res.recordset[0])
                        result(res.recordset);
                    else
                        result();
                })
        });
    } catch (error) {
        console.log(error);
    }
};
