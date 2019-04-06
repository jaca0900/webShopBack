import {IEnvironment} from "./interfaces/IEnvironment";

export function get(): IEnvironment {
  return {
    port: 9000,
    origin: 'http://localhost:4200',
  }
}
