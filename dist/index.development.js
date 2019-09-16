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
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(conf.resultHandler, data, payload, sagaActions, _redux.actions, allReduxActions);

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
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(conf.after, data, payload, sagaActions, _redux.actions, allReduxActions);

                  case 25:
                    _context2.next = 34;
                    break;

                  case 27:
                    _context2.prev = 27;
                    _context2.t1 = _context2["catch"](1);

                    if (!conf["catch"]) {
                      _context2.next = 32;
                      break;
                    }

                    _context2.next = 32;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(conf["catch"], _context2.t1, payload, sagaActions, _redux.actions, allReduxActions);

                  case 32:
                    _context2.next = 34;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(_redux.actions.reset());

                  case 34:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvY29yZS9kaXN0L2NodW5rLWU5MjJjOTUwLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9AcmVkdXgtc2FnYS9jb3JlL2Rpc3QvcmVkdXgtc2FnYS1lZmZlY3RzLmVzbS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvY29yZS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvQHJlZHV4LXNhZ2EvZGVsYXktcC9kaXN0L3JlZHV4LXNhZ2EtZGVsYXktcC5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL2lzL2Rpc3QvcmVkdXgtc2FnYS1pcy5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL0ByZWR1eC1zYWdhL3N5bWJvbHMvZGlzdC9yZWR1eC1zYWdhLXN5bWJvbHMuZXNtLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2Rpc3QvcmVkdXgtc2FnYS1lZmZlY3RzLW5wbS1wcm94eS5lc20uanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9ub2RlX21vZHVsZXMvc2VhbWxlc3MtaW1tdXRhYmxlL3NlYW1sZXNzLWltbXV0YWJsZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvLi9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtYWN0aW9ucy1jcmVhdG9yLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JlZHV4LWFjdGlvbnMtY3JlYXRvci8uL3NyYy93aXRoU2FnYS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1hY3Rpb25zLWNyZWF0b3IvZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCIiXSwibmFtZXMiOlsib2JqMnBhcmFtcyIsIm9iaiIsInByZWZpeCIsInN1ZmZpeCIsInBhcmFtcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidW5kZWZpbmVkIiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJqb2luIiwidW5kZXJTY29yZVRvQ2FtZWwiLCJuYW1lIiwic3BsaXQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiYnVpbGRSZWR1eCIsImFjdGlvbk5hbWUiLCJkZWZhdWx0RGF0YSIsImluaXRpYWxTdGF0ZSIsIkltbXV0YWJsZSIsImxvYWRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJlcnJvck1lc3NhZ2UiLCJTVEFSVCIsIlNVQ0NFU1MiLCJFUlJPUiIsIlJFU0VUIiwic3RhcnQiLCJjcmVhdGVBY3Rpb24iLCJyZXNldCIsImRhdGEiLCJyZWR1Y2VyIiwiaGFuZGxlQWN0aW9ucyIsInN0YXRlIiwiYWN0aW9uIiwibWVyZ2UiLCJwYXlsb2FkIiwiYWN0aW9ucyIsInR5cGVzIiwiYnVpbGRMaXN0UmVkdXgiLCJwYWdlIiwicGVyX3BhZ2UiLCJ0b3RhbF9jb3VudCIsInRvdGFsX3BhZ2UiLCJlbnRyaWVzIiwibGltaXQiLCJpbml0RmV0Y2giLCJpbml0IiwiYnVpbGRSZWR1eENvbm5lY3RTYWdhIiwid2l0aFNhZ2EiLCJidWlsZExpc3RSZWR1eENvbm5lY3RTYWdhIiwiYWxsU2FnYXMiLCJjcmVhdGVXYXRjaGVyIiwic2V0UmVxdWVzdFBhcmFtcyIsImRvRmV0Y2giLCJkb0ZldGNoQWxsIiwiZmV0Y2giLCJmZXRjaEFsbCIsInNhZ2FBY3Rpb25zIiwicHV0IiwiY2FsbCIsInNlbGVjdCIsImRlbGF5Iiwic2FnYXMiLCJhbGxSZWR1eEFjdGlvbnMiLCJyZWR1eGVyIiwiYXJncyIsIl9yZWR1eCIsImNvbmYiLCJ3YXRjaCIsInRha2VMYXRlc3QiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hQYXJhbXMiLCJmZXRjaEFsbENvbmZpZyIsImFwaSIsInBhZ2VLZXkiLCJ0b3RhbFBhZ2VzS2V5IiwicmVzdWx0SGFuZGxlciIsImFmdGVyIiwibWV0aG9kIiwidXJsIiwic2VuZERhdGEiLCJjb25mRGF0YVR5cGUiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsInJlcyIsInRyYW5QYXJhbXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUVBQWE7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1STs7Ozs7Ozs7Ozs7OztBQ3RDdkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5Qzs7Ozs7Ozs7Ozs7O0FDQXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3J0QkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQThCO0FBQ3RDO0FB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QUFsQjtBQUNELFdBSkQsTUFJTztBQUNMUix1QkFBVyxDQUFDM0MsSUFBWixHQUFtQm9ELFFBQW5CO0FBQ0Q7O0FBdENJLDRDQXVDRVQsV0F2Q0Y7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQ0EsSUFBTXRCLFFBQVEsR0FBR1ksS0FBakIsQzs7Ozs7Ozs7Ozs7QUN0SVAsMEMiLCJmaWxlIjoiaW5kZXguZGV2ZWxvcG1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiaW1wb3J0IHsgVEFTS19DQU5DRUwsIFRFUk1JTkFURSwgU0FHQV9MT0NBVElPTiwgU0FHQV9BQ1RJT04sIElPLCBTRUxGX0NBTkNFTExBVElPTiB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHsgYXJyYXksIG5vdFVuZGVmLCBwYXR0ZXJuLCBtdWx0aWNhc3QsIGNoYW5uZWwsIHVuZGVmLCB0YXNrLCBmdW5jLCBidWZmZXIsIHN0cmluZywgb2JqZWN0IH0gZnJvbSAnQHJlZHV4LXNhZ2EvaXMnO1xuaW1wb3J0IGRlbGF5UCBmcm9tICdAcmVkdXgtc2FnYS9kZWxheS1wJztcblxudmFyIGtvbnN0ID0gZnVuY3Rpb24ga29uc3Qodikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB2O1xuICB9O1xufTtcbnZhciBrVHJ1ZSA9XG4vKiNfX1BVUkVfXyovXG5rb25zdCh0cnVlKTtcbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkodikge1xuICByZXR1cm4gdjtcbn07XG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gaGFzU3ltYm9sICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yID8gU3ltYm9sLmFzeW5jSXRlcmF0b3IgOiAnQEBhc3luY0l0ZXJhdG9yJztcbmZ1bmN0aW9uIGNoZWNrKHZhbHVlLCBwcmVkaWNhdGUsIGVycm9yKSB7XG4gIGlmICghcHJlZGljYXRlKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cbn1cbnZhciBhc3NpZ25XaXRoU3ltYm9scyA9IGZ1bmN0aW9uIGFzc2lnbldpdGhTeW1ib2xzKHRhcmdldCwgc291cmNlKSB7XG4gIF9leHRlbmRzKHRhcmdldCwgc291cmNlKTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICB0YXJnZXRbc10gPSBzb3VyY2Vbc107XG4gICAgfSk7XG4gIH1cbn07XG52YXIgZmxhdE1hcCA9IGZ1bmN0aW9uIGZsYXRNYXAobWFwcGVyLCBhcnIpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIChfcmVmID0gW10pLmNvbmNhdC5hcHBseShfcmVmLCBhcnIubWFwKG1hcHBlcikpO1xufTtcbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuXG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuZnVuY3Rpb24gb25jZShmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgZm4oKTtcbiAgfTtcbn1cblxudmFyIGtUaHJvdyA9IGZ1bmN0aW9uIGtUaHJvdyhlcnIpIHtcbiAgdGhyb3cgZXJyO1xufTtcblxudmFyIGtSZXR1cm4gPSBmdW5jdGlvbiBrUmV0dXJuKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGRvbmU6IHRydWVcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIG1ha2VJdGVyYXRvcihuZXh0LCB0aHJvLCBuYW1lKSB7XG4gIGlmICh0aHJvID09PSB2b2lkIDApIHtcbiAgICB0aHJvID0ga1Rocm93O1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgIG5hbWUgPSAnaXRlcmF0b3InO1xuICB9XG5cbiAgdmFyIGl0ZXJhdG9yID0ge1xuICAgIG1ldGE6IHtcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9LFxuICAgIG5leHQ6IG5leHQsXG4gICAgdGhyb3c6IHRocm8sXG4gICAgcmV0dXJuOiBrUmV0dXJuLFxuICAgIGlzU2FnYUl0ZXJhdG9yOiB0cnVlXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IsIF9yZWYyKSB7XG4gIHZhciBzYWdhU3RhY2sgPSBfcmVmMi5zYWdhU3RhY2s7XG5cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlKi9cbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIGNvbnNvbGUuZXJyb3Ioc2FnYVN0YWNrKTtcbn1cbnZhciBpbnRlcm5hbEVyciA9IGZ1bmN0aW9uIGludGVybmFsRXJyKGVycikge1xuICByZXR1cm4gbmV3IEVycm9yKFwiXFxuICByZWR1eC1zYWdhOiBFcnJvciBjaGVja2luZyBob29rcyBkZXRlY3RlZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUuIFRoaXMgaXMgbGlrZWx5IGEgYnVnXFxuICBpbiByZWR1eC1zYWdhIGNvZGUgYW5kIG5vdCB5b3Vycy4gVGhhbmtzIGZvciByZXBvcnRpbmcgdGhpcyBpbiB0aGUgcHJvamVjdCdzIGdpdGh1YiByZXBvLlxcbiAgRXJyb3I6IFwiICsgZXJyICsgXCJcXG5cIik7XG59O1xudmFyIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nID0gZnVuY3Rpb24gY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcoY3R4LCBwcm9wcykge1xuICByZXR1cm4gKGN0eCA/IGN0eCArICcuJyA6ICcnKSArIFwic2V0Q29udGV4dChwcm9wcyk6IGFyZ3VtZW50IFwiICsgcHJvcHMgKyBcIiBpcyBub3QgYSBwbGFpbiBvYmplY3RcIjtcbn07XG52YXIgRlJPWkVOX0FDVElPTl9FUlJPUiA9IFwiWW91IGNhbid0IHB1dCAoYS5rLmEuIGRpc3BhdGNoIGZyb20gc2FnYSkgZnJvemVuIGFjdGlvbnMuXFxuV2UgaGF2ZSB0byBkZWZpbmUgYSBzcGVjaWFsIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5IG9uIHRob3NlIGFjdGlvbnMgZm9yIHNjaGVkdWxpbmcgcHVycG9zZXMuXFxuT3RoZXJ3aXNlIHlvdSB3b3VsZG4ndCBiZSBhYmxlIHRvIGNvbW11bmljYXRlIHByb3Blcmx5IGJldHdlZW4gc2FnYXMgJiBvdGhlciBzdWJzY3JpYmVycyAoYWN0aW9uIG9yZGVyaW5nIHdvdWxkIGJlY29tZSBmYXIgbGVzcyBwcmVkaWN0YWJsZSkuXFxuSWYgeW91IGFyZSB1c2luZyByZWR1eCBhbmQgeW91IGNhcmUgYWJvdXQgdGhpcyBiZWhhdmlvdXIgKGZyb3plbiBhY3Rpb25zKSxcXG50aGVuIHlvdSBtaWdodCB3YW50IHRvIHN3aXRjaCB0byBmcmVlemluZyBhY3Rpb25zIGluIGEgbWlkZGxld2FyZSByYXRoZXIgdGhhbiBpbiBhY3Rpb24gY3JlYXRvci5cXG5FeGFtcGxlIGltcGxlbWVudGF0aW9uOlxcblxcbmNvbnN0IGZyZWV6ZUFjdGlvbnMgPSBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiBuZXh0KE9iamVjdC5mcmVlemUoYWN0aW9uKSlcXG5cIjsgLy8gY3JlYXRlcyBlbXB0eSwgYnV0IG5vdC1ob2xleSBhcnJheVxuXG52YXIgY3JlYXRlRW1wdHlBcnJheSA9IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5QXJyYXkobikge1xuICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KG4pKTtcbn07XG52YXIgd3JhcFNhZ2FEaXNwYXRjaCA9IGZ1bmN0aW9uIHdyYXBTYWdhRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2soYWN0aW9uLCBmdW5jdGlvbiAoYWMpIHtcbiAgICAgICAgcmV0dXJuICFPYmplY3QuaXNGcm96ZW4oYWMpO1xuICAgICAgfSwgRlJPWkVOX0FDVElPTl9FUlJPUik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3BhdGNoKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY3Rpb24sIFNBR0FfQUNUSU9OLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgc2hvdWxkVGVybWluYXRlID0gZnVuY3Rpb24gc2hvdWxkVGVybWluYXRlKHJlcykge1xuICByZXR1cm4gcmVzID09PSBURVJNSU5BVEU7XG59O1xudmFyIHNob3VsZENhbmNlbCA9IGZ1bmN0aW9uIHNob3VsZENhbmNlbChyZXMpIHtcbiAgcmV0dXJuIHJlcyA9PT0gVEFTS19DQU5DRUw7XG59O1xudmFyIHNob3VsZENvbXBsZXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcGxldGUocmVzKSB7XG4gIHJldHVybiBzaG91bGRUZXJtaW5hdGUocmVzKSB8fCBzaG91bGRDYW5jZWwocmVzKTtcbn07XG5mdW5jdGlvbiBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzKHNoYXBlLCBwYXJlbnRDYWxsYmFjaykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNoYXBlKTtcbiAgdmFyIHRvdGFsQ291bnQgPSBrZXlzLmxlbmd0aDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHRvdGFsQ291bnQsIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYyA+IDA7XG4gICAgfSwgJ2NyZWF0ZUFsbFN0eWxlQ2hpbGRDYWxsYmFja3M6IGdldCBhbiBlbXB0eSBhcnJheSBvciBvYmplY3QnKTtcbiAgfVxuXG4gIHZhciBjb21wbGV0ZWRDb3VudCA9IDA7XG4gIHZhciBjb21wbGV0ZWQ7XG4gIHZhciByZXN1bHRzID0gYXJyYXkoc2hhcGUpID8gY3JlYXRlRW1wdHlBcnJheSh0b3RhbENvdW50KSA6IHt9O1xuICB2YXIgY2hpbGRDYWxsYmFja3MgPSB7fTtcblxuICBmdW5jdGlvbiBjaGVja0VuZCgpIHtcbiAgICBpZiAoY29tcGxldGVkQ291bnQgPT09IHRvdGFsQ291bnQpIHtcbiAgICAgIGNvbXBsZXRlZCA9IHRydWU7XG4gICAgICBwYXJlbnRDYWxsYmFjayhyZXN1bHRzKTtcbiAgICB9XG4gIH1cblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaENiQXRLZXkgPSBmdW5jdGlvbiBjaENiQXRLZXkocmVzLCBpc0Vycikge1xuICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0VyciB8fCBzaG91bGRDb21wbGV0ZShyZXMpKSB7XG4gICAgICAgIHBhcmVudENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgICBwYXJlbnRDYWxsYmFjayhyZXMsIGlzRXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHNba2V5XSA9IHJlcztcbiAgICAgICAgY29tcGxldGVkQ291bnQrKztcbiAgICAgICAgY2hlY2tFbmQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2hDYkF0S2V5LmNhbmNlbCA9IG5vb3A7XG4gICAgY2hpbGRDYWxsYmFja3Nba2V5XSA9IGNoQ2JBdEtleTtcbiAgfSk7XG5cbiAgcGFyZW50Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY29tcGxldGVkKSB7XG4gICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkQ2FsbGJhY2tzW2tleV0uY2FuY2VsKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNoaWxkQ2FsbGJhY2tzO1xufVxuZnVuY3Rpb24gZ2V0TWV0YUluZm8oZm4pIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmbi5uYW1lIHx8ICdhbm9ueW1vdXMnLFxuICAgIGxvY2F0aW9uOiBnZXRMb2NhdGlvbihmbilcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldExvY2F0aW9uKGluc3RydW1lbnRlZCkge1xuICByZXR1cm4gaW5zdHJ1bWVudGVkW1NBR0FfTE9DQVRJT05dO1xufVxuXG52YXIgQlVGRkVSX09WRVJGTE9XID0gXCJDaGFubmVsJ3MgQnVmZmVyIG92ZXJmbG93IVwiO1xudmFyIE9OX09WRVJGTE9XX1RIUk9XID0gMTtcbnZhciBPTl9PVkVSRkxPV19EUk9QID0gMjtcbnZhciBPTl9PVkVSRkxPV19TTElERSA9IDM7XG52YXIgT05fT1ZFUkZMT1dfRVhQQU5EID0gNDtcbnZhciB6ZXJvQnVmZmVyID0ge1xuICBpc0VtcHR5OiBrVHJ1ZSxcbiAgcHV0OiBub29wLFxuICB0YWtlOiBub29wXG59O1xuXG5mdW5jdGlvbiByaW5nQnVmZmVyKGxpbWl0LCBvdmVyZmxvd0FjdGlvbikge1xuICBpZiAobGltaXQgPT09IHZvaWQgMCkge1xuICAgIGxpbWl0ID0gMTA7XG4gIH1cblxuICB2YXIgYXJyID0gbmV3IEFycmF5KGxpbWl0KTtcbiAgdmFyIGxlbmd0aCA9IDA7XG4gIHZhciBwdXNoSW5kZXggPSAwO1xuICB2YXIgcG9wSW5kZXggPSAwO1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChpdCkge1xuICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgcHVzaEluZGV4ID0gKHB1c2hJbmRleCArIDEpICUgbGltaXQ7XG4gICAgbGVuZ3RoKys7XG4gIH07XG5cbiAgdmFyIHRha2UgPSBmdW5jdGlvbiB0YWtlKCkge1xuICAgIGlmIChsZW5ndGggIT0gMCkge1xuICAgICAgdmFyIGl0ID0gYXJyW3BvcEluZGV4XTtcbiAgICAgIGFycltwb3BJbmRleF0gPSBudWxsO1xuICAgICAgbGVuZ3RoLS07XG4gICAgICBwb3BJbmRleCA9IChwb3BJbmRleCArIDEpICUgbGltaXQ7XG4gICAgICByZXR1cm4gaXQ7XG4gICAgfVxuICB9O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgaXRlbXMucHVzaCh0YWtlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoID09IDA7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChpdCkge1xuICAgICAgaWYgKGxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHB1c2goaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRvdWJsZWRMaW1pdDtcblxuICAgICAgICBzd2l0Y2ggKG92ZXJmbG93QWN0aW9uKSB7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19USFJPVzpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihCVUZGRVJfT1ZFUkZMT1cpO1xuXG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19TTElERTpcbiAgICAgICAgICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gcHVzaEluZGV4O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX0VYUEFORDpcbiAgICAgICAgICAgIGRvdWJsZWRMaW1pdCA9IDIgKiBsaW1pdDtcbiAgICAgICAgICAgIGFyciA9IGZsdXNoKCk7XG4gICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcHVzaEluZGV4ID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gMDtcbiAgICAgICAgICAgIGFyci5sZW5ndGggPSBkb3VibGVkTGltaXQ7XG4gICAgICAgICAgICBsaW1pdCA9IGRvdWJsZWRMaW1pdDtcbiAgICAgICAgICAgIHB1c2goaXQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OiAvLyBEUk9QXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFrZTogdGFrZSxcbiAgICBmbHVzaDogZmx1c2hcbiAgfTtcbn1cblxudmFyIG5vbmUgPSBmdW5jdGlvbiBub25lKCkge1xuICByZXR1cm4gemVyb0J1ZmZlcjtcbn07XG52YXIgZml4ZWQgPSBmdW5jdGlvbiBmaXhlZChsaW1pdCkge1xuICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfVEhST1cpO1xufTtcbnZhciBkcm9wcGluZyA9IGZ1bmN0aW9uIGRyb3BwaW5nKGxpbWl0KSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGxpbWl0LCBPTl9PVkVSRkxPV19EUk9QKTtcbn07XG52YXIgc2xpZGluZyA9IGZ1bmN0aW9uIHNsaWRpbmcobGltaXQpIHtcbiAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX1NMSURFKTtcbn07XG52YXIgZXhwYW5kaW5nID0gZnVuY3Rpb24gZXhwYW5kaW5nKGluaXRpYWxTaXplKSB7XG4gIHJldHVybiByaW5nQnVmZmVyKGluaXRpYWxTaXplLCBPTl9PVkVSRkxPV19FWFBBTkQpO1xufTtcblxudmFyIGJ1ZmZlcnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIG5vbmU6IG5vbmUsXG4gIGZpeGVkOiBmaXhlZCxcbiAgZHJvcHBpbmc6IGRyb3BwaW5nLFxuICBzbGlkaW5nOiBzbGlkaW5nLFxuICBleHBhbmRpbmc6IGV4cGFuZGluZ1xufSk7XG5cbnZhciBUQUtFID0gJ1RBS0UnO1xudmFyIFBVVCA9ICdQVVQnO1xudmFyIEFMTCA9ICdBTEwnO1xudmFyIFJBQ0UgPSAnUkFDRSc7XG52YXIgQ0FMTCA9ICdDQUxMJztcbnZhciBDUFMgPSAnQ1BTJztcbnZhciBGT1JLID0gJ0ZPUksnO1xudmFyIEpPSU4gPSAnSk9JTic7XG52YXIgQ0FOQ0VMID0gJ0NBTkNFTCc7XG52YXIgU0VMRUNUID0gJ1NFTEVDVCc7XG52YXIgQUNUSU9OX0NIQU5ORUwgPSAnQUNUSU9OX0NIQU5ORUwnO1xudmFyIENBTkNFTExFRCA9ICdDQU5DRUxMRUQnO1xudmFyIEZMVVNIID0gJ0ZMVVNIJztcbnZhciBHRVRfQ09OVEVYVCA9ICdHRVRfQ09OVEVYVCc7XG52YXIgU0VUX0NPTlRFWFQgPSAnU0VUX0NPTlRFWFQnO1xuXG52YXIgZWZmZWN0VHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIFRBS0U6IFRBS0UsXG4gIFBVVDogUFVULFxuICBBTEw6IEFMTCxcbiAgUkFDRTogUkFDRSxcbiAgQ0FMTDogQ0FMTCxcbiAgQ1BTOiBDUFMsXG4gIEZPUks6IEZPUkssXG4gIEpPSU46IEpPSU4sXG4gIENBTkNFTDogQ0FOQ0VMLFxuICBTRUxFQ1Q6IFNFTEVDVCxcbiAgQUNUSU9OX0NIQU5ORUw6IEFDVElPTl9DSEFOTkVMLFxuICBDQU5DRUxMRUQ6IENBTkNFTExFRCxcbiAgRkxVU0g6IEZMVVNILFxuICBHRVRfQ09OVEVYVDogR0VUX0NPTlRFWFQsXG4gIFNFVF9DT05URVhUOiBTRVRfQ09OVEVYVFxufSk7XG5cbnZhciBURVNUX0hJTlQgPSAnXFxuKEhJTlQ6IGlmIHlvdSBhcmUgZ2V0dGluZyB0aGlzIGVycm9ycyBpbiB0ZXN0cywgY29uc2lkZXIgdXNpbmcgY3JlYXRlTW9ja1Rhc2sgZnJvbSBAcmVkdXgtc2FnYS90ZXN0aW5nLXV0aWxzKSc7XG5cbnZhciBtYWtlRWZmZWN0ID0gZnVuY3Rpb24gbWFrZUVmZmVjdCh0eXBlLCBwYXlsb2FkKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbSU9dID0gdHJ1ZSwgX3JlZi5jb21iaW5hdG9yID0gZmFsc2UsIF9yZWYudHlwZSA9IHR5cGUsIF9yZWYucGF5bG9hZCA9IHBheWxvYWQsIF9yZWY7XG59O1xuXG52YXIgaXNGb3JrRWZmZWN0ID0gZnVuY3Rpb24gaXNGb3JrRWZmZWN0KGVmZikge1xuICByZXR1cm4gZWZmICYmIGVmZltJT10gJiYgZWZmLnR5cGUgPT09IEZPUks7XG59O1xuXG52YXIgZGV0YWNoID0gZnVuY3Rpb24gZGV0YWNoKGVmZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKGVmZiwgaXNGb3JrRWZmZWN0LCAnZGV0YWNoKGVmZik6IGFyZ3VtZW50IG11c3QgYmUgYSBmb3JrIGVmZmVjdCcpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoRk9SSywgX2V4dGVuZHMoe30sIGVmZi5wYXlsb2FkLCB7XG4gICAgZGV0YWNoZWQ6IHRydWVcbiAgfSkpO1xufTtcbmZ1bmN0aW9uIHRha2UocGF0dGVybk9yQ2hhbm5lbCwgbXVsdGljYXN0UGF0dGVybikge1xuICBpZiAocGF0dGVybk9yQ2hhbm5lbCA9PT0gdm9pZCAwKSB7XG4gICAgcGF0dGVybk9yQ2hhbm5lbCA9ICcqJztcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjaGVjayhhcmd1bWVudHNbMF0sIG5vdFVuZGVmLCAndGFrZShwYXR0ZXJuT3JDaGFubmVsKTogcGF0dGVybk9yQ2hhbm5lbCBpcyB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGlmIChwYXR0ZXJuKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgcGF0dGVybjogcGF0dGVybk9yQ2hhbm5lbFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKG11bHRpY2FzdChwYXR0ZXJuT3JDaGFubmVsKSAmJiBub3RVbmRlZihtdWx0aWNhc3RQYXR0ZXJuKSAmJiBwYXR0ZXJuKG11bHRpY2FzdFBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbCxcbiAgICAgIHBhdHRlcm46IG11bHRpY2FzdFBhdHRlcm5cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjaGFubmVsKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIG1ha2VFZmZlY3QoVEFLRSwge1xuICAgICAgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBhcmd1bWVudCBcIiArIHBhdHRlcm5PckNoYW5uZWwgKyBcIiBpcyBub3QgdmFsaWQgY2hhbm5lbCBvciBhIHZhbGlkIHBhdHRlcm5cIik7XG4gIH1cbn1cbnZhciB0YWtlTWF5YmUgPSBmdW5jdGlvbiB0YWtlTWF5YmUoKSB7XG4gIHZhciBlZmYgPSB0YWtlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgZWZmLnBheWxvYWQubWF5YmUgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufTtcbmZ1bmN0aW9uIHB1dChjaGFubmVsJDEsIGFjdGlvbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBjaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBjaGFubmVsLCBcInB1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBcIiArIGNoYW5uZWwkMSArIFwiIGlzIG5vdCBhIHZhbGlkIGNoYW5uZWxcIik7XG4gICAgICBjaGVjayhhY3Rpb24sIG5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2soY2hhbm5lbCQxLCBub3RVbmRlZiwgJ3B1dChhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVuZGVmKGFjdGlvbikpIHtcbiAgICBhY3Rpb24gPSBjaGFubmVsJDE7IC8vIGB1bmRlZmluZWRgIGluc3RlYWQgb2YgYG51bGxgIHRvIG1ha2UgZGVmYXVsdCBwYXJhbWV0ZXIgd29ya1xuXG4gICAgY2hhbm5lbCQxID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoUFVULCB7XG4gICAgY2hhbm5lbDogY2hhbm5lbCQxLFxuICAgIGFjdGlvbjogYWN0aW9uXG4gIH0pO1xufVxudmFyIHB1dFJlc29sdmUgPSBmdW5jdGlvbiBwdXRSZXNvbHZlKCkge1xuICB2YXIgZWZmID0gcHV0LmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgZWZmLnBheWxvYWQucmVzb2x2ZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuZnVuY3Rpb24gYWxsKGVmZmVjdHMpIHtcbiAgdmFyIGVmZiA9IG1ha2VFZmZlY3QoQUxMLCBlZmZlY3RzKTtcbiAgZWZmLmNvbWJpbmF0b3IgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufVxuZnVuY3Rpb24gcmFjZShlZmZlY3RzKSB7XG4gIHZhciBlZmYgPSBtYWtlRWZmZWN0KFJBQ0UsIGVmZmVjdHMpO1xuICBlZmYuY29tYmluYXRvciA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59IC8vIHRoaXMgbWF0Y2ggZ2V0Rm5DYWxsRGVzY3JpcHRvciBsb2dpY1xuXG52YXIgdmFsaWRhdGVGbkRlc2NyaXB0b3IgPSBmdW5jdGlvbiB2YWxpZGF0ZUZuRGVzY3JpcHRvcihlZmZlY3ROYW1lLCBmbkRlc2NyaXB0b3IpIHtcbiAgY2hlY2soZm5EZXNjcmlwdG9yLCBub3RVbmRlZiwgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBmbiBpcyB1bmRlZmluZWQgb3IgbnVsbFwiKTtcblxuICBpZiAoZnVuYyhmbkRlc2NyaXB0b3IpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICB2YXIgZm47XG5cbiAgaWYgKGFycmF5KGZuRGVzY3JpcHRvcikpIHtcbiAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yWzBdO1xuICAgIGZuID0gZm5EZXNjcmlwdG9yWzFdO1xuICAgIGNoZWNrKGZuLCBub3RVbmRlZiwgZWZmZWN0TmFtZSArIFwiOiBhcmd1bWVudCBvZiB0eXBlIFtjb250ZXh0LCBmbl0gaGFzIHVuZGVmaW5lZCBvciBudWxsIGBmbmBcIik7XG4gIH0gZWxzZSBpZiAob2JqZWN0KGZuRGVzY3JpcHRvcikpIHtcbiAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yLmNvbnRleHQ7XG4gICAgZm4gPSBmbkRlc2NyaXB0b3IuZm47XG4gICAgY2hlY2soZm4sIG5vdFVuZGVmLCBlZmZlY3ROYW1lICsgXCI6IGFyZ3VtZW50IG9mIHR5cGUge2NvbnRleHQsIGZufSBoYXMgdW5kZWZpbmVkIG9yIG51bGwgYGZuYFwiKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVjayhmbkRlc2NyaXB0b3IsIGZ1bmMsIGVmZmVjdE5hbWUgKyBcIjogYXJndW1lbnQgZm4gaXMgbm90IGZ1bmN0aW9uXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb250ZXh0ICYmIHN0cmluZyhmbikpIHtcbiAgICBjaGVjayhjb250ZXh0W2ZuXSwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiBjb250ZXh0IGFyZ3VtZW50cyBoYXMgbm8gc3VjaCBtZXRob2QgLSBcXFwiXCIgKyBmbiArIFwiXFxcIlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjaGVjayhmbiwgZnVuYywgZWZmZWN0TmFtZSArIFwiOiB1bnBhY2tlZCBmbiBhcmd1bWVudCAoZnJvbSBbY29udGV4dCwgZm5dIG9yIHtjb250ZXh0LCBmbn0pIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xufTtcblxuZnVuY3Rpb24gZ2V0Rm5DYWxsRGVzY3JpcHRvcihmbkRlc2NyaXB0b3IsIGFyZ3MpIHtcbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICB2YXIgZm47XG5cbiAgaWYgKGZ1bmMoZm5EZXNjcmlwdG9yKSkge1xuICAgIGZuID0gZm5EZXNjcmlwdG9yO1xuICB9IGVsc2Uge1xuICAgIGlmIChhcnJheShmbkRlc2NyaXB0b3IpKSB7XG4gICAgICBjb250ZXh0ID0gZm5EZXNjcmlwdG9yWzBdO1xuICAgICAgZm4gPSBmbkRlc2NyaXB0b3JbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQgPSBmbkRlc2NyaXB0b3IuY29udGV4dDtcbiAgICAgIGZuID0gZm5EZXNjcmlwdG9yLmZuO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHN0cmluZyhmbikgJiYgZnVuYyhjb250ZXh0W2ZuXSkpIHtcbiAgICAgIGZuID0gY29udGV4dFtmbl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgIGZuOiBmbixcbiAgICBhcmdzOiBhcmdzXG4gIH07XG59XG5cbnZhciBpc05vdERlbGF5RWZmZWN0ID0gZnVuY3Rpb24gaXNOb3REZWxheUVmZmVjdChmbikge1xuICByZXR1cm4gZm4gIT09IGRlbGF5O1xufTtcblxuZnVuY3Rpb24gY2FsbChmbkRlc2NyaXB0b3IpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgYXJnMCA9IHR5cGVvZiBhcmdzWzBdID09PSAnbnVtYmVyJyA/IGFyZ3NbMF0gOiAnbXMnO1xuICAgIGNoZWNrKGZuRGVzY3JpcHRvciwgaXNOb3REZWxheUVmZmVjdCwgXCJpbnN0ZWFkIG9mIHdyaXRpbmcgYHlpZWxkIGNhbGwoZGVsYXksIFwiICsgYXJnMCArIFwiKWAgd2hlcmUgZGVsYXkgaXMgYW4gZWZmZWN0IGZyb20gYHJlZHV4LXNhZ2EvZWZmZWN0c2AgeW91IHNob3VsZCB3cml0ZSBgeWllbGQgZGVsYXkoXCIgKyBhcmcwICsgXCIpYFwiKTtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignY2FsbCcsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gYXBwbHkoY29udGV4dCwgZm4sIGFyZ3MpIHtcbiAgaWYgKGFyZ3MgPT09IHZvaWQgMCkge1xuICAgIGFyZ3MgPSBbXTtcbiAgfVxuXG4gIHZhciBmbkRlc2NyaXB0b3IgPSBbY29udGV4dCwgZm5dO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ2FwcGx5JywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2NyaXB0b3IoW2NvbnRleHQsIGZuXSwgYXJncykpO1xufVxuZnVuY3Rpb24gY3BzKGZuRGVzY3JpcHRvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhbGlkYXRlRm5EZXNjcmlwdG9yKCdjcHMnLCBmbkRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoQ1BTLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gZm9yayhmbkRlc2NyaXB0b3IpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YWxpZGF0ZUZuRGVzY3JpcHRvcignZm9yaycsIGZuRGVzY3JpcHRvcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChGT1JLLCBnZXRGbkNhbGxEZXNjcmlwdG9yKGZuRGVzY3JpcHRvciwgYXJncykpO1xufVxuZnVuY3Rpb24gc3Bhd24oZm5EZXNjcmlwdG9yKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVGbkRlc2NyaXB0b3IoJ3NwYXduJywgZm5EZXNjcmlwdG9yKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHJldHVybiBkZXRhY2goZm9yay5hcHBseSh2b2lkIDAsIFtmbkRlc2NyaXB0b3JdLmNvbmNhdChhcmdzKSkpO1xufVxuZnVuY3Rpb24gam9pbih0YXNrT3JUYXNrcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdqb2luKC4uLnRhc2tzKSBpcyBub3Qgc3VwcG9ydGVkIGFueSBtb3JlLiBQbGVhc2UgdXNlIGpvaW4oWy4uLnRhc2tzXSkgdG8gam9pbiBtdWx0aXBsZSB0YXNrcy4nKTtcbiAgICB9XG5cbiAgICBpZiAoYXJyYXkodGFza09yVGFza3MpKSB7XG4gICAgICB0YXNrT3JUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGNoZWNrKHQsIHRhc2ssIFwiam9pbihbLi4udGFza3NdKTogYXJndW1lbnQgXCIgKyB0ICsgXCIgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgXCIgKyBURVNUX0hJTlQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrKHRhc2tPclRhc2tzLCB0YXNrLCBcImpvaW4odGFzayk6IGFyZ3VtZW50IFwiICsgdGFza09yVGFza3MgKyBcIiBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCBcIiArIFRFU1RfSElOVCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoSk9JTiwgdGFza09yVGFza3MpO1xufVxuZnVuY3Rpb24gY2FuY2VsKHRhc2tPclRhc2tzKSB7XG4gIGlmICh0YXNrT3JUYXNrcyA9PT0gdm9pZCAwKSB7XG4gICAgdGFza09yVGFza3MgPSBTRUxGX0NBTkNFTExBVElPTjtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbmNlbCguLi50YXNrcykgaXMgbm90IHN1cHBvcnRlZCBhbnkgbW9yZS4gUGxlYXNlIHVzZSBjYW5jZWwoWy4uLnRhc2tzXSkgdG8gY2FuY2VsIG11bHRpcGxlIHRhc2tzLicpO1xuICAgIH1cblxuICAgIGlmIChhcnJheSh0YXNrT3JUYXNrcykpIHtcbiAgICAgIHRhc2tPclRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY2hlY2sodCwgdGFzaywgXCJjYW5jZWwoWy4uLnRhc2tzXSk6IGFyZ3VtZW50IFwiICsgdCArIFwiIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0IFwiICsgVEVTVF9ISU5UKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGFza09yVGFza3MgIT09IFNFTEZfQ0FOQ0VMTEFUSU9OICYmIG5vdFVuZGVmKHRhc2tPclRhc2tzKSkge1xuICAgICAgY2hlY2sodGFza09yVGFza3MsIHRhc2ssIFwiY2FuY2VsKHRhc2spOiBhcmd1bWVudCBcIiArIHRhc2tPclRhc2tzICsgXCIgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgXCIgKyBURVNUX0hJTlQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KENBTkNFTCwgdGFza09yVGFza3MpO1xufVxuZnVuY3Rpb24gc2VsZWN0KHNlbGVjdG9yKSB7XG4gIGlmIChzZWxlY3RvciA9PT0gdm9pZCAwKSB7XG4gICAgc2VsZWN0b3IgPSBpZGVudGl0eTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSA+IDEgPyBfbGVuNSAtIDEgOiAwKSwgX2tleTUgPSAxOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NSAtIDFdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjaGVjayhhcmd1bWVudHNbMF0sIG5vdFVuZGVmLCAnc2VsZWN0KHNlbGVjdG9yLCBbLi4uXSk6IGFyZ3VtZW50IHNlbGVjdG9yIGlzIHVuZGVmaW5lZCcpO1xuICAgIGNoZWNrKHNlbGVjdG9yLCBmdW5jLCBcInNlbGVjdChzZWxlY3RvciwgWy4uLl0pOiBhcmd1bWVudCBcIiArIHNlbGVjdG9yICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChTRUxFQ1QsIHtcbiAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgYXJnczogYXJnc1xuICB9KTtcbn1cbi8qKlxuICBjaGFubmVsKHBhdHRlcm4sIFtidWZmZXJdKSAgICA9PiBjcmVhdGVzIGEgcHJveHkgY2hhbm5lbCBmb3Igc3RvcmUgYWN0aW9uc1xuKiovXG5cbmZ1bmN0aW9uIGFjdGlvbkNoYW5uZWwocGF0dGVybiQxLCBidWZmZXIkMSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHBhdHRlcm4kMSwgcGF0dGVybiwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwuLi4pOiBhcmd1bWVudCBwYXR0ZXJuIGlzIG5vdCB2YWxpZCcpO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBjaGVjayhidWZmZXIkMSwgbm90VW5kZWYsICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50IGJ1ZmZlciBpcyB1bmRlZmluZWQnKTtcbiAgICAgIGNoZWNrKGJ1ZmZlciQxLCBidWZmZXIsIFwiYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCBcIiArIGJ1ZmZlciQxICsgXCIgaXMgbm90IGEgdmFsaWQgYnVmZmVyXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlRWZmZWN0KEFDVElPTl9DSEFOTkVMLCB7XG4gICAgcGF0dGVybjogcGF0dGVybiQxLFxuICAgIGJ1ZmZlcjogYnVmZmVyJDFcbiAgfSk7XG59XG5mdW5jdGlvbiBjYW5jZWxsZWQoKSB7XG4gIHJldHVybiBtYWtlRWZmZWN0KENBTkNFTExFRCwge30pO1xufVxuZnVuY3Rpb24gZmx1c2goY2hhbm5lbCQxKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2soY2hhbm5lbCQxLCBjaGFubmVsLCBcImZsdXNoKGNoYW5uZWwpOiBhcmd1bWVudCBcIiArIGNoYW5uZWwkMSArIFwiIGlzIG5vdCB2YWxpZCBjaGFubmVsXCIpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoRkxVU0gsIGNoYW5uZWwkMSk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KHByb3ApIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVjayhwcm9wLCBzdHJpbmcsIFwiZ2V0Q29udGV4dChwcm9wKTogYXJndW1lbnQgXCIgKyBwcm9wICsgXCIgaXMgbm90IGEgc3RyaW5nXCIpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFZmZlY3QoR0VUX0NPTlRFWFQsIHByb3ApO1xufVxuZnVuY3Rpb24gc2V0Q29udGV4dChwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrKHByb3BzLCBvYmplY3QsIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKG51bGwsIHByb3BzKSk7XG4gIH1cblxuICByZXR1cm4gbWFrZUVmZmVjdChTRVRfQ09OVEVYVCwgcHJvcHMpO1xufVxudmFyIGRlbGF5ID1cbi8qI19fUFVSRV9fKi9cbmNhbGwuYmluZChudWxsLCBkZWxheVApO1xuXG5leHBvcnQgeyBrVHJ1ZSBhcyBhLCBleHBhbmRpbmcgYXMgYiwgY2hlY2sgYXMgYywgbm9uZSBhcyBkLCBvbmNlIGFzIGUsIHJlbW92ZSBhcyBmLCBpbnRlcm5hbEVyciBhcyBnLCBUQUtFIGFzIGgsIFBVVCBhcyBpLCBBTEwgYXMgaiwgUkFDRSBhcyBrLCBDQUxMIGFzIGwsIENQUyBhcyBtLCBGT1JLIGFzIG4sIEpPSU4gYXMgbywgQ0FOQ0VMIGFzIHAsIFNFTEVDVCBhcyBxLCBBQ1RJT05fQ0hBTk5FTCBhcyByLCBDQU5DRUxMRUQgYXMgcywgRkxVU0ggYXMgdCwgR0VUX0NPTlRFWFQgYXMgdSwgU0VUX0NPTlRFWFQgYXMgdiwgZ2V0TWV0YUluZm8gYXMgdywgbm9vcCBhcyB4LCBjcmVhdGVBbGxTdHlsZUNoaWxkQ2FsbGJhY2tzIGFzIHksIGNyZWF0ZUVtcHR5QXJyYXkgYXMgeiwgYXNzaWduV2l0aFN5bWJvbHMgYXMgQSwgbWFrZUl0ZXJhdG9yIGFzIEIsIHNob3VsZENvbXBsZXRlIGFzIEMsIGZsYXRNYXAgYXMgRCwgZ2V0TG9jYXRpb24gYXMgRSwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcgYXMgRiwgYXN5bmNJdGVyYXRvclN5bWJvbCBhcyBHLCBzaG91bGRDYW5jZWwgYXMgSCwgc2hvdWxkVGVybWluYXRlIGFzIEksIGxvZ0Vycm9yIGFzIEosIHdyYXBTYWdhRGlzcGF0Y2ggYXMgSywgaWRlbnRpdHkgYXMgTCwgdGFrZSBhcyBNLCBmb3JrIGFzIE4sIGNhbmNlbCBhcyBPLCBjYWxsIGFzIFAsIGFjdGlvbkNoYW5uZWwgYXMgUSwgc2xpZGluZyBhcyBSLCBkZWxheSBhcyBTLCByYWNlIGFzIFQsIGJ1ZmZlcnMgYXMgVSwgZGV0YWNoIGFzIFYsIGVmZmVjdFR5cGVzIGFzIFcsIHRha2VNYXliZSBhcyBYLCBwdXQgYXMgWSwgcHV0UmVzb2x2ZSBhcyBaLCBhbGwgYXMgXywgYXBwbHkgYXMgJCwgY3BzIGFzIGEwLCBzcGF3biBhcyBhMSwgam9pbiBhcyBhMiwgc2VsZWN0IGFzIGEzLCBjYW5jZWxsZWQgYXMgYTQsIGZsdXNoIGFzIGE1LCBnZXRDb250ZXh0IGFzIGE2LCBzZXRDb250ZXh0IGFzIGE3IH07XG4iLCJpbXBvcnQgJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IGNoYW5uZWwsIHN0cmluZ2FibGVGdW5jLCBmdW5jLCBub3RVbmRlZiB9IGZyb20gJ0ByZWR1eC1zYWdhL2lzJztcbmltcG9ydCB7IEIgYXMgbWFrZUl0ZXJhdG9yLCBNIGFzIHRha2UsIE4gYXMgZm9yaywgTyBhcyBjYW5jZWwsIFAgYXMgY2FsbCwgUSBhcyBhY3Rpb25DaGFubmVsLCBSIGFzIHNsaWRpbmcsIFMgYXMgZGVsYXksIFQgYXMgcmFjZSwgYyBhcyBjaGVjayB9IGZyb20gJy4vY2h1bmstZTkyMmM5NTAuanMnO1xuZXhwb3J0IHsgVyBhcyBlZmZlY3RUeXBlcywgTSBhcyB0YWtlLCBYIGFzIHRha2VNYXliZSwgWSBhcyBwdXQsIFogYXMgcHV0UmVzb2x2ZSwgXyBhcyBhbGwsIFQgYXMgcmFjZSwgUCBhcyBjYWxsLCAkIGFzIGFwcGx5LCBhMCBhcyBjcHMsIE4gYXMgZm9yaywgYTEgYXMgc3Bhd24sIGEyIGFzIGpvaW4sIE8gYXMgY2FuY2VsLCBhMyBhcyBzZWxlY3QsIFEgYXMgYWN0aW9uQ2hhbm5lbCwgYTQgYXMgY2FuY2VsbGVkLCBhNSBhcyBmbHVzaCwgYTYgYXMgZ2V0Q29udGV4dCwgYTcgYXMgc2V0Q29udGV4dCwgUyBhcyBkZWxheSB9IGZyb20gJy4vY2h1bmstZTkyMmM5NTAuanMnO1xuaW1wb3J0ICdAcmVkdXgtc2FnYS9kZWxheS1wJztcblxudmFyIGRvbmUgPSBmdW5jdGlvbiBkb25lKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZG9uZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cbnZhciBxRW5kID0ge307XG5mdW5jdGlvbiBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSB7XG4gIGlmIChjaGFubmVsKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuICdjaGFubmVsJztcbiAgfVxuXG4gIGlmIChzdHJpbmdhYmxlRnVuYyhwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCk7XG4gIH1cblxuICBpZiAoZnVuYyhwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBwYXR0ZXJuT3JDaGFubmVsLm5hbWU7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwpO1xufVxuZnVuY3Rpb24gZnNtSXRlcmF0b3IoZnNtLCBzdGFydFN0YXRlLCBuYW1lKSB7XG4gIHZhciBzdGF0ZVVwZGF0ZXIsXG4gICAgICBlcnJvclN0YXRlLFxuICAgICAgZWZmZWN0LFxuICAgICAgbmV4dFN0YXRlID0gc3RhcnRTdGF0ZTtcblxuICBmdW5jdGlvbiBuZXh0KGFyZywgZXJyb3IpIHtcbiAgICBpZiAobmV4dFN0YXRlID09PSBxRW5kKSB7XG4gICAgICByZXR1cm4gZG9uZShhcmcpO1xuICAgIH1cblxuICAgIGlmIChlcnJvciAmJiAhZXJyb3JTdGF0ZSkge1xuICAgICAgbmV4dFN0YXRlID0gcUVuZDtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZVVwZGF0ZXIgJiYgc3RhdGVVcGRhdGVyKGFyZyk7XG4gICAgICB2YXIgY3VycmVudFN0YXRlID0gZXJyb3IgPyBmc21bZXJyb3JTdGF0ZV0oZXJyb3IpIDogZnNtW25leHRTdGF0ZV0oKTtcbiAgICAgIG5leHRTdGF0ZSA9IGN1cnJlbnRTdGF0ZS5uZXh0U3RhdGU7XG4gICAgICBlZmZlY3QgPSBjdXJyZW50U3RhdGUuZWZmZWN0O1xuICAgICAgc3RhdGVVcGRhdGVyID0gY3VycmVudFN0YXRlLnN0YXRlVXBkYXRlcjtcbiAgICAgIGVycm9yU3RhdGUgPSBjdXJyZW50U3RhdGUuZXJyb3JTdGF0ZTtcbiAgICAgIHJldHVybiBuZXh0U3RhdGUgPT09IHFFbmQgPyBkb25lKGFyZykgOiBlZmZlY3Q7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VJdGVyYXRvcihuZXh0LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChudWxsLCBlcnJvcik7XG4gIH0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiB0YWtlRXZlcnkocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKVxuICB9O1xuXG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZvcmsuYXBwbHkodm9pZCAwLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgYWN0aW9uLFxuICAgICAgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pXG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJ0YWtlRXZlcnkoXCIgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiB0YWtlTGF0ZXN0KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbClcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHlDYW5jZWwgPSBmdW5jdGlvbiB5Q2FuY2VsKHRhc2spIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogY2FuY2VsKHRhc2spXG4gICAgfTtcbiAgfTtcblxuICB2YXIgdGFzaywgYWN0aW9uO1xuXG4gIHZhciBzZXRUYXNrID0gZnVuY3Rpb24gc2V0VGFzayh0KSB7XG4gICAgcmV0dXJuIHRhc2sgPSB0O1xuICB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeVRha2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0QWN0aW9uXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIHRhc2sgPyB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EzJyxcbiAgICAgICAgZWZmZWN0OiB5Q2FuY2VsKHRhc2spXG4gICAgICB9IDoge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRUYXNrXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTEnLFxuICAgICAgICBlZmZlY3Q6IHlGb3JrKGFjdGlvbiksXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0VGFza1xuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGFrZUxhdGVzdChcIiArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIHRha2VMZWFkaW5nKHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbClcbiAgfTtcblxuICB2YXIgeUNhbGwgPSBmdW5jdGlvbiB5Q2FsbChhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBjYWxsLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGFjdGlvbjtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlUYWtlLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3ExJyxcbiAgICAgICAgZWZmZWN0OiB5Q2FsbChhY3Rpb24pXG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJ0YWtlTGVhZGluZyhcIiArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgXCIsIFwiICsgd29ya2VyLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGFjdGlvbiwgY2hhbm5lbDtcbiAgdmFyIHlBY3Rpb25DaGFubmVsID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBhY3Rpb25DaGFubmVsKHBhdHRlcm4sIHNsaWRpbmcoMSkpXG4gIH07XG5cbiAgdmFyIHlUYWtlID0gZnVuY3Rpb24geVRha2UoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHRha2UoY2hhbm5lbClcbiAgICB9O1xuICB9O1xuXG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZvcmsuYXBwbHkodm9pZCAwLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpXG4gICAgfTtcbiAgfTtcblxuICB2YXIgeURlbGF5ID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBkZWxheShkZWxheUxlbmd0aClcbiAgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHZhciBzZXRDaGFubmVsID0gZnVuY3Rpb24gc2V0Q2hhbm5lbChjaCkge1xuICAgIHJldHVybiBjaGFubmVsID0gY2g7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMicsXG4gICAgICAgIGVmZmVjdDogeUFjdGlvbkNoYW5uZWwsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0Q2hhbm5lbFxuICAgICAgfTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EzJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSgpLFxuICAgICAgICBzdGF0ZVVwZGF0ZXI6IHNldEFjdGlvblxuICAgICAgfTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3E0JyxcbiAgICAgICAgZWZmZWN0OiB5Rm9yayhhY3Rpb24pXG4gICAgICB9O1xuICAgIH0sXG4gICAgcTQ6IGZ1bmN0aW9uIHE0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlEZWxheVxuICAgICAgfTtcbiAgICB9XG4gIH0sICdxMScsIFwidGhyb3R0bGUoXCIgKyBzYWZlTmFtZShwYXR0ZXJuKSArIFwiLCBcIiArIHdvcmtlci5uYW1lICsgXCIpXCIpO1xufVxuXG5mdW5jdGlvbiByZXRyeShtYXhUcmllcywgZGVsYXlMZW5ndGgsIGZuKSB7XG4gIHZhciBjb3VudGVyID0gbWF4VHJpZXM7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlDYWxsID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiBjYWxsLmFwcGx5KHZvaWQgMCwgW2ZuXS5jb25jYXQoYXJncykpXG4gIH07XG4gIHZhciB5RGVsYXkgPSB7XG4gICAgZG9uZTogZmFsc2UsXG4gICAgdmFsdWU6IGRlbGF5KGRlbGF5TGVuZ3RoKVxuICB9O1xuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5Q2FsbCxcbiAgICAgICAgZXJyb3JTdGF0ZTogJ3ExMCdcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6IHFFbmRcbiAgICAgIH07XG4gICAgfSxcbiAgICBxMTA6IGZ1bmN0aW9uIHExMChlcnJvcikge1xuICAgICAgY291bnRlciAtPSAxO1xuXG4gICAgICBpZiAoY291bnRlciA8PSAwKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeURlbGF5XG4gICAgICB9O1xuICAgIH1cbiAgfSwgJ3ExJywgXCJyZXRyeShcIiArIGZuLm5hbWUgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlSGVscGVyKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDNdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGFjdGlvbiwgcmFjZU91dHB1dDtcbiAgdmFyIHlUYWtlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICAgIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpXG4gIH07XG4gIHZhciB5UmFjZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgICB2YWx1ZTogcmFjZSh7XG4gICAgICBhY3Rpb246IHRha2UocGF0dGVybk9yQ2hhbm5lbCksXG4gICAgICBkZWJvdW5jZTogZGVsYXkoZGVsYXlMZW5ndGgpXG4gICAgfSlcbiAgfTtcblxuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmb3JrLmFwcGx5KHZvaWQgMCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKVxuICAgIH07XG4gIH07XG5cbiAgdmFyIHlOb29wID0gZnVuY3Rpb24geU5vb3AodmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgdmFyIHNldFJhY2VPdXRwdXQgPSBmdW5jdGlvbiBzZXRSYWNlT3V0cHV0KHJvKSB7XG4gICAgcmV0dXJuIHJhY2VPdXRwdXQgPSBybztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHRTdGF0ZTogJ3EyJyxcbiAgICAgICAgZWZmZWN0OiB5VGFrZSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMycsXG4gICAgICAgIGVmZmVjdDogeVJhY2UsXG4gICAgICAgIHN0YXRlVXBkYXRlcjogc2V0UmFjZU91dHB1dFxuICAgICAgfTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiByYWNlT3V0cHV0LmRlYm91bmNlID8ge1xuICAgICAgICBuZXh0U3RhdGU6ICdxMScsXG4gICAgICAgIGVmZmVjdDogeUZvcmsoYWN0aW9uKVxuICAgICAgfSA6IHtcbiAgICAgICAgbmV4dFN0YXRlOiAncTInLFxuICAgICAgICBlZmZlY3Q6IHlOb29wKHJhY2VPdXRwdXQuYWN0aW9uKSxcbiAgICAgICAgc3RhdGVVcGRhdGVyOiBzZXRBY3Rpb25cbiAgICAgIH07XG4gICAgfVxuICB9LCAncTEnLCBcImRlYm91bmNlKFwiICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyBcIiwgXCIgKyB3b3JrZXIubmFtZSArIFwiKVwiKTtcbn1cblxudmFyIHZhbGlkYXRlVGFrZUVmZmVjdCA9IGZ1bmN0aW9uIHZhbGlkYXRlVGFrZUVmZmVjdChmbiwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGNoZWNrKHBhdHRlcm5PckNoYW5uZWwsIG5vdFVuZGVmLCBmbi5uYW1lICsgXCIgcmVxdWlyZXMgYSBwYXR0ZXJuIG9yIGNoYW5uZWxcIik7XG4gIGNoZWNrKHdvcmtlciwgbm90VW5kZWYsIGZuLm5hbWUgKyBcIiByZXF1aXJlcyBhIHNhZ2EgcGFyYW1ldGVyXCIpO1xufTtcblxuZnVuY3Rpb24gdGFrZUV2ZXJ5JDEocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVUYWtlRWZmZWN0KHRha2VFdmVyeSQxLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbdGFrZUV2ZXJ5LCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiB0YWtlTGF0ZXN0JDEocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVUYWtlRWZmZWN0KHRha2VMYXRlc3QkMSwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHZvaWQgMCwgW3Rha2VMYXRlc3QsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIHRha2VMZWFkaW5nJDEocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFsaWRhdGVUYWtlRWZmZWN0KHRha2VMZWFkaW5nJDEsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcik7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAyID8gX2xlbjMgLSAyIDogMCksIF9rZXkzID0gMjsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTMgLSAyXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh2b2lkIDAsIFt0YWtlTGVhZGluZywgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuZnVuY3Rpb24gdGhyb3R0bGUkMShtcywgcGF0dGVybiwgd29ya2VyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2socGF0dGVybiwgbm90VW5kZWYsICd0aHJvdHRsZSByZXF1aXJlcyBhIHBhdHRlcm4nKTtcbiAgICBjaGVjayh3b3JrZXIsIG5vdFVuZGVmLCAndGhyb3R0bGUgcmVxdWlyZXMgYSBzYWdhIHBhcmFtZXRlcicpO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMyA/IF9sZW40IC0gMyA6IDApLCBfa2V5NCA9IDM7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gM10gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbdGhyb3R0bGUsIG1zLCBwYXR0ZXJuLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5mdW5jdGlvbiByZXRyeSQxKG1heFRyaWVzLCBkZWxheUxlbmd0aCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSA+IDMgPyBfbGVuNSAtIDMgOiAwKSwgX2tleTUgPSAzOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NSAtIDNdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIHJldHVybiBjYWxsLmFwcGx5KHZvaWQgMCwgW3JldHJ5LCBtYXhUcmllcywgZGVsYXlMZW5ndGgsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cbmZ1bmN0aW9uIGRlYm91bmNlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42ID4gMyA/IF9sZW42IC0gMyA6IDApLCBfa2V5NiA9IDM7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBhcmdzW19rZXk2IC0gM10gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodm9pZCAwLCBbZGVib3VuY2VIZWxwZXIsIGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5cbmV4cG9ydCB7IGRlYm91bmNlLCByZXRyeSQxIGFzIHJldHJ5LCB0YWtlRXZlcnkkMSBhcyB0YWtlRXZlcnksIHRha2VMYXRlc3QkMSBhcyB0YWtlTGF0ZXN0LCB0YWtlTGVhZGluZyQxIGFzIHRha2VMZWFkaW5nLCB0aHJvdHRsZSQxIGFzIHRocm90dGxlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCB7IENBTkNFTCB9IGZyb20gJ0ByZWR1eC1zYWdhL3N5bWJvbHMnO1xuXG5mdW5jdGlvbiBkZWxheVAobXMsIHZhbCkge1xuICBpZiAodmFsID09PSB2b2lkIDApIHtcbiAgICB2YWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHRpbWVvdXRJZDtcbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMsIHZhbCk7XG4gIH0pO1xuXG4gIHByb21pc2VbQ0FOQ0VMXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgfTtcblxuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsYXlQO1xuIiwiaW1wb3J0IHsgVEFTSywgU0FHQV9BQ1RJT04sIE1VTFRJQ0FTVCwgSU8gfSBmcm9tICdAcmVkdXgtc2FnYS9zeW1ib2xzJztcblxudmFyIHVuZGVmID0gZnVuY3Rpb24gdW5kZWYodikge1xuICByZXR1cm4gdiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQ7XG59O1xudmFyIG5vdFVuZGVmID0gZnVuY3Rpb24gbm90VW5kZWYodikge1xuICByZXR1cm4gdiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQ7XG59O1xudmFyIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKGYpIHtcbiAgcmV0dXJuIHR5cGVvZiBmID09PSAnZnVuY3Rpb24nO1xufTtcbnZhciBudW1iZXIgPSBmdW5jdGlvbiBudW1iZXIobikge1xuICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInO1xufTtcbnZhciBzdHJpbmcgPSBmdW5jdGlvbiBzdHJpbmcocykge1xuICByZXR1cm4gdHlwZW9mIHMgPT09ICdzdHJpbmcnO1xufTtcbnZhciBhcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgb2JqZWN0ID0gZnVuY3Rpb24gb2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqICYmICFhcnJheShvYmopICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcbnZhciBwcm9taXNlID0gZnVuY3Rpb24gcHJvbWlzZShwKSB7XG4gIHJldHVybiBwICYmIGZ1bmMocC50aGVuKTtcbn07XG52YXIgaXRlcmF0b3IgPSBmdW5jdGlvbiBpdGVyYXRvcihpdCkge1xuICByZXR1cm4gaXQgJiYgZnVuYyhpdC5uZXh0KSAmJiBmdW5jKGl0LnRocm93KTtcbn07XG52YXIgaXRlcmFibGUgPSBmdW5jdGlvbiBpdGVyYWJsZShpdCkge1xuICByZXR1cm4gaXQgJiYgZnVuYyhTeW1ib2wpID8gZnVuYyhpdFtTeW1ib2wuaXRlcmF0b3JdKSA6IGFycmF5KGl0KTtcbn07XG52YXIgdGFzayA9IGZ1bmN0aW9uIHRhc2sodCkge1xuICByZXR1cm4gdCAmJiB0W1RBU0tdO1xufTtcbnZhciBzYWdhQWN0aW9uID0gZnVuY3Rpb24gc2FnYUFjdGlvbihhKSB7XG4gIHJldHVybiBCb29sZWFuKGEgJiYgYVtTQUdBX0FDVElPTl0pO1xufTtcbnZhciBvYnNlcnZhYmxlID0gZnVuY3Rpb24gb2JzZXJ2YWJsZShvYikge1xuICByZXR1cm4gb2IgJiYgZnVuYyhvYi5zdWJzY3JpYmUpO1xufTtcbnZhciBidWZmZXIgPSBmdW5jdGlvbiBidWZmZXIoYnVmKSB7XG4gIHJldHVybiBidWYgJiYgZnVuYyhidWYuaXNFbXB0eSkgJiYgZnVuYyhidWYudGFrZSkgJiYgZnVuYyhidWYucHV0KTtcbn07XG52YXIgcGF0dGVybiA9IGZ1bmN0aW9uIHBhdHRlcm4ocGF0KSB7XG4gIHJldHVybiBwYXQgJiYgKHN0cmluZyhwYXQpIHx8IHN5bWJvbChwYXQpIHx8IGZ1bmMocGF0KSB8fCBhcnJheShwYXQpICYmIHBhdC5ldmVyeShwYXR0ZXJuKSk7XG59O1xudmFyIGNoYW5uZWwgPSBmdW5jdGlvbiBjaGFubmVsKGNoKSB7XG4gIHJldHVybiBjaCAmJiBmdW5jKGNoLnRha2UpICYmIGZ1bmMoY2guY2xvc2UpO1xufTtcbnZhciBzdHJpbmdhYmxlRnVuYyA9IGZ1bmN0aW9uIHN0cmluZ2FibGVGdW5jKGYpIHtcbiAgcmV0dXJuIGZ1bmMoZikgJiYgZi5oYXNPd25Qcm9wZXJ0eSgndG9TdHJpbmcnKTtcbn07XG52YXIgc3ltYm9sID0gZnVuY3Rpb24gc3ltYm9sKHN5bSkge1xuICByZXR1cm4gQm9vbGVhbihzeW0pICYmIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgc3ltLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgc3ltICE9PSBTeW1ib2wucHJvdG90eXBlO1xufTtcbnZhciBtdWx0aWNhc3QgPSBmdW5jdGlvbiBtdWx0aWNhc3QoY2gpIHtcbiAgcmV0dXJuIGNoYW5uZWwoY2gpICYmIGNoW01VTFRJQ0FTVF07XG59O1xudmFyIGVmZmVjdCA9IGZ1bmN0aW9uIGVmZmVjdChlZmYpIHtcbiAgcmV0dXJuIGVmZiAmJiBlZmZbSU9dO1xufTtcblxuZXhwb3J0IHsgdW5kZWYsIG5vdFVuZGVmLCBmdW5jLCBudW1iZXIsIHN0cmluZywgYXJyYXksIG9iamVjdCwgcHJvbWlzZSwgaXRlcmF0b3IsIGl0ZXJhYmxlLCB0YXNrLCBzYWdhQWN0aW9uLCBvYnNlcnZhYmxlLCBidWZmZXIsIHBhdHRlcm4sIGNoYW5uZWwsIHN0cmluZ2FibGVGdW5jLCBzeW1ib2wsIG11bHRpY2FzdCwgZWZmZWN0IH07XG4iLCJ2YXIgY3JlYXRlU3ltYm9sID0gZnVuY3Rpb24gY3JlYXRlU3ltYm9sKG5hbWUpIHtcbiAgcmV0dXJuIFwiQEByZWR1eC1zYWdhL1wiICsgbmFtZTtcbn07XG5cbnZhciBDQU5DRUwgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdDQU5DRUxfUFJPTUlTRScpO1xudmFyIENIQU5ORUxfRU5EX1RZUEUgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdDSEFOTkVMX0VORCcpO1xudmFyIElPID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnSU8nKTtcbnZhciBNQVRDSCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVTeW1ib2woJ01BVENIJyk7XG52YXIgTVVMVElDQVNUID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnTVVMVElDQVNUJyk7XG52YXIgU0FHQV9BQ1RJT04gPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdTQUdBX0FDVElPTicpO1xudmFyIFNFTEZfQ0FOQ0VMTEFUSU9OID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnU0VMRl9DQU5DRUxMQVRJT04nKTtcbnZhciBUQVNLID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnVEFTSycpO1xudmFyIFRBU0tfQ0FOQ0VMID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnVEFTS19DQU5DRUwnKTtcbnZhciBURVJNSU5BVEUgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlU3ltYm9sKCdURVJNSU5BVEUnKTtcbnZhciBTQUdBX0xPQ0FUSU9OID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVN5bWJvbCgnTE9DQVRJT04nKTtcblxuZXhwb3J0IHsgQ0FOQ0VMLCBDSEFOTkVMX0VORF9UWVBFLCBJTywgTUFUQ0gsIE1VTFRJQ0FTVCwgU0FHQV9BQ1RJT04sIFNFTEZfQ0FOQ0VMTEFUSU9OLCBUQVNLLCBUQVNLX0NBTkNFTCwgVEVSTUlOQVRFLCBTQUdBX0xPQ0FUSU9OIH07XG4iLCJleHBvcnQgKiBmcm9tICdAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHMnO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBpbW11dGFibGVJbml0KGNvbmZpZykge1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL3YxNS4wLjEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjFcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvciAmJiBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEVfRkFMTEJBQ0sgPSAweGVhYzc7XG5cbiAgdmFyIGdsb2JhbENvbmZpZyA9IHtcbiAgICB1c2Vfc3RhdGljOiBmYWxzZVxuICB9O1xuICBpZiAoaXNPYmplY3QoY29uZmlnKSkge1xuICAgICAgaWYgKGNvbmZpZy51c2Vfc3RhdGljICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBnbG9iYWxDb25maWcudXNlX3N0YXRpYyA9IEJvb2xlYW4oY29uZmlnLnVzZV9zdGF0aWMpO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNPYmplY3QoZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICFBcnJheS5pc0FycmF5KGRhdGEpICYmXG4gICAgICBkYXRhICE9PSBudWxsXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3RhbnRpYXRlRW1wdHlPYmplY3Qob2JqKSB7XG4gICAgICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG4gICAgICBpZiAoIXByb3RvdHlwZSkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb3BlcnR5VG8odGFyZ2V0LCBtZXRob2ROYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYmFuUHJvcGVydHkodGFyZ2V0LCBtZXRob2ROYW1lKSB7XG4gICAgYWRkUHJvcGVydHlUbyh0YXJnZXQsIG1ldGhvZE5hbWUsIGZ1bmN0aW9uKCkge1xuICAgICAgdGhyb3cgbmV3IEltbXV0YWJsZUVycm9yKFwiVGhlIFwiICsgbWV0aG9kTmFtZSArXG4gICAgICAgIFwiIG1ldGhvZCBjYW5ub3QgYmUgaW52b2tlZCBvbiBhbiBJbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUuXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGltbXV0YWJpbGl0eVRhZyA9IFwiX19pbW11dGFibGVfaW52YXJpYW50c19ob2xkXCI7XG5cbiAgZnVuY3Rpb24gYWRkSW1tdXRhYmlsaXR5VGFnKHRhcmdldCkge1xuICAgIGFkZFByb3BlcnR5VG8odGFyZ2V0LCBpbW11dGFiaWxpdHlUYWcsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJbW11dGFibGUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQgPT09IG51bGwgfHwgQm9vbGVhbihcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGltbXV0YWJpbGl0eVRhZylcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEluIEphdmFTY3JpcHQsIG9ubHkgb2JqZWN0cyBhcmUgZXZlbiBwb3RlbnRpYWxseSBtdXRhYmxlLlxuICAgICAgLy8gc3RyaW5ncywgbnVtYmVycywgbnVsbCwgYW5kIHVuZGVmaW5lZCBhcmUgYWxsIG5hdHVyYWxseSBpbW11dGFibGUuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0VxdWFsKGEsIGIpIHtcbiAgICAvLyBBdm9pZCBmYWxzZSBwb3NpdGl2ZXMgZHVlIHRvIChOYU4gIT09IE5hTikgZXZhbHVhdGluZyB0byB0cnVlXG4gICAgcmV0dXJuIChhID09PSBiIHx8IChhICE9PSBhICYmIGIgIT09IGIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTWVyZ2FibGVPYmplY3QodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldCAhPT0gbnVsbCAmJiB0eXBlb2YgdGFyZ2V0ID09PSBcIm9iamVjdFwiICYmICEoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSAmJiAhKHRhcmdldCBpbnN0YW5jZW9mIERhdGUpO1xuICB9XG5cbiAgdmFyIG11dGF0aW5nT2JqZWN0TWV0aG9kcyA9IFtcbiAgICBcInNldFByb3RvdHlwZU9mXCJcbiAgXTtcblxuICB2YXIgbm9uTXV0YXRpbmdPYmplY3RNZXRob2RzID0gW1xuICAgIFwia2V5c1wiXG4gIF07XG5cbiAgdmFyIG11dGF0aW5nQXJyYXlNZXRob2RzID0gbXV0YXRpbmdPYmplY3RNZXRob2RzLmNvbmNhdChbXG4gICAgXCJwdXNoXCIsIFwicG9wXCIsIFwic29ydFwiLCBcInNwbGljZVwiLCBcInNoaWZ0XCIsIFwidW5zaGlmdFwiLCBcInJldmVyc2VcIlxuICBdKTtcblxuICB2YXIgbm9uTXV0YXRpbmdBcnJheU1ldGhvZHMgPSBub25NdXRhdGluZ09iamVjdE1ldGhvZHMuY29uY2F0KFtcbiAgICBcIm1hcFwiLCBcImZpbHRlclwiLCBcInNsaWNlXCIsIFwiY29uY2F0XCIsIFwicmVkdWNlXCIsIFwicmVkdWNlUmlnaHRcIlxuICBdKTtcblxuICB2YXIgbXV0YXRpbmdEYXRlTWV0aG9kcyA9IG11dGF0aW5nT2JqZWN0TWV0aG9kcy5jb25jYXQoW1xuICAgIFwic2V0RGF0ZVwiLCBcInNldEZ1bGxZZWFyXCIsIFwic2V0SG91cnNcIiwgXCJzZXRNaWxsaXNlY29uZHNcIiwgXCJzZXRNaW51dGVzXCIsIFwic2V0TW9udGhcIiwgXCJzZXRTZWNvbmRzXCIsXG4gICAgXCJzZXRUaW1lXCIsIFwic2V0VVRDRGF0ZVwiLCBcInNldFVUQ0Z1bGxZZWFyXCIsIFwic2V0VVRDSG91cnNcIiwgXCJzZXRVVENNaWxsaXNlY29uZHNcIiwgXCJzZXRVVENNaW51dGVzXCIsXG4gICAgXCJzZXRVVENNb250aFwiLCBcInNldFVUQ1NlY29uZHNcIiwgXCJzZXRZZWFyXCJcbiAgXSk7XG5cbiAgZnVuY3Rpb24gSW1tdXRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubmFtZSA9ICdNeUVycm9yJztcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xuICB9XG4gIEltbXV0YWJsZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuICBJbW11dGFibGVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFcnJvcjtcblxuICBmdW5jdGlvbiBtYWtlSW1tdXRhYmxlKG9iaiwgYmFubmVkTWV0aG9kcykge1xuICAgIC8vIFRhZyBpdCBzbyB3ZSBjYW4gcXVpY2tseSB0ZWxsIGl0J3MgaW1tdXRhYmxlIGxhdGVyLlxuICAgIGFkZEltbXV0YWJpbGl0eVRhZyhvYmopO1xuXG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIC8vIE1ha2UgYWxsIG11dGF0aW5nIG1ldGhvZHMgdGhyb3cgZXhjZXB0aW9ucy5cbiAgICAgIGZvciAodmFyIGluZGV4IGluIGJhbm5lZE1ldGhvZHMpIHtcbiAgICAgICAgaWYgKGJhbm5lZE1ldGhvZHMuaGFzT3duUHJvcGVydHkoaW5kZXgpKSB7XG4gICAgICAgICAgYmFuUHJvcGVydHkob2JqLCBiYW5uZWRNZXRob2RzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRnJlZXplIGl0IGFuZCByZXR1cm4gaXQuXG4gICAgICBPYmplY3QuZnJlZXplKG9iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VNZXRob2RSZXR1cm5JbW11dGFibGUob2JqLCBtZXRob2ROYW1lKSB7XG4gICAgdmFyIGN1cnJlbnRNZXRob2QgPSBvYmpbbWV0aG9kTmFtZV07XG5cbiAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgbWV0aG9kTmFtZSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gSW1tdXRhYmxlKGN1cnJlbnRNZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFycmF5U2V0KGlkeCwgdmFsdWUsIGNvbmZpZykge1xuICAgIHZhciBkZWVwICAgICAgICAgID0gY29uZmlnICYmIGNvbmZpZy5kZWVwO1xuXG4gICAgaWYgKGlkeCBpbiB0aGlzKSB7XG4gICAgICBpZiAoZGVlcCAmJiB0aGlzW2lkeF0gIT09IHZhbHVlICYmIGlzTWVyZ2FibGVPYmplY3QodmFsdWUpICYmIGlzTWVyZ2FibGVPYmplY3QodGhpc1tpZHhdKSkge1xuICAgICAgICB2YWx1ZSA9IEltbXV0YWJsZS5tZXJnZSh0aGlzW2lkeF0sIHZhbHVlLCB7ZGVlcDogdHJ1ZSwgbW9kZTogJ3JlcGxhY2UnfSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNFcXVhbCh0aGlzW2lkeF0sIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbXV0YWJsZSA9IGFzTXV0YWJsZUFycmF5LmNhbGwodGhpcyk7XG4gICAgbXV0YWJsZVtpZHhdID0gSW1tdXRhYmxlKHZhbHVlKTtcbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZUFycmF5KG11dGFibGUpO1xuICB9XG5cbiAgdmFyIGltbXV0YWJsZUVtcHR5QXJyYXkgPSBJbW11dGFibGUoW10pO1xuXG4gIGZ1bmN0aW9uIGFycmF5U2V0SW4ocHRoLCB2YWx1ZSwgY29uZmlnKSB7XG4gICAgdmFyIGhlYWQgPSBwdGhbMF07XG5cbiAgICBpZiAocHRoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGFycmF5U2V0LmNhbGwodGhpcywgaGVhZCwgdmFsdWUsIGNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0YWlsID0gcHRoLnNsaWNlKDEpO1xuICAgICAgdmFyIHRoaXNIZWFkID0gdGhpc1toZWFkXTtcbiAgICAgIHZhciBuZXdWYWx1ZTtcblxuICAgICAgaWYgKHR5cGVvZih0aGlzSGVhZCkgPT09IFwib2JqZWN0XCIgJiYgdGhpc0hlYWQgIT09IG51bGwpIHtcbiAgICAgICAgLy8gTWlnaHQgKHZhbGlkbHkpIGJlIG9iamVjdCBvciBhcnJheVxuICAgICAgICBuZXdWYWx1ZSA9IEltbXV0YWJsZS5zZXRJbih0aGlzSGVhZCwgdGFpbCwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5leHRIZWFkID0gdGFpbFswXTtcbiAgICAgICAgLy8gSWYgdGhlIG5leHQgcGF0aCBwYXJ0IGlzIGEgbnVtYmVyLCB0aGVuIHdlIGFyZSBzZXR0aW5nIGludG8gYW4gYXJyYXksIGVsc2UgYW4gb2JqZWN0LlxuICAgICAgICBpZiAobmV4dEhlYWQgIT09ICcnICYmIGlzRmluaXRlKG5leHRIZWFkKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gYXJyYXlTZXRJbi5jYWxsKGltbXV0YWJsZUVtcHR5QXJyYXksIHRhaWwsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IG9iamVjdFNldEluLmNhbGwoaW1tdXRhYmxlRW1wdHlPYmplY3QsIHRhaWwsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaGVhZCBpbiB0aGlzICYmIHRoaXNIZWFkID09PSBuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG11dGFibGUgPSBhc011dGFibGVBcnJheS5jYWxsKHRoaXMpO1xuICAgICAgbXV0YWJsZVtoZWFkXSA9IG5ld1ZhbHVlO1xuICAgICAgcmV0dXJuIG1ha2VJbW11dGFibGVBcnJheShtdXRhYmxlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlSW1tdXRhYmxlQXJyYXkoYXJyYXkpIHtcbiAgICAvLyBEb24ndCBjaGFuZ2UgdGhlaXIgaW1wbGVtZW50YXRpb25zLCBidXQgd3JhcCB0aGVzZSBmdW5jdGlvbnMgdG8gbWFrZSBzdXJlXG4gICAgLy8gdGhleSBhbHdheXMgcmV0dXJuIGFuIGltbXV0YWJsZSB2YWx1ZS5cbiAgICBmb3IgKHZhciBpbmRleCBpbiBub25NdXRhdGluZ0FycmF5TWV0aG9kcykge1xuICAgICAgaWYgKG5vbk11dGF0aW5nQXJyYXlNZXRob2RzLmhhc093blByb3BlcnR5KGluZGV4KSkge1xuICAgICAgICB2YXIgbWV0aG9kTmFtZSA9IG5vbk11dGF0aW5nQXJyYXlNZXRob2RzW2luZGV4XTtcbiAgICAgICAgbWFrZU1ldGhvZFJldHVybkltbXV0YWJsZShhcnJheSwgbWV0aG9kTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFnbG9iYWxDb25maWcudXNlX3N0YXRpYykge1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJmbGF0TWFwXCIsICBmbGF0TWFwKTtcbiAgICAgIGFkZFByb3BlcnR5VG8oYXJyYXksIFwiYXNPYmplY3RcIiwgYXNPYmplY3QpO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJhc011dGFibGVcIiwgYXNNdXRhYmxlQXJyYXkpO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJzZXRcIiwgYXJyYXlTZXQpO1xuICAgICAgYWRkUHJvcGVydHlUbyhhcnJheSwgXCJzZXRJblwiLCBhcnJheVNldEluKTtcbiAgICAgIGFkZFByb3BlcnR5VG8oYXJyYXksIFwidXBkYXRlXCIsIHVwZGF0ZSk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGFycmF5LCBcInVwZGF0ZUluXCIsIHVwZGF0ZUluKTtcbiAgICAgIGFkZFByb3BlcnR5VG8oYXJyYXksIFwiZ2V0SW5cIiwgZ2V0SW4pO1xuICAgIH1cblxuICAgIGZvcih2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnJheVtpXSA9IEltbXV0YWJsZShhcnJheVtpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGUoYXJyYXksIG11dGF0aW5nQXJyYXlNZXRob2RzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VJbW11dGFibGVEYXRlKGRhdGUpIHtcbiAgICBpZiAoIWdsb2JhbENvbmZpZy51c2Vfc3RhdGljKSB7XG4gICAgICBhZGRQcm9wZXJ0eVRvKGRhdGUsIFwiYXNNdXRhYmxlXCIsIGFzTXV0YWJsZURhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlKGRhdGUsIG11dGF0aW5nRGF0ZU1ldGhvZHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNNdXRhYmxlRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRUaW1lKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVmZmVjdGl2ZWx5IHBlcmZvcm1zIGEgbWFwKCkgb3ZlciB0aGUgZWxlbWVudHMgaW4gdGhlIGFycmF5LCB1c2luZyB0aGVcbiAgICogcHJvdmlkZWQgaXRlcmF0b3IsIGV4Y2VwdCB0aGF0IHdoZW5ldmVyIHRoZSBpdGVyYXRvciByZXR1cm5zIGFuIGFycmF5LCB0aGF0XG4gICAqIGFycmF5J3MgZWxlbWVudHMgYXJlIGFkZGVkIHRvIHRoZSBmaW5hbCByZXN1bHQgaW5zdGVhZCBvZiB0aGUgYXJyYXkgaXRzZWxmLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBpdGVyYXRvciAtIFRoZSBpdGVyYXRvciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCBvbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5LiBJdCB3aWxsIHJlY2VpdmUgdGhyZWUgYXJndW1lbnRzOiB0aGUgY3VycmVudCB2YWx1ZSwgdGhlIGN1cnJlbnQgaW5kZXgsIGFuZCB0aGUgY3VycmVudCBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBmbGF0TWFwKGl0ZXJhdG9yKSB7XG4gICAgLy8gQ2FsbGluZyAuZmxhdE1hcCgpIHdpdGggbm8gYXJndW1lbnRzIGlzIGEgbm8tb3AuIERvbid0IGJvdGhlciBjbG9uaW5nLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoLFxuICAgICAgICBpbmRleDtcblxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGl0ZXJhdG9yUmVzdWx0ID0gaXRlcmF0b3IodGhpc1tpbmRleF0sIGluZGV4LCB0aGlzKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlcmF0b3JSZXN1bHQpKSB7XG4gICAgICAgIC8vIENvbmNhdGVuYXRlIEFycmF5IHJlc3VsdHMgaW50byB0aGUgcmV0dXJuIHZhbHVlIHdlJ3JlIGJ1aWxkaW5nIHVwLlxuICAgICAgICByZXN1bHQucHVzaC5hcHBseShyZXN1bHQsIGl0ZXJhdG9yUmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBub24tQXJyYXkgcmVzdWx0cyB0aGUgc2FtZSB3YXkgbWFwKCkgZG9lcy5cbiAgICAgICAgcmVzdWx0LnB1c2goaXRlcmF0b3JSZXN1bHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW1tdXRhYmxlQXJyYXkocmVzdWx0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIEltbXV0YWJsZSBjb3B5IG9mIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgZ2l2ZW4ga2V5cyBpbmNsdWRlZC5cbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0ga2V5c1RvUmVtb3ZlIC0gQSBsaXN0IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIHRoZSBrZXlzIHRvIGV4Y2x1ZGUgaW4gdGhlIHJldHVybiB2YWx1ZS4gSW5zdGVhZCBvZiBwcm92aWRpbmcgYSBzaW5nbGUgYXJyYXksIHRoaXMgbWV0aG9kIGNhbiBhbHNvIGJlIGNhbGxlZCBieSBwYXNzaW5nIG11bHRpcGxlIHN0cmluZ3MgYXMgc2VwYXJhdGUgYXJndW1lbnRzLlxuICAgKi9cbiAgZnVuY3Rpb24gd2l0aG91dChyZW1vdmUpIHtcbiAgICAvLyBDYWxsaW5nIC53aXRob3V0KCkgd2l0aCBubyBhcmd1bWVudHMgaXMgYSBuby1vcC4gRG9uJ3QgYm90aGVyIGNsb25pbmcuXG4gICAgaWYgKHR5cGVvZiByZW1vdmUgPT09IFwidW5kZWZpbmVkXCIgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZW1vdmUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgLy8gSWYgd2Ugd2VyZW4ndCBnaXZlbiBhbiBhcnJheSwgdXNlIHRoZSBhcmd1bWVudHMgbGlzdC5cbiAgICAgIHZhciBrZXlzVG9SZW1vdmVBcnJheSA9IChBcnJheS5pc0FycmF5KHJlbW92ZSkpID9cbiAgICAgICAgIHJlbW92ZS5zbGljZSgpIDogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgLy8gQ29udmVydCBudW1lcmljIGtleXMgdG8gc3RyaW5ncyBzaW5jZSB0aGF0J3MgaG93IHRoZXknbGxcbiAgICAgIC8vIGNvbWUgZnJvbSB0aGUgZW51bWVyYXRpb24gb2YgdGhlIG9iamVjdC5cbiAgICAgIGtleXNUb1JlbW92ZUFycmF5LmZvckVhY2goZnVuY3Rpb24oZWwsIGlkeCwgYXJyKSB7XG4gICAgICAgIGlmKHR5cGVvZihlbCkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBhcnJbaWR4XSA9IGVsLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZW1vdmUgPSBmdW5jdGlvbih2YWwsIGtleSkge1xuICAgICAgICByZXR1cm4ga2V5c1RvUmVtb3ZlQXJyYXkuaW5kZXhPZihrZXkpICE9PSAtMTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IGluc3RhbnRpYXRlRW1wdHlPYmplY3QodGhpcyk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcykge1xuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiByZW1vdmUodGhpc1trZXldLCBrZXkpID09PSBmYWxzZSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZU9iamVjdChyZXN1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNNdXRhYmxlQXJyYXkob3B0cykge1xuICAgIHZhciByZXN1bHQgPSBbXSwgaSwgbGVuZ3RoO1xuXG4gICAgaWYob3B0cyAmJiBvcHRzLmRlZXApIHtcbiAgICAgIGZvcihpID0gMCwgbGVuZ3RoID0gdGhpcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChhc0RlZXBNdXRhYmxlKHRoaXNbaV0pKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yKGkgPSAwLCBsZW5ndGggPSB0aGlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHRoaXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogRWZmZWN0aXZlbHkgcGVyZm9ybXMgYSBbbWFwXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApIG92ZXIgdGhlIGVsZW1lbnRzIGluIHRoZSBhcnJheSwgZXhwZWN0aW5nIHRoYXQgdGhlIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gICAqIHdpbGwgcmV0dXJuIGFuIGFycmF5IG9mIHR3byBlbGVtZW50cyAtIHRoZSBmaXJzdCByZXByZXNlbnRpbmcgYSBrZXksIHRoZSBvdGhlclxuICAgKiBhIHZhbHVlLiBUaGVuIHJldHVybnMgYW4gSW1tdXRhYmxlIE9iamVjdCBjb25zdHJ1Y3RlZCBvZiB0aG9zZSBrZXlzIGFuZCB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGl0ZXJhdG9yIC0gQSBmdW5jdGlvbiB3aGljaCBzaG91bGQgcmV0dXJuIGFuIGFycmF5IG9mIHR3byBlbGVtZW50cyAtIHRoZSBmaXJzdCByZXByZXNlbnRpbmcgdGhlIGRlc2lyZWQga2V5LCB0aGUgb3RoZXIgdGhlIGRlc2lyZWQgdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiBhc09iamVjdChpdGVyYXRvcikge1xuICAgIC8vIElmIG5vIGl0ZXJhdG9yIHdhcyBwcm92aWRlZCwgYXNzdW1lIHRoZSBpZGVudGl0eSBmdW5jdGlvblxuICAgIC8vIChzdWdnZXN0aW5nIHRoaXMgYXJyYXkgaXMgYWxyZWFkeSBhIGxpc3Qgb2Yga2V5L3ZhbHVlIHBhaXJzLilcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGl0ZXJhdG9yID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7fSxcbiAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGgsXG4gICAgICAgIGluZGV4O1xuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgcGFpciAgPSBpdGVyYXRvcih0aGlzW2luZGV4XSwgaW5kZXgsIHRoaXMpLFxuICAgICAgICAgIGtleSAgID0gcGFpclswXSxcbiAgICAgICAgICB2YWx1ZSA9IHBhaXJbMV07XG5cbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGVPYmplY3QocmVzdWx0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzRGVlcE11dGFibGUob2JqKSB7XG4gICAgaWYgKFxuICAgICAgKCFvYmopIHx8XG4gICAgICAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHx8XG4gICAgICAoIU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBpbW11dGFiaWxpdHlUYWcpKSB8fFxuICAgICAgKG9iaiBpbnN0YW5jZW9mIERhdGUpXG4gICAgKSB7IHJldHVybiBvYmo7IH1cbiAgICByZXR1cm4gSW1tdXRhYmxlLmFzTXV0YWJsZShvYmosIHtkZWVwOiB0cnVlfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja0NvcHkoc3JjLCBkZXN0KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3JjLCBrZXkpKSB7XG4gICAgICAgIGRlc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSW1tdXRhYmxlIE9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgb2YgYm90aFxuICAgKiB0aGlzIG9iamVjdCBhbmQgdGhlIHByb3ZpZGVkIG9iamVjdCwgcHJpb3JpdGl6aW5nIHRoZSBwcm92aWRlZCBvYmplY3Qnc1xuICAgKiB2YWx1ZXMgd2hlbmV2ZXIgdGhlIHNhbWUga2V5IGlzIHByZXNlbnQgaW4gYm90aCBvYmplY3RzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3RoZXIgLSBUaGUgb3RoZXIgb2JqZWN0IHRvIG1lcmdlLiBNdWx0aXBsZSBvYmplY3RzIGNhbiBiZSBwYXNzZWQgYXMgYW4gYXJyYXkuIEluIHN1Y2ggYSBjYXNlLCB0aGUgbGF0ZXIgYW4gb2JqZWN0IGFwcGVhcnMgaW4gdGhhdCBsaXN0LCB0aGUgaGlnaGVyIGl0cyBwcmlvcml0eS5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIE9wdGlvbmFsIGNvbmZpZyBvYmplY3QgdGhhdCBjb250YWlucyBzZXR0aW5ncy4gU3VwcG9ydGVkIHNldHRpbmdzIGFyZToge2RlZXA6IHRydWV9IGZvciBkZWVwIG1lcmdlIGFuZCB7bWVyZ2VyOiBtZXJnZXJGdW5jfSB3aGVyZSBtZXJnZXJGdW5jIGlzIGEgZnVuY3Rpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgdGFrZXMgYSBwcm9wZXJ0eSBmcm9tIGJvdGggb2JqZWN0cy4gSWYgYW55dGhpbmcgaXMgcmV0dXJuZWQgaXQgb3ZlcnJpZGVzIHRoZSBub3JtYWwgbWVyZ2UgYmVoYXZpb3VyLlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2Uob3RoZXIsIGNvbmZpZykge1xuICAgIC8vIENhbGxpbmcgLm1lcmdlKCkgd2l0aCBubyBhcmd1bWVudHMgaXMgYSBuby1vcC4gRG9uJ3QgYm90aGVyIGNsb25pbmcuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChvdGhlciA9PT0gbnVsbCB8fCAodHlwZW9mIG90aGVyICE9PSBcIm9iamVjdFwiKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkltbXV0YWJsZSNtZXJnZSBjYW4gb25seSBiZSBpbnZva2VkIHdpdGggb2JqZWN0cyBvciBhcnJheXMsIG5vdCBcIiArIEpTT04uc3RyaW5naWZ5KG90aGVyKSk7XG4gICAgfVxuXG4gICAgdmFyIHJlY2VpdmVkQXJyYXkgPSAoQXJyYXkuaXNBcnJheShvdGhlcikpLFxuICAgICAgICBkZWVwICAgICAgICAgID0gY29uZmlnICYmIGNvbmZpZy5kZWVwLFxuICAgICAgICBtb2RlICAgICAgICAgID0gY29uZmlnICYmIGNvbmZpZy5tb2RlIHx8ICdtZXJnZScsXG4gICAgICAgIG1lcmdlciAgICAgICAgPSBjb25maWcgJiYgY29uZmlnLm1lcmdlcixcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgLy8gVXNlIHRoZSBnaXZlbiBrZXkgdG8gZXh0cmFjdCBhIHZhbHVlIGZyb20gdGhlIGdpdmVuIG9iamVjdCwgdGhlbiBwbGFjZVxuICAgIC8vIHRoYXQgdmFsdWUgaW4gdGhlIHJlc3VsdCBvYmplY3QgdW5kZXIgdGhlIHNhbWUga2V5LiBJZiB0aGF0IHJlc3VsdGVkXG4gICAgLy8gaW4gYSBjaGFuZ2UgZnJvbSB0aGlzIG9iamVjdCdzIHZhbHVlIGF0IHRoYXQga2V5LCBzZXQgYW55Q2hhbmdlcyA9IHRydWUuXG4gICAgZnVuY3Rpb24gYWRkVG9SZXN1bHQoY3VycmVudE9iaiwgb3RoZXJPYmosIGtleSkge1xuICAgICAgdmFyIGltbXV0YWJsZVZhbHVlID0gSW1tdXRhYmxlKG90aGVyT2JqW2tleV0pO1xuICAgICAgdmFyIG1lcmdlclJlc3VsdCA9IG1lcmdlciAmJiBtZXJnZXIoY3VycmVudE9ialtrZXldLCBpbW11dGFibGVWYWx1ZSwgY29uZmlnKTtcbiAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50T2JqW2tleV07XG5cbiAgICAgIGlmICgocmVzdWx0ICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgIChtZXJnZXJSZXN1bHQgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgKCFjdXJyZW50T2JqLmhhc093blByb3BlcnR5KGtleSkpIHx8XG4gICAgICAgICFpc0VxdWFsKGltbXV0YWJsZVZhbHVlLCBjdXJyZW50VmFsdWUpKSB7XG5cbiAgICAgICAgdmFyIG5ld1ZhbHVlO1xuXG4gICAgICAgIGlmIChtZXJnZXJSZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gbWVyZ2VyUmVzdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKGRlZXAgJiYgaXNNZXJnYWJsZU9iamVjdChjdXJyZW50VmFsdWUpICYmIGlzTWVyZ2FibGVPYmplY3QoaW1tdXRhYmxlVmFsdWUpKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBJbW11dGFibGUubWVyZ2UoY3VycmVudFZhbHVlLCBpbW11dGFibGVWYWx1ZSwgY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IGltbXV0YWJsZVZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0VxdWFsKGN1cnJlbnRWYWx1ZSwgbmV3VmFsdWUpIHx8ICFjdXJyZW50T2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIE1ha2UgYSBzaGFsbG93IGNsb25lIG9mIHRoZSBjdXJyZW50IG9iamVjdC5cbiAgICAgICAgICAgIHJlc3VsdCA9IHF1aWNrQ29weShjdXJyZW50T2JqLCBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0KGN1cnJlbnRPYmopKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHRba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJEcm9wcGVkS2V5cyhjdXJyZW50T2JqLCBvdGhlck9iaikge1xuICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnRPYmopIHtcbiAgICAgICAgaWYgKCFvdGhlck9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBNYWtlIGEgc2hhbGxvdyBjbG9uZSBvZiB0aGUgY3VycmVudCBvYmplY3QuXG4gICAgICAgICAgICByZXN1bHQgPSBxdWlja0NvcHkoY3VycmVudE9iaiwgaW5zdGFudGlhdGVFbXB0eU9iamVjdChjdXJyZW50T2JqKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSByZXN1bHRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXk7XG5cbiAgICAvLyBBY2hpZXZlIHByaW9yaXRpemF0aW9uIGJ5IG92ZXJyaWRpbmcgcHJldmlvdXMgdmFsdWVzIHRoYXQgZ2V0IGluIHRoZSB3YXkuXG4gICAgaWYgKCFyZWNlaXZlZEFycmF5KSB7XG4gICAgICAvLyBUaGUgbW9zdCBjb21tb24gdXNlIGNhc2U6IGp1c3QgbWVyZ2Ugb25lIG9iamVjdCBpbnRvIHRoZSBleGlzdGluZyBvbmUuXG4gICAgICBmb3IgKGtleSBpbiBvdGhlcikge1xuICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvdGhlciwga2V5KSkge1xuICAgICAgICAgIGFkZFRvUmVzdWx0KHRoaXMsIG90aGVyLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobW9kZSA9PT0gJ3JlcGxhY2UnKSB7XG4gICAgICAgIGNsZWFyRHJvcHBlZEtleXModGhpcywgb3RoZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBhbHNvIGFjY2VwdCBhbiBBcnJheVxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBvdGhlci5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBvdGhlckZyb21BcnJheSA9IG90aGVyW2luZGV4XTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvdGhlckZyb21BcnJheSkge1xuICAgICAgICAgIGlmIChvdGhlckZyb21BcnJheS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBhZGRUb1Jlc3VsdChyZXN1bHQgIT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRoaXMsIG90aGVyRnJvbUFycmF5LCBrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYWtlSW1tdXRhYmxlT2JqZWN0KHJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb2JqZWN0UmVwbGFjZSh2YWx1ZSwgY29uZmlnKSB7XG4gICAgdmFyIGRlZXAgICAgICAgICAgPSBjb25maWcgJiYgY29uZmlnLmRlZXA7XG5cbiAgICAvLyBDYWxsaW5nIC5yZXBsYWNlKCkgd2l0aCBubyBhcmd1bWVudHMgaXMgYSBuby1vcC4gRG9uJ3QgYm90aGVyIGNsb25pbmcuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbW11dGFibGUjcmVwbGFjZSBjYW4gb25seSBiZSBpbnZva2VkIHdpdGggb2JqZWN0cyBvciBhcnJheXMsIG5vdCBcIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEltbXV0YWJsZS5tZXJnZSh0aGlzLCB2YWx1ZSwge2RlZXA6IGRlZXAsIG1vZGU6ICdyZXBsYWNlJ30pO1xuICB9XG5cbiAgdmFyIGltbXV0YWJsZUVtcHR5T2JqZWN0ID0gSW1tdXRhYmxlKHt9KTtcblxuICBmdW5jdGlvbiBvYmplY3RTZXRJbihwYXRoLCB2YWx1ZSwgY29uZmlnKSB7XG4gICAgaWYgKCEoQXJyYXkuaXNBcnJheShwYXRoKSkgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgdG8gSW1tdXRhYmxlI3NldEluIG11c3QgYmUgYW4gYXJyYXkgY29udGFpbmluZyBhdCBsZWFzdCBvbmUgXFxcImtleVxcXCIgc3RyaW5nLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgaGVhZCA9IHBhdGhbMF07XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gb2JqZWN0U2V0LmNhbGwodGhpcywgaGVhZCwgdmFsdWUsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgdmFyIHRhaWwgPSBwYXRoLnNsaWNlKDEpO1xuICAgIHZhciBuZXdWYWx1ZTtcbiAgICB2YXIgdGhpc0hlYWQgPSB0aGlzW2hlYWRdO1xuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoaGVhZCkgJiYgdHlwZW9mKHRoaXNIZWFkKSA9PT0gXCJvYmplY3RcIiAmJiB0aGlzSGVhZCAhPT0gbnVsbCkge1xuICAgICAgLy8gTWlnaHQgKHZhbGlkbHkpIGJlIG9iamVjdCBvciBhcnJheVxuICAgICAgbmV3VmFsdWUgPSBJbW11dGFibGUuc2V0SW4odGhpc0hlYWQsIHRhaWwsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWUgPSBvYmplY3RTZXRJbi5jYWxsKGltbXV0YWJsZUVtcHR5T2JqZWN0LCB0YWlsLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoaGVhZCkgJiYgdGhpc0hlYWQgPT09IG5ld1ZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgbXV0YWJsZSA9IHF1aWNrQ29weSh0aGlzLCBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0KHRoaXMpKTtcbiAgICBtdXRhYmxlW2hlYWRdID0gbmV3VmFsdWU7XG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGVPYmplY3QobXV0YWJsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvYmplY3RTZXQocHJvcGVydHksIHZhbHVlLCBjb25maWcpIHtcbiAgICB2YXIgZGVlcCAgICAgICAgICA9IGNvbmZpZyAmJiBjb25maWcuZGVlcDtcblxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgaWYgKGRlZXAgJiYgdGhpc1twcm9wZXJ0eV0gIT09IHZhbHVlICYmIGlzTWVyZ2FibGVPYmplY3QodmFsdWUpICYmIGlzTWVyZ2FibGVPYmplY3QodGhpc1twcm9wZXJ0eV0pKSB7XG4gICAgICAgIHZhbHVlID0gSW1tdXRhYmxlLm1lcmdlKHRoaXNbcHJvcGVydHldLCB2YWx1ZSwge2RlZXA6IHRydWUsIG1vZGU6ICdyZXBsYWNlJ30pO1xuICAgICAgfVxuICAgICAgaWYgKGlzRXF1YWwodGhpc1twcm9wZXJ0eV0sIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbXV0YWJsZSA9IHF1aWNrQ29weSh0aGlzLCBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0KHRoaXMpKTtcbiAgICBtdXRhYmxlW3Byb3BlcnR5XSA9IEltbXV0YWJsZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG1ha2VJbW11dGFibGVPYmplY3QobXV0YWJsZSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUocHJvcGVydHksIHVwZGF0ZXIpIHtcbiAgICB2YXIgcmVzdEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpbml0aWFsVmFsID0gdGhpc1twcm9wZXJ0eV07XG4gICAgcmV0dXJuIEltbXV0YWJsZS5zZXQodGhpcywgcHJvcGVydHksIHVwZGF0ZXIuYXBwbHkoaW5pdGlhbFZhbCwgW2luaXRpYWxWYWxdLmNvbmNhdChyZXN0QXJncykpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluUGF0aChvYmosIHBhdGgpIHtcbiAgICAvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGF0aC5sZW5ndGg7IG9iaiAhPSBudWxsICYmIGkgPCBsOyBpKyspIHtcbiAgICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGkgJiYgaSA9PSBsKSA/IG9iaiA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUluKHBhdGgsIHVwZGF0ZXIpIHtcbiAgICB2YXIgcmVzdEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHZhciBpbml0aWFsVmFsID0gZ2V0SW5QYXRoKHRoaXMsIHBhdGgpO1xuXG4gICAgcmV0dXJuIEltbXV0YWJsZS5zZXRJbih0aGlzLCBwYXRoLCB1cGRhdGVyLmFwcGx5KGluaXRpYWxWYWwsIFtpbml0aWFsVmFsXS5jb25jYXQocmVzdEFyZ3MpKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbihwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRJblBhdGgodGhpcywgcGF0aCk7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzTXV0YWJsZU9iamVjdChvcHRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IGluc3RhbnRpYXRlRW1wdHlPYmplY3QodGhpcyksIGtleTtcblxuICAgIGlmKG9wdHMgJiYgb3B0cy5kZWVwKSB7XG4gICAgICBmb3IgKGtleSBpbiB0aGlzKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IGFzRGVlcE11dGFibGUodGhpc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiB0aGlzKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBDcmVhdGVzIHBsYWluIG9iamVjdCB0byBiZSB1c2VkIGZvciBjbG9uaW5nXG4gIGZ1bmN0aW9uIGluc3RhbnRpYXRlUGxhaW5PYmplY3QoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLy8gRmluYWxpemVzIGFuIG9iamVjdCB3aXRoIGltbXV0YWJsZSBtZXRob2RzLCBmcmVlemVzIGl0LCBhbmQgcmV0dXJucyBpdC5cbiAgZnVuY3Rpb24gbWFrZUltbXV0YWJsZU9iamVjdChvYmopIHtcbiAgICBpZiAoIWdsb2JhbENvbmZpZy51c2Vfc3RhdGljKSB7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJtZXJnZVwiLCBtZXJnZSk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJyZXBsYWNlXCIsIG9iamVjdFJlcGxhY2UpO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwid2l0aG91dFwiLCB3aXRob3V0KTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcImFzTXV0YWJsZVwiLCBhc011dGFibGVPYmplY3QpO1xuICAgICAgYWRkUHJvcGVydHlUbyhvYmosIFwic2V0XCIsIG9iamVjdFNldCk7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJzZXRJblwiLCBvYmplY3RTZXRJbik7XG4gICAgICBhZGRQcm9wZXJ0eVRvKG9iaiwgXCJ1cGRhdGVcIiwgdXBkYXRlKTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcInVwZGF0ZUluXCIsIHVwZGF0ZUluKTtcbiAgICAgIGFkZFByb3BlcnR5VG8ob2JqLCBcImdldEluXCIsIGdldEluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUltbXV0YWJsZShvYmosIG11dGF0aW5nT2JqZWN0TWV0aG9kcyk7XG4gIH1cblxuICAvLyBSZXR1cm5zIHRydWUgaWYgb2JqZWN0IGlzIGEgdmFsaWQgcmVhY3QgZWxlbWVudFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi92MTUuMC4xL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDMyNlxuICBmdW5jdGlvbiBpc1JlYWN0RWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgb2JqICE9PSBudWxsICYmXG4gICAgICAgICAgIChvYmouJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRV9GQUxMQkFDSyB8fCBvYmouJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0ZpbGVPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBGaWxlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICBvYmogaW5zdGFuY2VvZiBGaWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNCbG9iT2JqZWN0KG9iaikge1xuICAgIHJldHVybiB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgb2JqIGluc3RhbmNlb2YgQmxvYjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFcnJvcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRXJyb3I7XG4gIH1cblxuICBmdW5jdGlvbiBJbW11dGFibGUob2JqLCBvcHRpb25zLCBzdGFja1JlbWFpbmluZykge1xuICAgIGlmIChpc0ltbXV0YWJsZShvYmopIHx8IGlzUmVhY3RFbGVtZW50KG9iaikgfHwgaXNGaWxlT2JqZWN0KG9iaikgfHwgaXNCbG9iT2JqZWN0KG9iaikgfHwgaXNFcnJvcihvYmopKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKG9iaikpIHtcbiAgICAgIHJldHVybiBvYmoudGhlbihJbW11dGFibGUpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICByZXR1cm4gbWFrZUltbXV0YWJsZUFycmF5KG9iai5zbGljZSgpKTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiBtYWtlSW1tdXRhYmxlRGF0ZShuZXcgRGF0ZShvYmouZ2V0VGltZSgpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERvbid0IGZyZWV6ZSB0aGUgb2JqZWN0IHdlIHdlcmUgZ2l2ZW47IG1ha2UgYSBjbG9uZSBhbmQgdXNlIHRoYXQuXG4gICAgICB2YXIgcHJvdG90eXBlID0gb3B0aW9ucyAmJiBvcHRpb25zLnByb3RvdHlwZTtcbiAgICAgIHZhciBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0ID1cbiAgICAgICAgKCFwcm90b3R5cGUgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlKSA/XG4gICAgICAgICAgaW5zdGFudGlhdGVQbGFpbk9iamVjdCA6IChmdW5jdGlvbigpIHsgcmV0dXJuIE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTsgfSk7XG4gICAgICB2YXIgY2xvbmUgPSBpbnN0YW50aWF0ZUVtcHR5T2JqZWN0KCk7XG5cbiAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIC8qanNoaW50IGVxbnVsbDp0cnVlICovXG4gICAgICAgIGlmIChzdGFja1JlbWFpbmluZyA9PSBudWxsKSB7XG4gICAgICAgICAgc3RhY2tSZW1haW5pbmcgPSA2NDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhY2tSZW1haW5pbmcgPD0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBJbW11dGFibGVFcnJvcihcIkF0dGVtcHQgdG8gY29uc3RydWN0IEltbXV0YWJsZSBmcm9tIGEgZGVlcGx5IG5lc3RlZCBvYmplY3Qgd2FzIGRldGVjdGVkLlwiICtcbiAgICAgICAgICAgIFwiIEhhdmUgeW91IHRyaWVkIHRvIHdyYXAgYW4gb2JqZWN0IHdpdGggY2lyY3VsYXIgcmVmZXJlbmNlcyAoZS5nLiBSZWFjdCBlbGVtZW50KT9cIiArXG4gICAgICAgICAgICBcIiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3J0ZmVsZG1hbi9zZWFtbGVzcy1pbW11dGFibGUvd2lraS9EZWVwbHktbmVzdGVkLW9iamVjdC13YXMtZGV0ZWN0ZWQgZm9yIGRldGFpbHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN0YWNrUmVtYWluaW5nIC09IDE7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpKSB7XG4gICAgICAgICAgY2xvbmVba2V5XSA9IEltbXV0YWJsZShvYmpba2V5XSwgdW5kZWZpbmVkLCBzdGFja1JlbWFpbmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1ha2VJbW11dGFibGVPYmplY3QoY2xvbmUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgdG8gYWxsb3cgdGhlIHVzZSBvZiBvYmplY3QgbWV0aG9kcyBhcyBzdGF0aWMgbWV0aG9kcyBvZiBJbW11dGFibGUuXG4gIGZ1bmN0aW9uIHRvU3RhdGljKGZuKSB7XG4gICAgZnVuY3Rpb24gc3RhdGljV3JhcHBlcigpIHtcbiAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgdmFyIHNlbGYgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRpY1dyYXBwZXI7XG4gIH1cblxuICAvLyBXcmFwcGVyIHRvIGFsbG93IHRoZSB1c2Ugb2Ygb2JqZWN0IG1ldGhvZHMgYXMgc3RhdGljIG1ldGhvZHMgb2YgSW1tdXRhYmxlLlxuICAvLyB3aXRoIHRoZSBhZGRpdGlvbmFsIGNvbmRpdGlvbiBvZiBjaG9vc2luZyB3aGljaCBmdW5jdGlvbiB0byBjYWxsIGRlcGVuZGluZ1xuICAvLyBpZiBhcmd1bWVudCBpcyBhbiBhcnJheSBvciBhbiBvYmplY3QuXG4gIGZ1bmN0aW9uIHRvU3RhdGljT2JqZWN0T3JBcnJheShmbk9iamVjdCwgZm5BcnJheSkge1xuICAgIGZ1bmN0aW9uIHN0YXRpY1dyYXBwZXIoKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIHZhciBzZWxmID0gYXJncy5zaGlmdCgpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZikpIHtcbiAgICAgICAgICByZXR1cm4gZm5BcnJheS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZuT2JqZWN0LmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0aWNXcmFwcGVyO1xuICB9XG5cbiAgLy8gV3JhcHBlciB0byBhbGxvdyB0aGUgdXNlIG9mIG9iamVjdCBtZXRob2RzIGFzIHN0YXRpYyBtZXRob2RzIG9mIEltbXV0YWJsZS5cbiAgLy8gd2l0aCB0aGUgYWRkaXRpb25hbCBjb25kaXRpb24gb2YgY2hvb3Npbmcgd2hpY2ggZnVuY3Rpb24gdG8gY2FsbCBkZXBlbmRpbmdcbiAgLy8gaWYgYXJndW1lbnQgaXMgYW4gYXJyYXkgb3IgYW4gb2JqZWN0IG9yIGEgZGF0ZS5cbiAgZnVuY3Rpb24gdG9TdGF0aWNPYmplY3RPckRhdGVPckFycmF5KGZuT2JqZWN0LCBmbkFycmF5LCBmbkRhdGUpIHtcbiAgICBmdW5jdGlvbiBzdGF0aWNXcmFwcGVyKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICB2YXIgc2VsZiA9IGFyZ3Muc2hpZnQoKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGYpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuQXJyYXkuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGZuRGF0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZuT2JqZWN0LmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0aWNXcmFwcGVyO1xuICB9XG5cbiAgLy8gRXhwb3J0IHRoZSBsaWJyYXJ5XG4gIEltbXV0YWJsZS5mcm9tICAgICAgICAgICA9IEltbXV0YWJsZTtcbiAgSW1tdXRhYmxlLmlzSW1tdXRhYmxlICAgID0gaXNJbW11dGFibGU7XG4gIEltbXV0YWJsZS5JbW11dGFibGVFcnJvciA9IEltbXV0YWJsZUVycm9yO1xuICBJbW11dGFibGUubWVyZ2UgICAgICAgICAgPSB0b1N0YXRpYyhtZXJnZSk7XG4gIEltbXV0YWJsZS5yZXBsYWNlICAgICAgICA9IHRvU3RhdGljKG9iamVjdFJlcGxhY2UpO1xuICBJbW11dGFibGUud2l0aG91dCAgICAgICAgPSB0b1N0YXRpYyh3aXRob3V0KTtcbiAgSW1tdXRhYmxlLmFzTXV0YWJsZSAgICAgID0gdG9TdGF0aWNPYmplY3RPckRhdGVPckFycmF5KGFzTXV0YWJsZU9iamVjdCwgYXNNdXRhYmxlQXJyYXksIGFzTXV0YWJsZURhdGUpO1xuICBJbW11dGFibGUuc2V0ICAgICAgICAgICAgPSB0b1N0YXRpY09iamVjdE9yQXJyYXkob2JqZWN0U2V0LCBhcnJheVNldCk7XG4gIEltbXV0YWJsZS5zZXRJbiAgICAgICAgICA9IHRvU3RhdGljT2JqZWN0T3JBcnJheShvYmplY3RTZXRJbiwgYXJyYXlTZXRJbik7XG4gIEltbXV0YWJsZS51cGRhdGUgICAgICAgICA9IHRvU3RhdGljKHVwZGF0ZSk7XG4gIEltbXV0YWJsZS51cGRhdGVJbiAgICAgICA9IHRvU3RhdGljKHVwZGF0ZUluKTtcbiAgSW1tdXRhYmxlLmdldEluICAgICAgICAgID0gdG9TdGF0aWMoZ2V0SW4pO1xuICBJbW11dGFibGUuZmxhdE1hcCAgICAgICAgPSB0b1N0YXRpYyhmbGF0TWFwKTtcbiAgSW1tdXRhYmxlLmFzT2JqZWN0ICAgICAgID0gdG9TdGF0aWMoYXNPYmplY3QpO1xuICBpZiAoIWdsb2JhbENvbmZpZy51c2Vfc3RhdGljKSB7XG4gICAgICBJbW11dGFibGUuc3RhdGljID0gaW1tdXRhYmxlSW5pdCh7XG4gICAgICAgICAgdXNlX3N0YXRpYzogdHJ1ZVxuICAgICAgfSk7XG4gIH1cblxuICBPYmplY3QuZnJlZXplKEltbXV0YWJsZSk7XG5cbiAgcmV0dXJuIEltbXV0YWJsZTtcbn1cblxuICB2YXIgSW1tdXRhYmxlID0gaW1tdXRhYmxlSW5pdCgpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBJbW11dGFibGU7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gSW1tdXRhYmxlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZXhwb3J0cy5JbW11dGFibGUgPSBJbW11dGFibGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikge1xuICAgIHdpbmRvdy5JbW11dGFibGUgPSBJbW11dGFibGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbC5JbW11dGFibGUgPSBJbW11dGFibGU7XG4gIH1cbn0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCB7fVxuXG4vKipcbiAqIOWwhuWvueixoei9rOWPmOS4uiBwYXJhbXMgc3RyaW5nXG4gKiBlLmcuIHsgbmFtZTogJ3VzZXInLCBhZ2U6IDEzfSA9PiBuYW1lPXVzZXImYWdlPTEzXG4gKiBAcGFyYW0gb2JqXG4gKiBAcmV0dXJuIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gb2JqMnBhcmFtcyhvYmosIHByZWZpeCA9ICcnLCBzdWZmaXggPSAnJykge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgIW9iaikgcmV0dXJuICcnXG5cbiAgbGV0IHBhcmFtcyA9IFtdXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChvYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIG9ialtrZXldICE9PSBudWxsKSB7XG4gICAgICBpZiAob2JqW2tleV0gaW5zdGFuY2VvZiBPYmplY3QpIHsgLy8g5pWw57uE5ZKM5a+56LGh54m55q6K5aSE55CGXG4gICAgICAgIHBhcmFtcy5wdXNoKGAke2tleX09JHtKU09OLnN0cmluZ2lmeShvYmpba2V5XSl9YClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKGAke2tleX09JHtvYmpba2V5XX1gKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHByZWZpeCArIHBhcmFtcy5qb2luKCcmJykgKyBzdWZmaXhcbn1cblxuLyoqXG4gKiAg5LiL5YiS57q/6L2s6am85bOwXG4gKiBAcGFyYW0gbmFtZVxuICovXG5leHBvcnQgY29uc3QgdW5kZXJTY29yZVRvQ2FtZWwgPSAobmFtZSkgPT5cbiAgbmFtZVxuICAgIC5zcGxpdCgnXycpXG4gICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0udG9Mb3dlckNhc2UoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpdGVtWzBdLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdzZWFtbGVzcy1pbW11dGFibGUnXG5cbi8qKlxuICogQGRlc2Mgbm9ybWFsXG4gKiBAcGFyYW0gYWN0aW9uTmFtZSB7c3RyaW5nfSwgZS5nLiBsb2FkX2l0ZW1cbiAqIEBwYXJhbSAgZGVmYXVsdERhdGEge29iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkUmVkdXggPSAoYWN0aW9uTmFtZSwgZGVmYXVsdERhdGEgPSB7fSkgPT4ge1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSAoKSA9PlxuICAgIEltbXV0YWJsZSh7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIHBhcmFtczogbnVsbCxcbiAgICAgIC4uLmRlZmF1bHREYXRhLFxuICAgIH0pXG5cbiAgY29uc3QgU1RBUlQgPSBgJHthY3Rpb25OYW1lfV9TVEFSVGBcbiAgY29uc3QgU1VDQ0VTUyA9IGAke2FjdGlvbk5hbWV9X1NVQ0NFU1NgXG4gIGNvbnN0IEVSUk9SID0gYCR7YWN0aW9uTmFtZX1fRVJST1JgXG4gIGNvbnN0IFJFU0VUID0gYCR7YWN0aW9uTmFtZX1fUkVTVGBcblxuICBjb25zdCBzdGFydCA9IGNyZWF0ZUFjdGlvbihTVEFSVCwgKHBhcmFtcyA9IG51bGwpID0+IHBhcmFtcylcbiAgY29uc3QgcmVzZXQgPSBjcmVhdGVBY3Rpb24oUkVTRVQpXG4gIGNvbnN0IHN1Y2Nlc3MgPSBjcmVhdGVBY3Rpb24oU1VDQ0VTUywgZGF0YSA9PiAoeyBkYXRhIH0pKVxuICBjb25zdCBlcnJvciA9IGNyZWF0ZUFjdGlvbihFUlJPUiwgZXJyb3JNZXNzYWdlID0+ICh7IGVycm9yTWVzc2FnZSB9KSlcblxuICBjb25zdCByZWR1Y2VyID0gaGFuZGxlQWN0aW9ucyhcbiAgICB7XG4gICAgICBbU1RBUlRdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgc3RhdGUubWVyZ2Uoe1xuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICAgICAgcGFyYW1zOiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5wYXJhbXMsXG4gICAgICAgIH0pLFxuICAgICAgW1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgc3RhdGUubWVyZ2Uoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgfSksXG4gICAgICBbRVJST1JdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgSW1tdXRhYmxlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmVycm9yTWVzc2FnZSxcbiAgICAgICAgfSksXG4gICAgICBbUkVTRVRdOiAoc3RhdGUsIGFjdGlvbikgPT4gaW5pdGlhbFN0YXRlKCksXG4gICAgfSxcbiAgICBpbml0aWFsU3RhdGUoKSxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgYWN0aW9uczoge1xuICAgICAgc3RhcnQsXG4gICAgICBzdWNjZXNzLFxuICAgICAgZXJyb3IsXG4gICAgICByZXNldCxcbiAgICB9LFxuICAgIHR5cGVzOiB7XG4gICAgICBTVEFSVCxcbiAgICAgIFNVQ0NFU1MsXG4gICAgICBFUlJPUixcbiAgICAgIFJFU0VULFxuICAgIH0sXG4gICAgcmVkdWNlcixcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gYWN0aW9uTmFtZSB7c3RyaW5nfSwgZS5nLiBsaXN0X3ZlaGljbGVcbiAqIEBwYXJhbSBkZWZhdWx0RGF0YSB7b2JqZWN0fVxuICogQHJldHVybiB7e3R5cGVzOiB7U1VDQ0VTUzogc3RyaW5nLCBTVEFSVDogc3RyaW5nLCBFUlJPUjogc3RyaW5nLCBSRVNFVDogc3RyaW5nfSwgcmVkdWNlcjogRnVuY3Rpb24sIGFjdGlvbnM6XG4gKiAgIHtzdWNjZXNzOiBhY3Rpb25DcmVhdG9yLCBzdGFydDogYWN0aW9uQ3JlYXRvciwgcmVzZXQ6IGFjdGlvbkNyZWF0b3IsIGVycm9yOiBhY3Rpb25DcmVhdG9yfX19XG4gKi9cbmV4cG9ydCBjb25zdCBidWlsZExpc3RSZWR1eCA9IChhY3Rpb25OYW1lLCBkZWZhdWx0RGF0YSA9IHt9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9ICgpID0+XG4gICAgSW1tdXRhYmxlKHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgZGF0YToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBwZXJfcGFnZTogMTAsXG4gICAgICAgIHRvdGFsX2NvdW50OiAwLFxuICAgICAgICB0b3RhbF9wYWdlOiAwLFxuICAgICAgICBlbnRyaWVzOiBbXSxcbiAgICAgIH0sXG4gICAgICAuLi5kZWZhdWx0RGF0YSxcbiAgICB9KVxuXG4gIGNvbnN0IFNUQVJUID0gYCR7YWN0aW9uTmFtZX1fTElTVF9TVEFSVGBcbiAgY29uc3QgU1VDQ0VTUyA9IGAke2FjdGlvbk5hbWV9X0xJU1RfU1VDQ0VTU2BcbiAgY29uc3QgUkVTRVQgPSBgUkVTRVRfJHthY3Rpb25OYW1lfV9MSVNUYFxuICBjb25zdCBFUlJPUiA9IGAke2FjdGlvbk5hbWV9X0xJU1RfRVJST1JgXG5cbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVBY3Rpb24oU1RBUlQsIChwYWdlLCBsaW1pdCwgcGFyYW1zKSA9PiAoe1xuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgcGFyYW1zLFxuICB9KSlcbiAgY29uc3Qgc3VjY2VzcyA9IGNyZWF0ZUFjdGlvbihTVUNDRVNTLCBkYXRhID0+ICh7IGRhdGEgfSkpXG4gIGNvbnN0IHJlc2V0ID0gY3JlYXRlQWN0aW9uKFJFU0VUKVxuICBjb25zdCBlcnJvciA9IGNyZWF0ZUFjdGlvbihFUlJPUilcblxuICBjb25zdCByZWR1Y2VyID0gaGFuZGxlQWN0aW9ucyhcbiAgICB7XG4gICAgICBbU1RBUlRdOiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgICAgICAgc3RhdGUubWVyZ2Uoe1xuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgcGFyYW1zOiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5wYXJhbXMsXG4gICAgICAgIH0pLFxuICAgICAgW1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGUubWVyZ2Uoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBbRVJST1JdOiBzdGF0ZSA9PiBzdGF0ZS5tZXJnZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogdHJ1ZSwgc3VjY2VzczogZmFsc2UgfSksXG4gICAgICBbUkVTRVRdOiBzdGF0ZSA9PiBpbml0aWFsU3RhdGUoKSxcbiAgICB9LFxuICAgIGluaXRpYWxTdGF0ZSgpLFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICByZWR1Y2VyLFxuICAgIHR5cGVzOiB7XG4gICAgICBTVEFSVCxcbiAgICAgIFNVQ0NFU1MsXG4gICAgICBSRVNFVCxcbiAgICAgIEVSUk9SLFxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgc3RhcnQsXG4gICAgICBzdWNjZXNzLFxuICAgICAgZXJyb3IsXG4gICAgICByZXNldCxcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgeyBidWlsZFJlZHV4LCBidWlsZExpc3RSZWR1eCB9IGZyb20gJy4vaGVscGVyJ1xuaW1wb3J0IHdpdGhTYWdhLCB7IGluaXQsIGFsbFNhZ2FzIH0gZnJvbSAnLi93aXRoU2FnYSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBidWlsZFJlZHV4LFxuICBidWlsZExpc3RSZWR1eCxcbiAgaW5pdEZldGNoOiBpbml0LCAvLyDliJ3lp4vljJZmZXRjaOaWueazlVxuICBidWlsZFJlZHV4Q29ubmVjdFNhZ2E6IHdpdGhTYWdhKGJ1aWxkUmVkdXgpLFxuICBidWlsZExpc3RSZWR1eENvbm5lY3RTYWdhOiB3aXRoU2FnYShidWlsZExpc3RSZWR1eCksXG4gIGFsbFNhZ2FzLFxufVxuXG4vLyBleHBvcnQgY29uc3QgaW5pdEZldGNoID0gaW5pdFxuLy8gZXhwb3J0IGNvbnN0IGFsbFNhZ2FzID0gc2FnYXNcbi8vIGV4cG9ydCBjb25zdCBidWlsZFJlZHV4ID0gYnVpbGRcbi8vIGV4cG9ydCBjb25zdCBidWlsZExpc3RSZWR1eCA9IGJ1aWxkTGlzdFxuLy8gZXhwb3J0IGNvbnN0IGJ1aWxkUmVkdXhDb25uZWN0U2FnYSA9IHdpdGhTYWdhKGJ1aWxkUmVkdXgpXG4vLyBleHBvcnQgY29uc3QgYnVpbGRMaXN0UmVkdXhDb25uZWN0U2FnYSA9IHdpdGhTYWdhKGJ1aWxkTGlzdFJlZHV4KVxuIiwiaW1wb3J0IHsgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0LCBzZWxlY3QsIGRlbGF5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IHsgb2JqMnBhcmFtcywgdW5kZXJTY29yZVRvQ2FtZWwgfSBmcm9tICcuL2NvbW1vbidcblxubGV0IGRvRmV0Y2ggPSBudWxsXG5sZXQgZG9GZXRjaEFsbCA9IG51bGxcbmV4cG9ydCBjb25zdCBpbml0ID0gKGZldGNoLCBmZXRjaEFsbCA9IG51bGwpID0+IHtcbiAgZG9GZXRjaCA9IGZldGNoXG4gIGlmIChmZXRjaEFsbCkge1xuICAgIGRvRmV0Y2hBbGwgPSBmZXRjaEFsbFxuICB9XG59XG5cbmNvbnN0IHNhZ2FBY3Rpb25zID0ge1xuICBwdXQsXG4gIGNhbGwsXG4gIHNlbGVjdCxcbiAgZGVsYXksXG59XG5cbi8vIOaJgOaciXNhZ2FcbmxldCBzYWdhcyA9IFtdXG5sZXQgYWxsUmVkdXhBY3Rpb25zID0ge31cblxuLyoqXG4gKiDliJvlu7pyZWR1Y2Xml7boh6rliqjlhbPogZRzYWdhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHJlZHV4ZXIgPT4gKC4uLmFyZ3MpID0+IHtcbiAgbGV0IF9yZWR1eCA9IHJlZHV4ZXIuY2FsbChudWxsLCAuLi5hcmdzKVxuICBjb25zdCBuYW1lID0gdW5kZXJTY29yZVRvQ2FtZWwoYXJnc1swXSlcbiAgYWxsUmVkdXhBY3Rpb25zW25hbWVdID0gX3JlZHV4LmFjdGlvbnNcbiAgcmV0dXJuIGNvbmYgPT4ge1xuICAgIGNvbnN0IHdhdGNoID0gY3JlYXRlV2F0Y2hlcihfcmVkdXgsIGNvbmYpXG4gICAgc2FnYXMucHVzaCh3YXRjaClcbiAgICByZXR1cm4gX3JlZHV4XG4gIH1cbn1cblxuLyoqXG4gKiDmoLnmja7phY3nva7liJvlu7pzYWdhXG4gKiBAcGFyYW0geyp9IF9yZWR1eFxuICogQHBhcmFtIHtmdW5jdGlvbnxzdHJpbmd9IGNvbmYudXJsICAgICAgICAgICDor7fmsYLlnLDlnYDvvIjkuLrnqbrliJnkuI3miafooYzmraRzYWdh77yJXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgY29uZi5tZXRob2QgICAgICAgIOivt+axguaWueazle+8iOm7mOiupOS4umdldO+8iVxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgIGNvbmYuZGF0YSAgICAgICAgICDor7fmsYLlj4LmlbBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259ICAgICAgICBjb25mLnJlc3VsdEhhbmRsZXIg6K+35rGC5oiQ5Yqf5pWw5o2u5aSE55CGXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSAgICAgICAgY29uZi5hZnRlciAgICAgICAgIOaVsOaNruabtOaWsOWQjue9ruaWueazlVxuICogQHBhcmFtIHtmdW5jdGlvbn0gICAgICAgIGNvbmYuY2F0Y2ggICAgICAgICDoh6rlrprkuYnlvILluLhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBjcmVhdGVXYXRjaGVyKF9yZWR1eCwgY29uZikge1xuICBpZiAodHlwZW9mIGNvbmYgPT09ICdmdW5jdGlvbicpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KF9yZWR1eC50eXBlcy5TVEFSVCwgZnVuY3Rpb24qICh7IHBheWxvYWQgfSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgeWllbGQgY2FsbChjb25mLCBwYXlsb2FkLCBzYWdhQWN0aW9ucywgX3JlZHV4LmFjdGlvbnMsIGFsbFJlZHV4QWN0aW9ucylcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChfcmVkdXgudHlwZXMuU1RBUlQsIGZ1bmN0aW9uKiAoeyBwYXlsb2FkIH0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOWkhOeQhuivt+axguWPguaVsFxuICAgICAgICBsZXQgZmV0Y2hQYXJhbXMgPSB5aWVsZCBjYWxsKHNldFJlcXVlc3RQYXJhbXMsIGNvbmYsIHBheWxvYWQpXG4gICAgICAgIGxldCBkYXRhXG4gICAgICAgIGlmICghY29uZi5mZXRjaEFsbENvbmZpZykge1xuICAgICAgICAgIGRhdGEgPSB5aWVsZCBjYWxsKGRvRmV0Y2gsIGZldGNoUGFyYW1zKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHsgYXBpLCBwYWdlS2V5LCB0b3RhbFBhZ2VzS2V5IH0gPSBjb25mLmZldGNoQWxsQ29uZmlnXG4gICAgICAgICAgZGF0YSA9IHlpZWxkIGNhbGwoZG9GZXRjaEFsbCwgYXBpLCBwYWdlS2V5LCB0b3RhbFBhZ2VzS2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pWw5o2u5aSE55CG5ZmoXG4gICAgICAgIGNvbmYucmVzdWx0SGFuZGxlciAmJiAoZGF0YSA9IHlpZWxkIGNhbGwoY29uZi5yZXN1bHRIYW5kbGVyLCBkYXRhLCBwYXlsb2FkLCBzYWdhQWN0aW9ucywgX3JlZHV4LmFjdGlvbnMsIGFsbFJlZHV4QWN0aW9ucykpXG4gICAgICAgIHlpZWxkIHB1dChfcmVkdXguYWN0aW9ucy5zdWNjZXNzKGRhdGEpKVxuXG4gICAgICAgIC8vIOW8guatpeaTjeS9nOaIkOWKn+WQjue9ruaWueazlVxuICAgICAgICBpZiAoY29uZi5hZnRlcikge1xuICAgICAgICAgIHlpZWxkIGNhbGwoY29uZi5hZnRlciwgZGF0YSwgcGF5bG9hZCwgc2FnYUFjdGlvbnMsIF9yZWR1eC5hY3Rpb25zLCBhbGxSZWR1eEFjdGlvbnMpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGNvbmYuY2F0Y2gpIHtcbiAgICAgICAgICB5aWVsZCBjYWxsKGNvbmYuY2F0Y2gsIGUsIHBheWxvYWQsIHNhZ2FBY3Rpb25zLCBfcmVkdXguYWN0aW9ucywgYWxsUmVkdXhBY3Rpb25zKVxuICAgICAgICB9XG4gICAgICAgIHlpZWxkIHB1dChfcmVkdXguYWN0aW9ucy5yZXNldCgpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiDlpITnkIbor7fmsYLlj4LmlbBcbiAqIEBwYXJhbSB7Kn0gY29uZiAgICBzYWdh6YWN572uXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgYWN0aW9uLnBheWxvYWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBzZXRSZXF1ZXN0UGFyYW1zKGNvbmYsIHBheWxvYWQpIHtcbiAgbGV0IHsgbWV0aG9kIH0gPSBjb25mXG4gIG1ldGhvZCA9IG1ldGhvZCA/IG1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCdcbiAgbGV0IHVybCA9IGNvbmYudXJsXG4gIGlmICh0eXBlb2YgdXJsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdXJsID0gdXJsKHBheWxvYWQsIHNhZ2FBY3Rpb25zKVxuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyDor7fmsYLmlbDmja7lpITnkIYo5ZCI5bm2IHBheWxvYWQucGFyYW1zIOWSjCDkvKDlhaXnmoToh6rlrprkuYnnmoQgZGF0Ye+8jOWmgumHjeWkjeiHquWumuS5ieWxnuaAp+S8mOWFiClcbiAgbGV0IHNlbmREYXRhID0ge31cbiAgLy8gbGlzdFxuICBpZiAocGF5bG9hZCAmJiBwYXlsb2FkLnBhcmFtcykge1xuICAgIHNlbmREYXRhID0gcGF5bG9hZC5wYXJhbXNcbiAgfVxuICAvLyBmb3JtXG4gIGlmIChwYXlsb2FkICYmIHBheWxvYWQuZGF0YSkge1xuICAgIHNlbmREYXRhID0gcGF5bG9hZC5kYXRhXG4gIH1cbiAgbGV0IGNvbmZEYXRhVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb25mLmRhdGEpXG4gIGlmIChjb25mLmRhdGEgJiYgY29uZkRhdGFUeXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgbGV0IHJlcyA9IHlpZWxkIGNhbGwoY29uZi5kYXRhLCBwYXlsb2FkLCBzYWdhQWN0aW9ucylcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHJlcykgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICBzZW5kRGF0YSA9IHJlc1xuICAgIH1cbiAgfVxuICBpZiAoY29uZkRhdGFUeXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHNlbmREYXRhID0geyAuLi5zZW5kRGF0YSwgLi4uY29uZi5kYXRhIH1cbiAgfVxuICBsZXQgZmV0Y2hQYXJhbXMgPSB7IHVybCwgbWV0aG9kIH1cbiAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICBjb25zdCB0cmFuUGFyYW1zID0gb2JqMnBhcmFtcyhzZW5kRGF0YSkgLy8g5bqP5YiX5YyWXG4gICAgdXJsICs9IHRyYW5QYXJhbXMgPyAnJicgKyB0cmFuUGFyYW1zIDogJydcbiAgICBmZXRjaFBhcmFtcy51cmwgPSB1cmxcbiAgfSBlbHNlIHtcbiAgICBmZXRjaFBhcmFtcy5kYXRhID0gc2VuZERhdGFcbiAgfVxuICByZXR1cm4gZmV0Y2hQYXJhbXNcbn1cblxuZXhwb3J0IGNvbnN0IGFsbFNhZ2FzID0gc2FnYXNcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWFjdGlvbnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==