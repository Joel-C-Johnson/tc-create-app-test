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

var _helpers = require("./helpers");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    list: {
      paddingTop: 0,
      paddingBottom: 0
    }
  };
});
/**
 * A Listing Component to render an array of Git Tree objects.
 */

function Tree(_ref) {
  var tree = _ref.tree,
      url = _ref.url,
      config = _ref.config,
      selected = _ref.selected,
      blob = _ref.blob,
      onBlob = _ref.onBlob,
      depth = _ref.depth,
      filepath = _ref.filepath,
      comparer = _ref.comparer;
  var classes = useStyles();

  var _useState = (0, _react.useState)(tree || []),
      _useState2 = _slicedToArray(_useState, 2),
      _tree = _useState2[0],
      setTree = _useState2[1];

  var _selectedPath;

  if (blob) {
    _selectedPath = blob.filepath.split('/')[depth - 2];
  }

  var _useState3 = (0, _react.useState)(_selectedPath),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedPath = _useState4[0],
      setSelectedPath = _useState4[1];

  var updateTree = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var __tree;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _helpers.fetchTree)({
                url: url,
                config: config,
                comparer: comparer
              });

            case 2:
              __tree = _context.sent;
              setTree(__tree);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateTree() {
      return _ref2.apply(this, arguments);
    };
  }();

  var emptyTree = !_tree || _tree.length === 0;

  if (selected && emptyTree) {
    updateTree();
  }

  var components = [];

  if (_tree) {
    components = _tree.map(function (object, index) {
      var _selected = object.path === selectedPath;

      var component;

      if (object.type === 'tree') {
        component = /*#__PURE__*/_react.default.createElement(_.TreeObject, _extends({}, object, {
          selected: _selected,
          depth: depth,
          onBlob: onBlob,
          filepath: filepath
        }));
      } else if (object.type === 'blob') {
        component = /*#__PURE__*/_react.default.createElement(_.BlobObject, {
          blob: object,
          onBlob: onBlob,
          selected: _selected,
          depth: depth,
          filepath: filepath
        });
      }

      var onSelectedPath = function onSelectedPath() {
        return setSelectedPath(object.path);
      };

      return /*#__PURE__*/_react.default.createElement("div", {
        key: index,
        onClick: onSelectedPath
      }, component);
    });
  }

  return /*#__PURE__*/_react.default.createElement(_core.Collapse, {
    in: selected,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement(_core.List, {
    "data-test": "file-tree",
    dense: true,
    className: classes.list
  }, components));
}

Tree.propTypes = {
  /** An array of paths from the Gitea file tree api. */
  tree: _propTypes.default.arrayOf(_propTypes.default.shape({
    path: _propTypes.default.string.isRequired,
    type: _propTypes.default.oneOf(['tree', 'blob']).isRequired
  })),

  /** The Url to fetch the listing if listing is not provided. */
  url: _propTypes.default.string,

  /** If url is relative, pass the server in the config object. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string
  }),

  /** Set if the Listing is currently selected, which will expand the collapsed view. */
  selected: _propTypes.default.bool,

  /** Function to propogate when the Blob is selected. */
  onBlob: _propTypes.default.func,

  /** The depth of the path in the tree sets the inset of the component. */
  depth: _propTypes.default.number,

  /** The nested filepath that will concatenate. */
  filepath: _propTypes.default.string,

  /** Blob data to render, if url not provided. */
  blob: _propTypes.default.shape({
    /** The filepath in the Git Tree Blob Object */
    path: _propTypes.default.string.isRequired,

    /** The url in the Git Tree Blob Object */
    url: _propTypes.default.string,

    /** The content size of the Git Tree Blob Object */
    size: _propTypes.default.number
  })
};
Tree.defaultProps = {
  selected: false,
  depth: 1
};
var _default = Tree;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi9UcmVlLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwibGlzdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiVHJlZSIsInRyZWUiLCJ1cmwiLCJjb25maWciLCJzZWxlY3RlZCIsImJsb2IiLCJvbkJsb2IiLCJkZXB0aCIsImZpbGVwYXRoIiwiY29tcGFyZXIiLCJjbGFzc2VzIiwiX3RyZWUiLCJzZXRUcmVlIiwiX3NlbGVjdGVkUGF0aCIsInNwbGl0Iiwic2VsZWN0ZWRQYXRoIiwic2V0U2VsZWN0ZWRQYXRoIiwidXBkYXRlVHJlZSIsIl9fdHJlZSIsImVtcHR5VHJlZSIsImxlbmd0aCIsImNvbXBvbmVudHMiLCJtYXAiLCJvYmplY3QiLCJpbmRleCIsIl9zZWxlY3RlZCIsInBhdGgiLCJjb21wb25lbnQiLCJ0eXBlIiwib25TZWxlY3RlZFBhdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib25lT2YiLCJzZXJ2ZXIiLCJib29sIiwiZnVuYyIsIm51bWJlciIsInNpemUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUtBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyx3QkFBVyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLFVBQVUsRUFBRSxDQURSO0FBRUpDLE1BQUFBLGFBQWEsRUFBRTtBQUZYO0FBRCtCLEdBQUw7QUFBQSxDQUFoQixDQUFsQjtBQU9BO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxJQUFULE9BVUc7QUFBQSxNQVREQyxJQVNDLFFBVERBLElBU0M7QUFBQSxNQVJEQyxHQVFDLFFBUkRBLEdBUUM7QUFBQSxNQVBE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QUksRUFBRVYsbUJBQVVTO0FBTkksR0FBaEI7QUFyQlMsQ0FBakI7QUErQkF4QyxJQUFJLENBQUMwQyxZQUFMLEdBQW9CO0FBQ2xCdEMsRUFBQUEsUUFBUSxFQUFFLEtBRFE7QUFFbEJHLEVBQUFBLEtBQUssRUFBRTtBQUZXLENBQXBCO2VBS2VQLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBMaXN0LFxuICBDb2xsYXBzZSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgeyBmZXRjaFRyZWUgfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgQmxvYk9iamVjdCwgVHJlZU9iamVjdCB9IGZyb20gJy4nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGxpc3Q6IHtcbiAgICBwYWRkaW5nVG9wOiAwLFxuICAgIHBhZGRpbmdCb3R0b206IDAsXG4gIH0sXG59KSk7XG5cbi8qKlxuICogQSBMaXN0aW5nIENvbXBvbmVudCB0byByZW5kZXIgYW4gYXJyYXkgb2YgR2l0IFRyZWUgb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gVHJlZSh7XG4gIHRyZWUsXG4gIHVybCxcbiAgY29uZmlnLFxuICBzZWxlY3RlZCxcbiAgYmxvYixcbiAgb25CbG9iLFxuICBkZXB0aCxcbiAgZmlsZXBhdGgsXG4gIGNvbXBhcmVyLFxufSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtfdHJlZSwgc2V0VHJlZV0gPSB1c2VTdGF0ZSh0cmVlIHx8IFtdKTtcbiAgbGV0IF9zZWxlY3RlZFBhdGg7XG5cbiAgaWYgKGJsb2IpIHtcbiAgICBfc2VsZWN0ZWRQYXRoID0gYmxvYi5maWxlcGF0aC5zcGxpdCgnLycpW2RlcHRoIC0gMl07XG4gIH1cblxuICBjb25zdCBbc2VsZWN0ZWRQYXRoLCBzZXRTZWxlY3RlZFBhdGhdID0gdXNlU3RhdGUoX3NlbGVjdGVkUGF0aCk7XG5cbiAgY29uc3QgdXBkYXRlVHJlZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBfX3RyZWUgPSBhd2FpdCBmZXRjaFRyZWUoeyB1cmwsIGNvbmZpZywgY29tcGFyZXIgfSk7XG4gICAgc2V0VHJlZShfX3RyZWUpO1xuICB9O1xuXG4gIGNvbnN0IGVtcHR5VHJlZSA9ICghX3RyZWUgfHwgX3RyZWUubGVuZ3RoID09PSAwKTtcblxuICBpZiAoc2VsZWN0ZWQgJiYgZW1wdHlUcmVlKSB7XG4gICAgdXBkYXRlVHJlZSgpO1xuICB9XG5cbiAgbGV0IGNvbXBvbmVudHMgPSBbXTtcblxuICBpZiAoX3RyZWUpIHtcbiAgICBjb21wb25lbnRzID0gX3RyZWUubWFwKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBfc2VsZWN0ZWQgPSAob2JqZWN0LnBhdGggPT09IHNlbGVjdGVkUGF0aCk7XG4gICAgICBsZXQgY29tcG9uZW50O1xuXG4gICAgICBpZiAob2JqZWN0LnR5cGUgPT09ICd0cmVlJykge1xuICAgICAgICBjb21wb25lbnQgPSAoXG4gICAgICAgICAgPFRyZWVPYmplY3RcbiAgICAgICAgICAgIHsuLi5vYmplY3R9XG4gICAgICAgICAgICBzZWxlY3RlZD17X3NlbGVjdGVkfVxuICAgICAgICAgICAgZGVwdGg9e2RlcHRofVxuICAgICAgICAgICAgb25CbG9iPXtvbkJsb2J9XG4gICAgICAgICAgICBmaWxlcGF0aD17ZmlsZXBhdGh9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0LnR5cGUgPT09ICdibG9iJykge1xuICAgICAgICBjb21wb25lbnQgPSAoXG4gICAgICAgICAgPEJsb2JPYmplY3RcbiAgICAgICAgICAgIGJsb2I9e29iamVjdH1cbiAgICAgICAgICAgIG9uQmxvYj17b25CbG9ifVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e19zZWxlY3RlZH1cbiAgICAgICAgICAgIGRlcHRoPXtkZXB0aH1cbiAgICAgICAgICAgIGZpbGVwYXRoPXtmaWxlcGF0aH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvblNlbGVjdGVkUGF0aCA9ICgpID0+IHNldFNlbGVjdGVkUGF0aChvYmplY3QucGF0aCk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIG9uQ2xpY2s9e29uU2VsZWN0ZWRQYXRofVxuICAgICAgICA+XG4gICAgICAgICAge2NvbXBvbmVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2UgaW49e3NlbGVjdGVkfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XG4gICAgICA8TGlzdCBkYXRhLXRlc3Q9XCJmaWxlLXRyZWVcIiBkZW5zZSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIHtjb21wb25lbnRzfVxuICAgICAgPC9MaXN0PlxuICAgIDwvQ29sbGFwc2U+XG4gICk7XG59XG5cblRyZWUucHJvcFR5cGVzID0ge1xuICAvKiogQW4gYXJyYXkgb2YgcGF0aHMgZnJvbSB0aGUgR2l0ZWEgZmlsZSB0cmVlIGFwaS4gKi9cbiAgdHJlZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsndHJlZScsICdibG9iJ10pLmlzUmVxdWlyZWQsXG4gIH0pKSxcbiAgLyoqIFRoZSBVcmwgdG8gZmV0Y2ggdGhlIGxpc3RpbmcgaWYgbGlzdGluZyBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIElmIHVybCBpcyByZWxhdGl2ZSwgcGFzcyB0aGUgc2VydmVyIGluIHRoZSBjb25maWcgb2JqZWN0LiAqL1xuICBjb25maWc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgLyoqIFNldCBpZiB0aGUgTGlzdGluZyBpcyBjdXJyZW50bHkgc2VsZWN0ZWQsIHdoaWNoIHdpbGwgZXhwYW5kIHRoZSBjb2xsYXBzZWQgdmlldy4gKi9cbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKiogRnVuY3Rpb24gdG8gcHJvcG9nYXRlIHdoZW4gdGhlIEJsb2IgaXMgc2VsZWN0ZWQuICovXG4gIG9uQmxvYjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBUaGUgZGVwdGggb2YgdGhlIHBhdGggaW4gdGhlIHRyZWUgc2V0cyB0aGUgaW5zZXQgb2YgdGhlIGNvbXBvbmVudC4gKi9cbiAgZGVwdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKiBUaGUgbmVzdGVkIGZpbGVwYXRoIHRoYXQgd2lsbCBjb25jYXRlbmF0ZS4gKi9cbiAgZmlsZXBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBCbG9iIGRhdGEgdG8gcmVuZGVyLCBpZiB1cmwgbm90IHByb3ZpZGVkLiAqL1xuICBibG9iOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8qKiBUaGUgZmlsZXBhdGggaW4gdGhlIEdpdCBUcmVlIEJsb2IgT2JqZWN0ICovXG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIC8qKiBUaGUgdXJsIGluIHRoZSBHaXQgVHJlZSBCbG9iIE9iamVjdCAqL1xuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiogVGhlIGNvbnRlbnQgc2l6ZSBvZiB0aGUgR2l0IFRyZWUgQmxvYiBPYmplY3QgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn07XG5cblRyZWUuZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZDogZmFsc2UsXG4gIGRlcHRoOiAxLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiJdfQ==