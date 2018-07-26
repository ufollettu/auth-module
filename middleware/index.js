const users_permissions_repo = require('../repositories/utenti-permessi.repo');

function verifyToken(req, res, next) {

    req.userId = 1;
    // req.permissionId = 3

    console.log(`User id: ${req.userId}`);
    next();
}

function can(permissionId, userId) {

    return (req, res, next) => {
        userId = userId || req.userId || 0;
        // call the db: here we using a repo with sequelize ORM
        users_permissions_repo.findOne(req.userId, permissionId)
            .then(res => {
                if (!res) {
                    throw new Error('non autorizzato')
                } else if (res) {
                    // console.log(res)
                    next()
                    return true
                }
            })
            .catch(err => {
                res.status(401).send(err.message);
            })
    }
}

module.exports = {
    verifyToken,
    can
};