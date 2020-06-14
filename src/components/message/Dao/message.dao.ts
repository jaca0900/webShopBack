import { GenericDao } from '../../common/dao/generic.dao';
import { MessageModel } from '../model/message.model';
import { IMessage } from '../model/message.interface';

export class MessageDao extends GenericDao<IMessage> {

  constructor() {
    super(MessageModel);
  }
}