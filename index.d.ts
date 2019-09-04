declare type buildListReduxT = (actionName: string, defaultData?: object) => {
  actions: object,
  types: object,
  reducers: object
}

declare type buildReduxT = (actionName: string, defaultData?: object) => {
  actions: object,
  types: object,
  reducers: object
}

export const buildListRedux: buildListReduxT
export const buildRedux: buildReduxT

export {}
