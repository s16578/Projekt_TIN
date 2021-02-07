const RepairRepository = require('../repository/RepairRepository');
const EmployeeRepository = require('../repository/EmployeeRepository');
const ComputerRepository = require('../repository/ComputerRepository');
const url = require('url');

exports.showRepairList = (req, res, next) => {
    RepairRepository.getRepairs((callback) => {
        var messageOutput;
        const queryObject = url.parse(req.url, true).query;
        if (queryObject.message) {
            messageOutput = queryObject.message;
        }
        res.render('pages/repair/list', { callback: callback, message: messageOutput, navLocation: 'rep' })
    })
};

exports.showRepairForm = (req, res, next) => {
    EmployeeRepository.getEmployees((emps) => {
        ComputerRepository.getComputers((comps) => {
            res.render('pages/repair/form', {
                emps: emps,
                comps: comps, navLocation: 'rep'
            })
        })
    })
};
exports.showRepairDetails = (req, res, next) => {
    const repairId = req.params.repairId;
    RepairRepository.getRepairById(repairId, (callback) => {
        res.render('pages/repair/details', { callback: callback, navLocation: 'rep' })
    })

};

exports.showRepairEdit = (req, res, next) => {
    const repairId = req.params.repairId;
    RepairRepository.getRepairById(repairId, (callback) => {
        res.render('pages/repair/edit', { callback: callback, navLocation: 'rep' })
    })
};

exports.deleteRepair = (req, res, next) => {
    const repairId = req.params.repairId;
    RepairRepository.deleteRepair(repairId, (callback) => {
        var value = encodeURIComponent('Usunięto naprawę.');
        res.redirect('/repairs?message=' + value)
    })
};

exports.createRepair = (req, res, next) => {
    RepairRepository.createRepair(req.body, (callback) => {
        var value = encodeURIComponent('Dodano nową naprawę.');
        res.redirect('/repairs?message=' + value)
    });
};

exports.updateRepair = (req, res, next) => {
    const repairId = req.params.repairId;
    RepairRepository.updateRepair(repairId, req.body, (callback) => {
        var value = encodeURIComponent('Zaktualizowano naprawę.');
        res.redirect('/repairs?message=' + value)
    })
};