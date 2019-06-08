import { GenericDao } from '../../common/dao/generic.dao';
import { FileModel } from '../model/file.model';
import { IFile } from '../model/file.interface';

export class FileDao extends GenericDao<IFile> {

  constructor() {
    super(FileModel);
  }
}