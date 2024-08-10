import { DataTypes, Model } from "sequelize";

class Message extends Model {
    static init(sequelize) {
      return super.init({
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        senderId: {
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
      }, {
        sequelize,
        modelName: 'Message'
      });
    }
  
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'senderId', as: 'sender' });
      this.belongsTo(models.Room, { foreignKey: 'roomId' });
    }
  }
  
export default Message;  