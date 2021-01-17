var express = require('express');
var router = express.Router();

var employeeController = require('../controllers/employeeController');

router.get('/', employeeController.showEmployeeList)
router.get('/add', employeeController.showEmployeeForm)
router.get('/details/:empId', employeeController.showEmployeeDetails)
router.get('/edit/:empId', employeeController.showEmployeeEdit)

module.exports = router;