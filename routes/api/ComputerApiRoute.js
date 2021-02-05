const express = require('express');
const router = express.Router();

const computerApiController = require('../../api/ComputerAPI');

router.get('/', computerApiController.getComputers);
router.get('/:compId', computerApiController.getComputerById);
router.post('/', computerApiController.createComputer);
router.put('/:compId', computerApiController.updateComputer);
router.delete('/:compId', computerApiController.deleteComputer);

module.exports = router;