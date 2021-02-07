var express = require('express');
var router = express.Router();
var authUtil = require('../util/authUtil');

var repairController = require('../controllers/repairController');

router.get('/', repairController.showRepairList);
router.get('/add', repairController.showRepairForm);
router.get('/details/:repairId', repairController.showRepairDetails);
router.get('/edit/:repairId', repairController.showRepairEdit);

router.get('/delete/:repairId', authUtil.permitAuthenticatedAdmin, repairController.deleteRepair);

router.post('/add', repairController.createRepair);
router.post('/edit/:repairId', repairController.updateRepair);

module.exports = router;