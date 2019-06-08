import { ItemModel } from './item.model';
import { DataTypes, Sequelize } from 'sequelize';
import { Initializer } from '../../common/model/initializer';

export class ItemInitializer extends Initializer {

  init(connection: Sequelize) {
    ItemModel.init({
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(20),
        allowNull: false,
      },
      description: {
        type: new DataTypes.STRING(512),
        allowNull: true
      },
      quantity: {
        type: new DataTypes.INTEGER,
        allowNull: true
      },
      item_price: {
        type: new DataTypes.FLOAT,
        allowNull: true
      },
      amount_left: {
        type: new DataTypes.INTEGER,
        allowNull: true
      },
      startDate: {
        type: new DataTypes.DATE,
        allowNull: true
      },
      endDate: {
        type: new DataTypes.DATE,
        allowNull: true
      },
      createDate: {
        type: new DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: 'item',
      sequelize: connection,
      timestamps: false
  });
  }
}
