import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { ItemController } from '../../components/item/item.controller';
import bodyParser = require('body-parser');
import { IItem } from '../../components/item/model/item.interface';

export class ItemsRoute implements IRoute {

  constructor(private app: Express.Application,
              private router: Express.Router,
              private itemController: ItemController) {
  }

  private itemsMapper(items: any[]) {
    return items.map(itemData => {
      const item = <IItem>itemData.dataValues;
      item.images = item.images.map(image => image.fileUrl);
      item.user =  { account: item.user.bank };

      return item;
    });
  }

  register() {
    this.app.use('/item', this.router);

    this.router.post('/create', bodyParser.json(), (req, res) => {
      this.itemController.create(req.body)
        .then(resp => {
          const item = resp.dataValues;
          if (!item.id) {
            item.id = resp['null'];
          }

          res.status(200).json(resp);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json(err);
        })
    });

    this.router.get('/all', (req, res) => {
      this.itemController.queryEager({})
        .then(items => {
          items = this.itemsMapper(items);
          res.status(200).json(items);
        })
        .catch(err => {
          res.status(500).json(err);
        })
    });

    this.router.get('/byUser/:userId', (req, res) => {
      this.itemController.queryEager({
        where: {
          user_id: req.params.userId
        }
      })
        .then(items => {
          items = this.itemsMapper(items);
          res.status(200).json(items);
        })
        .catch(err => {
          res.status(500).json(err);
        })
    });
  }
}
