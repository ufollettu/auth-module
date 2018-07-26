const users_permissions_repo = require('../repositories/utenti-permessi.repo');
const user_repo = require('../repositories/utenti.repo');

function verifyToken(req, res, next) {

    req.userId = 2;

    console.log(`User id: ${req.userId}`);
    next();
}

function can(permissionId, userId) {

    return (req, res, next) => {
        userId = userId || req.userId || 0;
        // call the db: here we using a repo with sequelize ORM
        users_permissions_repo.findOne(userId, permissionId)
            .then(res => {
                if (!res) {
                    throw new Error('non autorizzato')
                } else if (res) {
                    next()
                }
            })
            .catch(err => {
                res.status(401).send(err.message);
            })
    }
}

function allow(permissionId, userId) {
    return (req, res, next) => {
        permissionId = permissionId || req.permissionId || 0;
        userId = userId || req.userId || 0;
        const data = req.body || { UP_U_ID: userId, UP_P_ID: permissionId } || {}
        // console.log(data);
        // call the db: here we using a repo with sequelize ORM
        user_repo.findById(userId).then(utente => {
            users_permissions_repo.create(data).then(result =>{
                console.log(result); // no result!
                res.json(result);
            }).catch(err => res.send(err.errors));
        })
    };
}

function disallow(permissionId, userId) {
    return (req, res, next) => {
        permissionId = permissionId || req.permissionId || 0;
        userId = userId || req.userId || 0;
        // call the db: here we using a repo with sequelize ORM
        users_permissions_repo.findOne(userId, permissionId)
            .then(res => {

            })
            .catch(err => {
                res.status(401).send(err.message);
            })
    }
}

module.exports = {
    verifyToken,
    can,
    allow,
    disallow
};