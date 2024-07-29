import { Model, DataTypes } from 'sequelize'

class ErrorLog extends Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            message: {
                type: DataTypes.STRING,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            }
        },
            {
                sequelize,
                modelName: "ErrorLog"
            }
        )
    }
}

export default ErrorLog;