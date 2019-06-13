import { GenericDao } from '../../common/dao/generic.dao';
import { ItemModel } from '../model/item.model';
import { IItem } from '../model/item.interface';

export class ItemDao extends GenericDao<IItem> {

  constructor() {
    super(ItemModel);
  }

  queryEager(predicate: { [key: string]: any }): Promise<IItem[]> {
    predicate.include = [
      ItemModel.associations.images,
      ItemModel.associations.user
    ];

    return super.query(predicate);
  }
}