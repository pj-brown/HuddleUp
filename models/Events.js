// Creating our User model
module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define("Events", {
        // The email cannot be null, and must be a proper email before creation
        EventDate: {
            type: DataTypes.DATE
        },
        EventStartTime: {
            type: DataTypes.TIME
        },
        EventEndTime: {
            type: DataTypes.TIME
        },
        EventType: {
            type: DataTypes.STRING
        }

    });

    Event.associate = function (models) {

        Event.belongsTo(models.Roster, {
            foreignKey: {
                allowNull: false
            }
        })

    }

    return Event;
};
