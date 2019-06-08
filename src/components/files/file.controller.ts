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

  public createUser(data: IFile): Promise<IFile> {
    return this.dao.createUnique(data);
  }

  public updateUser(data: IFile, predicate: { [key: string]: any }): Promise<any> {
    return this.dao.update(data, predicate);
  }

  public deleteUser(predicate: { [key: string]: any }) {
    return this.dao.delete(predicate);
  }
}