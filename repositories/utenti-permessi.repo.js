// SELECT * FROM `amt_premessi_utenti` WHERE `UP_U_ID` = 1 AND `UP_P_ID` = 2

const db = require("../models");

class Repository {
  findAll() {
    return db.utenti_permessi.findAll();
  }

  create(data) {
    return db.utenti_permessi.create(data);
  }

  findOne(userId, permissionId) {
    return db.utenti_permessi.findOne({ where: { UP_U_ID: userId, UP_P_ID: permissionId } });
  }

  destroy(userId, permissionId) {
    return db.permessi.destroy({ where: { UP_U_ID: userId, UP_P_ID: permissionId } })
  }
}

var repository = new Repository();

module.exports = repository;
