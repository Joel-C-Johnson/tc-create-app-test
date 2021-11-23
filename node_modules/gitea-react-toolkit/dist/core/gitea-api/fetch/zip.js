"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileFromZip = exports.fetchRepositoryZipFile = void 0;

var _path = _interopRequireDefault(require("path"));

var _jszip = _interopRequireDefault(require("jszip"));

var _localforage = _interopRequireDefault(require("localforage"));

var _repos = require("../repos");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var zipStore = _localforage.default.createInstance({
  driver: [_localforage.default.INDEXEDDB],
  name: 'zip-store'
}); // https://bg.door43.org/unfoldingWord/en_ult/archive/master.zip


var fetchRepositoryZipFile = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var username, repository, branch, options, repoExists, uri, response, zipArrayBuffer;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref.username, repository = _ref.repository, branch = _ref.branch, options = _ref.options;
            _context.next = 3;
            return (0, _repos.repositoryExists)({
              username: username,
              repository: repository
            });

          case 3:
            repoExists = _context.sent;

            if (repoExists) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", null);

          case 6:
            uri = zipUri({
              username: username,
              repository: repository,
              branch: branch
            });
            _context.next = 9;
            return fetch(uri);

          case 9:
            response = _context.sent;

            if (!(response.status === 200 || response.status === 0)) {
              _context.next = 19;
              break;
            }

            _context.next = 13;
            return response.arrayBuffer();

          case 13:
            zipArrayBuffer = _context.sent;
            _context.next = 16;
            return zipStore.setItem(uri, zipArrayBuffer);

          case 16:
            return _context.abrupt("return", true);

          case 19:
            return _context.abrupt("return", false);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchRepositoryZipFile(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.fetchRepositoryZipFile = fetchRepositoryZipFile;

var getFileFromZip = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var username, repository, path, branch, file, uri, zipBlob, zip, zipPath;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref3.username, repository = _ref3.repository, path = _ref3.path, branch = _ref3.branch;
            uri = zipUri({
              username: username,
              repository: repository,
              branch: branch
            });
            _context2.next = 4;
            return zipStore.getItem(uri);

          case 4:
            zipBlob = _context2.sent;
            _context2.prev = 5;

            if (!zipBlob) {
              _context2.next = 14;
              break;
            }

            _context2.next = 9;
            return _jszip.default.loadAsync(zipBlob);

          case 9:
            zip = _context2.sent;
            zipPath = _path.default.join(repository.toLowerCase(), path);
            _context2.next = 13;
            return zip.file(zipPath).async("string");

          case 13:
            file = _context2.sent;

          case 14:
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](5);
            file = null;

          case 19:
            return _context2.abrupt("return", file);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 16]]);
  }));

  return function getFileFromZip(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getFileFromZip = getFileFromZip;

var zipUri = function zipUri(_ref5) {
  var username = _ref5.username,
      repository = _ref5.repository,
      _ref5$branch = _ref5.branch,
      branch = _ref5$branch === void 0 ? 'master' : _ref5$branch;

  var zipPath = _path.default.join(username, repository, 'archive', "".concat(branch, ".zip"));

  var zipUri = baseURL + zipPath;
  return zipUri;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9mZXRjaC96aXAuanMiXSwibmFtZXMiOlsiemlwU3RvcmUiLCJsb2NhbGZvcmFnZSIsImNyZWF0ZUluc3RhbmNlIiwiZHJpdmVyIiwiSU5ERVhFRERCIiwibmFtZSIsImZldGNoUmVwb3NpdG9yeVppcEZpbGUiLCJ1c2VybmFtZSIsInJlcG9zaXRvcnkiLCJicmFuY2giLCJvcHRpb25zIiwicmVwb0V4aXN0cyIsInVyaSIsInppcFVyaSIsImZldGNoIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJhcnJheUJ1ZmZlciIsInppcEFycmF5QnVmZmVyIiwic2V0SXRlbSIsImdldEZpbGVGcm9tWmlwIiwicGF0aCIsImdldEl0ZW0iLCJ6aXBCbG9iIiwiSlNaaXAiLCJsb2FkQXN5bmMiLCJ6aXAiLCJ6aXBQYXRoIiwiUGF0aCIsImpvaW4iLCJ0b0xvd2VyQ2FzZSIsImZpbGUiLCJhc3luYyIsImJhc2VVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFJQSxJQUFNQSxRQUFRLEdBQUdDLHFCQUFZQyxjQUFaLENBQTJCO0FBQzFDQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0YscUJBQVlHLFNBQWIsQ0FEa0M7QUFFMUNDLEVBQUFBLElBQUksRUFBRTtBQUZvQyxDQUEzQixDQUFqQixDLENBS0E7OztBQUNPLElBQU1DLHNCQUFzQjtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQyxZQUFBQSxRQUFSLFFBQVFBLFFBQVIsRUFBa0JDLFVBQWxCLFFBQWtCQSxVQUFsQixFQUE4QkMsTUFBOUIsUUFBOEJBLE1BQTlCLEVBQXNDQyxPQUF0QyxRQUFzQ0EsT0FBdEM7QUFBQTtBQUFBLG1CQUNYLDZCQUFpQjtBQUFDSCxjQUFBQSxRQUFRLEVBQVJBLFFBQUQ7QUFBV0MsY0FBQUEsVUFBVSxFQUFWQTtBQUFYLGFBQWpCLENBRFc7O0FBQUE7QUFDOUJHLFlB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cG9ydCBKU1ppcCBmcm9tICdqc3ppcCc7XG5pbXBvcnQgbG9jYWxmb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xuXG5pbXBvcnQge1xuICByZXBvc2l0b3J5RXhpc3RzLFxufSBmcm9tICcuLi9yZXBvcyc7XG5cbmNvbnN0IHppcFN0b3JlID0gbG9jYWxmb3JhZ2UuY3JlYXRlSW5zdGFuY2Uoe1xuICBkcml2ZXI6IFtsb2NhbGZvcmFnZS5JTkRFWEVEREJdLFxuICBuYW1lOiAnemlwLXN0b3JlJyxcbn0pO1xuXG4vLyBodHRwczovL2JnLmRvb3I0My5vcmcvdW5mb2xkaW5nV29yZC9lbl91bHQvYXJjaGl2ZS9tYXN0ZXIuemlwXG5leHBvcnQgY29uc3QgZmV0Y2hSZXBvc2l0b3J5WmlwRmlsZSA9IGFzeW5jICh7dXNlcm5hbWUsIHJlcG9zaXRvcnksIGJyYW5jaCwgb3B0aW9uc30pID0+IHtcbiAgY29uc3QgcmVwb0V4aXN0cyA9IGF3YWl0IHJlcG9zaXRvcnlFeGlzdHMoe3VzZXJuYW1lLCByZXBvc2l0b3J5fSk7XG4gIGlmICghcmVwb0V4aXN0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHVyaSA9IHppcFVyaSh7dXNlcm5hbWUsIHJlcG9zaXRvcnksIGJyYW5jaH0pO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVyaSk7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDApIHtcbiAgICBjb25zdCB6aXBBcnJheUJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7IC8vIGJsb2Igc3RvcmFnZSBub3Qgc3VwcG9ydGVkIG9uIG1vYmlsZVxuICAgIGF3YWl0IHppcFN0b3JlLnNldEl0ZW0odXJpLCB6aXBBcnJheUJ1ZmZlcik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsZUZyb21aaXAgPSBhc3luYyAoe3VzZXJuYW1lLCByZXBvc2l0b3J5LCBwYXRoLCBicmFuY2h9KSA9PiB7XG4gIGxldCBmaWxlO1xuICBjb25zdCB1cmkgPSB6aXBVcmkoe3VzZXJuYW1lLCByZXBvc2l0b3J5LCBicmFuY2h9KTtcbiAgY29uc3QgemlwQmxvYiA9IGF3YWl0IHppcFN0b3JlLmdldEl0ZW0odXJpKTtcbiAgdHJ5IHtcbiAgICBpZiAoemlwQmxvYikge1xuICAgICAgY29uc3QgemlwID0gYXdhaXQgSlNaaXAubG9hZEFzeW5jKHppcEJsb2IpO1xuICAgICAgY29uc3QgemlwUGF0aCA9IFBhdGguam9pbihyZXBvc2l0b3J5LnRvTG93ZXJDYXNlKCksIHBhdGgpO1xuICAgICAgZmlsZSA9IGF3YWl0IHppcC5maWxlKHppcFBhdGgpLmFzeW5jKFwic3RyaW5nXCIpO1xuICAgIH1cbiAgfSBjYXRjaChlcnJvcikge1xuICAgIGZpbGUgPSBudWxsO1xuICB9XG4gIHJldHVybiBmaWxlO1xufTtcblxuY29uc3QgemlwVXJpID0gKHt1c2VybmFtZSwgcmVwb3NpdG9yeSwgYnJhbmNoPSdtYXN0ZXInfSkgPT4ge1xuICBjb25zdCB6aXBQYXRoID0gUGF0aC5qb2luKHVzZXJuYW1lLCByZXBvc2l0b3J5LCAnYXJjaGl2ZScsIGAke2JyYW5jaH0uemlwYCk7XG4gIGNvbnN0IHppcFVyaSA9IGJhc2VVUkwgKyB6aXBQYXRoO1xuICByZXR1cm4gemlwVXJpO1xufTtcbiJdfQ==