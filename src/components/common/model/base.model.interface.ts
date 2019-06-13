import { FindOrCreateOptions } from 'sequelize';

export interface IBaseModel extends FindOrCreateOptions {
  id: number;
  dataValues: { [key: string]: any };
  destroy(): Promise<any>;
}