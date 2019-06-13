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
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      fileUrl: {
        type: DataTypes.STRING(512),
        allowNull: true
      },
      content: {
        type: DataTypes.BLOB,
        allowNull: true
      }
    }, {
      tableName: 'files',
      sequelize: connection,
      timestamps: false
  });
  }
}
