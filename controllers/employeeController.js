exports.showEmployeeList = (req, res, next) => {
    res.render('pages/employee/list', { navLocation: 'emp' })
}

exports.showEmployeeForm = (req, res, next) => {
    res.render('pages/employee/form', { navLocation: 'emp' })
}

exports.showEmployeeDetails = (req, res, next) => {
    res.render('pages/employee/details', { navLocation: 'emp' })
}

exports.showEmployeeEdit = (req, res, next) => {
    res.render('pages/employee/edit', { navLocation: 'emp' })
}