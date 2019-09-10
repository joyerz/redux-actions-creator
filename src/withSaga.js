import { put, call, takeLatest, select, delay, } from 'redux-saga/effects'
import { obj2params } from './common'

let doFetch = null
export const init = (fetch) => (doFetch = fetch)

const sagaActions = {
  put,
  call,
  select,
  delay
}

// 所有saga
let sagas = []

/**
 * 创建reduce时自动关联saga
 */
export default (reduxer) => (...args) => {

  let _redux = reduxer.call(null, ...args)

  return (conf) => {

    const watch = createWatcher(_redux, conf)

    sagas.push(watch)

    return _redux
  }
}


/**
 * 根据配置创建saga
 * @param {*} _redux
 * @param {function|string} conf.url           请求地址（为空则不执行此saga）
 * @param {string}          conf.method        请求方法（默认为get）
 * @param {string}          conf.data          请求参数
 * @param {function}        conf.resultHandler 请求成功数据处理
 * @param {function}        conf.after         数据更新后置方法
 * @param {function}        conf.catch         自定义异常
 */
export function* createWatcher(_redux, conf) {
  yield takeLatest(_redux.types.START, function* ({ payload }) {
    try {
      // 处理请求参数
      let fetchParams = yield call(setRequestParams, conf, payload)
      let data = yield call(doFetch, fetchParams)

      // 数据处理器
      conf.resultHandler && (data = conf.resultHandler(data, payload))
      yield put(_redux.actions.success(data))

      // 异步操作成功后置方法
      if (conf.after) {
        yield call(conf.after, data, payload, sagaActions)
      }
    } catch (e) {
      if (conf.catch) {
        return conf.catch(e)
      }
      yield put(_redux.actions.reset())
    }
  })
}

/**
 * 处理请求参数
 * @param {*} conf    saga配置
 * @param {*} payload action.payload
 */
export function* setRequestParams(conf, payload) {
  let { method, } = conf
  method = method ? method.toUpperCase() : 'GET'
  let url = conf.url
  if (typeof url === 'function') {
    url = url(payload, sagaActions)
  }
  if (!url) return

  // 请求数据处理(合并 payload.params 和 传入的自定义的 data，如重复自定义属性优先)
  let sendData = {}
  payload.params && (sendData = payload.params)  // list
  payload.data && (sendData = payload.data)      // form
  let confDataType = Object.prototype.toString.call(conf.data)
  if (conf.data && confDataType === '[object Function]') {
    let res = yield call(conf.data, payload, sagaActions)
    if (Object.prototype.toString.call(res) === '[object Object]') {
      sendData = res
    }
  }
  if (confDataType === '[object Object]') {
    sendData = { ...sendData, ...conf.data }
  }
  let fetchParams = { url, method, }
  if (method === 'GET') {
    const tranParams = obj2params(sendData) // 序列化
    url += tranParams ? '&' + tranParams : ''
    fetchParams.url = url
  } else {
    fetchParams.data = sendData
  }
  return fetchParams
}

export const allsaga = sagas
