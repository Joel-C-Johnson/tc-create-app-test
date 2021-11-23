"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureToken = exports.deleteToken = exports.createToken = exports.getTokens = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// requires config.headers with authorization
var getTokens = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var username, config, tokens, url;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref.username, config = _ref.config;
            url = _path.default.join(_.apiPath, 'users', username, 'tokens');
            _context.prev = 2;
            _context.next = 5;
            return (0, _.get)({
              url: url,
              config: config
            });

          case 5:
            tokens = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            tokens = null;

          case 11:
            return _context.abrupt("return", tokens);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));

  return function getTokens(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTokens = getTokens;

// requires config.headers with authorization
var createToken = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var username, config, token, url, payload;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref3.username, config = _ref3.config;
            url = _path.default.join(_.apiPath, 'users', username, 'tokens');
            payload = {
              'name': config.tokenid
            };
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _.post)({
              url: url,
              payload: payload,
              config: config
            });

          case 6:
            token = _context2.sent;
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](3);
            token = undefined;

          case 12:
            return _context2.abrupt("return", token);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 9]]);
  }));

  return function createToken(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createToken = createToken;

// requires config.headers with authorization
var deleteToken = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
    var username, token, config, success, id, url;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            username = _ref5.username, token = _ref5.token, config = _ref5.config;
            id = token.id.toString();
            url = _path.default.join(_.apiPath, 'users', username, 'tokens', id);
            _context3.prev = 3;
            _context3.next = 6;
            return (0, _.del)({
              url: url,
              config: config,
              payload: {}
            });

          case 6:
            success = true;
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](3);
            success = false;

          case 12:
            return _context3.abrupt("return", success);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 9]]);
  }));

  return function deleteToken(_x3) {
    return _ref6.apply(this, arguments);
  };
}(); // requires config.headers with authorization


exports.deleteToken = deleteToken;

var ensureToken = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7) {
    var username, config, tokens, tokenMatches, _iterator, _step, _token2, token;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            username = _ref7.username, config = _ref7.config;
            _context4.next = 3;
            return getTokens({
              username: username,
              config: config
            });

          case 3:
            tokens = _context4.sent;

            if (!tokens) {
              _context4.next = 24;
              break;
            }

            tokenMatches = tokens.filter(function (_token) {
              return _token.name === config.tokenid;
            });

            if (!(tokenMatches && tokenMatches.length)) {
              _context4.next = 24;
              break;
            }

            _iterator = _createForOfIteratorHelper(tokenMatches);
            _context4.prev = 8;

            _iterator.s();

          case 10:
            if ((_step = _iterator.n()).done) {
              _context4.next = 16;
              break;
            }

            _token2 = _step.value;
            _context4.next = 14;
            return deleteToken({
              username: username,
              token: _token2,
              config: config
            });

          case 14:
            _context4.next = 10;
            break;

          case 16:
            _context4.next = 21;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](8);

            _iterator.e(_context4.t0);

          case 21:
            _context4.prev = 21;

            _iterator.f();

            return _context4.finish(21);

          case 24:
            _context4.next = 26;
            return createToken({
              username: username,
              config: config
            });

          case 26:
            token = _context4.sent;
            return _context4.abrupt("return", token);

          case 28:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[8, 18, 21, 24]]);
  }));

  return function ensureToken(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

exports.ensureToken = ensureToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS91c2Vycy90b2tlbnMudHMiXSwibmFtZXMiOlsiZ2V0VG9rZW5zIiwidXNlcm5hbWUiLCJjb25maWciLCJ1cmwiLCJQYXRoIiwiam9pbiIsImFwaVBhdGgiLCJ0b2tlbnMiLCJjcmVhdGVUb2tlbiIsInBheWxvYWQiLCJ0b2tlbmlkIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJkZWxldGVUb2tlbiIsImlkIiwidG9TdHJpbmciLCJzdWNjZXNzIiwiZW5zdXJlVG9rZW4iLCJ0b2tlbk1hdGNoZXMiLCJmaWx0ZXIiLCJfdG9rZW4iLCJuYW1lIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ08sSUFBTUEsU0FBb0I7QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsWUFBQUEsUUFBVCxRQUFTQSxRQUFULEVBQW1CQyxNQUFuQixRQUFtQkEsTUFBbkI7QUFFNUJDLFlBQUFBLEdBRjRCLEdBRXRCQyxjQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBbUIsT0FBbkIsRUFBNEJMLFFBQTVCLEVBQXNDLFFBQXRDLENBRnNCO0FBQUE7QUFBQTtBQUFBLG1CQUtqQixXQUFJO0FBQUVFLGNBQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPRCxjQUFBQSxNQUFNLEVBQU5BO0FBQVAsYUFBSixDQUxpQjs7QUFBQTtBQUtoQ0ssWUFBQUEsTUFMZ0M7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9oQ0EsWUFBQUEsTUFBTSxHQUFHLElBQVQ7O0FBUGdDO0FBQUEsNkNBUzNCQSxNQVQyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQlAsU0FBb0I7QUFBQTtBQUFBO0FBQUEsR0FBMUI7Ozs7QUFnQlA7QUFDTyxJQUFNUSxXQUF3QjtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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UmE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBZWxCTSxXQUFXLENBQUM7QUFBRVAsY0FBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlDLGNBQUFBLE1BQU0sRUFBTkE7QUFBWixhQUFELENBZk87O0FBQUE7QUFlaENTLFlBQUFBLEtBZmdDO0FBQUEsOENBZ0IvQkEsS0FoQitCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXhCTSxXQUF3QjtBQUFBO0FBQUE7QUFBQSxHQUE5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgQXV0aFRva2VuIH0gZnJvbSAnLi4vaW5kZXguZCc7XG5pbXBvcnQge1xuICBhcGlQYXRoLCBnZXQsIHBvc3QsIGRlbCxcbn0gZnJvbSAnLi4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuQ29uZmlnIHtcbiAgaGVhZGVycz86IG9iamVjdDtcbiAgc2VydmVyPzogc3RyaW5nO1xuICB0b2tlbjogQXV0aFRva2VuO1xuICB0b2tlbmlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5Db25maWdXaXRoSGVhZGVycyB7XG4gIGhlYWRlcnM6IG9iamVjdDtcbiAgc2VydmVyPzogc3RyaW5nO1xuICB0b2tlbjogQXV0aFRva2VuO1xuICB0b2tlbmlkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHZXRUb2tlbnMge1xuICAoYXJnczogeyB1c2VybmFtZTogc3RyaW5nOyBjb25maWc6IFRva2VuQ29uZmlnIH0pOiBQcm9taXNlPEF1dGhUb2tlbltdPjtcbn1cblxuLy8gcmVxdWlyZXMgY29uZmlnLmhlYWRlcnMgd2l0aCBhdXRob3JpemF0aW9uXG5leHBvcnQgY29uc3QgZ2V0VG9rZW5zOiBHZXRUb2tlbnMgPSBhc3luYyAoeyB1c2VybmFtZSwgY29uZmlnIH0pID0+IHtcbiAgbGV0IHRva2VucztcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICd1c2VycycsIHVzZXJuYW1lLCAndG9rZW5zJyk7XG5cbiAgdHJ5IHtcbiAgICB0b2tlbnMgPSBhd2FpdCBnZXQoeyB1cmwsIGNvbmZpZyB9KTtcbiAgfSBjYXRjaCB7XG4gICAgdG9rZW5zID0gbnVsbDtcbiAgfVxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuaW50ZXJmYWNlIENyZWF0ZVRva2VuIHtcbiAgKGFyZ3M6IHsgdXNlcm5hbWU6IHN0cmluZzsgY29uZmlnOiBUb2tlbkNvbmZpZ1dpdGhIZWFkZXJzIH0pOiBQcm9taXNlPEF1dGhUb2tlbltdPjtcbn1cblxuLy8gcmVxdWlyZXMgY29uZmlnLmhlYWRlcnMgd2l0aCBhdXRob3JpemF0aW9uXG5leHBvcnQgY29uc3QgY3JlYXRlVG9rZW46IENyZWF0ZVRva2VuID0gYXN5bmMgKHsgdXNlcm5hbWUsIGNvbmZpZyB9KSA9PiB7XG4gIGxldCB0b2tlbjtcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICd1c2VycycsIHVzZXJuYW1lLCAndG9rZW5zJyk7XG4gIGNvbnN0IHBheWxvYWQgPSB7ICduYW1lJzogY29uZmlnLnRva2VuaWQgfTtcblxuICB0cnkge1xuICAgIHRva2VuID0gYXdhaXQgcG9zdCh7XG4gICAgICB1cmwsIHBheWxvYWQsIGNvbmZpZyxcbiAgICB9KTtcbiAgfSBjYXRjaCB7XG4gICAgdG9rZW4gPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHRva2VuO1xufTtcblxuaW50ZXJmYWNlIERlbGV0ZVRva2VuIHtcbiAgKGFyZ3M6IHsgdXNlcm5hbWU6IHN0cmluZzsgdG9rZW46IEF1dGhUb2tlbjsgY29uZmlnOiBUb2tlbkNvbmZpZyB9KTogUHJvbWlzZTxib29sZWFuPjtcbn1cblxuLy8gcmVxdWlyZXMgY29uZmlnLmhlYWRlcnMgd2l0aCBhdXRob3JpemF0aW9uXG5leHBvcnQgY29uc3QgZGVsZXRlVG9rZW46IERlbGV0ZVRva2VuID0gYXN5bmMgKHtcbiAgdXNlcm5hbWUsIHRva2VuLCBjb25maWcsXG59KSA9PiB7XG4gIGxldCBzdWNjZXNzO1xuICBjb25zdCBpZCA9IHRva2VuLmlkLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAndXNlcnMnLCB1c2VybmFtZSwgJ3Rva2VucycsIGlkKTtcblxuICB0cnkge1xuICAgIGF3YWl0IGRlbCh7XG4gICAgICB1cmwsIGNvbmZpZywgcGF5bG9hZDoge30sXG4gICAgfSk7XG4gICAgc3VjY2VzcyA9IHRydWU7XG4gIH0gY2F0Y2gge1xuICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gc3VjY2Vzcztcbn07XG5cblxuLy8gcmVxdWlyZXMgY29uZmlnLmhlYWRlcnMgd2l0aCBhdXRob3JpemF0aW9uXG5leHBvcnQgY29uc3QgZW5zdXJlVG9rZW46IENyZWF0ZVRva2VuID0gYXN5bmMgKHsgdXNlcm5hbWUsIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IHRva2VucyA9IGF3YWl0IGdldFRva2Vucyh7IHVzZXJuYW1lLCBjb25maWcgfSk7XG5cbiAgaWYgKHRva2Vucykge1xuICAgIGNvbnN0IHRva2VuTWF0Y2hlcyA9IHRva2Vucy5maWx0ZXIoX3Rva2VuID0+IF90b2tlbi5uYW1lID09PSBjb25maWcudG9rZW5pZCk7XG5cbiAgICBpZiAodG9rZW5NYXRjaGVzICYmIHRva2VuTWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IHRva2VuIG9mIHRva2VuTWF0Y2hlcykge1xuICAgICAgICAgIGF3YWl0IGRlbGV0ZVRva2VuKHtcbiAgICAgICAgICAgICAgdXNlcm5hbWUsIHRva2VuLCBjb25maWcsXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBjcmVhdGVUb2tlbih7IHVzZXJuYW1lLCBjb25maWcgfSk7XG4gIHJldHVybiB0b2tlbjtcbn07Il19