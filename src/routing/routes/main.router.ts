import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { UserController } from '../../components/user/user.controller';
import * as bodyParser from 'body-parser';

export class MainRouter implements IRoute {
  private fallThrough = [
    '/item/all',
    '/files/*',
    '/user/create'
  ];

  constructor(private app: Express.Application,
              private router: Express.Router,
              private userController: UserController) {}

  register() {
    this.app.use('/', this.router);

    // allow options requests without this the requests
    // will get cought in session validation
    this.router.options('/*', (req, res) => {
      res.send({ status: 'ok' });
    });

    this.router.post('/login', bodyParser.json(), (req, res) => {
      this.userController.logIn(req.body.login, req.body.password)
        .then(token => {
          res.status(200).json(token);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    });

    // this route wont be accessible until user succesfully authorizes
    this.router.all('/*', (req, res, next) => {
      const fallIndex = this.fallThrough.findIndex(item => {
        return new RegExp(item).test(req.path);
      });

      if ( fallIndex >= 0) {
        return next();
      }

      if (!req.headers.authorization) {
        return res.status(500).json({message: 'unauthorized'});
      }

      const token = req.headers.authorization.split('Bearer ')[1];
      this.userController.checkAuth(token)
        .then(() => {
          return next();
        })
        .catch((err) => {
          res.status(401).json({message: 'unauthorized'});
        });
    });
  }
}
