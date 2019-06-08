import { GenericDao } from '../../common/dao/generic.dao';
import { UserModel } from '../model/user.model';
import { IUser } from '../model/user.interface';

export class UserDao extends GenericDao<IUser> {

  constructor() {
    super(UserModel);
  }
}