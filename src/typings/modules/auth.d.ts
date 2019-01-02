declare interface IAuth {
  avatar: string;
  nickname: string;
  signature: string;
  username?: string;
}

declare interface IAuthParams extends IAuth {
  oldPassword: string;
  newPassword?: string;
  _id?: string;
}

declare interface ISignParams {
  username: string;
  password: string;
}
