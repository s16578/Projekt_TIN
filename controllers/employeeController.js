const EmployeeRepository = require('../repository/EmployeeRepository');
const url = require('url');

exports.showEmployeeList = (req, res, next) => {
    EmployeeRepository.getEmployees((callback) => {
        var messageOutput;
        const queryObject = url.parse(req.url, true).query;
        if (queryObject.message) {
            messageOutput = queryObject.message;
        }
        res.render('pages/employee/list', { callback: callback, message: messageOutput, navLocation: 'emp' })
    })
};

exports.showEmployeeForm = (req, res, next) => {
    res.render('pages/employee/form', { navLocation: 'emp' })
};

exports.showEmployeeDetails = (req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.getEmployeeById(empId, (callback) => {
        res.render('pages/employee/details', { callback: callback, navLocation: 'emp' })

    })
};

exports.showEmployeeEdit = (req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.getEmployeeById(empId, (callback) => {
        res.render('pages/employee/edit', { callback: callback, navLocation: 'emp' })
    })
};

exports.updateEmployee = (req, res, next) => {
    const empId = req.params.empId
    EmployeeRepository.updateEmployee(empId, req.body, (callback) => {
        var value = encodeURIComponent('Pracownik zaktualizowany.');
        res.redirect('/employees?message=' + value);
    })
};

exports.deleteEmployee = (req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.deleteEmployee(empId, (callback) => {
        var value = encodeURIComponent('Pracownik usunięty.');
        res.redirect('/employees?message=' + value);
    })
};

exports.createEmployee = (req, res, next) => {
    EmployeeRepository.createEmployee(req.body, (result) => {
        EmployeeRepository.getEmployees((callback) => {
            var value = encodeURIComponent('Dodano nowego pracownika.');
            res.redirect('/employees?message=' + value);
        })
    })//.catch(err => {
    //  res.render('pages/employee/form', {
    //      navLocation: 'emp',
    //      validationErrors: err.details
    // }
    //  )

};
