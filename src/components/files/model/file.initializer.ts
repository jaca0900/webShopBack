import { FileModel } from './file.model';
import { DataTypes, Sequelize } from 'sequelize';
import { Initializer } from '../../common/model/initializer';

export class FileInitializer extends Initializer {

  init(connection: Sequelize) {
    FileModel.init({
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      item_id: {
        type: new DataTypes.BIGINT,
        allowNull: false,
      },
      fileUrl: {
        type: new DataTypes.STRING(512),
        allowNull: true
      }
    }, {
      tableName: 'user',
      sequelize: connection,
      timestamps: false
  });
  }
}
