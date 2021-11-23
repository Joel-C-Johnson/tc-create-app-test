"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FileForm(_ref) {
  var _branch = _ref.branch,
      _filepath = _ref.filepath,
      _defaultContent = _ref.defaultContent,
      submitText = _ref.submitText,
      onSubmit = _ref.onSubmit;

  var _useState = (0, _react.useState)(_branch),
      _useState2 = _slicedToArray(_useState, 2),
      branch = _useState2[0],
      setBranch = _useState2[1];

  var _useState3 = (0, _react.useState)(_filepath),
      _useState4 = _slicedToArray(_useState3, 2),
      filepath = _useState4[0],
      setFilepath = _useState4[1];

  var _useState5 = (0, _react.useState)(_defaultContent),
      _useState6 = _slicedToArray(_useState5, 2),
      defaultContent = _useState6[0],
      setDefaultContent = _useState6[1];

  var disabled = !filepath;
  return /*#__PURE__*/_react.default.createElement(_core.Paper, {
    style: {
      marginBottom: '1em',
      padding: '1.3em'
    }
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    disabled: true,
    style: {
      display: 'none'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/_react.default.createElement(_core.TextField, {
    name: "branch",
    label: "branch",
    type: "text",
    autoComplete: null,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: branch,
    onChange: function onChange(e) {
      return setBranch(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_core.TextField, {
    name: "filepath",
    label: "filepath",
    type: "text",
    autoComplete: null,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: filepath,
    onChange: function onChange(e) {
      return setFilepath(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_core.TextField, {
    name: "defaultContent",
    label: "defaultContent",
    type: "text",
    multiline: true,
    autoComplete: null,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: defaultContent,
    onChange: function onChange(e) {
      return setDefaultContent(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    type: "button",
    disabled: disabled,
    fullWidth: true,
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return onSubmit({
        branch: branch,
        filepath: filepath,
        defaultContent: defaultContent
      });
    }
  }, submitText)));
}

;
FileForm.propTypes = {
  /** text to display on the submit button */
  submitText: _propTypes.default.string,

  /** Function run when submit button is clicked */
  onSubmit: _propTypes.default.func.isRequired
};
FileForm.defaultProps = {
  submitText: 'Submit'
};
var _default = FileForm;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbGUvRmlsZUZvcm0uanMiXSwibmFtZXMiOlsiRmlsZUZvcm0iLCJfYnJhbmNoIiwiYnJhbmNoIiwiX2ZpbGVwYXRoIiwiZmlsZXBhdGgiLCJfZGVmYXVsdENvbnRlbnQiLCJkZWZhdWx0Q29udGVudCIsInN1Ym1pdFRleHQiLCJvblN1Ym1pdCIsInNldEJyYW5jaCIsInNldEZpbGVwYXRoIiwic2V0RGVmYXVsdENvbnRlbnQiLCJkaXNhYmxlZCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciLCJkaXNwbGF5IiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFNBQVNBLFFBQVQsT0FNRztBQUFBLE1BTE9DLE9BS1AsUUFMREMsTUFLQztBQUFBLE1BSlNDLFNBSVQsUUFKREMsUUFJQztBQUFBLE1BSGVDLGVBR2YsUUFIREMsY0FHQztBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQzs7QUFBQSxrQkFDMkIscUJBQVNQLE9BQVQsQ0FEM0I7QUFBQTtBQUFBLE1BQ01DLE1BRE47QUFBQSxNQUNjTyxTQURkOztBQUFBLG1CQUUrQixxQkFBU04sU0FBVCxDQUYvQjtBQUFBO0FBQUEsTUFFTUMsUUFGTjtBQUFBLE1BRWdCTSxXQUZoQjs7QUFBQSxtQkFHMkMscUJBQVNMLGVBQVQsQ0FIM0M7QUFBQTtBQUFBLE1BR01DLGNBSE47QUFBQSxNQUdzQkssaUJBSHRCOztBQUlELE1BQU1DLFFBQVEsR0FBRyxDQUFFUixRQUFuQjtBQUVBLHNCQUNFLDZCQUFDLFdBQUQ7QUFBTyxJQUFBLEtBQUssRUFBRTtBQUFFUyxNQUFBQSxZQUFZLEVBQUUsS0FBaEI7QUFBdUJDLE1BQUFBLE9BQU8sRUFBRTtBQUFoQztBQUFkLGtCQUNFLHdEQUNFO0FBQVEsSUFBQSxJQUFJLEVBQUMsUUFBYjtBQUFzQixJQUFBLFFBQVEsTUFBOUI7QUFBK0IsSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBdEM7QUFBMkQsbUJBQVk7QUFBdkUsSUFERixlQUVFLDZCQUFDLGVBQUQ7QUFDRSxJQUFBLElBQUksRUFBQyxRQURQO0FBQ2dCLElBQUEsS0FBSyxFQUFDLFFBRHRCO0FBQytCLElBQUEsSUFBSSxFQUFDLE1BRHBDO0FBQzJDLElBQUEsWUFBWSxFQUFFLElBRHpEO0FBRUUsSUFBQSxPQUFPLEVBQUMsVUFGVjtBQUVxQixJQUFBLE1BQU0sRUFBQyxRQUY1QjtBQUVxQyxJQUFBLFNBQVMsTUFGOUM7QUFFK0MsSUFBQSxZQUFZLEVBQUViLE1BRjdEO0FBR0UsSUFBQSxRQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSxhQUFPUCxTQUFTLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWhCO0FBQUE7QUFIWixJQUZGLGVBT0UsNkJBQUMsZUFBRDtBQUNFLElBQUEsSUFBSSxFQUFDLFVBRFA7QUFDa0IsSUFBQSxLQUFLLEVBQUMsVUFEeEI7QUFDbUMsSUFBQSxJQUFJLEVBQUMsTUFEeEM7QUFDK0MsSUFBQSxZQUFZLEVBQUUsSUFEN0Q7QUFFRSxJQUFBLE9BQU8sRUFBQyxVQUZWO0FBRXFCLElBQUEsTUFBTSxFQUFDLFFBRjVCO0FBRXFDLElBQUEsU0FBUyxNQUY5QztBQUUrQyxJQUFBLFlBQVksRUFBRWQsUUFGN0Q7QUFHRSxJQUFBLFFBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLGFBQU9OLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUhaLElBUEYsZUFZRSw2QkFBQyxlQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsZ0JBRFA7QUFDd0IsSUFBQSxLQUFLLEVBQUMsZ0JBRDlCO0FBQytDLElBQUEsSUFBSSxFQUFDLE1BRHBEO0FBQzJELElBQUEsU0FBUyxFQUFFLElBRHRFO0FBQzRFLElBQUEsWUFBWSxFQUFFLElBRDFGO0FBRUUsSUFBQSxPQUFPLEVBQUMsVUFGVjtBQUVxQixJQUFBLE1BQU0sRUFBQyxRQUY1QjtBQUVxQyxJQUFBLFNBQVMsTUFGOUM7QUFFK0MsSUFBQSxZQUFZLEVBQUVaLGNBRjdEO0FBR0UsSUFBQSxRQUFRLEVBQUUsa0JBQUNVLENBQUQ7QUFBQSxhQUFPTCxpQkFBaUIsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBeEI7QUFBQTtBQUhaLElBWkYsZUFpQkUsNkJBQUMsWUFBRDtBQUFRLElBQUEsSUFBSSxFQUFDLFFBQWI7QUFBc0IsSUFBQSxRQUFRLEVBQUVOLFFBQWhDO0FBQTBDLElBQUEsU0FBUyxNQUFuRDtBQUFvRCxJQUFBLE9BQU8sRUFBQyxXQUE1RDtBQUF3RSxJQUFBLEtBQUssRUFBQyxTQUE5RTtBQUNFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUosUUFBUSxDQUFDO0FBQ3RCTixRQUFBQSxNQUFNLEVBQU5BLE1BRHNCO0FBQ2RFLFFBQUFBLFFBQVEsRUFBUkEsUUFEYztBQUNKRSxRQUFBQSxjQUFjLEVBQWRBO0FBREksT0FBRCxDQUFkO0FBQUE7QUFEWCxLQUtHQyxVQUxILENBakJGLENBREYsQ0FERjtBQTZCRDs7QUFBQTtBQUVEUCxRQUFRLENBQUNtQixTQUFULEdBQXFCO0FBQ25CO0FBQ0FaLEVBQUFBLFVBQVUsRUFBRWEsbUJBQVVDLE1BRkg7O0FBR25CO0FBQ0FiLEVBQUFBLFFBQVEsRUFBRVksbUJBQVVFLElBQVYsQ0FBZUM7QUFKTixDQUFyQjtBQU9BdkIsUUFBUSxDQUFDd0IsWUFBVCxHQUF3QjtBQUFFakIsRUFBQUEsVUFBVSxFQUFFO0FBQWQsQ0FBeEI7ZUFFZVAsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBQYXBlciwgVGV4dEZpZWxkLCBCdXR0b24sXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuZnVuY3Rpb24gRmlsZUZvcm0oe1xuICBicmFuY2g6IF9icmFuY2gsXG4gIGZpbGVwYXRoOiBfZmlsZXBhdGgsXG4gIGRlZmF1bHRDb250ZW50OiBfZGVmYXVsdENvbnRlbnQsXG4gIHN1Ym1pdFRleHQsXG4gIG9uU3VibWl0LFxufSkge1xuICBjb25zdCBbYnJhbmNoLCBzZXRCcmFuY2hdID0gdXNlU3RhdGUoX2JyYW5jaCk7XG4gIGNvbnN0IFtmaWxlcGF0aCwgc2V0RmlsZXBhdGhdID0gdXNlU3RhdGUoX2ZpbGVwYXRoKTtcbiAgY29uc3QgW2RlZmF1bHRDb250ZW50LCBzZXREZWZhdWx0Q29udGVudF0gPSB1c2VTdGF0ZShfZGVmYXVsdENvbnRlbnQpO1xuICBjb25zdCBkaXNhYmxlZCA9ICEoZmlsZXBhdGgpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhcGVyIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzFlbScsIHBhZGRpbmc6ICcxLjNlbScgfX0+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvYnV0dG9uPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgbmFtZT0nYnJhbmNoJyBsYWJlbD0nYnJhbmNoJyB0eXBlPSd0ZXh0JyBhdXRvQ29tcGxldGU9e251bGx9XG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgbWFyZ2luPVwibm9ybWFsXCIgZnVsbFdpZHRoIGRlZmF1bHRWYWx1ZT17YnJhbmNofVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QnJhbmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIG5hbWU9J2ZpbGVwYXRoJyBsYWJlbD0nZmlsZXBhdGgnIHR5cGU9J3RleHQnIGF1dG9Db21wbGV0ZT17bnVsbH1cbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGggZGVmYXVsdFZhbHVlPXtmaWxlcGF0aH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpbGVwYXRoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIG5hbWU9J2RlZmF1bHRDb250ZW50JyBsYWJlbD0nZGVmYXVsdENvbnRlbnQnIHR5cGU9J3RleHQnIG11bHRpbGluZT17dHJ1ZX0gYXV0b0NvbXBsZXRlPXtudWxsfVxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG1hcmdpbj1cIm5vcm1hbFwiIGZ1bGxXaWR0aCBkZWZhdWx0VmFsdWU9e2RlZmF1bHRDb250ZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVmYXVsdENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17ZGlzYWJsZWR9IGZ1bGxXaWR0aCB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblN1Ym1pdCh7XG4gICAgICAgICAgICBicmFuY2gsIGZpbGVwYXRoLCBkZWZhdWx0Q29udGVudCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtzdWJtaXRUZXh0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L1BhcGVyPlxuICApO1xufTtcblxuRmlsZUZvcm0ucHJvcFR5cGVzID0ge1xuICAvKiogdGV4dCB0byBkaXNwbGF5IG9uIHRoZSBzdWJtaXQgYnV0dG9uICovXG4gIHN1Ym1pdFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBGdW5jdGlvbiBydW4gd2hlbiBzdWJtaXQgYnV0dG9uIGlzIGNsaWNrZWQgKi9cbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5GaWxlRm9ybS5kZWZhdWx0UHJvcHMgPSB7IHN1Ym1pdFRleHQ6ICdTdWJtaXQnIH07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVGb3JtO1xuIl19