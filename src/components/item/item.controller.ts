import { ItemDao } from './Dao/item.dao';
import { IItem } from './model/item.interface';

export class ItemController {
  private dao: ItemDao;

  constructor () {
    this.dao = new ItemDao();
  }

  public query(predicate) {
    return this.dao.query(predicate);
  }

  public createUser(data: IItem): Promise<IItem> {
    return this.dao.createUnique(data);
  }

  public updateUser(data: IItem, predicate: { [key: string]: any }): Promise<any> {
    return this.dao.update(data, predicate);
  }

  public deleteUser(predicate: { [key: string]: any }) {
    return this.dao.delete(predicate);
  }
}