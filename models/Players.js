module.exports = function (sequelize, DataTypes) {
    const Players = sequelize.define("Players", {
        // The email cannot be null, and must be a proper email before creation
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.INTEGER
        },
        playerNumber: {
            type: DataTypes.INTEGER
        },
        points: {
            type: DataTypes.INTEGER
        },
        rebounds: {
            type: DataTypes.INTEGER
        },
        assist: {
            type: DataTypes.INTEGER
        },
        gamesPlayed: {
            type: DataTypes.INTEGER
        }
    });

    Players.associate = function (models) {

        Players.belongsTo(models.Roster, {
            foreignKey: {
                allowNull: false
            }
        })

    }
    return Players;
};
