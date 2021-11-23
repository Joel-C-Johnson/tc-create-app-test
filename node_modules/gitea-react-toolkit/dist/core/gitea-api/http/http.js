"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseError = exports.defaultErrorMessages = exports.del = exports.patch = exports.put = exports.post = exports.get = exports.checkIfServerOnline = exports.extendConfig = exports.ERROR_NETWORK_ERROR = exports.ERROR_NETWORK_DISCONNECTED = exports.ERROR_SERVER_DISCONNECT_ERROR = exports.ERROR_SERVER_UNREACHABLE = exports.apiPath = void 0;

var _localforage = _interopRequireDefault(require("localforage"));

var _axios = _interopRequireDefault(require("axios"));

var _axiosCacheAdapter = require("axios-cache-adapter");

var _authentication = require("../authentication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var apiPath = 'api/v1';
exports.apiPath = apiPath;
var DEFAULT_MAX_AGE = 1000;
var SERVER_ONLINE_STATUS = 200;
var ERROR_SERVER_UNREACHABLE = 'ERR_SERVER_UNREACHABLE';
exports.ERROR_SERVER_UNREACHABLE = ERROR_SERVER_UNREACHABLE;
var ERROR_SERVER_DISCONNECT_ERROR = 'ERROR_SERVER_DISCONNECT_ERROR';
exports.ERROR_SERVER_DISCONNECT_ERROR = ERROR_SERVER_DISCONNECT_ERROR;
var ERROR_NETWORK_DISCONNECTED = 'ERR_NETWORK_DISCONNECTED';
exports.ERROR_NETWORK_DISCONNECTED = ERROR_NETWORK_DISCONNECTED;
var ERROR_NETWORK_ERROR = 'Network Error';
exports.ERROR_NETWORK_ERROR = ERROR_NETWORK_ERROR;

var cacheStore = _localforage.default.createInstance({
  driver: [_localforage.default.INDEXEDDB],
  name: 'web-cache'
});

var api = (0, _axiosCacheAdapter.setup)({
  crossDomain: true,
  cache: {
    store: cacheStore,
    maxAge: 1 * 1 * 1 * 1 * DEFAULT_MAX_AGE,
    exclude: {
      query: false
    },
    key: function key(req) {
      var serialized = req.params instanceof URLSearchParams ? req.params.toString() : JSON.stringify(req.params) || '';
      return req.url + serialized;
    }
  }
});

var extendConfig = function extendConfig(config) {
  var headers = _objectSpread({}, config.headers);

  if (config && config.token) {
    var authHeaders = (0, _authentication.authorizationHeaders)({
      token: config.token
    });
    headers = _objectSpread(_objectSpread({}, config.headers), authHeaders);
  }

  var _config = _objectSpread(_objectSpread({
    baseURL: config.server
  }, config), {}, {
    headers: headers
  });

  return _config;
};

exports.extendConfig = extendConfig;

/**
 * create error object from errorMessage and flag that it was from checking network connection status.  Also add http
 *      response if given
 * @param {string} errorMessage
 * @param {object} response - http response
 */
function getServerError(errorMessage, response) {
  var error = new Error(errorMessage);
  error[ERROR_SERVER_DISCONNECT_ERROR] = true; // flag that this error was from checking if server was online

  if (response) {
    // if we have response, add it
    error['response'] = response;
  }

  return error;
}
/**
 * Make sure that we are still connected to the server.  First checks that we are connected to local network.  If not,
 *      it throws an exception.  If local network is connected it tries to verify that server is up.  If server is
 *      not up, it throws an exception.
 *    Note - when axios returns exception, it adds the response to error.  And we add flag
 *      ERROR_SERVER_DISCONNECT_ERROR to error to simplify determining that it was an error checking that
 *      server was online.
 *
 * @param {string} serverUrl - base path for server (e.g. 'https://git.door43.org')
 * @param {ExtendConfig} config - optional axios compatible config parameters
 */


var checkIfServerOnline = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(serverUrl) {
    var _response;

    var config,
        response,
        errorMessage,
        serverIsResponding,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};

            if (navigator.onLine) {
              _context.next = 3;
              break;
            }

            throw getServerError(ERROR_NETWORK_DISCONNECTED, null);

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return _axios.default.get("".concat(serverUrl, "/").concat(apiPath, "/version"), config);

          case 6:
            response = _context.sent;
            _context.next = 18;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            errorMessage = _context.t0 && _context.t0.message ? _context.t0.message : '';

            if (!errorMessage.match(/network error/ig)) {
              _context.next = 16;
              break;
            }

            throw getServerError(ERROR_SERVER_UNREACHABLE, _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.response);

          case 16:
            _context.t0[ERROR_SERVER_DISCONNECT_ERROR] = true; // flag that this error was while checking if server was online

            throw _context.t0;

          case 18:
            serverIsResponding = ((_response = response) === null || _response === void 0 ? void 0 : _response.status) === SERVER_ONLINE_STATUS;

            if (serverIsResponding) {
              _context.next = 21;
              break;
            }

            throw getServerError(ERROR_SERVER_UNREACHABLE, response);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 9]]);
  }));

  return function checkIfServerOnline(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * do http get
 * @param {string} url
 * @param {object} params
 * @param {APIConfig|ExtendConfig} config - axios compatible config parameters
 * @param {boolean} [noCache] optional flag to disable caching
 * @param {boolean} [fullResponse] optional flag to return full http response including data and statusCode, useful if you want specifics such as http codes
 */


exports.checkIfServerOnline = checkIfServerOnline;

var get = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
    var url, params, config, noCache, fullResponse, _config, response, _params, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _ref2.url, params = _ref2.params, config = _ref2.config, noCache = _ref2.noCache, fullResponse = _ref2.fullResponse;
            _config = config ? extendConfig(config) : {};
            _context2.prev = 2;

            if (!(noCache || _config.noCache)) {
              _context2.next = 10;
              break;
            }

            // also check config for noCache
            _params = _objectSpread({
              noCache: Math.random()
            }, params);
            _context2.next = 7;
            return _axios.default.get(url, _objectSpread(_objectSpread({}, _config), {}, {
              params: _params
            }));

          case 7:
            response = _context2.sent;
            _context2.next = 13;
            break;

          case 10:
            _context2.next = 12;
            return api.get(url, _objectSpread(_objectSpread({}, _config), {}, {
              params: params
            }));

          case 12:
            response = _context2.sent;

          case 13:
            _context2.next = 21;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](2);

            if (config.skipNetworkCheck) {
              _context2.next = 20;
              break;
            }

            _context2.next = 20;
            return checkIfServerOnline(config.server, config);

          case 20:
            // will arrive here if server is online
            if (fullResponse) {
              if (_context2.t0 !== null && _context2.t0 !== void 0 && _context2.t0.response) {
                // if http error, get response
                response = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.response;
              } else {
                // this is not http error, so get what we can from exception
                response = {
                  statusText: _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.toString(),
                  status: 1
                };
              }
            }

          case 21:
            if (!fullResponse) {
              _context2.next = 23;
              break;
            }

            return _context2.abrupt("return", response);

          case 23:
            data = response ? response.data : null;
            return _context2.abrupt("return", data);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 15]]);
  }));

  return function get(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.get = get;

var post = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref4) {
    var url, payload, config, _config, _yield$axios$post, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = _ref4.url, payload = _ref4.payload, config = _ref4.config;
            _config = extendConfig(config);
            _context3.next = 4;
            return _axios.default.post(url, payload, _config);

          case 4:
            _yield$axios$post = _context3.sent;
            data = _yield$axios$post.data;
            return _context3.abrupt("return", data);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function post(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

exports.post = post;

var put = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref6) {
    var url, payload, config, _config, _yield$axios$put, data;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = _ref6.url, payload = _ref6.payload, config = _ref6.config;
            _config = extendConfig(config);
            _context4.next = 4;
            return _axios.default.put(url, payload, _config);

          case 4:
            _yield$axios$put = _context4.sent;
            data = _yield$axios$put.data;
            return _context4.abrupt("return", data);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function put(_x4) {
    return _ref7.apply(this, arguments);
  };
}();

exports.put = put;

var patch = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref8) {
    var url, payload, config, _config, _yield$axios$patch, data;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            url = _ref8.url, payload = _ref8.payload, config = _ref8.config;
            _config = extendConfig(config);
            _context5.next = 4;
            return _axios.default.patch(url, payload, _config);

          case 4:
            _yield$axios$patch = _context5.sent;
            data = _yield$axios$patch.data;
            return _context5.abrupt("return", data);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function patch(_x5) {
    return _ref9.apply(this, arguments);
  };
}();

exports.patch = patch;

var del = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref10) {
    var url, payload, config, _config, _yield$axios$delete, data;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            url = _ref10.url, payload = _ref10.payload, config = _ref10.config;
            _config = extendConfig(config);
            _config.data = payload;
            _context6.next = 5;
            return _axios.default.delete(url, _config);

          case 5:
            _yield$axios$delete = _context6.sent;
            data = _yield$axios$delete.data;
            return _context6.abrupt("return", data);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function del(_x6) {
    return _ref11.apply(this, arguments);
  };
}();

exports.del = del;
var defaultErrorMessages = {
  actionText: 'Login',
  genericError: 'Something went wrong, please try again.',
  usernameError: 'Username does not exist.',
  passwordError: 'Password is invalid.',
  networkError: 'There is an issue with your network connection. Please try again.',
  serverError: 'There is an issue with the server please try again.'
};
exports.defaultErrorMessages = defaultErrorMessages;

var parseError = function parseError(_ref12) {
  var error = _ref12.error,
      _ref12$messages = _ref12.messages,
      messages = _ref12$messages === void 0 ? defaultErrorMessages : _ref12$messages;
  var errorMessage = error && error.message ? error.message : '';
  var friendlyError = {};

  if (errorMessage.match(ERROR_SERVER_UNREACHABLE)) {
    friendlyError = {
      errorMessage: messages.serverError,
      isRecoverable: false
    };
  } else if (errorMessage.match(ERROR_NETWORK_DISCONNECTED) || errorMessage.match(ERROR_NETWORK_ERROR)) {
    friendlyError = {
      errorMessage: messages.networkError,
      isRecoverable: false
    };
  } else {
    friendlyError = {
      errorMessage: messages.genericError,
      isRecoverable: true
    };
  }

  return friendlyError;
};

exports.parseError = parseError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9odHRwL2h0dHAudHMiXSwibmFtZXMiOlsiYXBpUGF0aCIsIkRFRkFVTFRfTUFYX0FHRSIsIlNFUlZFUl9PTkxJTkVfU1RBVFVTIiwiRVJST1JfU0VSVkVSX1VOUkVBQ0hBQkxFIiwiRVJST1JfU0VSVkVSX0RJU0NPTk5FQ1RfRVJST1IiLCJFUlJPUl9ORVRXT1JLX0RJU0NPTk5FQ1RFRCIsIkVSUk9SX05FVFdPUktfRVJST1IiLCJjYWNoZVN0b3JlIiwibG9jYWxmb3JhZ2UiLCJjcmVhdGVJbnN0YW5jZSIsImRyaXZlciIsIklOREVYRUREQiIsIm5hbWUiLCJhcGkiLCJjcm9zc0RvbWFpbiIsImNhY2hlIiwic3RvcmUiLCJtYXhBZ2UiLCJleGNsdWRlIiwicXVlcnkiLCJrZXkiLCJyZXEiLCJzZXJpYWxpemVkIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwiZXh0ZW5kQ29uZmlnIiwiY29uZmlnIiwiaGVhZGVycyIsInRva2VuIiwiYXV0aEhlYWRlcnMiLCJfY29uZmlnIiwiYmFzZVVSTCIsInNlcnZlciIsImdldFNlcnZlckVycm9yIiwiZXJyb3JNZXNzYWdlIiwicmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwiY2hlY2tJZlNlcnZlck9ubGluZSIsInNlcnZlclVybCIsIm5hdmlnYXRvciIsIm9uTGluZSIsImF4aW9zIiwiZ2V0IiwibWVzc2FnZSIsIm1hdGNoIiwic2VydmVySXNSZXNwb25kaW5nIiwic3RhdHVzIiwibm9DYWNoZSIsImZ1bGxSZXNwb25zZSIsIl9wYXJhbXMiLCJNYXRoIiwicmFuZG9tIiwic2tpcE5ldHdvcmtDaGVjayIsInN0YXR1c1RleHQiLCJkYXRhIiwicG9zdCIsInBheWxvYWQiLCJwdXQiLCJwYXRjaCIsImRlbCIsImRlbGV0ZSIsImRlZmF1bHRFcnJvck1lc3NhZ2VzIiwiYWN0aW9uVGV4dCIsImdlbmVyaWNFcnJvciIsInVzZXJuYW1lRXJyb3IiLCJwYXNzd29yZEVycm9yIiwibmV0d29ya0Vycm9yIiwic2VydmVyRXJyb3IiLCJwYXJzZUVycm9yIiwibWVzc2FnZXMiLCJmcmllbmRseUVycm9yIiwiaXNSZWNvdmVyYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLE9BQU8sR0FBRyxRQUFoQjs7QUFDUCxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxHQUE3QjtBQUNPLElBQU1DLHdCQUF3QixHQUFHLHdCQUFqQzs7QUFDQSxJQUFNQyw2QkFBNkIsR0FBRywrQkFBdEM7O0FBQ0EsSUFBTUMsMEJBQTBCLEdBQUcsMEJBQW5DOztBQUNBLElBQU1DLG1CQUFtQixHQUFHLGVBQTVCOzs7QUFFUCxJQUFNQyxVQUFVLEdBQUdDLHFCQUFZQyxjQUFaLENBQTJCO0FBQzVDQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0YscUJBQVlHLFNBQWIsQ0FEb0M7QUFFNUNDLEVBQUFBLElBQUksRUFBRTtBQUZzQyxDQUEzQixDQUFuQjs7QUFLQSxJQUFNQyxHQUFHLEdBQUcsOEJBQU07QUFDaEJDLEVBQUFBLFdBQVcsRUFBRSxJQURHO0FBRWhCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsS0FBSyxFQUFFVCxVQURGO0FBRUxVLElBQUFBLE1BQU0sRUFBRSxJQUFJLENBQUosR0FBUSxDQUFSLEdBQVksQ0FBWixHQUFnQmhCLGVBRm5CO0FBR0xpQixJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FISjtBQUlMQyxJQUFBQSxHQUFHLEVBQUUsYUFBQUMsR0FBRyxFQUFJO0FBQ1YsVUFBTUMsVUFBVSxHQUFHRCxHQUFHLENBQUNFLE1BQUosWUFBc0JDLGVBQXRCLEdBQ2pCSCxHQUFHLENBQUNFLE1BQUosQ0FBV0UsUUFBWCxFQURpQixHQUNPQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sR0FBRyxDQUFDRSxNQUFuQixLQUE4QixFQUR4RDtBQUVBLGFBQU9GLEdBQUcsQ0FBQ08sR0FBSixHQUFVTixVQUFqQjtBQUNEO0FBUkk7QUFGUyxDQUFOLENBQVo7O0FBNEJPLElBQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBcUM7QUFDL0QsTUFBSUMsT0FBTyxxQkFBUUQsTUFBTSxDQUFDQyxPQUFmLENBQVg7O0FBRUEsTUFBSUQsTUFBTSxJQUFJQSxNQUFNLENBQUNFLEtBQXJCLEVBQTRCO0FBQzFCLFFBQU1DLFdBQVcsR0FBRywwQ0FBcUI7QUFBRUQsTUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNFO0FBQWhCLEtBQXJCLENBQXBCO0FBQ0FELElBQUFBLE9BQU8sbUNBQVFELE1BQU0sQ0FBQ0MsT0FBZixHQUEyQkUsV0FBM0IsQ0FBUDtBQUNEOztBQUVELE1BQU1DLE9BQU87QUFDWEMsSUFBQUEsT0FBTyxFQUFFTCxNQUFNLENBQUNNO0FBREwsS0FDZ0JOLE1BRGhCO0FBQ3dCQyxJQUFBQSxPQUFPLEVBQVBBO0FBRHhCLElBQWI7O0FBR0EsU0FBT0csT0FBUDtBQUNELENBWk07Ozs7QUFzQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0csY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0NDLFFBQXRDLEVBQWdEO0FBQzlDLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVVILFlBQVYsQ0FBZDtBQUNBRSxFQUFBQSxLQUFLLENBQUNwQyw2QkFBRCxDQUFMLEdBQXVDLElBQXZDLENBRjhDLENBRUQ7O0FBQzdDLE1BQUltQyxRQUFKLEVBQWM7QUFBRTtBQUNkQyxJQUFBQSxLQUFLLENBQUMsVUFBRCxDQUFMLEdBQW9CRCxRQUFwQjtBQUNEOztBQUNELFNBQU9DLEtBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1FLG1CQUFtQjtBQUFBLHFFQUFHLGlCQUFPQyxTQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtCYixZQUFBQSxNQUFsQiwyREFBd0MsRUFBeEM7O0FBQUEsZ0JBQzVCYyxTQUFTLENBQUNDLE1BRGtCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUV6QlIsY0FBYyxDQUFDaEMsMEJBQUQsRUFBNkIsSUFBN0IsQ0FGVzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFRZHlDLGVBQU1DLEdBQU4sV0FBYUosU0FBYixjQUEwQjNDLE9BQTFCLGVBQTZDOEIsTUFBN0MsQ0FSYzs7QUFBQTtBQVEvQlMsWUFBQUEsUUFSK0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVV6QkQsWUFBQUEsWUFWeUIsR0FVVixlQUFLLFlBQUVVLE9BQVAsR0FBaUIsWUFBRUEsT0FBbkIsR0FBNkIsRUFWbkI7O0FBQUEsaUJBWTNCVixZQUFZLENBQUNXLEtBQWIsQ0FBbUIsaUJBQW5CLENBWjJCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQWF2QlosY0FBYyxDQUFDbEMsd0JBQUQsNERBQTJCLFlBQUdvQyxRQUE5QixDQWJTOztBQUFBO0FBZTdCLHdCQUFFbkMsNkJBQUYsSUFBbUMsSUFBbkMsQ0FmNkIsQ0FlVzs7QUFmWDs7QUFBQTtBQW9CM0I4QyxZQUFBQSxrQkFwQjJCLEdBb0JOLGNBQUFYLFFBQVEsVUFBUiw4Q0FBVVksTUFBVixNQUFxQmpELG9CQXBCZjs7QUFBQSxnQkFxQjVCZ0Qsa0JBckI0QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFzQnpCYixjQUFjLENBQUNsQyx3QkFBRCxFQUEyQm9DLFFBQTNCLENBdEJXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQW5CRyxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsR0FBekI7QUEwQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNSyxHQUFHO0FBQUEsc0VBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQm5CLFlBQUFBLEdBRGlCLFNBQ2pCQSxHQURpQixFQUNaTCxNQURZLFNBQ1pBLE1BRFksRUFDSk8sTUFESSxTQUNKQSxNQURJLEVBQ0lzQixPQURKLFNBQ0lBLE9BREosRUFDYUMsWUFEYixTQUNhQSxZQURiO0FBR1huQixZQUFBQSxPQUhXLEdBR0RKLE1BQU0sR0FBR0QsWUFBWSxDQUFDQyxNQUFELENBQWYsR0FBMEIsRUFIL0I7QUFBQTs7QUFBQSxrQkFPWHNCLE9BQU8sSUFBSWxCLE9BQU8sQ0FBQ2tCLE9BUFI7QUFBQTtBQUFBO0FBQUE7O0FBT21CO0FBQzFCRSxZQUFBQSxPQVJPO0FBUUtGLGNBQUFBLE9BQU8sRUFBRUcsSUFBSSxDQUFDQyxNQUFMO0FBUmQsZUFRZ0NqQyxNQVJoQztBQUFBO0FBQUEsbUJBU0l1QixlQUFNQyxHQUFOLENBQVVuQixHQUFWLGtDQUFvQk0sT0FBcEI7QUFBNkJYLGNBQUFBLE1BQU0sRUFBRStCO0FBQXJDLGVBVEo7O0FBQUE7QUFTYmYsWUFBQUEsUUFUYTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQVdJMUIsR0FBRyxDQUFDa0MsR0FBSixDQUFRbkIsR0FBUixrQ0FBa0JNLE9BQWxCO0FBQTJCWCxjQUFBQSxNQUFNLEVBQU5BO0FBQTNCLGVBWEo7O0FBQUE7QUFXYmdCLFlBQUFBLFFBWGE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkFjVlQsTUFBTSxDQUFDMkIsZ0JBZEc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFlUGYsbUJBQW1CLENBQUNaLE1BQU0sQ0FBQ00sTUFBUixFQUFnQk4sTUFBaEIsQ0FmWjs7QUFBQTtBQWlCZjtBQUNBLGdCQUFJdUIsWUFBSixFQUFrQjtBQUNoQixzRUFBSSxhQUFHZCxRQUFQLEVBQWlCO0FBQUU7QUFDakJBLGdCQUFBQSxRQUFRLCtEQUFHLGFBQUdBLFFBQWQ7QUFDRCxlQUZELE1BRU87QUFBRTtBQUNQQSxnQkFBQUEsUUFBUSxHQUFHO0FBQ1BtQixrQkFBQUEsVUFBVSw4REFBRSxhQUFHakMsUUFBSCxFQURMO0FBRVAwQixrQkFBQUEsTUFBTSxFQUFFO0FBRkQsaUJBQVg7QUFJRDtBQUNGOztBQTNCYztBQUFBLGlCQThCYkUsWUE5QmE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBK0JSZCxRQS9CUTs7QUFBQTtBQWlDWG9CLFlBQUFBLElBakNXLEdBaUNKcEIsUUFBUSxHQUFHQSxRQUFRLENBQUNvQixJQUFaLEdBQW1CLElBakN2QjtBQUFBLDhDQWtDVkEsSUFsQ1U7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBSFosR0FBRztBQUFBO0FBQUE7QUFBQSxHQUFUOzs7O0FBcUNBLElBQU1hLElBQUk7QUFBQSxzRUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCaEMsWUFBQUEsR0FEa0IsU0FDbEJBLEdBRGtCLEVBQ2JpQyxPQURhLFNBQ2JBLE9BRGEsRUFDSi9CLE1BREksU0FDSkEsTUFESTtBQUdaSSxZQUFBQSxPQUhZLEdBR0ZMLFlBQVksQ0FBQ0MsTUFBRCxDQUhWO0FBQUE7QUFBQSxtQkFJS2dCLGVBQU1jLElBQU4sQ0FBV2hDLEdBQVgsRUFBZ0JpQyxPQUFoQixFQUF5QjNCLE9BQXpCLENBSkw7O0FBQUE7QUFBQTtBQUlWeUIsWUFBQUEsSUFKVSxxQkFJVkEsSUFKVTtBQUFBLDhDQUtYQSxJQUxXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUpDLElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBVjs7OztBQVFBLElBQU1FLEdBQUc7QUFBQSxzRUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCbEMsWUFBQUEsR0FEaUIsU0FDakJBLEdBRGlCLEVBQ1ppQyxPQURZLFNBQ1pBLE9BRFksRUFDSC9CLE1BREcsU0FDSEEsTUFERztBQUdYSSxZQUFBQSxPQUhXLEdBR0RMLFlBQVksQ0FBQ0MsTUFBRCxDQUhYO0FBQUE7QUFBQSxtQkFJTWdCLGVBQU1nQixHQUFOLENBQVVsQyxHQUFWLEVBQWVpQyxPQUFmLEVBQXdCM0IsT0FBeEIsQ0FKTjs7QUFBQTtBQUFBO0FBSVR5QixZQUFBQSxJQUpTLG9CQUlUQSxJQUpTO0FBQUEsOENBS1ZBLElBTFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBSEcsR0FBRztBQUFBO0FBQUE7QUFBQSxHQUFUOzs7O0FBUUEsSUFBTUMsS0FBSztBQUFBLHNFQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJuQyxZQUFBQSxHQURtQixTQUNuQkEsR0FEbUIsRUFDZGlDLE9BRGMsU0FDZEEsT0FEYyxFQUNML0IsTUFESyxTQUNMQSxNQURLO0FBR2JJLFlBQUFBLE9BSGEsR0FHSEwsWUFBWSxDQUFDQyxNQUFELENBSFQ7QUFBQTtBQUFBLG1CQUlJZ0IsZUFBTWlCLEtBQU4sQ0FBWW5DLEdBQVosRUFBaUJpQyxPQUFqQixFQUEwQjNCLE9BQTFCLENBSko7O0FBQUE7QUFBQTtBQUlYeUIsWUFBQUEsSUFKVyxzQkFJWEEsSUFKVztBQUFBLDhDQUtaQSxJQUxZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUxJLEtBQUs7QUFBQTtBQUFBO0FBQUEsR0FBWDs7OztBQVFBLElBQU1DLEdBQUc7QUFBQSx1RUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCcEMsWUFBQUEsR0FEaUIsVUFDakJBLEdBRGlCLEVBQ1ppQyxPQURZLFVBQ1pBLE9BRFksRUFDSC9CLE1BREcsVUFDSEEsTUFERztBQUdYSSxZQUFBQSxPQUhXLEdBR0RMLFlBQVksQ0FBQ0MsTUFBRCxDQUhYO0FBSWpCSSxZQUFBQSxPQUFPLENBQUN5QixJQUFSLEdBQWVFLE9BQWY7QUFKaUI7QUFBQSxtQkFLTWYsZUFBTW1CLE1BQU4sQ0FBYXJDLEdBQWIsRUFBa0JNLE9BQWxCLENBTE47O0FBQUE7QUFBQTtBQUtUeUIsWUFBQUEsSUFMUyx1QkFLVEEsSUFMUztBQUFBLDhDQU1WQSxJQU5VOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUhLLEdBQUc7QUFBQTtBQUFBO0FBQUEsR0FBVDs7O0FBU0EsSUFBTUUsb0JBQW9CLEdBQUc7QUFDbENDLEVBQUFBLFVBQVUsRUFBRSxPQURzQjtBQUVsQ0MsRUFBQUEsWUFBWSxFQUFFLHlDQUZvQjtBQUdsQ0MsRUFBQUEsYUFBYSxFQUFFLDBCQUhtQjtBQUlsQ0MsRUFBQUEsYUFBYSxFQUFFLHNCQUptQjtBQUtsQ0MsRUFBQUEsWUFBWSxFQUFFLG1FQUxvQjtBQU1sQ0MsRUFBQUEsV0FBVyxFQUFFO0FBTnFCLENBQTdCOzs7QUFTQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxTQUFnRDtBQUFBLE1BQTdDakMsS0FBNkMsVUFBN0NBLEtBQTZDO0FBQUEsK0JBQXRDa0MsUUFBc0M7QUFBQSxNQUF0Q0EsUUFBc0MsZ0NBQTNCUixvQkFBMkI7QUFDeEUsTUFBTTVCLFlBQVksR0FBR0UsS0FBSyxJQUFJQSxLQUFLLENBQUNRLE9BQWYsR0FBeUJSLEtBQUssQ0FBQ1EsT0FBL0IsR0FBeUMsRUFBOUQ7QUFDQSxNQUFJMkIsYUFBYSxHQUFHLEVBQXBCOztBQUVBLE1BQUlyQyxZQUFZLENBQUNXLEtBQWIsQ0FBbUI5Qyx3QkFBbkIsQ0FBSixFQUFrRDtBQUNoRHdFLElBQUFBLGFBQWEsR0FBRztBQUNkckMsTUFBQUEsWUFBWSxFQUFFb0MsUUFBUSxDQUFDRixXQURUO0FBRWRJLE1BQUFBLGFBQWEsRUFBRTtBQUZELEtBQWhCO0FBSUQsR0FMRCxNQU1LLElBQUl0QyxZQUFZLENBQUNXLEtBQWIsQ0FBbUI1QywwQkFBbkIsS0FBa0RpQyxZQUFZLENBQUNXLEtBQWIsQ0FBbUIzQyxtQkFBbkIsQ0FBdEQsRUFBK0Y7QUFDbEdxRSxJQUFBQSxhQUFhLEdBQUc7QUFDZHJDLE1BQUFBLFlBQVksRUFBRW9DLFFBQVEsQ0FBQ0gsWUFEVDtBQUVkSyxNQUFBQSxhQUFhLEVBQUU7QUFGRCxLQUFoQjtBQUlELEdBTEksTUFNQTtBQUNIRCxJQUFBQSxhQUFhLEdBQUc7QUFDZHJDLE1BQUFBLFlBQVksRUFBRW9DLFFBQVEsQ0FBQ04sWUFEVDtBQUVkUSxNQUFBQSxhQUFhLEVBQUU7QUFGRCxLQUFoQjtBQUlEOztBQUVELFNBQU9ELGFBQVA7QUFDRCxDQXhCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgc2V0dXAgfSBmcm9tICdheGlvcy1jYWNoZS1hZGFwdGVyJztcbmltcG9ydCB7IGF1dGhvcml6YXRpb25IZWFkZXJzIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24nO1xuaW1wb3J0IHsgQVBJQ29uZmlnIH0gZnJvbSAnLi9odHRwLmQnO1xuZXhwb3J0IGNvbnN0IGFwaVBhdGggPSAnYXBpL3YxJztcbmNvbnN0IERFRkFVTFRfTUFYX0FHRSA9IDEwMDA7XG5jb25zdCBTRVJWRVJfT05MSU5FX1NUQVRVUyA9IDIwMDtcbmV4cG9ydCBjb25zdCBFUlJPUl9TRVJWRVJfVU5SRUFDSEFCTEUgPSAnRVJSX1NFUlZFUl9VTlJFQUNIQUJMRSc7XG5leHBvcnQgY29uc3QgRVJST1JfU0VSVkVSX0RJU0NPTk5FQ1RfRVJST1IgPSAnRVJST1JfU0VSVkVSX0RJU0NPTk5FQ1RfRVJST1InO1xuZXhwb3J0IGNvbnN0IEVSUk9SX05FVFdPUktfRElTQ09OTkVDVEVEID0gJ0VSUl9ORVRXT1JLX0RJU0NPTk5FQ1RFRCc7XG5leHBvcnQgY29uc3QgRVJST1JfTkVUV09SS19FUlJPUiA9ICdOZXR3b3JrIEVycm9yJztcblxuY29uc3QgY2FjaGVTdG9yZSA9IGxvY2FsZm9yYWdlLmNyZWF0ZUluc3RhbmNlKHtcbiAgZHJpdmVyOiBbbG9jYWxmb3JhZ2UuSU5ERVhFRERCXSxcbiAgbmFtZTogJ3dlYi1jYWNoZScsXG59KTtcblxuY29uc3QgYXBpID0gc2V0dXAoe1xuICBjcm9zc0RvbWFpbjogdHJ1ZSxcbiAgY2FjaGU6IHtcbiAgICBzdG9yZTogY2FjaGVTdG9yZSxcbiAgICBtYXhBZ2U6IDEgKiAxICogMSAqIDEgKiBERUZBVUxUX01BWF9BR0UsXG4gICAgZXhjbHVkZTogeyBxdWVyeTogZmFsc2UgfSxcbiAgICBrZXk6IHJlcSA9PiB7XG4gICAgICBjb25zdCBzZXJpYWxpemVkID0gcmVxLnBhcmFtcyBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyA/XG4gICAgICAgIHJlcS5wYXJhbXMudG9TdHJpbmcoKSA6IEpTT04uc3RyaW5naWZ5KHJlcS5wYXJhbXMpIHx8ICcnO1xuICAgICAgcmV0dXJuIHJlcS51cmwgKyBzZXJpYWxpemVkO1xuICAgIH0sXG4gIH0sXG59KTtcblxuaW50ZXJmYWNlIFJlc3RBUEkge1xuICBjb25maWc6IEV4dGVuZENvbmZpZztcbiAgdXJsOiBzdHJpbmc7XG4gIHBheWxvYWQ6IG9iamVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRlbmRDb25maWcge1xuICB0b2tlbj86IHN0cmluZztcbiAgdG9rZW5pZD86IHN0cmluZztcbiAgaGVhZGVycz86IG9iamVjdDtcbiAgc2VydmVyPzogc3RyaW5nO1xuICBkYXRhPzogb2JqZWN0O1xufVxuXG5leHBvcnQgY29uc3QgZXh0ZW5kQ29uZmlnID0gKGNvbmZpZzogRXh0ZW5kQ29uZmlnKTogQVBJQ29uZmlnID0+IHtcbiAgbGV0IGhlYWRlcnMgPSB7IC4uLmNvbmZpZy5oZWFkZXJzIH07XG5cbiAgaWYgKGNvbmZpZyAmJiBjb25maWcudG9rZW4pIHtcbiAgICBjb25zdCBhdXRoSGVhZGVycyA9IGF1dGhvcml6YXRpb25IZWFkZXJzKHsgdG9rZW46IGNvbmZpZy50b2tlbiB9KTtcbiAgICBoZWFkZXJzID0geyAuLi5jb25maWcuaGVhZGVycywgLi4uYXV0aEhlYWRlcnMgfTtcbiAgfVxuXG4gIGNvbnN0IF9jb25maWcgPSB7XG4gICAgYmFzZVVSTDogY29uZmlnLnNlcnZlciwgLi4uY29uZmlnLCBoZWFkZXJzLFxuICB9O1xuICByZXR1cm4gX2NvbmZpZztcbn07XG5cbmludGVyZmFjZSBHZXQge1xuICBjb25maWc6IEFQSUNvbmZpZyB8IEV4dGVuZENvbmZpZztcbiAgdXJsOiBzdHJpbmc7XG4gIHBhcmFtcz86IG9iamVjdDtcbiAgbm9DYWNoZT86IG51bWJlciB8IGJvb2xlYW47XG4gIGZ1bGxSZXNwb25zZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogY3JlYXRlIGVycm9yIG9iamVjdCBmcm9tIGVycm9yTWVzc2FnZSBhbmQgZmxhZyB0aGF0IGl0IHdhcyBmcm9tIGNoZWNraW5nIG5ldHdvcmsgY29ubmVjdGlvbiBzdGF0dXMuICBBbHNvIGFkZCBodHRwXG4gKiAgICAgIHJlc3BvbnNlIGlmIGdpdmVuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JNZXNzYWdlXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgLSBodHRwIHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIGdldFNlcnZlckVycm9yKGVycm9yTWVzc2FnZSwgcmVzcG9uc2UpIHtcbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgZXJyb3JbRVJST1JfU0VSVkVSX0RJU0NPTk5FQ1RfRVJST1JdID0gdHJ1ZTsgLy8gZmxhZyB0aGF0IHRoaXMgZXJyb3Igd2FzIGZyb20gY2hlY2tpbmcgaWYgc2VydmVyIHdhcyBvbmxpbmVcbiAgaWYgKHJlc3BvbnNlKSB7IC8vIGlmIHdlIGhhdmUgcmVzcG9uc2UsIGFkZCBpdFxuICAgIGVycm9yWydyZXNwb25zZSddID0gcmVzcG9uc2U7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGF0IHdlIGFyZSBzdGlsbCBjb25uZWN0ZWQgdG8gdGhlIHNlcnZlci4gIEZpcnN0IGNoZWNrcyB0aGF0IHdlIGFyZSBjb25uZWN0ZWQgdG8gbG9jYWwgbmV0d29yay4gIElmIG5vdCxcbiAqICAgICAgaXQgdGhyb3dzIGFuIGV4Y2VwdGlvbi4gIElmIGxvY2FsIG5ldHdvcmsgaXMgY29ubmVjdGVkIGl0IHRyaWVzIHRvIHZlcmlmeSB0aGF0IHNlcnZlciBpcyB1cC4gIElmIHNlcnZlciBpc1xuICogICAgICBub3QgdXAsIGl0IHRocm93cyBhbiBleGNlcHRpb24uXG4gKiAgICBOb3RlIC0gd2hlbiBheGlvcyByZXR1cm5zIGV4Y2VwdGlvbiwgaXQgYWRkcyB0aGUgcmVzcG9uc2UgdG8gZXJyb3IuICBBbmQgd2UgYWRkIGZsYWdcbiAqICAgICAgRVJST1JfU0VSVkVSX0RJU0NPTk5FQ1RfRVJST1IgdG8gZXJyb3IgdG8gc2ltcGxpZnkgZGV0ZXJtaW5pbmcgdGhhdCBpdCB3YXMgYW4gZXJyb3IgY2hlY2tpbmcgdGhhdFxuICogICAgICBzZXJ2ZXIgd2FzIG9ubGluZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VydmVyVXJsIC0gYmFzZSBwYXRoIGZvciBzZXJ2ZXIgKGUuZy4gJ2h0dHBzOi8vZ2l0LmRvb3I0My5vcmcnKVxuICogQHBhcmFtIHtFeHRlbmRDb25maWd9IGNvbmZpZyAtIG9wdGlvbmFsIGF4aW9zIGNvbXBhdGlibGUgY29uZmlnIHBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IGNoZWNrSWZTZXJ2ZXJPbmxpbmUgPSBhc3luYyAoc2VydmVyVXJsLCBjb25maWc6IEV4dGVuZENvbmZpZz0ge30pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgdGhyb3cgZ2V0U2VydmVyRXJyb3IoRVJST1JfTkVUV09SS19ESVNDT05ORUNURUQsIG51bGwpO1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlO1xuICB0cnkge1xuICAgICAgLy8gY2hlY2tpbmcgaWYgc2VydmVyIHJlc3BvbmRzXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7c2VydmVyVXJsfS8ke2FwaVBhdGh9L3ZlcnNpb25gLCBjb25maWcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSAmJiBlLm1lc3NhZ2UgPyBlLm1lc3NhZ2UgOiAnJztcblxuICAgIGlmIChlcnJvck1lc3NhZ2UubWF0Y2goL25ldHdvcmsgZXJyb3IvaWcpKSB7XG4gICAgICB0aHJvdyBnZXRTZXJ2ZXJFcnJvcihFUlJPUl9TRVJWRVJfVU5SRUFDSEFCTEUsIGU/LnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZVtFUlJPUl9TRVJWRVJfRElTQ09OTkVDVF9FUlJPUl0gPSB0cnVlIC8vIGZsYWcgdGhhdCB0aGlzIGVycm9yIHdhcyB3aGlsZSBjaGVja2luZyBpZiBzZXJ2ZXIgd2FzIG9ubGluZVxuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXJ2ZXJJc1Jlc3BvbmRpbmcgPSByZXNwb25zZT8uc3RhdHVzID09PSBTRVJWRVJfT05MSU5FX1NUQVRVUztcbiAgaWYgKCFzZXJ2ZXJJc1Jlc3BvbmRpbmcpIHtcbiAgICB0aHJvdyBnZXRTZXJ2ZXJFcnJvcihFUlJPUl9TRVJWRVJfVU5SRUFDSEFCTEUsIHJlc3BvbnNlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBkbyBodHRwIGdldFxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtBUElDb25maWd8RXh0ZW5kQ29uZmlnfSBjb25maWcgLSBheGlvcyBjb21wYXRpYmxlIGNvbmZpZyBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtub0NhY2hlXSBvcHRpb25hbCBmbGFnIHRvIGRpc2FibGUgY2FjaGluZ1xuICogQHBhcmFtIHtib29sZWFufSBbZnVsbFJlc3BvbnNlXSBvcHRpb25hbCBmbGFnIHRvIHJldHVybiBmdWxsIGh0dHAgcmVzcG9uc2UgaW5jbHVkaW5nIGRhdGEgYW5kIHN0YXR1c0NvZGUsIHVzZWZ1bCBpZiB5b3Ugd2FudCBzcGVjaWZpY3Mgc3VjaCBhcyBodHRwIGNvZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXQgPSBhc3luYyAoe1xuICB1cmwsIHBhcmFtcywgY29uZmlnLCBub0NhY2hlLCBmdWxsUmVzcG9uc2UsXG59OiBHZXQpOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zdCBfY29uZmlnID0gY29uZmlnID8gZXh0ZW5kQ29uZmlnKGNvbmZpZykgOiB7fTtcbiAgbGV0IHJlc3BvbnNlOiBhbnk7XG5cbiAgdHJ5IHtcbiAgICBpZiAobm9DYWNoZSB8fCBfY29uZmlnLm5vQ2FjaGUpIHsgLy8gYWxzbyBjaGVjayBjb25maWcgZm9yIG5vQ2FjaGVcbiAgICAgIGNvbnN0IF9wYXJhbXMgPSB7IG5vQ2FjaGU6IE1hdGgucmFuZG9tKCksIC4uLnBhcmFtcyB9O1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7IC4uLl9jb25maWcsIHBhcmFtczogX3BhcmFtcyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHVybCwgeyAuLi5fY29uZmlnLCBwYXJhbXMgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKCFjb25maWcuc2tpcE5ldHdvcmtDaGVjaykge1xuICAgICAgYXdhaXQgY2hlY2tJZlNlcnZlck9ubGluZShjb25maWcuc2VydmVyLCBjb25maWcpO1xuICAgIH1cbiAgICAvLyB3aWxsIGFycml2ZSBoZXJlIGlmIHNlcnZlciBpcyBvbmxpbmVcbiAgICBpZiAoZnVsbFJlc3BvbnNlKSB7XG4gICAgICBpZiAoZT8ucmVzcG9uc2UpIHsgLy8gaWYgaHR0cCBlcnJvciwgZ2V0IHJlc3BvbnNlXG4gICAgICAgIHJlc3BvbnNlID0gZT8ucmVzcG9uc2U7XG4gICAgICB9IGVsc2UgeyAvLyB0aGlzIGlzIG5vdCBodHRwIGVycm9yLCBzbyBnZXQgd2hhdCB3ZSBjYW4gZnJvbSBleGNlcHRpb25cbiAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBzdGF0dXNUZXh0OiBlPy50b1N0cmluZygpLFxuICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGZ1bGxSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICBjb25zdCBkYXRhID0gcmVzcG9uc2UgPyByZXNwb25zZS5kYXRhIDogbnVsbDtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdCA9IGFzeW5jICh7XG4gIHVybCwgcGF5bG9hZCwgY29uZmlnLFxufTogUmVzdEFQSSk6IFByb21pc2U8YW55PiA9PiB7XG4gIGNvbnN0IF9jb25maWcgPSBleHRlbmRDb25maWcoY29uZmlnKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgcGF5bG9hZCwgX2NvbmZpZyk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHB1dCA9IGFzeW5jICh7XG4gIHVybCwgcGF5bG9hZCwgY29uZmlnLFxufTogUmVzdEFQSSk6IFByb21pc2U8YW55PiA9PiB7XG4gIGNvbnN0IF9jb25maWcgPSBleHRlbmRDb25maWcoY29uZmlnKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wdXQodXJsLCBwYXlsb2FkLCBfY29uZmlnKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgcGF0Y2ggPSBhc3luYyAoe1xuICB1cmwsIHBheWxvYWQsIGNvbmZpZyxcbn06IFJlc3RBUEkpOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zdCBfY29uZmlnID0gZXh0ZW5kQ29uZmlnKGNvbmZpZyk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucGF0Y2godXJsLCBwYXlsb2FkLCBfY29uZmlnKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsID0gYXN5bmMgKHtcbiAgdXJsLCBwYXlsb2FkLCBjb25maWcsXG59OiBSZXN0QVBJKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgY29uc3QgX2NvbmZpZyA9IGV4dGVuZENvbmZpZyhjb25maWcpO1xuICBfY29uZmlnLmRhdGEgPSBwYXlsb2FkO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmRlbGV0ZSh1cmwsIF9jb25maWcpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0RXJyb3JNZXNzYWdlcyA9IHtcbiAgYWN0aW9uVGV4dDogJ0xvZ2luJyxcbiAgZ2VuZXJpY0Vycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uJyxcbiAgdXNlcm5hbWVFcnJvcjogJ1VzZXJuYW1lIGRvZXMgbm90IGV4aXN0LicsXG4gIHBhc3N3b3JkRXJyb3I6ICdQYXNzd29yZCBpcyBpbnZhbGlkLicsXG4gIG5ldHdvcmtFcnJvcjogJ1RoZXJlIGlzIGFuIGlzc3VlIHdpdGggeW91ciBuZXR3b3JrIGNvbm5lY3Rpb24uIFBsZWFzZSB0cnkgYWdhaW4uJyxcbiAgc2VydmVyRXJyb3I6ICdUaGVyZSBpcyBhbiBpc3N1ZSB3aXRoIHRoZSBzZXJ2ZXIgcGxlYXNlIHRyeSBhZ2Fpbi4nLFxufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlRXJyb3IgPSAoeyBlcnJvciwgbWVzc2FnZXMgPSBkZWZhdWx0RXJyb3JNZXNzYWdlcyB9KSA9PiB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogJyc7XG4gIGxldCBmcmllbmRseUVycm9yID0ge307XG5cbiAgaWYgKGVycm9yTWVzc2FnZS5tYXRjaChFUlJPUl9TRVJWRVJfVU5SRUFDSEFCTEUpKSB7XG4gICAgZnJpZW5kbHlFcnJvciA9IHtcbiAgICAgIGVycm9yTWVzc2FnZTogbWVzc2FnZXMuc2VydmVyRXJyb3IsXG4gICAgICBpc1JlY292ZXJhYmxlOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgZWxzZSBpZiAoZXJyb3JNZXNzYWdlLm1hdGNoKEVSUk9SX05FVFdPUktfRElTQ09OTkVDVEVEKSB8fCBlcnJvck1lc3NhZ2UubWF0Y2goRVJST1JfTkVUV09SS19FUlJPUikpIHtcbiAgICBmcmllbmRseUVycm9yID0ge1xuICAgICAgZXJyb3JNZXNzYWdlOiBtZXNzYWdlcy5uZXR3b3JrRXJyb3IsXG4gICAgICBpc1JlY292ZXJhYmxlOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIGVsc2Uge1xuICAgIGZyaWVuZGx5RXJyb3IgPSB7XG4gICAgICBlcnJvck1lc3NhZ2U6IG1lc3NhZ2VzLmdlbmVyaWNFcnJvcixcbiAgICAgIGlzUmVjb3ZlcmFibGU6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmcmllbmRseUVycm9yO1xufTsiXX0=