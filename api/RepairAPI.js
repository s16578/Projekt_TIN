const RepairRepository = require('../repository/RepairRepository');

exports.getRepairs = (req, res, next) => {
    RepairRepository.getRepairs((callback) => {
        if (callback) {
            res.json(callback);
        }
        else console.log(err);
    })
};


exports.getRepairById = (req, res, next) => {
    const repairId = req.params.repairId;
    RepairRepository.getRepairById(repairId, (callback) => {
        if (callback) { res.json(callback) }
        else console.log(err);
    })
};

exports.createRepair = (req, res, next) => {
    RepairRepository.createRepair(req.body, (callback) => {
        if (res.status(201))
            res.status(201).json(callback);
        else
            err.statusCode = 500;
    })
};

exports.updateRepair = (req, res, next) => {
    const repairId = req.params.repairId;
    RepairRepository.updateRepair(repairId, req.body, (callback) => {
        if (res.status(201))
            res.status(201).json({ message: 'Repair updated', callback });
        else
            err.statusCode = 500;
    })
};


exports.deleteRepair = (req, res, next) => {
    const repairId = req.params.repairId;
    RepairRepository.deleteRepair(repairId, (callback) => {
        if (callback) { res.json({ message: 'Removed employee', callback }) }
        else err.statusCode = 500;
    })
};
