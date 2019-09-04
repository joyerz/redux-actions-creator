interface Types {
  START: string,
  SUCCESS: string,
  ERROR: string,
  RESET: string,
}

interface ActionListRedux {
  start: (params?: object) => any,
  success: (data?: object) => any,
  error: (errorMessage: string) => any,
  reset: () => void
}

interface ActionRedux {
  start: (page: string | number, limit: string | number, params?: object) => any,
  success: (data?: object) => any,
  error: (errorMessage: string) => any,
  reset: () => void
}

declare type buildListReduxT = (actionName: string, defaultData?: object) => {
  actions: ActionListRedux,
  types: Types,
  reducers: any
}

declare type buildReduxT = (actionName: string, defaultData?: object) => {
  actions: ActionRedux,
  types: Types,
  reducers: any
}

export const buildListRedux: buildListReduxT
export const buildRedux: buildReduxT

export {}
