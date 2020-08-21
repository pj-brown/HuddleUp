// Creating our Manager model
module.exports = function (sequelize, DataTypes) {
  const Manager = sequelize.define("Manager", {
    // The email cannot be null, and must be a proper email before creation
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    //   validate: {
    //     isEmail: true
    //   }
    // },
    // The password cannot be null
    // password: {
    //   type: DataTypes.STRING,
    // },
    displayName: {
      type: DataTypes.STRING,
    }
  });

  Manager.associate = function (models) {

    Manager.hasOne(models.Roster, {
      onDelete: "cascade"
    });
  };
  return Manager;
};
