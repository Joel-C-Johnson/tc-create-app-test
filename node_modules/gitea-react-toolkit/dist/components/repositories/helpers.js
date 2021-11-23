"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRepository = exports.updateRepositorySettings = exports.readRepository = exports.createRepository = exports.repositoryForks = exports.forkRepository = exports.extendRepository = void 0;

var _core = require("../../core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var extendRepository = function extendRepository(_ref) {
  var repository = _ref.repository,
      authentication = _ref.authentication,
      updateRepository = _ref.updateRepository,
      config = _ref.config;
  var user = authentication && authentication.user ? authentication.user : undefined;

  if (user && user.username === repository.owner.username) {
    repository.dangerouslyDelete = function () {
      deleteRepository({
        repository: repository,
        config: config
      });
      window.setTimeout(updateRepository, 500);
    };
  } else {
    repository.fork = function () {
      forkRepository({
        repository: repository,
        config: config
      });
      updateRepository();
    };
  }

  if (repository.permissions.admin) {
    repository.update = function (settings) {
      updateRepositorySettings({
        repository: repository,
        settings: settings,
        config: config
      });
    };
  }

  repository.forks = function () {
    repositoryForks({
      repository: repository,
      config: config
    });
  };

  repository.close = function () {
    updateRepository();
  };

  return repository;
};

exports.extendRepository = extendRepository;

var forkRepository = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var repository, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            repository = _ref2.repository, config = _ref2.config;
            username = repository.owner.username, name = repository.name;
            _context.next = 4;
            return (0, _core.createFork)({
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
    return _ref3.apply(this, arguments);
  };
}();

exports.forkRepository = forkRepository;

var repositoryForks = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref4) {
    var repository, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            repository = _ref4.repository, config = _ref4.config;
            username = repository.owner.username, name = repository.name;
            _context2.next = 4;
            return (0, _core.readForks)({
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
    return _ref5.apply(this, arguments);
  };
}();

exports.repositoryForks = repositoryForks;

var createRepository = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref6) {
    var repo, settings, config, _settings, response;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            repo = _ref6.repo, settings = _ref6.settings, config = _ref6.config;
            _settings = _objectSpread({
              name: repo,
              description: "".concat(repo, " created via API."),
              private: false
            }, settings);
            _context3.next = 4;
            return (0, _core.createRepo)({
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
    return _ref7.apply(this, arguments);
  };
}();

exports.createRepository = createRepository;

var readRepository = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref8) {
    var owner, repo, config, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = _ref8.owner, repo = _ref8.repo, config = _ref8.config;
            _context4.next = 3;
            return (0, _core.readRepo)({
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
    return _ref9.apply(this, arguments);
  };
}();

exports.readRepository = readRepository;

var updateRepositorySettings = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref10) {
    var repository, settings, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            repository = _ref10.repository, settings = _ref10.settings, config = _ref10.config;
            username = repository.owner.username, name = repository.name;
            _context5.next = 4;
            return (0, _core.updateRepo)({
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

  return function updateRepositorySettings(_x5) {
    return _ref11.apply(this, arguments);
  };
}();

exports.updateRepositorySettings = updateRepositorySettings;

var deleteRepository = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref12) {
    var repository, settings, config, username, name, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            repository = _ref12.repository, settings = _ref12.settings, config = _ref12.config;
            username = repository.owner.username, name = repository.name;
            _context6.next = 4;
            return (0, _core.deleteRepo)({
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
    return _ref13.apply(this, arguments);
  };
}();

exports.deleteRepository = deleteRepository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImV4dGVuZFJlcG9zaXRvcnkiLCJyZXBvc2l0b3J5IiwiYXV0aGVudGljYXRpb24iLCJ1cGRhdGVSZXBvc2l0b3J5IiwiY29uZmlnIiwidXNlciIsInVuZGVmaW5lZCIsInVzZXJuYW1lIiwib3duZXIiLCJkYW5nZXJvdXNseURlbGV0ZSIsImRlbGV0ZVJlcG9zaXRvcnkiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZm9yayIsImZvcmtSZXBvc2l0b3J5IiwicGVybWlzc2lvbnMiLCJhZG1pbiIsInVwZGF0ZSIsInNldHRpbmdzIiwidXBkYXRlUmVwb3NpdG9yeVNldHRpbmdzIiwiZm9ya3MiLCJyZXBvc2l0b3J5Rm9ya3MiLCJjbG9zZSIsIm5hbWUiLCJyZXBvIiwicmVzcG9uc2UiLCJjcmVhdGVSZXBvc2l0b3J5IiwiX3NldHRpbmdzIiwiZGVzY3JpcHRpb24iLCJwcml2YXRlIiwicmVhZFJlcG9zaXRvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBU08sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUE0RDtBQUFBLE1BQTFEQyxVQUEwRCxRQUExREEsVUFBMEQ7QUFBQSxNQUE5Q0MsY0FBOEMsUUFBOUNBLGNBQThDO0FBQUEsTUFBOUJDLGdCQUE4QixRQUE5QkEsZ0JBQThCO0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQzFGLE1BQU1DLElBQUksR0FBSUgsY0FBYyxJQUFJQSxjQUFjLENBQUNHLElBQWxDLEdBQTBDSCxjQUFjLENBQUNHLElBQXpELEdBQWdFQyxTQUE3RTs7QUFDQSxNQUFJRCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsUUFBTCxLQUFrQk4sVUFBVSxDQUFDTyxLQUFYLENBQWlCRCxRQUEvQyxFQUF5RDtBQUN2RE4sSUFBQUEsVUFBVSxDQUFDUSxpQkFBWCxHQUErQixZQUFNO0FBQ25D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Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICBjcmVhdGVGb3JrLFxuICByZWFkRm9ya3MsXG4gIGNyZWF0ZVJlcG8sXG4gIHJlYWRSZXBvLFxuICB1cGRhdGVSZXBvLFxuICBkZWxldGVSZXBvLFxufSBmcm9tICcuLi8uLi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlcG9zaXRvcnkgPSAoe3JlcG9zaXRvcnksIGF1dGhlbnRpY2F0aW9uLCB1cGRhdGVSZXBvc2l0b3J5LCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSAoYXV0aGVudGljYXRpb24gJiYgYXV0aGVudGljYXRpb24udXNlcikgPyBhdXRoZW50aWNhdGlvbi51c2VyIDogdW5kZWZpbmVkO1xuICBpZiAodXNlciAmJiB1c2VyLnVzZXJuYW1lID09PSByZXBvc2l0b3J5Lm93bmVyLnVzZXJuYW1lKSB7XG4gICAgcmVwb3NpdG9yeS5kYW5nZXJvdXNseURlbGV0ZSA9ICgpID0+IHtcbiAgICAgIGRlbGV0ZVJlcG9zaXRvcnkoe3JlcG9zaXRvcnksIGNvbmZpZ30pO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQodXBkYXRlUmVwb3NpdG9yeSwgNTAwKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJlcG9zaXRvcnkuZm9yayA9ICgpID0+IHtcbiAgICAgIGZvcmtSZXBvc2l0b3J5KHtyZXBvc2l0b3J5LCBjb25maWd9KTtcbiAgICAgIHVwZGF0ZVJlcG9zaXRvcnkoKTtcbiAgICB9O1xuICB9XG4gIGlmIChyZXBvc2l0b3J5LnBlcm1pc3Npb25zLmFkbWluKSB7XG4gICAgcmVwb3NpdG9yeS51cGRhdGUgPSAoc2V0dGluZ3MpID0+IHtcbiAgICAgIHVwZGF0ZVJlcG9zaXRvcnlTZXR0aW5ncyh7cmVwb3NpdG9yeSwgc2V0dGluZ3MsIGNvbmZpZ30pO1xuICAgIH07XG4gIH1cbiAgcmVwb3NpdG9yeS5mb3JrcyA9ICgpID0+IHtcbiAgICByZXBvc2l0b3J5Rm9ya3Moe3JlcG9zaXRvcnksIGNvbmZpZ30pO1xuICB9O1xuICByZXBvc2l0b3J5LmNsb3NlID0gKCkgPT4ge1xuICAgIHVwZGF0ZVJlcG9zaXRvcnkoKTtcbiAgfTtcbiAgcmV0dXJuIHJlcG9zaXRvcnk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ya1JlcG9zaXRvcnkgPSBhc3luYyAoe3JlcG9zaXRvcnksIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgeyBvd25lcjogeyB1c2VybmFtZSB9LCBuYW1lIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWF0ZUZvcmsoe293bmVyOiB1c2VybmFtZSwgcmVwbzogbmFtZSwgY29uZmlnfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXBvc2l0b3J5Rm9ya3MgPSBhc3luYyAoe3JlcG9zaXRvcnksIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgeyBvd25lcjogeyB1c2VybmFtZSB9LCBuYW1lIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlYWRGb3Jrcyh7b3duZXI6IHVzZXJuYW1lLCByZXBvOiBuYW1lLCBjb25maWd9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcG9zaXRvcnkgPSBhc3luYyAoe3JlcG8sIHNldHRpbmdzLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IF9zZXR0aW5ncyA9IHtcbiAgICBuYW1lOiByZXBvLFxuICAgIGRlc2NyaXB0aW9uOiBgJHtyZXBvfSBjcmVhdGVkIHZpYSBBUEkuYCxcbiAgICBwcml2YXRlOiBmYWxzZSxcbiAgICAuLi5zZXR0aW5ncyxcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWF0ZVJlcG8oe3JlcG8sIHNldHRpbmdzOiBfc2V0dGluZ3MsIGNvbmZpZ30pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgcmVhZFJlcG9zaXRvcnkgPSBhc3luYyAoe293bmVyLCByZXBvLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVhZFJlcG8oe293bmVyLCByZXBvLCBjb25maWd9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlcG9zaXRvcnlTZXR0aW5ncyA9IGFzeW5jICh7cmVwb3NpdG9yeSwgc2V0dGluZ3MsIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgeyBvd25lcjogeyB1c2VybmFtZSB9LCBuYW1lIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZGF0ZVJlcG8oe293bmVyOiB1c2VybmFtZSwgcmVwbzogbmFtZSwgc2V0dGluZ3MsIGNvbmZpZ30pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUmVwb3NpdG9yeSA9IGFzeW5jICh7cmVwb3NpdG9yeSwgc2V0dGluZ3MsIGNvbmZpZ30pID0+IHtcbiAgY29uc3QgeyBvd25lcjogeyB1c2VybmFtZSB9LCBuYW1lIH0gPSByZXBvc2l0b3J5O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRlbGV0ZVJlcG8oe293bmVyOiB1c2VybmFtZSwgcmVwbzogbmFtZSwgc2V0dGluZ3MsIGNvbmZpZ30pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuIl19