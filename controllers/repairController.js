const RepairRepository = require('../repository/RepairRepository');
const EmployeeRepository = require('../repository/EmployeeRepository');
const ComputerRepository = require('../repository/ComputerRepository');

exports.showRepairList = (req, res, next) => {
    RepairRepository.getRepairs((callback) => {
        res.render('pages/repair/list', { callback: callback, navLocation: 'rep' })
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
    res.render('pages/repair/edit', { navLocation: 'rep' })
};

exports.deleteRepair = (req, res, next) => {
    const repairId = req.params.repairId;
    RepairRepository.deleteRepair(repairId, (callback) => {
        res.redirect('/repairs');
        console.log(callback);
    })
};

exports.createRepair = (req, res, next) => {
    RepairRepository.createRepair(req.body, (callback) => {
        res.redirect('/repairs')
    });
}