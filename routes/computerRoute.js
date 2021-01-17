var express = require('express');
var router = express.Router();

var computerController = require('../controllers/computerController');

router.get('/', computerController.showComputerList)
router.get('/add', computerController.showComputerForm)
router.get('/details/:empId', computerController.showComputerDetails)
router.get('/edit/:empid', computerController.showComputerEdit)

module.exports = router;