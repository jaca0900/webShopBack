import { UserDao } from './Dao/user.dao';
import { IUser } from './model/user.interface';

export class UserController {
  private dao: UserDao;

  constructor () {
    this.dao = new UserDao();
  }

  public query(predicate) {
    return this.dao.query(predicate);
  }

  public createUser(data: IUser): Promise<IUser> {
    return this.dao.createUnique(data);
  }

  public updateUser(data: IUser, predicate: { [key: string]: any }): Promise<any> {
    return this.dao.update(data, predicate);
  }

  public deleteUser(predicate: { [key: string]: any }) {
    return this.dao.delete(predicate);
  }
}