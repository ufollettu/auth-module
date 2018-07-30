const repository = require("../repositories/utenti-permessi.repo");
const UserAuth = require("../middleware/auth").UserAuth;

// List
const list = async (req, res) => {
  repository
    .findAll()
    .then(result => {
      res.json(result);
    })
    .catch(err => res.send(err.errors));
};
module.exports.list = list;

// create One per key
const create = async (req, res) => {
  let auth = new UserAuth();

  /*  auth.allowOne(userId, permissionId, [tableUserIdField, tablePermissionIdField]) */
  let newKey = auth.allow(
    parseInt(req.body.userId),
    parseInt(req.body.permissionId),
    ["UP_U_ID", "UP_P_ID"]
  );

  repository
    .create(newKey)
    .then(data => {
      return res.json(data);
    })
    .catch(err => res.send(err.errors));
};
module.exports.create = create;

// destroy One perm key
const destroy = async (req, res) => {
  let auth = new UserAuth();

  /*  auth.disallowOne(userId, permissionId, [tableUserIdField, tablePermissionIdField]) */
  let newKey = auth.disallow(
    parseInt(req.body.userId),
    parseInt(req.body.permissionId),
    ["UP_U_ID", "UP_P_ID"]
  );

  repository
    .destroyOne(newKey)
    .then(rowsaffected => {
      return res.json(rowsaffected);
    })
    .catch(err => res.status(401).send(err.errors));
};
module.exports.destroy = destroy;
