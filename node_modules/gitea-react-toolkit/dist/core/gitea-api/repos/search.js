"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repositorySearch = exports.repositoryExists = void 0;

var _path = _interopRequireDefault(require("path"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var repositoryExists = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var owner, repository, config, uid, params, url, repos, repo;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            owner = _ref.owner, repository = _ref.repository, config = _ref.config;
            _context.next = 3;
            return (0, _.getUID)({
              username: owner,
              config: config
            });

          case 3:
            uid = _context.sent;
            params = {
              q: repository,
              uid: uid
            };
            url = _path.default.join(_.apiPath, 'repos', 'search');
            _context.next = 8;
            return (0, _.get)({
              url: url,
              params: params,
              config: config
            });

          case 8:
            repos = _context.sent;
            repo = repos.filter(function (_repo) {
              return _repo.name === repository;
            })[0];
            return _context.abrupt("return", !!repo);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function repositoryExists(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.repositoryExists = repositoryExists;

// /repos/search?q=ulb&uid=4598&limit=50&exclusive=true
var repositorySearch = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var owner, query, config, _query, repositories, params, url, response, _repositories;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = _ref3.owner, query = _ref3.query, config = _ref3.config;
            _query = query;

            if (_query) {
              _query = _query.replace(/_/g, '\\_');
              _query = _query.replace(/\s+/g, '%');
              _query = _query.replace(/\*/g, '_');
            }

            repositories = [];
            params = {
              q: _query,
              limit: 50
            };
            if (owner) url = _path.default.join(_.apiPath, 'users', owner, 'repos');else url = _path.default.join(_.apiPath, 'repos', 'search');
            _context2.prev = 6;
            _context2.next = 9;
            return (0, _.get)({
              url: url,
              params: params,
              config: config
            });

          case 9:
            response = _context2.sent;
            repositories = response.data || response;
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](6);
            repositories = [];

          case 16:
            _repositories = repositories.filter(function (repo) {
              return repo.name.match(query);
            });
            return _context2.abrupt("return", _repositories);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 13]]);
  }));

  return function repositorySearch(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.repositorySearch = repositorySearch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9zZWFyY2gudHMiXSwibmFtZXMiOlsicmVwb3NpdG9yeUV4aXN0cyIsIm93bmVyIiwicmVwb3NpdG9yeSIsImNvbmZpZyIsInVzZXJuYW1lIiwidWlkIiwicGFyYW1zIiwicSIsInVybCIsInBhdGgiLCJqb2luIiwiYXBpUGF0aCIsInJlcG9zIiwicmVwbyIsImZpbHRlciIsIl9yZXBvIiwibmFtZSIsInJlcG9zaXRvcnlTZWFyY2giLCJxdWVyeSIsIl9xdWVyeSIsInJlcGxhY2UiLCJyZXBvc2l0b3JpZXMiLCJsaW1pdCIsInJlc3BvbnNlIiwiZGF0YSIsIl9yZXBvc2l0b3JpZXMiLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7OztBQVdPLElBQU1BLGdCQUFnQjtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QkMsWUFBQUEsS0FEOEIsUUFDOUJBLEtBRDhCLEVBQ3ZCQyxVQUR1QixRQUN2QkEsVUFEdUIsRUFDWEMsTUFEVyxRQUNYQSxNQURXO0FBQUE7QUFBQSxtQkFHWixjQUFPO0FBQUVDLGNBQUFBLFFBQVEsRUFBRUgsS0FBWjtBQUFtQkUsY0FBQUEsTUFBTSxFQUFOQTtBQUFuQixhQUFQLENBSFk7O0FBQUE7QUFHeEJFLFlBQUFBLEdBSHdCO0FBSXhCQyxZQUFBQSxNQUp3QixHQUlmO0FBQUVDLGNBQUFBLENBQUMsRUFBRUwsVUFBTDtBQUFpQkcsY0FBQUEsR0FBRyxFQUFIQTtBQUFqQixhQUplO0FBS3hCRyxZQUFBQSxHQUx3QixHQUtsQkMsY0FBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQW1CLE9BQW5CLEVBQTRCLFFBQTVCLENBTGtCO0FBQUE7QUFBQSxtQkFNVixXQUFJO0FBQ3RCSCxjQUFBQSxHQUFHLEVBQUhBLEdBRHNCO0FBQ2pCRixjQUFBQSxNQUFNLEVBQU5BLE1BRGlCO0FBQ1RILGNBQUFBLE1BQU0sRUFBTkE7QUFEUyxhQUFKLENBTlU7O0FBQUE7QUFNeEJTLFlBQUFBLEtBTndCO0FBVXhCQyxZQUFBQSxJQVZ3QixHQVVqQkQsS0FBSyxDQUFDRSxNQUFOLENBQWEsVUFBQUMsS0FBSztBQUFBLHFCQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZWQsVUFBbkI7QUFBQSxhQUFsQixFQUFpRCxDQUFqRCxDQVZpQjtBQUFBLDZDQVd2QixDQUFDLENBQUNXLElBWHFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCYixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7Ozs7QUFvQlA7QUFDTyxJQUFNaUIsZ0JBQWdCO0FBQUEsc0VBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QmhCLFlBQUFBLEtBRDhCLFNBQzlCQSxLQUQ4QixFQUN2QmlCLEtBRHVCLFNBQ3ZCQSxLQUR1QixFQUNoQmYsTUFEZ0IsU0FDaEJBLE1BRGdCO0FBRzFCZ0IsWUFBQUEsTUFIMEIsR0FHakJELEtBSGlCOztBQUs5QixnQkFBSUMsTUFBSixFQUFZO0FBQ1ZBLGNBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxPQUFQLENBQWUsSUFBZixFQUFxQixLQUFyQixDQUFUO0FBQ0FELGNBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxPQUFQLENBQWUsTUFBZixFQUF1QixHQUF2QixDQUFUO0FBQ0FELGNBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxPQUFQLENBQWUsS0FBZixFQUFzQixHQUF0QixDQUFUO0FBQ0Q7O0FBRUdDLFlBQUFBLFlBWDBCLEdBV1gsRUFYVztBQVl4QmYsWUFBQUEsTUFad0IsR0FZa0Q7QUFBRUMsY0FBQUEsQ0FBQyxFQUFFWSxNQUFMO0FBQWFHLGNBQUFBLEtBQUssRUFBRTtBQUFwQixhQVpsRDtBQWdCOUIsZ0JBQUlyQixLQUFKLEVBQVdPLEdBQUcsR0FBR0MsY0FBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQW1CLE9BQW5CLEVBQTRCVixLQUE1QixFQUFtQyxPQUFuQyxDQUFOLENBQVgsS0FDS08sR0FBRyxHQUFHQyxjQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBbUIsT0FBbkIsRUFBNEIsUUFBNUIsQ0FBTjtBQWpCeUI7QUFBQTtBQUFBLG1CQW9CTCxXQUFJO0FBQ3pCSCxjQUFBQSxHQUFHLEVBQUhBLEdBRHlCO0FBQ3BCRixjQUFBQSxNQUFNLEVBQU5BLE1BRG9CO0FBQ1pILGNBQUFBLE1BQU0sRUFBTkE7QUFEWSxhQUFKLENBcEJLOztBQUFBO0FBb0J0Qm9CLFlBQUFBLFFBcEJzQjtBQXVCNUJGLFlBQUFBLFlBQVksR0FBR0UsUUFBUSxDQUFDQyxJQUFULElBQWlCRCxRQUFoQztBQXZCNEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF5QjVCRixZQUFBQSxZQUFZLEdBQUcsRUFBZjs7QUF6QjRCO0FBNEJ4QkksWUFBQUEsYUE1QndCLEdBNEJSSixZQUFZLENBQUNQLE1BQWIsQ0FBb0IsVUFBQUQsSUFBSTtBQUFBLHFCQUFJQSxJQUFJLENBQUNHLElBQUwsQ0FBVVUsS0FBVixDQUFnQlIsS0FBaEIsQ0FBSjtBQUFBLGFBQXhCLENBNUJRO0FBQUEsOENBNkJ2Qk8sYUE3QnVCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCUixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHtcbiAgYXBpUGF0aCwgZ2V0LCBnZXRVSUQsXG59IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBBUElDb25maWcgfSBmcm9tICcuLi9odHRwL2h0dHAuZCc7XG5cbmludGVyZmFjZSBSZXBvc2l0b3J5RXhpc3RzT3B0aW9ucyB7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGNvbmZpZzogQVBJQ29uZmlnO1xuICByZXBvc2l0b3J5OiBvYmplY3Q7XG59XG5cbmV4cG9ydCBjb25zdCByZXBvc2l0b3J5RXhpc3RzID0gYXN5bmMgKHtcbiAgb3duZXIsIHJlcG9zaXRvcnksIGNvbmZpZyxcbn06IFJlcG9zaXRvcnlFeGlzdHNPcHRpb25zKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGNvbnN0IHVpZCA9IGF3YWl0IGdldFVJRCh7IHVzZXJuYW1lOiBvd25lciwgY29uZmlnIH0pO1xuICBjb25zdCBwYXJhbXMgPSB7IHE6IHJlcG9zaXRvcnksIHVpZCB9O1xuICBjb25zdCB1cmwgPSBwYXRoLmpvaW4oYXBpUGF0aCwgJ3JlcG9zJywgJ3NlYXJjaCcpO1xuICBjb25zdCByZXBvcyA9IGF3YWl0IGdldCh7XG4gICAgdXJsLCBwYXJhbXMsIGNvbmZpZyxcbiAgfSk7XG5cbiAgY29uc3QgcmVwbyA9IHJlcG9zLmZpbHRlcihfcmVwbyA9PiBfcmVwby5uYW1lID09PSByZXBvc2l0b3J5KVswXTtcbiAgcmV0dXJuICEhcmVwbztcbn07XG5cbmludGVyZmFjZSBSZXBvc2l0b3J5U2VhcmNoT3B0aW9ucyB7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGNvbmZpZzogQVBJQ29uZmlnO1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG4vLyAvcmVwb3Mvc2VhcmNoP3E9dWxiJnVpZD00NTk4JmxpbWl0PTUwJmV4Y2x1c2l2ZT10cnVlXG5leHBvcnQgY29uc3QgcmVwb3NpdG9yeVNlYXJjaCA9IGFzeW5jICh7XG4gIG93bmVyLCBxdWVyeSwgY29uZmlnLFxufTogUmVwb3NpdG9yeVNlYXJjaE9wdGlvbnMpOiBQcm9taXNlPGFueVtdPiA9PiB7XG4gIGxldCBfcXVlcnkgPSBxdWVyeTtcblxuICBpZiAoX3F1ZXJ5KSB7XG4gICAgX3F1ZXJ5ID0gX3F1ZXJ5LnJlcGxhY2UoL18vZywgJ1xcXFxfJyk7XG4gICAgX3F1ZXJ5ID0gX3F1ZXJ5LnJlcGxhY2UoL1xccysvZywgJyUnKTtcbiAgICBfcXVlcnkgPSBfcXVlcnkucmVwbGFjZSgvXFwqL2csICdfJyk7XG4gIH1cblxuICBsZXQgcmVwb3NpdG9yaWVzID0gW107XG4gIGNvbnN0IHBhcmFtczogeyBxOiBzdHJpbmc7IGxpbWl0OiBudW1iZXI7IHVpZD86IHN0cmluZzsgZXhjbHVzaXZlPzogYm9vbGVhbiB9ID0geyBxOiBfcXVlcnksIGxpbWl0OiA1MCB9O1xuXG4gIGxldCB1cmw6IHN0cmluZztcblxuICBpZiAob3duZXIpIHVybCA9IHBhdGguam9pbihhcGlQYXRoLCAndXNlcnMnLCBvd25lciwgJ3JlcG9zJyk7XG4gIGVsc2UgdXJsID0gcGF0aC5qb2luKGFwaVBhdGgsICdyZXBvcycsICdzZWFyY2gnKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KHtcbiAgICAgIHVybCwgcGFyYW1zLCBjb25maWcsXG4gICAgfSk7XG4gICAgcmVwb3NpdG9yaWVzID0gcmVzcG9uc2UuZGF0YSB8fCByZXNwb25zZTtcbiAgfSBjYXRjaCB7XG4gICAgcmVwb3NpdG9yaWVzID0gW107XG4gIH1cblxuICBjb25zdCBfcmVwb3NpdG9yaWVzID0gcmVwb3NpdG9yaWVzLmZpbHRlcihyZXBvID0+IHJlcG8ubmFtZS5tYXRjaChxdWVyeSkpO1xuICByZXR1cm4gX3JlcG9zaXRvcmllcztcbn07XG4iXX0=