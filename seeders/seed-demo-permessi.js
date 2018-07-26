'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('amt_permessi', [
        {
            "P_ID": 1,
            "P_KEY": "read",
            "P_DESCRIPTION": "read content",
            "P_GROUP_TAG": ""
        },
        {
            "P_ID": 2,
            "P_KEY": "create",
            "P_DESCRIPTION": "create content",
            "P_GROUP_TAG": ""
        },
        {
            "P_ID": 3,
            "P_KEY": "update",
            "P_DESCRIPTION": "update content",
            "P_GROUP_TAG": ""
        },
        {
            "P_ID": 4,
            "P_KEY": "delete",
            "P_DESCRIPTION": "delete content",
            "P_GROUP_TAG": ""
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('amt_permessi', null, {});
  }
};