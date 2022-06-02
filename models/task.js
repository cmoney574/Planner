const { Model, DataTypes } = require('sequelize');

class Task extends Model {}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        eventdate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        information: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        }

    },
    {
        sequelize,
        modelName: 'task',
    }
);

module.exports = Task