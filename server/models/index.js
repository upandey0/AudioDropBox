import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.js';
import Room from './room.js';
import UserRoom from './userRoom.js';

const models = {
  User: User.init(sequelize, Sequelize),
  Room: Room.init(sequelize, Sequelize),
  UserRoom: UserRoom.init(sequelize, Sequelize)
};

// Define associations
Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

// Attach Sequelize instance
models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
