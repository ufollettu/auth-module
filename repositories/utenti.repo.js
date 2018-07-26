const db = require("../models");

class Repository {
  findAll() {
    return db.utenti.findAll();
  }

  create(data) {
    return db.utenti.create(data);
  }

  findById(id) {
    return db.utenti.findById(id);
  }

  findOne(username) {
    return db.utenti.findOne({ where: { U_USERNAME: username } });
  }

  destroy(id) {
    return db.utenti.destroy({
      where: {
          U_ID: id
      }
  })
  }
}

var repository = new Repository();

module.exports = repository;
