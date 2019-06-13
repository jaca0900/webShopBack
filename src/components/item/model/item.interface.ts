import {IBaseModel} from "../../common/model/base.model.interface";

export interface IItem extends IBaseModel {
  name: string | null;
  description: string | null;
  quantity: number | null;
  startDate: Date | null;
  endDate: Date | null;
  createDate: Date | null;
  item_price: number | null;
  amount_left: number | null;
  user_id: number | null;
  images: any[];
  user: { [key: string]: any };
}