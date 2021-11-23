"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUID = exports.getUser = void 0;

var _path = _interopRequireDefault(require("path"));

var _http = require("../http/http");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var username, config, user, url, errorMessage;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref.username, config = _ref.config;
            user = null;
            url = _path.default.join(_http.apiPath, 'users', username);
            _context.prev = 3;
            _context.next = 6;
            return (0, _http.get)({
              url: url,
              config: config
            });

          case 6:
            user = _context.sent;
            _context.next = 14;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            errorMessage = _context.t0 && _context.t0.message ? _context.t0.message : '';

            if (!(errorMessage.match(_http.ERROR_SERVER_UNREACHABLE) || errorMessage.match(_http.ERROR_NETWORK_DISCONNECTED))) {
              _context.next = 14;
              break;
            }

            throw _context.t0;

          case 14:
            return _context.abrupt("return", user);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 9]]);
  }));

  return function getUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var getUID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var username, config, uid, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref3.username, config = _ref3.config;
            _context2.prev = 1;
            _context2.next = 4;
            return getUser({
              username: username,
              config: config
            });

          case 4:
            user = _context2.sent;

            if (user) {
              uid = user.id;
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            uid = null;

          case 11:
            return _context2.abrupt("return", uid);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getUID(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getUID = getUID;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS91c2Vycy91c2Vycy50cyJdLCJuYW1lcyI6WyJnZXRVc2VyIiwidXNlcm5hbWUiLCJjb25maWciLCJ1c2VyIiwidXJsIiwiUGF0aCIsImpvaW4iLCJhcGlQYXRoIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIm1hdGNoIiwiRVJST1JfU0VSVkVSX1VOUkVBQ0hBQkxFIiwiRVJST1JfTkVUV09SS19ESVNDT05ORUNURUQiLCJnZXRVSUQiLCJ1aWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7OztBQUlPLElBQU1BLE9BQU87QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsWUFBQUEsUUFBVCxRQUFTQSxRQUFULEVBQW1CQyxNQUFuQixRQUFtQkEsTUFBbkI7QUFJakJDLFlBQUFBLElBSmlCLEdBSVYsSUFKVTtBQUtmQyxZQUFBQSxHQUxlLEdBS1RDLGNBQUtDLElBQUwsQ0FBVUMsYUFBVixFQUFtQixPQUFuQixFQUE0Qk4sUUFBNUIsQ0FMUztBQUFBO0FBQUE7QUFBQSxtQkFRTixlQUFJO0FBQUVHLGNBQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPRixjQUFBQSxNQUFNLEVBQU5BO0FBQVAsYUFBSixDQVJNOztBQUFBO0FBUW5CQyxZQUFBQSxJQVJtQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVWJLLFlBQUFBLFlBVmEsR0FVRSxlQUFLLFlBQUVDLE9BQVAsR0FBaUIsWUFBRUEsT0FBbkIsR0FBNkIsRUFWL0I7O0FBQUEsa0JBWWZELFlBQVksQ0FBQ0UsS0FBYixDQUFtQkMsOEJBQW5CLEtBQWdESCxZQUFZLENBQUNFLEtBQWIsQ0FBbUJFLGdDQUFuQixDQVpqQztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLDZDQWdCZFQsSUFoQmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUEgsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOzs7O0FBbUJBLElBQU1hLE1BQU07QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU1osWUFBQUEsUUFBVCxTQUFTQSxRQUFULEVBQW1CQyxNQUFuQixTQUFtQkEsTUFBbkI7QUFBQTtBQUFBO0FBQUEsbUJBT0NGLE9BQU8sQ0FBQztBQUFFQyxjQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUMsY0FBQUEsTUFBTSxFQUFOQTtBQUFaLGFBQUQsQ0FQUjs7QUFBQTtBQU9aQyxZQUFBQSxJQVBZOztBQVNsQixnQkFBSUEsSUFBSixFQUFVO0FBQ1JXLGNBQUFBLEdBQUcsR0FBR1gsSUFBSSxDQUFDWSxFQUFYO0FBQ0Q7O0FBWGlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYWxCRCxZQUFBQSxHQUFHLEdBQUcsSUFBTjs7QUFia0I7QUFBQSw4Q0FlYkEsR0FmYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFORCxNQUFNO0FBQUE7QUFBQTtBQUFBLEdBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEFQSUNvbmZpZyB9IGZyb20gJy4uL2h0dHAvaHR0cC5kJztcbmltcG9ydCB7XG4gIGFwaVBhdGgsIGdldCwgRVJST1JfU0VSVkVSX1VOUkVBQ0hBQkxFLCBFUlJPUl9ORVRXT1JLX0RJU0NPTk5FQ1RFRCxcbn0gZnJvbSAnLi4vaHR0cC9odHRwJztcblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSBhc3luYyAoeyB1c2VybmFtZSwgY29uZmlnIH06IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgY29uZmlnOiBBUElDb25maWc7XG59KTogUHJvbWlzZTx7IGlkOiBvYmplY3QgfSB8IG51bGw+ID0+IHtcbiAgbGV0IHVzZXIgPSBudWxsO1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3VzZXJzJywgdXNlcm5hbWUpO1xuXG4gIHRyeSB7XG4gICAgdXNlciA9IGF3YWl0IGdldCh7IHVybCwgY29uZmlnIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZSAmJiBlLm1lc3NhZ2UgPyBlLm1lc3NhZ2UgOiAnJztcblxuICAgIGlmIChlcnJvck1lc3NhZ2UubWF0Y2goRVJST1JfU0VSVkVSX1VOUkVBQ0hBQkxFKSB8fCBlcnJvck1lc3NhZ2UubWF0Y2goRVJST1JfTkVUV09SS19ESVNDT05ORUNURUQpKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdXNlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVSUQgPSBhc3luYyAoeyB1c2VybmFtZSwgY29uZmlnIH06IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgY29uZmlnOiBBUElDb25maWc7XG59KTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgbGV0IHVpZDtcblxuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHsgdXNlcm5hbWUsIGNvbmZpZyB9KTtcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICB1aWQgPSB1c2VyLmlkO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgdWlkID0gbnVsbDtcbiAgfVxuICByZXR1cm4gdWlkO1xufTtcbiJdfQ==