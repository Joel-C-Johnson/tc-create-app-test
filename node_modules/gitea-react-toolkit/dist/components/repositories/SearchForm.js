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

var _awesomeDebouncePromise = _interopRequireDefault(require("awesome-debounce-promise"));

var _ = require("../..");

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
    root: {
      position: 'sticky',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '100%'
    },
    listItemIcon: {
      marginRight: '8px'
    },
    form: {
      width: '100%'
    },
    input: {
      width: '40%',
      display: 'inline-block',
      marginRight: '1em'
    }
  };
});

function SearchForm(_ref) {
  var defaultOwner = _ref.defaultOwner,
      defaultQuery = _ref.defaultQuery,
      onRepositories = _ref.onRepositories,
      config = _ref.config;
  var classes = useStyles();

  var _useState = (0, _react.useState)(defaultOwner),
      _useState2 = _slicedToArray(_useState, 2),
      owner = _useState2[0],
      setOwner = _useState2[1];

  var _useState3 = (0, _react.useState)(defaultQuery),
      _useState4 = _slicedToArray(_useState3, 2),
      query = _useState4[0],
      setQuery = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      initialSearch = _useState6[0],
      setInitialSearch = _useState6[1];

  var repositorySearchDebounced = (0, _awesomeDebouncePromise.default)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_props) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _.repositorySearch)(_props);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 250);
  var updateRepositories = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(owner, query) {
      var repositories;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return repositorySearchDebounced({
                owner: owner,
                query: query,
                config: config
              });

            case 2:
              repositories = _context2.sent;
              onRepositories(repositories);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }(), [config, onRepositories]);
  (0, _react.useEffect)(function () {
    var _updateRepositories = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return updateRepositories(owner, query);

              case 2:
                setInitialSearch(true);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function _updateRepositories() {
        return _ref4.apply(this, arguments);
      };
    }();

    if (!initialSearch) _updateRepositories();
  }, [initialSearch, owner, query, updateRepositories]);
  var onOwner = (0, _react.useCallback)(function (_owner) {
    setOwner(_owner);
    updateRepositories(_owner, query);
  }, [query, updateRepositories]);
  var onQuery = (0, _react.useCallback)(function (_query) {
    setQuery(_query);
    updateRepositories(owner, _query);
  }, [owner, updateRepositories]);
  return /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    ContainerComponent: "div",
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemIcon, {
    className: classes.listItemIcon
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    onClick: function onClick() {
      return updateRepositories(owner, query);
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.Search, null))), /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.input
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    id: "owner",
    label: "Owner",
    type: "text",
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: owner,
    autoComplete: undefined,
    onChange: function onChange(event) {
      onOwner(event.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.input
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    id: "search",
    label: "Search",
    type: "text",
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: query,
    autoComplete: undefined,
    onChange: function onChange(event) {
      onQuery(event.target.value);
    }
  }))));
}

SearchForm.propTypes = {
  /** Prefill the owner search field. */
  defaultOwner: _propTypes.default.string,

  /** Prefill the query search field. */
  defaultQuery: _propTypes.default.string,

  /** Function to propogate the returned repositories data array. */
  onRepositories: _propTypes.default.func.isRequired,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  }).isRequired
};
var _default = SearchForm;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9TZWFyY2hGb3JtLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJsaXN0SXRlbUljb24iLCJtYXJnaW5SaWdodCIsImZvcm0iLCJpbnB1dCIsImRpc3BsYXkiLCJTZWFyY2hGb3JtIiwiZGVmYXVsdE93bmVyIiwiZGVmYXVsdFF1ZXJ5Iiwib25SZXBvc2l0b3JpZXMiLCJjb25maWciLCJjbGFzc2VzIiwib3duZXIiLCJzZXRPd25lciIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJpbml0aWFsU2VhcmNoIiwic2V0SW5pdGlhbFNlYXJjaCIsInJlcG9zaXRvcnlTZWFyY2hEZWJvdW5jZWQiLCJfcHJvcHMiLCJ1cGRhdGVSZXBvc2l0b3JpZXMiLCJyZXBvc2l0b3JpZXMiLCJfdXBkYXRlUmVwb3NpdG9yaWVzIiwib25Pd25lciIsIl9vd25lciIsIm9uUXVlcnkiLCJfcXVlcnkiLCJ1bmRlZmluZWQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzZXJ2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVcsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxRQUFRLEVBQUUsUUFETjtBQUVKQyxNQUFBQSxZQUFZLEVBQUVILEtBQUssQ0FBQ0ksS0FBTixDQUFZRCxZQUZ0QjtBQUdKRSxNQUFBQSxVQUFVLEVBQUUsQ0FIUjtBQUlKQyxNQUFBQSxLQUFLLEVBQUU7QUFKSCxLQUQr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NkIsSUFBQSxJQUFJLEVBQUMsTUFEbEM7QUFFRSxJQUFBLE9BQU8sRUFBQyxVQUZWO0FBRXFCLElBQUEsTUFBTSxFQUFDLFFBRjVCO0FBRXFDLElBQUEsU0FBUyxNQUY5QztBQUdFLElBQUEsWUFBWSxFQUFFVSxLQUhoQjtBQUd1QixJQUFBLFlBQVksRUFBRWEsU0FIckM7QUFJRSxJQUFBLFFBQVEsRUFBRSxrQkFBQ0MsS0FBRCxFQUFXO0FBQ25CSCxNQUFBQSxPQUFPLENBQUNHLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVA7QUFDRDtBQU5ILElBREYsQ0FYRixDQVhGLENBREY7QUFvQ0Q7O0FBRUR4QixVQUFVLENBQUN5QixTQUFYLEdBQXVCO0FBQ3JCO0FBQ0F4QixFQUFBQSxZQUFZLEVBQUV5QixtQkFBVUMsTUFGSDs7QUFHckI7QUFDQXpCLEVBQUFBLFlBQVksRUFBRXdCLG1CQUFVQyxNQUpIOztBQUtyQjtBQUNBeEIsRUFBQUEsY0FBYyxFQUFFdUIsbUJBQVVFLElBQVYsQ0FBZUMsVUFOVjs7QUFPckI7QUFDQXpCLEVBQUFBLE1BQU0sRUFBRXNCLG1CQUFVbEMsS0FBVixDQUFnQjtBQUFFc0MsSUFBQUEsTUFBTSxFQUFFSixtQkFBVUMsTUFBVixDQUFpQkU7QUFBM0IsR0FBaEIsRUFBeURBO0FBUjVDLENBQXZCO2VBV2U3QixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgSWNvbkJ1dHRvbixcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuaW1wb3J0IEF3ZXNvbWVEZWJvdW5jZVByb21pc2UgZnJvbSAnYXdlc29tZS1kZWJvdW5jZS1wcm9taXNlJztcblxuaW1wb3J0IHsgcmVwb3NpdG9yeVNlYXJjaCB9IGZyb20gJy4uLy4uJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgbGlzdEl0ZW1JY29uOiB7IG1hcmdpblJpZ2h0OiAnOHB4JyB9LFxuICBmb3JtOiB7IHdpZHRoOiAnMTAwJScgfSxcbiAgaW5wdXQ6IHtcbiAgICB3aWR0aDogJzQwJScsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luUmlnaHQ6ICcxZW0nLFxuICB9LFxufSkpO1xuXG5mdW5jdGlvbiBTZWFyY2hGb3JtKHtcbiAgZGVmYXVsdE93bmVyLFxuICBkZWZhdWx0UXVlcnksXG4gIG9uUmVwb3NpdG9yaWVzLFxuICBjb25maWcsXG59KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW293bmVyLCBzZXRPd25lcl0gPSB1c2VTdGF0ZShkZWZhdWx0T3duZXIpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGRlZmF1bHRRdWVyeSk7XG4gIGNvbnN0IFtpbml0aWFsU2VhcmNoLCBzZXRJbml0aWFsU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByZXBvc2l0b3J5U2VhcmNoRGVib3VuY2VkID0gQXdlc29tZURlYm91bmNlUHJvbWlzZShcbiAgICBhc3luYyAoX3Byb3BzKSA9PiB7IHJldHVybiBhd2FpdCByZXBvc2l0b3J5U2VhcmNoKF9wcm9wcykgfSxcbiAgICAyNTBcbiAgKTtcblxuICBjb25zdCB1cGRhdGVSZXBvc2l0b3JpZXMgPSB1c2VDYWxsYmFjayhhc3luYyAob3duZXIsIHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcmVwb3NpdG9yaWVzID0gYXdhaXQgcmVwb3NpdG9yeVNlYXJjaERlYm91bmNlZCh7XG4gICAgICBvd25lciwgcXVlcnksIGNvbmZpZyxcbiAgICB9KTtcbiAgICBvblJlcG9zaXRvcmllcyhyZXBvc2l0b3JpZXMpO1xuICB9LCBbY29uZmlnLCBvblJlcG9zaXRvcmllc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgX3VwZGF0ZVJlcG9zaXRvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHVwZGF0ZVJlcG9zaXRvcmllcyhvd25lciwgcXVlcnkpO1xuICAgICAgc2V0SW5pdGlhbFNlYXJjaCh0cnVlKTtcbiAgICB9O1xuXG4gICAgaWYgKCFpbml0aWFsU2VhcmNoKSBfdXBkYXRlUmVwb3NpdG9yaWVzKCk7XG4gIH0sIFtpbml0aWFsU2VhcmNoLCBvd25lciwgcXVlcnksIHVwZGF0ZVJlcG9zaXRvcmllc10pO1xuXG4gIGNvbnN0IG9uT3duZXIgPSB1c2VDYWxsYmFjaygoX293bmVyKSA9PiB7XG4gICAgc2V0T3duZXIoX293bmVyKTtcbiAgICB1cGRhdGVSZXBvc2l0b3JpZXMoX293bmVyLCBxdWVyeSk7XG4gIH0sIFtxdWVyeSwgdXBkYXRlUmVwb3NpdG9yaWVzXSk7XG5cbiAgY29uc3Qgb25RdWVyeSA9IHVzZUNhbGxiYWNrKChfcXVlcnkpID0+IHtcbiAgICBzZXRRdWVyeShfcXVlcnkpO1xuICAgIHVwZGF0ZVJlcG9zaXRvcmllcyhvd25lciwgX3F1ZXJ5KTtcbiAgfSwgW293bmVyLCB1cGRhdGVSZXBvc2l0b3JpZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0SXRlbVxuICAgICAgQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgID5cbiAgICAgIDxMaXN0SXRlbUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtSWNvbn0+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlUmVwb3NpdG9yaWVzKG93bmVyLCBxdWVyeSl9XG4gICAgICAgID5cbiAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgaWQ9J293bmVyJyBsYWJlbD0nT3duZXInIHR5cGU9J3RleHQnXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGhcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3duZXJ9IGF1dG9Db21wbGV0ZT17dW5kZWZpbmVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBvbk93bmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgaWQ9J3NlYXJjaCcgbGFiZWw9J1NlYXJjaCcgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG1hcmdpbj1cIm5vcm1hbFwiIGZ1bGxXaWR0aFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtxdWVyeX0gYXV0b0NvbXBsZXRlPXt1bmRlZmluZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9uUXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9MaXN0SXRlbT5cbiAgKTtcbn1cblxuU2VhcmNoRm9ybS5wcm9wVHlwZXMgPSB7XG4gIC8qKiBQcmVmaWxsIHRoZSBvd25lciBzZWFyY2ggZmllbGQuICovXG4gIGRlZmF1bHRPd25lcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFByZWZpbGwgdGhlIHF1ZXJ5IHNlYXJjaCBmaWVsZC4gKi9cbiAgZGVmYXVsdFF1ZXJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogRnVuY3Rpb24gdG8gcHJvcG9nYXRlIHRoZSByZXR1cm5lZCByZXBvc2l0b3JpZXMgZGF0YSBhcnJheS4gKi9cbiAgb25SZXBvc2l0b3JpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8qKiBDb25maWd1cmF0aW9uIHJlcXVpcmVkIGlmIHBhdGhzIGFyZSBwcm92aWRlZCBhcyBVUkwuICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHsgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZvcm07XG4iXX0=