import { UserModel } from './user.model';
import { DataTypes, Sequelize } from 'sequelize';
import { Initializer } from '../../common/model/initializer';
import {ItemModel} from "../../item/model/item.model";
import {FileModel} from "../../files/model/file.model";
import {MessageModel} from "../../message/model/message.model";

export class UserInitializer extends Initializer {

  init(connection: Sequelize) {
    UserModel.init({
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(128),
        allowNull: true
      },
      addres: {
        type: DataTypes.STRING(128),
        allowNull: true
      },
      login: {
        type: DataTypes.STRING(128),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: true
      },
      pass: {
        type: DataTypes.STRING(128),
        allowNull: true
      },
      bank: {
        type: DataTypes.STRING(128),
        allowNull: true
      },
      payment_methods: {
        type: DataTypes.STRING(128),
        allowNull: true
      }
    }, {
      tableName: 'users',
      sequelize: connection,
      timestamps: false
    });
  }
}
