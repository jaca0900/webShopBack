import { ItemDao } from './Dao/item.dao';
import { IItem } from './model/item.interface';

export class ItemController {
  private dao: ItemDao;

  constructor () {
    this.dao = new ItemDao();
  }

  public query(predicate): Promise<IItem[]> {
    return this.dao.query(predicate);
  }

  public queryEager(predicate): Promise<IItem[]> {
    return this.dao.queryEager(predicate);
  }

  public create(data: IItem): Promise<IItem> {
    delete data.images;

    return this.query({ where: { name: data.name }})
      .then(res => {
        if (res && res.length) {
          return res[0];
        }
        return this.dao.create(data);
      });
  }

  public update(data: IItem, predicate: { [key: string]: any }): Promise<any> {
    return this.dao.update(data, predicate);
  }

  public delete(predicate: { [key: string]: any }) {
    return this.dao.delete(predicate);
  }
}