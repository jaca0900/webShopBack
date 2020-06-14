import { MessageModel } from './message.model';
import { DataTypes, Sequelize } from 'sequelize';
import { Initializer } from '../../common/model/initializer';
import {ItemModel} from "../../item/model/item.model";
import {FileModel} from "../../files/model/file.model";
import {UserModel} from "../../user/model/user.model";

export class MessageInitializer extends Initializer {

  init(connection: Sequelize) {
    MessageModel.init({
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(512),
        allowNull: true
      },
      sendDate: {
        type: DataTypes.DATE(),
        allowNull: true
      },
      sender_id: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      receiver_id: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
    }, {
      tableName: 'messages',
      sequelize: connection,
      timestamps: false
  });

    ItemModel.belongsTo(UserModel, {
      as: 'sentTo',
      foreignKey: 'sender_id'
    }); // Then user Has Many Items

    ItemModel.belongsTo(UserModel, {
      as: 'receivedFrom',
      foreignKey: 'receiver_id'
    }); // Then user Has Many Items
  }
}
