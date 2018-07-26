const repository = require('../repositories/utenti-permessi.repo');

// List
const list = async (req, res) => {
    repository.findAll()
        .then(result => {
            res.json(result);
        }).catch(err => res.send(err.errors));
};
module.exports.list = list;

// Create
const create = async (req, res) => {
    const data = req.body;
    repository.create(data).then((result) => {
        res.json(result);
    }).catch(err => res.send(err.errors));

};
module.exports.create = create;

// Show one
const show = async (req, res) => {
    // change input id and key source!!!  
    const id = req.params.id;
    const key = req.params.key;
    repository.findOne(id, key)
        .then(result => {
            res.json(result);
        }).catch(err => res.send(err.errors));
};
module.exports.show = show;

// Update
const update = async (req, res) => {
    // change input id and key source!!!  
    const id = req.params.id;
    const key = req.params.key;

    const newData = req.body;
    repository.findOne(id, key)
        .then(result => {
            return result.update(newData).then((self) => {
                res.json(self);
            });
        }).catch(err => res.send(err.errors));
};
module.exports.update = update;

// Destroy
const destroy = async (req, res) => {
    // change input id and key source!!!  
    const id = req.params.id;
    const key = req.params.key;
    repository.destroy(id, key)
        .then(result => {
            res.json(result);
        }).catch(err => res.send(err.errors));
};
module.exports.destroy = destroy;
