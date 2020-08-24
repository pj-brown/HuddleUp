// Creating our User model
module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define("Events", {
        // The email cannot be null, and must be a proper email before creation
        eventDate: {
            type: DataTypes.DATE
        },
        eventStartTime: {
            type: DataTypes.TIME
        },
        eventEndTime: {
            type: DataTypes.TIME
        },
        eventType: {
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
