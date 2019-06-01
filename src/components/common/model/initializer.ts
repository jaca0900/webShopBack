import { Sequelize } from 'sequelize';

export abstract class Initializer {
  abstract init(connection: Sequelize);
}