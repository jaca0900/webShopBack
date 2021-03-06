import {IBaseModel} from "../../common/model/base.model.interface";

export interface IUser extends IBaseModel {
  first_name: string | null;
  last_name: string | null;
  addres: string | null;
  email: string | null;
  login: string | null;
  pass: string | null;
  bank: string | null;
  payment_methods: string | null;
}