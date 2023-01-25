export enum Error {
  None,
  Add,
  Delete,
  Load,
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export type CommentData = Pick<Comment, 'name' | 'email' | 'body'>;

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
