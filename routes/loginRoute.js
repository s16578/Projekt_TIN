var express = require('express');
var router = express.Router();

var loginController = require('../controllers/loginController');

router.get('/', loginController.showLogin);
router.post('/', loginController.login);
router.get('/logout', loginController.logout);

module.exports = router;
