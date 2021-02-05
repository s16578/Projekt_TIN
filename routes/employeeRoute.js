var express = require('express');
var router = express.Router();

var employeeController = require('../controllers/employeeController');

router.get('/', employeeController.showEmployeeList);
router.get('/add', employeeController.showEmployeeForm);
router.get('/details/:empId', employeeController.showEmployeeDetails);
router.get('/edit/:empId', employeeController.showEmployeeEdit);

router.get('/delete/:empId', employeeController.deleteEmployee);

router.post('/add', employeeController.createEmployee);
router.post('/edit/:empId', employeeController.updateEmployee);

module.exports = router;