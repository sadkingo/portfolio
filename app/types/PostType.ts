import { UserType } from "./UserType";
export type PostType = {
  id: number;
  title: string;
  published: boolean;
  authorId: number;
  author: UserType;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
};
