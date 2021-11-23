"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repoTreeUrl = exports.fetchTree = exports.decodeBase64ToUtf8 = exports.getFullTree = exports.getTree = void 0;

var _path = _interopRequireDefault(require("path"));

var _base = _interopRequireDefault(require("base-64"));

var _utf = _interopRequireDefault(require("utf8"));

var _ = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getTree = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var url, config, response, listing;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, config = _ref.config;
            _context.next = 3;
            return (0, _.get)({
              url: url,
              config: config
            });

          case 3:
            response = _context.sent;
            listing = response.tree;
            return _context.abrupt("return", listing);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTree(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTree = getTree;

var getFullTree = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
    var owner, repository, sha, config, _ref3$recursive, recursive, _ref3$per_page, per_page, tree, moreData, page, options, data, _tree;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            owner = _ref3.owner, repository = _ref3.repository, sha = _ref3.sha, config = _ref3.config, _ref3$recursive = _ref3.recursive, recursive = _ref3$recursive === void 0 ? true : _ref3$recursive, _ref3$per_page = _ref3.per_page, per_page = _ref3$per_page === void 0 ? 10000 : _ref3$per_page;
            tree = [];
            moreData = true;
            page = 0;

          case 4:
            if (!moreData) {
              _context3.next = 15;
              break;
            }

            options = {
              recursive: recursive,
              per_page: per_page,
              page: page
            };
            _context3.next = 8;
            return fetchTree(_objectSpread({
              owner: owner,
              repository: repository,
              sha: sha,
              config: config
            }, options));

          case 8:
            data = _context3.sent;
            _tree = data.tree.map(function (blob) {
              var getBlob = /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _blob, decoded;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return (0, _.get)({
                            url: blob.url,
                            config: config
                          });

                        case 2:
                          _blob = _context2.sent;
                          decoded = _blob.encoding === 'base64' ? decodeBase64ToUtf8(_blob.content) : undefined;
                          return _context2.abrupt("return", _objectSpread(_objectSpread({}, _blob), {}, {
                            decoded: decoded
                          }));

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function getBlob() {
                  return _ref5.apply(this, arguments);
                };
              }();

              return _objectSpread(_objectSpread({}, blob), {}, {
                getBlob: getBlob
              });
            });
            tree = tree.concat(_tree);
            moreData = data.truncated;

            if (moreData) {
              page++;
            }

            _context3.next = 4;
            break;

          case 15:
            return _context3.abrupt("return", tree);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getFullTree(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getFullTree = getFullTree;

var decodeBase64ToUtf8 = function decodeBase64ToUtf8(encoded) {
  var bytes = _base.default.decode(encoded);

  var text = _utf.default.decode(bytes);

  return text;
}; // http://bg.door43.org/api/v1/repos/unfoldingword/en_ugl/git/trees/master


exports.decodeBase64ToUtf8 = decodeBase64ToUtf8;

var fetchTree = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref6) {
    var owner, repository, _ref6$sha, sha, per_page, page, recursive, config, params, url, data;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = _ref6.owner, repository = _ref6.repository, _ref6$sha = _ref6.sha, sha = _ref6$sha === void 0 ? 'master' : _ref6$sha, per_page = _ref6.per_page, page = _ref6.page, recursive = _ref6.recursive, config = _ref6.config;
            params = {
              recursive: recursive,
              per_page: per_page,
              page: page
            };
            url = _path.default.join(_.apiPath, 'repos', owner, repository, 'git', 'trees', sha);
            _context4.next = 5;
            return (0, _.get)({
              url: url,
              params: params,
              config: config
            });

          case 5:
            data = _context4.sent;
            return _context4.abrupt("return", data);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchTree(_x3) {
    return _ref7.apply(this, arguments);
  };
}(); // /api/v1/repos/unfoldingWord/en_ta/git/trees/master


exports.fetchTree = fetchTree;

var repoTreeUrl = function repoTreeUrl(_ref8) {
  var full_name = _ref8.full_name,
      _ref8$branch = _ref8.branch,
      branch = _ref8$branch === void 0 ? '' : _ref8$branch,
      _ref8$default_branch = _ref8.default_branch,
      default_branch = _ref8$default_branch === void 0 ? '' : _ref8$default_branch;

  var url = _path.default.join(_.apiPath, 'repos', full_name || '', 'git', 'trees', branch || default_branch || '');

  return url;
};

exports.repoTreeUrl = repoTreeUrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9naXQvdHJlZXMudHMiXSwibmFtZXMiOlsiZ2V0VHJlZSIsInVybCIsImNvbmZpZyIsInJlc3BvbnNlIiwibGlzdGluZyIsInRyZWUiLCJnZXRGdWxsVHJlZSIsIm93bmVyIiwicmVwb3NpdG9yeSIsInNoYSIsInJlY3Vyc2l2ZSIsInBlcl9wYWdlIiwibW9yZURhdGEiLCJwYWdlIiwib3B0aW9ucyIsImZldGNoVHJlZSIsImRhdGEiLCJfdHJlZSIsIm1hcCIsImJsb2IiLCJnZXRCbG9iIiwiX2Jsb2IiLCJkZWNvZGVkIiwiZW5jb2RpbmciLCJkZWNvZGVCYXNlNjRUb1V0ZjgiLCJjb250ZW50IiwidW5kZWZpbmVkIiwiY29uY2F0IiwidHJ1bmNhdGVkIiwiZW5jb2RlZCIsImJ5dGVzIiwiYmFzZTY0IiwiZGVjb2RlIiwidGV4dCIsInV0ZjgiLCJwYXJhbXMiLCJwYXRoIiwiam9pbiIsImFwaVBhdGgiLCJyZXBvVHJlZVVybCIsImZ1bGxfbmFtZSIsImJyYW5jaCIsImRlZmF1bHRfYnJhbmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsT0FBTztBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxZQUFBQSxHQUFULFFBQVNBLEdBQVQsRUFBY0MsTUFBZCxRQUFjQSxNQUFkO0FBQUE7QUFBQSxtQkFDRSxXQUFJO0FBQUVELGNBQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPQyxjQUFBQSxNQUFNLEVBQU5BO0FBQVAsYUFBSixDQURGOztBQUFBO0FBQ2ZDLFlBQUFBLFFBRGU7QUFFZkMsWUFBQUEsT0FGZSxHQUVMRCxRQUFRLENBQUNFLElBRko7QUFBQSw2Q0FHZEQsT0FIYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQSixPQUFPO0FBQUE7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QS9DLEVBQXNELE9BQXRELEVBQStEQyxNQUFNLElBQUlDLGNBQVYsSUFBNEIsRUFBM0YsQ0FBWjs7QUFDQSxTQUFPekMsR0FBUDtBQUNELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBiYXNlNjQgZnJvbSAnYmFzZS02NCc7XG5pbXBvcnQgdXRmOCBmcm9tICd1dGY4JztcblxuaW1wb3J0IHsgYXBpUGF0aCwgZ2V0IH0gZnJvbSAnLi4vLi4vJztcblxuZXhwb3J0IGNvbnN0IGdldFRyZWUgPSBhc3luYyAoeyB1cmwsIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KHsgdXJsLCBjb25maWcgfSk7XG4gIGNvbnN0IGxpc3RpbmcgPSByZXNwb25zZS50cmVlO1xuICByZXR1cm4gbGlzdGluZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGdWxsVHJlZSA9IGFzeW5jICh7XG4gIG93bmVyLFxuICByZXBvc2l0b3J5LFxuICBzaGEsXG4gIGNvbmZpZyxcbiAgcmVjdXJzaXZlPXRydWUsXG4gIHBlcl9wYWdlPTEwMDAwLFxufSkgPT4ge1xuICBsZXQgdHJlZSA9IFtdO1xuICBsZXQgbW9yZURhdGEgPSB0cnVlO1xuICBsZXQgcGFnZSA9IDA7XG5cbiAgd2hpbGUgKG1vcmVEYXRhKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJlY3Vyc2l2ZSwgcGVyX3BhZ2UsIHBhZ2UsXG4gICAgfTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hUcmVlKHtcbiAgICAgIG93bmVyLCByZXBvc2l0b3J5LCBzaGEsIGNvbmZpZywgLi4ub3B0aW9ucyxcbiAgICB9KTtcbiAgICBjb25zdCBfdHJlZSA9IGRhdGEudHJlZS5tYXAoYmxvYiA9PiB7XG4gICAgICBjb25zdCBnZXRCbG9iID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBfYmxvYiA9IGF3YWl0IGdldCh7IHVybDogYmxvYi51cmwsIGNvbmZpZyB9KTtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IChfYmxvYi5lbmNvZGluZyA9PT0gJ2Jhc2U2NCcpID8gZGVjb2RlQmFzZTY0VG9VdGY4KF9ibG9iLmNvbnRlbnQpIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4geyAuLi5fYmxvYiwgZGVjb2RlZCB9O1xuICAgICAgfTtcbiAgICAgIHJldHVybiB7IC4uLmJsb2IsIGdldEJsb2IgfTtcbiAgICB9KTtcbiAgICB0cmVlID0gdHJlZS5jb25jYXQoX3RyZWUpO1xuICAgIG1vcmVEYXRhID0gZGF0YS50cnVuY2F0ZWQ7XG5cbiAgICBpZiAobW9yZURhdGEpIHtcbiAgICAgIHBhZ2UgKys7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cmVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlY29kZUJhc2U2NFRvVXRmOCA9IChlbmNvZGVkKSA9PiB7XG4gIGNvbnN0IGJ5dGVzID0gYmFzZTY0LmRlY29kZShlbmNvZGVkKTtcbiAgY29uc3QgdGV4dCA9IHV0ZjguZGVjb2RlKGJ5dGVzKTtcbiAgcmV0dXJuIHRleHQ7XG59O1xuXG4vLyBodHRwOi8vYmcuZG9vcjQzLm9yZy9hcGkvdjEvcmVwb3MvdW5mb2xkaW5nd29yZC9lbl91Z2wvZ2l0L3RyZWVzL21hc3RlclxuZXhwb3J0IGNvbnN0IGZldGNoVHJlZSA9IGFzeW5jICh7XG4gIG93bmVyLCByZXBvc2l0b3J5LCBzaGE9J21hc3RlcicsIHBlcl9wYWdlLCBwYWdlLCByZWN1cnNpdmUsIGNvbmZpZyxcbn0pID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIHJlY3Vyc2l2ZSwgcGVyX3BhZ2UsIHBhZ2UsXG4gIH07XG4gIGNvbnN0IHVybCA9IHBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCBvd25lciwgcmVwb3NpdG9yeSwgJ2dpdCcsICd0cmVlcycsIHNoYSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXQoe1xuICAgIHVybCwgcGFyYW1zOiBwYXJhbXMsIGNvbmZpZyxcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuLy8gL2FwaS92MS9yZXBvcy91bmZvbGRpbmdXb3JkL2VuX3RhL2dpdC90cmVlcy9tYXN0ZXJcbmV4cG9ydCBjb25zdCByZXBvVHJlZVVybCA9ICh7XG4gIGZ1bGxfbmFtZSwgYnJhbmNoID0gJycsIGRlZmF1bHRfYnJhbmNoID0gJycsXG59KSA9PiB7XG4gIGNvbnN0IHVybCA9IHBhdGguam9pbihhcGlQYXRoLCAncmVwb3MnLCAoZnVsbF9uYW1lIHx8ICcnKSwgJ2dpdCcsICd0cmVlcycsIGJyYW5jaCB8fCBkZWZhdWx0X2JyYW5jaCB8fCAnJyk7XG4gIHJldHVybiB1cmw7XG59O1xuIl19