'use strict';
module.exports = (sequelize, DataTypes) => {
  var Utenti = sequelize.define('amt_utenti', {
    U_ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    U_USERNAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    U_PASSWORD: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    U_CREATION: {
      type: DataTypes.DATE,
      defaultValue: null
    }
  }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'amt_utenti',
  });
  Utenti.associate = function (models) {
    // associations can be defined here
  };
  return Utenti;
};