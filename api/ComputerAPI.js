const ComputerRepository = require('../repository/ComputerRepository');

exports.getComputers = (req, res, next) => {
    ComputerRepository.getComputers((callback) => {
        if (callback) {
            res.json(callback);
        }
        else console.log(err);
        //console.log('Returning');
        //res.status(200).json(x);
    });
};

exports.getComputerById = (req, res, next) => {
    const compId = req.params.compId;
    ComputerRepository.getComputerById(compId, (callback) => {
        if (callback) { res.json(callback) }
        else console.log(err);
    })
};

exports.createComputer = (req, res, next) => {
    ComputerRepository.createComputer(req.body, (callback) => {
        if (res.status(201))
            res.status(201).json(callback);
        else
            err.statusCode = 500;
    })
};

exports.updateComputer = (req, res, next) => {
    const compId = req.params.compId;
    ComputerRepository.updateComputer(compId, req.body, (callback) => {
        if (res.status(201))
            res.status(201).json({ message: 'Comp updated', callback });
        else
            err.statusCode = 500;
    })
};

exports.deleteComputer = (req, res, next) => {
    const compId = req.params.compId;
    ComputerRepository.deleteComputer(compId, (callback) => {
        if (callback) { res.json({ message: 'Removed computer', callback }) }
        else err.statusCode = 500;
    })
};