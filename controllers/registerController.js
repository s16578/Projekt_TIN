const RegisterRepository = require('../repository/RegisterRepository');
const LoginRepository = require('../repository/LoginRepository');
const db = require('../config/dbconfig');
const authUtils = require('../util/authUtil');

exports.showRegister = (req, res, next) => {
    res.render('register', { navLocation: '' })
};


exports.addRegister = (req, res, next) => {
    const user = req.body.login;
    const password = req.body.password;
    LoginRepository.findByUser(user, (result) => {
        if (result) {
            res.render('register', {
                navLocation: '',
                loginError: "Nazwa użytkownika jest już zajęta"
            })
        } else {
            let query = ' INSERT INTO Users (login, password, role) '
                + "VALUES (@login, @pass, 'user');"

            var passHash = authUtils.hashPassword(password)

            try {
                db.pool.connect(() => {
                    db.pool.request()
                        .input('login', user)
                        .input('pass', passHash)
                        .query(query, (error, resul) => {
                            if (error) {
                                console.log(err);
                            }
                            else {
                                resul.rowsAffected;
                                res.redirect('/auth');
                            }
                        })
                })
            } catch (error) {
                console.log(error);
            }
        }
    })
};
