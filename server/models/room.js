import { Model, DataTypes } from 'sequelize';

class Room extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      participants: {
        type: DataTypes.JSON,
        defaultValue: []
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      sequelize,
      modelName: 'Room'
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'hostId' });
    this.belongsToMany(models.User, { through: models.UserRoom, foreignKey: 'roomId' });
  }
}

export default Room;
