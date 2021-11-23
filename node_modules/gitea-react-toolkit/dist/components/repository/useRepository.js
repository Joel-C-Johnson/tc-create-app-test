"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deepFreeze = _interopRequireDefault(require("deep-freeze"));

var _ = require("../..");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useRepository(_ref) {
  var repositories = _ref.repositories,
      __full_name = _ref.full_name,
      urls = _ref.urls,
      defaultOwner = _ref.defaultOwner,
      defaultQuery = _ref.defaultQuery,
      config = _ref.config,
      authentication = _ref.authentication,
      __repository = _ref.repository,
      onRepository = _ref.onRepository,
      __branch = _ref.branch;

  var _useState = (0, _react.useState)(__branch),
      _useState2 = _slicedToArray(_useState, 2),
      branch = _useState2[0],
      setBranch = _useState2[1];

  var repository = __repository && (0, _deepFreeze.default)(__repository);

  var _ref2 = repository || {},
      full_name = _ref2.full_name;

  var user = authentication && authentication.user; // Due to objects not memoizing in useCallback, deconstruction is necessary
  // const { owner: { username: owner }, name: repo } = repository;

  var update = (0, _react.useCallback)(function (repo) {
    if (onRepository) {
      var _repo;

      if (repo) {
        _repo = _objectSpread(_objectSpread({}, repo), {}, {
          branch: branch
        });
        var tree_url = (0, _.repoTreeUrl)(_repo);
        _repo = _objectSpread(_objectSpread({}, _repo), {}, {
          tree_url: tree_url
        });
      }

      ;
      onRepository(_repo);
    }

    ;
  }, [branch, onRepository]);
  var read = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
      var owner, name, _repository;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              owner = _ref3.owner, name = _ref3.name;
              _context.next = 3;
              return (0, _helpers.readRepository)({
                owner: owner,
                repo: name,
                config: config
              });

            case 3:
              _repository = _context.sent;
              update(_repository);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }(), [config, update]);
  var updateBranch = (0, _react.useCallback)(function (_branch) {
    setBranch(_branch);
  }, []);
  var create = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(settings) {
      var _repository;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _helpers.createRepository)({
                settings: settings,
                config: config
              });

            case 2:
              _repository = _context2.sent;
              update(_repository);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }(), [config, update]);
  var dangerouslyDelete = (0, _react.useCallback)(function () {
    if (user && user.username === repository.owner.username) {
      (0, _helpers.deleteRepository)({
        repository: repository,
        config: config
      });
      window.setTimeout(update, 500);
    }

    ;
  }, [user, repository, config, update]);
  var fork = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _repo;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!((user && user.username) !== repository.owner.username)) {
              _context3.next = 5;
              break;
            }

            _context3.next = 3;
            return (0, _helpers.forkRepository)({
              repository: repository,
              config: config
            });

          case 3:
            _repo = _context3.sent;
            update(_repo);

          case 5:
            ;

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [config, repository, update, user]);
  var save = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(settings) {
      var _repository;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!repository.permissions.admin) {
                _context4.next = 5;
                break;
              }

              _context4.next = 3;
              return (0, _helpers.saveRepository)({
                repository: repository,
                settings: settings,
                config: config
              });

            case 3:
              _repository = _context4.sent;
              update(_repository);

            case 5:
              ;

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }(), [config, repository, update]);
  var storeZip = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _helpers.storeRepositoryZip)({
              repository: repository,
              config: config
            });

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })), [repository, config]);
  var removeZip = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _helpers.removeRepositoryZip)({
              repository: repository,
              config: config
            });

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })), [repository, config]);
  var fileFromZip = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(filepath) {
      var file;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return (0, _helpers.getFileFromRepositoryZip)({
                repository: repository,
                filepath: filepath,
                config: config
              });

            case 2:
              file = _context7.sent;
              return _context7.abrupt("return", file);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x4) {
      return _ref10.apply(this, arguments);
    };
  }(), [repository, config]);
  var forks = (0, _react.useCallback)(function () {
    (0, _helpers.repositoryForks)({
      repository: repository,
      config: config
    });
  }, [repository, config]);
  var close = (0, _react.useCallback)(function () {
    update();
  }, [update]);
  (0, _react.useEffect)(function () {
    if (__branch !== branch) {
      setBranch(__branch);
    }
  }, [__branch, branch]);
  (0, _react.useEffect)(function () {
    if (repository && branch !== repository.branch) {
      update(_objectSpread(_objectSpread({}, repository), {}, {
        branch: branch
      }));
    }
  }, [branch, repository, update]);
  (0, _react.useEffect)(function () {
    if (__full_name && !full_name) {
      var _full_name$split = __full_name.split('/'),
          _full_name$split2 = _slicedToArray(_full_name$split, 2),
          owner = _full_name$split2[0],
          name = _full_name$split2[1];

      read({
        owner: owner,
        name: name
      });
    }

    ;
  }, [full_name, __full_name, read]);
  var hasRepository = repository && repository.name && repository.owner && repository.permissions;
  var username = authentication && authentication.user && authentication.user.username;
  var components = {
    search: config && /*#__PURE__*/_react.default.createElement(_.Search, {
      defaultOwner: defaultOwner || username,
      defaultQuery: defaultQuery,
      onRepository: update,
      config: config
    }),
    browse: (urls || repositories) && /*#__PURE__*/_react.default.createElement(_.Repositories, {
      urls: urls,
      repositories: repositories,
      onRepository: update,
      config: config
    }),
    view: hasRepository && /*#__PURE__*/_react.default.createElement(_.Repository, {
      repository: repository,
      config: config,
      onRepository: onRepository
    }),
    form: hasRepository && /*#__PURE__*/_react.default.createElement(_.RepositoryForm, null)
  };

  var component = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  if (hasRepository) {
    component = components.form;
  } else if (urls || repositories) {
    component = components.browse;
  } else if (config) {
    component = components.search;
  }

  ;
  return {
    state: repository,
    actions: {
      close: close,
      create: create,
      update: update,
      dangerouslyDelete: dangerouslyDelete,
      fork: fork,
      save: save,
      forks: forks,
      updateBranch: updateBranch,
      read: read,
      storeZip: storeZip,
      removeZip: removeZip,
      fileFromZip: fileFromZip
    },
    component: component,
    components: components,
    config: config
  };
}

;
useRepository.propTypes = {
  /** Repository data to render, if url not provided. */
  repository: _propTypes.default.shape({
    id: _propTypes.default.number,
    owner: _propTypes.default.object.isRequired,
    name: _propTypes.default.string.isRequired,
    full_name: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    html_url: _propTypes.default.string.isRequired,
    website: _propTypes.default.string.isRequired,
    tree_url: _propTypes.default.string,
    avatar_url: _propTypes.default.string,
    branch: _propTypes.default.string
  }),

  /** Function to call when repository is selected. */
  onRepository: _propTypes.default.func.isRequired,

  /** Full name of the repo, `owner/name` */
  full_name: _propTypes.default.string,

  /** Pass a previously returned authentication object to bypass login. */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    token: _propTypes.default.object.isRequired,
    config: _propTypes.default.object.isRequired,
    remember: _propTypes.default.bool
  }),

  /** Urls array to get repository data, if repository data is not provided. */
  urls: _propTypes.default.array,

  /** Repositories data array to render, if urls not provided. */
  repositories: _propTypes.default.array,

  /** Prefill the owner search field. */
  defaultOwner: _propTypes.default.string,

  /** Prefill the query search field. */
  defaultQuery: _propTypes.default.string,

  /** The name of the branch to read/write files */
  branch: _propTypes.default.string,

  /** Configuration to pass through to the Search/Repositories component. */
  config: _propTypes.default.shape({
    /** Configuration required for Search or Repositories if paths are provided as URL. */
    server: _propTypes.default.string
  }).isRequired
};
var _default = useRepository;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvdXNlUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJ1c2VSZXBvc2l0b3J5IiwicmVwb3NpdG9yaWVzIiwiX19mdWxsX25hbWUiLCJmdWxsX25hbWUiLCJ1cmxzIiwiZGVmYXVsdE93bmVyIiwiZGVmYXVsdFF1ZXJ5IiwiY29uZmlnIiwiYXV0aGVudGljYXRpb24iLCJfX3JlcG9zaXRvcnkiLCJyZXBvc2l0b3J5Iiwib25SZXBvc2l0b3J5IiwiX19icmFuY2giLCJicmFuY2giLCJzZXRCcmFuY2giLCJ1c2VyIiwidXBkYXRlIiwicmVwbyIsIl9yZXBvIiwidHJlZV91cmwiLCJyZWFkIiwib3duZXIiLCJuYW1lIiwiX3JlcG9zaXRvcnkiLCJ1cGRhdGVCcmFuY2giLCJfYnJhbmNoIiwiY3JlYXRlIiwic2V0dGluZ3MiLCJkYW5nZXJvdXNseURlbGV0ZSIsInVzZXJuYW1lIiwid2luZG93Iiwic2V0VGltZW91dCIsImZvcmsiLCJzYXZlIiwicGVybWlzc2lvbnMiLCJhZG1pbiIsInN0b3JlWmlwIiwicmVtb3ZlWmlwIiwiZmlsZUZyb21aaXAiLCJmaWxlcGF0aCIsImZpbGUiLCJmb3JrcyIsImNsb3NlIiwic3BsaXQiLCJoYXNSZXBvc2l0b3J5IiwiY29tcG9uZW50cyIsInNlYXJjaCIsImJyb3dzZSIsInZpZXciLCJmb3JtIiwiY29tcG9uZW50Iiwic3RhdGUiLCJhY3Rpb25zIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJpZCIsIm51bWJlciIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJkZXNjcmlwdGlvbiIsImh0bWxfdXJsIiwid2Vic2l0ZSIsImF2YXRhcl91cmwiLCJmdW5jIiwidG9rZW4iLCJyZW1lbWJlciIsImJvb2wiLCJhcnJheSIsInNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0E7O0FBQ0E7O0FBRUE7O0FBR0E7Ozs7Ozs7Ozs7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VU0sTUFoQ0E7O0FBaUN4QjtBQUNBL0MsRUFBQUEsTUFBTSxFQUFFeUMsbUJBQVVNLE1BbENNOztBQW1DeEI7QUFDQXJELEVBQUFBLE1BQU0sRUFBRStDLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3RCO0FBQ0FlLElBQUFBLE1BQU0sRUFBRWhCLG1CQUFVTTtBQUZJLEdBQWhCLEVBR0xEO0FBdkNxQixDQUExQjtlQTBDZTNELGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZGVlcEZyZWV6ZSBmcm9tICdkZWVwLWZyZWV6ZSc7XG5cbmltcG9ydCB7XG4gIFJlcG9zaXRvcnksIFJlcG9zaXRvcnlGb3JtLCBSZXBvc2l0b3JpZXMsIFNlYXJjaCwgcmVwb1RyZWVVcmwsXG59IGZyb20gJy4uLy4uJztcbmltcG9ydCB7XG4gIGRlbGV0ZVJlcG9zaXRvcnksXG4gIGZvcmtSZXBvc2l0b3J5LFxuICBzYXZlUmVwb3NpdG9yeSxcbiAgcmVwb3NpdG9yeUZvcmtzLFxuICBjcmVhdGVSZXBvc2l0b3J5LFxuICByZWFkUmVwb3NpdG9yeSxcbiAgc3RvcmVSZXBvc2l0b3J5WmlwLFxuICByZW1vdmVSZXBvc2l0b3J5WmlwLFxuICBnZXRGaWxlRnJvbVJlcG9zaXRvcnlaaXAsXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmZ1bmN0aW9uIHVzZVJlcG9zaXRvcnkoe1xuICByZXBvc2l0b3JpZXMsXG4gIGZ1bGxfbmFtZTogX19mdWxsX25hbWUsXG4gIHVybHMsXG4gIGRlZmF1bHRPd25lcixcbiAgZGVmYXVsdFF1ZXJ5LFxuICBjb25maWcsXG4gIGF1dGhlbnRpY2F0aW9uLFxuICByZXBvc2l0b3J5OiBfX3JlcG9zaXRvcnksXG4gIG9uUmVwb3NpdG9yeSxcbiAgYnJhbmNoOiBfX2JyYW5jaCxcbn0pIHtcbiAgY29uc3QgW2JyYW5jaCwgc2V0QnJhbmNoXSA9IHVzZVN0YXRlKF9fYnJhbmNoKTtcbiAgY29uc3QgcmVwb3NpdG9yeSA9IF9fcmVwb3NpdG9yeSAmJiBkZWVwRnJlZXplKF9fcmVwb3NpdG9yeSk7XG4gIGNvbnN0IHsgZnVsbF9uYW1lIH0gPSByZXBvc2l0b3J5IHx8IHt9O1xuICBjb25zdCB1c2VyID0gYXV0aGVudGljYXRpb24gJiYgYXV0aGVudGljYXRpb24udXNlcjtcblxuICAvLyBEdWUgdG8gb2JqZWN0cyBub3QgbWVtb2l6aW5nIGluIHVzZUNhbGxiYWNrLCBkZWNvbnN0cnVjdGlvbiBpcyBuZWNlc3NhcnlcbiAgLy8gY29uc3QgeyBvd25lcjogeyB1c2VybmFtZTogb3duZXIgfSwgbmFtZTogcmVwbyB9ID0gcmVwb3NpdG9yeTtcblxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjaygocmVwbykgPT4ge1xuICAgIGlmIChvblJlcG9zaXRvcnkpIHtcbiAgICAgIGxldCBfcmVwbztcblxuICAgICAgaWYgKHJlcG8pIHtcbiAgICAgICAgX3JlcG8gPSB7IC4uLnJlcG8sIGJyYW5jaCB9O1xuICAgICAgICBjb25zdCB0cmVlX3VybCA9IHJlcG9UcmVlVXJsKF9yZXBvKTtcbiAgICAgICAgX3JlcG8gPSB7IC4uLl9yZXBvLCB0cmVlX3VybCB9O1xuICAgICAgfTtcbiAgICAgIG9uUmVwb3NpdG9yeShfcmVwbyk7XG4gICAgfTtcbiAgfSwgW2JyYW5jaCwgb25SZXBvc2l0b3J5XSk7XG5cbiAgY29uc3QgcmVhZCA9IHVzZUNhbGxiYWNrKGFzeW5jICh7IG93bmVyLCBuYW1lIH0pID0+IHtcbiAgICBjb25zdCBfcmVwb3NpdG9yeSA9IGF3YWl0IHJlYWRSZXBvc2l0b3J5KHtcbiAgICAgIG93bmVyLCByZXBvOiBuYW1lLCBjb25maWcsXG4gICAgfSk7XG4gICAgdXBkYXRlKF9yZXBvc2l0b3J5KTtcbiAgfSwgW2NvbmZpZywgdXBkYXRlXSk7XG5cbiAgY29uc3QgdXBkYXRlQnJhbmNoID0gdXNlQ2FsbGJhY2soKF9icmFuY2gpID0+IHtcbiAgICBzZXRCcmFuY2goX2JyYW5jaCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjcmVhdGUgPSB1c2VDYWxsYmFjayhhc3luYyAoc2V0dGluZ3MpID0+IHtcbiAgICBjb25zdCBfcmVwb3NpdG9yeSA9IGF3YWl0IGNyZWF0ZVJlcG9zaXRvcnkoeyBzZXR0aW5ncywgY29uZmlnIH0pO1xuICAgIHVwZGF0ZShfcmVwb3NpdG9yeSk7XG4gIH0sIFtjb25maWcsIHVwZGF0ZV0pO1xuXG4gIGNvbnN0IGRhbmdlcm91c2x5RGVsZXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICh1c2VyICYmIHVzZXIudXNlcm5hbWUgPT09IHJlcG9zaXRvcnkub3duZXIudXNlcm5hbWUpIHtcbiAgICAgIGRlbGV0ZVJlcG9zaXRvcnkoeyByZXBvc2l0b3J5LCBjb25maWcgfSk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh1cGRhdGUsIDUwMCk7XG4gICAgfTtcbiAgfSwgW3VzZXIsIHJlcG9zaXRvcnksIGNvbmZpZywgdXBkYXRlXSk7XG5cbiAgY29uc3QgZm9yayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoKHVzZXIgJiYgdXNlci51c2VybmFtZSkgIT09IHJlcG9zaXRvcnkub3duZXIudXNlcm5hbWUpIHtcbiAgICAgIGNvbnN0IF9yZXBvID0gYXdhaXQgZm9ya1JlcG9zaXRvcnkoeyByZXBvc2l0b3J5LCBjb25maWcgfSk7XG4gICAgICB1cGRhdGUoX3JlcG8pO1xuICAgIH07XG4gIH0sIFtjb25maWcsIHJlcG9zaXRvcnksIHVwZGF0ZSwgdXNlcl0pO1xuXG4gIGNvbnN0IHNhdmUgPSB1c2VDYWxsYmFjayhhc3luYyAoc2V0dGluZ3MpID0+IHtcbiAgICBsZXQgX3JlcG9zaXRvcnk7XG5cbiAgICBpZiAocmVwb3NpdG9yeS5wZXJtaXNzaW9ucy5hZG1pbikge1xuICAgICAgX3JlcG9zaXRvcnkgPSBhd2FpdCBzYXZlUmVwb3NpdG9yeSh7XG4gICAgICAgIHJlcG9zaXRvcnksIHNldHRpbmdzLCBjb25maWcsXG4gICAgICB9KTtcbiAgICAgIHVwZGF0ZShfcmVwb3NpdG9yeSk7XG4gICAgfTtcbiAgfSwgW2NvbmZpZywgcmVwb3NpdG9yeSwgdXBkYXRlXSk7XG5cbiAgY29uc3Qgc3RvcmVaaXAgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc3RvcmVSZXBvc2l0b3J5WmlwKHsgcmVwb3NpdG9yeSwgY29uZmlnIH0pO1xuICB9LCBbcmVwb3NpdG9yeSwgY29uZmlnXSk7XG5cbiAgY29uc3QgcmVtb3ZlWmlwID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT57XG4gICAgYXdhaXQgcmVtb3ZlUmVwb3NpdG9yeVppcCh7IHJlcG9zaXRvcnksIGNvbmZpZyB9KTtcbiAgfSwgW3JlcG9zaXRvcnksIGNvbmZpZ10pO1xuXG4gIGNvbnN0IGZpbGVGcm9tWmlwID0gdXNlQ2FsbGJhY2soYXN5bmMgKGZpbGVwYXRoKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IGdldEZpbGVGcm9tUmVwb3NpdG9yeVppcCh7XG4gICAgICByZXBvc2l0b3J5LCBmaWxlcGF0aCwgY29uZmlnLFxuICAgIH0pO1xuICAgIHJldHVybiBmaWxlO1xuICB9LCBbcmVwb3NpdG9yeSwgY29uZmlnXSk7XG5cbiAgY29uc3QgZm9ya3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmVwb3NpdG9yeUZvcmtzKHsgcmVwb3NpdG9yeSwgY29uZmlnIH0pO1xuICB9LCBbcmVwb3NpdG9yeSwgY29uZmlnXSk7XG5cbiAgY29uc3QgY2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0sIFt1cGRhdGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChfX2JyYW5jaCAhPT0gYnJhbmNoKSB7XG4gICAgICBzZXRCcmFuY2goX19icmFuY2gpO1xuICAgIH1cbiAgfSwgW19fYnJhbmNoLCBicmFuY2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvc2l0b3J5ICYmIGJyYW5jaCAhPT0gcmVwb3NpdG9yeS5icmFuY2gpIHtcbiAgICAgIHVwZGF0ZSh7IC4uLnJlcG9zaXRvcnksIGJyYW5jaCB9KTtcbiAgICB9XG4gIH0sIFticmFuY2gsIHJlcG9zaXRvcnksIHVwZGF0ZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKF9fZnVsbF9uYW1lICYmICFmdWxsX25hbWUpIHtcbiAgICAgIGNvbnN0IFtvd25lciwgbmFtZV0gPSBfX2Z1bGxfbmFtZS5zcGxpdCgnLycpO1xuICAgICAgcmVhZCh7IG93bmVyLCBuYW1lIH0pO1xuICAgIH07XG4gIH0sIFtmdWxsX25hbWUsIF9fZnVsbF9uYW1lLCByZWFkXSk7XG5cbiAgY29uc3QgaGFzUmVwb3NpdG9yeSA9IHJlcG9zaXRvcnkgJiYgcmVwb3NpdG9yeS5uYW1lICYmIHJlcG9zaXRvcnkub3duZXIgJiYgcmVwb3NpdG9yeS5wZXJtaXNzaW9ucztcblxuICBjb25zdCB1c2VybmFtZSA9IGF1dGhlbnRpY2F0aW9uICYmIGF1dGhlbnRpY2F0aW9uLnVzZXIgJiYgYXV0aGVudGljYXRpb24udXNlci51c2VybmFtZTtcbiAgY29uc3QgY29tcG9uZW50cyA9IHtcbiAgICBzZWFyY2g6IGNvbmZpZyAmJiAoXG4gICAgICA8U2VhcmNoXG4gICAgICAgIGRlZmF1bHRPd25lcj17ZGVmYXVsdE93bmVyIHx8IHVzZXJuYW1lfVxuICAgICAgICBkZWZhdWx0UXVlcnk9e2RlZmF1bHRRdWVyeX1cbiAgICAgICAgb25SZXBvc2l0b3J5PXt1cGRhdGV9XG4gICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgLz5cbiAgICApLFxuICAgIGJyb3dzZTogKHVybHMgfHwgcmVwb3NpdG9yaWVzKSAmJiAoXG4gICAgICA8UmVwb3NpdG9yaWVzXG4gICAgICAgIHVybHM9e3VybHN9XG4gICAgICAgIHJlcG9zaXRvcmllcz17cmVwb3NpdG9yaWVzfVxuICAgICAgICBvblJlcG9zaXRvcnk9e3VwZGF0ZX1cbiAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAvPlxuICAgICksXG4gICAgdmlldzogaGFzUmVwb3NpdG9yeSAmJiAoXG4gICAgICA8UmVwb3NpdG9yeSByZXBvc2l0b3J5PXtyZXBvc2l0b3J5fSBjb25maWc9e2NvbmZpZ30gb25SZXBvc2l0b3J5PXtvblJlcG9zaXRvcnl9IC8+XG4gICAgKSxcbiAgICBmb3JtOiBoYXNSZXBvc2l0b3J5ICYmIChcbiAgICAgIDxSZXBvc2l0b3J5Rm9ybSAvPlxuICAgICksXG4gIH07XG5cbiAgbGV0IGNvbXBvbmVudCA9IDw+PC8+O1xuXG4gIGlmIChoYXNSZXBvc2l0b3J5KSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50cy5mb3JtO1xuICB9IGVsc2UgaWYgKHVybHMgfHwgcmVwb3NpdG9yaWVzKSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50cy5icm93c2U7XG4gIH0gZWxzZSBpZiAoY29uZmlnKSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50cy5zZWFyY2g7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZTogcmVwb3NpdG9yeSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBjbG9zZSxcbiAgICAgIGNyZWF0ZSxcbiAgICAgIHVwZGF0ZSxcbiAgICAgIGRhbmdlcm91c2x5RGVsZXRlLFxuICAgICAgZm9yayxcbiAgICAgIHNhdmUsXG4gICAgICBmb3JrcyxcbiAgICAgIHVwZGF0ZUJyYW5jaCxcbiAgICAgIHJlYWQsXG4gICAgICBzdG9yZVppcCxcbiAgICAgIHJlbW92ZVppcCxcbiAgICAgIGZpbGVGcm9tWmlwLFxuICAgIH0sXG4gICAgY29tcG9uZW50LFxuICAgIGNvbXBvbmVudHMsXG4gICAgY29uZmlnLFxuICB9O1xufTtcblxudXNlUmVwb3NpdG9yeS5wcm9wVHlwZXMgPSB7XG4gIC8qKiBSZXBvc2l0b3J5IGRhdGEgdG8gcmVuZGVyLCBpZiB1cmwgbm90IHByb3ZpZGVkLiAqL1xuICByZXBvc2l0b3J5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG93bmVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGZ1bGxfbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaHRtbF91cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB3ZWJzaXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHJlZV91cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXZhdGFyX3VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBicmFuY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHJlcG9zaXRvcnkgaXMgc2VsZWN0ZWQuICovXG4gIG9uUmVwb3NpdG9yeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqIEZ1bGwgbmFtZSBvZiB0aGUgcmVwbywgYG93bmVyL25hbWVgICovXG4gIGZ1bGxfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFBhc3MgYSBwcmV2aW91c2x5IHJldHVybmVkIGF1dGhlbnRpY2F0aW9uIG9iamVjdCB0byBieXBhc3MgbG9naW4uICovXG4gIGF1dGhlbnRpY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0b2tlbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHJlbWVtYmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgfSksXG4gIC8qKiBVcmxzIGFycmF5IHRvIGdldCByZXBvc2l0b3J5IGRhdGEsIGlmIHJlcG9zaXRvcnkgZGF0YSBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybHM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqIFJlcG9zaXRvcmllcyBkYXRhIGFycmF5IHRvIHJlbmRlciwgaWYgdXJscyBub3QgcHJvdmlkZWQuICovXG4gIHJlcG9zaXRvcmllczogUHJvcFR5cGVzLmFycmF5LFxuICAvKiogUHJlZmlsbCB0aGUgb3duZXIgc2VhcmNoIGZpZWxkLiAqL1xuICBkZWZhdWx0T3duZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBQcmVmaWxsIHRoZSBxdWVyeSBzZWFyY2ggZmllbGQuICovXG4gIGRlZmF1bHRRdWVyeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBicmFuY2ggdG8gcmVhZC93cml0ZSBmaWxlcyAqL1xuICBicmFuY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBDb25maWd1cmF0aW9uIHRvIHBhc3MgdGhyb3VnaCB0byB0aGUgU2VhcmNoL1JlcG9zaXRvcmllcyBjb21wb25lbnQuICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAvKiogQ29uZmlndXJhdGlvbiByZXF1aXJlZCBmb3IgU2VhcmNoIG9yIFJlcG9zaXRvcmllcyBpZiBwYXRocyBhcmUgcHJvdmlkZWQgYXMgVVJMLiAqL1xuICAgIHNlcnZlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcG9zaXRvcnk7XG4iXX0=