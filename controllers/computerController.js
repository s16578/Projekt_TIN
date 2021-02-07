const ComputerRepository = require('../repository/ComputerRepository')
const url = require('url');

exports.showComputerList = (req, res, next) => {
    ComputerRepository.getComputers((callback) => {
        var messageOutput;
        const queryObject = url.parse(req.url, true).query;
        if (queryObject.message) {
            messageOutput = queryObject.message;
        }
        res.render('pages/computer/list', { callback: callback, message: messageOutput, navLocation: 'comp' })

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
        var value = encodeURIComponent('Usunięto komputer.');
        res.redirect('/computers?message=' + value);
    })
};

exports.createComputer = (req, res, next) => {
    ComputerRepository.createComputer(req.body, (callback) => {
        var value = encodeURIComponent('Dodano nowy komputer.');
        res.redirect('/computers?message=' + value);
    })
};

exports.updateComputer = (req, res, next) => {
    const compId = req.params.compId
    ComputerRepository.updateComputer(compId, req.body, (callback) => {
        var value = encodeURIComponent('Zaktualizowano komputer.');
        res.redirect('/computers?message=' + value);
    })
};