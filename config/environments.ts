import { IEnvironment } from './interfaces/IEnvironment';
import * as local from './environment.local';
import * as test from './environment.test';
import * as prod from './environment.prod';

// config with all environments, [key: string]: IEnvironment
const config = {
  prod: prod.get,
  test: test.get,
  local: local.get
};

// method for getting proper environment config
export function get(): IEnvironment {
  const envName = process.env.NODE_ENV || 'local';

  if (!config[envName]) {
    return config.local();
  }
  return config[envName]();
}
