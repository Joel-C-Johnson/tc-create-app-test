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

var _ = require("./");

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
    modal: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      right: '10%',
      maxHeight: '80%',
      overflow: 'scroll'
    }
  };
});

function RepositoryFormMenu() {
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var button = /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    color: "inherit",
    onClick: function onClick() {
      setModal(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.FolderShared, null));

  var modalComponent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  if (modal) {
    modalComponent = /*#__PURE__*/_react.default.createElement(_core.Modal, {
      open: true,
      onClose: function onClose() {
        setModal(false);
      }
    }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
      className: classes.modal
    }, /*#__PURE__*/_react.default.createElement(_.RepositoryForm, null)));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, button, modalComponent);
}

;
RepositoryFormMenu.propTypes = {};
var _default = RepositoryFormMenu;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvY3J1ZC9SZXBvc2l0b3J5Rm9ybU1lbnUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJtb2RhbCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJSZXBvc2l0b3J5Rm9ybU1lbnUiLCJjbGFzc2VzIiwic2V0TW9kYWwiLCJidXR0b24iLCJtb2RhbENvbXBvbmVudCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBS0E7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdCQUFXLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsUUFBUSxFQUFFLFVBREw7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLEtBRkE7QUFHTEMsTUFBQUEsSUFBSSxFQUFFLEtBSEQ7QUFJTEMsTUFBQUEsS0FBSyxFQUFFLEtBSkY7QUFLTEMsTUFBQUEsU0FBUyxFQUFFLEtBTE47QUFNTEMsTUFBQUEsUUFBUSxFQUFFO0FBTkw7QUFEOEIsR0FBTDtBQUFBLENBQWhCLENBQWxCOztBQVdBLFNBQVNDLGtCQUFULEdBQThCO0FBQzVCLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6Qjs7QUFENEIsa0JBRUYscUJBQVMsS0FBVCxDQUZFO0FBQUE7QUFBQSxNQUVyQkUsS0FGcUI7QUFBQSxNQUVkUyxRQUZjOztBQUk1QixNQUFNQyxNQUFNLGdCQUNWLDZCQUFDLGdCQUFEO0FBQVksSUFBQSxLQUFLLEVBQUMsU0FBbEI7QUFBNEIsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFBRUQsTUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUFpQjtBQUE5RCxrQkFDRSw2QkFBQyxtQkFBRCxPQURGLENBREY7O0FBTUEsTUFBSUUsY0FBYyxnQkFBRywyREFBckI7O0FBRUEsTUFBSVgsS0FBSixFQUFXO0FBQ1RXLElBQUFBLGNBQWMsZ0JBQ1osNkJBQUMsV0FBRDtBQUFPLE1BQUEsSUFBSSxFQUFFLElBQWI7QUFBbUIsTUFBQSxPQUFPLEVBQUUsbUJBQU07QUFBRUYsUUFBQUEsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUFrQjtBQUF0RCxvQkFDRSw2QkFBQyxXQUFEO0FBQU8sTUFBQSxTQUFTLEVBQUVELE9BQU8sQ0FBQ1I7QUFBMUIsb0JBQ0UsNkJBQUMsZ0JBQUQsT0FERixDQURGLENBREY7QUFPRDs7QUFFRCxzQkFDRSw0REFDR1UsTUFESCxFQUVHQyxjQUZILENBREY7QUFNRDs7QUFBQTtBQUVESixrQkFBa0IsQ0FBQ0ssU0FBbkIsR0FBK0IsRUFBL0I7ZUFFZUwsa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBJY29uQnV0dG9uLFxuICBNb2RhbCxcbiAgUGFwZXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7XG4gIEZvbGRlclNoYXJlZCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW1wb3J0IHsgUmVwb3NpdG9yeUZvcm0gfSBmcm9tICcuLyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgbW9kYWw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcxMCUnLFxuICAgIGxlZnQ6ICcxMCUnLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICBtYXhIZWlnaHQ6ICc4MCUnLFxuICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gUmVwb3NpdG9yeUZvcm1NZW51KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IChcbiAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXsoKSA9PiB7IHNldE1vZGFsKHRydWUpOyB9fT5cbiAgICAgIDxGb2xkZXJTaGFyZWQgLz5cbiAgICA8L0ljb25CdXR0b24+XG4gICk7XG5cbiAgbGV0IG1vZGFsQ29tcG9uZW50ID0gPD48Lz47XG5cbiAgaWYgKG1vZGFsKSB7XG4gICAgbW9kYWxDb21wb25lbnQgPSAoXG4gICAgICA8TW9kYWwgb3Blbj17dHJ1ZX0gb25DbG9zZT17KCkgPT4geyBzZXRNb2RhbChmYWxzZSk7IH19PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfT5cbiAgICAgICAgICA8UmVwb3NpdG9yeUZvcm0gLz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtidXR0b259XG4gICAgICB7bW9kYWxDb21wb25lbnR9XG4gICAgPC8+XG4gICk7XG59O1xuXG5SZXBvc2l0b3J5Rm9ybU1lbnUucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9zaXRvcnlGb3JtTWVudTtcbiJdfQ==