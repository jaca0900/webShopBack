import { BaseModel } from '../../common/model/base.model';

export class ItemModel extends BaseModel {
  public name: string | null;
  public description: string | null;
  quantity: number | null;
  startDate: number | null;
  endDate: number | null;
  createDate: number | null;
  item_price: number | null;
  amount_left: number | null;
}