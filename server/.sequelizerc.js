// .sequelizerc.js
import path from 'path'

module.exports = {
  'config': path.resolve('config/config.js'),
  'models-path': path.resolve('models'),
  'seeders-path': path.resolve('seeders'),
  'migrations-path': path.resolve('migrations')
};
