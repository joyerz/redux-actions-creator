# redux-actions-creator
redux actions创建助手，集成redux, react-actions, immutable(seamless-immutable)



### 安装

```terminal
yarn install
# or
# npm install
```



### 使用
**redux.js**
```javascript
import { buildListRedux, buildRedux } from 'redux-actions-creator'
import { combineReducers } from 'redux'

export const companyListRedux = buildListRedux('company_list')
export const companyAddRedux = buildRedux('company_add')

export default combineReducers({
  list: companyListRedux.reducers,
  add: companyAddRedux.reducers
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
    actionAdd: (data) => companyAddRedux.actions.reset(data), // add
  }, dispatch),
)(ContainerComponent)

```


### API

**buildRedux(actionName, defaultData)**

| params      | type   | description                     |
| ----------- | ------ | ------------------------------- |
| actionName  | string | Redux action name               |
| defaultData | object | data to extend the default data |


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
| defaultData | object | data to extend the default data |


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

