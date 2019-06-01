import { BaseModel } from '../../common/model/base.model';

export class UserModel extends BaseModel {
  public first_name: string | null;
  public last_name: string | null;
  public addres: string | null;
  public email: string | null;
  public login: string | null;
  public pass: string | null;
  public bank: string | null;
  public payment_methods: string | null;
}