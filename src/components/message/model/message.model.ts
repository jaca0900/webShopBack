import { BaseModel } from '../../common/model/base.model';

export class MessageModel extends BaseModel {
  public content: string | null;
  public title: string | null;
  public sender_id: number | null;
  public sendDate: Date | null;
  public receiver_id: number | null;
}