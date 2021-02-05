var express = require('express');
var router = express.Router();

var repairController = require('../controllers/repairController');

router.get('/', repairController.showRepairList);
router.get('/add', repairController.showRepairForm);
router.get('/details/:repairId', repairController.showRepairDetails);
router.get('/edit/:repairId', repairController.showRepairEdit);

router.get('/delete/:repairId', repairController.deleteRepair);

router.post('/add', repairController.createRepair);

module.exports = router;