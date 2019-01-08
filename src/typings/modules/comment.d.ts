declare interface ICommentator {
  name: string;
  email: string;
  site: string;
}

declare interface ICommentItem {
  commentator: ICommentator;
  postId: string;
  parentId: string;
  content: string;
  likes: number;
  agent: string;
  state: number;
  ip: string;
  addr: string;
  createDate: string;
  updateDate: string;
  _id: string;
}