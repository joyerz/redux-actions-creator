import { buildRedux, buildListRedux } from './helper'
import withSaga, { init } from './withSaga'

export default {
  buildRedux,
  buildListRedux,
  initFetch: init, // 初始化fetch方法
  buildReduxConnectSaga: withSaga(buildRedux),
  buildListReduxConnectSaga: withSaga(buildListRedux),
}

