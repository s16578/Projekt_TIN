const LoginRepository = require('../repository/LoginRepository');
const authUtil = require('../util/authUtil');

exports.login = (req, res, next) => {
    const user = req.body.login;
    const password = req.body.password;
    LoginRepository.findByUser(user, (result) => {
        if (!result) {
            res.render('auth', {
                navLocation: '',
                loginError: "Nieprawidłowy login lub hasło"
            })
        }
        else if (result[0].login !== user) {
            res.render('auth', {
                navLocation: '',
                loginError: "Nieprawidłowy login lub hasło"
            })
        } else if (authUtil.comparePasswords(password, result[0].password) === true) {
            req.session.loggedUser = result[0].role;
            res.redirect('/');
        } else {
            res.render('auth', {
                navLocation: '',
                loginError: "Nieprawidłowy login lub hasło"
            })
        }
    }
    )
};

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
};


exports.showLogin = (req, res, next) => {
    res.render('auth', { navLocation: '' })
};
