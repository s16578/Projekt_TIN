const express = require('express');
const router = express.Router();

const repairApiController = require('../../api/RepairAPI');

router.get('/', repairApiController.getRepairs);
router.get('/:repairId', repairApiController.getRepairById);
router.post('/', repairApiController.createRepair);
router.put('/:repairId', repairApiController.updateRepair);
router.delete('/:repairId', repairApiController.deleteRepair);

module.exports = router;