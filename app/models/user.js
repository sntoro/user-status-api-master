'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    User.hasMany(models.Status, {
      foreignKey: 'user_id',
      as: 'statuses',
    });

    User.belongsToMany(models.Role, {
      through: 'Userrole',
      as: 'roles',
      foreignKey: 'user_id'
    });

  };
  return User;
};