import { UserModel } from './user.model';
import { DataTypes, Sequelize } from 'sequelize';
import { Initializer } from '../../common/model/initializer';

export class UserInitializer extends Initializer {

  init(connection: Sequelize) {
    UserModel.init({
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      first_name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      last_name: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      addres: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      login: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      pass: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      bank: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      payment_methods: {
        type: new DataTypes.STRING(128),
        allowNull: true
      }
    }, {
      tableName: 'user',
      sequelize: connection,
      timestamps: false
  });
  }
}
