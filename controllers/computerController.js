exports.showComputerList = (req, res, next) => {
    res.render('pages/computer/list', { navLocation: 'comp' })
}

exports.showComputerForm = (req, res, next) => {
    res.render('pages/computer/form', { navLocation: 'comp' })
}

exports.showComputerDetails = (req, res, next) => {
    res.render('pages/computer/details', { navLocation: 'comp' })
}

exports.showComputerEdit = (req, res, next) => {
    res.render('pages/computer/edit', { navLocation: 'comp' })
}