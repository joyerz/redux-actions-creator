
/**
 * 将对象转变为 params string
 * e.g. { name: 'user', age: 13} => name=user&age=13
 * @param obj
 * @return {*}
 */
export function obj2params(obj, prefix = '', suffix = '') {
  if (typeof obj !== 'object' || !obj) return ''

  let params = []
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined && obj[key] !== null) {
      if (obj[key] instanceof Object) { // 数组和对象特殊处理
        params.push(`${key}=${JSON.stringify(obj[key])}`)
      } else {
        params.push(`${key}=${obj[key]}`)
      }
    }
  })
  return prefix + params.join('&') + suffix
}
