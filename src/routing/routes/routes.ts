import * as Express from 'express';

import { IRoute } from '../models/route.models';
import { MainRouter } from './main.router';
import { Sequelize } from 'sequelize';
import { UserController } from '../../components/user/user.controller';
import { UserInitializer } from '../../components/user/model/user.initializer';

export class RoutesManager {
  myRoutes: IRoute[];
  connection: Sequelize;

  //import and init all routes
  constructor(private app: Express.Application, private router:Express.Router) {

    this.connection = new Sequelize({
      username: 'root',
      password: 'root',
      host: '192.168.99.100',
      database: 'webshop',
      dialect: 'mysql'
    });

    this.myRoutes = [
      new MainRouter(app, router) // all routes imported after this one will require auth to access
    ];
  }

  async registerAll() {
    try {
      await this.connection.authenticate();
      console.log('Connection has been established successfully.');
    } catch (err) {
      console.error('Unable to connect to the database: stopping routes initialization', err);
      return;
    }

    const userInitializer = new UserInitializer();
    userInitializer.init(this.connection);

    const userController: UserController = new UserController();

    const users = await userController.getAll();

    console.log(users);

    this.myRoutes.forEach(route => {
      route.register();
    })
  }
}
