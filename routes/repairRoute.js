var express = require('express');
var router = express.Router();

var repairController = require('../controllers/repairController');

router.get('/', repairController.showRepairList);
router.get('/add', repairController.showRepairForm);
router.get('/details/:empId', repairController.showRepairDetails);
router.get('/edit/:empId', repairController.showRepairEdit);

module.exports = router;