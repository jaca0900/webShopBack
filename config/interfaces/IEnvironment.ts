export interface IEnvironment {
  port: number;
  origin: string;
  database: { [key: string]: any };
}
