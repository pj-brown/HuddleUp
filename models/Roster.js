module.exports = function (sequelize, DataTypes) {
    const Roster = sequelize.define("Roster", {

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
        });

        // update later
        Roster.hasMany(models.Players, {
            foreignKey: {
                allowNull: false
            }
        })
        Roster.hasMany(models.Events, {
            foreignKey: {
                allowNull: false
            }
        })

    }
    return Roster;
};
