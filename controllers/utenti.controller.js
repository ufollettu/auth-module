const repository = require('../repositories/utenti.repo');

// List
const list = async (req, res) => {
    repository.findAll()
        .then(utenti => {
            res.json(utenti);
        }).catch(err => res.send(err.errors));
};
module.exports.list = list;

// Create
const create = async (req, res) => {
    const data = req.body;
    repository.create(data).then((utente) => {
        res.json(utente);
    }).catch(err => res.send(err.errors));

};
module.exports.create = create;

// Show one
const show = async (req, res) => {
    const id = req.params.id;
    repository.findById(id)
        .then(utente => {
            res.json(utente);
        }).catch(err => res.send(err.errors));
};
module.exports.show = show;

// Update
const update = async (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    repository.findById(id)
        .then(utente => {
            return utente.update(newData).then((self) => {
                res.json(self);
            });
        }).catch(err => res.send(err.errors));
};
module.exports.update = update;

// Destroy
const destroy = async (req, res) => {
    const id = req.params.id;
    repository.destroy(id)
        .then(utente => {
            res.json(utente);
        }).catch(err => res.send(err.errors));
};
module.exports.destroy = destroy;
