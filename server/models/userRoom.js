import { Model, DataTypes } from 'sequelize';

class UserRoom extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Room',
          key: 'id'
        }
      },
      role: {
        type: DataTypes.ENUM('host', 'participant'),
        allowNull: false
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
      modelName: 'UserRoom'
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId' });
    this.belongsTo(models.Room, { foreignKey: 'roomId' });
  }
}

export default UserRoom;
