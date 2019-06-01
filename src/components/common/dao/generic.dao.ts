import { IBaseModel } from "../model/base.model.interface";

export class GenericDao
  <T extends IBaseModel> {

  constructor (private Model) {}

  protected getAll(): Promise<T[]> {
    return this.Model.findAll()
  }
}