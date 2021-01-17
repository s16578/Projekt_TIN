exports.showRepairList = (req, res, next) => {
    res.render('pages/repair/list', { navLocation: 'rep' })
}

exports.showRepairForm = (req, res, next) => {
    res.render('pages/repair/form', { navLocation: 'rep' })
}

exports.showRepairDetails = (req, res, next) => {
    res.render('pages/repair/details', { navLocation: 'rep' })
}

exports.showRepairEdit = (req, res, next) => {
    res.render('pages/repair/edit', { navLocation: 'rep' })
}
