'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('amt_utenti', [
        {
            "U_ID": 1,
            "U_USERNAME": "daniele",
            "U_PASSWORD": "danielepwd",
            "U_CREATION": "2018-07-25T11:44:46.000Z"
        },
        {
            "U_ID": 2,
            "U_USERNAME": "pasquale",
            "U_PASSWORD": "pasqualepwd",
            "U_CREATION": "2018-07-25T11:44:53.000Z"
        },
        {
            "U_ID": 3,
            "U_USERNAME": "venus",
            "U_PASSWORD": "venuspwd",
            "U_CREATION": "2018-07-25T11:44:53.000Z"
        },
        {
            "U_ID": 4,
            "U_USERNAME": "carlo",
            "U_PASSWORD": "carlopwd",
            "U_CREATION": "2018-07-25T11:44:53.000Z"
        },
        {
            "U_ID": 5,
            "U_USERNAME": "guest",
            "U_PASSWORD": "guestpwd",
            "U_CREATION": "2018-07-26T05:27:35.000Z"
        },
        {
            "U_ID": 6,
            "U_USERNAME": "another",
            "U_PASSWORD": "anotherpwd",
            "U_CREATION": "2018-07-26T05:28:35.000Z"
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('amt_utenti', null, {});
  }
};