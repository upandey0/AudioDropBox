import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      sequelize,
      modelName: 'User'
    });
  }

  static associate(models) {
    this.hasMany(models.Room, { foreignKey: 'hostId' });
    this.belongsToMany(models.Room, { through: models.UserRoom, foreignKey: 'userId' });
    this.hasMany(models.Message, { foreignKey: 'senderId' });
  }
}

export default User;