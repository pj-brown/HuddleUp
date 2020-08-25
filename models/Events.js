// Creating our User model
module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define("Events", {
        // The email cannot be null, and must be a proper email before creation
        StartDate: {
            type: DataTypes.DATE 
        },
        StartTime: {
            type: DataTypes.TIME 
        },
        EndDate: {
            type: DataTypes.DATE 
        },
        EndTime: {
            type: DataTypes.TIME
        },
        Title: {
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
