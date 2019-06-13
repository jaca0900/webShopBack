import { FileDao } from './Dao/file.dao';
import { IFile } from './model/file.interface';

export class FileController {
  private dao: FileDao;

  constructor () {
    this.dao = new FileDao();
  }

  public query(predicate) {
    return this.dao.query(predicate);
  }

  public async saveFile(data: any, itemId): Promise<IFile> {

    const test = <Blob> data.buffer;

    const finalImg = {
      item_id: itemId,
      fileUrl: 'http://localhost:8000',
      content: test
    };

    let created = await this.dao.create(finalImg);

    finalImg.fileUrl += '/files/' + created['null'];
    return this.update(finalImg, created['null'])
  }

  private update(data, id) {
    return this.dao.update(data, { where: { id } });
  }

  public deleteUser(predicate: { [key: string]: any }) {
    return this.dao.delete(predicate);
  }
}