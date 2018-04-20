const IS_DEV: boolean = process.env.NODE_ENV !== 'production'

export const API_ROOT: string = IS_DEV ? 'hhttps://www.easy-mock.com/mock/5ad758b741d4d65f0e935bd0/' : ''