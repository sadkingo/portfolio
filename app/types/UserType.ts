import { PostType } from "./PostType";

export type UserType = {
  id: number;
  gitToken: string;
  name: string;
  posts: PostType[];
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
};
