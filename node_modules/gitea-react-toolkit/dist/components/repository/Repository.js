"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _core2 = require("../../core");

var _localStrings = require("../../core/localStrings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    avatar: {
      borderRadius: '20%'
    }
  };
});

function Repository(_ref) {
  var url = _ref.url,
      repository = _ref.repository,
      onRepository = _ref.onRepository,
      config = _ref.config;
  var classes = useStyles();

  var _useState = (0, _react.useState)(repository || {
    owner: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      repo = _useState2[0],
      setRepo = _useState2[1];

  var getData = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _core2.get)({
              url: url,
              config: config
            });

          case 2:
            data = _context.sent;
            setRepo(data);
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [config, url]);
  (0, _react.useEffect)(function () {
    if (Object.keys(repo.owner).length === 0) getData();
  }, [getData, repo.owner]);

  var _onRepository = (0, _react.useCallback)(function () {
    if (repo && Object.keys(repo.owner).length) {
      onRepository(repo);
    } else {
      getData().then(onRepository);
    }
  }, [repo, onRepository]);

  var owner = repo.owner,
      name = repo.name,
      full_name = repo.full_name,
      description = repo.description,
      html_url = repo.html_url,
      avatar_url = repo.avatar_url;
  return /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    "data-test": "repository-item",
    alignItems: "flex-start",
    button: true,
    ContainerComponent: "div",
    onClick: _onRepository
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemAvatar, null, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    alt: owner.fullname,
    src: avatar_url || owner.avatar_url,
    className: classes.avatar
  })), /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
    primary: description,
    secondary: full_name || name
  }), /*#__PURE__*/_react.default.createElement(_core.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: (0, _localStrings.localString)('OpenRepo'),
    arrow: true
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "aria-label": "Open Link",
    onClick: function onClick() {
      window.open(html_url, '_blank');
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.Code, null)))));
}

Repository.propTypes = {
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

  /** Url to get repository data, if repository data is not provided. */
  url: _propTypes.default.string,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  })
};
var _default = Repository;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvUmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJ0aGVtZSIsImF2YXRhciIsImJvcmRlclJhZGl1cyIsIlJlcG9zaXRvcnkiLCJ1cmwiLCJyZXBvc2l0b3J5Iiwib25SZXBvc2l0b3J5IiwiY29uZmlnIiwiY2xhc3NlcyIsIm93bmVyIiwicmVwbyIsInNldFJlcG8iLCJnZXREYXRhIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJfb25SZXBvc2l0b3J5IiwidGhlbiIsIm5hbWUiLCJmdWxsX25hbWUiLCJkZXNjcmlwdGlvbiIsImh0bWxfdXJsIiwiYXZhdGFyX3VybCIsImZ1bGxuYW1lIiwid2luZG93Iiwib3BlbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwiaWQiLCJudW1iZXIiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwid2Vic2l0ZSIsInRyZWVfdXJsIiwiYnJhbmNoIiwiZnVuYyIsInNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBU0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyx3QkFBVyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsSUFBQUEsTUFBTSxFQUFFO0FBQUVDLE1BQUFBLFlBQVksRUFBRTtBQUFoQjtBQUQrQixHQUFaO0FBQUEsQ0FBWCxDQUFsQjs7QUFJQSxTQUFTQyxVQUFULE9BQStEO0FBQUEsTUFBekNDLEdBQXlDLFFBQXpDQSxHQUF5QztBQUFBLE1BQXBDQyxVQUFvQyxRQUFwQ0EsVUFBb0M7QUFBQSxNQUF4QkMsWUFBd0IsUUFBeEJBLFlBQXdCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzdELE1BQU1DLE9BQU8sR0FBR1QsU0FBUyxFQUF6Qjs7QUFENkQsa0JBRXJDLHFCQUFTTSxVQUFVLElBQUk7QUFBRUksSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBdkIsQ0FGcUM7QUFBQTtBQUFBLE1BRXREQyxJQUZzRDtBQUFBLE1BRWhEQyxPQUZnRDs7QUFJN0QsTUFBTUMsT0FBTyxHQUFHLDhGQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1AsZ0JBQUk7QUFBRVIsY0FBQUEsR0FBRyxFQUFIQSxHQUFGO0FBQU9HLGNBQUFBLE1BQU0sRUFBTkE7QUFBUCxhQUFKLENBRE87O0FBQUE7QUFDcEJNLFlBQUFBLElBRG9CO0FBRTFCRixZQUFBQSxPQUFPLENBQUNFLElBQUQsQ0FBUDtBQUYwQiw2Q0FHbkJBLElBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVosSUFJYixDQUFDTixNQUFELEVBQVNILEdBQVQsQ0FKYSxDQUFoQjtBQU1BLHdCQUFVLFlBQU07QUFDZCxRQUFJVSxNQUFNLENBQUNDLElBQVAsQ0FBWUwsSUFBSSxDQUFDRCxLQUFqQixFQUF3Qk8sTUFBeEIsS0FBbUMsQ0FBdkMsRUFBMENKLE9BQU87QUFDbEQsR0FGRCxFQUVHLENBQUNBLE9BQUQsRUFBVUYsSUFBSSxDQUFDRCxLQUFmLENBRkg7O0FBSUEsTUFBTVEsYUFBYSxHQUFHLHdCQUFZLFlBQU07QUFDdEMsUUFBSVAsSUFBSSxJQUFJSSxNQUFNLENBQUNDLElBQVAsQ0FBWUwsSUFBSSxDQUFDRCxLQUFqQixFQUF3Qk8sTUFBcEMsRUFBNEM7QUFDMUNWLE1BQUFBLFlBQVksQ0FBQ0ksSUFBRCxDQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xFLE1BQUFBLE9BQU8sR0FBR00sSUFBVixDQUFlWixZQUFmO0FBQ0Q7QUFDRixHQU5xQixFQU1uQixDQUFDSSxJQUFELEVBQU9KLFlBQVAsQ0FObUIsQ0FBdEI7O0FBZDZELE1Bc0JyREcsS0F0QnFELEdBc0JTQyxJQXRCVCxDQXNCckRELEtBdEJxRDtBQUFBLE1Bc0I5Q1UsSUF0QjhDLEdBc0JTVCxJQXRCVCxDQXNCOUNTLElBdEI4QztBQUFBLE1Bc0J4Q0MsU0F0QndDLEdBc0JTVixJQXRCVCxDQXNCeENVLFNBdEJ3QztBQUFBLE1Bc0I3QkMsV0F0QjZCLEdBc0JTWCxJQXRCVCxDQXNCN0JXLFdBdEI2QjtBQUFBLE1Bc0JoQkMsUUF0QmdCLEdBc0JTWixJQXRCVCxDQXNCaEJZLFFBdEJnQjtBQUFBLE1Bc0JOQyxVQXRCTSxHQXNCU2IsSUF0QlQsQ0FzQk5hLFVBdEJNO0FBd0I3RCxzQkFDRSw2QkFBQyxjQUFEO0FBQ0UsaUJBQVUsaUJBRFo7QUFFRSxJQUFBLFVBQVUsRUFBQyxZQUZiO0FBR0UsSUFBQSxNQUFNLE1BSFI7QUFJRSxJQUFBLGtCQUFrQixFQUFDLEtBSnJCO0FBS0UsSUFBQSxPQUFPLEVBQUVOO0FBTFgsa0JBT0UsNkJBQUMsb0JBQUQscUJBQ0UsNkJBQUMsWUFBRDtBQUNFLElBQUEsR0FBRyxFQUFFUixLQUFLLENBQUNlLFFBRGI7QUFFRSxJQUFBLEdBQUcsRUFBRUQsVUFBVSxJQUFJZCxLQUFLLENBQUNjLFVBRjNCO0FBR0UsSUFBQSxTQUFTLEVBQUVmLE9BQU8sQ0FBQ1A7QUFIckIsSUFERixDQVBGLGVBY0UsNkJBQUMsa0JBQUQ7QUFBYyxJQUFBLE9BQU8sRUFBRW9CLFdBQXZCO0FBQW9DLElBQUEsU0FBUyxFQUFFRCxTQUFTLElBQUlEO0FBQTVELElBZEYsZUFlRSw2QkFBQyw2QkFBRCxxQkFDRSw2QkFBQyxhQUFEO0FBQVMsSUFBQSxLQUFLLEVBQUUsK0JBQVksVUFBWixDQUFoQjtBQUF5QyxJQUFBLEtBQUs7QUFBOUMsa0JBQ0UsNkJBQUMsZ0JBQUQ7QUFDRSxrQkFBVyxXQURiO0FBRUUsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYk0sTUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlKLFFBQVosRUFBc0IsUUFBdEI7QUFDRDtBQUpILGtCQU1FLDZCQUFDLFdBQUQsT0FORixDQURGLENBREYsQ0FmRixDQURGO0FBOEJEOztBQUVEbkIsVUFBVSxDQUFDd0IsU0FBWCxHQUF1QjtBQUNyQjtBQUNBdEIsRUFBQUEsVUFBVSxFQUFFdUIsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDMUJDLElBQUFBLEVBQUUsRUFBRUYsbUJBQVVHLE1BRFk7QUFFMUJ0QixJQUFBQSxLQUFLLEVBQUVtQixtQkFBVUksTUFBVixDQUFpQkMsVUFGRTtBQUcxQmQsSUFBQUEsSUFBSSxFQUFFUyxtQkFBVU0sTUFBVixDQUFpQkQsVUFIRztBQUkxQmIsSUFBQUEsU0FBUyxFQUFFUSxtQkFBVU0sTUFBVixDQUFpQkQsVUFKRjtBQUsxQlosSUFBQUEsV0FBVyxFQUFFTyxtQkFBVU0sTUFBVixDQUFpQkQsVUFMSjtBQU0xQlgsSUFBQUEsUUFBUSxFQUFFTSxtQkFBVU0sTUFBVixDQUFpQkQsVUFORDtBQU8xQkUsSUFBQUEsT0FBTyxFQUFFUCxtQkFBVU0sTUFBVixDQUFpQkQsVUFQQTtBQVExQkcsSUFBQUEsUUFBUSxFQUFFUixtQkFBVU0sTUFSTTtBQVMxQlgsSUFBQUEsVUFBVSxFQUFFSyxtQkFBVU0sTUFUSTtBQVUxQkcsSUFBQUEsTUFBTSxFQUFFVCxtQkFBVU07QUFWUSxHQUFoQixDQUZTOztBQWNyQjtBQUNBNUIsRUFBQUEsWUFBWSxFQUFFc0IsbUJBQVVVLElBQVYsQ0FBZUwsVUFmUjs7QUFnQnJCO0FBQ0E3QixFQUFBQSxHQUFHLEVBQUV3QixtQkFBVU0sTUFqQk07O0FBa0JyQjtBQUNBM0IsRUFBQUEsTUFBTSxFQUFFcUIsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFDdEJVLElBQUFBLE1BQU0sRUFBRVgsbUJBQVVNLE1BQVYsQ0FBaUJEO0FBREgsR0FBaEI7QUFuQmEsQ0FBdkI7ZUF3QmU5QixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1BdmF0YXIsXG4gIExpc3RJdGVtVGV4dCxcbiAgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24sXG4gIEljb25CdXR0b24sXG4gIFRvb2x0aXAsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IENvZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IGxvY2FsU3RyaW5nIH0gZnJvbSAnLi4vLi4vY29yZS9sb2NhbFN0cmluZ3MnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgYXZhdGFyOiB7IGJvcmRlclJhZGl1czogJzIwJScgfSxcbn0pKTtcblxuZnVuY3Rpb24gUmVwb3NpdG9yeSh7IHVybCwgcmVwb3NpdG9yeSwgb25SZXBvc2l0b3J5LCBjb25maWcgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtyZXBvLCBzZXRSZXBvXSA9IHVzZVN0YXRlKHJlcG9zaXRvcnkgfHwgeyBvd25lcjoge30gfSk7XG5cbiAgY29uc3QgZ2V0RGF0YSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0KHsgdXJsLCBjb25maWcgfSk7XG4gICAgc2V0UmVwbyhkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSwgW2NvbmZpZywgdXJsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMocmVwby5vd25lcikubGVuZ3RoID09PSAwKSBnZXREYXRhKCk7XG4gIH0sIFtnZXREYXRhLCByZXBvLm93bmVyXSk7XG5cbiAgY29uc3QgX29uUmVwb3NpdG9yeSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAocmVwbyAmJiBPYmplY3Qua2V5cyhyZXBvLm93bmVyKS5sZW5ndGgpIHtcbiAgICAgIG9uUmVwb3NpdG9yeShyZXBvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0RGF0YSgpLnRoZW4ob25SZXBvc2l0b3J5KVxuICAgIH1cbiAgfSwgW3JlcG8sIG9uUmVwb3NpdG9yeV0pO1xuXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUsIGZ1bGxfbmFtZSwgZGVzY3JpcHRpb24sIGh0bWxfdXJsLCBhdmF0YXJfdXJsIH0gPSByZXBvO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RJdGVtXG4gICAgICBkYXRhLXRlc3Q9J3JlcG9zaXRvcnktaXRlbSdcbiAgICAgIGFsaWduSXRlbXM9J2ZsZXgtc3RhcnQnXG4gICAgICBidXR0b25cbiAgICAgIENvbnRhaW5lckNvbXBvbmVudD0nZGl2J1xuICAgICAgb25DbGljaz17X29uUmVwb3NpdG9yeX1cbiAgICA+XG4gICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgIDxBdmF0YXJcbiAgICAgICAgICBhbHQ9e293bmVyLmZ1bGxuYW1lfVxuICAgICAgICAgIHNyYz17YXZhdGFyX3VybCB8fCBvd25lci5hdmF0YXJfdXJsfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XG4gICAgICAgIC8+XG4gICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtkZXNjcmlwdGlvbn0gc2Vjb25kYXJ5PXtmdWxsX25hbWUgfHwgbmFtZX0gLz5cbiAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2xvY2FsU3RyaW5nKCdPcGVuUmVwbycpfSBhcnJvdz5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD0nT3BlbiBMaW5rJ1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB3aW5kb3cub3BlbihodG1sX3VybCwgJ19ibGFuaycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29kZSAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICA8L0xpc3RJdGVtPlxuICApO1xufVxuXG5SZXBvc2l0b3J5LnByb3BUeXBlcyA9IHtcbiAgLyoqIFJlcG9zaXRvcnkgZGF0YSB0byByZW5kZXIsIGlmIHVybCBub3QgcHJvdmlkZWQuICovXG4gIHJlcG9zaXRvcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3duZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZnVsbF9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBodG1sX3VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHdlYnNpdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0cmVlX3VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhdmF0YXJfdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJyYW5jaDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVwb3NpdG9yeSBpcyBzZWxlY3RlZC4gKi9cbiAgb25SZXBvc2l0b3J5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogVXJsIHRvIGdldCByZXBvc2l0b3J5IGRhdGEsIGlmIHJlcG9zaXRvcnkgZGF0YSBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIENvbmZpZ3VyYXRpb24gcmVxdWlyZWQgaWYgcGF0aHMgYXJlIHByb3ZpZGVkIGFzIFVSTC4gKi9cbiAgY29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNlcnZlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9zaXRvcnk7XG4iXX0=