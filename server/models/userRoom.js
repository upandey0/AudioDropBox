import { Model, DataTypes } from 'sequelize';

class UserRoom extends Model {
  static init(sequelize) {
    return super.init({
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
