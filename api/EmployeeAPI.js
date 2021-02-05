const EmployeeRepository = require('../repository/EmployeeRepository');

exports.getEmployees = (req, res, next) => {
    EmployeeRepository.getEmployees((callback) => {
        if (callback) {
            res.json(callback);
        }
        else console.log(err);
        //console.log('Returning');
        //res.status(200).json(x);
    });

    // .then(emps => {
    //     res.status(200).json(emps);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
};

exports.getEmployeeById = (req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.getEmployeeById(empId, (callback) => {
        if (callback) { res.json(callback) }
        else console.log(err);
    })
    //console.log(empId);
    //if (res.status(200))
    //   res.json();
    //else
    //    res.status(404);
    //console.log('Returning');
    //res.status(200).json(x);
};
/*
    .then(emp => {
        if (!emp) {
            res.status(404).json({
                message: 'Employee with id: ' + empId + ' not found'
            })
        } else {
            res.status(200).json(emp);
        }
    });
*/

exports.createEmployee = (req, res, next) => {
    EmployeeRepository.createEmployee(req.body, (callback) => {
        if (res.status(201))
            res.status(201).json(callback);
        else
            err.statusCode = 500;
    })
    /*
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
        */
};

exports.updateEmployee = (req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.updateEmployee(empId, req.body, (callback) => {
        if (res.status(201))
            res.status(201).json({ message: 'Emp updated', callback });
        else
            err.statusCode = 500;
    })
};

exports.deleteEmployee = (req, res, next) => {
    const empId = req.params.empId;
    EmployeeRepository.deleteEmployee(empId, (callback) => {
        if (callback) { res.json({ message: 'Removed employee', callback }) }
        else err.statusCode = 500;
    })
    //console.log(empId);
    //if (res.status(200))
    //   res.json();
    //else
    //    res.status(404);
    //console.log('Returning');
    //res.status(200).json(x);
};