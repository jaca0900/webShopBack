import { BaseModel } from '../../common/model/base.model';

export class ItemModel extends BaseModel {
  public name: string | null;
  public description: string | null;
  public quantity: number | null;
  public startDate: Date | null;
  public endDate: Date | null;
  public createDate: Date | null;
  public item_price: number | null;
  public amount_left: number | null;
  public user_id: number | null;
  public images: any[] | null;
}