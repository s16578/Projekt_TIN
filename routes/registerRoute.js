var express = require('express');
var router = express.Router();

var registerController = require('../controllers/registerController');


router.get('/', registerController.showRegister);
router.post('/', registerController.addRegister);

module.exports = router;