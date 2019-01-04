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
}