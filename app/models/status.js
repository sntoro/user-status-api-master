'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    // associations can be defined here

    Status.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });

  };
  return Status;
};