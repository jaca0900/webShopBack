import {IEnvironment} from "./interfaces/IEnvironment";

export function get(): IEnvironment {
  return {
    port: 8000,
    origin: 'http://localhost:4200',
    database: {
      username: 'root',
      password: 'root',
      host: 'localhost',
      database: 'webshop',
      dialect: 'mysql'
    }
  }
}
