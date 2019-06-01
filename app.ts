import * as Express from 'express';
import { RoutesManager } from './src/routing/routes/routes';
import * as env from './config/environments';

const bodyParser = require('body-parser');
const environment = env.get();
const port: number = environment.port;
const app: Express.Application = Express();
const router: Express.Router = Express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  //basic CORS setup, allowig origin from env
  res.setHeader("Access-Control-Allow-Origin", environment.origin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin," +
    " Accept, X-Requested-With, Content-Type, Access-Control-Request-Method," +
    " Access-Control-Request-Headers, access-control-allow-origin, Access-Control-Allow-Origin");

  next();
});

app.listen(port, () => {
  console.log(`Ready on http://localhost:${port} !`);
});

let routes = new RoutesManager(app, router);
routes.registerAll();