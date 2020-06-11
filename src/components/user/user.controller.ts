import { UserDao } from './Dao/user.dao';
import { IUser } from './model/user.interface';
import * as JWT from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export class UserController {
  private dao: UserDao;
  private secret = ']gtt)F&USAD*(GVYQEW*GF)347gh';
  private saltRounds = 10;

  constructor () {
    this.dao = new UserDao();
  }

  public query(predicate) {
    return this.dao.query(predicate);
  }

  public async create(data: IUser): Promise<IUser> {

    const users = await this.query({
     where: {
       login: data.login
     }
    });

    if (users && users.length) {
      return Promise.reject('User with this login already exists');
    }

    data.pass = await bcrypt.hash(data.pass, this.saltRounds);

    return this.dao.create(data);
  }

  public async logIn(login: string, password: string) {
    const user = await this.dao.findOne({
      where: { login }
    });

    if (!user) {
      return Promise.reject('User does not exist');
    }

    if (user && !(await bcrypt.compare(password, user.pass))) {
      return Promise.reject('Credentials do not match');
    }

    return {
      token: JWT.sign({
        authed: true
      }, this.secret),
      userId: user.id
    };
  }

  public async checkAuth(token) {
    const decoded = JWT.verify(token, this.secret);

    if (decoded.authed) {
      return 'OK';
    }

    return Promise.reject('Unauthorized')
  }

  public updateUser(data: IUser, predicate: { [key: string]: any }): Promise<any> {
    return this.dao.update(data, predicate);
  }

  public deleteUser(predicate: { [key: string]: any }) {
    return this.dao.delete(predicate);
  }
}