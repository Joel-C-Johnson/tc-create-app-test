"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFork = exports.readForks = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// GET /repos/{owner}/{repo}/forks
var readForks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var owner, repo, config, url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            owner = _ref.owner, repo = _ref.repo, config = _ref.config;
            url = _path.default.join(_.apiPath, 'repos', owner, repo, 'forks');
            _context.next = 4;
            return (0, _.get)({
              url: url,
              config: config
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function readForks(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.readForks = readForks;

// POST /repos/{owner}/{repo}/forks
var createFork = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var owner, repo, organization, config, url, payload, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref3.owner, repo = _ref3.repo, organization = _ref3.organization, config = _ref3.config;
            url = _path.default.join(_.apiPath, 'repos', owner, repo, 'forks');
            payload = organization ? {
              organization: organization
            } : {};
            _context2.next = 5;
            return (0, _.post)({
              url: url,
              payload: payload,
              config: config
            });

          case 5:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createFork(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createFork = createFork;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9mb3Jrcy50cyJdLCJuYW1lcyI6WyJyZWFkRm9ya3MiLCJvd25lciIsInJlcG8iLCJjb25maWciLCJ1cmwiLCJQYXRoIiwiam9pbiIsImFwaVBhdGgiLCJyZXNwb25zZSIsImNyZWF0ZUZvcmsiLCJvcmdhbml6YXRpb24iLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7Ozs7Ozs7O0FBVUE7QUFDTyxJQUFNQSxTQUFTO0FBQUEsc0VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCQyxZQUFBQSxLQUR1QixRQUN2QkEsS0FEdUIsRUFDaEJDLElBRGdCLFFBQ2hCQSxJQURnQixFQUNWQyxNQURVLFFBQ1ZBLE1BRFU7QUFHakJDLFlBQUFBLEdBSGlCLEdBR1hDLGNBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFtQixPQUFuQixFQUE0Qk4sS0FBNUIsRUFBbUNDLElBQW5DLEVBQXlDLE9BQXpDLENBSFc7QUFBQTtBQUFBLG1CQUlBLFdBQUk7QUFBRUUsY0FBQUEsR0FBRyxFQUFIQSxHQUFGO0FBQU9ELGNBQUFBLE1BQU0sRUFBTkE7QUFBUCxhQUFKLENBSkE7O0FBQUE7QUFJakJLLFlBQUFBLFFBSmlCO0FBQUEsNkNBS2hCQSxRQUxnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUUixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7Ozs7QUFlUDtBQUNPLElBQU1TLFVBQVU7QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJSLFlBQUFBLEtBRHdCLFNBQ3hCQSxLQUR3QixFQUNqQkMsSUFEaUIsU0FDakJBLElBRGlCLEVBQ1hRLFlBRFcsU0FDWEEsWUFEVyxFQUNHUCxNQURILFNBQ0dBLE1BREg7QUFHbEJDLFlBQUFBLEdBSGtCLEdBR1pDLGNBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFtQixPQUFuQixFQUE0Qk4sS0FBNUIsRUFBbUNDLElBQW5DLEVBQXlDLE9BQXpDLENBSFk7QUFJbEJTLFlBQUFBLE9BSmtCLEdBSVBELFlBQUQsR0FBaUI7QUFBRUEsY0FBQUEsWUFBWSxFQUFaQTtBQUFGLGFBQWpCLEdBQW9DLEVBSjVCO0FBQUE7QUFBQSxtQkFLRCxZQUFLO0FBQzFCTixjQUFBQSxHQUFHLEVBQUhBLEdBRDBCO0FBQ3JCTyxjQUFBQSxPQUFPLEVBQVBBLE9BRHFCO0FBQ1pSLGNBQUFBLE1BQU0sRUFBTkE7QUFEWSxhQUFMLENBTEM7O0FBQUE7QUFLbEJLLFlBQUFBLFFBTGtCO0FBQUEsOENBUWpCQSxRQVJpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWQyxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7IEFQSUNvbmZpZyB9IGZyb20gJy4uL2h0dHAvaHR0cC5kJztcbmltcG9ydCB7XG4gIGFwaVBhdGgsIGdldCwgcG9zdCwgRXh0ZW5kQ29uZmlnLFxufSBmcm9tICcuLic7XG5cbmludGVyZmFjZSBSZWFkRm9ya3NPcHRpb25zIHtcbiAgb3duZXI6IHN0cmluZztcbiAgcmVwbzogc3RyaW5nO1xuICBjb25maWc6IEFQSUNvbmZpZztcbn1cblxuLy8gR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9mb3Jrc1xuZXhwb3J0IGNvbnN0IHJlYWRGb3JrcyA9IGFzeW5jICh7XG4gIG93bmVyLCByZXBvLCBjb25maWcsXG59OiBSZWFkRm9ya3NPcHRpb25zKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICdyZXBvcycsIG93bmVyLCByZXBvLCAnZm9ya3MnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXQoeyB1cmwsIGNvbmZpZyB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuaW50ZXJmYWNlIENyZWF0ZUZvcmtPcHRpb25zIHtcbiAgb3duZXI6IHN0cmluZztcbiAgcmVwbzogc3RyaW5nO1xuICBvcmdhbml6YXRpb246IHN0cmluZztcbiAgY29uZmlnOiBFeHRlbmRDb25maWc7XG59XG5cbi8vIFBPU1QgL3JlcG9zL3tvd25lcn0ve3JlcG99L2ZvcmtzXG5leHBvcnQgY29uc3QgY3JlYXRlRm9yayA9IGFzeW5jICh7XG4gIG93bmVyLCByZXBvLCBvcmdhbml6YXRpb24sIGNvbmZpZyxcbn06IENyZWF0ZUZvcmtPcHRpb25zKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICdyZXBvcycsIG93bmVyLCByZXBvLCAnZm9ya3MnKTtcbiAgY29uc3QgcGF5bG9hZCA9IChvcmdhbml6YXRpb24pID8geyBvcmdhbml6YXRpb24gfSA6IHt9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3Qoe1xuICAgIHVybCwgcGF5bG9hZCwgY29uZmlnLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbiJdfQ==