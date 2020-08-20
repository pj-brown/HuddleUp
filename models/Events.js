// Creating our User model
module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define("Events", {
        // The email cannot be null, and must be a proper email before creation
        rosterID: {
            type: DataTypes.INTEGER
        },
        eventDate: {
            type: DataTypes.DATE
        },
        eventTime: {
            type: DataTypes.TIME
        },
        eventType: {
            type: DataTypes.INTEGER
        },

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
