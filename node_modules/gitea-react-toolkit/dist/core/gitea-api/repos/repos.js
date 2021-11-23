"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRepo = exports.updateRepo = exports.ensureRepo = exports.readRepo = exports.createRepo = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// POST /api/v1/user/repos
var createRepo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var repo, settings, config, url, payload, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            repo = _ref.repo, settings = _ref.settings, config = _ref.config;
            url = _path.default.join(_.apiPath, 'user', 'repos');
            payload = _objectSpread({
              name: repo,
              auto_init: true
            }, settings);
            _context.next = 5;
            return (0, _.post)({
              url: url,
              payload: payload,
              config: config
            });

          case 5:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createRepo(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createRepo = createRepo;

// GET /api/v1/repos/{owner}/{repo}
var readRepo = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var owner, repo, config, url, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref3.owner, repo = _ref3.repo, config = _ref3.config;
            url = _path.default.join(_.apiPath, 'repos', owner, repo);
            _context2.prev = 2;
            _context2.next = 5;
            return (0, _.get)({
              url: url,
              config: config,
              noCache: true
            });

          case 5:
            response = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            response = null;

          case 11:
            return _context2.abrupt("return", response);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));

  return function readRepo(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.readRepo = readRepo;

var ensureRepo = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
    var owner, repo, settings, config, repository;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            owner = _ref5.owner, repo = _ref5.repo, settings = _ref5.settings, config = _ref5.config;
            _context3.next = 3;
            return readRepo({
              owner: owner,
              repo: repo,
              config: config
            });

          case 3:
            repository = _context3.sent;

            if (repository) {
              _context3.next = 8;
              break;
            }

            _context3.next = 7;
            return createRepo({
              repo: repo,
              settings: settings,
              config: config
            });

          case 7:
            repository = _context3.sent;

          case 8:
            return _context3.abrupt("return", repository);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function ensureRepo(_x3) {
    return _ref6.apply(this, arguments);
  };
}(); // PATCH /api/v1/repos/{owner}/{repo}


exports.ensureRepo = ensureRepo;

var updateRepo = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7) {
    var owner, repo, settings, config, url, payload, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = _ref7.owner, repo = _ref7.repo, settings = _ref7.settings, config = _ref7.config;
            url = _path.default.join(_.apiPath, 'repos', owner, repo);
            payload = _objectSpread({}, settings);
            _context4.prev = 3;
            _context4.next = 6;
            return (0, _.patch)({
              url: url,
              payload: payload,
              config: config
            });

          case 6:
            response = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](3);
            response = null;

          case 12:
            return _context4.abrupt("return", response);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 9]]);
  }));

  return function updateRepo(_x4) {
    return _ref8.apply(this, arguments);
  };
}(); // DELETE /api/v1/repos/{owner}/{repo}


exports.updateRepo = updateRepo;

var deleteRepo = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref9) {
    var owner, repo, config, url, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            owner = _ref9.owner, repo = _ref9.repo, config = _ref9.config;
            url = _path.default.join(_.apiPath, 'repos', owner, repo);
            _context5.prev = 2;
            _context5.next = 5;
            return (0, _.del)({
              url: url,
              config: config,
              payload: {}
            });

          case 5:
            response = _context5.sent;
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](2);
            response = null;

          case 11:
            return _context5.abrupt("return", response);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 8]]);
  }));

  return function deleteRepo(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

exports.deleteRepo = deleteRepo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9yZXBvcy50cyJdLCJuYW1lcyI6WyJjcmVhdGVSZXBvIiwicmVwbyIsInNldHRpbmdzIiwiY29uZmlnIiwidXJsIiwiUGF0aCIsImpvaW4iLCJhcGlQYXRoIiwicGF5bG9hZCIsIm5hbWUiLCJhdXRvX2luaXQiLCJyZXNwb25zZSIsInJlYWRSZXBvIiwib3duZXIiLCJub0NhY2hlIiwiZW5zdXJlUmVwbyIsInJlcG9zaXRvcnkiLCJ1cGRhdGVSZXBvIiwiZGVsZXRlUmVwbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQVNBO0FBQ08sSUFBTUEsVUFBVTtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QkMsWUFBQUEsSUFEd0IsUUFDeEJBLElBRHdCLEVBQ2xCQyxRQURrQixRQUNsQkEsUUFEa0IsRUFDUkMsTUFEUSxRQUNSQSxNQURRO0FBR2xCQyxZQUFBQSxHQUhrQixHQUdaQyxjQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBbUIsTUFBbkIsRUFBMkIsT0FBM0IsQ0FIWTtBQUlsQkMsWUFBQUEsT0FKa0I7QUFLdEJDLGNBQUFBLElBQUksRUFBRVIsSUFMZ0I7QUFNdEJTLGNBQUFBLFNBQVMsRUFBRTtBQU5XLGVBV25CUixRQVhtQjtBQUFBO0FBQUEsbUJBYUQsWUFBSztBQUMxQkUsY0FBQUEsR0FBRyxFQUFIQSxHQUQwQjtBQUNyQkksY0FBQUEsT0FBTyxFQUFQQSxPQURxQjtBQUNaTCxjQUFBQSxNQUFNLEVBQU5BO0FBRFksYUFBTCxDQWJDOztBQUFBO0FBYWxCUSxZQUFBQSxRQWJrQjtBQUFBLDZDQWdCakJBLFFBaEJpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWWCxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCOzs7O0FBeUJQO0FBQ08sSUFBTVksUUFBUTtBQUFBLHNFQUFH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RUFDakJaLElBRGlCLFNBQ2pCQSxJQURpQixFQUNYRSxNQURXLFNBQ1hBLE1BRFc7QUFHbEJDLFlBQUFBLEdBSGtCLEdBR1pDLGNBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFtQixPQUFuQixFQUE0Qk0sS0FBNUIsRUFBbUNaLElBQW5DLENBSFk7QUFBQTtBQUFBO0FBQUEsbUJBT0wsV0FBSTtBQUNuQkcsY0FBQUEsR0FBRyxFQUFIQSxHQURtQjtBQUNkRCxjQUFBQSxNQUFNLEVBQU5BLE1BRGM7QUFDTkssY0FBQUEsT0FBTyxFQUFFO0FBREgsYUFBSixDQVBLOztBQUFBO0FBT3RCRyxZQUFBQSxRQVBzQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV3RCQSxZQUFBQSxRQUFRLEdBQUcsSUFBWDs7QUFYc0I7QUFBQSw4Q0FhakJBLFFBYmlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZPLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7XG4gIGFwaVBhdGgsIGdldCwgcG9zdCwgcGF0Y2gsIGRlbCwgRXh0ZW5kQ29uZmlnLFxufSBmcm9tICcuLic7XG5cbmludGVyZmFjZSBDcmVhdGVSZXBvT3B0aW9ucyB7XG4gIHJlcG86IHN0cmluZztcbiAgc2V0dGluZ3M6IG9iamVjdDtcbiAgY29uZmlnOiBFeHRlbmRDb25maWc7XG59XG4vLyBQT1NUIC9hcGkvdjEvdXNlci9yZXBvc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcG8gPSBhc3luYyAoe1xuICByZXBvLCBzZXR0aW5ncywgY29uZmlnLFxufTogQ3JlYXRlUmVwb09wdGlvbnMpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3VzZXInLCAncmVwb3MnKTtcbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBuYW1lOiByZXBvLFxuICAgIGF1dG9faW5pdDogdHJ1ZSxcbiAgICAvLyBkZXNjcmlwdGlvbjogYCR7cmVwb30gY3JlYXRlZCB2aWEgQVBJLmAsXG4gICAgLy8gcHJpdmF0ZTogdHJ1ZSxcbiAgICAvLyByZWFkbWU6IGAjICR7cmVwb30gUkVBRE1FYCxcbiAgICAvLyBsaWNlbnNlOiBgbGljZW5zZSB0ZXh0IGhlcmVgLFxuICAgIC4uLnNldHRpbmdzLFxuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3Qoe1xuICAgIHVybCwgcGF5bG9hZCwgY29uZmlnLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuaW50ZXJmYWNlIFJlYWRSZXBvT3B0aW9ucyB7XG4gIG93bmVyOiBzdHJpbmc7XG4gIHJlcG86IHN0cmluZztcbiAgY29uZmlnOiBFeHRlbmRDb25maWc7XG59XG5cbi8vIEdFVCAvYXBpL3YxL3JlcG9zL3tvd25lcn0ve3JlcG99XG5leHBvcnQgY29uc3QgcmVhZFJlcG8gPSBhc3luYyAoe1xuICBvd25lciwgcmVwbywgY29uZmlnLFxufTogUmVhZFJlcG9PcHRpb25zKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICdyZXBvcycsIG93bmVyLCByZXBvKTtcbiAgbGV0IHJlc3BvbnNlO1xuXG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBnZXQoe1xuICAgICAgdXJsLCBjb25maWcsIG5vQ2FjaGU6IHRydWUsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzcG9uc2UgPSBudWxsO1xuICB9XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmludGVyZmFjZSBFbnN1cmVSZXBvT3B0aW9ucyB7XG4gIHJlcG86IHN0cmluZztcbiAgc2V0dGluZ3M6IG9iamVjdDtcbiAgY29uZmlnOiBFeHRlbmRDb25maWc7XG4gIG93bmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBlbnN1cmVSZXBvID0gYXN5bmMgKHtcbiAgb3duZXIsIHJlcG8sIHNldHRpbmdzLCBjb25maWcsXG59OiBFbnN1cmVSZXBvT3B0aW9ucyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gIGxldCByZXBvc2l0b3J5ID0gYXdhaXQgcmVhZFJlcG8oe1xuICAgIG93bmVyLCByZXBvLCBjb25maWcsXG4gIH0pO1xuXG4gIGlmICghcmVwb3NpdG9yeSkge1xuICAgIHJlcG9zaXRvcnkgPSBhd2FpdCBjcmVhdGVSZXBvKHtcbiAgICAgIHJlcG8sIHNldHRpbmdzLCBjb25maWcsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlcG9zaXRvcnk7XG59O1xuXG4vLyBQQVRDSCAvYXBpL3YxL3JlcG9zL3tvd25lcn0ve3JlcG99XG5leHBvcnQgY29uc3QgdXBkYXRlUmVwbyA9IGFzeW5jICh7XG4gIG93bmVyLCByZXBvLCBzZXR0aW5ncywgY29uZmlnLFxufTogRW5zdXJlUmVwb09wdGlvbnMpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgb3duZXIsIHJlcG8pO1xuICBjb25zdCBwYXlsb2FkID0ge1xuICAgIC8vIGFsbG93X21lcmdlX2NvbW1pdHM6IHRydWUsXG4gICAgLy8gYWxsb3dfcmViYXNlOiB0cnVlLFxuICAgIC8vIGFsbG93X3JlYmFzZV9leHBsaWNpdDogdHJ1ZSxcbiAgICAvLyBhbGxvd19zcXVhc2hfbWVyZ2U6IHRydWUsXG4gICAgLy8gYXJjaGl2ZWQ6IHRydWUsXG4gICAgLy8gZGVmYXVsdF9icmFuY2g6IFwic3RyaW5nXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwic3RyaW5nXCIsXG4gICAgLy8gZW5hYmxlX2lzc3VlczogdHJ1ZSxcbiAgICAvLyBlbmFibGVfcHVsbF9yZXF1ZXN0czogdHJ1ZSxcbiAgICAvLyBlbmFibGVfd2lraTogdHJ1ZSxcbiAgICAvLyBpZ25vcmVfd2hpdGVzcGFjZTogdHJ1ZSxcbiAgICAvLyBuYW1lOiBcInN0cmluZ1wiLFxuICAgIC8vIHByaXZhdGU6IHRydWUsXG4gICAgLy8gd2Vic2l0ZTogXCJzdHJpbmdcIixcbiAgICAuLi5zZXR0aW5ncyxcbiAgfTtcbiAgbGV0IHJlc3BvbnNlO1xuXG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBwYXRjaCh7XG4gICAgICB1cmwsIHBheWxvYWQsIGNvbmZpZyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXNwb25zZSA9IG51bGw7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuLy8gREVMRVRFIC9hcGkvdjEvcmVwb3Mve293bmVyfS97cmVwb31cbmV4cG9ydCBjb25zdCBkZWxldGVSZXBvID0gYXN5bmMgKHtcbiAgb3duZXIsIHJlcG8sIGNvbmZpZyxcbn06IFJlYWRSZXBvT3B0aW9ucyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gIGNvbnN0IHVybCA9IFBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCBvd25lciwgcmVwbyk7XG4gIGxldCByZXNwb25zZTtcblxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZGVsKHtcbiAgICAgIHVybCwgY29uZmlnLCBwYXlsb2FkOiB7fSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXNwb25zZSA9IG51bGw7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbiJdfQ==