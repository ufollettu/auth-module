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
        let newKeys = auth.allow(
          parseInt(req.body.userId),
          parseInt(req.body.permissionId)
        );

        const formattedKeys = newKeys.map(obj => {
          var rObj = {};
          rObj.UP_U_ID = obj.userId;
          rObj.UP_P_ID = obj.permissionId;
          return rObj;
        });
        // console.log(formattedKeys);

        repository
          .destroy()
          .then(affectedRows => {
            return repository.bulkCreate(formattedKeys)
            .then(newRows => {
              return res.json(newRows)
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
      let newKeys = auth.disallow(
        parseInt(req.body.userId),
        parseInt(req.body.permissionId)
      );

      const formattedKeys = newKeys.map(obj => {
        var rObj = {};
        rObj.UP_U_ID = obj.userId;
        rObj.UP_P_ID = obj.permissionId;
        return rObj;
      });
      // console.log(formattedKeys);

      repository
        .destroy()
        .then(affectedRows => {
          return repository.bulkCreate(formattedKeys)
          .then(newRows => {
            return res.json(newRows)
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
