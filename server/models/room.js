import { Model, DataTypes } from 'sequelize';

class Room extends Model {
  static init(sequelize) {
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
    }, {
      sequelize,
      modelName: 'Room'
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'hostId', as: 'host' });
    this.belongsToMany(models.User, { through: models.UserRoom, foreignKey: 'roomId' });
    this.hasMany(models.Message, { foreignKey: 'roomId' });
  }
}


export default Room;
