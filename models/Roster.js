module.exports = function (sequelize, DataTypes) {
    var Roster = sequelize.define("roster", {
        
        managerID: {
            type: DataTypes.STRING
        },
        teamName: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        bio: {
            type: DataTypes.STRING
        },

    });

    Roster.associate = function (models) {

        Roster.belongsTo(models.Manager, {
            foreignKey: {
                allowNull: false
            }
        })

    }
    return Roster;
};
