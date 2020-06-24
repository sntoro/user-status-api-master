'use strict';
module.exports = (sequelize, DataTypes) => {

  const Role = sequelize.define('Role', {
    // id: DataTypes.STRING,
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {});

  Role.associate = function(models) {
    // associations can be defined here

    Role.belongsToMany(models.User, {
      through: 'Userrole',
      as: 'users',
      foreignKey: 'role_id'
    });

  };
  return Role;
};