declare interface IArticleItem {
  title: string;
  keywords: string;
  tag: string[];
  description: string;
  content: string;
  state: number;
  publish: number;
  thumb: string;
  classify: string;
  _id?: string;
}