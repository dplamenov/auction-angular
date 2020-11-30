import {User} from './user';

export interface Comment {
  _id: string;
  body: string;
  creator: string | User,
  createTime: string
}
