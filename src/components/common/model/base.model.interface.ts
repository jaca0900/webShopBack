import { FindOrCreateOptions } from 'sequelize';

export interface IBaseModel extends FindOrCreateOptions {
  id: number;
  destroy(): Promise<any>;
}