import {IBaseModel} from "../../common/model/base.model.interface";

export interface IFile extends IBaseModel {
  item_id: number | null;
  fileUrl: string | null;
  content: Blob | null;
}