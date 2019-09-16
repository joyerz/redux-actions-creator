module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/chunk-e922c950.js":
/*!**************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/chunk-e922c950.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, $, a0, a1, a2, a3, a4, a5, a6, a7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return kTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return expanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return none; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return JOIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ACTION_CHANNEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return getMetaInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return createAllStyleChildCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return createEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return assignWithSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return shouldComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return asyncIteratorSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return shouldCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return shouldTerminate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return wrapSagaDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return sliding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return buffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return effectTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return takeMaybe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return putResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return setContext; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@redux-saga/core/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");





var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue =
/*#__PURE__*/
konst(true);
var noop = function noop() {};
var identity = function identity(v) {
  return v;
};
var hasSymbol = typeof Symbol === 'function';
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : '@@asyncIterator';
function check(value, predicate, error) {
  if (!predicate(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols(target, source) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(target, source);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function (s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap(mapper, arr) {
  var _ref;

  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array, item) {
  var index = array.indexOf(item);

  if (index >= 0) {
    array.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    fn();
  };
}

var kThrow = function kThrow(err) {
  throw err;
};

var kReturn = function kReturn(value) {
  return {
    value: value,
    done: true
  };
};

function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }

  if (name === void 0) {
    name = 'iterator';
  }

  var iterator = {
    meta: {
      name: name
    },
    next: next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };

  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}
function logError(error, _ref2) {
  var sagaStack = _ref2.sagaStack;

  /*eslint-disable no-console*/
  console.error(error);
  console.error(sagaStack);
}
var internalErr = function internalErr(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n"; // creates empty, but not-holey array

var createEmptyArray = function createEmptyArray(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    if (true) {
      check(action, function (ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }

    return dispatch(Object.defineProperty(action, _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"], {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TERMINATE"];
};
var shouldCancel = function shouldCancel(res) {
  return res === _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK_CANCEL"];
};
var shouldComplete = function shouldComplete(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;

  if (true) {
    check(totalCount, function (c) {
      return c > 0;
    }, 'createAllStyleChildCallbacks: get an empty array or object');
  }

  var completedCount = 0;
  var completed;
  var results = Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};

  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }

  keys.forEach(function (key) {
    var chCbAtKey = function chCbAtKey(res, isErr) {
      if (completed) {
        return;
      }

      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };

    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });

  parentCallback.cancel = function () {
    if (!completed) {
      completed = true;
      keys.forEach(function (key) {
        return childCallbacks[key].cancel();
      });
    }
  };

  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || 'anonymous',
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_LOCATION"]];
}

var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};

function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];

    while (length) {
      items.push(take());
    }

    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;

        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);

          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;

          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;

          default: // DROP

        }
      }
    },
    take: take,
    flush: flush
  };
}

var none = function none() {
  return zeroBuffer;
};
var fixed = function fixed(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};

var buffers = /*#__PURE__*/Object.freeze({
  none: none,
  fixed: fixed,
  dropping: dropping,
  sliding: sliding,
  expanding: expanding
});

var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var effectTypes = /*#__PURE__*/Object.freeze({
  TAKE: TAKE,
  PUT: PUT,
  ALL: ALL,
  RACE: RACE,
  CALL: CALL,
  CPS: CPS,
  FORK: FORK,
  JOIN: JOIN,
  CANCEL: CANCEL,
  SELECT: SELECT,
  ACTION_CHANNEL: ACTION_CHANNEL,
  CANCELLED: CANCELLED,
  FLUSH: FLUSH,
  GET_CONTEXT: GET_CONTEXT,
  SET_CONTEXT: SET_CONTEXT
});

var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from @redux-saga/testing-utils)';

var makeEffect = function makeEffect(type, payload) {
  var _ref;

  return _ref = {}, _ref[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};

var isForkEffect = function isForkEffect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]] && eff.type === FORK;
};

var detach = function detach(eff) {
  if (true) {
    check(eff, isForkEffect, 'detach(eff): argument must be a fork effect');
  }

  return makeEffect(FORK, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eff.payload, {
    detached: true
  }));
};
function take(patternOrChannel, multicastPattern) {
  if (patternOrChannel === void 0) {
    patternOrChannel = '*';
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'take(patternOrChannel): patternOrChannel is undefined');
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      pattern: patternOrChannel
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["multicast"])(patternOrChannel) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(multicastPattern) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"])(multicastPattern)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel,
      pattern: multicastPattern
    });
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return makeEffect(TAKE, {
      channel: patternOrChannel
    });
  }

  if (true) {
    throw new Error("take(patternOrChannel): argument " + patternOrChannel + " is not valid channel or a valid pattern");
  }
}
var takeMaybe = function takeMaybe() {
  var eff = take.apply(void 0, arguments);
  eff.payload.maybe = true;
  return eff;
};
function put(channel$1, action) {
  if (true) {
    if (arguments.length > 1) {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument channel is undefined');
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "put(channel, action): argument " + channel$1 + " is not a valid channel");
      check(action, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(channel, action): argument action is undefined');
    } else {
      check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'put(action): argument action is undefined');
    }
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["undef"])(action)) {
    action = channel$1; // `undefined` instead of `null` to make default parameter work

    channel$1 = undefined;
  }

  return makeEffect(PUT, {
    channel: channel$1,
    action: action
  });
}
var putResolve = function putResolve() {
  var eff = put.apply(void 0, arguments);
  eff.payload.resolve = true;
  return eff;
};
function all(effects) {
  var eff = makeEffect(ALL, effects);
  eff.combinator = true;
  return eff;
}
function race(effects) {
  var eff = makeEffect(RACE, effects);
  eff.combinator = true;
  return eff;
} // this match getFnCallDescriptor logic

var validateFnDescriptor = function validateFnDescriptor(effectName, fnDescriptor) {
  check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument fn is undefined or null");

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    return;
  }

  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"])(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": argument fn is not function");
    return;
  }

  if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn)) {
    check(context[fn], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": context arguments has no such method - \"" + fn + "\"");
    return;
  }

  check(fn, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};

function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }

    if (context && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"])(fn) && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(context[fn])) {
      fn = context[fn];
    }
  }

  return {
    context: context,
    fn: fn,
    args: args
  };
}

var isNotDelayEffect = function isNotDelayEffect(fn) {
  return fn !== delay;
};

function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var arg0 = typeof args[0] === 'number' ? args[0] : 'ms';
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor('call', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
function apply(context, fn, args) {
  if (args === void 0) {
    args = [];
  }

  var fnDescriptor = [context, fn];

  if (true) {
    validateFnDescriptor('apply', fnDescriptor);
  }

  return makeEffect(CALL, getFnCallDescriptor([context, fn], args));
}
function cps(fnDescriptor) {
  if (true) {
    validateFnDescriptor('cps', fnDescriptor);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return makeEffect(CPS, getFnCallDescriptor(fnDescriptor, args));
}
function fork(fnDescriptor) {
  if (true) {
    validateFnDescriptor('fork', fnDescriptor);
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
}
function spawn(fnDescriptor) {
  if (true) {
    validateFnDescriptor('spawn', fnDescriptor);
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(void 0, [fnDescriptor].concat(args)));
}
function join(taskOrTasks) {
  if (true) {
    if (arguments.length > 1) {
      throw new Error('join(...tasks) is not supported any more. Please use join([...tasks]) to join multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "join(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(JOIN, taskOrTasks);
}
function cancel(taskOrTasks) {
  if (taskOrTasks === void 0) {
    taskOrTasks = _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"];
  }

  if (true) {
    if (arguments.length > 1) {
      throw new Error('cancel(...tasks) is not supported any more. Please use cancel([...tasks]) to cancel multiple tasks.');
    }

    if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["array"])(taskOrTasks)) {
      taskOrTasks.forEach(function (t) {
        check(t, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel([...tasks]): argument " + t + " is not a valid Task object " + TEST_HINT);
      });
    } else if (taskOrTasks !== _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SELF_CANCELLATION"] && Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"])(taskOrTasks)) {
      check(taskOrTasks, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["task"], "cancel(task): argument " + taskOrTasks + " is not a valid Task object " + TEST_HINT);
    }
  }

  return makeEffect(CANCEL, taskOrTasks);
}
function select(selector) {
  if (selector === void 0) {
    selector = identity;
  }

  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  if ( true && arguments.length) {
    check(arguments[0], _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'select(selector, [...]): argument selector is undefined');
    check(selector, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"], "select(selector, [...]): argument " + selector + " is not a function");
  }

  return makeEffect(SELECT, {
    selector: selector,
    args: args
  });
}
/**
  channel(pattern, [buffer])    => creates a proxy channel for store actions
**/

function actionChannel(pattern$1, buffer$1) {
  if (true) {
    check(pattern$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["pattern"], 'actionChannel(pattern,...): argument pattern is not valid');

    if (arguments.length > 1) {
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'actionChannel(pattern, buffer): argument buffer is undefined');
      check(buffer$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["buffer"], "actionChannel(pattern, buffer): argument " + buffer$1 + " is not a valid buffer");
    }
  }

  return makeEffect(ACTION_CHANNEL, {
    pattern: pattern$1,
    buffer: buffer$1
  });
}
function cancelled() {
  return makeEffect(CANCELLED, {});
}
function flush(channel$1) {
  if (true) {
    check(channel$1, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"], "flush(channel): argument " + channel$1 + " is not valid channel");
  }

  return makeEffect(FLUSH, channel$1);
}
function getContext(prop) {
  if (true) {
    check(prop, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["string"], "getContext(prop): argument " + prop + " is not a string");
  }

  return makeEffect(GET_CONTEXT, prop);
}
function setContext(props) {
  if (true) {
    check(props, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["object"], createSetContextWarning(null, props));
  }

  return makeEffect(SET_CONTEXT, props);
}
var delay =
/*#__PURE__*/
call.bind(null, _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_3__["default"]);




/***/ }),

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js ***!
  \**********************************************************************/
/*! exports provided: effectTypes, take, takeMaybe, put, putResolve, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, delay, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return takeEvery$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return takeLatest$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return takeLeading$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle$1; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@redux-saga/core/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux-saga/is */ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js");
/* harmony import */ var _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-e922c950.js */ "./node_modules/@redux-saga/core/dist/chunk-e922c950.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["W"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["M"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["X"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["Y"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["Z"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["a0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["a1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["a2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["a3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["a4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["a6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["a7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["S"]; });

/* harmony import */ var _redux_saga_delay_p__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/delay-p */ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js");







var done = function done(value) {
  return {
    done: true,
    value: value
  };
};

var qEnd = {};
function safeName(patternOrChannel) {
  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["channel"])(patternOrChannel)) {
    return 'channel';
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["stringableFunc"])(patternOrChannel)) {
    return String(patternOrChannel);
  }

  if (Object(_redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["func"])(patternOrChannel)) {
    return patternOrChannel.name;
  }

  return String(patternOrChannel);
}
function fsmIterator(fsm, startState, name) {
  var stateUpdater,
      errorState,
      effect,
      nextState = startState;

  function next(arg, error) {
    if (nextState === qEnd) {
      return done(arg);
    }

    if (error && !errorState) {
      nextState = qEnd;
      throw error;
    } else {
      stateUpdater && stateUpdater(arg);
      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
      nextState = currentState.nextState;
      effect = currentState.effect;
      stateUpdater = currentState.stateUpdater;
      errorState = currentState.errorState;
      return nextState === qEnd ? done(arg) : effect;
    }
  }

  return Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["B"])(next, function (error) {
    return next(null, error);
  }, name);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["M"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yFork(action)
      };
    }
  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["M"])(patternOrChannel)
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yCancel = function yCancel(task) {
    return {
      done: false,
      value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["O"])(task)
    };
  };

  var task, action;

  var setTask = function setTask(t) {
    return task = t;
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return task ? {
        nextState: 'q3',
        effect: yCancel(task)
      } : {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    },
    q3: function q3() {
      return {
        nextState: 'q1',
        effect: yFork(action),
        stateUpdater: setTask
      };
    }
  }, 'q1', "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function takeLeading(patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = {
    done: false,
    value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["M"])(patternOrChannel)
  };

  var yCall = function yCall(ac) {
    return {
      done: false,
      value: _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["P"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var action;

  var setAction = function setAction(ac) {
    return action = ac;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q1',
        effect: yCall(action)
      };
    }
  }, 'q1', "takeLeading(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, channel;
  var yActionChannel = {
    done: false,
    value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(pattern, Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["R"])(1))
  };

  var yTake = function yTake() {
    return {
      done: false,
      value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["M"])(channel)
    };
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yDelay = {
    done: false,
    value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["S"])(delayLength)
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yActionChannel,
        stateUpdater: setChannel
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yTake(),
        stateUpdater: setAction
      };
    },
    q3: function q3() {
      return {
        nextState: 'q4',
        effect: yFork(action)
      };
    },
    q4: function q4() {
      return {
        nextState: 'q2',
        effect: yDelay
      };
    }
  }, 'q1', "throttle(" + safeName(pattern) + ", " + worker.name + ")");
}

function retry(maxTries, delayLength, fn) {
  var counter = maxTries;

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var yCall = {
    done: false,
    value: _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["P"].apply(void 0, [fn].concat(args))
  };
  var yDelay = {
    done: false,
    value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["S"])(delayLength)
  };
  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yCall,
        errorState: 'q10'
      };
    },
    q2: function q2() {
      return {
        nextState: qEnd
      };
    },
    q10: function q10(error) {
      counter -= 1;

      if (counter <= 0) {
        throw error;
      }

      return {
        nextState: 'q1',
        effect: yDelay
      };
    }
  }, 'q1', "retry(" + fn.name + ")");
}

function debounceHelper(delayLength, patternOrChannel, worker) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action, raceOutput;
  var yTake = {
    done: false,
    value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["M"])(patternOrChannel)
  };
  var yRace = {
    done: false,
    value: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["T"])({
      action: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["M"])(patternOrChannel),
      debounce: Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["S"])(delayLength)
    })
  };

  var yFork = function yFork(ac) {
    return {
      done: false,
      value: _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [worker].concat(args, [ac]))
    };
  };

  var yNoop = function yNoop(value) {
    return {
      done: false,
      value: value
    };
  };

  var setAction = function setAction(ac) {
    return action = ac;
  };

  var setRaceOutput = function setRaceOutput(ro) {
    return raceOutput = ro;
  };

  return fsmIterator({
    q1: function q1() {
      return {
        nextState: 'q2',
        effect: yTake,
        stateUpdater: setAction
      };
    },
    q2: function q2() {
      return {
        nextState: 'q3',
        effect: yRace,
        stateUpdater: setRaceOutput
      };
    },
    q3: function q3() {
      return raceOutput.debounce ? {
        nextState: 'q1',
        effect: yFork(action)
      } : {
        nextState: 'q2',
        effect: yNoop(raceOutput.action),
        stateUpdater: setAction
      };
    }
  }, 'q1', "debounce(" + safeName(patternOrChannel) + ", " + worker.name + ")");
}

var validateTakeEffect = function validateTakeEffect(fn, patternOrChannel, worker) {
  Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["c"])(patternOrChannel, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a pattern or channel");
  Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], fn.name + " requires a saga parameter");
};

function takeEvery$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeEvery$1, patternOrChannel, worker);
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [takeEvery, patternOrChannel, worker].concat(args));
}
function takeLatest$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLatest$1, patternOrChannel, worker);
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [takeLatest, patternOrChannel, worker].concat(args));
}
function takeLeading$1(patternOrChannel, worker) {
  if (true) {
    validateTakeEffect(takeLeading$1, patternOrChannel, worker);
  }

  for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [takeLeading, patternOrChannel, worker].concat(args));
}
function throttle$1(ms, pattern, worker) {
  if (true) {
    Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["c"])(pattern, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a pattern');
    Object(_chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["c"])(worker, _redux_saga_is__WEBPACK_IMPORTED_MODULE_2__["notUndef"], 'throttle requires a saga parameter');
  }

  for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
    args[_key4 - 3] = arguments[_key4];
  }

  return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [throttle, ms, pattern, worker].concat(args));
}
function retry$1(maxTries, delayLength, worker) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 3 ? _len5 - 3 : 0), _key5 = 3; _key5 < _len5; _key5++) {
    args[_key5 - 3] = arguments[_key5];
  }

  return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["P"].apply(void 0, [retry, maxTries, delayLength, worker].concat(args));
}
function debounce(delayLength, pattern, worker) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
    args[_key6 - 3] = arguments[_key6];
  }

  return _chunk_e922c950_js__WEBPACK_IMPORTED_MODULE_3__["N"].apply(void 0, [debounceHelper, delayLength, pattern, worker].concat(args));
}




/***/ }),

/***/ "./node_modules/@redux-saga/core/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@redux-saga/core/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }

  var timeoutId;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(resolve, ms, val);
  });

  promise[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["CANCEL"]] = function () {
    clearTimeout(timeoutId);
  };

  return promise;
}

/* harmony default export */ __webpack_exports__["default"] = (delayP);


/***/ }),

/***/ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js ***!
  \***************************************************************/
/*! exports provided: undef, notUndef, func, number, string, array, object, promise, iterator, iterable, task, sagaAction, observable, buffer, pattern, channel, stringableFunc, symbol, multicast, effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undef", function() { return undef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notUndef", function() { return notUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "func", function() { return func; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterable", function() { return iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "task", function() { return task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaAction", function() { return sagaAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channel", function() { return channel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringableFunc", function() { return stringableFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
/* harmony import */ var _redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/symbols */ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js");


var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var number = function number(n) {
  return typeof n === 'number';
};
var string = function string(s) {
  return typeof s === 'string';
};
var array = Array.isArray;
var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};
var promise = function promise(p) {
  return p && func(p.then);
};
var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};
var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};
var task = function task(t) {
  return t && t[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["TASK"]];
};
var sagaAction = function sagaAction(a) {
  return Boolean(a && a[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["SAGA_ACTION"]]);
};
var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};
var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(pattern));
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};
var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast(ch) {
  return channel(ch) && ch[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["MULTICAST"]];
};
var effect = function effect(eff) {
  return eff && eff[_redux_saga_symbols__WEBPACK_IMPORTED_MODULE_0__["IO"]];
};




/***/ }),

/***/ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js ***!
  \*************************************************************************/
/*! exports provided: CANCEL, CHANNEL_END_TYPE, IO, MATCH, MULTICAST, SAGA_ACTION, SELF_CANCELLATION, TASK, TASK_CANCEL, TERMINATE, SAGA_LOCATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCEL", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_END_TYPE", function() { return CHANNEL_END_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return IO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATCH", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTICAST", function() { return MULTICAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_ACTION", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELF_CANCELLATION", function() { return SELF_CANCELLATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK", function() { return TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_CANCEL", function() { return TASK_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMINATE", function() { return TERMINATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAGA_LOCATION", function() { return SAGA_LOCATION; });
var createSymbol = function createSymbol(name) {
  return "@@redux-saga/" + name;
};

var CANCEL =
/*#__PURE__*/
createSymbol('CANCEL_PROMISE');
var CHANNEL_END_TYPE =
/*#__PURE__*/
createSymbol('CHANNEL_END');
var IO =
/*#__PURE__*/
createSymbol('IO');
var MATCH =
/*#__PURE__*/
createSymbol('MATCH');
var MULTICAST =
/*#__PURE__*/
createSymbol('MULTICAST');
var SAGA_ACTION =
/*#__PURE__*/
createSymbol('SAGA_ACTION');
var SELF_CANCELLATION =
/*#__PURE__*/
createSymbol('SELF_CANCELLATION');
var TASK =
/*#__PURE__*/
createSymbol('TASK');
var TASK_CANCEL =
/*#__PURE__*/
createSymbol('TASK_CANCEL');
var TERMINATE =
/*#__PURE__*/
createSymbol('TERMINATE');
var SAGA_LOCATION =
/*#__PURE__*/
createSymbol('LOCATION');




/***/ }),

/***/ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js ***!
  \**************************************************************************/
/*! exports provided: effectTypes, take, takeMaybe, put, putResolve, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, delay, debounce, retry, takeEvery, takeLatest, takeLeading, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effectTypes", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["effectTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["take"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeMaybe", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeMaybe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "putResolve", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["putResolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["race"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["spawn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["actionChannel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["cancelled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["retry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLeading", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLeading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"]; });




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/seamless-immutable/seamless-immutable.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/seamless-immutable/seamless-immutable.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  "use strict";

function immutableInit(config) {

  // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L21
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element');
  var REACT_ELEMENT_TYPE_FALLBACK = 0xeac7;

  var globalConfig = {
    use_static: false
  };
  if (isObject(config)) {
      if (config.use_static !== undefined) {
          globalConfig.use_static = Boolean(config.use_static);
      }
  }

  function isObject(data) {
    return (
      typeof data === 'object' &&
      !Array.isArray(data) &&
      data !== null
    );
  }

  function instantiateEmptyObject(obj) {
      var prototype = Object.getPrototypeOf(obj);
      if (!prototype) {
          return {};
      } else {
          return Object.create(prototype);
      }
  }

  function addPropertyTo(target, methodName, value) {
    Object.defineProperty(target, methodName, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: value
    });
  }

  function banProperty(target, methodName) {
    addPropertyTo(target, methodName, function() {
      throw new ImmutableError("The " + methodName +
        " method cannot be invoked on an Immutable data structure.");
    });
  }

  var immutabilityTag = "__immutable_invariants_hold";

  function addImmutabilityTag(target) {
    addPropertyTo(target, immutabilityTag, true);
  }

  function isImmutable(target) {
    if (typeof target === "object") {
      return target === null || Boolean(
        Object.getOwnPropertyDescriptor(target, immutabilityTag)
      );
    } else {
      // In JavaScript, only objects are even potentially mutable.
      // strings, numbers, null, and undefined are all naturally immutable.
      return true;
    }
  }

  function isEqual(a, b) {
    // Avoid false positives due to (NaN !== NaN) evaluating to true
    return (a === b || (a !== a && b !== b));
  }

  function isMergableObject(target) {
    return target !== null && typeof target === "object" && !(Array.isArray(target)) && !(target instanceof Date);
  }

  var mutatingObjectMethods = [
    "setPrototypeOf"
  ];

  var nonMutatingObjectMethods = [
    "keys"
  ];

  var mutatingArrayMethods = mutatingObjectMethods.concat([
    "push", "pop", "sort", "splice", "shift", "unshift", "reverse"
  ]);

  var nonMutatingArrayMethods = nonMutatingObjectMethods.concat([
    "map", "filter", "slice", "concat", "reduce", "reduceRight"
  ]);

  var mutatingDateMethods = mutatingObjectMethods.concat([
    "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds",
    "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes",
    "setUTCMonth", "setUTCSeconds", "setYear"
  ]);

  function ImmutableError(message) {
    this.name = 'MyError';
    this.message = message;
    this.stack = (new Error()).stack;
  }
  ImmutableError.prototype = new Error();
  ImmutableError.prototype.constructor = Error;

  function makeImmutable(obj, bannedMethods) {
    // Tag it so we can quickly tell it's immutable later.
    addImmutabilityTag(obj);

    if (true) {
      // Make all mutating methods throw exceptions.
      for (var index in bannedMethods) {
        if (bannedMethods.hasOwnProperty(index)) {
          banProperty(obj, bannedMethods[index]);
        }
      }

      // Freeze it and return it.
      Object.freeze(obj);
    }

    return obj;
  }

  function makeMethodReturnImmutable(obj, methodName) {
    var currentMethod = obj[methodName];

    addPropertyTo(obj, methodName, function() {
      return Immutable(currentMethod.apply(obj, arguments));
    });
  }

  function arraySet(idx, value, config) {
    var deep          = config && config.deep;

    if (idx in this) {
      if (deep && this[idx] !== value && isMergableObject(value) && isMergableObject(this[idx])) {
        value = Immutable.merge(this[idx], value, {deep: true, mode: 'replace'});
      }
      if (isEqual(this[idx], value)) {
        return this;
      }
    }

    var mutable = asMutableArray.call(this);
    mutable[idx] = Immutable(value);
    return makeImmutableArray(mutable);
  }

  var immutableEmptyArray = Immutable([]);

  function arraySetIn(pth, value, config) {
    var head = pth[0];

    if (pth.length === 1) {
      return arraySet.call(this, head, value, config);
    } else {
      var tail = pth.slice(1);
      var thisHead = this[head];
      var newValue;

      if (typeof(thisHead) === "object" && thisHead !== null) {
        // Might (validly) be object or array
        newValue = Immutable.setIn(thisHead, tail, value);
      } else {
        var nextHead = tail[0];
        // If the next path part is a number, then we are setting into an array, else an object.
        if (nextHead !== '' && isFinite(nextHead)) {
          newValue = arraySetIn.call(immutableEmptyArray, tail, value);
        } else {
          newValue = objectSetIn.call(immutableEmptyObject, tail, value);
        }
      }

      if (head in this && thisHead === newValue) {
        return this;
      }

      var mutable = asMutableArray.call(this);
      mutable[head] = newValue;
      return makeImmutableArray(mutable);
    }
  }

  function makeImmutableArray(array) {
    // Don't change their implementations, but wrap these functions to make sure
    // they always return an immutable value.
    for (var index in nonMutatingArrayMethods) {
      if (nonMutatingArrayMethods.hasOwnProperty(index)) {
        var methodName = nonMutatingArrayMethods[index];
        makeMethodReturnImmutable(array, methodName);
      }
    }

    if (!globalConfig.use_static) {
      addPropertyTo(array, "flatMap",  flatMap);
      addPropertyTo(array, "asObject", asObject);
      addPropertyTo(array, "asMutable", asMutableArray);
      addPropertyTo(array, "set", arraySet);
      addPropertyTo(array, "setIn", arraySetIn);
      addPropertyTo(array, "update", update);
      addPropertyTo(array, "updateIn", updateIn);
      addPropertyTo(array, "getIn", getIn);
    }

    for(var i = 0, length = array.length; i < length; i++) {
      array[i] = Immutable(array[i]);
    }

    return makeImmutable(array, mutatingArrayMethods);
  }

  function makeImmutableDate(date) {
    if (!globalConfig.use_static) {
      addPropertyTo(date, "asMutable", asMutableDate);
    }

    return makeImmutable(date, mutatingDateMethods);
  }

  function asMutableDate() {
    return new Date(this.getTime());
  }

  /**
   * Effectively performs a map() over the elements in the array, using the
   * provided iterator, except that whenever the iterator returns an array, that
   * array's elements are added to the final result instead of the array itself.
   *
   * @param {function} iterator - The iterator function that will be invoked on each element in the array. It will receive three arguments: the current value, the current index, and the current object.
   */
  function flatMap(iterator) {
    // Calling .flatMap() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    var result = [],
        length = this.length,
        index;

    for (index = 0; index < length; index++) {
      var iteratorResult = iterator(this[index], index, this);

      if (Array.isArray(iteratorResult)) {
        // Concatenate Array results into the return value we're building up.
        result.push.apply(result, iteratorResult);
      } else {
        // Handle non-Array results the same way map() does.
        result.push(iteratorResult);
      }
    }

    return makeImmutableArray(result);
  }

  /**
   * Returns an Immutable copy of the object without the given keys included.
   *
   * @param {array} keysToRemove - A list of strings representing the keys to exclude in the return value. Instead of providing a single array, this method can also be called by passing multiple strings as separate arguments.
   */
  function without(remove) {
    // Calling .without() with no arguments is a no-op. Don't bother cloning.
    if (typeof remove === "undefined" && arguments.length === 0) {
      return this;
    }

    if (typeof remove !== "function") {
      // If we weren't given an array, use the arguments list.
      var keysToRemoveArray = (Array.isArray(remove)) ?
         remove.slice() : Array.prototype.slice.call(arguments);

      // Convert numeric keys to strings since that's how they'll
      // come from the enumeration of the object.
      keysToRemoveArray.forEach(function(el, idx, arr) {
        if(typeof(el) === "number") {
          arr[idx] = el.toString();
        }
      });

      remove = function(val, key) {
        return keysToRemoveArray.indexOf(key) !== -1;
      };
    }

    var result = instantiateEmptyObject(this);

    for (var key in this) {
      if (this.hasOwnProperty(key) && remove(this[key], key) === false) {
        result[key] = this[key];
      }
    }

    return makeImmutableObject(result);
  }

  function asMutableArray(opts) {
    var result = [], i, length;

    if(opts && opts.deep) {
      for(i = 0, length = this.length; i < length; i++) {
        result.push(asDeepMutable(this[i]));
      }
    } else {
      for(i = 0, length = this.length; i < length; i++) {
        result.push(this[i]);
      }
    }

    return result;
  }

  /**
   * Effectively performs a [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) over the elements in the array, expecting that the iterator function
   * will return an array of two elements - the first representing a key, the other
   * a value. Then returns an Immutable Object constructed of those keys and values.
   *
   * @param {function} iterator - A function which should return an array of two elements - the first representing the desired key, the other the desired value.
   */
  function asObject(iterator) {
    // If no iterator was provided, assume the identity function
    // (suggesting this array is already a list of key/value pairs.)
    if (typeof iterator !== "function") {
      iterator = function(value) { return value; };
    }

    var result = {},
        length = this.length,
        index;

    for (index = 0; index < length; index++) {
      var pair  = iterator(this[index], index, this),
          key   = pair[0],
          value = pair[1];

      result[key] = value;
    }

    return makeImmutableObject(result);
  }

  function asDeepMutable(obj) {
    if (
      (!obj) ||
      (typeof obj !== 'object') ||
      (!Object.getOwnPropertyDescriptor(obj, immutabilityTag)) ||
      (obj instanceof Date)
    ) { return obj; }
    return Immutable.asMutable(obj, {deep: true});
  }

  function quickCopy(src, dest) {
    for (var key in src) {
      if (Object.getOwnPropertyDescriptor(src, key)) {
        dest[key] = src[key];
      }
    }

    return dest;
  }

  /**
   * Returns an Immutable Object containing the properties and values of both
   * this object and the provided object, prioritizing the provided object's
   * values whenever the same key is present in both objects.
   *
   * @param {object} other - The other object to merge. Multiple objects can be passed as an array. In such a case, the later an object appears in that list, the higher its priority.
   * @param {object} config - Optional config object that contains settings. Supported settings are: {deep: true} for deep merge and {merger: mergerFunc} where mergerFunc is a function
   *                          that takes a property from both objects. If anything is returned it overrides the normal merge behaviour.
   */
  function merge(other, config) {
    // Calling .merge() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    if (other === null || (typeof other !== "object")) {
      throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not " + JSON.stringify(other));
    }

    var receivedArray = (Array.isArray(other)),
        deep          = config && config.deep,
        mode          = config && config.mode || 'merge',
        merger        = config && config.merger,
        result;

    // Use the given key to extract a value from the given object, then place
    // that value in the result object under the same key. If that resulted
    // in a change from this object's value at that key, set anyChanges = true.
    function addToResult(currentObj, otherObj, key) {
      var immutableValue = Immutable(otherObj[key]);
      var mergerResult = merger && merger(currentObj[key], immutableValue, config);
      var currentValue = currentObj[key];

      if ((result !== undefined) ||
        (mergerResult !== undefined) ||
        (!currentObj.hasOwnProperty(key)) ||
        !isEqual(immutableValue, currentValue)) {

        var newValue;

        if (mergerResult !== undefined) {
          newValue = mergerResult;
        } else if (deep && isMergableObject(currentValue) && isMergableObject(immutableValue)) {
          newValue = Immutable.merge(currentValue, immutableValue, config);
        } else {
          newValue = immutableValue;
        }

        if (!isEqual(currentValue, newValue) || !currentObj.hasOwnProperty(key)) {
          if (result === undefined) {
            // Make a shallow clone of the current object.
            result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
          }

          result[key] = newValue;
        }
      }
    }

    function clearDroppedKeys(currentObj, otherObj) {
      for (var key in currentObj) {
        if (!otherObj.hasOwnProperty(key)) {
          if (result === undefined) {
            // Make a shallow clone of the current object.
            result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
          }
          delete result[key];
        }
      }
    }

    var key;

    // Achieve prioritization by overriding previous values that get in the way.
    if (!receivedArray) {
      // The most common use case: just merge one object into the existing one.
      for (key in other) {
        if (Object.getOwnPropertyDescriptor(other, key)) {
          addToResult(this, other, key);
        }
      }
      if (mode === 'replace') {
        clearDroppedKeys(this, other);
      }
    } else {
      // We also accept an Array
      for (var index = 0, length = other.length; index < length; index++) {
        var otherFromArray = other[index];

        for (key in otherFromArray) {
          if (otherFromArray.hasOwnProperty(key)) {
            addToResult(result !== undefined ? result : this, otherFromArray, key);
          }
        }
      }
    }

    if (result === undefined) {
      return this;
    } else {
      return makeImmutableObject(result);
    }
  }

  function objectReplace(value, config) {
    var deep          = config && config.deep;

    // Calling .replace() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    if (value === null || typeof value !== "object") {
      throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not " + JSON.stringify(value));
    }

    return Immutable.merge(this, value, {deep: deep, mode: 'replace'});
  }

  var immutableEmptyObject = Immutable({});

  function objectSetIn(path, value, config) {
    if (!(Array.isArray(path)) || path.length === 0) {
      throw new TypeError("The first argument to Immutable#setIn must be an array containing at least one \"key\" string.");
    }

    var head = path[0];
    if (path.length === 1) {
      return objectSet.call(this, head, value, config);
    }

    var tail = path.slice(1);
    var newValue;
    var thisHead = this[head];

    if (this.hasOwnProperty(head) && typeof(thisHead) === "object" && thisHead !== null) {
      // Might (validly) be object or array
      newValue = Immutable.setIn(thisHead, tail, value);
    } else {
      newValue = objectSetIn.call(immutableEmptyObject, tail, value);
    }

    if (this.hasOwnProperty(head) && thisHead === newValue) {
      return this;
    }

    var mutable = quickCopy(this, instantiateEmptyObject(this));
    mutable[head] = newValue;
    return makeImmutableObject(mutable);
  }

  function objectSet(property, value, config) {
    var deep          = config && config.deep;

    if (this.hasOwnProperty(property)) {
      if (deep && this[property] !== value && isMergableObject(value) && isMergableObject(this[property])) {
        value = Immutable.merge(this[property], value, {deep: true, mode: 'replace'});
      }
      if (isEqual(this[property], value)) {
        return this;
      }
    }

    var mutable = quickCopy(this, instantiateEmptyObject(this));
    mutable[property] = Immutable(value);
    return makeImmutableObject(mutable);
  }

  function update(property, updater) {
    var restArgs = Array.prototype.slice.call(arguments, 2);
    var initialVal = this[property];
    return Immutable.set(this, property, updater.apply(initialVal, [initialVal].concat(restArgs)));
  }

  function getInPath(obj, path) {
    /*jshint eqnull:true */
    for (var i = 0, l = path.length; obj != null && i < l; i++) {
      obj = obj[path[i]];
    }

    return (i && i == l) ? obj : undefined;
  }

  function updateIn(path, updater) {
    var restArgs = Array.prototype.slice.call(arguments, 2);
    var initialVal = getInPath(this, path);

    return Immutable.setIn(this, path, updater.apply(initialVal, [initialVal].concat(restArgs)));
  }

  function getIn(path, defaultValue) {
    var value = getInPath(this, path);
    return value === undefined ? defaultValue : value;
  }

  function asMutableObject(opts) {
    var result = instantiateEmptyObject(this), key;

    if(opts && opts.deep) {
      for (key in this) {
        if (this.hasOwnProperty(key)) {
          result[key] = asDeepMutable(this[key]);
        }
      }
    } else {
      for (key in this) {
        if (this.hasOwnProperty(key)) {
          result[key] = this[key];
        }
      }
    }

    return result;
  }

  // Creates plain object to be used for cloning
  function instantiatePlainObject() {
    return {};
  }

  // Finalizes an object with immutable methods, freezes it, and returns it.
  function makeImmutableObject(obj) {
    if (!globalConfig.use_static) {
      addPropertyTo(obj, "merge", merge);
      addPropertyTo(obj, "replace", objectReplace);
      addPropertyTo(obj, "without", without);
      addPropertyTo(obj, "asMutable", asMutableObject);
      addPropertyTo(obj, "set", objectSet);
      addPropertyTo(obj, "setIn", objectSetIn);
      addPropertyTo(obj, "update", update);
      addPropertyTo(obj, "updateIn", updateIn);
      addPropertyTo(obj, "getIn", getIn);
    }

    return makeImmutable(obj, mutatingObjectMethods);
  }

  // Returns true if object is a valid react element
  // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L326
  function isReactElement(obj) {
    return typeof obj === 'object' &&
           obj !== null &&
           (obj.$$typeof === REACT_ELEMENT_TYPE_FALLBACK || obj.$$typeof === REACT_ELEMENT_TYPE);
  }

  function isFileObject(obj) {
    return typeof File !== 'undefined' &&
           obj instanceof File;
  }

  function isBlobObject(obj) {
    return typeof Blob !== 'undefined' &&
           obj instanceof Blob;
  }

  function isPromise(obj) {
    return typeof obj === 'object' &&
           typeof obj.then === 'function';
  }

  function isError(obj) {
    return obj instanceof Error;
  }

  function Immutable(obj, options, stackRemaining) {
    if (isImmutable(obj) || isReactElement(obj) || isFileObject(obj) || isBlobObject(obj) || isError(obj)) {
      return obj;
    } else if (isPromise(obj)) {
      return obj.then(Immutable);
    } else if (Array.isArray(obj)) {
      return makeImmutableArray(obj.slice());
    } else if (obj instanceof Date) {
      return makeImmutableDate(new Date(obj.getTime()));
    } else {
      // Don't freeze the object we were given; make a clone and use that.
      var prototype = options && options.prototype;
      var instantiateEmptyObject =
        (!prototype || prototype === Object.prototype) ?
          instantiatePlainObject : (function() { return Object.create(prototype); });
      var clone = instantiateEmptyObject();

      if (true) {
        /*jshint eqnull:true */
        if (stackRemaining == null) {
          stackRemaining = 64;
        }
        if (stackRemaining <= 0) {
          throw new ImmutableError("Attempt to construct Immutable from a deeply nested object was detected." +
            " Have you tried to wrap an object with circular references (e.g. React element)?" +
            " See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");
        }
        stackRemaining -= 1;
      }

      for (var key in obj) {
        if (Object.getOwnPropertyDescriptor(obj, key)) {
          clone[key] = Immutable(obj[key], undefined, stackRemaining);
        }
      }

      return makeImmutableObject(clone);
    }
  }

  // Wrapper to allow the use of object methods as static methods of Immutable.
  function toStatic(fn) {
    function staticWrapper() {
      var args = [].slice.call(arguments);
      var self = args.shift();
      return fn.apply(self, args);
    }

    return staticWrapper;
  }

  // Wrapper to allow the use of object methods as static methods of Immutable.
  // with the additional condition of choosing which function to call depending
  // if argument is an array or an object.
  function toStaticObjectOrArray(fnObject, fnArray) {
    function staticWrapper() {
      var args = [].slice.call(arguments);
      var self = args.shift();
      if (Array.isArray(self)) {
          return fnArray.apply(self, args);
      } else {
          return fnObject.apply(self, args);
      }
    }

    return staticWrapper;
  }

  // Wrapper to allow the use of object methods as static methods of Immutable.
  // with the additional condition of choosing which function to call depending
  // if argument is an array or an object or a date.
  function toStaticObjectOrDateOrArray(fnObject, fnArray, fnDate) {
    function staticWrapper() {
      var args = [].slice.call(arguments);
      var self = args.shift();
      if (Array.isArray(self)) {
          return fnArray.apply(self, args);
      } else if (self instanceof Date) {
          return fnDate.apply(self, args);
      } else {
          return fnObject.apply(self, args);
      }
    }

    return staticWrapper;
  }

  // Export the library
  Immutable.from           = Immutable;
  Immutable.isImmutable    = isImmutable;
  Immutable.ImmutableError = ImmutableError;
  Immutable.merge          = toStatic(merge);
  Immutable.replace        = toStatic(objectReplace);
  Immutable.without        = toStatic(without);
  Immutable.asMutable      = toStaticObjectOrDateOrArray(asMutableObject, asMutableArray, asMutableDate);
  Immutable.set            = toStaticObjectOrArray(objectSet, arraySet);
  Immutable.setIn          = toStaticObjectOrArray(objectSetIn, arraySetIn);
  Immutable.update         = toStatic(update);
  Immutable.updateIn       = toStatic(updateIn);
  Immutable.getIn          = toStatic(getIn);
  Immutable.flatMap        = toStatic(flatMap);
  Immutable.asObject       = toStatic(asObject);
  if (!globalConfig.use_static) {
      Immutable.static = immutableInit({
          use_static: true
      });
  }

  Object.freeze(Immutable);

  return Immutable;
}

  var Immutable = immutableInit();
  /* istanbul ignore if */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Immutable;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();


/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! exports provided: default, obj2params, underScoreToCamel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj2params", function() { return obj2params; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underScoreToCamel", function() { return underScoreToCamel; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({});
/**
 * 将对象转变为 params string
 * e.g. { name: 'user', age: 13} => name=user&age=13
 * @param obj
 * @return {*}
 */

function obj2params(obj) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) !== 'object' || !obj) return '';
  var params = [];
  Object.keys(obj).forEach(function (key) {
    if (obj[key] !== undefined && obj[key] !== null) {
      if (obj[key] instanceof Object) {
        // 数组和对象特殊处理
        params.push("".concat(key, "=").concat(JSON.stringify(obj[key])));
      } else {
        params.push("".concat(key, "=").concat(obj[key]));
      }
    }
  });
  return prefix + params.join('&') + suffix;
}
/**
 *  下划线转驼峰
 * @param name
 */

var underScoreToCamel = function underScoreToCamel(name) {
  return name.split('_').map(function (item, index) {
    if (item.length > 0) {
      if (index === 0) {
        return item.toLowerCase();
      } else {
        return item[0].toUpperCase() + item.substring(1).toLowerCase();
      }
    } else {
      return '';
    }
  }).join('');
};

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: buildRedux, buildListRedux */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildRedux", function() { return buildRedux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildListRedux", function() { return buildListRedux; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! seamless-immutable */ "./node_modules/seamless-immutable/seamless-immutable.development.js");
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(seamless_immutable__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/**
 * @desc normal
 * @param actionName {string}, e.g. load_item
 * @param  defaultData {object}
 */

var buildRedux = function buildRedux(actionName) {
  var _handleActions;

  var defaultData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var initialState = function initialState() {
    return seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({
      loading: false,
      error: false,
      success: false,
      errorMessage: '',
      params: null
    }, defaultData));
  };

  var START = "".concat(actionName, "_START");
  var SUCCESS = "".concat(actionName, "_SUCCESS");
  var ERROR = "".concat(actionName, "_ERROR");
  var RESET = "".concat(actionName, "_REST");
  var start = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(START, function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return params;
  });
  var reset = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(RESET);
  var success = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(SUCCESS, function (data) {
    return {
      data: data
    };
  });
  var error = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(ERROR, function (errorMessage) {
    return {
      errorMessage: errorMessage
    };
  });
  var reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["handleActions"])((_handleActions = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, START, function (state, action) {
    return state.merge({
      loading: true,
      error: false,
      success: false,
      errorMessage: '',
      params: action.payload && action.payload.params
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, SUCCESS, function (state, action) {
    return state.merge({
      loading: false,
      error: false,
      success: true,
      data: action.payload && action.payload.data,
      errorMessage: ''
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, ERROR, function (state, action) {
    return seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default()({
      loading: false,
      error: true,
      success: false,
      errorMessage: action.payload && action.payload.errorMessage
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions, RESET, function (state, action) {
    return initialState();
  }), _handleActions), initialState());
  return {
    actions: {
      start: start,
      success: success,
      error: error,
      reset: reset
    },
    types: {
      START: START,
      SUCCESS: SUCCESS,
      ERROR: ERROR,
      RESET: RESET
    },
    reducer: reducer
  };
};
/**
 *
 * @param actionName {string}, e.g. list_vehicle
 * @param defaultData {object}
 * @return {{types: {SUCCESS: string, START: string, ERROR: string, RESET: string}, reducer: Function, actions:
 *   {success: actionCreator, start: actionCreator, reset: actionCreator, error: actionCreator}}}
 */

var buildListRedux = function buildListRedux(actionName) {
  var _handleActions2;

  var defaultData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var initialState = function initialState() {
    return seamless_immutable__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({
      loading: false,
      error: false,
      success: false,
      params: {},
      data: {
        page: 1,
        per_page: 10,
        total_count: 0,
        total_page: 0,
        entries: []
      }
    }, defaultData));
  };

  var START = "".concat(actionName, "_LIST_START");
  var SUCCESS = "".concat(actionName, "_LIST_SUCCESS");
  var RESET = "RESET_".concat(actionName, "_LIST");
  var ERROR = "".concat(actionName, "_LIST_ERROR");
  var start = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(START, function (page, limit, params) {
    return {
      page: page,
      limit: limit,
      params: params
    };
  });
  var success = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(SUCCESS, function (data) {
    return {
      data: data
    };
  });
  var reset = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(RESET);
  var error = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(ERROR);
  var reducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["handleActions"])((_handleActions2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions2, START, function (state, action) {
    return state.merge({
      loading: true,
      success: false,
      params: action.payload && action.payload.params
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions2, SUCCESS, function (state, action) {
    return state.merge({
      loading: false,
      success: true,
      data: action.payload && action.payload.data
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions2, ERROR, function (state) {
    return state.merge({
      loading: false,
      error: true,
      success: false
    });
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_handleActions2, RESET, function (state) {
    return initialState();
  }), _handleActions2), initialState());
  return {
    reducer: reducer,
    types: {
      START: START,
      SUCCESS: SUCCESS,
      RESET: RESET,
      ERROR: ERROR
    },
    actions: {
      start: start,
      success: success,
      error: error,
      reset: reset
    }
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _withSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withSaga */ "./src/withSaga.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  buildRedux: _helper__WEBPACK_IMPORTED_MODULE_0__["buildRedux"],
  buildListRedux: _helper__WEBPACK_IMPORTED_MODULE_0__["buildListRedux"],
  initFetch: _withSaga__WEBPACK_IMPORTED_MODULE_1__["init"],
  // 初始化fetch方法
  buildReduxConnectSaga: Object(_withSaga__WEBPACK_IMPORTED_MODULE_1__["default"])(_helper__WEBPACK_IMPORTED_MODULE_0__["buildRedux"]),
  buildListReduxConnectSaga: Object(_withSaga__WEBPACK_IMPORTED_MODULE_1__["default"])(_helper__WEBPACK_IMPORTED_MODULE_0__["buildListRedux"]),
  allSagas: _withSaga__WEBPACK_IMPORTED_MODULE_1__["allSagas"] // export const initFetch = init
  // export const allSagas = sagas
  // export const buildRedux = build
  // export const buildListRedux = buildList
  // export const buildReduxConnectSaga = withSaga(buildRedux)
  // export const buildListReduxConnectSaga = withSaga(buildListRedux)

});

/***/ }),

/***/ "./src/withSaga.js":
/*!*************************!*\
  !*** ./src/withSaga.js ***!
  \*************************/
/*! exports provided: init, default, createWatcher, setRequestParams, allSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWatcher", function() { return createWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRequestParams", function() { return setRequestParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allSagas", function() { return allSagas; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/common.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(createWatcher),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(setRequestParams);



var doFetch = null;
var doFetchAll = null;
var init = function init(fetch) {
  var fetchAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  doFetch = fetch;

  if (fetchAll) {
    doFetchAll = fetchAll;
  }
};
var sagaActions = {
  put: redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"],
  call: redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"],
  select: redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"],
  delay: redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"] // 所有saga

};
var sagas = [];
var allReduxActions = {};
/**
 * 创建reduce时自动关联saga
 */

/* harmony default export */ __webpack_exports__["default"] = (function (reduxer) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _redux = reduxer.call.apply(reduxer, [null].concat(args));

    var name = Object(_common__WEBPACK_IMPORTED_MODULE_3__["underScoreToCamel"])(args[0]);
    allReduxActions[name] = _redux.actions;
    return function (conf) {
      var watch = createWatcher(_redux, conf);
      sagas.push(watch);
      return _redux;
    };
  };
});
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

function createWatcher(_redux, conf) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function createWatcher$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(typeof conf === 'function')) {
            _context3.next = 5;
            break;
          }

          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_redux.types.START,
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
            var payload;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    payload = _ref.payload;
                    _context.prev = 1;
                    _context.next = 4;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(conf, payload, sagaActions, _redux.actions, allReduxActions);

                  case 4:
                    _context.next = 9;
                    break;

                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](1);
                    console.log(_context.t0);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[1, 6]]);
          }));

        case 3:
          _context3.next = 7;
          break;

        case 5:
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_redux.types.START,
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2) {
            var payload, fetchParams, data, _conf$fetchAllConfig, api, pageKey, totalPagesKey;

            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    payload = _ref2.payload;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(setRequestParams, conf, payload);

                  case 4:
                    fetchParams = _context2.sent;

                    if (conf.fetchAllConfig) {
                      _context2.next = 11;
                      break;
                    }

                    _context2.next = 8;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(doFetch, fetchParams);

                  case 8:
                    data = _context2.sent;
                    _context2.next = 15;
                    break;

                  case 11:
                    _conf$fetchAllConfig = conf.fetchAllConfig, api = _conf$fetchAllConfig.api, pageKey = _conf$fetchAllConfig.pageKey, totalPagesKey = _conf$fetchAllConfig.totalPagesKey;
                    _context2.next = 14;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(doFetchAll, api, pageKey, totalPagesKey);

                  case 14:
                    data = _context2.sent;

                  case 15:
                    _context2.t0 = conf.resultHandler;

                    if (!_context2.t0) {
                      _context2.next = 20;
                      break;
                    }

                    _context2.next = 19;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(conf.resultHandler, data, payload, sagaActions);

                  case 19:
                    data = _context2.sent;

                  case 20:
                    _context2.next = 22;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_redux.actions.success(data));

                  case 22:
                    if (!conf.after) {
                      _context2.next = 25;
                      break;
                    }

                    _context2.next = 25;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(conf.after, data, payload, sagaActions);

                  case 25:
                    _context2.next = 33;
                    break;

                  case 27:
                    _context2.prev = 27;
                    _context2.t1 = _context2["catch"](1);

                    if (!conf["catch"]) {
                      _context2.next = 31;
                      break;
                    }

                    return _context2.abrupt("return", conf["catch"](_context2.t1));

                  case 31:
                    _context2.next = 33;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_redux.actions.reset());

                  case 33:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[1, 27]]);
          }));

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked);
}
/**
 * 处理请求参数
 * @param {*} conf    saga配置
 * @param {*} payload action.payload
 */

function setRequestParams(conf, payload) {
  var method, url, sendData, confDataType, res, fetchParams, tranParams;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function setRequestParams$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          method = conf.method;
          method = method ? method.toUpperCase() : 'GET';
          url = conf.url;

          if (typeof url === 'function') {
            url = url(payload, sagaActions);
          }

          if (url) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return");

        case 6:
          // 请求数据处理(合并 payload.params 和 传入的自定义的 data，如重复自定义属性优先)
          sendData = {}; // list

          if (payload && payload.params) {
            sendData = payload.params;
          } // form


          if (payload && payload.data) {
            sendData = payload.data;
          }

          confDataType = Object.prototype.toString.call(conf.data);

          if (!(conf.data && confDataType === '[object Function]')) {
            _context4.next = 15;
            break;
          }

          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(conf.data, payload, sagaActions);

        case 13:
          res = _context4.sent;

          if (Object.prototype.toString.call(res) === '[object Object]') {
            sendData = res;
          }

        case 15:
          if (confDataType === '[object Object]') {
            sendData = _objectSpread({}, sendData, {}, conf.data);
          }

          fetchParams = {
            url: url,
            method: method
          };

          if (method === 'GET') {
            tranParams = Object(_common__WEBPACK_IMPORTED_MODULE_3__["obj2params"])(sendData); // 序列化

            url += tranParams ? '&' + tranParams : '';
            fetchParams.url = url;
          } else {
            fetchParams.data = sendData;
          }

          return _context4.abrupt("return", fetchParams);

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
}
var allSagas = sagas;

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvY29yZS9kaXN0L2NodW5rLWU5MjJjOTUwLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9jb3JlL2Rpc3QvcmVkdXgtc2FnYS1lZmZlY3RzLmVzbS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvY29yZS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvZGVsYXktcC9kaXN0L3JlZHV4LXNhZ2EtZGVsYXktcC5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2lzL2Rpc3QvcmVkdXgtc2FnYS1pcy5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL3N5bWJvbHMvZGlzdC9yZWR1eC1zYWdhLXN5bWJvbHMuZXNtLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2Rpc3QvcmVkdXgtc2FnYS1lZmZlY3RzLW5wbS1wcm94eS5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvc2VhbWxlc3MtaW1tdXRhYmxlL3NlYW1sZXNzLWltbXV0YWJsZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL3NyYy93aXRoU2FnYS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCIiXSwibmFtZXMiOlsib2JqMnBhcmFtcyIsIm9iaiIsInByZWZpeCIsInN1ZmZpeCIsInBhcmFtcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidW5kZWZpbmVkIiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJqb2luIiwidW5kZXJTY29yZVRvQ2FtZWwiLCJuYW1lIiwic3BsaXQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiYnVpbGRSZWR1eCIsImFjdGlvbk5hbWUiLCJkZWZhdWx0RGF0YSIsImluaXRpYWxTdGF0ZSIsIkltbXV0YWJsZSIsImxvYWRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJlcnJvck1lc3NhZ2UiLCJTVEFSVCIsIlNVQ0NFU1MiLCJFUlJPUiIsIlJFU0VUIiwic3RhcnQiLCJjcmVhdGVBY3Rpb24iLCJyZXNldCIsImRhdGEiLCJyZWR1Y2VyIiwiaGFuZGxlQWN0aW9ucyIsInN0YXRlIiwiYWN0aW9uIiwibWVyZ2UiLCJwYXlsb2FkIiwiYWN0aW9ucyIsInR5cGVzIiwiYnVpbGRMaXN0UmVkdXgiLCJwYWdlIiwicGVyX3BhZ2UiLCJ0b3RhbF9jb3VudCIsInRvdGFsX3BhZ2UiLCJlbnRyaWVzIiwibGltaXQiLCJpbml0RmV0Y2giLCJpbml0IiwiYnVpbGRSZWR1eENvbm5lY3RTYWdhIiwid2l0aFNhZ2EiLCJidWlsZExpc3RSZWR1eENvbm5lY3RTYWdhIiwiYWxsU2FnYXMiLCJjcmVhdGVXYXRjaGVyIiwic2V0UmVxdWVzdFBhcmFtcyIsImRvRmV0Y2giLCJkb0ZldGNoQWxsIiwiZmV0Y2giLCJmZXRjaEFsbCIsInNhZ2FBY3Rpb25zIiwicHV0IiwiY2FsbCIsInNlbGVjdCIsImRlbGF5Iiwic2FnYXMiLCJhbGxSZWR1eEFjdGlvbnMiLCJyZWR1eGVyIiwiYXJncyIsIl9yZWR1eCIsImNvbmYiLCJ3YXRjaCIsInRha2VMYXRlc3QiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hQYXJhbXMiLCJmZXRjaEFsbENvbmZpZyIsImFwaSIsInBhZ2VLZXkiLCJ0b3RhbFBhZ2VzS2V5IiwicmVzdWx0SGFuZGxlciIsImFmdGVyIiwibWV0aG9kIiwidXJsIiwic2VuZERhdGEiLCJjb25mRGF0YVR5cGUiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsInJlcyIsInRyYW5QYXJhbXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUVBQWE7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1STs7Ozs7Ozs7Ozs7OztBQ3RDdkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5Qzs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3J0QkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQThCO0FBQ3RDO0FB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Q3RJUCwwQyIsImZpbGUiOiJpbmRleC5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgeyBUQVNLX0NBTkNFTCwgVEVSTUlOQVRFLCBTQUdBX0xPQ0FUSU9OLCBTQUdBX0FDVElPTiwgSU8sIFNFTEZfQ0FOQ0VMTEFUSU9OIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBhcnJheSwgbm90VW5kZWYsIHBhdHRlcm4sIG11bHRpY2FzdCwgY2hhbm5lbCwgdW5kZWYsIHRhc2ssIGZ1bmMsIGJ1ZmZlciwgc3RyaW5nLCBvYmplY3QgfSBmcm9tICdAcmVkdXgtc2FnYS9pcyc7XG5pbXBvcnQgZGVsYXlQIGZyb20gJ0ByZWR1eC1zYWdhL2RlbGF5LXAnO1xuXG52YXIga29uc3QgPSBmdW5jdGlvbiBrb25zdCh2KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xudmFyIGtUcnVlID1cbi8qI19fUFVSRV9fKi9cbmtvbnN0KHRydWUpO1xudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG52YXIgaWRlbnRpdHkgPSBmdW5jdGlvbiBpZGVudGl0eSh2KSB7XG4gIHJldHVybiB2O1xufTtcbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nO1xudmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSBoYXNTeW1ib2wgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IgPyBTeW1ib2wuYXN5bmNJdGVyYXRvciA6ICdAQGFzeW5jSXRlcmF0b3InO1xuZnVuY3Rpb24gY2hlY2sodmFsdWUsIHByZWRpY2F0ZSwgZXJyb3IpIHtcbiAgaWYgKCFwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxufVxudmFyIGFzc2lnbldpdGhTeW1ib2xzID0gZnVuY3Rpb24gYXNzaWduV2l0aFN5bWJvbHModGFyZ2V0LCBzb3VyY2UpIHtcbiAgX2V4dGVuZHModGFyZ2V0LCBzb3VyY2UpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgIHRhcmdldFtzXSA9IHNvdXJjZVtzXTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBmbGF0TWFwID0gZnVuY3Rpb24gZmxhdE1hcChtYXBwZXIsIGFycikge1xuICB2YXIgX3JlZjtcblxuICByZXR1cm4gKF9yZWYgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWYsIGFyci5tYXAobWFwcGVyKSk7XG59O1xuZnVuY3Rpb24gcmVtb3ZlKGFycmF5LCBpdGVtKSB7XG4gIHZhciBpbmRleCA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG5cbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICBmbigpO1xuICB9O1xufVxuXG52YXIga1Rocm93ID0gZnVuY3Rpb24ga1Rocm93KGVycikge1xuICB0aHJvdyBlcnI7XG59O1xuXG52YXIga1JldHVybiA9IGZ1bmN0aW9uIGtSZXR1cm4odmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgZG9uZTogdHJ1ZVxuICB9O1xufTtcblxuZnVuY3Rpb24gbWFrZUl0ZXJhdG9yKG5leHQsIHRocm8sIG5hbWUpIHtcbiAgaWYgKHRocm8gPT09IHZvaWQgMCkge1xuICAgIHRocm8gPSBrVGhyb3c7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgbmFtZSA9ICdpdGVyYXRvcic7XG4gIH1cblxuICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgbWV0YToge1xuICAgICAgbmFtZTogbmFtZVxuICAgIH0sXG4gICAgbmV4dDogbmV4dCxcbiAgICB0aHJvdzogdGhybyxcbiAgICByZXR1cm46IGtSZXR1cm4sXG4gICAgaXNTYWdhSXRlcmF0b3I6IHRydWVcbiAgfTtcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaXRlcmF0b3I7XG59XG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvciwgX3JlZjIpIHtcbiAgdmFyIHNhZ2FTdGFjayA9IF9yZWYyLnNhZ2FTdGFjaztcblxuICAvKmVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUqL1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgY29uc29sZS5lcnJvcihzYWdhU3RhY2spO1xufVxudmFyIGludGVybmFsRXJyID0gZnVuY3Rpb24gaW50ZXJuYWxFcnIoZXJyKSB7XG4gIHJldHVybiBuZXcgRXJyb3IoXCJcXG4gIHJlZHV4LXNhZ2E6IEVycm9yIGNoZWNraW5nIGhvb2tzIGRldGVjdGVkIGFuIGluY29uc2lzdGVudCBzdGF0ZS4gVGhpcyBpcyBsaWtlbHkgYSBidWdcXG4gIGluIHJlZHV4LXNhZ2EgY29kZSBhbmQgbm90IHlvdXJzLiBUaGFua3MgZm9yIHJlcG9ydGluZyB0aGlzIGluIHRoZSBwcm9qZWN0J3MgZ2l0aHViIHJlcG8uXFxuICBFcnJvcjogXCIgKyBlcnIgKyBcIlxcblwiKTtcbn07XG52YXIgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcgPSBmdW5jdGlvbiBjcmVhdGVTZXRDb250ZXh0V2FybmluZyhjdHgsIHByb3BzKSB7XG4gIHJldHVybiAoY3R4ID8gY3R4ICsgJy4nIDogJycpICsgXCJzZXRDb250ZXh0KHByb3BzKTogYXJndW1lbnQgXCIgKyBwcm9wcyArIFwiIGlzIG5vdCBhIHBsYWluIG9iamVjdFwiO1xufTtcbnZhciBGUk9aRU5fQUNUSU9OX0VSUk9SID0gXCJZb3UgY2FuJ3QgcHV0IChhLmsuYS4gZGlzcGF0Y2ggZnJvbSBzYWdhKSBmcm96ZW4gYWN0aW9ucy5cXG5XZSBoYXZlIHRvIGRlZmluZSBhIHNwZWNpYWwgbm9uLWVudW1lcmFibGUgcHJvcGVydHkgb24gdGhvc2UgYWN0aW9ucyBmb3Igc2NoZWR1bGluZyBwdXJwb3Nlcy5cXG5PdGhlcndpc2UgeW91IHdvdWxkbid0IGJlIGFibGUgdG8gY29tbXVuaWNhdGUgcHJvcGVybHkgYmV0d2VlbiBzYWdhcyAmIG90aGVyIHN1YnNjcmliZXJzIChhY3Rpb24gb3JkZXJpbmcgd291bGQgYmVjb21lIGZhciBsZXNzIHByZWRpY3RhYmxlKS5cXG5JZiB5b3UgYXJlIHVzaW5nIHJlZHV4IGFuZCB5b3UgY2FyZSBhYm91dCB0aGlzIGJlaGF2aW91ciAoZnJvemVuIGFjdGlvbnMpLFxcbnRoZW4geW91IG1pZ2h0IHdhbnQgdG8gc3dpdGNoIHRvIGZyZWV6aW5nIGFjdGlvbnMgaW4gYSBtaWRkbGV3YXJlIHJhdGhlciB0aGFuIGluIGFjdGlvbiBjcmVhdG9yLlxcbkV4YW1wbGUgaW1wbGVtZW50YXRpb246XFxuXFxuY29uc3QgZnJlZXplQWN0aW9ucyA9IHN0b3JlID0+IG5leHQgPT4gYWN0aW9uID0+IG5leHQoT2JqZWN0LmZyZWV6ZShhY3Rpb24pKVxcblwiOyAvLyBjcmVhdGVzIGVtcHR5LCBidXQgbm90LWhvbGV5IGFycmF5XG5cbnZhciBjcmVhdGVFbXB0eUFycmF5ID0gZnVuY3Rpb24gY3JlYXRlRW1wdHlBcnJheShuKSB7XG4gIHJldHVybiBBcnJheS5hcHBseShudWxsLCBuZXcgQXJyYXkobikpO1xufTtcbnZhciB3cmFwU2FnYURpc3BhdGNoID0gZnVuY3Rpb24gd3JhcFNhZ2FEaXNwYXRjaChkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGVjayhhY3Rpb24sIGZ1bmN0aW9uIChhYykge1xuICAgICAgICByZXR1cm4gIU9iamVjdC5pc0Zyb3plbihhYyk7XG4gICAgICB9LCBGUk9aRU5fQUNUSU9OX0VSUk9SKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzcGF0Y2goT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjdGlvbiwgU0FHQV9BQ1RJT04sIHtcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSkpO1xuICB9O1xufTtcbnZhciBzaG91bGRUZXJtaW5hdGUgPSBmdW5jdGlvbiBzaG91bGRUZXJtaW5hdGUocmVzKSB7XG4gIHJldHVybiByZXMgPT09IFRFUk1JTkFURTtcbn07XG52YXIgc2hvdWxkQ2FuY2VsID0gZnVuY3Rpb24gc2hvdWxkQ2FuY2VsKHJlcykge1xuICByZXR1cm4gcmVzID09PSBUQVNLX0NBTkNFTDtcbn07XG52YXIgc2hvdWxkQ29tcGxldGUgPSBmdW5jdGlvbiBzaG91bGRDb21wbGV0ZShyZXMpIHtcbiAgcmV0dXJuIHNob3VsZFRlcm1pbmF0ZShyZXMpIHx8IHNob3VsZENhbmNlbChyZXMpO1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3Moc2hhcGUsIHBhcmVudENhbGxiYWNrKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc2hhcGUpO1xuICB2YXIgdG90YWxDb3VudCA9IGtleXMubGVuZ3RoO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2sodG90YWxDb3VudCwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjID4gMDtcbiAgICB9LCAnY3JlYXRlQWxsU3R5bGVDaGlsZENhbGxiYWNrczogZ2V0IGFuIGVtcHR5IGFycmF5IG9yIG9iamVjdCcpO1xuICB9XG5cbiAgdmFyIGNvbXBsZXRlZENvdW50ID0gMDtcbiAgdmFyIGNvbXBsZXRlZDtcbiAgdmFyIHJlc3VsdHMgPSBhcnJheShzaGFwZSkgPyBjcmVhdGVFbXB0eUFycmF5KHRvdGFsQ291bnQpIDoge307XG4gIHZhciBjaGlsZENhbGxiYWNrcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGNoZWNrRW5kKCkge1xuICAgIGlmIChjb21wbGV0ZWRDb3VudCA9PT0gdG90YWxDb3VudCkge1xuICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHBhcmVudENhbGxiYWNrKHJlc3VsdHMpO1xuICAgIH1cbiAgfVxuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoQ2JBdEtleSA9IGZ1bmN0aW9uIGNoQ2JBdEtleShyZXMsIGlzRXJyKSB7XG4gICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRXJyIHx8IHNob3VsZENvbXBsZXRlKHJlcykpIHtcbiAgICAgICAgcGFyZW50Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICAgIHBhcmVudENhbGxiYWNrKHJlcywgaXNFcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1trZXldID0gcmVzO1xuICAgICAgICBjb21wbGV0ZWRDb3VudCsrO1xuICAgICAgICBjaGVja0VuZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjaENiQXRLZXkuY2FuY2VsID0gbm9vcDtcbiAgICBjaGlsZENhbGxiYWNrc1trZXldID0gY2hDYkF0S2V5O1xuICB9KTtcblxuICBwYXJlbnRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjb21wbGV0ZWQpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gY2hpbGRDYWxsYmFja3Nba2V5XS5jYW5jZWwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gY2hpbGRDYWxsYmFja3M7XG59XG5mdW5jdGlvbiBnZXRNZXRhSW5mbyhmbikge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGZuLm5hbWUgfHwgJ2Fub255bW91cycsXG4gICAgbG9jYXRpb246IGdldExvY2F0aW9uKGZuKVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oaW5zdHJ1bWVudGVkKSB7XG4gIHJldHVybiBpbnN0cnVtZW50ZWRbU0FHQV9MT0NBVElPTl07XG59XG5cbnZhciBCVUZGRVJfT1ZFUkZMT1cgPSBcIkNoYW5uZWwncyBCdWZmZXIgb3ZlcmZsb3chXCI7XG52YXIgT05fT1ZFUkZMT1dfVEhST1cgPSAxO1xudmFyIE9OX09WRVJGTE9XX0RST1AgPSAyO1xudmFyIE9OX09WRVJGTE9XX1NMSURFID0gMztcbnZhciBPTl9PVkVSRkxPV19FWFBBTkQgPSA0O1xudmFyIHplcm9CdWZmZXIgPSB7XG4gIGlzRW1wdHk6IGtUcnVlLFxuICBwdXQ6IG5vb3AsXG4gIHRha2U6IG5vb3Bcbn07XG5cbmZ1bmN0aW9uIHJpbmdCdWZmZXIobGltaXQsIG92ZXJmbG93QWN0aW9uKSB7XG4gIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7XG4gICAgbGltaXQgPSAxMDtcbiAgfVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyYXkobGltaXQpO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHB1c2hJbmRleCA9IDA7XG4gIHZhciBwb3BJbmRleCA9IDA7XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKGl0KSB7XG4gICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICBsZW5ndGgrKztcbiAgfTtcblxuICB2YXIgdGFrZSA9IGZ1bmN0aW9uIHRha2UoKSB7XG4gICAgaWYgKGxlbmd0aCAhPSAwKSB7XG4gICAgICB2YXIgaXQgPSBhcnJbcG9wSW5kZXhdO1xuICAgICAgYXJyW3BvcEluZGV4XSA9IG51bGw7XG4gICAgICBsZW5ndGgtLTtcbiAgICAgIHBvcEluZGV4ID0gKHBvcEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgIHJldHVybiBpdDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICBpdGVtcy5wdXNoKHRha2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNFbXB0eTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICAgIHJldHVybiBsZW5ndGggPT0gMDtcbiAgICB9LFxuICAgIHB1dDogZnVuY3Rpb24gcHV0KGl0KSB7XG4gICAgICBpZiAobGVuZ3RoIDwgbGltaXQpIHtcbiAgICAgICAgcHVzaChpdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZG91YmxlZExpbWl0O1xuXG4gICAgICAgIHN3aXRjaCAob3ZlcmZsb3dBY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1RIUk9XOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEJVRkZFUl9PVkVSRkxPVyk7XG5cbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1NMSURFOlxuICAgICAgICAgICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICAgICAgICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgICAgICAgICAgcG9wSW5kZXggPSBwdXNoSW5kZXg7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfRVhQQU5EOlxuICAgICAgICAgICAgZG91YmxlZExpbWl0ID0gMiAqIGxpbWl0O1xuICAgICAgICAgICAgYXJyID0gZmx1c2goKTtcbiAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcG9wSW5kZXggPSAwO1xuICAgICAgICAgICAgYXJyLmxlbmd0aCA9IGRvdWJsZWRMaW1pdDtcbiAgICAgICAgICAgIGxpbWl0ID0gZG91YmxlZExpbWl0O1xuICAgICAgICAgICAgcHVzaChpdCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6IC8vIERST1BcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWtlOiB0YWtlLFxuICAgIGZsdXNoOiBmbHVzaFxuICB9O1xufVxuXG52YXIgbm9uZSA9IGZ1bmN0aW9uIG5vbmUoKSB7XG4gIHJldHVybiB6ZXJvQnVmZmVyO1xufTtcbnZhciBmaXhlZCA9IGZ1bmN0aW9uIGZpeGVkKGxpbWl0KSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19USFJPVyk7XG59O1xudmFyIGRyb3BwaW5nID0gZnVuY3Rpb24gZHJvcHBpbmcobGltaXQpIHtcbiAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX0RST1ApO1xufTtcbnZhciBzbGlkaW5nID0gZnVuY3Rpb24gc2xpZGluZyhsaW1pdCkge1xuICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfU0xJREUpO1xufTtcbnZhciBleHBhbmRpbmcgPSBmdW5jdGlvbiBleHBhbmRpbmcoaW5pdGlhbFNpemUpIHtcbiAgcmV0dXJuIHJpbmdCdWZmZXIoaW5pdGlhbFNpemUsIE9OX09WRVJGTE9XX0VYUEFORCk7XG59O1xuXG52YXIgYnVmZmVycyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgbm9uZTogbm9uZSxcbiAgZml4ZWQ6IGZpeGVkLFxuICBkcm9wcGluZzogZHJvcHBpbmcsXG4gIHNsaWRpbmc6IHNsaWRpbmcsXG4gIGV4cGFuZGluZzogZXhwYW5kaW5nXG59KTtcblxudmFyIFRBS0UgPSAnVEFLRSc7XG52YXIgUFVUID0gJ1BVVCc7XG52YXIgQUxMID0gJ0FMTCc7XG52YXIgUkFDRSA9ICdSQUNFJztcbnZhciBDQUxMID0gJ0NBTEwnO1xudmFyIENQUyA9ICdDUFMnO1xudmFyIEZPUksgPSAnRk9SSyc7XG52YXIgSk9JTiA9ICdKT0lOJztcbnZhciBDQU5DRUwgPSAnQ0FOQ0VMJztcbnZhciBTRUxFQ1QgPSAnU0VMRUNUJztcbnZhciBBQ1RJT05fQ0hBTk5FTCA9ICdBQ1RJT05fQ0hBTk5FTCc7XG52YXIgQ0FOQ0VMTEVEID0gJ0NBTkNFTExFRCc7XG52YXIgRkxVU0ggPSAnRkxVU0gnO1xudmFyIEdFVF9DT05URVhUID0gJ0dFVF9DT05URVhUJztcbnZhciBTRVRfQ09OVEVYVCA9ICdTRVRfQ09OVEVYVCc7XG5cbnZhciBlZmZlY3RUeXBlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgVEFLRTogVEFLRSxcbiAgUFVUOiBQVVQsXG4gIEFMTDogQUxMLFxuICBSQUNFOiBSQUNFLFxuICBDQUxMOiBDQUxMLFxuICBDUFM6IENQUyxcbiAgRk9SSzogRk9SSyxcbiAgSk9JTjogSk9JTixcbiAgQ0FOQ0VMOiBDQU5DRUwsXG4gIFNFTEVDVDogU0VMRUNULFxuICBBQ1RJT05fQ0hBTk5FTDogQUNUSU9OX0NIQU5ORUwsXG4gIENBTkNFTExFRDogQ0FOQ0VMTEVELFxuICBGTFVTSDogRkxVU0gsXG4gIEdFVF9DT05URVhUOiBHRVRfQ09OVEVYVCxcbiAgU0VUX0NPTlRFWFQ6IFNFVF9DT05URVhUXG59KTtcblxudmFyIFRFU1RfSElOVCA9ICdcXG4oSElOVDogaWYgeW91IGFyZSBnZXR0aW5nIHRoaXMgZXJyb3JzIGluIHRlc3RzLCBjb25zaWRlciB1c2luZyBjcmVhdGVNb2NrVGFzayBmcm9tIEByZWR1eC1zYWdhL3Rlc3RpbmctdXRpbHMpJztcblxudmFyIG1ha2VFZmZlY3QgPSBmdW5jdGlvbiBtYWtlRWZmZWN0KHR5cGUsIHBheWxvYWQpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltJT10gPSB0cnVlLCBfcmVmLmNvbWJpbmF0b3IgPSBmYWxzZSwgX3JlZi50eXBlID0gdHlwZSwgX3JlZi5wYXlsb2FkID0gcGF5bG9hZCwgX3JlZjtcbn07XG5cbnZhciBpc0ZvcmtFZmZlY3QgPSBmdW5jdGlvbiBpc0ZvcmtFZmZlY3QoZWZmKSB7XG4gIHJldHVybiBlZmYgJiYgZWZmW0lPXSAmJiBlZmYudHlwZSA9PT0gRk9SSztcbn07XG5cbnZhciBkZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goZWZmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soZWZmLCBpc0ZvcmtFZmZlY3QsICdkZXRhY2goZWZmKTogYXJndW1lbnQgbXVzdCBiZSBhIGZvcmsgZWZmZWN0Jyk7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChGT1JLLCBfZXh0ZW5kcyh7fSwgZWZmLnBheWxvYWQsIHtcbiAgICBkZXRhY2hlZDogdHJ1ZVxuICB9KSk7XG59O1xuZnVuY3Rpb24gdGFrZShwYXR0ZXJuT3JDaGFubmVsLCBtdWx0aWNhc3RQYXR0ZXJuKSB7XG4gIGlmIChwYXR0ZXJuT3JDaGFubmVsID09PSB2b2lkIDApIHtcbiAgICBwYXR0ZXJuT3JDaGFubmVsID0gJyonO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNoZWNrKGFyZ3VtZW50c1swXSwgbm90VW5kZWYsICd0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBwYXR0ZXJuT3JDaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgaWYgKHBhdHRlcm4ocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gbWFrZUVmZmVjdChUQUtFLCB7XG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuT3JDaGFubmVsXG4gICAgfSk7XG4gIH1cblxuICBpZiAobXVsdGljYXN0KHBhdHRlcm5PckNoYW5uZWwpICYmIG5vdFVuZGVmKG11bHRpY2FzdFBhdHRlcm4pICYmIHBhdHRlcm4obXVsdGljYXN0UGF0dGVybikpIHtcbiAgICByZXR1cm4gbWFrZUVmZmVjdChUQUtFLCB7XG4gICAgICBjaGFubmVsOiBwYXR0ZXJuT3JDaGFubmVsLFxuICAgICAgcGF0dGVybjogbXVsdGljYXN0UGF0dGVyblxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gbWFrZUVmZmVjdChUQUtFLCB7XG4gICAgICBjaGFubmVsOiBwYXR0ZXJuT3JDaGFubmVsXG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcInRha2UocGF0dGVybk9yQ2hhbm5lbCk6IGFyZ3VtZW50IFwiICsgcGF0dGVybk9yQ2hhbm5lbCArIFwiIGlzIG5vdCB2YWxpZCBjaGFubmVsIG9yIGEgdmFsaWQgcGF0dGVyblwiKTtcbiAgfVxufVxudmFyIHRha2VNYXliZSA9IGZ1bmN0aW9uIHRha2VNYXliZSgpIHtcbiAgdmFyIGVmZiA9IHRha2UuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICBlZmYucGF5bG9hZC5tYXliZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuZnVuY3Rpb24gcHV0KGNoYW5uZWwkMSwgYWN0aW9uKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBjaGVjayhjaGFubmVsJDEsIG5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGNoYW5uZWwgaXMgdW5kZWZpbmVkJyk7XG4gICAgICBjaGVjayhjaGFubmVsJDEsIGNoYW5uZWwsIFwicHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IFwiICsgY2hhbm5lbCQxICsgXCIgaXMgbm90IGEgdmFsaWQgY2hhbm5lbFwiKTtcbiAgICAgIGNoZWNrKGFjdGlvbiwgbm90VW5kZWYsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgYWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVjayhjaGFubmVsJDEsIG5vdFVuZGVmLCAncHV0KGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAodW5kZWYoYWN0aW9uKSkge1xuICAgIGFjdGlvbiA9IGNoYW5uZWwkMTsgLy8gYHVuZGVmaW5lZGAgaW5zdGVhZCBvZiBgbnVsbGAgdG8gbWFrZSBkZWZhdWx0IHBhcmFtZXRlciB3b3JrXG5cbiAgICBjaGFubmVsJDEgPSB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChQVVQsIHtcbiAgICBjaGFubmVsOiBjaGFubmVsJDEsXG4gICAgYWN0aW9uOiBhY3Rpb25cbiAgfSk7XG59XG52YXIgcHV0UmVzb2x2ZSA9IGZ1bmN0aW9uIHB1dFJlc29sdmUoKSB7XG4gIHZhciBlZmYgPSBwdXQuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICBlZmYucGF5bG9hZC5yZXNvbHZlID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn07XG5mdW5jdGlvbiBhbGwoZWZmZWN0cykge1xuICB2YXIgZWZmID0gbWFrZUVmZmVjdChBTEwsIGVmZmVjdHMpO1xuICBlZmYuY29tYmluYXRvciA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59XG5mdW5jdGlvbiByYWNlKGVmZmVjdHMpIHtcbiAgdmFyIGVmZiA9IG1ha2VFZmZlY3QoUkFDRSwgZWZmZWN0cyk7XG4gIGVmZi5jb21iaW5hdG9yID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn0gLy8gdGhpcyBtYXRjaCBnZXRGbkNhbGxEZXNjcmlwdG9yIGxvZ2ljXG5cbnZhciB2YWxpZGF0ZUZuRGVzY3JpcHRvciA9IGZ1bmN0aW9uIHZhbGlkYXRlRm5EZXNjcmlwdG9yKGVmZmVjdE5hbWUsIGZuRGVzY3JpcHRvcikge1xuICBjaGVjayhmbkRlc2NyaXB0b3IsIG5vdFVuZGVmLCBlZmZlY3ROYW1lICsgXCI6IGFyZ3VtZW50IGZuIGlzIHVuZGVmaW5lZCBvciBudWxsXCIpO1xuXG4gIGlmIChmdW5jKGZuRGVzY3JpcHRvcikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29udGV4dCA9IG51bGw7XG4gIHZhciBmbjtcblxuICBpZiAoYXJyYXkoZm5EZXNjcmlwdG9yKSkge1xuICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3JbMF07XG4gICAgZm4gPSBmbkRlc2NyaXB0b3JbMV07XG4gICAgY2hlY2soZm4sIG5vdFVuZGVmLCBlZmZlY3ROYW1lICsgXCI6IGFyZ3VtZW50IG9mIHR5cGUgW2NvbnRleHQsIGZuXSBoYXMgdW5kZWZpbmVkIG9yIG51bGwgYGZuYFwiKTtcbiAgfSBlbHNlIGlmIChvYmplY3QoZm5EZXNjcmlwdG9yKSkge1xuICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3IuY29udGV4dDtcbiAgICBmbiA9IGZuRGVzY3JpcHRvci5mbjtcbiAgICBjaGVjayhmbiwgbm90VW5kZWYsIGVmZmVjdE5hbWUgKyBcIjogYXJndW1lbnQgb2YgdHlwZSB7Y29udGV4dCwgZm59IGhhcyB1bmRlZmluZWQgb3IgbnVsbCBgZm5gXCIpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrKGZuRGVzY3JpcHRvciwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBmbiBpcyBub3QgZnVuY3Rpb25cIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbnRleHQgJiYgc3RyaW5nKGZuKSkge1xuICAgIGNoZWNrKGNvbnRleHRbZm5dLCBmdW5jLCBlZmZlY3ROYW1lICsgXCI6IGNvbnRleHQgYXJndW1lbnRzIGhhcyBubyBzdWNoIG1ldGhvZCAtIFxcXCJcIiArIGZuICsgXCJcXFwiXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNoZWNrKGZuLCBmdW5jLCBlZmZlY3ROYW1lICsgXCI6IHVucGFja2VkIGZuIGFyZ3VtZW50IChmcm9tIFtjb250ZXh0LCBmbl0gb3Ige2NvbnRleHQsIGZufSkgaXMgbm90IGEgZnVuY3Rpb25cIik7XG59O1xuXG5mdW5jdGlvbiBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykge1xuICB2YXIgY29udGV4dCA9IG51bGw7XG4gIHZhciBmbjtcblxuICBpZiAoZnVuYyhmbkRlc2NyaXB0b3IpKSB7XG4gICAgZm4gPSBmbkRlc2NyaXB0b3I7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGFycmF5KGZuRGVzY3JpcHRvcikpIHtcbiAgICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3JbMF07XG4gICAgICBmbiA9IGZuRGVzY3JpcHRvclsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dCA9IGZuRGVzY3JpcHRvci5jb250ZXh0O1xuICAgICAgZm4gPSBmbkRlc2NyaXB0b3IuZm47XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgc3RyaW5nKGZuKSAmJiBmdW5jKGNvbnRleHRbZm5dKSkge1xuICAgICAgZm4gPSBjb250ZXh0W2ZuXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgZm46IGZuLFxuICAgIGFyZ3M6IGFyZ3NcbiAgfTtcbn1cblxudmFyIGlzTm90RGVsYXlFZmZlY3QgPSBmdW5jdGlvbiBpc05vdERlbGF5RWZmZWN0KGZuKSB7XG4gIHJldHVybiBmbiAhPT0gZGVsYXk7XG59O1xuXG5mdW5jdGlvbiBjYWxsKGZuRGVzY3JpcHRvcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBhcmcwID0gdHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInID8gYXJnc1swXSA6ICdtcyc7XG4gICAgY2hlY2soZm5EZXNjcmlwdG9yLCBpc05vdERlbGF5RWZmZWN0LCBcImluc3RlYWQgb2Ygd3JpdGluZyBgeWllbGQgY2FsbChkZWxheSwgXCIgKyBhcmcwICsgXCIpYCB3aGVyZSBkZWxheSBpcyBhbiBlZmZlY3QgZnJvbSBgcmVkdXgtc2FnYS9lZmZlY3RzYCB5b3Ugc2hvdWxkIHdyaXRlIGB5aWVsZCBkZWxheShcIiArIGFyZzAgKyBcIilgXCIpO1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdjYWxsJywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2NyaXB0b3IoZm5EZXNjcmlwdG9yLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBhcHBseShjb250ZXh0LCBmbiwgYXJncykge1xuICBpZiAoYXJncyA9PT0gdm9pZCAwKSB7XG4gICAgYXJncyA9IFtdO1xuICB9XG5cbiAgdmFyIGZuRGVzY3JpcHRvciA9IFtjb250ZXh0LCBmbl07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignYXBwbHknLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ0FMTCwgZ2V0Rm5DYWxsRGVzY3JpcHRvcihbY29udGV4dCwgZm5dLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBjcHMoZm5EZXNjcmlwdG9yKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ2NwcycsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChDUFMsIGdldEZuQ2FsbERlc2NyaXB0b3IoZm5EZXNjcmlwdG9yLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBmb3JrKGZuRGVzY3JpcHRvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdmb3JrJywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEZPUkssIGdldEZuQ2FsbERlc2NyaXB0b3IoZm5EZXNjcmlwdG9yLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBzcGF3bihmbkRlc2NyaXB0b3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignc3Bhd24nLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGRldGFjaChmb3JrLmFwcGx5KHZvaWQgMCwgW2ZuRGVzY3JpcHRvcl0uY29uY2F0KGFyZ3MpKSk7XG59XG5mdW5jdGlvbiBqb2luKHRhc2tPclRhc2tzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2pvaW4oLi4udGFza3MpIGlzIG5vdCBzdXBwb3J0ZWQgYW55IG1vcmUuIFBsZWFzZSB1c2Ugam9pbihbLi4udGFza3NdKSB0byBqb2luIG11bHRpcGxlIHRhc2tzLicpO1xuICAgIH1cblxuICAgIGlmIChhcnJheSh0YXNrT3JUYXNrcykpIHtcbiAgICAgIHRhc2tPclRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY2hlY2sodCwgdGFzaywgXCJqb2luKFsuLi50YXNrc10pOiBhcmd1bWVudCBcIiArIHQgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2sodGFza09yVGFza3MsIHRhc2ssIFwiam9pbih0YXNrKTogYXJndW1lbnQgXCIgKyB0YXNrT3JUYXNrcyArIFwiIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0IFwiICsgVEVTVF9ISU5UKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChKT0lOLCB0YXNrT3JUYXNrcyk7XG59XG5mdW5jdGlvbiBjYW5jZWwodGFza09yVGFza3MpIHtcbiAgaWYgKHRhc2tPclRhc2tzID09PSB2b2lkIDApIHtcbiAgICB0YXNrT3JUYXNrcyA9IFNFTEZfQ0FOQ0VMTEFUSU9OO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsKC4uLnRhc2tzKSBpcyBub3Qgc3VwcG9ydGVkIGFueSBtb3JlLiBQbGVhc2UgdXNlIGNhbmNlbChbLi4udGFza3NdKSB0byBjYW5jZWwgbXVsdGlwbGUgdGFza3MuJyk7XG4gICAgfVxuXG4gICAgaWYgKGFycmF5KHRhc2tPclRhc2tzKSkge1xuICAgICAgdGFza09yVGFza3MuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICBjaGVjayh0LCB0YXNrLCBcImNhbmNlbChbLi4udGFza3NdKTogYXJndW1lbnQgXCIgKyB0ICsgXCIgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgXCIgKyBURVNUX0hJTlQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0YXNrT3JUYXNrcyAhPT0gU0VMRl9DQU5DRUxMQVRJT04gJiYgbm90VW5kZWYodGFza09yVGFza3MpKSB7XG4gICAgICBjaGVjayh0YXNrT3JUYXNrcywgdGFzaywgXCJjYW5jZWwodGFzayk6IGFyZ3VtZW50IFwiICsgdGFza09yVGFza3MgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ0FOQ0VMLCB0YXNrT3JUYXNrcyk7XG59XG5mdW5jdGlvbiBzZWxlY3Qoc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yID09PSB2b2lkIDApIHtcbiAgICBzZWxlY3RvciA9IGlkZW50aXR5O1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41ID4gMSA/IF9sZW41IC0gMSA6IDApLCBfa2V5NSA9IDE7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBhcmdzW19rZXk1IC0gMV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNoZWNrKGFyZ3VtZW50c1swXSwgbm90VW5kZWYsICdzZWxlY3Qoc2VsZWN0b3IsIFsuLi5dKTogYXJndW1lbnQgc2VsZWN0b3IgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2soc2VsZWN0b3IsIGZ1bmMsIFwic2VsZWN0KHNlbGVjdG9yLCBbLi4uXSk6IGFyZ3VtZW50IFwiICsgc2VsZWN0b3IgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KFNFTEVDVCwge1xuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBhcmdzOiBhcmdzXG4gIH0pO1xufVxuLyoqXG4gIGNoYW5uZWwocGF0dGVybiwgW2J1ZmZlcl0pICAgID0+IGNyZWF0ZXMgYSBwcm94eSBjaGFubmVsIGZvciBzdG9yZSBhY3Rpb25zXG4qKi9cblxuZnVuY3Rpb24gYWN0aW9uQ2hhbm5lbChwYXR0ZXJuJDEsIGJ1ZmZlciQxKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socGF0dGVybiQxLCBwYXR0ZXJuLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLC4uLik6IGFyZ3VtZW50IHBhdHRlcm4gaXMgbm90IHZhbGlkJyk7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNoZWNrKGJ1ZmZlciQxLCBub3RVbmRlZiwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKTogYXJndW1lbnQgYnVmZmVyIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgY2hlY2soYnVmZmVyJDEsIGJ1ZmZlciwgXCJhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50IFwiICsgYnVmZmVyJDEgKyBcIiBpcyBub3QgYSB2YWxpZCBidWZmZXJcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQUNUSU9OX0NIQU5ORUwsIHtcbiAgICBwYXR0ZXJuOiBwYXR0ZXJuJDEsXG4gICAgYnVmZmVyOiBidWZmZXIkMVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNhbmNlbGxlZCgpIHtcbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ0FOQ0VMTEVELCB7fSk7XG59XG5mdW5jdGlvbiBmbHVzaChjaGFubmVsJDEpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhjaGFubmVsJDEsIGNoYW5uZWwsIFwiZmx1c2goY2hhbm5lbCk6IGFyZ3VtZW50IFwiICsgY2hhbm5lbCQxICsgXCIgaXMgbm90IHZhbGlkIGNoYW5uZWxcIik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChGTFVTSCwgY2hhbm5lbCQxKTtcbn1cbmZ1bmN0aW9uIGdldENvbnRleHQocHJvcCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHByb3AsIHN0cmluZywgXCJnZXRDb250ZXh0KHByb3ApOiBhcmd1bWVudCBcIiArIHByb3AgKyBcIiBpcyBub3QgYSBzdHJpbmdcIik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChHRVRfQ09OVEVYVCwgcHJvcCk7XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KHByb3BzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socHJvcHMsIG9iamVjdCwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcobnVsbCwgcHJvcHMpKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KFNFVF9DT05URVhULCBwcm9wcyk7XG59XG52YXIgZGVsYXkgPVxuLyojX19QVVJFX18qL1xuY2FsbC5iaW5kKG51bGwsIGRlbGF5UCk7XG5cbmV4cG9ydCB7IGtUcnVlIGFzIGEsIGV4cGFuZGluZyBhcyBiLCBjaGVjayBhcyBjLCBub25lIGFzIGQsIG9uY2UgYXMgZSwgcmVtb3ZlIGFzIGYsIGludGVybmFsRXJyIGFzIGcsIFRBS0UgYXMgaCwgUFVUIGFzIGksIEFMTCBhcyBqLCBSQUNFIGFzIGssIENBTEwgYXMgbCwgQ1BTIGFzIG0sIEZPUksgYXMgbiwgSk9JTiBhcyBvLCBDQU5DRUwgYXMgcCwgU0VMRUNUIGFzIHEsIEFDVElPTl9DSEFOTkVMIGFzIHIsIENBTkNFTExFRCBhcyBzLCBGTFVTSCBhcyB0LCBHRVRfQ09OVEVYVCBhcyB1LCBTRVRfQ09OVEVYVCBhcyB2LCBnZXRNZXRhSW5mbyBhcyB3LCBub29wIGFzIHgsIGNyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3MgYXMgeSwgY3JlYXRlRW1wdHlBcnJheSBhcyB6LCBhc3NpZ25XaXRoU3ltYm9scyBhcyBBLCBtYWtlSXRlcmF0b3IgYXMgQiwgc2hvdWxkQ29tcGxldGUgYXMgQywgZmxhdE1hcCBhcyBELCBnZXRMb2NhdGlvbiBhcyBFLCBjcmVhdGVTZXRDb250ZXh0V2FybmluZyBhcyBGLCBhc3luY0l0ZXJhdG9yU3ltYm9sIGFzIEcsIHNob3VsZENhbmNlbCBhcyBILCBzaG91bGRUZXJtaW5hdGUgYXMgSSwgbG9nRXJyb3IgYXMgSiwgd3JhcFNhZ2FEaXNwYXRjaCBhcyBLLCBpZGVudGl0eSBhcyBMLCB0YWtlIGFzIE0sIGZvcmsgYXMgTiwgY2FuY2VsIGFzIE8sIGNhbGwgYXMgUCwgYWN0aW9uQ2hhbm5lbCBhcyBRLCBzbGlkaW5nIGFzIFIsIGRlbGF5IGFzIFMsIHJhY2UgYXMgVCwgYnVmZmVycyBhcyBVLCBkZXRhY2ggYXMgViwgZWZmZWN0VHlwZXMgYXMgVywgdGFrZU1heWJlIGFzIFgsIHB1dCBhcyBZLCBwdXRSZXNvbHZlIGFzIFosIGFsbCBhcyBfLCBhcHBseSBhcyAkLCBjcHMgYXMgYTAsIHNwYXduIGFzIGExLCBqb2luIGFzIGEyLCBzZWxlY3QgYXMgYTMsIGNhbmNlbGxlZCBhcyBhNCwgZmx1c2ggYXMgYTUsIGdldENvbnRleHQgYXMgYTYsIHNldENvbnRleHQgYXMgYTcgfTtcbiIsImltcG9ydCAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHsgY2hhbm5lbCwgc3RyaW5nYWJsZUZ1bmMsIGZ1bmMsIG5vdFVuZGVmIH0gZnJvbSAnQHJlZHV4LXNhZ2EvaXMnO1xuaW1wb3J0IHsgQiBhcyBtYWtlSXRlcmF0b3IsIE0gYXMgdGFrZSwgTiBhcyBmb3JrLCBPIGFzIGNhbmNlbCwgUCBhcyBjYWxsLCBRIGFzIGFjdGlvbkNoYW5uZWwsIFIgYXMgc2xpZGluZywgUyBhcyBkZWxheSwgVCBhcyByYWNlLCBjIGFzIGNoZWNrIH0gZnJvbSAnLi9jaHVuay1lOTIyYzk1MC5qcyc7XG5leHBvcnQgeyBXIGFzIGVmZmVjdFR5cGVzLCBNIGFzIHRha2UsIFggYXMgdGFrZU1heWJlLCBZIGFzIHB1dCwgWiBhcyBwdXRSZXNvbHZlLCBfIGFzIGFsbCwgVCBhcyByYWNlLCBQIGFzIGNhbGwsICQgYXMgYXBwbHksIGEwIGFzIGNwcywgTiBhcyBmb3JrLCBhMSBhcyBzcGF3biwgYTIgYXMgam9pbiwgTyBhcyBjYW5jZWwsIGEzIGFzIHNlbGVjdCwgUSBhcyBhY3Rpb25DaGFubmVsLCBhNCBhcyBjYW5jZWxsZWQsIGE1IGFzIGZsdXNoLCBhNiBhcyBnZXRDb250ZXh0LCBhNyBhcyBzZXRDb250ZXh0LCBTIGFzIGRlbGF5IH0gZnJvbSAnLi9jaHVuay1lOTIyYzk1MC5qcyc7XG5pbXBvcnQgJ0ByZWR1eC1zYWdhL2RlbGF5LXAnO1xuXG52YXIgZG9uZSA9IGZ1bmN0aW9uIGRvbmUodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBkb25lOiB0cnVlLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxudmFyIHFFbmQgPSB7fTtcbmZ1bmN0aW9uIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpIHtcbiAgaWYgKGNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gJ2NoYW5uZWwnO1xuICB9XG5cbiAgaWYgKHN0cmluZ2FibGVGdW5jKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsKTtcbiAgfVxuXG4gIGlmIChmdW5jKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIHBhdHRlcm5PckNoYW5uZWwubmFtZTtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCk7XG59XG5mdW5jdGlvbiBmc21JdGVyYXRvcihmc20sIHN0YXJ0U3RhdGUsIG5hbWUpIHtcbiAgdmFyIHN0YXRlVXBkYXRlcixcbiAgICAgIGVycm9yU3RhdGUsXG4gICAgICBlZmZlY3QsXG4gICAgICBuZXh0U3RhdGUgPSBzdGFydFN0YXRlO1xuXG4gIGZ1bmN0aW9uIG5leHQoYXJnLCBlcnJvcikge1xuICAgIGlmIChuZXh0U3RhdGUgPT09IHFFbmQpIHtcbiAgICAgIHJldHVybiBkb25lKGFyZyk7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yICYmICFlcnJvclN0YXRlKSB7XG4gICAgICBuZXh0U3RhdGUgPSBxRW5kO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlVXBkYXRlciAmJiBzdGF0ZVVwZGF0ZXIoYXJnKTtcbiAgICAgIHZhciBjdXJyZW50U3RhdGUgPSBlcnJvciA/IGZzbVtlcnJvclN0YXRlXShlcnJvcikgOiBmc21bbmV4dFN0YXRlXSgpO1xuICAgICAgbmV4dFN0YXRlID0gY3VycmVudFN0YXRlLm5leHRTdGF0ZTtcbiAgICAgIGVmZmVjdCA9IGN1cnJlbnRTdGF0ZS5lZmZlY3Q7XG4gICAgICBzdGF0ZVVwZGF0ZXIgPSBjdXJyZW50U3RhdGUuc3RhdGVVcGRhdGVyO1xuICAgICAgZXJyb3JTdGF0ZSA9IGN1cnJlbnRTdGF0ZS5lcnJvclN0YXRlO1xuICAgICAgcmV0dXJuIG5leHRTdGF0ZSA9PT0gcUVuZCA/IGRvbmUoYXJnKSA6IGVmZmVjdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFrZUl0ZXJhdG9yKG5leHQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KG51bGwsIGVycm9yKTtcbiAgfSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRha2VFdmVyeShwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlUYWtlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpXG4gIH07XG5cbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZm9yay5hcHBseSh2b2lkIDAsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSlcbiAgICB9O1xuICB9O1xuXG4gIHZhciBhY3Rpb24sXG4gICAgICBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeVRha2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlGb3JrKGFjdGlvbilcbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcInRha2VFdmVyeShcIiArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIHRha2VMYXRlc3QocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKVxuICB9O1xuXG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZvcmsuYXBwbHkodm9pZCAwLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgeUNhbmNlbCA9IGZ1bmN0aW9uIHlDYW5jZWwodGFzaykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBjYW5jZWwodGFzaylcbiAgICB9O1xuICB9O1xuXG4gIHZhciB0YXNrLCBhY3Rpb247XG5cbiAgdmFyIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRUYXNrKHQpIHtcbiAgICByZXR1cm4gdGFzayA9IHQ7XG4gIH07XG5cbiAgdmFyIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4gdGFzayA/IHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTMnLFxuICAgICAgICBlZmZlY3Q6IHlDYW5jZWwodGFzaylcbiAgICAgIH0gOiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldFRhc2tcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRUYXNrXG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJ0YWtlTGF0ZXN0KFwiICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyBcIiwgXCIgKyB3b3JrZXIubmFtZSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gdGFrZUxlYWRpbmcocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKVxuICB9O1xuXG4gIHZhciB5Q2FsbCA9IGZ1bmN0aW9uIHlDYWxsKGFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGNhbGwuYXBwbHkodm9pZCAwLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgYWN0aW9uO1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeVRha2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlDYWxsKGFjdGlvbilcbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcInRha2VMZWFkaW5nKFwiICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyBcIiwgXCIgKyB3b3JrZXIubmFtZSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoZGVsYXlMZW5ndGgsIHBhdHRlcm4sIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYWN0aW9uLCBjaGFubmVsO1xuICB2YXIgeUFjdGlvbkNoYW5uZWwgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IGFjdGlvbkNoYW5uZWwocGF0dGVybiwgc2xpZGluZygxKSlcbiAgfTtcblxuICB2YXIgeVRha2UgPSBmdW5jdGlvbiB5VGFrZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdGFrZShjaGFubmVsKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZm9yay5hcHBseSh2b2lkIDAsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSlcbiAgICB9O1xuICB9O1xuXG4gIHZhciB5RGVsYXkgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IGRlbGF5KGRlbGF5TGVuZ3RoKVxuICB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgdmFyIHNldENoYW5uZWwgPSBmdW5jdGlvbiBzZXRDaGFubmVsKGNoKSB7XG4gICAgcmV0dXJuIGNoYW5uZWwgPSBjaDtcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5QWN0aW9uQ2hhbm5lbCxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRDaGFubmVsXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTMnLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlKCksXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTQnLFxuICAgICAgICBlZmZlY3Q6IHlGb3JrKGFjdGlvbilcbiAgICAgIH07XG4gICAgfSxcbiAgICBxNDogZnVuY3Rpb24gcTQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeURlbGF5XG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJ0aHJvdHRsZShcIiArIHNhZmVOYW1lKHBhdHRlcm4pICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIHJldHJ5KG1heFRyaWVzLCBkZWxheUxlbmd0aCwgZm4pIHtcbiAgdmFyIGNvdW50ZXIgPSBtYXhUcmllcztcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeUNhbGwgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IGNhbGwuYXBwbHkodm9pZCAwLCBbZm5dLmNvbmNhdChhcmdzKSlcbiAgfTtcbiAgdmFyIHlEZWxheSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogZGVsYXkoZGVsYXlMZW5ndGgpXG4gIH07XG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlDYWxsLFxuICAgICAgICBlcnJvclN0YXRlOiAncTEwJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogcUVuZFxuICAgICAgfTtcbiAgICB9LFxuICAgIHExMDogZnVuY3Rpb24gcTEwKGVycm9yKSB7XG4gICAgICBjb3VudGVyIC09IDE7XG5cbiAgICAgIGlmIChjb3VudGVyIDw9IDApIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5RGVsYXlcbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcInJldHJ5KFwiICsgZm4ubmFtZSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2VIZWxwZXIoZGVsYXlMZW5ndGgsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYWN0aW9uLCByYWNlT3V0cHV0O1xuICB2YXIgeVRha2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbClcbiAgfTtcbiAgdmFyIHlSYWNlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiByYWNlKHtcbiAgICAgIGFjdGlvbjogdGFrZShwYXR0ZXJuT3JDaGFubmVsKSxcbiAgICAgIGRlYm91bmNlOiBkZWxheShkZWxheUxlbmd0aClcbiAgICB9KVxuICB9O1xuXG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZvcmsuYXBwbHkodm9pZCAwLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgeU5vb3AgPSBmdW5jdGlvbiB5Tm9vcCh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICB2YXIgc2V0UmFjZU91dHB1dCA9IGZ1bmN0aW9uIHNldFJhY2VPdXRwdXQocm8pIHtcbiAgICByZXR1cm4gcmFjZU91dHB1dCA9IHJvO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EzJyxcbiAgICAgICAgZWZmZWN0OiB5UmFjZSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRSYWNlT3V0cHV0XG4gICAgICB9O1xuICAgIH0sXG4gICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuICAgICAgcmV0dXJuIHJhY2VPdXRwdXQuZGVib3VuY2UgPyB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pXG4gICAgICB9IDoge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeU5vb3AocmFjZU91dHB1dC5hY3Rpb24pLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwiZGVib3VuY2UoXCIgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG52YXIgdmFsaWRhdGVUYWtlRWZmZWN0ID0gZnVuY3Rpb24gdmFsaWRhdGVUYWtlRWZmZWN0KGZuLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgY2hlY2socGF0dGVybk9yQ2hhbm5lbCwgbm90VW5kZWYsIGZuLm5hbWUgKyBcIiByZXF1aXJlcyBhIHBhdHRlcm4gb3IgY2hhbm5lbFwiKTtcbiAgY2hlY2sod29ya2VyLCBub3RVbmRlZiwgZm4ubmFtZSArIFwiIHJlcXVpcmVzIGEgc2FnYSBwYXJhbWV0ZXJcIik7XG59O1xuXG5mdW5jdGlvbiB0YWtlRXZlcnkkMShwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZVRha2VFZmZlY3QodGFrZUV2ZXJ5JDEsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh2b2lkIDAsIFt0YWtlRXZlcnksIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHRha2VMYXRlc3QkMShwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZVRha2VFZmZlY3QodGFrZUxhdGVzdCQxLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbdGFrZUxhdGVzdCwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuZnVuY3Rpb24gdGFrZUxlYWRpbmckMShwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZVRha2VFZmZlY3QodGFrZUxlYWRpbmckMSwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyA+IDIgPyBfbGVuMyAtIDIgOiAwKSwgX2tleTMgPSAyOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5MyAtIDJdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW3Rha2VMZWFkaW5nLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiB0aHJvdHRsZSQxKG1zLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhwYXR0ZXJuLCBub3RVbmRlZiwgJ3Rocm90dGxlIHJlcXVpcmVzIGEgcGF0dGVybicpO1xuICAgIGNoZWNrKHdvcmtlciwgbm90VW5kZWYsICd0aHJvdHRsZSByZXF1aXJlcyBhIHNhZ2EgcGFyYW1ldGVyJyk7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQgPiAzID8gX2xlbjQgLSAzIDogMCksIF9rZXk0ID0gMzsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGFyZ3NbX2tleTQgLSAzXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh2b2lkIDAsIFt0aHJvdHRsZSwgbXMsIHBhdHRlcm4sIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHJldHJ5JDEobWF4VHJpZXMsIGRlbGF5TGVuZ3RoLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41ID4gMyA/IF9sZW41IC0gMyA6IDApLCBfa2V5NSA9IDM7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICBhcmdzW19rZXk1IC0gM10gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwuYXBwbHkodm9pZCAwLCBbcmV0cnksIG1heFRyaWVzLCBkZWxheUxlbmd0aCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuZnVuY3Rpb24gZGVib3VuY2UoZGVsYXlMZW5ndGgsIHBhdHRlcm4sIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYgPiAzID8gX2xlbjYgLSAzIDogMCksIF9rZXk2ID0gMzsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgIGFyZ3NbX2tleTYgLSAzXSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh2b2lkIDAsIFtkZWJvdW5jZUhlbHBlciwgZGVsYXlMZW5ndGgsIHBhdHRlcm4sIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cblxuZXhwb3J0IHsgZGVib3VuY2UsIHJldHJ5JDEgYXMgcmV0cnksIHRha2VFdmVyeSQxIGFzIHRha2VFdmVyeSwgdGFrZUxhdGVzdCQxIGFzIHRha2VMYXRlc3QsIHRha2VMZWFkaW5nJDEgYXMgdGFrZUxlYWRpbmcsIHRocm90dGxlJDEgYXMgdGhyb3R0bGUgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IHsgQ0FOQ0VMIH0gZnJvbSAnQHJlZHV4LXNhZ2Evc3ltYm9scyc7XG5cbmZ1bmN0aW9uIGRlbGF5UChtcywgdmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMCkge1xuICAgIHZhbCA9IHRydWU7XG4gIH1cblxuICB2YXIgdGltZW91dElkO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChyZXNvbHZlLCBtcywgdmFsKTtcbiAgfSk7XG5cbiAgcHJvbWlzZVtDQU5DRUxdID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9O1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxheVA7XG4iLCJpbXBvcnQgeyBUQVNLLCBTQUdBX0FDVElPTiwgTVVMVElDQVNULCBJTyB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuXG52YXIgdW5kZWYgPSBmdW5jdGlvbiB1bmRlZih2KSB7XG4gIHJldHVybiB2ID09PSBudWxsIHx8IHYgPT09IHVuZGVmaW5lZDtcbn07XG52YXIgbm90VW5kZWYgPSBmdW5jdGlvbiBub3RVbmRlZih2KSB7XG4gIHJldHVybiB2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZDtcbn07XG52YXIgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoZikge1xuICByZXR1cm4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbic7XG59O1xudmFyIG51bWJlciA9IGZ1bmN0aW9uIG51bWJlcihuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcic7XG59O1xudmFyIHN0cmluZyA9IGZ1bmN0aW9uIHN0cmluZyhzKSB7XG4gIHJldHVybiB0eXBlb2YgcyA9PT0gJ3N0cmluZyc7XG59O1xudmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBvYmplY3QgPSBmdW5jdGlvbiBvYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogJiYgIWFycmF5KG9iaikgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xudmFyIHByb21pc2UgPSBmdW5jdGlvbiBwcm9taXNlKHApIHtcbiAgcmV0dXJuIHAgJiYgZnVuYyhwLnRoZW4pO1xufTtcbnZhciBpdGVyYXRvciA9IGZ1bmN0aW9uIGl0ZXJhdG9yKGl0KSB7XG4gIHJldHVybiBpdCAmJiBmdW5jKGl0Lm5leHQpICYmIGZ1bmMoaXQudGhyb3cpO1xufTtcbnZhciBpdGVyYWJsZSA9IGZ1bmN0aW9uIGl0ZXJhYmxlKGl0KSB7XG4gIHJldHVybiBpdCAmJiBmdW5jKFN5bWJvbCkgPyBmdW5jKGl0W1N5bWJvbC5pdGVyYXRvcl0pIDogYXJyYXkoaXQpO1xufTtcbnZhciB0YXNrID0gZnVuY3Rpb24gdGFzayh0KSB7XG4gIHJldHVybiB0ICYmIHRbVEFTS107XG59O1xudmFyIHNhZ2FBY3Rpb24gPSBmdW5jdGlvbiBzYWdhQWN0aW9uKGEpIHtcbiAgcmV0dXJuIEJvb2xlYW4oYSAmJiBhW1NBR0FfQUNUSU9OXSk7XG59O1xudmFyIG9ic2VydmFibGUgPSBmdW5jdGlvbiBvYnNlcnZhYmxlKG9iKSB7XG4gIHJldHVybiBvYiAmJiBmdW5jKG9iLnN1YnNjcmliZSk7XG59O1xudmFyIGJ1ZmZlciA9IGZ1bmN0aW9uIGJ1ZmZlcihidWYpIHtcbiAgcmV0dXJuIGJ1ZiAmJiBmdW5jKGJ1Zi5pc0VtcHR5KSAmJiBmdW5jKGJ1Zi50YWtlKSAmJiBmdW5jKGJ1Zi5wdXQpO1xufTtcbnZhciBwYXR0ZXJuID0gZnVuY3Rpb24gcGF0dGVybihwYXQpIHtcbiAgcmV0dXJuIHBhdCAmJiAoc3RyaW5nKHBhdCkgfHwgc3ltYm9sKHBhdCkgfHwgZnVuYyhwYXQpIHx8IGFycmF5KHBhdCkgJiYgcGF0LmV2ZXJ5KHBhdHRlcm4pKTtcbn07XG52YXIgY2hhbm5lbCA9IGZ1bmN0aW9uIGNoYW5uZWwoY2gpIHtcbiAgcmV0dXJuIGNoICYmIGZ1bmMoY2gudGFrZSkgJiYgZnVuYyhjaC5jbG9zZSk7XG59O1xudmFyIHN0cmluZ2FibGVGdW5jID0gZnVuY3Rpb24gc3RyaW5nYWJsZUZ1bmMoZikge1xuICByZXR1cm4gZnVuYyhmKSAmJiBmLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpO1xufTtcbnZhciBzeW1ib2wgPSBmdW5jdGlvbiBzeW1ib2woc3ltKSB7XG4gIHJldHVybiBCb29sZWFuKHN5bSkgJiYgdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBzeW0uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBzeW0gIT09IFN5bWJvbC5wcm90b3R5cGU7XG59O1xudmFyIG11bHRpY2FzdCA9IGZ1bmN0aW9uIG11bHRpY2FzdChjaCkge1xuICByZXR1cm4gY2hhbm5lbChjaCkgJiYgY2hbTVVMVElDQVNUXTtcbn07XG52YXIgZWZmZWN0ID0gZnVuY3Rpb24gZWZmZWN0KGVmZikge1xuICByZXR1cm4gZWZmICYmIGVmZltJT107XG59O1xuXG5leHBvcnQgeyB1bmRlZiwgbm90VW5kZWYsIGZ1bmMsIG51bWJlciwgc3RyaW5nLCBhcnJheSwgb2JqZWN0LCBwcm9taXNlLCBpdGVyYXRvciwgaXRlcmFibGUsIHRhc2ssIHNhZ2FBY3Rpb24sIG9ic2VydmFibGUsIGJ1ZmZlciwgcGF0dGVybiwgY2hhbm5lbCwgc3RyaW5nYWJsZUZ1bmMsIHN5bWJvbCwgbXVsdGljYXN0LCBlZmZlY3QgfTtcbiIsInZhciBjcmVhdGVTeW1ib2wgPSBmdW5jdGlvbiBjcmVhdGVTeW1ib2wobmFtZSkge1xuICByZXR1cm4gXCJAQHJlZHV4LXNhZ2EvXCIgKyBuYW1lO1xufTtcblxudmFyIENBTkNFTCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0NBTkNFTF9QUk9NSVNFJyk7XG52YXIgQ0hBTk5FTF9FTkRfVFlQRSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ0NIQU5ORUxfRU5EJyk7XG52YXIgSU8gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdJTycpO1xudmFyIE1BVENIID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnTUFUQ0gnKTtcbnZhciBNVUxUSUNBU1QgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdNVUxUSUNBU1QnKTtcbnZhciBTQUdBX0FDVElPTiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1NBR0FfQUNUSU9OJyk7XG52YXIgU0VMRl9DQU5DRUxMQVRJT04gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdTRUxGX0NBTkNFTExBVElPTicpO1xudmFyIFRBU0sgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdUQVNLJyk7XG52YXIgVEFTS19DQU5DRUwgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdUQVNLX0NBTkNFTCcpO1xudmFyIFRFUk1JTkFURSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ1RFUk1JTkFURScpO1xudmFyIFNBR0FfTE9DQVRJT04gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdMT0NBVElPTicpO1xuXG5leHBvcnQgeyBDQU5DRUwsIENIQU5ORUxfRU5EX1RZUEUsIElPLCBNQVRDSCwgTVVMVElDQVNULCBTQUdBX0FDVElPTiwgU0VMRl9DQU5DRUxMQVRJT04sIFRBU0ssIFRBU0tfQ0FOQ0VMLCBURVJNSU5BVEUsIFNBR0FfTE9DQVRJT04gfTtcbiIsImV4cG9ydCAqIGZyb20gJ0ByZWR1eC1zYWdhL2NvcmUvZWZmZWN0cyc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGltbXV0YWJsZUluaXQoY29uZmlnKSB7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvdjE1LjAuMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMVxuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yICYmIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRV9GQUxMQkFDSyA9IDB4ZWFjNztcblxuICB2YXIgZ2xvYmFsQ29uZmlnID0ge1xuICAgIHVzZV9zdGF0aWM6IGZhbHNlXG4gIH07XG4gIGlmIChpc09iamVjdChjb25maWcpKSB7XG4gICAgICBpZiAoY29uZmlnLnVzZV9zdGF0aWMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGdsb2JhbENvbmZpZy51c2Vfc3RhdGljID0gQm9vbGVhbihjb25maWcudXNlX3N0YXRpYyk7XG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc09iamVjdChkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJlxuICAgICAgIUFycmF5LmlzQXJyYXkoZGF0YSkgJiZcbiAgICAgIGRhdGEgIT09IG51bGxcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zdGFudGlhdGVFbXB0eU9iamVjdChvYmopIHtcbiAgICAgIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICAgIGlmICghcHJvdG90eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvcGVydHlUbyh0YXJnZXQsIG1ldGhvZE5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbWV0aG9kTmFtZSwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBiYW5Qcm9wZXJ0eSh0YXJnZXQsIG1ldGhvZE5hbWUpIHtcbiAgICBhZGRQcm9wZXJ0eVRvKHRhcmdldCwgbWV0aG9kTmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgICB0aHJvdyBuZXcgSW1tdXRhYmxlRXJyb3IoXCJUaGUgXCIgKyBtZXRob2ROYW1lICtcbiAgICAgICAgXCIgbWV0aG9kIGNhbm5vdCBiZSBpbnZva2VkIG9uIGFuIEltbXV0YWJsZSBkYXRhIHN0cnVjdHVyZS5cIik7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgaW1tdXRhYmlsaXR5VGFnID0gXCJfX2ltbXV0YWJsZV9pbnZhcmlhbnRzX2hvbGRcIjtcblxuICBmdW5jdGlvbiBhZGRJbW11dGFiaWxpdHlUYWcodGFyZ2V0KSB7XG4gICAgYWRkUHJvcGVydHlUbyh0YXJnZXQsIGltbXV0YWJpbGl0eVRhZywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0ltbXV0YWJsZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHRhcmdldCA9PT0gbnVsbCB8fCBCb29sZWFuKFxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgaW1tdXRhYmlsaXR5VGFnKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSW4gSmF2YVNjcmlwdCwgb25seSBvYmplY3RzIGFyZSBldmVuIHBvdGVudGlhbGx5IG11dGFibGUuXG4gICAgICAvLyBzdHJpbmdzLCBudW1iZXJzLCBudWxsLCBhbmQgdW5kZWZpbmVkIGFyZSBhbGwgbmF0dXJhbGx5IGltbXV0YWJsZS5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXF1YWwoYSwgYikge1xuICAgIC8vIEF2b2lkIGZhbHNlIHBvc2l0aXZlcyBkdWUgdG8gKE5hTiAhPT0gTmFOKSBldmFsdWF0aW5nIHRvIHRydWVcbiAgICByZXR1cm4gKGEgPT09IGIgfHwgKGEgIT09IGEgJiYgYiAhPT0gYikpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNNZXJnYWJsZU9iamVjdCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0ICE9PSBudWxsICYmIHR5cGVvZiB0YXJnZXQgPT09IFwib2JqZWN0XCIgJiYgIShBcnJheS5pc0FycmF5KHRhcmdldCkpICYmICEodGFyZ2V0IGluc3RhbmNlb2YgRGF0ZSk7XG4gIH1cblxuICB2YXIgbXV0YXRpbmdPYmplY3RNZXRob2RzID0gW1xuICAgIFwic2V0UHJvdG90eXBlT2ZcIlxuICBdO1xuXG4gIHZhciBub25NdXRhdGluZ09iamVjdE1ldGhvZHMgPSBbXG4gICAgXCJrZXlzXCJcbiAgXTtcblxuICB2YXIgbXV0YXRpbmdBcnJheU1ldGhvZHMgPSBtdXRhdGluZ09iamVjdE1ldGhvZHMuY29uY2F0KFtcbiAgICBcInB1c2hcIiwgXCJwb3BcIiwgXCJzb3J0XCIsIFwic3BsaWNlXCIsIFwic2hpZnRcIiwgXCJ1bnNoaWZ0XCIsIFwicmV2ZXJzZVwiXG4gIF0pO1xuXG4gIHZhciBub25NdXRhdGluZ0FycmF5TWV0aG9kcyA9IG5vbk11dGF0aW5nT2JqZWN0TWV0aG9kcy5jb25jYXQoW1xuICAgIFwibWFwXCIsIFwiZmlsdGVyXCIsIFwic2xpY2VcIiwgXCJjb25jYXRcIiwgXCJyZWR1Y2VcIiwgXCJyZWR1Y2VSaWdodFwiXG4gIF0pO1xuXG4gIHZhciBtdXRhdGluZ0RhdGVNZXRob2RzID0gbXV0YXRpbmdPYmplY3RNZXRob2RzLmNvbmNhdChbXG4gICAgXCJzZXREYXRlXCIsIFwic2V0RnVsbFllYXJcIiwgXCJzZXRIb3Vyc1wiLCBcInNldE1pbGxpc2Vjb25kc1wiLCBcInNldE1pbnV0ZXNcIiwgXCJzZXRNb250aFwiLCBcInNldFNlY29uZHNcIixcbiAgICBcInNldFRpbWVcIiwgXCJzZXRVVENEYXRlXCIsIFwic2V0VVRDRnVsbFllYXJcIiwgXCJzZXRVVENIb3Vyc1wiLCBcInNldFVUQ01pbGxpc2Vjb25kc1wiLCBcInNldFVUQ01pbnV0ZXNcIixcbiAgICBcInNldFVUQ01vbnRoXCIsIFwic2V0VVRDU2Vjb25kc1wiLCBcInNldFllYXJcIlxuICBdKTtcblxuICBmdW5jdGlvbiBJbW11dGFibGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gJ015RXJyb3InO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG4gIH1cbiAgSW1tdXRhYmxlRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG4gIEltbXV0YWJsZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEVycm9yO1xuXG4gIGZ1bmN0aW9uIG1ha2VJbW11dGFibGUob2JqLCBiYW5uZWRNZXRob2RzKSB7XG4gICAgLy8gVGFnIGl0IHNvIHdlIGNhbiBxdWlja2x5IHRlbGwgaXQncyBpbW11dGFibGUgbGF0ZXIuXG4gICAgYWRkSW1tdXRhYmlsaXR5VGFnKG9iaik7XG5cbiAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgLy8gTWFrZSBhbGwgbXV0YXRpbmcgbWV0aG9kcyB0aHJvdyBleGNlcHRpb25zLlxuICAgICAgZm9yICh2YXIgaW5kZXggaW4gYmFubmVkTWV0aG9kcykge1xuICAgICAgICBpZiAoYmFubmVkTWV0aG9kcy5oYXNPd25Qcm9wZXJ0eShpbmRleCkpIHtcbiAgICAgICAgICBiYW5Qcm9wZXJ0eShvYmosIGJhbm5lZE1ldGhvZHNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBGcmVlemUgaXQgYW5kIHJldHVybiBpdC5cbiAgICAgIE9iamVjdC5mcmVlemUob2JqKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZU1ldGhvZFJldHVybkltbXV0YWJsZShvYmosIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgY3VycmVudE1ldGhvZCA9IG9ialttZXRob2ROYW1lXTtcblxuICAgIGFkZFByb3BlcnR5VG8ob2JqLCBtZXRob2ROYW1lLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBJbW11dGFibGUoY3VycmVudE1ldGhvZC5hcHBseShvYmosIGFyZ3VtZW50cykpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJyYXlTZXQoaWR4LCB2YWx1ZSwgY29uZmlnKSB7XG4gICAgdmFyIGRlZXAgICAgICAgICAgPSBjb25maWcgJiYgY29uZmlnLmRlZXA7XG5cbiAgICBpZiAoaWR4IGluIHRoaXMpIHtcbiAgICAgIGlmIChkZWVwICYmIHRoaXNbaWR4XSAhPT0gdmFsdWUgJiYgaXNNZXJnYWJsZU9iamVjdCh2YWx1ZSkgJiYgaXNNZXJnYWJsZU9iamVjdCh0aGlzW2lkeF0pKSB7XG4gICAgICAgIHZhbHVlID0gSW1tdXRhYmxlLm1lcmdlKHRoaXNbaWR4XSwgdmFsdWUsIHtkZWVwOiB0cnVlLCBtb2RlOiAncmVwbGFjZSd9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0VxdWFsKHRoaXNbaWR4XSwgdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtdXRhYmxlID0gYXNNdXRhYmxlQXJyYXkuY2FsbCh0aGlzKTtcbiAgICBtdXRhYmxlW2lkeF0gPSBJbW11dGFibGUodmFsdWUpO1xuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlQXJyYXkobXV0YWJsZSk7XG4gIH1cblxuICB2YXIgaW1tdXRhYmxlRW1wdHlBcnJheSA9IEltbXV0YWJsZShbXSk7XG5cbiAgZnVuY3Rpb24gYXJyYXlTZXRJbihwdGgsIHZhbHVlLCBjb25maWcpIHtcbiAgICB2YXIgaGVhZCA9IHB0aFswXTtcblxuICAgIGlmIChwdGgubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gYXJyYXlTZXQuY2FsbCh0aGlzLCBoZWFkLCB2YWx1ZSwgY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhaWwgPSBwdGguc2xpY2UoMSk7XG4gICAgICB2YXIgdGhpc0hlYWQgPSB0aGlzW2hlYWRdO1xuICAgICAgdmFyIG5ld1ZhbHVlO1xuXG4gICAgICBpZiAodHlwZW9mKHRoaXNIZWFkKSA9PT0gXCJvYmplY3RcIiAmJiB0aGlzSGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBNaWdodCAodmFsaWRseSkgYmUgb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlID0gSW1tdXRhYmxlLnNldEluKHRoaXNIZWFkLCB0YWlsLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV4dEhlYWQgPSB0YWlsWzBdO1xuICAgICAgICAvLyBJZiB0aGUgbmV4dCBwYXRoIHBhcnQgaXMgYSBudW1iZXIsIHRoZW4gd2UgYXJlIHNldHRpbmcgaW50byBhbiBhcnJheSwgZWxzZSBhbiBvYmplY3QuXG4gICAgICAgIGlmIChuZXh0SGVhZCAhPT0gJycgJiYgaXNGaW5pdGUobmV4dEhlYWQpKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBhcnJheVNldEluLmNhbGwoaW1tdXRhYmxlRW1wdHlBcnJheSwgdGFpbCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gb2JqZWN0U2V0SW4uY2FsbChpbW11dGFibGVFbXB0eU9iamVjdCwgdGFpbCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWFkIGluIHRoaXMgJiYgdGhpc0hlYWQgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgbXV0YWJsZSA9IGFzTXV0YWJsZUFycmF5LmNhbGwodGhpcyk7XG4gICAgICBtdXRhYmxlW2hlYWRdID0gbmV3VmFsdWU7XG4gICAgICByZXR1cm4gbWFrZUltbXV0YWJsZUFycmF5KG11dGFibGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VJbW11dGFibGVBcnJheShhcnJheSkge1xuICAgIC8vIERvbid0IGNoYW5nZSB0aGVpciBpbXBsZW1lbnRhdGlvbnMsIGJ1dCB3cmFwIHRoZXNlIGZ1bmN0aW9ucyB0byBtYWtlIHN1cmVcbiAgICAvLyB0aGV5IGFsd2F5cyByZXR1cm4gYW4gaW1tdXRhYmxlIHZhbHVlLlxuICAgIGZvciAodmFyIGluZGV4IGluIG5vbk11dGF0aW5nQXJyYXlNZXRob2RzKSB7XG4gICAgICBpZiAobm9uTXV0YXRpbmdBcnJheU1ldGhvZHMuaGFzT3duUHJvcGVydHkoaW5kZXgpKSB7XG4gICAgICAgIHZhciBtZXRob2ROYW1lID0gbm9uTXV0YXRpbmdBcnJheU1ldGhvZHNbaW5kZXhdO1xuICAgICAgICBtYWtlTWV0aG9kUmV0dXJuSW1tdXRhYmxlKGFycmF5LCBtZXRob2ROYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWdsb2JhbENvbmZpZy51c2Vfc3RhdGljKSB7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcImZsYXRNYXBcIiwgIGZsYXRNYXApO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJhc09iamVjdFwiLCBhc09iamVjdCk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcImFzTXV0YWJsZVwiLCBhc011dGFibGVBcnJheSk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcInNldFwiLCBhcnJheVNldCk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcInNldEluXCIsIGFycmF5U2V0SW4pO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJ1cGRhdGVcIiwgdXBkYXRlKTtcbiAgICAgIGFkZFByb3BlcnR5VG8oYXJyYXksIFwidXBkYXRlSW5cIiwgdXBkYXRlSW4pO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJnZXRJblwiLCBnZXRJbik7XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycmF5W2ldID0gSW1tdXRhYmxlKGFycmF5W2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZShhcnJheSwgbXV0YXRpbmdBcnJheU1ldGhvZHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUltbXV0YWJsZURhdGUoZGF0ZSkge1xuICAgIGlmICghZ2xvYmFsQ29uZmlnLnVzZV9zdGF0aWMpIHtcbiAgICAgIGFkZFByb3BlcnR5VG8oZGF0ZSwgXCJhc011dGFibGVcIiwgYXNNdXRhYmxlRGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGUoZGF0ZSwgbXV0YXRpbmdEYXRlTWV0aG9kcyk7XG4gIH1cblxuICBmdW5jdGlvbiBhc011dGFibGVEYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldFRpbWUoKSk7XG4gIH1cblxuICAvKipcbiAgICogRWZmZWN0aXZlbHkgcGVyZm9ybXMgYSBtYXAoKSBvdmVyIHRoZSBlbGVtZW50cyBpbiB0aGUgYXJyYXksIHVzaW5nIHRoZVxuICAgKiBwcm92aWRlZCBpdGVyYXRvciwgZXhjZXB0IHRoYXQgd2hlbmV2ZXIgdGhlIGl0ZXJhdG9yIHJldHVybnMgYW4gYXJyYXksIHRoYXRcbiAgICogYXJyYXkncyBlbGVtZW50cyBhcmUgYWRkZWQgdG8gdGhlIGZpbmFsIHJlc3VsdCBpbnN0ZWFkIG9mIHRoZSBhcnJheSBpdHNlbGYuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGl0ZXJhdG9yIC0gVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkIG9uIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkuIEl0IHdpbGwgcmVjZWl2ZSB0aHJlZSBhcmd1bWVudHM6IHRoZSBjdXJyZW50IHZhbHVlLCB0aGUgY3VycmVudCBpbmRleCwgYW5kIHRoZSBjdXJyZW50IG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGZsYXRNYXAoaXRlcmF0b3IpIHtcbiAgICAvLyBDYWxsaW5nIC5mbGF0TWFwKCkgd2l0aCBubyBhcmd1bWVudHMgaXMgYSBuby1vcC4gRG9uJ3QgYm90aGVyIGNsb25pbmcuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGgsXG4gICAgICAgIGluZGV4O1xuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgaXRlcmF0b3JSZXN1bHQgPSBpdGVyYXRvcih0aGlzW2luZGV4XSwgaW5kZXgsIHRoaXMpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVyYXRvclJlc3VsdCkpIHtcbiAgICAgICAgLy8gQ29uY2F0ZW5hdGUgQXJyYXkgcmVzdWx0cyBpbnRvIHRoZSByZXR1cm4gdmFsdWUgd2UncmUgYnVpbGRpbmcgdXAuXG4gICAgICAgIHJlc3VsdC5wdXNoLmFwcGx5KHJlc3VsdCwgaXRlcmF0b3JSZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIG5vbi1BcnJheSByZXN1bHRzIHRoZSBzYW1lIHdheSBtYXAoKSBkb2VzLlxuICAgICAgICByZXN1bHQucHVzaChpdGVyYXRvclJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGVBcnJheShyZXN1bHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSW1tdXRhYmxlIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBnaXZlbiBrZXlzIGluY2x1ZGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBrZXlzVG9SZW1vdmUgLSBBIGxpc3Qgb2Ygc3RyaW5ncyByZXByZXNlbnRpbmcgdGhlIGtleXMgdG8gZXhjbHVkZSBpbiB0aGUgcmV0dXJuIHZhbHVlLiBJbnN0ZWFkIG9mIHByb3ZpZGluZyBhIHNpbmdsZSBhcnJheSwgdGhpcyBtZXRob2QgY2FuIGFsc28gYmUgY2FsbGVkIGJ5IHBhc3NpbmcgbXVsdGlwbGUgc3RyaW5ncyBhcyBzZXBhcmF0ZSBhcmd1bWVudHMuXG4gICAqL1xuICBmdW5jdGlvbiB3aXRob3V0KHJlbW92ZSkge1xuICAgIC8vIENhbGxpbmcgLndpdGhvdXQoKSB3aXRoIG5vIGFyZ3VtZW50cyBpcyBhIG5vLW9wLiBEb24ndCBib3RoZXIgY2xvbmluZy5cbiAgICBpZiAodHlwZW9mIHJlbW92ZSA9PT0gXCJ1bmRlZmluZWRcIiAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlbW92ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAvLyBJZiB3ZSB3ZXJlbid0IGdpdmVuIGFuIGFycmF5LCB1c2UgdGhlIGFyZ3VtZW50cyBsaXN0LlxuICAgICAgdmFyIGtleXNUb1JlbW92ZUFycmF5ID0gKEFycmF5LmlzQXJyYXkocmVtb3ZlKSkgP1xuICAgICAgICAgcmVtb3ZlLnNsaWNlKCkgOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAvLyBDb252ZXJ0IG51bWVyaWMga2V5cyB0byBzdHJpbmdzIHNpbmNlIHRoYXQncyBob3cgdGhleSdsbFxuICAgICAgLy8gY29tZSBmcm9tIHRoZSBlbnVtZXJhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAga2V5c1RvUmVtb3ZlQXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCwgaWR4LCBhcnIpIHtcbiAgICAgICAgaWYodHlwZW9mKGVsKSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGFycltpZHhdID0gZWwudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlbW92ZSA9IGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgIHJldHVybiBrZXlzVG9SZW1vdmVBcnJheS5pbmRleE9mKGtleSkgIT09IC0xO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gaW5zdGFudGlhdGVFbXB0eU9iamVjdCh0aGlzKTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzKSB7XG4gICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHJlbW92ZSh0aGlzW2tleV0sIGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdGhpc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlT2JqZWN0KHJlc3VsdCk7XG4gIH1cblxuICBmdW5jdGlvbiBhc011dGFibGVBcnJheShvcHRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLCBpLCBsZW5ndGg7XG5cbiAgICBpZihvcHRzICYmIG9wdHMuZGVlcCkge1xuICAgICAgZm9yKGkgPSAwLCBsZW5ndGggPSB0aGlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGFzRGVlcE11dGFibGUodGhpc1tpXSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IoaSA9IDAsIGxlbmd0aCA9IHRoaXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFZmZlY3RpdmVseSBwZXJmb3JtcyBhIFttYXBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L21hcCkgb3ZlciB0aGUgZWxlbWVudHMgaW4gdGhlIGFycmF5LCBleHBlY3RpbmcgdGhhdCB0aGUgaXRlcmF0b3IgZnVuY3Rpb25cbiAgICogd2lsbCByZXR1cm4gYW4gYXJyYXkgb2YgdHdvIGVsZW1lbnRzIC0gdGhlIGZpcnN0IHJlcHJlc2VudGluZyBhIGtleSwgdGhlIG90aGVyXG4gICAqIGEgdmFsdWUuIFRoZW4gcmV0dXJucyBhbiBJbW11dGFibGUgT2JqZWN0IGNvbnN0cnVjdGVkIG9mIHRob3NlIGtleXMgYW5kIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaXRlcmF0b3IgLSBBIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2YgdHdvIGVsZW1lbnRzIC0gdGhlIGZpcnN0IHJlcHJlc2VudGluZyB0aGUgZGVzaXJlZCBrZXksIHRoZSBvdGhlciB0aGUgZGVzaXJlZCB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFzT2JqZWN0KGl0ZXJhdG9yKSB7XG4gICAgLy8gSWYgbm8gaXRlcmF0b3Igd2FzIHByb3ZpZGVkLCBhc3N1bWUgdGhlIGlkZW50aXR5IGZ1bmN0aW9uXG4gICAgLy8gKHN1Z2dlc3RpbmcgdGhpcyBhcnJheSBpcyBhbHJlYWR5IGEgbGlzdCBvZiBrZXkvdmFsdWUgcGFpcnMuKVxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgaXRlcmF0b3IgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9LFxuICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgaW5kZXg7XG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBwYWlyICA9IGl0ZXJhdG9yKHRoaXNbaW5kZXhdLCBpbmRleCwgdGhpcyksXG4gICAgICAgICAga2V5ICAgPSBwYWlyWzBdLFxuICAgICAgICAgIHZhbHVlID0gcGFpclsxXTtcblxuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChyZXN1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNEZWVwTXV0YWJsZShvYmopIHtcbiAgICBpZiAoXG4gICAgICAoIW9iaikgfHxcbiAgICAgICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgfHxcbiAgICAgICghT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGltbXV0YWJpbGl0eVRhZykpIHx8XG4gICAgICAob2JqIGluc3RhbmNlb2YgRGF0ZSlcbiAgICApIHsgcmV0dXJuIG9iajsgfVxuICAgIHJldHVybiBJbW11dGFibGUuYXNNdXRhYmxlKG9iaiwge2RlZXA6IHRydWV9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrQ29weShzcmMsIGRlc3QpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzcmMsIGtleSkpIHtcbiAgICAgICAgZGVzdFtrZXldID0gc3JjW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJbW11dGFibGUgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgYW5kIHZhbHVlcyBvZiBib3RoXG4gICAqIHRoaXMgb2JqZWN0IGFuZCB0aGUgcHJvdmlkZWQgb2JqZWN0LCBwcmlvcml0aXppbmcgdGhlIHByb3ZpZGVkIG9iamVjdCdzXG4gICAqIHZhbHVlcyB3aGVuZXZlciB0aGUgc2FtZSBrZXkgaXMgcHJlc2VudCBpbiBib3RoIG9iamVjdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvdGhlciAtIFRoZSBvdGhlciBvYmplY3QgdG8gbWVyZ2UuIE11bHRpcGxlIG9iamVjdHMgY2FuIGJlIHBhc3NlZCBhcyBhbiBhcnJheS4gSW4gc3VjaCBhIGNhc2UsIHRoZSBsYXRlciBhbiBvYmplY3QgYXBwZWFycyBpbiB0aGF0IGxpc3QsIHRoZSBoaWdoZXIgaXRzIHByaW9yaXR5LlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0gT3B0aW9uYWwgY29uZmlnIG9iamVjdCB0aGF0IGNvbnRhaW5zIHNldHRpbmdzLiBTdXBwb3J0ZWQgc2V0dGluZ3MgYXJlOiB7ZGVlcDogdHJ1ZX0gZm9yIGRlZXAgbWVyZ2UgYW5kIHttZXJnZXI6IG1lcmdlckZ1bmN9IHdoZXJlIG1lcmdlckZ1bmMgaXMgYSBmdW5jdGlvblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCB0YWtlcyBhIHByb3BlcnR5IGZyb20gYm90aCBvYmplY3RzLiBJZiBhbnl0aGluZyBpcyByZXR1cm5lZCBpdCBvdmVycmlkZXMgdGhlIG5vcm1hbCBtZXJnZSBiZWhhdmlvdXIuXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZShvdGhlciwgY29uZmlnKSB7XG4gICAgLy8gQ2FsbGluZyAubWVyZ2UoKSB3aXRoIG5vIGFyZ3VtZW50cyBpcyBhIG5vLW9wLiBEb24ndCBib3RoZXIgY2xvbmluZy5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKG90aGVyID09PSBudWxsIHx8ICh0eXBlb2Ygb3RoZXIgIT09IFwib2JqZWN0XCIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW1tdXRhYmxlI21lcmdlIGNhbiBvbmx5IGJlIGludm9rZWQgd2l0aCBvYmplY3RzIG9yIGFycmF5cywgbm90IFwiICsgSlNPTi5zdHJpbmdpZnkob3RoZXIpKTtcbiAgICB9XG5cbiAgICB2YXIgcmVjZWl2ZWRBcnJheSA9IChBcnJheS5pc0FycmF5KG90aGVyKSksXG4gICAgICAgIGRlZXAgICAgICAgICAgPSBjb25maWcgJiYgY29uZmlnLmRlZXAsXG4gICAgICAgIG1vZGUgICAgICAgICAgPSBjb25maWcgJiYgY29uZmlnLm1vZGUgfHwgJ21lcmdlJyxcbiAgICAgICAgbWVyZ2VyICAgICAgICA9IGNvbmZpZyAmJiBjb25maWcubWVyZ2VyLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICAvLyBVc2UgdGhlIGdpdmVuIGtleSB0byBleHRyYWN0IGEgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gb2JqZWN0LCB0aGVuIHBsYWNlXG4gICAgLy8gdGhhdCB2YWx1ZSBpbiB0aGUgcmVzdWx0IG9iamVjdCB1bmRlciB0aGUgc2FtZSBrZXkuIElmIHRoYXQgcmVzdWx0ZWRcbiAgICAvLyBpbiBhIGNoYW5nZSBmcm9tIHRoaXMgb2JqZWN0J3MgdmFsdWUgYXQgdGhhdCBrZXksIHNldCBhbnlDaGFuZ2VzID0gdHJ1ZS5cbiAgICBmdW5jdGlvbiBhZGRUb1Jlc3VsdChjdXJyZW50T2JqLCBvdGhlck9iaiwga2V5KSB7XG4gICAgICB2YXIgaW1tdXRhYmxlVmFsdWUgPSBJbW11dGFibGUob3RoZXJPYmpba2V5XSk7XG4gICAgICB2YXIgbWVyZ2VyUmVzdWx0ID0gbWVyZ2VyICYmIG1lcmdlcihjdXJyZW50T2JqW2tleV0sIGltbXV0YWJsZVZhbHVlLCBjb25maWcpO1xuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRPYmpba2V5XTtcblxuICAgICAgaWYgKChyZXN1bHQgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgKG1lcmdlclJlc3VsdCAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAoIWN1cnJlbnRPYmouaGFzT3duUHJvcGVydHkoa2V5KSkgfHxcbiAgICAgICAgIWlzRXF1YWwoaW1tdXRhYmxlVmFsdWUsIGN1cnJlbnRWYWx1ZSkpIHtcblxuICAgICAgICB2YXIgbmV3VmFsdWU7XG5cbiAgICAgICAgaWYgKG1lcmdlclJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBtZXJnZXJSZXN1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVlcCAmJiBpc01lcmdhYmxlT2JqZWN0KGN1cnJlbnRWYWx1ZSkgJiYgaXNNZXJnYWJsZU9iamVjdChpbW11dGFibGVWYWx1ZSkpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IEltbXV0YWJsZS5tZXJnZShjdXJyZW50VmFsdWUsIGltbXV0YWJsZVZhbHVlLCBjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gaW1tdXRhYmxlVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzRXF1YWwoY3VycmVudFZhbHVlLCBuZXdWYWx1ZSkgfHwgIWN1cnJlbnRPYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gTWFrZSBhIHNoYWxsb3cgY2xvbmUgb2YgdGhlIGN1cnJlbnQgb2JqZWN0LlxuICAgICAgICAgICAgcmVzdWx0ID0gcXVpY2tDb3B5KGN1cnJlbnRPYmosIGluc3RhbnRpYXRlRW1wdHlPYmplY3QoY3VycmVudE9iaikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdFtrZXldID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckRyb3BwZWRLZXlzKGN1cnJlbnRPYmosIG90aGVyT2JqKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudE9iaikge1xuICAgICAgICBpZiAoIW90aGVyT2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIE1ha2UgYSBzaGFsbG93IGNsb25lIG9mIHRoZSBjdXJyZW50IG9iamVjdC5cbiAgICAgICAgICAgIHJlc3VsdCA9IHF1aWNrQ29weShjdXJyZW50T2JqLCBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0KGN1cnJlbnRPYmopKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleTtcblxuICAgIC8vIEFjaGlldmUgcHJpb3JpdGl6YXRpb24gYnkgb3ZlcnJpZGluZyBwcmV2aW91cyB2YWx1ZXMgdGhhdCBnZXQgaW4gdGhlIHdheS5cbiAgICBpZiAoIXJlY2VpdmVkQXJyYXkpIHtcbiAgICAgIC8vIFRoZSBtb3N0IGNvbW1vbiB1c2UgY2FzZToganVzdCBtZXJnZSBvbmUgb2JqZWN0IGludG8gdGhlIGV4aXN0aW5nIG9uZS5cbiAgICAgIGZvciAoa2V5IGluIG90aGVyKSB7XG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG90aGVyLCBrZXkpKSB7XG4gICAgICAgICAgYWRkVG9SZXN1bHQodGhpcywgb3RoZXIsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtb2RlID09PSAncmVwbGFjZScpIHtcbiAgICAgICAgY2xlYXJEcm9wcGVkS2V5cyh0aGlzLCBvdGhlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIGFsc28gYWNjZXB0IGFuIEFycmF5XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IG90aGVyLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIG90aGVyRnJvbUFycmF5ID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgICAgIGZvciAoa2V5IGluIG90aGVyRnJvbUFycmF5KSB7XG4gICAgICAgICAgaWYgKG90aGVyRnJvbUFycmF5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGFkZFRvUmVzdWx0KHJlc3VsdCAhPT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdGhpcywgb3RoZXJGcm9tQXJyYXksIGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1ha2VJbW11dGFibGVPYmplY3QocmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvYmplY3RSZXBsYWNlKHZhbHVlLCBjb25maWcpIHtcbiAgICB2YXIgZGVlcCAgICAgICAgICA9IGNvbmZpZyAmJiBjb25maWcuZGVlcDtcblxuICAgIC8vIENhbGxpbmcgLnJlcGxhY2UoKSB3aXRoIG5vIGFyZ3VtZW50cyBpcyBhIG5vLW9wLiBEb24ndCBib3RoZXIgY2xvbmluZy5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkltbXV0YWJsZSNyZXBsYWNlIGNhbiBvbmx5IGJlIGludm9rZWQgd2l0aCBvYmplY3RzIG9yIGFycmF5cywgbm90IFwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSW1tdXRhYmxlLm1lcmdlKHRoaXMsIHZhbHVlLCB7ZGVlcDogZGVlcCwgbW9kZTogJ3JlcGxhY2UnfSk7XG4gIH1cblxuICB2YXIgaW1tdXRhYmxlRW1wdHlPYmplY3QgPSBJbW11dGFibGUoe30pO1xuXG4gIGZ1bmN0aW9uIG9iamVjdFNldEluKHBhdGgsIHZhbHVlLCBjb25maWcpIHtcbiAgICBpZiAoIShBcnJheS5pc0FycmF5KHBhdGgpKSB8fCBwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCB0byBJbW11dGFibGUjc2V0SW4gbXVzdCBiZSBhbiBhcnJheSBjb250YWluaW5nIGF0IGxlYXN0IG9uZSBcXFwia2V5XFxcIiBzdHJpbmcuXCIpO1xuICAgIH1cblxuICAgIHZhciBoZWFkID0gcGF0aFswXTtcbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBvYmplY3RTZXQuY2FsbCh0aGlzLCBoZWFkLCB2YWx1ZSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICB2YXIgdGFpbCA9IHBhdGguc2xpY2UoMSk7XG4gICAgdmFyIG5ld1ZhbHVlO1xuICAgIHZhciB0aGlzSGVhZCA9IHRoaXNbaGVhZF07XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShoZWFkKSAmJiB0eXBlb2YodGhpc0hlYWQpID09PSBcIm9iamVjdFwiICYmIHRoaXNIZWFkICE9PSBudWxsKSB7XG4gICAgICAvLyBNaWdodCAodmFsaWRseSkgYmUgb2JqZWN0IG9yIGFycmF5XG4gICAgICBuZXdWYWx1ZSA9IEltbXV0YWJsZS5zZXRJbih0aGlzSGVhZCwgdGFpbCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZSA9IG9iamVjdFNldEluLmNhbGwoaW1tdXRhYmxlRW1wdHlPYmplY3QsIHRhaWwsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShoZWFkKSAmJiB0aGlzSGVhZCA9PT0gbmV3VmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBtdXRhYmxlID0gcXVpY2tDb3B5KHRoaXMsIGluc3RhbnRpYXRlRW1wdHlPYmplY3QodGhpcykpO1xuICAgIG11dGFibGVbaGVhZF0gPSBuZXdWYWx1ZTtcbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChtdXRhYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9iamVjdFNldChwcm9wZXJ0eSwgdmFsdWUsIGNvbmZpZykge1xuICAgIHZhciBkZWVwICAgICAgICAgID0gY29uZmlnICYmIGNvbmZpZy5kZWVwO1xuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICBpZiAoZGVlcCAmJiB0aGlzW3Byb3BlcnR5XSAhPT0gdmFsdWUgJiYgaXNNZXJnYWJsZU9iamVjdCh2YWx1ZSkgJiYgaXNNZXJnYWJsZU9iamVjdCh0aGlzW3Byb3BlcnR5XSkpIHtcbiAgICAgICAgdmFsdWUgPSBJbW11dGFibGUubWVyZ2UodGhpc1twcm9wZXJ0eV0sIHZhbHVlLCB7ZGVlcDogdHJ1ZSwgbW9kZTogJ3JlcGxhY2UnfSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNFcXVhbCh0aGlzW3Byb3BlcnR5XSwgdmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtdXRhYmxlID0gcXVpY2tDb3B5KHRoaXMsIGluc3RhbnRpYXRlRW1wdHlPYmplY3QodGhpcykpO1xuICAgIG11dGFibGVbcHJvcGVydHldID0gSW1tdXRhYmxlKHZhbHVlKTtcbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChtdXRhYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShwcm9wZXJ0eSwgdXBkYXRlcikge1xuICAgIHZhciByZXN0QXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGluaXRpYWxWYWwgPSB0aGlzW3Byb3BlcnR5XTtcbiAgICByZXR1cm4gSW1tdXRhYmxlLnNldCh0aGlzLCBwcm9wZXJ0eSwgdXBkYXRlci5hcHBseShpbml0aWFsVmFsLCBbaW5pdGlhbFZhbF0uY29uY2F0KHJlc3RBcmdzKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5QYXRoKG9iaiwgcGF0aCkge1xuICAgIC8qanNoaW50IGVxbnVsbDp0cnVlICovXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXRoLmxlbmd0aDsgb2JqICE9IG51bGwgJiYgaSA8IGw7IGkrKykge1xuICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiAoaSAmJiBpID09IGwpID8gb2JqIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlSW4ocGF0aCwgdXBkYXRlcikge1xuICAgIHZhciByZXN0QXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdmFyIGluaXRpYWxWYWwgPSBnZXRJblBhdGgodGhpcywgcGF0aCk7XG5cbiAgICByZXR1cm4gSW1tdXRhYmxlLnNldEluKHRoaXMsIHBhdGgsIHVwZGF0ZXIuYXBwbHkoaW5pdGlhbFZhbCwgW2luaXRpYWxWYWxdLmNvbmNhdChyZXN0QXJncykpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluKHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZSA9IGdldEluUGF0aCh0aGlzLCBwYXRoKTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNNdXRhYmxlT2JqZWN0KG9wdHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gaW5zdGFudGlhdGVFbXB0eU9iamVjdCh0aGlzKSwga2V5O1xuXG4gICAgaWYob3B0cyAmJiBvcHRzLmRlZXApIHtcbiAgICAgIGZvciAoa2V5IGluIHRoaXMpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gYXNEZWVwTXV0YWJsZSh0aGlzW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoa2V5IGluIHRoaXMpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gdGhpc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIENyZWF0ZXMgcGxhaW4gb2JqZWN0IHRvIGJlIHVzZWQgZm9yIGNsb25pbmdcbiAgZnVuY3Rpb24gaW5zdGFudGlhdGVQbGFpbk9iamVjdCgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvLyBGaW5hbGl6ZXMgYW4gb2JqZWN0IHdpdGggaW1tdXRhYmxlIG1ldGhvZHMsIGZyZWV6ZXMgaXQsIGFuZCByZXR1cm5zIGl0LlxuICBmdW5jdGlvbiBtYWtlSW1tdXRhYmxlT2JqZWN0KG9iaikge1xuICAgIGlmICghZ2xvYmFsQ29uZmlnLnVzZV9zdGF0aWMpIHtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcIm1lcmdlXCIsIG1lcmdlKTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcInJlcGxhY2VcIiwgb2JqZWN0UmVwbGFjZSk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJ3aXRob3V0XCIsIHdpdGhvdXQpO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwiYXNNdXRhYmxlXCIsIGFzTXV0YWJsZU9iamVjdCk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJzZXRcIiwgb2JqZWN0U2V0KTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcInNldEluXCIsIG9iamVjdFNldEluKTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcInVwZGF0ZVwiLCB1cGRhdGUpO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwidXBkYXRlSW5cIiwgdXBkYXRlSW4pO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwiZ2V0SW5cIiwgZ2V0SW4pO1xuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlKG9iaiwgbXV0YXRpbmdPYmplY3RNZXRob2RzKTtcbiAgfVxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBvYmplY3QgaXMgYSB2YWxpZCByZWFjdCBlbGVtZW50XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YxNS4wLjEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMzI2XG4gIGZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICBvYmogIT09IG51bGwgJiZcbiAgICAgICAgICAgKG9iai4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFX0ZBTExCQUNLIHx8IG9iai4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRmlsZU9iamVjdChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIEZpbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgIG9iaiBpbnN0YW5jZW9mIEZpbGU7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Jsb2JPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICBvYmogaW5zdGFuY2VvZiBCbG9iO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Vycm9yKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBFcnJvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIEltbXV0YWJsZShvYmosIG9wdGlvbnMsIHN0YWNrUmVtYWluaW5nKSB7XG4gICAgaWYgKGlzSW1tdXRhYmxlKG9iaikgfHwgaXNSZWFjdEVsZW1lbnQob2JqKSB8fCBpc0ZpbGVPYmplY3Qob2JqKSB8fCBpc0Jsb2JPYmplY3Qob2JqKSB8fCBpc0Vycm9yKG9iaikpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIGlmIChpc1Byb21pc2Uob2JqKSkge1xuICAgICAgcmV0dXJuIG9iai50aGVuKEltbXV0YWJsZSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJldHVybiBtYWtlSW1tdXRhYmxlQXJyYXkob2JqLnNsaWNlKCkpO1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIG1ha2VJbW11dGFibGVEYXRlKG5ldyBEYXRlKG9iai5nZXRUaW1lKCkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRG9uJ3QgZnJlZXplIHRoZSBvYmplY3Qgd2Ugd2VyZSBnaXZlbjsgbWFrZSBhIGNsb25lIGFuZCB1c2UgdGhhdC5cbiAgICAgIHZhciBwcm90b3R5cGUgPSBvcHRpb25zICYmIG9wdGlvbnMucHJvdG90eXBlO1xuICAgICAgdmFyIGluc3RhbnRpYXRlRW1wdHlPYmplY3QgPVxuICAgICAgICAoIXByb3RvdHlwZSB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUpID9cbiAgICAgICAgICBpbnN0YW50aWF0ZVBsYWluT2JqZWN0IDogKGZ1bmN0aW9uKCkgeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpOyB9KTtcbiAgICAgIHZhciBjbG9uZSA9IGluc3RhbnRpYXRlRW1wdHlPYmplY3QoKTtcblxuICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLypqc2hpbnQgZXFudWxsOnRydWUgKi9cbiAgICAgICAgaWYgKHN0YWNrUmVtYWluaW5nID09IG51bGwpIHtcbiAgICAgICAgICBzdGFja1JlbWFpbmluZyA9IDY0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFja1JlbWFpbmluZyA8PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEltbXV0YWJsZUVycm9yKFwiQXR0ZW1wdCB0byBjb25zdHJ1Y3QgSW1tdXRhYmxlIGZyb20gYSBkZWVwbHkgbmVzdGVkIG9iamVjdCB3YXMgZGV0ZWN0ZWQuXCIgK1xuICAgICAgICAgICAgXCIgSGF2ZSB5b3UgdHJpZWQgdG8gd3JhcCBhbiBvYmplY3Qgd2l0aCBjaXJjdWxhciByZWZlcmVuY2VzIChlLmcuIFJlYWN0IGVsZW1lbnQpP1wiICtcbiAgICAgICAgICAgIFwiIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcnRmZWxkbWFuL3NlYW1sZXNzLWltbXV0YWJsZS93aWtpL0RlZXBseS1uZXN0ZWQtb2JqZWN0LXdhcy1kZXRlY3RlZCBmb3IgZGV0YWlscy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tSZW1haW5pbmcgLT0gMTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkpIHtcbiAgICAgICAgICBjbG9uZVtrZXldID0gSW1tdXRhYmxlKG9ialtrZXldLCB1bmRlZmluZWQsIHN0YWNrUmVtYWluaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChjbG9uZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciB0byBhbGxvdyB0aGUgdXNlIG9mIG9iamVjdCBtZXRob2RzIGFzIHN0YXRpYyBtZXRob2RzIG9mIEltbXV0YWJsZS5cbiAgZnVuY3Rpb24gdG9TdGF0aWMoZm4pIHtcbiAgICBmdW5jdGlvbiBzdGF0aWNXcmFwcGVyKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICB2YXIgc2VsZiA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGljV3JhcHBlcjtcbiAgfVxuXG4gIC8vIFdyYXBwZXIgdG8gYWxsb3cgdGhlIHVzZSBvZiBvYmplY3QgbWV0aG9kcyBhcyBzdGF0aWMgbWV0aG9kcyBvZiBJbW11dGFibGUuXG4gIC8vIHdpdGggdGhlIGFkZGl0aW9uYWwgY29uZGl0aW9uIG9mIGNob29zaW5nIHdoaWNoIGZ1bmN0aW9uIHRvIGNhbGwgZGVwZW5kaW5nXG4gIC8vIGlmIGFyZ3VtZW50IGlzIGFuIGFycmF5IG9yIGFuIG9iamVjdC5cbiAgZnVuY3Rpb24gdG9TdGF0aWNPYmplY3RPckFycmF5KGZuT2JqZWN0LCBmbkFycmF5KSB7XG4gICAgZnVuY3Rpb24gc3RhdGljV3JhcHBlcigpIHtcbiAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgdmFyIHNlbGYgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxmKSkge1xuICAgICAgICAgIHJldHVybiBmbkFycmF5LmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZm5PYmplY3QuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRpY1dyYXBwZXI7XG4gIH1cblxuICAvLyBXcmFwcGVyIHRvIGFsbG93IHRoZSB1c2Ugb2Ygb2JqZWN0IG1ldGhvZHMgYXMgc3RhdGljIG1ldGhvZHMgb2YgSW1tdXRhYmxlLlxuICAvLyB3aXRoIHRoZSBhZGRpdGlvbmFsIGNvbmRpdGlvbiBvZiBjaG9vc2luZyB3aGljaCBmdW5jdGlvbiB0byBjYWxsIGRlcGVuZGluZ1xuICAvLyBpZiBhcmd1bWVudCBpcyBhbiBhcnJheSBvciBhbiBvYmplY3Qgb3IgYSBkYXRlLlxuICBmdW5jdGlvbiB0b1N0YXRpY09iamVjdE9yRGF0ZU9yQXJyYXkoZm5PYmplY3QsIGZuQXJyYXksIGZuRGF0ZSkge1xuICAgIGZ1bmN0aW9uIHN0YXRpY1dyYXBwZXIoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIHZhciBzZWxmID0gYXJncy5zaGlmdCgpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZikpIHtcbiAgICAgICAgICByZXR1cm4gZm5BcnJheS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICByZXR1cm4gZm5EYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZm5PYmplY3QuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRpY1dyYXBwZXI7XG4gIH1cblxuICAvLyBFeHBvcnQgdGhlIGxpYnJhcnlcbiAgSW1tdXRhYmxlLmZyb20gICAgICAgICAgID0gSW1tdXRhYmxlO1xuICBJbW11dGFibGUuaXNJbW11dGFibGUgICAgPSBpc0ltbXV0YWJsZTtcbiAgSW1tdXRhYmxlLkltbXV0YWJsZUVycm9yID0gSW1tdXRhYmxlRXJyb3I7XG4gIEltbXV0YWJsZS5tZXJnZSAgICAgICAgICA9IHRvU3RhdGljKG1lcmdlKTtcbiAgSW1tdXRhYmxlLnJlcGxhY2UgICAgICAgID0gdG9TdGF0aWMob2JqZWN0UmVwbGFjZSk7XG4gIEltbXV0YWJsZS53aXRob3V0ICAgICAgICA9IHRvU3RhdGljKHdpdGhvdXQpO1xuICBJbW11dGFibGUuYXNNdXRhYmxlICAgICAgPSB0b1N0YXRpY09iamVjdE9yRGF0ZU9yQXJyYXkoYXNNdXRhYmxlT2JqZWN0LCBhc011dGFibGVBcnJheSwgYXNNdXRhYmxlRGF0ZSk7XG4gIEltbXV0YWJsZS5zZXQgICAgICAgICAgICA9IHRvU3RhdGljT2JqZWN0T3JBcnJheShvYmplY3RTZXQsIGFycmF5U2V0KTtcbiAgSW1tdXRhYmxlLnNldEluICAgICAgICAgID0gdG9TdGF0aWNPYmplY3RPckFycmF5KG9iamVjdFNldEluLCBhcnJheVNldEluKTtcbiAgSW1tdXRhYmxlLnVwZGF0ZSAgICAgICAgID0gdG9TdGF0aWModXBkYXRlKTtcbiAgSW1tdXRhYmxlLnVwZGF0ZUluICAgICAgID0gdG9TdGF0aWModXBkYXRlSW4pO1xuICBJbW11dGFibGUuZ2V0SW4gICAgICAgICAgPSB0b1N0YXRpYyhnZXRJbik7XG4gIEltbXV0YWJsZS5mbGF0TWFwICAgICAgICA9IHRvU3RhdGljKGZsYXRNYXApO1xuICBJbW11dGFibGUuYXNPYmplY3QgICAgICAgPSB0b1N0YXRpYyhhc09iamVjdCk7XG4gIGlmICghZ2xvYmFsQ29uZmlnLnVzZV9zdGF0aWMpIHtcbiAgICAgIEltbXV0YWJsZS5zdGF0aWMgPSBpbW11dGFibGVJbml0KHtcbiAgICAgICAgICB1c2Vfc3RhdGljOiB0cnVlXG4gICAgICB9KTtcbiAgfVxuXG4gIE9iamVjdC5mcmVlemUoSW1tdXRhYmxlKTtcblxuICByZXR1cm4gSW1tdXRhYmxlO1xufVxuXG4gIHZhciBJbW11dGFibGUgPSBpbW11dGFibGVJbml0KCk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEltbXV0YWJsZTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBJbW11dGFibGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBleHBvcnRzLkltbXV0YWJsZSA9IEltbXV0YWJsZTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XG4gICAgd2luZG93LkltbXV0YWJsZSA9IEltbXV0YWJsZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsLkltbXV0YWJsZSA9IEltbXV0YWJsZTtcbiAgfVxufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IHt9XG5cbi8qKlxuICog5bCG5a+56LGh6L2s5Y+Y5Li6IHBhcmFtcyBzdHJpbmdcbiAqIGUuZy4geyBuYW1lOiAndXNlcicsIGFnZTogMTN9ID0+IG5hbWU9dXNlciZhZ2U9MTNcbiAqIEBwYXJhbSBvYmpcbiAqIEByZXR1cm4geyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmoycGFyYW1zKG9iaiwgcHJlZml4ID0gJycsIHN1ZmZpeCA9ICcnKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCAhb2JqKSByZXR1cm4gJydcblxuICBsZXQgcGFyYW1zID0gW11cbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcbiAgICAgIGlmIChvYmpba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkgeyAvLyDmlbDnu4Tlkozlr7nosaHnibnmrorlpITnkIZcbiAgICAgICAgcGFyYW1zLnB1c2goYCR7a2V5fT0ke0pTT04uc3RyaW5naWZ5KG9ialtrZXldKX1gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zLnB1c2goYCR7a2V5fT0ke29ialtrZXldfWApXG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4gcHJlZml4ICsgcGFyYW1zLmpvaW4oJyYnKSArIHN1ZmZpeFxufVxuXG4vKipcbiAqICDkuIvliJLnur/ovazpqbzls7BcbiAqIEBwYXJhbSBuYW1lXG4gKi9cbmV4cG9ydCBjb25zdCB1bmRlclNjb3JlVG9DYW1lbCA9IChuYW1lKSA9PlxuICBuYW1lXG4gICAgLnNwbGl0KCdfJylcbiAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1bMF0udG9VcHBlckNhc2UoKSArIGl0ZW0uc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ3NlYW1sZXNzLWltbXV0YWJsZSdcblxuLyoqXG4gKiBAZGVzYyBub3JtYWxcbiAqIEBwYXJhbSBhY3Rpb25OYW1lIHtzdHJpbmd9LCBlLmcuIGxvYWRfaXRlbVxuICogQHBhcmFtICBkZWZhdWx0RGF0YSB7b2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgYnVpbGRSZWR1eCA9IChhY3Rpb25OYW1lLCBkZWZhdWx0RGF0YSA9IHt9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9ICgpID0+XG4gICAgSW1tdXRhYmxlKHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgcGFyYW1zOiBudWxsLFxuICAgICAgLi4uZGVmYXVsdERhdGEsXG4gICAgfSlcblxuICBjb25zdCBTVEFSVCA9IGAke2FjdGlvbk5hbWV9X1NUQVJUYFxuICBjb25zdCBTVUNDRVNTID0gYCR7YWN0aW9uTmFtZX1fU1VDQ0VTU2BcbiAgY29uc3QgRVJST1IgPSBgJHthY3Rpb25OYW1lfV9FUlJPUmBcbiAgY29uc3QgUkVTRVQgPSBgJHthY3Rpb25OYW1lfV9SRVNUYFxuXG4gIGNvbnN0IHN0YXJ0ID0gY3JlYXRlQWN0aW9uKFNUQVJULCAocGFyYW1zID0gbnVsbCkgPT4gcGFyYW1zKVxuICBjb25zdCByZXNldCA9IGNyZWF0ZUFjdGlvbihSRVNFVClcbiAgY29uc3Qgc3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihTVUNDRVNTLCBkYXRhID0+ICh7IGRhdGEgfSkpXG4gIGNvbnN0IGVycm9yID0gY3JlYXRlQWN0aW9uKEVSUk9SLCBlcnJvck1lc3NhZ2UgPT4gKHsgZXJyb3JNZXNzYWdlIH0pKVxuXG4gIGNvbnN0IHJlZHVjZXIgPSBoYW5kbGVBY3Rpb25zKFxuICAgIHtcbiAgICAgIFtTVEFSVF06IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgICAgICBzdGF0ZS5tZXJnZSh7XG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgICBwYXJhbXM6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnBhcmFtcyxcbiAgICAgICAgfSksXG4gICAgICBbU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgICAgICBzdGF0ZS5tZXJnZSh7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICB9KSxcbiAgICAgIFtFUlJPUl06IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgICAgICBJbW11dGFibGUoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZXJyb3JNZXNzYWdlLFxuICAgICAgICB9KSxcbiAgICAgIFtSRVNFVF06IChzdGF0ZSwgYWN0aW9uKSA9PiBpbml0aWFsU3RhdGUoKSxcbiAgICB9LFxuICAgIGluaXRpYWxTdGF0ZSgpLFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiB7XG4gICAgICBzdGFydCxcbiAgICAgIHN1Y2Nlc3MsXG4gICAgICBlcnJvcixcbiAgICAgIHJlc2V0LFxuICAgIH0sXG4gICAgdHlwZXM6IHtcbiAgICAgIFNUQVJULFxuICAgICAgU1VDQ0VTUyxcbiAgICAgIEVSUk9SLFxuICAgICAgUkVTRVQsXG4gICAgfSxcbiAgICByZWR1Y2VyLFxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBhY3Rpb25OYW1lIHtzdHJpbmd9LCBlLmcuIGxpc3RfdmVoaWNsZVxuICogQHBhcmFtIGRlZmF1bHREYXRhIHtvYmplY3R9XG4gKiBAcmV0dXJuIHt7dHlwZXM6IHtTVUNDRVNTOiBzdHJpbmcsIFNUQVJUOiBzdHJpbmcsIEVSUk9SOiBzdHJpbmcsIFJFU0VUOiBzdHJpbmd9LCByZWR1Y2VyOiBGdW5jdGlvbiwgYWN0aW9uczpcbiAqICAge3N1Y2Nlc3M6IGFjdGlvbkNyZWF0b3IsIHN0YXJ0OiBhY3Rpb25DcmVhdG9yLCByZXNldDogYWN0aW9uQ3JlYXRvciwgZXJyb3I6IGFjdGlvbkNyZWF0b3J9fX1cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkTGlzdFJlZHV4ID0gKGFjdGlvbk5hbWUsIGRlZmF1bHREYXRhID0ge30pID0+IHtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gKCkgPT5cbiAgICBJbW11dGFibGUoe1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIHBhcmFtczoge30sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgICAgdG90YWxfY291bnQ6IDAsXG4gICAgICAgIHRvdGFsX3BhZ2U6IDAsXG4gICAgICAgIGVudHJpZXM6IFtdLFxuICAgICAgfSxcbiAgICAgIC4uLmRlZmF1bHREYXRhLFxuICAgIH0pXG5cbiAgY29uc3QgU1RBUlQgPSBgJHthY3Rpb25OYW1lfV9MSVNUX1NUQVJUYFxuICBjb25zdCBTVUNDRVNTID0gYCR7YWN0aW9uTmFtZX1fTElTVF9TVUNDRVNTYFxuICBjb25zdCBSRVNFVCA9IGBSRVNFVF8ke2FjdGlvbk5hbWV9X0xJU1RgXG4gIGNvbnN0IEVSUk9SID0gYCR7YWN0aW9uTmFtZX1fTElTVF9FUlJPUmBcblxuICBjb25zdCBzdGFydCA9IGNyZWF0ZUFjdGlvbihTVEFSVCwgKHBhZ2UsIGxpbWl0LCBwYXJhbXMpID0+ICh7XG4gICAgcGFnZSxcbiAgICBsaW1pdCxcbiAgICBwYXJhbXMsXG4gIH0pKVxuICBjb25zdCBzdWNjZXNzID0gY3JlYXRlQWN0aW9uKFNVQ0NFU1MsIGRhdGEgPT4gKHsgZGF0YSB9KSlcbiAgY29uc3QgcmVzZXQgPSBjcmVhdGVBY3Rpb24oUkVTRVQpXG4gIGNvbnN0IGVycm9yID0gY3JlYXRlQWN0aW9uKEVSUk9SKVxuXG4gIGNvbnN0IHJlZHVjZXIgPSBoYW5kbGVBY3Rpb25zKFxuICAgIHtcbiAgICAgIFtTVEFSVF06IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAgICAgICBzdGF0ZS5tZXJnZSh7XG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBwYXJhbXM6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnBhcmFtcyxcbiAgICAgICAgfSksXG4gICAgICBbU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5tZXJnZSh7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIFtFUlJPUl06IHN0YXRlID0+IHN0YXRlLm1lcmdlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlLCBzdWNjZXNzOiBmYWxzZSB9KSxcbiAgICAgIFtSRVNFVF06IHN0YXRlID0+IGluaXRpYWxTdGF0ZSgpLFxuICAgIH0sXG4gICAgaW5pdGlhbFN0YXRlKCksXG4gIClcblxuICByZXR1cm4ge1xuICAgIHJlZHVjZXIsXG4gICAgdHlwZXM6IHtcbiAgICAgIFNUQVJULFxuICAgICAgU1VDQ0VTUyxcbiAgICAgIFJFU0VULFxuICAgICAgRVJST1IsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBzdGFydCxcbiAgICAgIHN1Y2Nlc3MsXG4gICAgICBlcnJvcixcbiAgICAgIHJlc2V0LFxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCB7IGJ1aWxkUmVkdXgsIGJ1aWxkTGlzdFJlZHV4IH0gZnJvbSAnLi9oZWxwZXInXG5pbXBvcnQgd2l0aFNhZ2EsIHsgaW5pdCwgYWxsU2FnYXMgfSBmcm9tICcuL3dpdGhTYWdhJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJ1aWxkUmVkdXgsXG4gIGJ1aWxkTGlzdFJlZHV4LFxuICBpbml0RmV0Y2g6IGluaXQsIC8vIOWIneWni+WMlmZldGNo5pa55rOVXG4gIGJ1aWxkUmVkdXhDb25uZWN0U2FnYTogd2l0aFNhZ2EoYnVpbGRSZWR1eCksXG4gIGJ1aWxkTGlzdFJlZHV4Q29ubmVjdFNhZ2E6IHdpdGhTYWdhKGJ1aWxkTGlzdFJlZHV4KSxcbiAgYWxsU2FnYXMsXG59XG5cbi8vIGV4cG9ydCBjb25zdCBpbml0RmV0Y2ggPSBpbml0XG4vLyBleHBvcnQgY29uc3QgYWxsU2FnYXMgPSBzYWdhc1xuLy8gZXhwb3J0IGNvbnN0IGJ1aWxkUmVkdXggPSBidWlsZFxuLy8gZXhwb3J0IGNvbnN0IGJ1aWxkTGlzdFJlZHV4ID0gYnVpbGRMaXN0XG4vLyBleHBvcnQgY29uc3QgYnVpbGRSZWR1eENvbm5lY3RTYWdhID0gd2l0aFNhZ2EoYnVpbGRSZWR1eClcbi8vIGV4cG9ydCBjb25zdCBidWlsZExpc3RSZWR1eENvbm5lY3RTYWdhID0gd2l0aFNhZ2EoYnVpbGRMaXN0UmVkdXgpXG4iLCJpbXBvcnQgeyBwdXQsIGNhbGwsIHRha2VMYXRlc3QsIHNlbGVjdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgeyBvYmoycGFyYW1zLCB1bmRlclNjb3JlVG9DYW1lbCB9IGZyb20gJy4vY29tbW9uJ1xuXG5sZXQgZG9GZXRjaCA9IG51bGxcbmxldCBkb0ZldGNoQWxsID0gbnVsbFxuZXhwb3J0IGNvbnN0IGluaXQgPSAoZmV0Y2gsIGZldGNoQWxsID0gbnVsbCkgPT4ge1xuICBkb0ZldGNoID0gZmV0Y2hcbiAgaWYgKGZldGNoQWxsKSB7XG4gICAgZG9GZXRjaEFsbCA9IGZldGNoQWxsXG4gIH1cbn1cblxuY29uc3Qgc2FnYUFjdGlvbnMgPSB7XG4gIHB1dCxcbiAgY2FsbCxcbiAgc2VsZWN0LFxuICBkZWxheSxcbn1cblxuLy8g5omA5pyJc2FnYVxubGV0IHNhZ2FzID0gW11cbmxldCBhbGxSZWR1eEFjdGlvbnMgPSB7fVxuXG4vKipcbiAqIOWIm+W7unJlZHVjZeaXtuiHquWKqOWFs+iBlHNhZ2FcbiAqL1xuZXhwb3J0IGRlZmF1bHQgcmVkdXhlciA9PiAoLi4uYXJncykgPT4ge1xuICBsZXQgX3JlZHV4ID0gcmVkdXhlci5jYWxsKG51bGwsIC4uLmFyZ3MpXG4gIGNvbnN0IG5hbWUgPSB1bmRlclNjb3JlVG9DYW1lbChhcmdzWzBdKVxuICBhbGxSZWR1eEFjdGlvbnNbbmFtZV0gPSBfcmVkdXguYWN0aW9uc1xuICByZXR1cm4gY29uZiA9PiB7XG4gICAgY29uc3Qgd2F0Y2ggPSBjcmVhdGVXYXRjaGVyKF9yZWR1eCwgY29uZilcbiAgICBzYWdhcy5wdXNoKHdhdGNoKVxuICAgIHJldHVybiBfcmVkdXhcbiAgfVxufVxuXG4vKipcbiAqIOagueaNrumFjee9ruWIm+W7unNhZ2FcbiAqIEBwYXJhbSB7Kn0gX3JlZHV4XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufHN0cmluZ30gY29uZi51cmwgICAgICAgICAgIOivt+axguWcsOWdgO+8iOS4uuepuuWImeS4jeaJp+ihjOatpHNhZ2HvvIlcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICBjb25mLm1ldGhvZCAgICAgICAg6K+35rGC5pa55rOV77yI6buY6K6k5Li6Z2V077yJXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgY29uZi5kYXRhICAgICAgICAgIOivt+axguWPguaVsFxuICogQHBhcmFtIHtmdW5jdGlvbn0gICAgICAgIGNvbmYucmVzdWx0SGFuZGxlciDor7fmsYLmiJDlip/mlbDmja7lpITnkIZcbiAqIEBwYXJhbSB7ZnVuY3Rpb259ICAgICAgICBjb25mLmFmdGVyICAgICAgICAg5pWw5o2u5pu05paw5ZCO572u5pa55rOVXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSAgICAgICAgY29uZi5jYXRjaCAgICAgICAgIOiHquWumuS5ieW8guW4uFxuICovXG5leHBvcnQgZnVuY3Rpb24qIGNyZWF0ZVdhdGNoZXIoX3JlZHV4LCBjb25mKSB7XG4gIGlmICh0eXBlb2YgY29uZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHlpZWxkIHRha2VMYXRlc3QoX3JlZHV4LnR5cGVzLlNUQVJULCBmdW5jdGlvbiogKHsgcGF5bG9hZCB9KSB7XG4gICAgICB0cnkge1xuICAgICAgICB5aWVsZCBjYWxsKGNvbmYsIHBheWxvYWQsIHNhZ2FBY3Rpb25zLCBfcmVkdXguYWN0aW9ucywgYWxsUmVkdXhBY3Rpb25zKVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KF9yZWR1eC50eXBlcy5TVEFSVCwgZnVuY3Rpb24qICh7IHBheWxvYWQgfSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g5aSE55CG6K+35rGC5Y+C5pWwXG4gICAgICAgIGxldCBmZXRjaFBhcmFtcyA9IHlpZWxkIGNhbGwoc2V0UmVxdWVzdFBhcmFtcywgY29uZiwgcGF5bG9hZClcbiAgICAgICAgbGV0IGRhdGFcbiAgICAgICAgaWYgKCFjb25mLmZldGNoQWxsQ29uZmlnKSB7XG4gICAgICAgICAgZGF0YSA9IHlpZWxkIGNhbGwoZG9GZXRjaCwgZmV0Y2hQYXJhbXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgeyBhcGksIHBhZ2VLZXksIHRvdGFsUGFnZXNLZXkgfSA9IGNvbmYuZmV0Y2hBbGxDb25maWdcbiAgICAgICAgICBkYXRhID0geWllbGQgY2FsbChkb0ZldGNoQWxsLCBhcGksIHBhZ2VLZXksIHRvdGFsUGFnZXNLZXkpXG4gICAgICAgIH1cblxuICAgICAgICAvLyDmlbDmja7lpITnkIblmahcbiAgICAgICAgY29uZi5yZXN1bHRIYW5kbGVyICYmIChkYXRhID0geWllbGQgY2FsbChjb25mLnJlc3VsdEhhbmRsZXIsIGRhdGEsIHBheWxvYWQsIHNhZ2FBY3Rpb25zKSlcbiAgICAgICAgeWllbGQgcHV0KF9yZWR1eC5hY3Rpb25zLnN1Y2Nlc3MoZGF0YSkpXG5cbiAgICAgICAgLy8g5byC5q2l5pON5L2c5oiQ5Yqf5ZCO572u5pa55rOVXG4gICAgICAgIGlmIChjb25mLmFmdGVyKSB7XG4gICAgICAgICAgeWllbGQgY2FsbChjb25mLmFmdGVyLCBkYXRhLCBwYXlsb2FkLCBzYWdhQWN0aW9ucylcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoY29uZi5jYXRjaCkge1xuICAgICAgICAgIHJldHVybiBjb25mLmNhdGNoKGUpXG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgcHV0KF9yZWR1eC5hY3Rpb25zLnJlc2V0KCkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIOWkhOeQhuivt+axguWPguaVsFxuICogQHBhcmFtIHsqfSBjb25mICAgIHNhZ2HphY3nva5cbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBhY3Rpb24ucGF5bG9hZFxuICovXG5leHBvcnQgZnVuY3Rpb24qIHNldFJlcXVlc3RQYXJhbXMoY29uZiwgcGF5bG9hZCkge1xuICBsZXQgeyBtZXRob2QgfSA9IGNvbmZcbiAgbWV0aG9kID0gbWV0aG9kID8gbWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJ1xuICBsZXQgdXJsID0gY29uZi51cmxcbiAgaWYgKHR5cGVvZiB1cmwgPT09ICdmdW5jdGlvbicpIHtcbiAgICB1cmwgPSB1cmwocGF5bG9hZCwgc2FnYUFjdGlvbnMpXG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIOivt+axguaVsOaNruWkhOeQhijlkIjlubYgcGF5bG9hZC5wYXJhbXMg5ZKMIOS8oOWFpeeahOiHquWumuS5ieeahCBkYXRh77yM5aaC6YeN5aSN6Ieq5a6a5LmJ5bGe5oCn5LyY5YWIKVxuICBsZXQgc2VuZERhdGEgPSB7fVxuICAvLyBsaXN0XG4gIGlmIChwYXlsb2FkICYmIHBheWxvYWQucGFyYW1zKSB7XG4gICAgc2VuZERhdGEgPSBwYXlsb2FkLnBhcmFtc1xuICB9XG4gIC8vIGZvcm1cbiAgaWYgKHBheWxvYWQgJiYgcGF5bG9hZC5kYXRhKSB7XG4gICAgc2VuZERhdGEgPSBwYXlsb2FkLmRhdGFcbiAgfVxuICBsZXQgY29uZkRhdGFUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbmYuZGF0YSlcbiAgaWYgKGNvbmYuZGF0YSAmJiBjb25mRGF0YVR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICBsZXQgcmVzID0geWllbGQgY2FsbChjb25mLmRhdGEsIHBheWxvYWQsIHNhZ2FBY3Rpb25zKVxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocmVzKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgIHNlbmREYXRhID0gcmVzXG4gICAgfVxuICB9XG4gIGlmIChjb25mRGF0YVR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgc2VuZERhdGEgPSB7IC4uLnNlbmREYXRhLCAuLi5jb25mLmRhdGEgfVxuICB9XG4gIGxldCBmZXRjaFBhcmFtcyA9IHsgdXJsLCBtZXRob2QgfVxuICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IHRyYW5QYXJhbXMgPSBvYmoycGFyYW1zKHNlbmREYXRhKSAvLyDluo/liJfljJZcbiAgICB1cmwgKz0gdHJhblBhcmFtcyA/ICcmJyArIHRyYW5QYXJhbXMgOiAnJ1xuICAgIGZldGNoUGFyYW1zLnVybCA9IHVybFxuICB9IGVsc2Uge1xuICAgIGZldGNoUGFyYW1zLmRhdGEgPSBzZW5kRGF0YVxuICB9XG4gIHJldHVybiBmZXRjaFBhcmFtc1xufVxuXG5leHBvcnQgY29uc3QgYWxsU2FnYXMgPSBzYWdhc1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtYWN0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9