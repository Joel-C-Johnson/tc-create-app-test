"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileFromRepositoryZip = exports.removeRepositoryZip = exports.storeRepositoryZip = exports.deleteRepository = exports.saveRepository = exports.readRepository = exports.createRepository = exports.repositoryForks = exports.forkRepository = void 0;

var _ = require("../..");

var _2 = require(".");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var forkRepository = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var repository, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            repository = _ref.repository, config = _ref.config;
            username = repository.owner.username, name = repository.name;
            _context.next = 4;
            return (0, _.createFork)({
              owner: username,
              repo: name,
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

  return function forkRepository(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.forkRepository = forkRepository;

var repositoryForks = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var repository, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            repository = _ref3.repository, config = _ref3.config;
            username = repository.owner.username, name = repository.name;
            _context2.next = 4;
            return (0, _.readForks)({
              owner: username,
              repo: name,
              config: config
            });

          case 4:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function repositoryForks(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.repositoryForks = repositoryForks;

var createRepository = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
    var repo, settings, config, _settings, response;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            repo = _ref5.repo, settings = _ref5.settings, config = _ref5.config;
            _settings = _objectSpread({
              name: repo,
              description: "".concat(repo || settings.name, " created via API."),
              private: false
            }, settings);
            _context3.next = 4;
            return (0, _.createRepo)({
              repo: repo,
              settings: _settings,
              config: config
            });

          case 4:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createRepository(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

exports.createRepository = createRepository;

var readRepository = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7) {
    var owner, repo, config, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = _ref7.owner, repo = _ref7.repo, config = _ref7.config;
            _context4.next = 3;
            return (0, _.readRepo)({
              owner: owner,
              repo: repo,
              config: config
            });

          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function readRepository(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

exports.readRepository = readRepository;

var saveRepository = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref9) {
    var repository, settings, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            repository = _ref9.repository, settings = _ref9.settings, config = _ref9.config;
            username = repository.owner.username, name = repository.name;
            _context5.next = 4;
            return (0, _.updateRepo)({
              owner: username,
              repo: name,
              settings: settings,
              config: config
            });

          case 4:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function saveRepository(_x5) {
    return _ref10.apply(this, arguments);
  };
}();

exports.saveRepository = saveRepository;

var deleteRepository = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref11) {
    var repository, settings, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            repository = _ref11.repository, settings = _ref11.settings, config = _ref11.config;
            username = repository.owner.username, name = repository.name;
            _context6.next = 4;
            return (0, _.deleteRepo)({
              owner: username,
              repo: name,
              settings: settings,
              config: config
            });

          case 4:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteRepository(_x6) {
    return _ref12.apply(this, arguments);
  };
}();

exports.deleteRepository = deleteRepository;

var storeRepositoryZip = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref13) {
    var repository, config, username, name, branch, response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            repository = _ref13.repository, config = _ref13.config;
            username = repository.owner.username, name = repository.name, branch = repository.branch;
            _context7.next = 4;
            return (0, _2.storeZipFromRepo)({
              owner: username,
              repo: name,
              branch: branch,
              server: config.server
            });

          case 4:
            response = _context7.sent;
            return _context7.abrupt("return", response);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function storeRepositoryZip(_x7) {
    return _ref14.apply(this, arguments);
  };
}();

exports.storeRepositoryZip = storeRepositoryZip;

var removeRepositoryZip = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref15) {
    var repository, config, username, name, branch, response;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            repository = _ref15.repository, config = _ref15.config;
            username = repository.owner.username, name = repository.name, branch = repository.branch;
            _context8.next = 4;
            return (0, _2.storeZipFromRepo)({
              owner: username,
              repo: name,
              branch: branch,
              server: config.server
            });

          case 4:
            response = _context8.sent;
            return _context8.abrupt("return", response);

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function removeRepositoryZip(_x8) {
    return _ref16.apply(this, arguments);
  };
}();

exports.removeRepositoryZip = removeRepositoryZip;

var getFileFromRepositoryZip = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(_ref17) {
    var repository, filepath, config, username, name, branch, file;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            repository = _ref17.repository, filepath = _ref17.filepath, config = _ref17.config;
            username = repository.owner.username, name = repository.name, branch = repository.branch;
            _context9.next = 4;
            return (0, _2.getFileFromRepoZip)({
              owner: username,
              repo: name,
              branch: branch,
              filepath: filepath,
              config: config
            });

          case 4:
            file = _context9.sent;
            return _context9.abrupt("return", file);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function getFileFromRepositoryZip(_x9) {
    return _ref18.apply(this, arguments);
  };
}();

exports.getFileFromRepositoryZip = getFileFromRepositoryZip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJmb3JrUmVwb3NpdG9yeSIsInJlcG9zaXRvcnkiLCJjb25maWciLCJ1c2VybmFtZSIsIm93bmVyIiwibmFtZSIsInJlcG8iLCJyZXNwb25zZSIsInJlcG9zaXRvcnlGb3JrcyIsImNyZWF0ZVJlcG9zaXRvcnkiLCJzZXR0aW5ncyIsIl9zZXR0aW5ncyIsImRlc2NyaXB0aW9uIiwicHJpdmF0ZSIsInJlYWRSZXBvc2l0b3J5Iiwic2F2ZVJlcG9zaXRvcnkiLCJkZWxldGVSZXBvc2l0b3J5Iiwic3RvcmVSZXBvc2l0b3J5WmlwIiwiYnJhbmNoIiwic2VydmVyIiwicmVtb3ZlUmVwb3NpdG9yeVppcCIsImdldEZpbGVGcm9tUmVwb3NpdG9yeVppcCIsImZpbGVwYXRoIiwiZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQVFBOzs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxjQUFjO0FBQUEsc0VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLFlBQUFBLFVBQVQsUUFBU0EsVUFBVCxFQUFxQkMsTUFBckIsUUFBcUJBLE1BQXJCO0FBQ1hDLFlBQUFBLFFBRFcsR0FDVUYsVUFEVixDQUNwQkcsS0FEb0IsQ0FDWEQsUUFEVyxFQUNDRSxJQURELEdBQ1VKLFVBRFYsQ0FDQ0ksSUFERDtBQUFBO0FBQUEsbUJBRUwsa0JBQVc7QUFBRUQsY0FBQUEsS0FBSyxFQUFFRCxRQUFUO0FBQW1CRyxjQUFBQSxJQUFJLEVBQUVELElBQXpCO0FBQStCSCxjQUFBQSxNQUFNLEVBQU5BO0FBQS9CLGFBQVgsQ0FGSzs7QUFBQTtBQUV0QkssWUFBQUEsUUFGc0I7QUFBQSw2Q0FHckJBLFFBSHFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRQLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7Ozs7QUFNQSxJQUFNUSxl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QUtsQ0osVUFMa0MsQ0FJZkksSUFKZSxFQUlUYSxNQUpTLEdBS2xDakIsVUFMa0MsQ0FJVGlCLE1BSlM7QUFBQTtBQUFBLG1CQU1uQiwyQkFBbUI7QUFDcENkLGNBQUFBLEtBQUssRUFBRUQsUUFENkI7QUFDbkJHLGNBQUFBLElBQUksRUFBRUQsSUFEYTtBQUNQYSxjQUFBQSxNQUFNLEVBQU5BLE1BRE87QUFDQ0ksY0FBQUEsUUFBUSxFQUFSQSxRQUREO0FBQ1dwQixjQUFBQSxNQUFNLEVBQU5BO0FBRFgsYUFBbkIsQ0FObUI7O0FBQUE7QUFNaENxQixZQUFBQSxJQU5nQztBQUFBLDhDQVMvQkEsSUFUK0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBeEJGLHdCQUF3QjtBQUFBO0FBQUE7QUFBQSxHQUE5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUZvcmssXG4gIHJlYWRGb3JrcyxcbiAgY3JlYXRlUmVwbyxcbiAgcmVhZFJlcG8sXG4gIHVwZGF0ZVJlcG8sXG4gIGRlbGV0ZVJlcG8sXG59IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IHN0b3JlWmlwRnJvbVJlcG8sIGdldEZpbGVGcm9tUmVwb1ppcCB9IGZyb20gJy4nO1xuXG5leHBvcnQgY29uc3QgZm9ya1JlcG9zaXRvcnkgPSBhc3luYyAoeyByZXBvc2l0b3J5LCBjb25maWcgfSkgPT4ge1xuICBjb25zdCB7IG93bmVyOiB7IHVzZXJuYW1lIH0sIG5hbWUgfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY3JlYXRlRm9yayh7IG93bmVyOiB1c2VybmFtZSwgcmVwbzogbmFtZSwgY29uZmlnIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmVwb3NpdG9yeUZvcmtzID0gYXN5bmMgKHsgcmVwb3NpdG9yeSwgY29uZmlnIH0pID0+IHtcbiAgY29uc3QgeyBvd25lcjogeyB1c2VybmFtZSB9LCBuYW1lIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlYWRGb3Jrcyh7IG93bmVyOiB1c2VybmFtZSwgcmVwbzogbmFtZSwgY29uZmlnIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVwb3NpdG9yeSA9IGFzeW5jICh7XG4gIHJlcG8sIHNldHRpbmdzLCBjb25maWcsXG59KSA9PiB7XG4gIGNvbnN0IF9zZXR0aW5ncyA9IHtcbiAgICBuYW1lOiByZXBvLFxuICAgIGRlc2NyaXB0aW9uOiBgJHtyZXBvIHx8IHNldHRpbmdzLm5hbWV9IGNyZWF0ZWQgdmlhIEFQSS5gLFxuICAgIHByaXZhdGU6IGZhbHNlLFxuICAgIC4uLnNldHRpbmdzLFxuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWF0ZVJlcG8oe1xuICAgIHJlcG8sIHNldHRpbmdzOiBfc2V0dGluZ3MsIGNvbmZpZyxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWFkUmVwb3NpdG9yeSA9IGFzeW5jICh7XG4gIG93bmVyLCByZXBvLCBjb25maWcsXG59KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVhZFJlcG8oe1xuICAgIG93bmVyLCByZXBvLCBjb25maWcsXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZVJlcG9zaXRvcnkgPSBhc3luYyAoe1xuICByZXBvc2l0b3J5LCBzZXR0aW5ncywgY29uZmlnLFxufSkgPT4ge1xuICBjb25zdCB7IG93bmVyOiB7IHVzZXJuYW1lIH0sIG5hbWUgfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXBkYXRlUmVwbyh7XG4gICAgb3duZXI6IHVzZXJuYW1lLCByZXBvOiBuYW1lLCBzZXR0aW5ncywgY29uZmlnLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlcG9zaXRvcnkgPSBhc3luYyAoe1xuICByZXBvc2l0b3J5LCBzZXR0aW5ncywgY29uZmlnLFxufSkgPT4ge1xuICBjb25zdCB7IG93bmVyOiB7IHVzZXJuYW1lIH0sIG5hbWUgfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGVsZXRlUmVwbyh7XG4gICAgb3duZXI6IHVzZXJuYW1lLCByZXBvOiBuYW1lLCBzZXR0aW5ncywgY29uZmlnLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlUmVwb3NpdG9yeVppcCA9IGFzeW5jICh7IHJlcG9zaXRvcnksIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvd25lcjogeyB1c2VybmFtZSB9LCBuYW1lLCBicmFuY2gsXG4gIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0b3JlWmlwRnJvbVJlcG8oe1xuICAgIG93bmVyOiB1c2VybmFtZSwgcmVwbzogbmFtZSwgYnJhbmNoLCBzZXJ2ZXI6IGNvbmZpZy5zZXJ2ZXIsXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlUmVwb3NpdG9yeVppcCA9IGFzeW5jICh7IHJlcG9zaXRvcnksIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvd25lcjogeyB1c2VybmFtZSB9LCBuYW1lLCBicmFuY2gsXG4gIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN0b3JlWmlwRnJvbVJlcG8oe1xuICAgIG93bmVyOiB1c2VybmFtZSwgcmVwbzogbmFtZSwgYnJhbmNoLCBzZXJ2ZXI6IGNvbmZpZy5zZXJ2ZXIsXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsZUZyb21SZXBvc2l0b3J5WmlwID0gYXN5bmMgKHtcbiAgcmVwb3NpdG9yeSwgZmlsZXBhdGgsIGNvbmZpZyxcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIG93bmVyOiB7IHVzZXJuYW1lIH0sIG5hbWUsIGJyYW5jaCxcbiAgfSA9IHJlcG9zaXRvcnk7XG4gIGNvbnN0IGZpbGUgPSBhd2FpdCBnZXRGaWxlRnJvbVJlcG9aaXAoe1xuICAgIG93bmVyOiB1c2VybmFtZSwgcmVwbzogbmFtZSwgYnJhbmNoLCBmaWxlcGF0aCwgY29uZmlnLFxuICB9KTtcbiAgcmV0dXJuIGZpbGU7XG59O1xuIl19