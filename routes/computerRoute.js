var express = require('express');
var router = express.Router();
var authUtil = require('../util/authUtil');

var computerController = require('../controllers/computerController');

router.get('/', computerController.showComputerList);
router.get('/add', computerController.showComputerForm);
router.get('/details/:compId', computerController.showComputerDetails);
router.get('/edit/:compId', computerController.showComputerEdit);

router.get('/delete/:compId', authUtil.permitAuthenticatedAdmin, computerController.deleteComputer);

router.post('/edit/:compId', computerController.updateComputer);
router.post('/add', computerController.createComputer);


module.exports = router;