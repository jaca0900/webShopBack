import { IBaseModel } from "../model/base.model.interface";
import { FindOrCreateOptions } from 'sequelize';

export class GenericDao
  <T extends IBaseModel> {

  constructor (private Model) {}

  public query(predicate): Promise<T[]> {
    return this.Model.findAll(predicate);
  }

  public findOne(predicate): Promise<T> {
    return this.Model.findOne(predicate)
  }

  public createUnique(data: T): Promise<T> {
    return this.Model.findOrCreate(data);
  }

  public update(data: T, predicate: { [key: string]: any }): Promise<any> {
    return this.Model.update(data, predicate);
  }

  public delete(predicate): Promise<any> {
    return this.findOne(predicate)
      .then(item => item.destroy())
  }
}