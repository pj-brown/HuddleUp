module.exports = function (sequelize, DataTypes) {
    const Roster = sequelize.define("Roster", {
 
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
                targetKey: 'uid',
                allowNull: false
            }
        });

        // update later
        Roster.hasMany(models.Players, {
            onDelete: "cascade"

        })
        Roster.hasMany(models.Events, {
            onDelete: "cascade"

        })

    }
    return Roster;
};
