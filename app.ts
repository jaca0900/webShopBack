import * as Express from 'express';
import { RoutesManager } from './src/routing/routes/routes';
import * as env from './config/environments';

const environment = env.get();
const port: number = environment.port;
const app: Express.Application = Express();

app.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  //basic CORS setup, allowig origin from env
  res.setHeader("Access-Control-Allow-Origin", environment.origin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin," +
    " Accept, X-Requested-With, Content-Type, Access-Control-Request-Method," +
    " Access-Control-Request-Headers, access-control-allow-origin, Access-Control-Allow-Origin, authorization");

  next();
});

app.listen(port, () => {
  console.log(`Ready on http://localhost:${port} !`);
});

let routes = new RoutesManager(app);
routes.registerAll();