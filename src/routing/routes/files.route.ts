import * as Express from 'express';
import { IRoute } from '../models/route.models';
import { FileController } from '../../components/files/file.controller';
import * as multer from 'multer';

export class FilesRoute implements IRoute {
  private upload: multer;

  constructor(private app: Express.Application,
              private router: Express.Router,
              private fileController: FileController) {
    this.upload = multer();
  }

  register() {
    this.app.use('/files', this.router);

    // this route wont be accessible until user succesfully authorizes
    this.router.get('/:fileId',( req, res) => {
      const id = req.params.fileId;

      this.fileController.query({where: { id }})
        .then((result) => {
          const file = result[0];

          res.contentType('image/jpeg');
          res.send(file.content);

        }).catch((error) => {

          res.status(500).json(error);
        });
    });

    this.router.post('/upload', this.upload.single('Photo'), (req: any, res) => {
      const itemId = req.body.item_id;

      this.fileController.saveFile(req.file, itemId)
        .then(resp => {

          res.status(200).send('OK');
        });
    });
  }
}
