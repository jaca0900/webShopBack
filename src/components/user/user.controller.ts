import { UserDao } from './Dao/user.dao';
import { IUser } from './model/user.interface';

export class UserController {
  private dao: UserDao;

  constructor () {
    this.dao = new UserDao();
  }

  public getAll(): Promise<IUser[]> {
    return this.dao.getAll();
  }
}