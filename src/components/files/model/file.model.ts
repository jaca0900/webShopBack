import { BaseModel } from '../../common/model/base.model';

export class FileModel extends BaseModel {
  item_id: number | null;
  fileUrl: string | null;
  content: Blob | null;
}