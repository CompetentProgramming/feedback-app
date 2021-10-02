import { IUserGeneral } from './user.model';

export interface IReply {
  content: string;
  replyingTo: string;
  user: IUserGeneral;
}

export interface IComment {
  id: number;
  content: string;
  replies: IReply[];
}
