import * as Express from 'express';

import { IRoute } from '../models/route.models';
import { MainRouter } from './main.router';
import { Sequelize } from 'sequelize';
import { UserController } from '../../components/user/user.controller';
import { UserInitializer } from '../../components/user/model/user.initializer';
import { FileInitializer } from '../../components/files/model/file.initializer';
import { ItemInitializer } from '../../components/item/model/item.initializer';
import { FileController } from '../../components/files/file.controller';
import { ItemController } from '../../components/item/item.controller';
import { FilesRoute } from './files.route';
import { ItemsRoute } from './items.route';
import { UsersRoute } from './users.route';

export class RoutesManager {
  myRoutes: IRoute[];
  connection: Sequelize;

  //import and init all routes
  constructor(private app: Express.Application) {

    this.connection = new Sequelize({
      username: 'root',
      password: 'root',
      host: 'localhost',
      database: 'webshop',
      dialect: 'mysql'
    });

    const userInitializer = new UserInitializer();
    const fileInitializer = new FileInitializer();
    const itemInitializer = new ItemInitializer();

    userInitializer.init(this.connection);
    fileInitializer.init(this.connection);
    itemInitializer.init(this.connection);

    const userController: UserController = new UserController();
    const fileController: FileController = new FileController();
    const itemController: ItemController = new ItemController();


    this.myRoutes = [
      new MainRouter(app, Express.Router(), userController),
      new FilesRoute(app, Express.Router(), fileController),
      new ItemsRoute(app, Express.Router(), itemController),
      new UsersRoute(app, Express.Router(), userController)
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


    this.myRoutes.forEach(route => {
      route.register();
    })
  }
}
