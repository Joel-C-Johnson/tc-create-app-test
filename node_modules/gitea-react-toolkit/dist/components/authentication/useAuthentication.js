"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deepFreeze = _interopRequireDefault(require("deep-freeze"));

var _core = require("../../core");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useAuthentication(_ref) {
  var messages = _ref.messages,
      _authentication = _ref.authentication,
      onAuthentication = _ref.onAuthentication,
      config = _ref.config,
      loadAuthentication = _ref.loadAuthentication,
      saveAuthentication = _ref.saveAuthentication,
      onError = _ref.onError;

  var authentication = _authentication && (0, _deepFreeze.default)(_authentication);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  if (!messages) {
    messages = _core.defaultErrorMessages;
  }

  var logout = (0, _react.useCallback)(function (_auth) {
    saveAuthentication && saveAuthentication();
  }, [saveAuthentication]);
  /*
  const update = useCallback(async (_auth) => {
    if (_auth && _auth.remember && saveAuthentication) {
      await saveAuthentication(_auth);
    }
    return onAuthentication && onAuthentication(_auth);
  }, [onAuthentication]);
  */

  var update = (0, _react.useCallback)(function (_auth) {
    if (_auth) {
      if (saveAuthentication) {
        if (_auth.remember) {
          saveAuthentication(_auth);
        } else {
          saveAuthentication();
        }
      }
    }

    if (onAuthentication) {
      onAuthentication(_auth);
    }
  }, [onAuthentication, saveAuthentication]);
  (0, _react.useEffect)(function () {
    if (!authentication && loadAuthentication) {
      loadAuthentication().then(function (_authentication) {
        if (_authentication) {
          update(_authentication);
        }
      });
    }
  }, [authentication, loadAuthentication, update]);
  var onSubmitLogin = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var username, password, remember, _authentication2, user, token, friendlyError;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = _ref2.username, password = _ref2.password, remember = _ref2.remember;
              _context.prev = 1;
              _context.next = 4;
              return (0, _core.authenticate)({
                username: username,
                password: password,
                config: config
              });

            case 4:
              _authentication2 = _context.sent;
              _authentication2.remember = remember;

              if (_authentication2) {
                user = _authentication2.user, token = _authentication2.token;

                if (user && token) {
                  setError();
                  update(_authentication2);
                } else {
                  if (!user) {
                    setError(messages.usernameError);
                  } else if (!token) {
                    setError(messages.passwordError);
                  }
                }
              } else {
                console.log('authentication failed?', _authentication2);
              }

              _context.next = 15;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log('Authentication error:', _context.t0);
              friendlyError = (0, _core.parseError)(_context.t0);
              setError(friendlyError.errorMessage);
              onError && onError(friendlyError);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), [config, logout, update, messages.genericError, messages.networkError, messages.passwordError, messages.serverError, messages.usernameError]);
  var onSubmit = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref4) {
      var username, password, remember;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              username = _ref4.username, password = _ref4.password, remember = _ref4.remember;

              if (!authentication) {
                _context2.next = 6;
                break;
              }

              logout();
              update();
              _context2.next = 8;
              break;

            case 6:
              _context2.next = 8;
              return onSubmitLogin({
                username: username,
                password: password,
                remember: remember
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }(), [authentication, config, logout, update, onSubmitLogin]);
  var component = (0, _react.useMemo)(function () {
    return config && /*#__PURE__*/_react.default.createElement(_.LoginForm, {
      config: config,
      authentication: authentication,
      actionText: messages.actionText,
      errorText: error,
      onSubmit: onSubmit
    });
  }, [authentication, config, error, messages.actionText, onSubmit]);

  var _config = authentication && authentication.config || config;

  var response = {
    state: authentication,
    actions: {
      update: update,
      logout: logout,
      onLoginFormSubmit: onSubmit,
      onLoginFormSubmitLogin: onSubmitLogin
    },
    component: component,
    config: _config,
    messages: messages
  };
  return response;
}

;
useAuthentication.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    token: _propTypes.default.object.isRequired,
    config: _propTypes.default.object.isRequired,
    remember: _propTypes.default.bool
  }),

  /** Callback function to propogate the user/token used for API Authentication. */
  onAuthentication: _propTypes.default.func,

  /** Configuration to pass through to the Authentication component. */

  /** Override the default text and errors. Must override all or none. */
  messages: _propTypes.default.shape({
    actionText: _propTypes.default.string.isRequired,
    genericError: _propTypes.default.string.isRequired,
    usernameError: _propTypes.default.string.isRequired,
    passwordError: _propTypes.default.string.isRequired
  }),
  config: _propTypes.default.shape({
    /** The Gitea server to use when authenticating. */
    server: _propTypes.default.string.isRequired,

    /** The id of the token to create/retrieve that is used for the app. */
    tokenid: _propTypes.default.string.isRequired
  }),

  /** Callback function to persist authentication. */
  saveAuthentication: _propTypes.default.func,

  /** Callback function to retrieve persisted authentication. */
  loadAuthentication: _propTypes.default.func,

  /** Callback function on error. */
  onError: _propTypes.default.func
};
var _default = useAuthentication;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL3VzZUF1dGhlbnRpY2F0aW9uLmpzIl0sIm5hbWVzIjpbInVzZUF1dGhlbnRpY2F0aW9uIiwibWVzc2FnZXMiLCJfYXV0aGVudGljYXRpb24iLCJhdXRoZW50aWNhdGlvbiIsIm9uQXV0aGVudGljYXRpb24iLCJjb25maWciLCJsb2FkQXV0aGVudGljYXRpb24iLCJzYXZlQXV0aGVudGljYXRpb24iLCJvbkVycm9yIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHRFcnJvck1lc3NhZ2VzIiwibG9nb3V0IiwiX2F1dGgiLCJ1cGRhdGUiLCJyZW1lbWJlciIsInRoZW4iLCJvblN1Ym1pdExvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXIiLCJ0b2tlbiIsInVzZXJuYW1lRXJyb3IiLCJwYXNzd29yZEVycm9yIiwiY29uc29sZSIsImxvZyIsImZyaWVuZGx5RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJnZW5lcmljRXJyb3IiLCJuZXR3b3JrRXJyb3IiLCJzZXJ2ZXJFcnJvciIsIm9uU3VibWl0IiwiY29tcG9uZW50IiwiYWN0aW9uVGV4dCIsIl9jb25maWciLCJyZXNwb25zZSIsInN0YXRlIiwiYWN0aW9ucyIsIm9uTG9naW5Gb3JtU3VibWl0Iiwib25Mb2dpbkZvcm1TdWJtaXRMb2dpbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwic3RyaW5nIiwic2VydmVyIiwidG9rZW5pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGlCQUFULE9BUUc7QUFBQSxNQVBEQyxRQU9DLFFBUERBLFFBT0M7QUFBQSxNQU5lQyxlQU1mLFFBTkRDLGNBTUM7QUFBQSxNQUxEQyxnQkFLQyxRQUxEQSxnQkFLQztB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QUVvQixtQkFBVUUsTUFBVixDQUFpQkMsVUFGTTtBQUc5QnZDLElBQUFBLE1BQU0sRUFBRW9DLG1CQUFVRSxNQUFWLENBQWlCQyxVQUhLO0FBSTlCN0IsSUFBQUEsUUFBUSxFQUFFMEIsbUJBQVVJO0FBSlUsR0FBaEIsQ0FGWTs7QUFRNUI7QUFDQXpDLEVBQUFBLGdCQUFnQixFQUFFcUMsbUJBQVVLLElBVEE7O0FBVTVCOztBQUNBO0FBQ0E3QyxFQUFBQSxRQUFRLEVBQUV3QyxtQkFBVUMsS0FBVixDQUFnQjtBQUN4QlQsSUFBQUEsVUFBVSxFQUFFUSxtQkFBVU0sTUFBVixDQUFpQkgsVUFETDtBQUV4QmhCLElBQUFBLFlBQVksRUFBRWEsbUJBQVVNLE1BQVYsQ0FBaUJILFVBRlA7QUFHeEJ0QixJQUFBQSxhQUFhLEVBQUVtQixtQkFBVU0sTUFBVixDQUFpQkgsVUFIUjtBQUl4QnJCLElBQUFBLGFBQWEsRUFBRWtCLG1CQUFVTSxNQUFWLENBQWlCSDtBQUpSLEdBQWhCLENBWmtCO0FBa0I1QnZDLEVBQUFBLE1BQU0sRUFBRW9DLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3RCO0FBQ0FNLElBQUFBLE1BQU0sRUFBRVAsbUJBQVVNLE1BQVYsQ0FBaUJILFVBRkg7O0FBR3RCO0FBQ0FLLElBQUFBLE9BQU8sRUFBRVIsbUJBQVVNLE1BQVYsQ0FBaUJIO0FBSkosR0FBaEIsQ0FsQm9COztBQXdCNUI7QUFDQXJDLEVBQUFBLGtCQUFrQixFQUFFa0MsbUJBQVVLLElBekJGOztBQTBCNUI7QUFDQXhDLEVBQUFBLGtCQUFrQixFQUFFbUMsbUJBQVVLLElBM0JGOztBQTRCNUI7QUFDQXRDLEVBQUFBLE9BQU8sRUFBRWlDLG1CQUFVSztBQTdCUyxDQUE5QjtlQWdDZTlDLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VFZmZlY3QsIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZXBGcmVlemUgZnJvbSAnZGVlcC1mcmVlemUnO1xuaW1wb3J0IHtcbiAgYXV0aGVudGljYXRlLFxuICBkZWZhdWx0RXJyb3JNZXNzYWdlcyxcbiAgcGFyc2VFcnJvcixcbiAgRVJST1JfU0VSVkVSX1VOUkVBQ0hBQkxFLFxuICBFUlJPUl9ORVRXT1JLX0RJU0NPTk5FQ1RFRCxcbn0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuJztcblxuZnVuY3Rpb24gdXNlQXV0aGVudGljYXRpb24oe1xuICBtZXNzYWdlcyxcbiAgYXV0aGVudGljYXRpb246IF9hdXRoZW50aWNhdGlvbixcbiAgb25BdXRoZW50aWNhdGlvbixcbiAgY29uZmlnLFxuICBsb2FkQXV0aGVudGljYXRpb24sXG4gIHNhdmVBdXRoZW50aWNhdGlvbixcbiAgb25FcnJvcixcbn0pIHtcbiAgY29uc3QgYXV0aGVudGljYXRpb24gPSBfYXV0aGVudGljYXRpb24gJiYgZGVlcEZyZWV6ZShfYXV0aGVudGljYXRpb24pO1xuXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcblxuICBpZiAoIW1lc3NhZ2VzKSB7XG4gICAgbWVzc2FnZXMgPSBkZWZhdWx0RXJyb3JNZXNzYWdlcztcbiAgfVxuXG4gIGNvbnN0IGxvZ291dCA9IHVzZUNhbGxiYWNrKChfYXV0aCkgPT4ge1xuICAgIHNhdmVBdXRoZW50aWNhdGlvbiAmJiBzYXZlQXV0aGVudGljYXRpb24oKTtcbiAgfSwgW3NhdmVBdXRoZW50aWNhdGlvbl0pO1xuXG4gIC8qXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKGFzeW5jIChfYXV0aCkgPT4ge1xuICAgIGlmIChfYXV0aCAmJiBfYXV0aC5yZW1lbWJlciAmJiBzYXZlQXV0aGVudGljYXRpb24pIHtcbiAgICAgIGF3YWl0IHNhdmVBdXRoZW50aWNhdGlvbihfYXV0aCk7XG4gICAgfVxuICAgIHJldHVybiBvbkF1dGhlbnRpY2F0aW9uICYmIG9uQXV0aGVudGljYXRpb24oX2F1dGgpO1xuICB9LCBbb25BdXRoZW50aWNhdGlvbl0pO1xuKi9cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soKF9hdXRoKSA9PiB7XG4gICAgaWYgKF9hdXRoKSB7XG4gICAgICBpZiAoc2F2ZUF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIGlmIChfYXV0aC5yZW1lbWJlcikge1xuICAgICAgICAgIHNhdmVBdXRoZW50aWNhdGlvbihfYXV0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2F2ZUF1dGhlbnRpY2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob25BdXRoZW50aWNhdGlvbikge1xuICAgICAgb25BdXRoZW50aWNhdGlvbihfYXV0aCk7XG4gICAgfVxuICB9LCBbb25BdXRoZW50aWNhdGlvbiwgc2F2ZUF1dGhlbnRpY2F0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWF1dGhlbnRpY2F0aW9uICYmIGxvYWRBdXRoZW50aWNhdGlvbikge1xuICAgICAgbG9hZEF1dGhlbnRpY2F0aW9uKCkudGhlbihfYXV0aGVudGljYXRpb24gPT4ge1xuICAgICAgICBpZiAoX2F1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgICAgdXBkYXRlKF9hdXRoZW50aWNhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2F1dGhlbnRpY2F0aW9uLCBsb2FkQXV0aGVudGljYXRpb24sIHVwZGF0ZV0pO1xuXG4gIGNvbnN0IG9uU3VibWl0TG9naW4gPSB1c2VDYWxsYmFjayhhc3luYyAoe1xuICAgIHVzZXJuYW1lLCBwYXNzd29yZCwgcmVtZW1iZXIsXG4gIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYXV0aGVudGljYXRpb24gPSBhd2FpdCBhdXRoZW50aWNhdGUoe1xuICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmQsIGNvbmZpZyxcbiAgICAgIH0pO1xuICAgICAgYXV0aGVudGljYXRpb24ucmVtZW1iZXIgPSByZW1lbWJlcjtcblxuICAgICAgaWYgKGF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlciwgdG9rZW4gfSA9IGF1dGhlbnRpY2F0aW9uO1xuXG4gICAgICAgIGlmICh1c2VyICYmIHRva2VuKSB7XG4gICAgICAgICAgc2V0RXJyb3IoKTtcbiAgICAgICAgICB1cGRhdGUoYXV0aGVudGljYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgc2V0RXJyb3IobWVzc2FnZXMudXNlcm5hbWVFcnJvcik7XG4gICAgICAgICAgfSBlbHNlIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHNldEVycm9yKG1lc3NhZ2VzLnBhc3N3b3JkRXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2F1dGhlbnRpY2F0aW9uIGZhaWxlZD8nLCBhdXRoZW50aWNhdGlvbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ0F1dGhlbnRpY2F0aW9uIGVycm9yOicsIGUpO1xuICAgICAgY29uc3QgZnJpZW5kbHlFcnJvciA9IHBhcnNlRXJyb3IoZSk7XG5cbiAgICAgIHNldEVycm9yKGZyaWVuZGx5RXJyb3IuZXJyb3JNZXNzYWdlKTtcbiAgICAgIG9uRXJyb3IgJiYgb25FcnJvcihmcmllbmRseUVycm9yKVxuICAgIH1cbiAgfSwgW1xuICAgIGNvbmZpZywgbG9nb3V0LCB1cGRhdGUsXG4gICAgbWVzc2FnZXMuZ2VuZXJpY0Vycm9yLCBtZXNzYWdlcy5uZXR3b3JrRXJyb3IsIG1lc3NhZ2VzLnBhc3N3b3JkRXJyb3IsIG1lc3NhZ2VzLnNlcnZlckVycm9yLCBtZXNzYWdlcy51c2VybmFtZUVycm9yLFxuICBdKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKGFzeW5jICh7XG4gICAgdXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlcixcbiAgfSkgPT4ge1xuICAgIGlmIChhdXRoZW50aWNhdGlvbikge1xuICAgICAgbG9nb3V0KCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgb25TdWJtaXRMb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCwgcmVtZW1iZXIgfSk7XG4gICAgfVxuICB9LCBbYXV0aGVudGljYXRpb24sIGNvbmZpZywgbG9nb3V0LCB1cGRhdGUsIG9uU3VibWl0TG9naW5dKTtcblxuICBjb25zdCBjb21wb25lbnQgPSB1c2VNZW1vKCgpID0+IChcbiAgICBjb25maWcgJiYgKFxuICAgICAgPExvZ2luRm9ybVxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgYXV0aGVudGljYXRpb249e2F1dGhlbnRpY2F0aW9ufVxuICAgICAgICBhY3Rpb25UZXh0PXttZXNzYWdlcy5hY3Rpb25UZXh0fVxuICAgICAgICBlcnJvclRleHQ9e2Vycm9yfVxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAvPlxuICAgIClcbiAgKSwgW2F1dGhlbnRpY2F0aW9uLCBjb25maWcsIGVycm9yLCBtZXNzYWdlcy5hY3Rpb25UZXh0LCBvblN1Ym1pdF0pO1xuXG4gIGNvbnN0IF9jb25maWcgPSAoYXV0aGVudGljYXRpb24gJiYgYXV0aGVudGljYXRpb24uY29uZmlnKSB8fCBjb25maWc7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgc3RhdGU6IGF1dGhlbnRpY2F0aW9uLFxuICAgIGFjdGlvbnM6IHsgdXBkYXRlLCBsb2dvdXQsIG9uTG9naW5Gb3JtU3VibWl0OiBvblN1Ym1pdCwgb25Mb2dpbkZvcm1TdWJtaXRMb2dpbjogb25TdWJtaXRMb2dpbiB9LFxuICAgIGNvbXBvbmVudCxcbiAgICBjb25maWc6IF9jb25maWcsXG4gICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICB9O1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG51c2VBdXRoZW50aWNhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKiBQYXNzIGEgcHJldmlvdXNseSByZXR1cm5lZCBhdXRoZW50aWNhdGlvbiBvYmplY3QgdG8gYnlwYXNzIGxvZ2luLiAqL1xuICBhdXRoZW50aWNhdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdG9rZW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICByZW1lbWJlcjogUHJvcFR5cGVzLmJvb2wsXG4gIH0pLFxuICAvKiogQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcHJvcG9nYXRlIHRoZSB1c2VyL3Rva2VuIHVzZWQgZm9yIEFQSSBBdXRoZW50aWNhdGlvbi4gKi9cbiAgb25BdXRoZW50aWNhdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBDb25maWd1cmF0aW9uIHRvIHBhc3MgdGhyb3VnaCB0byB0aGUgQXV0aGVudGljYXRpb24gY29tcG9uZW50LiAqL1xuICAvKiogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBhbmQgZXJyb3JzLiBNdXN0IG92ZXJyaWRlIGFsbCBvciBub25lLiAqL1xuICBtZXNzYWdlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhY3Rpb25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZ2VuZXJpY0Vycm9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXNlcm5hbWVFcnJvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBhc3N3b3JkRXJyb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAvKiogVGhlIEdpdGVhIHNlcnZlciB0byB1c2Ugd2hlbiBhdXRoZW50aWNhdGluZy4gKi9cbiAgICBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAvKiogVGhlIGlkIG9mIHRoZSB0b2tlbiB0byBjcmVhdGUvcmV0cmlldmUgdGhhdCBpcyB1c2VkIGZvciB0aGUgYXBwLiAqL1xuICAgIHRva2VuaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG4gIC8qKiBDYWxsYmFjayBmdW5jdGlvbiB0byBwZXJzaXN0IGF1dGhlbnRpY2F0aW9uLiAqL1xuICBzYXZlQXV0aGVudGljYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAvKiogQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcmV0cmlldmUgcGVyc2lzdGVkIGF1dGhlbnRpY2F0aW9uLiAqL1xuICBsb2FkQXV0aGVudGljYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAvKiogQ2FsbGJhY2sgZnVuY3Rpb24gb24gZXJyb3IuICovXG4gIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQXV0aGVudGljYXRpb247XG4iXX0=