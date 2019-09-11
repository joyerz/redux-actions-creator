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

interface sagaActionsT {
  put: Function,
  call: Function,
  select: Function,
  delay: Function
}

declare type urlFunctionT = (payload: any, sagaActions: sagaActionsT) => string

declare type afterFunctionT = (data: any, payload: any, sagaActions: sagaActionsT) => any

declare type buildReduxConnectSagaT = (actionName: string, defaultData?: object) => (() => {
  url: string | urlFunctionT,
  method: string,
  data: string | urlFunctionT,
  after: afterFunctionT,
  resultHandler: afterFunctionT,
})

declare type initFetchT = (doFetch: Function) => void

export const buildListRedux: buildListReduxT
export const buildRedux: buildReduxT
export const buildReduxConnectSaga: buildReduxConnectSagaT
export const buildListReduxConnectSaga: buildReduxConnectSagaT
export const initFetch: initFetchT
export const allSagas: Array<any>

export {}
