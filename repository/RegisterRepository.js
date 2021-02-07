/*const db = require('../config/dbconfig');
//const authUtils = require('../util/authUtil');

exports.addRegister = (login, password, (callback) => {
    let query = ' INSERT INTO Users (login, password, role) '
        + "VALUES (@login, @pass, 'user');"

    //  var passHash = authUtils.hashPassword(password)

    try {
        db.pool.connect(() => {
            db.pool.request().query(query, (err, res) => {

            })

        })
    } catch (error) {
        console.log(error);
    }
});
*/