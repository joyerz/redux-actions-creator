import { buildRedux, buildListRedux } from './helper'
import withSaga, { init, allSagas } from './withSaga'

export default {
  buildRedux,
  buildListRedux,
  initFetch: init, // 初始化fetch方法
  buildReduxConnectSaga: withSaga(buildRedux),
  buildListReduxConnectSaga: withSaga(buildListRedux),
  allSagas,
}

// export const initFetch = init
// export const allSagas = sagas
// export const buildRedux = build
// export const buildListRedux = buildList
// export const buildReduxConnectSaga = withSaga(buildRedux)
// export const buildListReduxConnectSaga = withSaga(buildListRedux)
