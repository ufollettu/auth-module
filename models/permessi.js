'use strict';
module.exports = (sequelize, DataTypes) => {
  var Permessi = sequelize.define('amt_permessi', {
    P_ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    P_KEY: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    P_DESCRIPTION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    P_GROUP_TAG: {
      type: DataTypes.STRING(100),
      defaultValue: null
    }
  }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'amt_permessi',
  });
  Permessi.associate = function (models) {
    // associations can be defined here
  };
  return Permessi;
};