import { ItemModel } from './item.model';
import { DataTypes, Sequelize } from 'sequelize';
import { Initializer } from '../../common/model/initializer';
import { FileModel } from '../../files/model/file.model';
import { UserModel } from '../../user/model/user.model';

export class ItemInitializer extends Initializer {

  init(connection: Sequelize) {
    ItemModel.init({
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(512),
        allowNull: true
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      item_price: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      amount_left: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
    }, {
      tableName: 'items',
      sequelize: connection,
      timestamps: false
    });

    ItemModel.hasMany(FileModel, {
      sourceKey: 'id',
      foreignKey: 'item_id',
      as: 'images' // this determines the name in `associations`!
    });

    ItemModel.belongsTo(UserModel, {
      as: 'user',
      foreignKey: 'user_id'
    }); // Then user Has Many Items
  }
}
