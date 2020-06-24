'use strict';
module.exports = (sequelize, DataTypes) => {
  const Userrole = sequelize.define('Userrole', {
    role_id: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {});
  Userrole.associate = function(models) {
    // associations can be defined here
  };
  return Userrole;
};