const ComputerRepository = require('../repository/ComputerRepository')

exports.showComputerList = (req, res, next) => {
    ComputerRepository.getComputers((callback) => {
        res.render('pages/computer/list', { callback: callback, navLocation: 'comp' })

    })
};

exports.showComputerForm = (req, res, next) => {
    res.render('pages/computer/form', { navLocation: 'comp' })
};

exports.showComputerDetails = (req, res, next) => {
    const compId = req.params.compId;
    ComputerRepository.getComputerById(compId, (callback) => {
        res.render('pages/computer/details', { callback: callback, navLocation: 'comp' })

    })
};

exports.showComputerEdit = (req, res, next) => {
    const compId = req.params.compId;
    ComputerRepository.getComputerById(compId, (callback) => {
        res.render('pages/computer/edit', { callback: callback, navLocation: 'comp' })
    })
};

exports.deleteComputer = (req, res, next) => {
    const compId = req.params.compId;
    ComputerRepository.deleteComputer(compId, (callback) => {
        res.redirect('/computers');
    })
};

exports.createComputer = (req, res, next) => {
    ComputerRepository.createComputer(req.body, (callback) => {
        res.redirect('/computers')
    })
};

exports.updateComputer = (req, res, next) => {
    const compId = req.params.compId
    ComputerRepository.updateComputer(compId, req.body, (callback) => {
        res.redirect('/computers');
    })
};