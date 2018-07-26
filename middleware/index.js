const users_permissions_repo = require('../repositories/permessi.repo');

function verifyToken(req, res, next) {

    req.userId = req.body.id;

    console.log(`User id: ${req.userId}`);
    next();
}

function userAuthorization(req, res, next) {

    function can(userId, permissionid) {
        // call the db
        users_permissions.forEach(element => {
            if (userId == element.userid) {
                if (element.permissionid == permissionid) {
                    console.log('true');
                }
            }
        });
    }
}

module.exports = {
    verifyToken,
    userAuthorization
};