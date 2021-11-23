"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = exports.authorizationHeaders = exports.encodeAuthentication = void 0;

var _base = _interopRequireDefault(require("base-64"));

var _utf = _interopRequireDefault(require("utf8"));

var _users = require("./users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var encodeAuthentication = function encodeAuthentication(_ref) {
  var username = _ref.username,
      password = _ref.password,
      token = _ref.token;
  var authentication = '';

  if (token) {
    var sha1 = _typeof(token) === 'object' ? token.sha1 : token;
    authentication = "token ".concat(sha1);
  } else if (username && password) {
    var encoded = _base.default.encode(_utf.default.encode("".concat(username, ":").concat(password)));

    authentication = 'Basic ' + encoded;
  }

  return authentication;
};

exports.encodeAuthentication = encodeAuthentication;

var authorizationHeaders = function authorizationHeaders(_ref2) {
  var username = _ref2.username,
      password = _ref2.password,
      token = _ref2.token;
  var headers = {
    'Content-Type': '',
    'Authorization': ''
  };
  var authorization = encodeAuthentication({
    username: username,
    password: password,
    token: token
  });

  if (authorization) {
    headers = {
      'Content-Type': 'application/json',
      'Authorization': authorization
    };
  }

  return headers;
};

exports.authorizationHeaders = authorizationHeaders;
;

var authenticate = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
    var username, password, config, token, user, _config, authHeaders, authentication;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref3.username, password = _ref3.password, config = _ref3.config;
            _config = _objectSpread(_objectSpread({}, config), {}, {
              headers: {}
            });

            if (!(username && password)) {
              _context.next = 13;
              break;
            }

            authHeaders = authorizationHeaders({
              username: username,
              password: password
            });
            _config = _objectSpread(_objectSpread({}, config), {}, {
              headers: _objectSpread(_objectSpread({}, config.headers), authHeaders),
              noCache: true
            });
            _context.next = 7;
            return (0, _users.getUser)({
              username: username,
              config: _config
            });

          case 7:
            user = _context.sent;
            _context.next = 10;
            return (0, _users.ensureToken)({
              username: username,
              config: _config
            });

          case 10:
            token = _context.sent;
            authHeaders = authorizationHeaders({
              token: token
            });
            _config = _objectSpread(_objectSpread({}, config), {}, {
              headers: _objectSpread(_objectSpread({}, config.headers), authHeaders)
            });

          case 13:
            authentication = {
              user: user,
              token: token,
              config: _config
            };
            return _context.abrupt("return", authentication);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function authenticate(_x) {
    return _ref4.apply(this, arguments);
  };
}();

exports.authenticate = authenticate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9hdXRoZW50aWNhdGlvbi50cyJdLCJuYW1lcyI6WyJlbmNvZGVBdXRoZW50aWNhdGlvbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0b2tlbiIsImF1dGhlbnRpY2F0aW9uIiwic2hhMSIsImVuY29kZWQiLCJiYXNlNjQiLCJlbmNvZGUiLCJ1dGY4IiwiYXV0aG9yaXphdGlvbkhlYWRlcnMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImF1dGhlbnRpY2F0ZSIsImNvbmZpZyIsIl9jb25maWciLCJhdXRoSGVhZGVycyIsIm5vQ2FjaGUiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTTyxJQUFNQSxvQkFBMEMsR0FBRyxTQUE3Q0Esb0JBQTZDLE9BRXBEO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQUEsTUFETUMsUUFDTixRQURNQSxRQUNOO0FBQUEsTUFEZ0JDLEtBQ2hCLFFBRGdCQSxLQUNoQjtBQUNKLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjs7QUFFQSxNQUFJRCxLQUFKLEVBQVc7QUFDVCxRQUFNRSxJQUFJLEdBQUcsUUFBT0YsS0FBUCxNQUFpQixRQUFqQixHQUE0QkEsS0FBSyxDQUFDRSxJQUFsQyxHQUF5Q0YsS0FBdEQ7QUFDQUMsSUFBQUEsY0FBYyxtQkFBWUMsSUFBWixDQUFkO0FBQ0QsR0FIRCxNQUdPLElBQUlKLFFBQVEsSUFBSUMsUUFBaEIsRUFBMEI7QUFDL0IsUUFBTUksT0FBTyxHQUFHQyxjQUFPQyxNQUFQLENBQWNDLGFBQUtELE1BQUwsV0FBZVAsUUFBZixjQUEyQkMsUUFBM0IsRUFBZCxDQUFoQjs7QUFDQUUsSUFBQUEsY0FBYyxHQUFHLFdBQVdFLE9BQTVCO0FBQ0Q7O0FBQ0QsU0FBT0YsY0FBUDtBQUNELENBYk07Ozs7QUF5QkEsSUFBTU0sb0JBQTBDLEdBQUcsU0FBN0NBLG9CQUE2QyxRQUVwRDtBQUFBLE1BREpULFFBQ0ksU0FESkEsUUFDSTtBQUFBLE1BRE1DLFFBQ04sU0FETUEsUUFDTjtBQUFBLE1BRGdCQyxLQUNoQixTQURnQkEsS0FDaEI7QUFDSixNQUFJUSxPQUFtQyxHQUFHO0FBQ3hDLG9CQUFnQixFQUR3QjtBQUV4QyxxQkFBaUI7QUFGdUIsR0FBMUM7QUFJQSxNQUFNQyxhQUFhLEdBQUdaLG9CQUFvQixDQUFDO0FBQ3pDQyxJQUFBQSxRQUFRLEVBQVJBLFFBRHlDO0FBQy9CQyxJQUFBQSxRQUFRLEVBQVJBLFFBRCtCO0FBQ3JCQyxJQUFBQSxLQUFLLEVBQUxBO0FBRHFCLEdBQUQsQ0FBMUM7O0FBSUEsTUFBSVMsYUFBSixFQUFtQjtBQUNqQkQsSUFBQUEsT0FBTyxHQUFHO0FBQ1Isc0JBQWdCLGtCQURSO0FBRVIsdUJBQWlCQztBQUZULEtBQVY7QUFJRDs7QUFDRCxTQUFPRCxPQUFQO0FBQ0QsQ0FsQk07OztBQXNCTjs7QUFFTSxJQUFNRSxZQUEwQjtBQUFBLHNFQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeENaLFlBQUFBLFFBRHdDLFNBQ3hDQSxRQUR3QyxFQUM5QkMsUUFEOEIsU0FDOUJBLFFBRDhCLEVBQ3BCWSxNQURvQixTQUNwQkEsTUFEb0I7QUFJcENDLFlBQUFBLE9BSm9DLG1DQUlyQkQsTUFKcUI7QUFJYkgsY0FBQUEsT0FBTyxFQUFFO0FBSkk7O0FBQUEsa0JBTXBDVixRQUFRLElBQUlDLFFBTndCO0FBQUE7QUFBQTtBQUFBOztBQU9sQ2MsWUFBQUEsV0FQa0MsR0FPcEJOLG9CQUFvQixDQUFDO0FBQUVULGNBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZQyxjQUFBQSxRQUFRLEVBQVJBO0FBQVosYUFBRCxDQVBBO0FBUXRDYSxZQUFBQSxPQUFPLG1DQUNBRCxNQURBO0FBRUhILGNBQUFBLE9BQU8sa0NBQU9HLE1BQU0sQ0FBQ0gsT0FBZCxHQUEwQkssV0FBMUIsQ0FGSjtBQUdIQyxjQUFBQSxPQUFPLEVBQUU7QUFITixjQUFQO0FBUnNDO0FBQUEsbUJBYXpCLG9CQUFRO0FBQUVoQixjQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWWEsY0FBQUEsTUFBTSxFQUFFQztBQUFwQixhQUFSLENBYnlCOztBQUFBO0FBYXRDRyxZQUFBQSxJQWJzQztBQUFBO0FBQUEsbUJBY3hCLHdCQUFZO0FBQUVqQixjQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWWEsY0FBQUEsTUFBTSxFQUFFQztBQUFwQixhQUFaLENBZHdCOztBQUFBO0FBY3RDWixZQUFBQSxLQWRzQztBQWV0Q2EsWUFBQUEsV0FBVyxHQUFHTixvQkFBb0IsQ0FBQztBQUFFUCxjQUFBQSxLQUFLLEVBQUxBO0FBQUYsYUFBRCxDQUFsQztBQUNBWSxZQUFBQSxPQUFPLG1DQUFRRCxNQUFSO0FBQWdCSCxjQUFBQSxPQUFPLGtDQUFPRyxNQUFNLENBQUNILE9BQWQsR0FBMEJLLFdBQTFCO0FBQXZCLGNBQVA7O0FBaEJzQztBQW1CbENaLFlBQUFBLGNBbkJrQyxHQW1CakI7QUFDckJjLGNBQUFBLElBQUksRUFBSkEsSUFEcUI7QUFDZmYsY0FBQUEsS0FBSyxFQUFMQSxLQURlO0FBQ1JXLGNBQUFBLE1BQU0sRUFBRUM7QUFEQSxhQW5CaUI7QUFBQSw2Q0FzQmpDWCxjQXRCaUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBMUJTLFlBQTBCO0FBQUE7QUFBQTtBQUFBLEdBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2U2NCBmcm9tICdiYXNlLTY0JztcbmltcG9ydCB1dGY4IGZyb20gJ3V0ZjgnO1xuaW1wb3J0IHsgQXV0aE9iamVjdCwgQXV0aFRva2VuIH0gZnJvbSAnLi9pbmRleC5kJztcbmltcG9ydCB7IGdldFVzZXIsIGVuc3VyZVRva2VuIH0gZnJvbSAnLi91c2Vycyc7XG5pbXBvcnQgeyBBUElDb25maWcgfSBmcm9tICcuL2h0dHAvaHR0cC5kJztcbmltcG9ydCB7IEV4dGVuZENvbmZpZyB9IGZyb20gJy4uJztcblxuaW50ZXJmYWNlIEVuY29kZUF1dGhlbnRpY2F0aW9uIHtcbiAgKGFyZ3M6IHsgdXNlcm5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZzsgdG9rZW4/OiBBdXRoVG9rZW4gfCBzdHJpbmcgfSk6IHN0cmluZztcbiAgKGFyZ3M6IHsgdXNlcm5hbWU/OiBzdHJpbmc7IHBhc3N3b3JkPzogc3RyaW5nOyB0b2tlbjogQXV0aFRva2VuIHwgc3RyaW5nIH0pOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBlbmNvZGVBdXRoZW50aWNhdGlvbjogRW5jb2RlQXV0aGVudGljYXRpb24gPSAoe1xuICB1c2VybmFtZSwgcGFzc3dvcmQsIHRva2VuLFxufSkgPT4ge1xuICBsZXQgYXV0aGVudGljYXRpb24gPSAnJztcblxuICBpZiAodG9rZW4pIHtcbiAgICBjb25zdCBzaGExID0gdHlwZW9mIHRva2VuID09PSAnb2JqZWN0JyA/IHRva2VuLnNoYTEgOiB0b2tlbjtcbiAgICBhdXRoZW50aWNhdGlvbiA9IGB0b2tlbiAke3NoYTF9YDtcbiAgfSBlbHNlIGlmICh1c2VybmFtZSAmJiBwYXNzd29yZCkge1xuICAgIGNvbnN0IGVuY29kZWQgPSBiYXNlNjQuZW5jb2RlKHV0ZjguZW5jb2RlKGAke3VzZXJuYW1lfToke3Bhc3N3b3JkfWApKTtcbiAgICBhdXRoZW50aWNhdGlvbiA9ICdCYXNpYyAnICsgZW5jb2RlZDtcbiAgfVxuICByZXR1cm4gYXV0aGVudGljYXRpb247XG59O1xuXG5pbnRlcmZhY2UgQXV0aG9yaXphdGlvbkhlYWRlcnNPYmplY3Qge1xuICAnQ29udGVudC1UeXBlJzogc3RyaW5nO1xuICBBdXRob3JpemF0aW9uOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBBdXRob3JpemF0aW9uSGVhZGVycyB7XG4gIChhcmdzOiB7IHVzZXJuYW1lOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmc7IHRva2VuPzogc3RyaW5nIHwgQXV0aFRva2VuIH0pOiBBdXRob3JpemF0aW9uSGVhZGVyc09iamVjdDtcbiAgKGFyZ3M6IHsgdXNlcm5hbWU/OiBzdHJpbmc7IHBhc3N3b3JkPzogc3RyaW5nOyB0b2tlbjogc3RyaW5nIHwgQXV0aFRva2VuIH0pOiBBdXRob3JpemF0aW9uSGVhZGVyc09iamVjdDtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhvcml6YXRpb25IZWFkZXJzOiBBdXRob3JpemF0aW9uSGVhZGVycyA9ICh7XG4gIHVzZXJuYW1lLCBwYXNzd29yZCwgdG9rZW4sXG59KSA9PiB7XG4gIGxldCBoZWFkZXJzOiBBdXRob3JpemF0aW9uSGVhZGVyc09iamVjdCA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJycsXG4gICAgJ0F1dGhvcml6YXRpb24nOiAnJyxcbiAgfTtcbiAgY29uc3QgYXV0aG9yaXphdGlvbiA9IGVuY29kZUF1dGhlbnRpY2F0aW9uKHtcbiAgICB1c2VybmFtZSwgcGFzc3dvcmQsIHRva2VuLFxuICB9KTtcblxuICBpZiAoYXV0aG9yaXphdGlvbikge1xuICAgIGhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBhdXRob3JpemF0aW9uLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGhlYWRlcnM7XG59O1xuXG5pbnRlcmZhY2UgQXV0aGVudGljYXRlIHtcbiAgKGFyZ3M6IHsgdXNlcm5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZzsgY29uZmlnOiBBUElDb25maWcgfCBFeHRlbmRDb25maWcgfSk6IFByb21pc2U8QXV0aE9iamVjdD47XG59O1xuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlOiBBdXRoZW50aWNhdGUgPSBhc3luYyAoe1xuICB1c2VybmFtZSwgcGFzc3dvcmQsIGNvbmZpZyxcbn0pID0+IHtcbiAgbGV0IHRva2VuLCB1c2VyO1xuICBsZXQgX2NvbmZpZyA9IHsgLi4uY29uZmlnLCBoZWFkZXJzOiB7fSB9O1xuXG4gIGlmICh1c2VybmFtZSAmJiBwYXNzd29yZCkge1xuICAgIGxldCBhdXRoSGVhZGVycyA9IGF1dGhvcml6YXRpb25IZWFkZXJzKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuICAgIF9jb25maWcgPSB7XG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgaGVhZGVyczogeyAuLi5jb25maWcuaGVhZGVycywgLi4uYXV0aEhlYWRlcnMgfSxcbiAgICAgICAgbm9DYWNoZTogdHJ1ZSxcbiAgICB9O1xuICAgIHVzZXIgPSBhd2FpdCBnZXRVc2VyKHsgdXNlcm5hbWUsIGNvbmZpZzogX2NvbmZpZyB9KTtcbiAgICB0b2tlbiA9IGF3YWl0IGVuc3VyZVRva2VuKHsgdXNlcm5hbWUsIGNvbmZpZzogX2NvbmZpZyB9KTtcbiAgICBhdXRoSGVhZGVycyA9IGF1dGhvcml6YXRpb25IZWFkZXJzKHsgdG9rZW4gfSk7XG4gICAgX2NvbmZpZyA9IHsgLi4uY29uZmlnLCBoZWFkZXJzOiB7IC4uLmNvbmZpZy5oZWFkZXJzLCAuLi5hdXRoSGVhZGVycyB9IH07XG4gIH1cblxuICBjb25zdCBhdXRoZW50aWNhdGlvbiA9IHtcbiAgICB1c2VyLCB0b2tlbiwgY29uZmlnOiBfY29uZmlnLFxuICB9O1xuICByZXR1cm4gYXV0aGVudGljYXRpb247XG59OyJdfQ==