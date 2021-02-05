const EmployeeRepository = require('../repository/EmployeeRepository');


exports.showEmployeeList = (req, res, next) => {
    EmployeeRepository.getEmployees((callback) => {
        res.render('pages/employee/list', { callback: callback, success: '', navLocation: 'emp' })
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
    //const empId = req.empId;
    //const empData = { ...req.body };
    const empId = req.params.empId
    EmployeeRepository.updateEmployee(empId, req.body, (callback) => {
        res.redirect('/employees');
    })
};

exports.deleteEmployee = (req, res, next) => {
    const empId = req.params.empId;
    //let info = 'udalo sie';
    EmployeeRepository.deleteEmployee(empId, (callback) => {
        res.redirect('/employees');
        // EmployeeRepository.getEmployees((callback) => {
        //    console.log('dupa2');
        //   res.render('pages/employee/list', { callback: callback, success: info, navLocation: 'emp' })
        //   console.log('dupa');
        //})
    })
};
/*
exports.createEmployee = (req, res, next) => {
    if (req.body) {
        EmployeeRepository.createEmployee(req.body, (callback) => {
            if (res.status(201)) {
                res.redirect('/employees');
                //EmployeeRepository.getEmployees((callback) => {
                //    res.render('pages/employee/list', { callback: callback, success: "Udało się", navLocation: 'emp' })
                //})
            }
        })
    }
};
*/

exports.createEmployee = (req, res, next) => {
    EmployeeRepository.createEmployee(req.body, (result) => {
        EmployeeRepository.getEmployees((callback) => {
            res.render('pages/employee/list', {
                callback: callback,
                navLocation: "emp",
                success: 'k',
                result: result
            });
        })
    })
};