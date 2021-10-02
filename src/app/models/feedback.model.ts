import { IComment } from "./comments.model";
import { CategoryEnum, StatusEnum } from "./enums.model";

export interface IFeedback {
  id: number;
  title: string;
  category: CategoryEnum,
  upvotes: number,
  status: StatusEnum,
  description: string;
  comments: IComment[];
}
