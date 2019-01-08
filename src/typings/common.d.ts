declare interface IPagination {
  cPage: number;
  sPage: number;
  tPage: number;
  total: number;
}

declare interface IQuerys {
  cPage: number;
  sPage: number;
  keyword: string;
  state: string;
  publish: number;
  tag: string[];
  classify: string;
  date: string;
  hot: boolean;
}