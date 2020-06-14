import { MessageDao } from './Dao/message.dao';
import {IMessage} from './model/message.interface';

export class MessageController {
  private dao: MessageDao;

  constructor () {
    this.dao = new MessageDao();
  }

  public query(predicate) {
    return this.dao.query(predicate);
  }

  public async create(data: IMessage): Promise<IMessage> {

    return this.dao.create(data);
  }

  public deleteMessage(predicate: { [key: string]: any }) {
    return this.dao.delete(predicate);
  }
}