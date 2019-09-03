!function(e, t) {
  'object' == typeof exports && 'object' == typeof module ? module.exports = t(require('redux-actions')) : 'function' == typeof define && define.amd ? define(['redux-actions'], t) : 'object' == typeof exports ? exports['redux-creator'] = t(require('redux-actions')) : e['redux-creator'] = t(e['redux-actions'])
}(window, function(e) {
  return function(e) {
    var t = {}

    function r(n) {
      if (t[n]) return t[n].exports
      var o = t[n] = { i: n, l: !1, exports: {} }
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    return r.m = e, r.c = t, r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }, r.r = function(e) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
    }, r.t = function(e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (r.r(n), Object.defineProperty(n, 'default', {
        enumerable: !0,
        value: e,
      }), 2 & t && 'string' != typeof e) for (var o in e) r.d(n, o, function(t) {
        return e[t]
      }.bind(null, o))
      return n
    }, r.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      }
      return r.d(t, 'a', t), t
    }, r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = '', r(r.s = 3)
  }([function(t, r) {
    t.exports = e
  }, function(e, t) {
    e.exports = function(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }) : e[t] = r, e
    }
  }, function(e, t, r) {
    var n
    !function() {
      'use strict'
      var o = function e(t) {
        var r, n = 'function' == typeof Symbol && Symbol.for && Symbol.for('react.element'), o = 60103,
          i = { use_static: !1 }

        function a(e) {
          var t = Object.getPrototypeOf(e)
          return t ? Object.create(t) : {}
        }

        function c(e, t, r) {
          Object.defineProperty(e, t, { enumerable: !1, configurable: !1, writable: !1, value: r })
        }

        function s(e, t) {
          c(e, t, function() {
            throw new v('The ' + t + ' method cannot be invoked on an Immutable data structure.')
          })
        }

        'object' != typeof (r = t) || Array.isArray(r) || null === r || void 0 !== t.use_static && (i.use_static = Boolean(t.use_static))
        var u = '__immutable_invariants_hold'

        function f(e) {
          return 'object' != typeof e || (null === e || Boolean(Object.getOwnPropertyDescriptor(e, u)))
        }

        function l(e, t) {
          return e === t || e != e && t != t
        }

        function p(e) {
          return !(null === e || 'object' != typeof e || Array.isArray(e) || e instanceof Date)
        }

        var h = ['setPrototypeOf'], y = h.concat(['push', 'pop', 'sort', 'splice', 'shift', 'unshift', 'reverse']),
          d = ['keys'].concat(['map', 'filter', 'slice', 'concat', 'reduce', 'reduceRight']),
          b = h.concat(['setDate', 'setFullYear', 'setHours', 'setMilliseconds', 'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear', 'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds', 'setYear'])

        function v(e) {
          this.name = 'MyError', this.message = e, this.stack = (new Error).stack
        }

        function g(e, t) {
          for (var r in c(e, u, !0), t) t.hasOwnProperty(r) && s(e, t[r])
          return Object.freeze(e), e
        }

        function m(e, t) {
          var r = e[t]
          c(e, t, function() {
            return N(r.apply(e, arguments))
          })
        }

        function O(e, t, r) {
          var n = r && r.deep
          if (e in this && (n && this[e] !== t && p(t) && p(this[e]) && (t = N.merge(this[e], t, {
            deep: !0,
            mode: 'replace',
          })), l(this[e], t))) return this
          var o = T.call(this)
          return o[e] = N(t), S(o)
        }

        v.prototype = new Error, v.prototype.constructor = Error
        var j = N([])

        function w(e, t, r) {
          var n = e[0]
          if (1 === e.length) return O.call(this, n, t, r)
          var o, i = e.slice(1), a = this[n]
          if ('object' == typeof a && null !== a) o = N.setIn(a, i, t) else {
            var c = i[0]
            o = '' !== c && isFinite(c) ? w.call(j, i, t) : L.call(k, i, t)
          }
          if (n in this && a === o) return this
          var s = T.call(this)
          return s[n] = o, S(s)
        }

        function S(e) {
          for (var t in d) {
            if (d.hasOwnProperty(t)) m(e, d[t])
          }
          i.use_static || (c(e, 'flatMap', _), c(e, 'asObject', E), c(e, 'asMutable', T), c(e, 'set', O), c(e, 'setIn', w), c(e, 'update', B), c(e, 'updateIn', H), c(e, 'getIn', Y))
          for (var r = 0, n = e.length; r < n; r++) e[r] = N(e[r])
          return g(e, y)
        }

        function A() {
          return new Date(this.getTime())
        }

        function _(e) {
          if (0 === arguments.length) return this
          var t, r = [], n = this.length
          for (t = 0; t < n; t++) {
            var o = e(this[t], t, this)
            Array.isArray(o) ? r.push.apply(r, o) : r.push(o)
          }
          return S(r)
        }

        function P(e) {
          if (void 0 === e && 0 === arguments.length) return this
          if ('function' != typeof e) {
            var t = Array.isArray(e) ? e.slice() : Array.prototype.slice.call(arguments)
            t.forEach(function(e, t, r) {
              'number' == typeof e && (r[t] = e.toString())
            }), e = function(e, r) {
              return -1 !== t.indexOf(r)
            }
          }
          var r = a(this)
          for (var n in this) this.hasOwnProperty(n) && !1 === e(this[n], n) && (r[n] = this[n])
          return J(r)
        }

        function T(e) {
          var t, r, n = []
          if (e && e.deep) for (t = 0, r = this.length; t < r; t++) n.push(I(this[t])) else for (t = 0, r = this.length; t < r; t++) n.push(this[t])
          return n
        }

        function E(e) {
          'function' != typeof e && (e = function(e) {
            return e
          })
          var t, r = {}, n = this.length
          for (t = 0; t < n; t++) {
            var o = e(this[t], t, this), i = o[0], a = o[1]
            r[i] = a
          }
          return J(r)
        }

        function I(e) {
          return !e || 'object' != typeof e || !Object.getOwnPropertyDescriptor(e, u) || e instanceof Date ? e : N.asMutable(e, { deep: !0 })
        }

        function M(e, t) {
          for (var r in e) Object.getOwnPropertyDescriptor(e, r) && (t[r] = e[r])
          return t
        }

        function R(e, t) {
          if (0 === arguments.length) return this
          if (null === e || 'object' != typeof e) throw new TypeError('Immutable#merge can only be invoked with objects or arrays, not ' + JSON.stringify(e))
          var r, n, o = Array.isArray(e), i = t && t.deep, c = t && t.mode || 'merge', s = t && t.merger

          function u(e, n, o) {
            var c, u = N(n[o]), f = s && s(e[o], u, t), h = e[o]
            void 0 === r && void 0 === f && e.hasOwnProperty(o) && l(u, h) || (l(h, c = void 0 !== f ? f : i && p(h) && p(u) ? N.merge(h, u, t) : u) && e.hasOwnProperty(o) || (void 0 === r && (r = M(e, a(e))), r[o] = c))
          }

          if (o) for (var f = 0, h = e.length; f < h; f++) {
            var y = e[f]
            for (n in y) y.hasOwnProperty(n) && u(void 0 !== r ? r : this, y, n)
          } else {
            for (n in e) Object.getOwnPropertyDescriptor(e, n) && u(this, e, n)
            'replace' === c && function(e, t) {
              for (var n in e) t.hasOwnProperty(n) || (void 0 === r && (r = M(e, a(e))), delete r[n])
            }(this, e)
          }
          return void 0 === r ? this : J(r)
        }

        function x(e, t) {
          var r = t && t.deep
          if (0 === arguments.length) return this
          if (null === e || 'object' != typeof e) throw new TypeError('Immutable#replace can only be invoked with objects or arrays, not ' + JSON.stringify(e))
          return N.merge(this, e, { deep: r, mode: 'replace' })
        }

        var D, C, U, k = N({})

        function L(e, t, r) {
          if (!Array.isArray(e) || 0 === e.length) throw new TypeError('The first argument to Immutable#setIn must be an array containing at least one "key" string.')
          var n = e[0]
          if (1 === e.length) return F.call(this, n, t, r)
          var o, i = e.slice(1), c = this[n]
          if (o = this.hasOwnProperty(n) && 'object' == typeof c && null !== c ? N.setIn(c, i, t) : L.call(k, i, t), this.hasOwnProperty(n) && c === o) return this
          var s = M(this, a(this))
          return s[n] = o, J(s)
        }

        function F(e, t, r) {
          var n = r && r.deep
          if (this.hasOwnProperty(e) && (n && this[e] !== t && p(t) && p(this[e]) && (t = N.merge(this[e], t, {
            deep: !0,
            mode: 'replace',
          })), l(this[e], t))) return this
          var o = M(this, a(this))
          return o[e] = N(t), J(o)
        }

        function B(e, t) {
          var r = Array.prototype.slice.call(arguments, 2), n = this[e]
          return N.set(this, e, t.apply(n, [n].concat(r)))
        }

        function $(e, t) {
          for (var r = 0, n = t.length; null != e && r < n; r++) e = e[t[r]]
          return r && r == n ? e : void 0
        }

        function H(e, t) {
          var r = Array.prototype.slice.call(arguments, 2), n = $(this, e)
          return N.setIn(this, e, t.apply(n, [n].concat(r)))
        }

        function Y(e, t) {
          var r = $(this, e)
          return void 0 === r ? t : r
        }

        function q(e) {
          var t, r = a(this)
          if (e && e.deep) for (t in this) this.hasOwnProperty(t) && (r[t] = I(this[t])) else for (t in this) this.hasOwnProperty(t) && (r[t] = this[t])
          return r
        }

        function z() {
          return {}
        }

        function J(e) {
          return i.use_static || (c(e, 'merge', R), c(e, 'replace', x), c(e, 'without', P), c(e, 'asMutable', q), c(e, 'set', F), c(e, 'setIn', L), c(e, 'update', B), c(e, 'updateIn', H), c(e, 'getIn', Y)), g(e, h)
        }

        function N(e, t, r) {
          if (f(e) || function(e) {
            return 'object' == typeof e && null !== e && (e.$$typeof === o || e.$$typeof === n)
          }(e) || function(e) {
            return 'undefined' != typeof File && e instanceof File
          }(e) || function(e) {
            return 'undefined' != typeof Blob && e instanceof Blob
          }(e) || function(e) {
            return e instanceof Error
          }(e)) return e
          if (function(e) {
            return 'object' == typeof e && 'function' == typeof e.then
          }(e)) return e.then(N)
          if (Array.isArray(e)) return S(e.slice())
          if (e instanceof Date) return a = new Date(e.getTime()), i.use_static || c(a, 'asMutable', A), g(a, b)
          var a, s = t && t.prototype, u = (s && s !== Object.prototype ? function() {
            return Object.create(s)
          } : z)()
          if (null == r && (r = 64), r <= 0) throw new v('Attempt to construct Immutable from a deeply nested object was detected. Have you tried to wrap an object with circular references (e.g. React element)? See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.')
          for (var l in r -= 1, e) Object.getOwnPropertyDescriptor(e, l) && (u[l] = N(e[l], void 0, r))
          return J(u)
        }

        function G(e) {
          return function() {
            var t = [].slice.call(arguments), r = t.shift()
            return e.apply(r, t)
          }
        }

        function K(e, t) {
          return function() {
            var r = [].slice.call(arguments), n = r.shift()
            return Array.isArray(n) ? t.apply(n, r) : e.apply(n, r)
          }
        }

        return N.from = N, N.isImmutable = f, N.ImmutableError = v, N.merge = G(R), N.replace = G(x), N.without = G(P), N.asMutable = (D = q, C = T, U = A, function() {
          var e = [].slice.call(arguments), t = e.shift()
          return Array.isArray(t) ? C.apply(t, e) : t instanceof Date ? U.apply(t, e) : D.apply(t, e)
        }), N.set = K(F, O), N.setIn = K(L, w), N.update = G(B), N.updateIn = G(H), N.getIn = G(Y), N.flatMap = G(_), N.asObject = G(E), i.use_static || (N.static = e({ use_static: !0 })), Object.freeze(N), N
      }()
      void 0 === (n = function() {
        return o
      }.call(t, r, t, e)) || (e.exports = n)
    }()
  }, function(e, t, r) {
    'use strict'
    r.r(t)
    var n = r(1), o = r.n(n), i = r(0), a = r(2), c = r.n(a)

    function s(e, t) {
      var r = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e)
        t && (n = n.filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), r.push.apply(r, n)
      }
      return r
    }

    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {}
        t % 2 ? s(r, !0).forEach(function(t) {
          o()(e, t, r[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(r).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        })
      }
      return e
    }

    var f = function(e) {
      var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function() {
          return c()(u({ loading: !1, error: !1, success: !1, errorMessage: '', params: null }, r))
        }, a = ''.concat(e, '_START'), s = ''.concat(e, '_SUCCESS'), f = ''.concat(e, '_ERROR'),
        l = ''.concat(e, '_REST'), p = Object(i.createAction)(a, function(e) {
          return e
        }), h = Object(i.createAction)(l), y = Object(i.createAction)(s, function(e) {
          return { data: e }
        }), d = Object(i.createAction)(f, function(e) {
          return { errorMessage: e }
        }), b = Object(i.handleActions)((t = {}, o()(t, a, function(e, t) {
          return e.merge({ loading: !0, error: !1, success: !1, errorMessage: '', params: t.payload.params })
        }), o()(t, s, function(e, t) {
          return e.merge({ loading: !1, error: !1, success: !0, data: t.payload.data, errorMessage: '' })
        }), o()(t, f, function(e, t) {
          return c()({ loading: !1, error: !0, success: !1, errorMessage: t.payload.errorMessage })
        }), o()(t, l, function(e, t) {
          return n()
        }), t), n())
      return {
        actions: { start: p, success: y, error: d, reset: h },
        types: { START: a, SUCCESS: s, ERROR: f, RESET: l },
        reducer: b,
      }
    }, l = function(e) {
      var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function() {
          return c()(u({
            loading: !1,
            error: !1,
            success: !1,
            params: {},
            data: { page: 1, per_page: 10, total_count: 0, total_page: 0, entries: [] },
          }, r))
        }, a = 'LOAD_'.concat(e, '_LIST_START'), s = 'LOAD_'.concat(e, '_LIST_SUCCESS'), f = 'RESET_'.concat(e, '_LIST'),
        l = 'LOAD_'.concat(e, '_LIST_ERROR'), p = Object(i.createAction)(a, function(e, t, r) {
          return { page: e, limit: t, params: r }
        }), h = Object(i.createAction)(s, function(e) {
          return { data: e }
        }), y = Object(i.createAction)(f), d = Object(i.createAction)(l),
        b = Object(i.handleActions)((t = {}, o()(t, a, function(e, t) {
          return e.merge({ loading: !0, success: !1, params: t.payload.params || e.params })
        }), o()(t, s, function(e, t) {
          return e.merge({ loading: !1, success: !0, data: t.payload.data })
        }), o()(t, l, function(e) {
          return e.merge({ loading: !1, error: !0, success: !1 })
        }), o()(t, f, function(e) {
          return n()
        }), t), n())
      return {
        reducer: b,
        types: { START: a, SUCCESS: s, RESET: f, ERROR: l },
        actions: { start: p, success: h, error: d, reset: y },
      }
    }
    r.d(t, 'buildRedux', function() {
      return f
    }), r.d(t, 'buildListRedux', function() {
      return l
    })
  }]).default
})
