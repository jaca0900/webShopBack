import {IBaseModel} from "../../common/model/base.model.interface";

export interface IMessage extends IBaseModel {
  content: string | null;
  sender_id: number | null;
  title: string | null;
  sendDate: Date | null;
  receiver_id: number | null;
}