'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('amt_permessi_utenti', [
        {
            "UP_ID": 0,
            "UP_U_ID": 1,
            "UP_P_ID": 1
        },
        {
            "UP_ID": 1,
            "UP_U_ID": 1,
            "UP_P_ID": 1
        },
        {
            "UP_ID": 2,
            "UP_U_ID": 1,
            "UP_P_ID": 2
        },
        {
            "UP_ID": 3,
            "UP_U_ID": 1,
            "UP_P_ID": 3
        },
        {
            "UP_ID": 4,
            "UP_U_ID": 1,
            "UP_P_ID": 4
        },
        {
            "UP_ID": 5,
            "UP_U_ID": 2,
            "UP_P_ID": 1
        },
        {
            "UP_ID": 6,
            "UP_U_ID": 2,
            "UP_P_ID": 2
        },
        {
            "UP_ID": 7,
            "UP_U_ID": 3,
            "UP_P_ID": 2
        },
        {
            "UP_ID": 8,
            "UP_U_ID": 3,
            "UP_P_ID": 4
        },
        {
            "UP_ID": 9,
            "UP_U_ID": 4,
            "UP_P_ID": 1
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('amt_permessi_utenti', null, {});
  }
};