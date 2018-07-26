const db = require("../models");

class Repository {
  findAll() {
    return db.permessi.findAll();
  }

  create(data) {
    return db.permessi.create(data);
  }

  findById(id) {
    return db.permessi.findById(id);
  }

  findOne(key) {
    return db.permessi.findOne({ where: { P_KEY: key } });
  }

  destroy(id) {
    return db.permessi.destroy({
      where: {
          P_ID: id
      }
  })
  }
}

var repository = new Repository();

module.exports = repository;
