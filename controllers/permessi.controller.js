const repository = require('../repositories/permessi.repo');

// List
const list = async (req, res) => {
    repository.findAll()
        .then(permessi => {
            res.json(permessi);
        }).catch(err => res.send(err.errors));
};
module.exports.list = list;

// Create
const create = async (req, res) => {
    const data = req.body;
    repository.create(data).then((permesso) => {
        res.json(permesso);
    }).catch(err => res.send(err.errors));

};
module.exports.create = create;

// Show one
const show = async (req, res) => {
    const id = req.params.id;
    repository.findById(id)
        .then(permesso => {
            res.json(permesso);
        }).catch(err => res.send(err.errors));
};
module.exports.show = show;

// Update
const update = async (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    repository.findById(id)
        .then(permesso => {
            return permesso.update(newData).then((self) => {
                res.json(self);
            });
        }).catch(err => res.send(err.errors));
};
module.exports.update = update;

// Destroy
const destroy = async (req, res) => {
    const id = req.params.id;
    repository.destroy(id)
        .then(permesso => {
            res.json(permesso);
        }).catch(err => res.send(err.errors));
};
module.exports.destroy = destroy;
