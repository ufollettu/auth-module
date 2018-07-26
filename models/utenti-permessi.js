'use strict';
module.exports = (sequelize, DataTypes) => {
  var Permessi = sequelize.define('amt_premessi_utenti', {
    UP_U_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    UP_P_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'amt_premessi_utenti',
  });
  Permessi.associate = function (models) {
    // associations can be defined here
  };
  return Permessi;
};