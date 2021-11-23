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

require("@material-ui/icons");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      overflow: 'auto',
      height: '100%'
    }
  };
});

function Search(_ref) {
  var defaultOwner = _ref.defaultOwner,
      defaultQuery = _ref.defaultQuery,
      onRepository = _ref.onRepository,
      config = _ref.config;
  var classes = useStyles();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      repositories = _useState2[0],
      setRepositories = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_core.List, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_.SearchForm, {
    defaultOwner: defaultOwner,
    defaultQuery: defaultQuery,
    onRepositories: setRepositories,
    config: config
  }), /*#__PURE__*/_react.default.createElement(_core.Divider, null), /*#__PURE__*/_react.default.createElement(_.Repositories, {
    repositories: repositories,
    onRepository: onRepository,
    config: config
  }));
}

Search.propTypes = {
  /** Prefill the owner search field. */
  defaultOwner: _propTypes.default.string,

  /** Prefill the query search field. */
  defaultQuery: _propTypes.default.string,

  /** Function to call when repository is selected. */
  onRepository: _propTypes.default.func.isRequired,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  }).isRequired
};
var _default = Search;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9TZWFyY2guanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJTZWFyY2giLCJkZWZhdWx0T3duZXIiLCJkZWZhdWx0UXVlcnkiLCJvblJlcG9zaXRvcnkiLCJjb25maWciLCJjbGFzc2VzIiwicmVwb3NpdG9yaWVzIiwic2V0UmVwb3NpdG9yaWVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsInNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdCQUFXLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsUUFBUSxFQUFFLE1BRE47QUFFSkMsTUFBQUEsTUFBTSxFQUFFO0FBRko7QUFEK0IsR0FBTDtBQUFBLENBQWhCLENBQWxCOztBQU9BLFNBQVNDLE1BQVQsT0FLRztBQUFBLE1BSkRDLFlBSUMsUUFKREEsWUFJQztBQUFBLE1BSERDLFlBR0MsUUFIREEsWUFHQztBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLE1BRERDLE1BQ0MsUUFEREEsTUFDQztBQUNELE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6Qjs7QUFEQyxrQkFFdUMscUJBQVMsRUFBVCxDQUZ2QztBQUFBO0FBQUEsTUFFTVcsWUFGTjtBQUFBLE1BRW9CQyxlQUZwQjs7QUFJRCxzQkFDRSw2QkFBQyxVQUFEO0FBQU0sSUFBQSxTQUFTLEVBQUVGLE9BQU8sQ0FBQ1I7QUFBekIsa0JBQ0UsNkJBQUMsWUFBRDtBQUNFLElBQUEsWUFBWSxFQUFFSSxZQURoQjtBQUVFLElBQUEsWUFBWSxFQUFFQyxZQUZoQjtBQUdFLElBQUEsY0FBYyxFQUFFSyxlQUhsQjtBQUlFLElBQUEsTUFBTSxFQUFFSDtBQUpWLElBREYsZUFPRSw2QkFBQyxhQUFELE9BUEYsZUFRRSw2QkFBQyxjQUFEO0FBQ0UsSUFBQSxZQUFZLEVBQUVFLFlBRGhCO0FBRUUsSUFBQSxZQUFZLEVBQUVILFlBRmhCO0FBR0UsSUFBQSxNQUFNLEVBQUVDO0FBSFYsSUFSRixDQURGO0FBZ0JEOztBQUVESixNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFDakI7QUFDQVAsRUFBQUEsWUFBWSxFQUFFUSxtQkFBVUMsTUFGUDs7QUFHakI7QUFDQVIsRUFBQUEsWUFBWSxFQUFFTyxtQkFBVUMsTUFKUDs7QUFLakI7QUFDQVAsRUFBQUEsWUFBWSxFQUFFTSxtQkFBVUUsSUFBVixDQUFlQyxVQU5aOztBQU9qQjtBQUNBUixFQUFBQSxNQUFNLEVBQUVLLG1CQUFVSSxLQUFWLENBQWdCO0FBQ3RCQyxJQUFBQSxNQUFNLEVBQUVMLG1CQUFVQyxNQUFWLENBQWlCRTtBQURILEdBQWhCLEVBRUxBO0FBVmMsQ0FBbkI7ZUFhZVosTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIExpc3QsXG4gIERpdmlkZXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7IFJlcG9zaXRvcmllcywgU2VhcmNoRm9ybSB9IGZyb20gJy4nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxufSkpO1xuXG5mdW5jdGlvbiBTZWFyY2goe1xuICBkZWZhdWx0T3duZXIsXG4gIGRlZmF1bHRRdWVyeSxcbiAgb25SZXBvc2l0b3J5LFxuICBjb25maWcsXG59KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3JlcG9zaXRvcmllcywgc2V0UmVwb3NpdG9yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxTZWFyY2hGb3JtXG4gICAgICAgIGRlZmF1bHRPd25lcj17ZGVmYXVsdE93bmVyfVxuICAgICAgICBkZWZhdWx0UXVlcnk9e2RlZmF1bHRRdWVyeX1cbiAgICAgICAgb25SZXBvc2l0b3JpZXM9e3NldFJlcG9zaXRvcmllc31cbiAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAvPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxSZXBvc2l0b3JpZXNcbiAgICAgICAgcmVwb3NpdG9yaWVzPXtyZXBvc2l0b3JpZXN9XG4gICAgICAgIG9uUmVwb3NpdG9yeT17b25SZXBvc2l0b3J5fVxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgIC8+XG4gICAgPC9MaXN0PlxuICApO1xufVxuXG5TZWFyY2gucHJvcFR5cGVzID0ge1xuICAvKiogUHJlZmlsbCB0aGUgb3duZXIgc2VhcmNoIGZpZWxkLiAqL1xuICBkZWZhdWx0T3duZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBQcmVmaWxsIHRoZSBxdWVyeSBzZWFyY2ggZmllbGQuICovXG4gIGRlZmF1bHRRdWVyeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiByZXBvc2l0b3J5IGlzIHNlbGVjdGVkLiAqL1xuICBvblJlcG9zaXRvcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8qKiBDb25maWd1cmF0aW9uIHJlcXVpcmVkIGlmIHBhdGhzIGFyZSBwcm92aWRlZCBhcyBVUkwuICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdfQ==