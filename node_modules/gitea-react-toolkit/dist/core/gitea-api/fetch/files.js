"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repositoryExists = repositoryExists;
exports.getUID = getUID;
exports.getFile = exports.fetchFileFromServer = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("../");

var _zip = require("./zip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// https://bg.door43.org/unfoldingword/en_ult/raw/branch/master/manifest.yaml
var fetchFileFromServer = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var username, repository, path, _ref$branch, branch, config, repoExists, url, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = _ref.username, repository = _ref.repository, path = _ref.path, _ref$branch = _ref.branch, branch = _ref$branch === void 0 ? 'master' : _ref$branch, config = _ref.config;
            _context.next = 3;
            return repositoryExists({
              username: username,
              repository: repository
            });

          case 3:
            repoExists = _context.sent;

            if (!repoExists) {
              _context.next = 18;
              break;
            }

            url = _path.default.join(username, repository, 'raw/branch', branch, path);
            _context.prev = 6;
            _context.next = 9;
            return (0, _.get)({
              url: url,
              config: config
            });

          case 9:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            return _context.abrupt("return", null);

          case 16:
            _context.next = 19;
            break;

          case 18:
            return _context.abrupt("return", null);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 13]]);
  }));

  return function fetchFileFromServer(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.fetchFileFromServer = fetchFileFromServer;

var getFile = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var username, repository, path, branch, config, file, props;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref3.username, repository = _ref3.repository, path = _ref3.path, branch = _ref3.branch, config = _ref3.config;
            props = {
              username: username,
              repository: repository,
              path: path,
              branch: branch,
              config: config
            };
            _context2.next = 4;
            return (0, _zip.getFileFromZip)(props);

          case 4:
            file = _context2.sent;

            if (file) {
              _context2.next = 9;
              break;
            }

            _context2.next = 8;
            return fetchFileFromServer(props);

          case 8:
            file = _context2.sent;

          case 9:
            return _context2.abrupt("return", file);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getFile(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getFile = getFile;

function repositoryExists(_x3) {
  return _repositoryExists.apply(this, arguments);
}

function _repositoryExists() {
  _repositoryExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
    var username, repository, config, uid, params, url, _yield$get, repos, repo;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            username = _ref5.username, repository = _ref5.repository, config = _ref5.config;
            _context3.next = 3;
            return getUID({
              username: username
            });

          case 3:
            uid = _context3.sent;
            params = {
              q: repository,
              uid: uid
            };
            url = _path.default.join(_.apiPath, 'repos', "search");
            _context3.next = 8;
            return (0, _.get)({
              url: url,
              params: params,
              config: config
            });

          case 8:
            _yield$get = _context3.sent;
            repos = _yield$get.data;
            repo = repos.filter(function (repo) {
              return repo.name === repository;
            })[0];
            return _context3.abrupt("return", !!repo);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _repositoryExists.apply(this, arguments);
}

;

function getUID(_x4) {
  return _getUID.apply(this, arguments);
}

function _getUID() {
  _getUID = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref6) {
    var username, config, url, user, uid;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            username = _ref6.username, config = _ref6.config;
            url = _path.default.join(_.apiPath, 'users', username);
            _context4.next = 4;
            return (0, _.get)({
              url: url,
              config: config
            });

          case 4:
            user = _context4.sent;
            uid = user.id;
            return _context4.abrupt("return", uid);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getUID.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9mZXRjaC9maWxlcy5qcyJdLCJuYW1lcyI6WyJmZXRjaEZpbGVGcm9tU2VydmVyIiwidXNlcm5hbWUiLCJyZXBvc2l0b3J5IiwicGF0aCIsImJyYW5jaCIsImNvbmZpZyIsInJlcG9zaXRvcnlFeGlzdHMiLCJyZXBvRXhpc3RzIiwidXJsIiwiUGF0aCIsImpvaW4iLCJkYXRhIiwiZ2V0RmlsZSIsInByb3BzIiwiZmlsZSIsImdldFVJRCIsInVpZCIsInBhcmFtcyIsInEiLCJhcGlQYXRoIiwicmVwb3MiLCJyZXBvIiwiZmlsdGVyIiwibmFtZSIsInVzZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBSUE7QUFDTyxJQUFNQSxtQkFBbUI7QUFBQSxzRUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLFlBQUFBLFFBQVIsUUFBUUEsUUFBUixFQUFrQkMsVUFBbEIsUUFBa0JBLFVBQWxCLEVBQThCQyxJQUE5QixRQUE4QkEsSUFBOUIscUJBQW9DQyxNQUFwQyxFQUFvQ0EsTUFBcEMsNEJBQTJDLFFBQTNDLGdCQUFxREMsTUFBckQsUUFBcURBLE1BQXJEO0FBQUE7QUFBQSxtQkFDUkMsZ0JBQWdCLENBQUM7QUFBQ0wsY0FBQUEsUUFBUSxFQUFSQSxRQUFEO0FBQVdDLGNBQUFBLFVBQVUsRUFBVkE7QUFBWCxhQUFELENBRFI7O0FBQUE7QUFDM0JLLFlBQUFBLFVBRDJCOztBQUFBLGlCQUU3QkEsVUFGNkI7QUFBQTtBQUFBO0FBQUE7O0FBR3pCQyxZQUFBQSxHQUh5QixHQUduQkMsY0FBS0MsSUFBTCxDQUFVVCxRQUFWLEVBQW9CQyxVQUFwQixFQUFnQyxZQUFoQyxFQUE4Q0UsTUFBOUMsRUFBc0RELElBQXRELENBSG1CO0FBQUE7QUFBQTtBQUFBLG1CQUtWLFdBQUk7QUFBQ0ssY0FBQUEsR0FBRyxFQUFIQSxHQUFEO0FBQU1ILGNBQUFBLE1BQU0sRUFBTkE7QUFBTixhQUFKLENBTFU7O0FBQUE7QUFLdkJNLFlBQUFBLElBTHVCO0FBQUEsNkNBTXRCQSxJQU5zQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FTdEIsSUFUc0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkNBWXhCLElBWndCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQW5CWCxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsR0FBekI7Ozs7QUFnQkEsSUFBTVksT0FBTztBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRWCxZQUFBQSxRQUFSLFNBQVFBLFFBQVIsRUFBa0JDLFVBQWxCLFNBQWtCQSxVQUFsQixFQUE4QkMsSUFBOUIsU0FBOEJBLElBQTlCLEVBQW9DQyxNQUFwQyxTQUFvQ0EsTUFBcEMsRUFBNENDLE1BQTVDLFNBQTRDQSxNQUE1QztBQUVmUSxZQUFBQSxLQUZlLEdBRVA7QUFBQ1osY0FBQUEsUUFBUSxFQUFSQSxRQUFEO0FBQVdDLGNBQUFBLFVBQVUsRUFBVkEsVUFBWDtBQUF1QkMsY0FBQUEsSUFBSSxFQUFKQSxJQUF2QjtBQUE2QkMsY0FBQUEsTUFBTSxFQUFOQSxNQUE3QjtBQUFxQ0MsY0FBQUEsTUFBTSxFQUFOQTtBQUFyQyxhQUZPO0FBQUE7QUFBQSxtQkFHUix5QkFBZVEsS0FBZixDQUhROztBQUFBO0FBR3JCQyxZQUFBQSxJQUhxQjs7QUFBQSxnQkFJaEJBLElBSmdCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUdkLG1CQUFtQixDQUFDYSxLQUFELENBSnRCOztBQUFBO0FBSVZDLFlBQUFBLElBSlU7O0FBQUE7QUFBQSw4Q0FLZEEsSUFMYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQRixPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWI7Ozs7U0FRZU4sZ0I7Ozs7OzhFQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUNMLFlBQUFBLFFBQWpDLFNBQWlDQSxRQUFqQyxFQUEyQ0MsVUFBM0MsU0FBMkNBLFVBQTNDLEVBQXVERyxNQUF2RCxTQUF1REEsTUFBdkQ7QUFBQTtBQUFBLG1CQUNhVSxNQUFNLENBQUM7QUFBQ2QsY0FBQUEsUUFBUSxFQUFSQTtBQUFELGFBQUQsQ0FEbkI7O0FBQUE7QUFDQ2UsWUFBQUEsR0FERDtBQUVDQyxZQUFBQSxNQUZELEdBRVU7QUFBRUMsY0FBQUEsQ0FBQyxFQUFFaEIsVUFBTDtBQUFpQmMsY0FBQUEsR0FBRyxFQUFIQTtBQUFqQixhQUZWO0FBR0NSLFlBQUFBLEdBSEQsR0FHT0MsY0FBS0MsSUFBTCxDQUFVUyxTQUFWLEVBQW1CLE9BQW5CLFdBSFA7QUFBQTtBQUFBLG1CQUl1QixXQUFJO0FBQUNYLGNBQUFBLEdBQUcsRUFBSEEsR0FBRDtBQUFNUyxjQUFBQSxNQUFNLEVBQU5BLE1BQU47QUFBY1osY0FBQUEsTUFBTSxFQUFOQTtBQUFkLGFBQUosQ0FKdkI7O0FBQUE7QUFBQTtBQUlRZSxZQUFBQSxLQUpSLGNBSUVULElBSkY7QUFLQ1UsWUFBQUEsSUFMRCxHQUtRRCxLQUFLLENBQUNFLE1BQU4sQ0FBYSxVQUFBRCxJQUFJO0FBQUEscUJBQUlBLElBQUksQ0FBQ0UsSUFBTCxLQUFjckIsVUFBbEI7QUFBQSxhQUFqQixFQUErQyxDQUEvQyxDQUxSO0FBQUEsOENBTUUsQ0FBQyxDQUFDbUIsSUFOSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBT047O1NBRXFCTixNOzs7OztvRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUJkLFlBQUFBLFFBQXZCLFNBQXVCQSxRQUF2QixFQUFpQ0ksTUFBakMsU0FBaUNBLE1BQWpDO0FBQ0NHLFlBQUFBLEdBREQsR0FDT0MsY0FBS0MsSUFBTCxDQUFVUyxTQUFWLEVBQW1CLE9BQW5CLEVBQTRCbEIsUUFBNUIsQ0FEUDtBQUFBO0FBQUEsbUJBRWMsV0FBSTtBQUFDTyxjQUFBQSxHQUFHLEVBQUhBLEdBQUQ7QUFBTUgsY0FBQUEsTUFBTSxFQUFOQTtBQUFOLGFBQUosQ0FGZDs7QUFBQTtBQUVDbUIsWUFBQUEsSUFGRDtBQUdNUixZQUFBQSxHQUhOLEdBR2FRLElBSGIsQ0FHRUMsRUFIRjtBQUFBLDhDQUlFVCxHQUpGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgYXBpUGF0aCwgZ2V0IH0gZnJvbSAnLi4vJztcblxuaW1wb3J0IHtcbiAgZ2V0RmlsZUZyb21aaXAsXG59IGZyb20gJy4vemlwJztcblxuLy8gaHR0cHM6Ly9iZy5kb29yNDMub3JnL3VuZm9sZGluZ3dvcmQvZW5fdWx0L3Jhdy9icmFuY2gvbWFzdGVyL21hbmlmZXN0LnlhbWxcbmV4cG9ydCBjb25zdCBmZXRjaEZpbGVGcm9tU2VydmVyID0gYXN5bmMgKHt1c2VybmFtZSwgcmVwb3NpdG9yeSwgcGF0aCwgYnJhbmNoPSdtYXN0ZXInLCBjb25maWd9KSA9PiB7XG4gIGNvbnN0IHJlcG9FeGlzdHMgPSBhd2FpdCByZXBvc2l0b3J5RXhpc3RzKHt1c2VybmFtZSwgcmVwb3NpdG9yeX0pO1xuICBpZiAocmVwb0V4aXN0cykge1xuICAgIGNvbnN0IHVybCA9IFBhdGguam9pbih1c2VybmFtZSwgcmVwb3NpdG9yeSwgJ3Jhdy9icmFuY2gnLCBicmFuY2gsIHBhdGgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0KHt1cmwsIGNvbmZpZ30pO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlID0gYXN5bmMgKHt1c2VybmFtZSwgcmVwb3NpdG9yeSwgcGF0aCwgYnJhbmNoLCBjb25maWd9KSA9PiB7XG4gIGxldCBmaWxlO1xuICBjb25zdCBwcm9wcyA9IHt1c2VybmFtZSwgcmVwb3NpdG9yeSwgcGF0aCwgYnJhbmNoLCBjb25maWd9O1xuICBmaWxlID0gYXdhaXQgZ2V0RmlsZUZyb21aaXAocHJvcHMpO1xuICBpZiAoIWZpbGUpIGZpbGUgPSBhd2FpdCBmZXRjaEZpbGVGcm9tU2VydmVyKHByb3BzKTtcbiAgcmV0dXJuIGZpbGU7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVwb3NpdG9yeUV4aXN0cyh7dXNlcm5hbWUsIHJlcG9zaXRvcnksIGNvbmZpZ30pIHtcbiAgY29uc3QgdWlkID0gYXdhaXQgZ2V0VUlEKHt1c2VybmFtZX0pO1xuICBjb25zdCBwYXJhbXMgPSB7IHE6IHJlcG9zaXRvcnksIHVpZCB9O1xuICBjb25zdCB1cmwgPSBQYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgYHNlYXJjaGApO1xuICBjb25zdCB7ZGF0YTogcmVwb3N9ID0gYXdhaXQgZ2V0KHt1cmwsIHBhcmFtcywgY29uZmlnfSk7XG4gIGNvbnN0IHJlcG8gPSByZXBvcy5maWx0ZXIocmVwbyA9PiByZXBvLm5hbWUgPT09IHJlcG9zaXRvcnkpWzBdO1xuICByZXR1cm4gISFyZXBvO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVJRCh7dXNlcm5hbWUsIGNvbmZpZ30pIHtcbiAgY29uc3QgdXJsID0gUGF0aC5qb2luKGFwaVBhdGgsICd1c2VycycsIHVzZXJuYW1lKTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldCh7dXJsLCBjb25maWd9KTtcbiAgY29uc3Qge2lkOiB1aWR9ID0gdXNlcjtcbiAgcmV0dXJuIHVpZDtcbn0iXX0=