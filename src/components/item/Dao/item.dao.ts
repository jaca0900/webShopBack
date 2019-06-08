import { GenericDao } from '../../common/dao/generic.dao';
import { ItemModel } from '../model/item.model';
import { IItem } from '../model/item.interface';

export class ItemDao extends GenericDao<IItem> {

  constructor() {
    super(ItemModel);
  }
}