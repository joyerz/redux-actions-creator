module.exports = function(t) {
  var e = {}

  function r(n) {
    if (e[n]) return e[n].exports
    var o = e[n] = { i: n, l: !1, exports: {} }
    return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
  }

  return r.m = t, r.c = e, r.d = function(t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
  }, r.r = function(t) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 })
  }, r.t = function(t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t
    if (4 & e && 'object' == typeof t && t && t.__esModule) return t
    var n = Object.create(null)
    if (r.r(n), Object.defineProperty(n, 'default', {
      enumerable: !0,
      value: t,
    }), 2 & e && 'string' != typeof t) for (var o in t) r.d(n, o, function(e) {
      return t[e]
    }.bind(null, o))
    return n
  }, r.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    }
    return r.d(e, 'a', e), e
  }, r.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = '', r(r.s = 6)
}([function(t, e) {
  t.exports = function(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0,
    }) : t[e] = r, t
  }
}, function(t, e) {
  t.exports = require('redux-actions')
}, function(t, e, r) {
  t.exports = r(5)
}, function(t, e, r) {
  var n
  !function() {
    'use strict'
    var o = function t(e) {
      var r, n = 'function' == typeof Symbol && Symbol.for && Symbol.for('react.element'), o = 60103,
        a = { use_static: !1 }

      function i(t) {
        var e = Object.getPrototypeOf(t)
        return e ? Object.create(e) : {}
      }

      function c(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !1, configurable: !1, writable: !1, value: r })
      }

      function u(t, e) {
        c(t, e, function() {
          throw new g('The ' + e + ' method cannot be invoked on an Immutable data structure.')
        })
      }

      'object' != typeof (r = e) || Array.isArray(r) || null === r || void 0 !== e.use_static && (a.use_static = Boolean(e.use_static))
      var s = '__immutable_invariants_hold'

      function f(t) {
        return 'object' != typeof t || (null === t || Boolean(Object.getOwnPropertyDescriptor(t, s)))
      }

      function l(t, e) {
        return t === e || t != t && e != e
      }

      function p(t) {
        return !(null === t || 'object' != typeof t || Array.isArray(t) || t instanceof Date)
      }

      var h = ['setPrototypeOf'], y = h.concat(['push', 'pop', 'sort', 'splice', 'shift', 'unshift', 'reverse']),
        d = ['keys'].concat(['map', 'filter', 'slice', 'concat', 'reduce', 'reduceRight']),
        v = h.concat(['setDate', 'setFullYear', 'setHours', 'setMilliseconds', 'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear', 'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds', 'setYear'])

      function g(t) {
        this.name = 'MyError', this.message = t, this.stack = (new Error).stack
      }

      function b(t, e) {
        for (var r in c(t, s, !0), e) e.hasOwnProperty(r) && u(t, e[r])
        return Object.freeze(t), t
      }

      function m(t, e) {
        var r = t[e]
        c(t, e, function() {
          return $(r.apply(t, arguments))
        })
      }

      function w(t, e, r) {
        var n = r && r.deep
        if (t in this && (n && this[t] !== e && p(e) && p(this[t]) && (e = $.merge(this[t], e, {
          deep: !0,
          mode: 'replace',
        })), l(this[t], e))) return this
        var o = P.call(this)
        return o[t] = $(e), j(o)
      }

      g.prototype = new Error, g.prototype.constructor = Error
      var O = $([])

      function S(t, e, r) {
        var n = t[0]
        if (1 === t.length) return w.call(this, n, e, r)
        var o, a = t.slice(1), i = this[n]
        if ('object' == typeof i && null !== i) o = $.setIn(i, a, e) else {
          var c = a[0]
          o = '' !== c && isFinite(c) ? S.call(O, a, e) : U.call(D, a, e)
        }
        if (n in this && i === o) return this
        var u = P.call(this)
        return u[n] = o, j(u)
      }

      function j(t) {
        for (var e in d) {
          if (d.hasOwnProperty(e)) m(t, d[e])
        }
        a.use_static || (c(t, 'flatMap', E), c(t, 'asObject', T), c(t, 'asMutable', P), c(t, 'set', w), c(t, 'setIn', S), c(t, 'update', N), c(t, 'updateIn', q), c(t, 'getIn', B))
        for (var r = 0, n = t.length; r < n; r++) t[r] = $(t[r])
        return b(t, y)
      }

      function x() {
        return new Date(this.getTime())
      }

      function E(t) {
        if (0 === arguments.length) return this
        var e, r = [], n = this.length
        for (e = 0; e < n; e++) {
          var o = t(this[e], e, this)
          Array.isArray(o) ? r.push.apply(r, o) : r.push(o)
        }
        return j(r)
      }

      function A(t) {
        if (void 0 === t && 0 === arguments.length) return this
        if ('function' != typeof t) {
          var e = Array.isArray(t) ? t.slice() : Array.prototype.slice.call(arguments)
          e.forEach(function(t, e, r) {
            'number' == typeof t && (r[e] = t.toString())
          }), t = function(t, r) {
            return -1 !== e.indexOf(r)
          }
        }
        var r = i(this)
        for (var n in this) this.hasOwnProperty(n) && !1 === t(this[n], n) && (r[n] = this[n])
        return K(r)
      }

      function P(t) {
        var e, r, n = []
        if (t && t.deep) for (e = 0, r = this.length; e < r; e++) n.push(_(this[e])) else for (e = 0, r = this.length; e < r; e++) n.push(this[e])
        return n
      }

      function T(t) {
        'function' != typeof t && (t = function(t) {
          return t
        })
        var e, r = {}, n = this.length
        for (e = 0; e < n; e++) {
          var o = t(this[e], e, this), a = o[0], i = o[1]
          r[a] = i
        }
        return K(r)
      }

      function _(t) {
        return !t || 'object' != typeof t || !Object.getOwnPropertyDescriptor(t, s) || t instanceof Date ? t : $.asMutable(t, { deep: !0 })
      }

      function L(t, e) {
        for (var r in t) Object.getOwnPropertyDescriptor(t, r) && (e[r] = t[r])
        return e
      }

      function k(t, e) {
        if (0 === arguments.length) return this
        if (null === t || 'object' != typeof t) throw new TypeError('Immutable#merge can only be invoked with objects or arrays, not ' + JSON.stringify(t))
        var r, n, o = Array.isArray(t), a = e && e.deep, c = e && e.mode || 'merge', u = e && e.merger

        function s(t, n, o) {
          var c, s = $(n[o]), f = u && u(t[o], s, e), h = t[o]
          void 0 === r && void 0 === f && t.hasOwnProperty(o) && l(s, h) || (l(h, c = void 0 !== f ? f : a && p(h) && p(s) ? $.merge(h, s, e) : s) && t.hasOwnProperty(o) || (void 0 === r && (r = L(t, i(t))), r[o] = c))
        }

        if (o) for (var f = 0, h = t.length; f < h; f++) {
          var y = t[f]
          for (n in y) y.hasOwnProperty(n) && s(void 0 !== r ? r : this, y, n)
        } else {
          for (n in t) Object.getOwnPropertyDescriptor(t, n) && s(this, t, n)
          'replace' === c && function(t, e) {
            for (var n in t) e.hasOwnProperty(n) || (void 0 === r && (r = L(t, i(t))), delete r[n])
          }(this, t)
        }
        return void 0 === r ? this : K(r)
      }

      function I(t, e) {
        var r = e && e.deep
        if (0 === arguments.length) return this
        if (null === t || 'object' != typeof t) throw new TypeError('Immutable#replace can only be invoked with objects or arrays, not ' + JSON.stringify(t))
        return $.merge(this, t, { deep: r, mode: 'replace' })
      }

      var C, R, M, D = $({})

      function U(t, e, r) {
        if (!Array.isArray(t) || 0 === t.length) throw new TypeError('The first argument to Immutable#setIn must be an array containing at least one "key" string.')
        var n = t[0]
        if (1 === t.length) return F.call(this, n, e, r)
        var o, a = t.slice(1), c = this[n]
        if (o = this.hasOwnProperty(n) && 'object' == typeof c && null !== c ? $.setIn(c, a, e) : U.call(D, a, e), this.hasOwnProperty(n) && c === o) return this
        var u = L(this, i(this))
        return u[n] = o, K(u)
      }

      function F(t, e, r) {
        var n = r && r.deep
        if (this.hasOwnProperty(t) && (n && this[t] !== e && p(e) && p(this[t]) && (e = $.merge(this[t], e, {
          deep: !0,
          mode: 'replace',
        })), l(this[t], e))) return this
        var o = L(this, i(this))
        return o[t] = $(e), K(o)
      }

      function N(t, e) {
        var r = Array.prototype.slice.call(arguments, 2), n = this[t]
        return $.set(this, t, e.apply(n, [n].concat(r)))
      }

      function G(t, e) {
        for (var r = 0, n = e.length; null != t && r < n; r++) t = t[e[r]]
        return r && r == n ? t : void 0
      }

      function q(t, e) {
        var r = Array.prototype.slice.call(arguments, 2), n = G(this, t)
        return $.setIn(this, t, e.apply(n, [n].concat(r)))
      }

      function B(t, e) {
        var r = G(this, t)
        return void 0 === r ? e : r
      }

      function H(t) {
        var e, r = i(this)
        if (t && t.deep) for (e in this) this.hasOwnProperty(e) && (r[e] = _(this[e])) else for (e in this) this.hasOwnProperty(e) && (r[e] = this[e])
        return r
      }

      function Y() {
        return {}
      }

      function K(t) {
        return a.use_static || (c(t, 'merge', k), c(t, 'replace', I), c(t, 'without', A), c(t, 'asMutable', H), c(t, 'set', F), c(t, 'setIn', U), c(t, 'update', N), c(t, 'updateIn', q), c(t, 'getIn', B)), b(t, h)
      }

      function $(t, e, r) {
        if (f(t) || function(t) {
          return 'object' == typeof t && null !== t && (t.$$typeof === o || t.$$typeof === n)
        }(t) || function(t) {
          return 'undefined' != typeof File && t instanceof File
        }(t) || function(t) {
          return 'undefined' != typeof Blob && t instanceof Blob
        }(t) || function(t) {
          return t instanceof Error
        }(t)) return t
        if (function(t) {
          return 'object' == typeof t && 'function' == typeof t.then
        }(t)) return t.then($)
        if (Array.isArray(t)) return j(t.slice())
        if (t instanceof Date) return i = new Date(t.getTime()), a.use_static || c(i, 'asMutable', x), b(i, v)
        var i, u = e && e.prototype, s = (u && u !== Object.prototype ? function() {
          return Object.create(u)
        } : Y)()
        if (null == r && (r = 64), r <= 0) throw new g('Attempt to construct Immutable from a deeply nested object was detected. Have you tried to wrap an object with circular references (e.g. React element)? See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.')
        for (var l in r -= 1, t) Object.getOwnPropertyDescriptor(t, l) && (s[l] = $(t[l], void 0, r))
        return K(s)
      }

      function J(t) {
        return function() {
          var e = [].slice.call(arguments), r = e.shift()
          return t.apply(r, e)
        }
      }

      function z(t, e) {
        return function() {
          var r = [].slice.call(arguments), n = r.shift()
          return Array.isArray(n) ? e.apply(n, r) : t.apply(n, r)
        }
      }

      return $.from = $, $.isImmutable = f, $.ImmutableError = g, $.merge = J(k), $.replace = J(I), $.without = J(A), $.asMutable = (C = H, R = P, M = x, function() {
        var t = [].slice.call(arguments), e = t.shift()
        return Array.isArray(e) ? R.apply(e, t) : e instanceof Date ? M.apply(e, t) : C.apply(e, t)
      }), $.set = z(F, w), $.setIn = z(U, S), $.update = J(N), $.updateIn = J(q), $.getIn = J(B), $.flatMap = J(E), $.asObject = J(T), a.use_static || ($.static = t({ use_static: !0 })), Object.freeze($), $
    }()
    void 0 === (n = function() {
      return o
    }.call(e, r, e, t)) || (t.exports = n)
  }()
}, function(t, e) {
  function r(t) {
    return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
    })(t)
  }

  function n(e) {
    return 'function' == typeof Symbol && 'symbol' === r(Symbol.iterator) ? t.exports = n = function(t) {
      return r(t)
    } : t.exports = n = function(t) {
      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : r(t)
    }, n(e)
  }

  t.exports = n
}, function(t, e, r) {
  var n = function(t) {
    'use strict'
    var e, r = Object.prototype, n = r.hasOwnProperty, o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator', i = o.asyncIterator || '@@asyncIterator', c = o.toStringTag || '@@toStringTag'

    function u(t, e, r, n) {
      var o = e && e.prototype instanceof d ? e : d, a = Object.create(o.prototype), i = new P(n || [])
      return a._invoke = function(t, e, r) {
        var n = f
        return function(o, a) {
          if (n === p) throw new Error('Generator is already running')
          if (n === h) {
            if ('throw' === o) throw a
            return _()
          }
          for (r.method = o, r.arg = a; ;) {
            var i = r.delegate
            if (i) {
              var c = x(i, r)
              if (c) {
                if (c === y) continue
                return c
              }
            }
            if ('next' === r.method) r.sent = r._sent = r.arg else if ('throw' === r.method) {
              if (n === f) throw n = h, r.arg
              r.dispatchException(r.arg)
            }
            else 'return' === r.method && r.abrupt('return', r.arg)
            n = p
            var u = s(t, e, r)
            if ('normal' === u.type) {
              if (n = r.done ? h : l, u.arg === y) continue
              return { value: u.arg, done: r.done }
            }
            'throw' === u.type && (n = h, r.method = 'throw', r.arg = u.arg)
          }
        }
      }(t, r, i), a
    }

    function s(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) }
      } catch (t) {
        return { type: 'throw', arg: t }
      }
    }

    t.wrap = u
    var f = 'suspendedStart', l = 'suspendedYield', p = 'executing', h = 'completed', y = {}

    function d() {
    }

    function v() {
    }

    function g() {
    }

    var b = {}
    b[a] = function() {
      return this
    }
    var m = Object.getPrototypeOf, w = m && m(m(T([])))
    w && w !== r && n.call(w, a) && (b = w)
    var O = g.prototype = d.prototype = Object.create(b)

    function S(t) {
      ['next', 'throw', 'return'].forEach(function(e) {
        t[e] = function(t) {
          return this._invoke(e, t)
        }
      })
    }

    function j(t) {
      var e
      this._invoke = function(r, o) {
        function a() {
          return new Promise(function(e, a) {
            !function e(r, o, a, i) {
              var c = s(t[r], t, o)
              if ('throw' !== c.type) {
                var u = c.arg, f = u.value
                return f && 'object' == typeof f && n.call(f, '__await') ? Promise.resolve(f.__await).then(function(t) {
                  e('next', t, a, i)
                }, function(t) {
                  e('throw', t, a, i)
                }) : Promise.resolve(f).then(function(t) {
                  u.value = t, a(u)
                }, function(t) {
                  return e('throw', t, a, i)
                })
              }
              i(c.arg)
            }(r, o, e, a)
          })
        }

        return e = e ? e.then(a, a) : a()
      }
    }

    function x(t, r) {
      var n = t.iterator[r.method]
      if (n === e) {
        if (r.delegate = null, 'throw' === r.method) {
          if (t.iterator.return && (r.method = 'return', r.arg = e, x(t, r), 'throw' === r.method)) return y
          r.method = 'throw', r.arg = new TypeError('The iterator does not provide a \'throw\' method')
        }
        return y
      }
      var o = s(n, t.iterator, r.arg)
      if ('throw' === o.type) return r.method = 'throw', r.arg = o.arg, r.delegate = null, y
      var a = o.arg
      return a ? a.done ? (r[t.resultName] = a.value, r.next = t.nextLoc, 'return' !== r.method && (r.method = 'next', r.arg = e), r.delegate = null, y) : a : (r.method = 'throw', r.arg = new TypeError('iterator result is not an object'), r.delegate = null, y)
    }

    function E(t) {
      var e = { tryLoc: t[0] }
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
    }

    function A(t) {
      var e = t.completion || {}
      e.type = 'normal', delete e.arg, t.completion = e
    }

    function P(t) {
      this.tryEntries = [{ tryLoc: 'root' }], t.forEach(E, this), this.reset(!0)
    }

    function T(t) {
      if (t) {
        var r = t[a]
        if (r) return r.call(t)
        if ('function' == typeof t.next) return t
        if (!isNaN(t.length)) {
          var o = -1, i = function r() {
            for (; ++o < t.length;) if (n.call(t, o)) return r.value = t[o], r.done = !1, r
            return r.value = e, r.done = !0, r
          }
          return i.next = i
        }
      }
      return { next: _ }
    }

    function _() {
      return { value: e, done: !0 }
    }

    return v.prototype = O.constructor = g, g.constructor = v, g[c] = v.displayName = 'GeneratorFunction', t.isGeneratorFunction = function(t) {
      var e = 'function' == typeof t && t.constructor
      return !!e && (e === v || 'GeneratorFunction' === (e.displayName || e.name))
    }, t.mark = function(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, c in t || (t[c] = 'GeneratorFunction')), t.prototype = Object.create(O), t
    }, t.awrap = function(t) {
      return { __await: t }
    }, S(j.prototype), j.prototype[i] = function() {
      return this
    }, t.AsyncIterator = j, t.async = function(e, r, n, o) {
      var a = new j(u(e, r, n, o))
      return t.isGeneratorFunction(r) ? a : a.next().then(function(t) {
        return t.done ? t.value : a.next()
      })
    }, S(O), O[c] = 'Generator', O[a] = function() {
      return this
    }, O.toString = function() {
      return '[object Generator]'
    }, t.keys = function(t) {
      var e = []
      for (var r in t) e.push(r)
      return e.reverse(), function r() {
        for (; e.length;) {
          var n = e.pop()
          if (n in t) return r.value = n, r.done = !1, r
        }
        return r.done = !0, r
      }
    }, t.values = T, P.prototype = {
      constructor: P, reset: function(t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = 'next', this.arg = e, this.tryEntries.forEach(A), !t) for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
      }, stop: function() {
        this.done = !0
        var t = this.tryEntries[0].completion
        if ('throw' === t.type) throw t.arg
        return this.rval
      }, dispatchException: function(t) {
        if (this.done) throw t
        var r = this

        function o(n, o) {
          return c.type = 'throw', c.arg = t, r.next = n, o && (r.method = 'next', r.arg = e), !!o
        }

        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
          var i = this.tryEntries[a], c = i.completion
          if ('root' === i.tryLoc) return o('end')
          if (i.tryLoc <= this.prev) {
            var u = n.call(i, 'catchLoc'), s = n.call(i, 'finallyLoc')
            if (u && s) {
              if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
              if (this.prev < i.finallyLoc) return o(i.finallyLoc)
            }
            else if (u) {
              if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
            }
            else {
              if (!s) throw new Error('try statement without catch or finally')
              if (this.prev < i.finallyLoc) return o(i.finallyLoc)
            }
          }
        }
      }, abrupt: function(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r]
          if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
            var a = o
            break
          }
        }
        a && ('break' === t || 'continue' === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null)
        var i = a ? a.completion : {}
        return i.type = t, i.arg = e, a ? (this.method = 'next', this.next = a.finallyLoc, y) : this.complete(i)
      }, complete: function(t, e) {
        if ('throw' === t.type) throw t.arg
        return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : 'normal' === t.type && e && (this.next = e), y
      }, finish: function(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e]
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), A(r), y
        }
      }, catch: function(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e]
          if (r.tryLoc === t) {
            var n = r.completion
            if ('throw' === n.type) {
              var o = n.arg
              A(r)
            }
            return o
          }
        }
        throw new Error('illegal catch attempt')
      }, delegateYield: function(t, r, n) {
        return this.delegate = {
          iterator: T(t),
          resultName: r,
          nextLoc: n,
        }, 'next' === this.method && (this.arg = e), y
      },
    }, t
  }(t.exports)
  try {
    regeneratorRuntime = n
  } catch (t) {
    Function('r', 'regeneratorRuntime = r')(n)
  }
}, function(t, e, r) {
  'use strict'
  r.r(e)
  var n = r(0), o = r.n(n), a = r(1), i = r(3), c = r.n(i)

  function u(t, e) {
    var r = Object.keys(t)
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t)
      e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), r.push.apply(r, n)
    }
    return r
  }

  function s(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {}
      e % 2 ? u(r, !0).forEach(function(e) {
        o()(t, e, r[e])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(r).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      })
    }
    return t
  }

  var f = function(t) {
    var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function() {
        return c()(s({ loading: !1, error: !1, success: !1, errorMessage: '', params: null }, r))
      }, i = ''.concat(t, '_START'), u = ''.concat(t, '_SUCCESS'), f = ''.concat(t, '_ERROR'), l = ''.concat(t, '_REST'),
      p = Object(a.createAction)(i, function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        return t
      }), h = Object(a.createAction)(l), y = Object(a.createAction)(u, function(t) {
        return { data: t }
      }), d = Object(a.createAction)(f, function(t) {
        return { errorMessage: t }
      }), v = Object(a.handleActions)((e = {}, o()(e, i, function(t, e) {
        return t.merge({ loading: !0, error: !1, success: !1, errorMessage: '', params: e.payload && e.payload.params })
      }), o()(e, u, function(t, e) {
        return t.merge({ loading: !1, error: !1, success: !0, data: e.payload && e.payload.data, errorMessage: '' })
      }), o()(e, f, function(t, e) {
        return c()({ loading: !1, error: !0, success: !1, errorMessage: e.payload && e.payload.errorMessage })
      }), o()(e, l, function(t, e) {
        return n()
      }), e), n())
    return {
      actions: { start: p, success: y, error: d, reset: h },
      types: { START: i, SUCCESS: u, ERROR: f, RESET: l },
      reducer: v,
    }
  }, l = function(t) {
    var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function() {
        return c()(s({
          loading: !1,
          error: !1,
          success: !1,
          params: {},
          data: { page: 1, per_page: 10, total_count: 0, total_page: 0, entries: [] },
        }, r))
      }, i = ''.concat(t, '_LIST_START'), u = ''.concat(t, '_LIST_SUCCESS'), f = 'RESET_'.concat(t, '_LIST'),
      l = ''.concat(t, '_LIST_ERROR'), p = Object(a.createAction)(i, function(t, e, r) {
        return { page: t, limit: e, params: r }
      }), h = Object(a.createAction)(u, function(t) {
        return { data: t }
      }), y = Object(a.createAction)(f), d = Object(a.createAction)(l),
      v = Object(a.handleActions)((e = {}, o()(e, i, function(t, e) {
        return t.merge({ loading: !0, success: !1, params: e.payload && e.payload.params })
      }), o()(e, u, function(t, e) {
        return t.merge({ loading: !1, success: !0, data: e.payload && e.payload.data })
      }), o()(e, l, function(t) {
        return t.merge({ loading: !1, error: !0, success: !1 })
      }), o()(e, f, function(t) {
        return n()
      }), e), n())
    return {
      reducer: v,
      types: { START: i, SUCCESS: u, RESET: f, ERROR: l },
      actions: { start: p, success: h, error: d, reset: y },
    }
  }, p = r(2), h = r.n(p), y = function(t) {
    return '@@redux-saga/' + t
  }, d = y('CANCEL_PROMISE'), v = y('IO'), g = y('MULTICAST'), b = y('SELF_CANCELLATION')
  var m = function(t) {
    return null == t
  }, w = function(t) {
    return null != t
  }, O = function(t) {
    return 'function' == typeof t
  }, S = function(t) {
    return 'string' == typeof t
  }, j = Array.isArray, x = function t(e) {
    return e && (S(e) || P(e) || O(e) || j(e) && e.every(t))
  }, E = function(t) {
    return t && O(t.take) && O(t.close)
  }, A = function(t) {
    return O(t) && t.hasOwnProperty('toString')
  }, P = function(t) {
    return Boolean(t) && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
  }, T = function(t) {
    return E(t) && t[g]
  }
  var _ = function(t, e) {
    var r
    void 0 === e && (e = !0)
    var n = new Promise(function(n) {
      r = setTimeout(n, t, e)
    })
    return n[d] = function() {
      clearTimeout(r)
    }, n
  }, L = function(t) {
    return t
  }
  'function' == typeof Symbol && Symbol.asyncIterator && Symbol.asyncIterator
  var k = function(t) {
    throw t
  }, I = function(t) {
    return { value: t, done: !0 }
  }
  var C = 'TAKE', R = 'PUT', M = 'CALL', D = 'FORK', U = 'CANCEL', F = 'SELECT', N = function(t, e) {
    var r
    return (r = {})[v] = !0, r.combinator = !1, r.type = t, r.payload = e, r
  }

  function G(t, e) {
    return void 0 === t && (t = '*'), x(t) ? N(C, { pattern: t }) : T(t) && w(e) && x(e) ? N(C, {
      channel: t,
      pattern: e,
    }) : E(t) ? N(C, { channel: t }) : void 0
  }

  function q(t, e) {
    return m(e) && (e = t, t = void 0), N(R, { channel: t, action: e })
  }

  function B(t, e) {
    var r, n = null
    return O(t) ? r = t : (j(t) ? (n = t[0], r = t[1]) : (n = t.context, r = t.fn), n && S(r) && O(n[r]) && (r = n[r])), {
      context: n,
      fn: r,
      args: e,
    }
  }

  function H(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n]
    return N(M, B(t, r))
  }

  function Y(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n]
    return N(D, B(t, r))
  }

  var K = H.bind(null, _), $ = function(t) {
    return { done: !0, value: t }
  }, J = {}

  function z(t) {
    return E(t) ? 'channel' : A(t) ? String(t) : O(t) ? t.name : String(t)
  }

  function Q(t, e, r) {
    var n, o, a, i = e

    function c(e, r) {
      if (i === J) return $(e)
      if (r && !o) throw i = J, r
      n && n(e)
      var c = r ? t[o](r) : t[i]()
      return i = c.nextState, a = c.effect, n = c.stateUpdater, o = c.errorState, i === J ? $(e) : a
    }

    return function(t, e, r) {
      void 0 === e && (e = k), void 0 === r && (r = 'iterator')
      var n = { meta: { name: r }, next: t, throw: e, return: I, isSagaIterator: !0 }
      return 'undefined' != typeof Symbol && (n[Symbol.iterator] = function() {
        return n
      }), n
    }(c, function(t) {
      return c(null, t)
    }, r)
  }

  function V(t, e) {
    for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o]
    var a, i, c = { done: !1, value: G(t) }, u = function(t) {
      return { done: !1, value: Y.apply(void 0, [e].concat(n, [t])) }
    }, s = function(t) {
      return { done: !1, value: (e = t, void 0 === e && (e = b), N(U, e)) }
      var e
    }, f = function(t) {
      return a = t
    }, l = function(t) {
      return i = t
    }
    return Q({
      q1: function() {
        return { nextState: 'q2', effect: c, stateUpdater: l }
      }, q2: function() {
        return a ? { nextState: 'q3', effect: s(a) } : { nextState: 'q1', effect: u(i), stateUpdater: f }
      }, q3: function() {
        return { nextState: 'q1', effect: u(i), stateUpdater: f }
      },
    }, 'q1', 'takeLatest(' + z(t) + ', ' + e.name + ')')
  }

  function W(t, e) {
    for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o]
    return Y.apply(void 0, [V, t, e].concat(n))
  }

  var X = r(4), Z = r.n(X)

  function tt(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ''
    if ('object' !== Z()(t) || !t) return ''
    var n = []
    return Object.keys(t).forEach(function(e) {
      void 0 !== t[e] && null !== t[e] && (t[e] instanceof Object ? n.push(''.concat(e, '=').concat(JSON.stringify(t[e]))) : n.push(''.concat(e, '=').concat(t[e])))
    }), e + n.join('&') + r
  }

  var et = function(t) {
    return t.split('_').map(function(t, e) {
      return t.length > 0 ? 0 === e ? t.toLowerCase() : t[0].toUpperCase() + t.substring(1).toLowerCase() : ''
    }).join('')
  }

  function rt(t, e) {
    var r = Object.keys(t)
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t)
      e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), r.push.apply(r, n)
    }
    return r
  }

  function nt(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {}
      e % 2 ? rt(r, !0).forEach(function(e) {
        o()(t, e, r[e])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rt(r).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      })
    }
    return t
  }

  var ot = h.a.mark(pt), at = h.a.mark(ht), it = null, ct = null, ut = {
    put: q, call: H, select: function(t) {
      void 0 === t && (t = L)
      for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n]
      return N(F, { selector: t, args: r })
    }, delay: K,
  }, st = [], ft = {}, lt = function(t) {
    return function() {
      for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n]
      var o = t.call.apply(t, [null].concat(r)), a = et(r[0])
      return ft[a] = o.actions, function(t) {
        var e = pt(o, t)
        return st.push(e), o
      }
    }
  }

  function pt(t, e) {
    return h.a.wrap(function(r) {
      for (; ;) switch (r.prev = r.next) {
        case 0:
          if ('function' != typeof e) {
            r.next = 5
            break
          }
          return r.next = 3, W(t.types.START, h.a.mark(function r(n) {
            var o
            return h.a.wrap(function(r) {
              for (; ;) switch (r.prev = r.next) {
                case 0:
                  return o = n.payload, r.prev = 1, r.next = 4, H(e, o, ut, t.actions, ft)
                case 4:
                  r.next = 9
                  break
                case 6:
                  r.prev = 6, r.t0 = r.catch(1)
                case 9:
                case'end':
                  return r.stop()
              }
            }, r, null, [[1, 6]])
          }))
        case 3:
          r.next = 7
          break
        case 5:
          return r.next = 7, W(t.types.START, h.a.mark(function r(n) {
            var o, a, i, c, u, s, f
            return h.a.wrap(function(r) {
              for (; ;) switch (r.prev = r.next) {
                case 0:
                  return o = n.payload, r.prev = 1, r.next = 4, H(ht, e, o)
                case 4:
                  if (a = r.sent, e.fetchAllConfig) {
                    r.next = 11
                    break
                  }
                  return r.next = 8, H(it, a)
                case 8:
                  i = r.sent, r.next = 15
                  break
                case 11:
                  return c = e.fetchAllConfig, u = c.api, s = c.pageKey, f = c.totalPagesKey, r.next = 14, H(ct, u, s, f)
                case 14:
                  i = r.sent
                case 15:
                  if (r.t0 = e.resultHandler, !r.t0) {
                    r.next = 20
                    break
                  }
                  return r.next = 19, H(e.resultHandler, i, o, ut)
                case 19:
                  i = r.sent
                case 20:
                  return r.next = 22, q(t.actions.success(i))
                case 22:
                  if (!e.after) {
                    r.next = 25
                    break
                  }
                  return r.next = 25, H(e.after, i, o, ut)
                case 25:
                  r.next = 33
                  break
                case 27:
                  if (r.prev = 27, r.t1 = r.catch(1), !e.catch) {
                    r.next = 31
                    break
                  }
                  return r.abrupt('return', e.catch(r.t1))
                case 31:
                  return r.next = 33, q(t.actions.reset())
                case 33:
                case'end':
                  return r.stop()
              }
            }, r, null, [[1, 27]])
          }))
        case 7:
        case'end':
          return r.stop()
      }
    }, ot)
  }

  function ht(t, e) {
    var r, n, o, a, i, c, u
    return h.a.wrap(function(s) {
      for (; ;) switch (s.prev = s.next) {
        case 0:
          if (r = (r = t.method) ? r.toUpperCase() : 'GET', 'function' == typeof (n = t.url) && (n = n(e, ut)), n) {
            s.next = 6
            break
          }
          return s.abrupt('return')
        case 6:
          if (o = {}, e && e.params && (o = e.params), e && e.data && (o = e.data), a = Object.prototype.toString.call(t.data), !t.data || '[object Function]' !== a) {
            s.next = 15
            break
          }
          return s.next = 13, H(t.data, e, ut)
        case 13:
          i = s.sent, '[object Object]' === Object.prototype.toString.call(i) && (o = i)
        case 15:
          return '[object Object]' === a && (o = nt({}, o, {}, t.data)), c = {
            url: n,
            method: r,
          }, 'GET' === r ? (u = tt(o), n += u ? '&' + u : '', c.url = n) : c.data = o, s.abrupt('return', c)
        case 19:
        case'end':
          return s.stop()
      }
    }, at)
  }

  var yt = st
  e.default = {
    buildRedux: f, buildListRedux: l, initFetch: function(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
      it = t, e && (ct = e)
    }, buildReduxConnectSaga: lt(f), buildListReduxConnectSaga: lt(l), allSagas: yt,
  }
}]).default
