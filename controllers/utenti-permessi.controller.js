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
const createOne = async (req, res) => {
  let auth = new UserAuth();

  /*  auth.allowOne(userId, permissionId, [tableUserIdField, tablePermissionIdField]) */
  let newKey = auth.allowOne(
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
module.exports.createOne = createOne;

// destroy One perm key
const destroyOne = async (req, res) => {
  let auth = new UserAuth();

  /*  auth.disallowOne(userId, permissionId, [tableUserIdField, tablePermissionIdField]) */
  let newKey = auth.disallowOne(
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
module.exports.destroyOne = destroyOne;

// Create
const create = async (req, res) => {
  repository
    .findAll()
    .then(keys => {
      if (!keys) {
        throw new Error("non autorizzato");
      } else if (keys) {
        let resultKeys = JSON.parse(JSON.stringify(keys));
        // Sequelize is quite painful... here destroy table and bulkCreate every time...
        let auth = new UserAuth(resultKeys);

        /*  auth.allow(userId, permissionId, [tableUserIdField, tablePermissionIdField]) */
        let newKeys = auth.allow(
          parseInt(req.body.userId),
          parseInt(req.body.permissionId),
          ["UP_U_ID", "UP_P_ID"]
        );

        // console.log(newKeys);

        repository
          .destroy()
          .then(affectedRows => {
            return repository.bulkCreate(newKeys).then(newRows => {
              return res.json(newRows);
            });
          })
          .catch(err => res.send(err.errors));
      }
    })
    .catch(err => {
      res.status(401).send(err.message);
    });
};
module.exports.create = create;

// Destroy
const destroy = async (req, res) => {
  repository
    .findAll()
    .then(keys => {
      if (!keys) {
        throw new Error("non autorizzato");
      } else if (keys) {
        let resultKeys = JSON.parse(JSON.stringify(keys));
        // Sequelize is quite painful... here destroy table and bulkCreate every time...
        let auth = new UserAuth(resultKeys);

        /*  auth.disallow(userId, permissionId, [tableUserIdField, tablePermissionIdField]) */
        let newKeys = auth.disallow(
          parseInt(req.body.userId),
          parseInt(req.body.permissionId),
          ["UP_U_ID", "UP_P_ID"]
        );

        // console.log(newKeys);

        repository
          .destroy()
          .then(affectedRows => {
            return repository.bulkCreate(newKeys).then(newRows => {
              return res.json(newRows);
            });
          })
          .catch(err => res.send(err.errors));
      }
    })
    .catch(err => {
      res.status(401).send(err.message);
    });
};
module.exports.destroy = destroy;
