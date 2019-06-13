import * as Express from 'express';
import { IRoute } from '../models/route.models';
import bodyParser = require('body-parser');
import { UserController } from '../../components/user/user.controller';

export class UsersRoute implements IRoute {

  constructor(private app: Express.Application,
              private router: Express.Router,
              private userController: UserController) {
  }

  register() {
    this.app.use('/user', this.router);

    this.router.post('/create', bodyParser.json(), (req, res) => {
      this.userController.create(req.body)
        .then(resp => {
          res.status(200).json(resp);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json(err);
        })
    });
  }
}
