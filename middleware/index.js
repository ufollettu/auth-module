const users_permissions_repo = require('../repositories/utenti-permessi.repo');
const user_repo = require('../repositories/utenti.repo');

function verifyToken(req, res, next) {

    // req.userId = 2;
    // req.permissionId = 3

    console.log(`User id: ${req.userId}`);
    next();
}

function can(permissionId, userId) {

    return (req, res, next) => {
        userId = userId || req.userId || 0;
        // call the db: here we using a repo with sequelize ORM
        users_permissions_repo.findOne(userId, permissionId).then(res => {
            if (!res) {
                throw new Error('non autorizzato')
            } else if (res) {
                next()
            }
        }).catch(err => {
            res.status(401).send(err.message);
        })
    }
}

function allow(permissionId, userId) {
    return (req, res, next) => {
        const data = req.body || { UP_U_ID: userId, UP_P_ID: permissionId } || {}
        // call the db: here we using a repo with sequelize ORM
        user_repo.findById(userId).then(utente => {
            // create a new permission association
            users_permissions_repo.create(data).then(result => {
                res.json(result);
            }).catch(err => res.send(err.errors));
        })
    };
}

function disallow(permissionId, userId) {
    return (req, res, next) => {
        const data = req.body || { UP_U_ID: userId, UP_P_ID: permissionId } || {}
        // call the db: here we using a repo with sequelize ORM
        user_repo.findById(userId).then(utente => {
            // delete a founded permission association
            users_permissions_repo.destroy(data.UP_U_ID, data.UP_P_ID).then(result => {
                // console.log(result); // no result!
                res.status(200).send('destroyed');
            }).catch(err => res.send(err.errors));
        })
    };
}

module.exports = {
    verifyToken,
    can,
    allow,
    disallow
};