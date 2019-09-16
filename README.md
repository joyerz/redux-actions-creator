# redux-actions-creator
redux actions创建助手，集成redux, react-actions, immutable(seamless-immutable)

> 使用redux常常需要创建大量的常量字面量，手动创建actions, 以及相应的reducers进行数据处理，redux-actions-creator
简化这类的流程，基于两个方法buildRedux和buildListRedux来减少重复性的工作. 返回对象包含actions, types, reducer



### 安装

```terminal
yarn install redux-actions-creator
# or
# npm install redux-actions-creator
```



### 使用
**redux.js**
```javascript
import { buildListRedux, buildRedux } from 'redux-actions-creator'
import { combineReducers } from 'redux'

export const companyListRedux = buildListRedux('company_list')
export const companyAddRedux = buildRedux('company_add')

export default combineReducers({
  list: companyListRedux.reducer,
  add: companyAddRedux.reducer
})

```


**container.js**
```javascript
...
import {companyListRedux, companyAddRedux} from './redux'

class ContainerComponent extends React.Component { ... }


export default connect(
  state => ({
    ...
  }),
  dispatch => bindActionCreators({
    actionList: (page, limit, params) => companyListRedux.actions.start(page, limit, params), // list
    actionAdd: (data) => companyAddRedux.actions.start(data), // add
  }, dispatch),
)(ContainerComponent)

```



### API

**buildRedux(actionName, defaultData)**

| params      | type   | description                     |
| ----------- | ------ | ------------------------------- |
| actionName  | string | Redux action name               |
| defaultData | object | data to extend the initial data |


**初始值(state)**

```javascript
{
  loading: false,
  error: false,
  success: false,
  errorMessage: '',
  params: null,
  ...defaultData
}
```

**返回值**

```javascript
{
  reducer, 
  types: {  // 常量
    START,
    SUCCESS,
    RESET,
    ERROR,
  },
  actions: {  // actions
    start,     // action: params => params
    success,   // action: data => ({data})
    error,     // action: errorMessage => ({errorMessage})
    reset,     // action
  },
}
```



---

**buildListRedux(actionName, defaultData)**

| params      | type   | description                     |
| ----------- | ------ | ------------------------------- |
| actionName  | string | Redux action name               |
| defaultData | object | data to extend the initial data |


**初始值(state)**

```javascript
{
  loading: false,
  error: false,
  success: false,
  errorMessage: '',
  params: null,
  data: {
    page: 1,
    per_page: 10,
    total_count: 0,
    total_page: 0,
    entries: [],
  },
  ...defaultData
}
```


**返回值**

```javascript
return {
  reducer, 
  types: {  // 常量
    START,
    SUCCESS,
    RESET,
    ERROR,
  },
  actions: {  // actions
    start,     // action: (page, limit, params) => ({page, limit, params})
    success,   // action: data => ({data})
    error,     // action: errorMessage => ({errorMessage})
    reset,     // action
  },
}
```



### 状态变更
```javascript
/* initial data */
{
  loading: false,
  success: false,
  error: false,
}


actions.start() // => loading: true 
actions.success() // => success: true
actions.error() // => error: true, errorMessage(optional)
actions.reset() // => initial data

```

---

### Connect Sagas
>API 额外提供的reducer create actions与sagas处理合并

1. 初始化store, 合并sagas

```javascript
import { allSagas, init } from 'react-actions-creator'
import doFetch from 'your fetch funciton file' // fetch

init(doFetch) // 初始化fetch方法

...

export default function* rootSaga(getState) {
    yield all(sagas.concat(allSagas))
}

```

2. 使用

buildListReduxConnectSaga(actionName, initData)(object)
actionName, initData参数跟方法*buildListRedux*一致
object是saga的监听方法, 两次调用返回值跟*buildListRedux*一致，返回types, actions, reducer, 具体参数如下:


```javascript
import { buildListReduxConnectSaga, buildReduxConnectSaga } from 'react-actions-creator'

export const companyListRedux = buildListReduxConnectSaga('company_list', {})({
  url: (payload, {}) => {
    return API.company.list(payload.page, payload.limit) + payload.params
  },
  method: 'GET',
  data: function*(data, payload, {}) {
    ...
  },
  resultHandler: function*() {
    ...
  },
  after: function*() {
    ...
  }
})
```

### buildListReduxConnectSaga(actionName, initData)(object) **object**参数
----
*参数方式1 - 对象*

| name          | type                                                  | description                                                  |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| url           | String \| (payload, sagaActions) => string            | 请求地址                                                     |
| method        | String                                                | 'GET', 'POST' ...                                            |
| resultHandler | (data, payload, sagaActions, allReduxActions) => data | 请求数据成功以后, 处理data后返回，自动调用该actions.success(data)方法 |
| after         | (data, payload, sagaActions, allReduxActions) => void | resultHandler执行完毕后调用                                  |
| catch         | (e, payload, sagaActions, allReduxActions) => void    | e为异常error                                                 |



----

*参数方式2 - generator function*

function* (payload, sagaActions, actions, allReduxActions) { ... }

| name            | type   | description                                                  |
| --------------- | ------ | ------------------------------------------------------------ |
| payload         | object | action.payload对象                                           |
| sagaActions     | object | saga的API: 包含put, select, call, delay                      |
| actions         | object | 当前创建的actions: 包含start, success, reset, error          |
| allReduxActions | object | 全局其他地方创建的redux action, 比如 allReduxActions['companyList'].start()<br />其中*companyList* 为*buildRedux, buildListRedux, buildReduxConnectSaga, buildListReduxConnectSaga*方法传入的第一个<font color=#f30>actionName</font>参数的<font color=#f30>驼峰形式</font> |

