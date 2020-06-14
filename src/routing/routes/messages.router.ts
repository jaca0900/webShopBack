import * as Express from 'express';
import { IRoute } from '../models/route.models';
import bodyParser = require('body-parser');
import { MessageController } from '../../components/message/message.controller';

export class MessagesRoute implements IRoute {

  constructor(private app: Express.Application,
              private router: Express.Router,
              private messageController: MessageController) {
  }

  register() {
    this.app.use('/message', this.router);

    this.router.post('/send', bodyParser.json(), (req, res) => {
      const { body: message } = req;

      this.messageController.create(message)
        .then(resp => {
          res.status(200).json(resp);
        })
        .catch(err => {
          res.status(500).json(err);
        })
    });

    this.router.get('/received', bodyParser.json(), (req, res) => {
      const { receiverId: receiver_id } = req.query;

      this.messageController.query({
        receiver_id
      })
        .then(resp => {
          res.status(200).json(resp);
        })
        .catch(err => {
          res.status(500).json(err);
        })
    });

    this.router.get('/sent', bodyParser.json(), (req, res) => {
      const { senderId: sender_id } = req.query;

      this.messageController.query({
        sender_id
      })
        .then(resp => {
          res.status(200).json(resp);
        })
        .catch(err => {
          res.status(500).json(err);
        })
    });
  }
}
