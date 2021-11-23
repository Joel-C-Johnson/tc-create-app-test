"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginFormComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _useStyles = require("./useStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LoginForm(_ref) {
  var config = _ref.config,
      authentication = _ref.authentication,
      actionText = _ref.actionText,
      errorText = _ref.errorText,
      onSubmit = _ref.onSubmit;
  var classes = (0, _useStyles.useStyles)();

  var _authentication = authentication || {
    user: {}
  };

  var _username = _authentication.user.username;
  var _remember = _authentication.remember;

  var _useState = (0, _react.useState)({
    username: _username,
    remember: _remember
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var username = formData.username,
      password = formData.password,
      remember = formData.remember;
  (0, _useDeepCompareEffect.default)(function () {
    if (_authentication) {
      var _formData = _objectSpread({}, formData);

      if (_authentication.user.username) {
        _formData.username = _authentication.user.username;
      }

      if (_authentication.remember) {
        _formData.remember = _authentication.remember;
      }

      setFormData(_formData);
    } else {
      var _formData2 = _objectSpread({}, formData);

      _formData2.password = '';
      setFormData(_formData2);
    }
  }, [_authentication]);
  var user;
  if (authentication) user = authentication.user;

  var updateFormData = function updateFormData(event) {
    var _event$target = event.target,
        type = _event$target.type,
        name = _event$target.name,
        value = _event$target.value,
        checked = _event$target.checked;

    var _formData = _objectSpread({}, formData);

    if (type === 'checkbox') _formData[value] = checked;else _formData[name] = value;
    setFormData(_formData);
  };

  var footer = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  if (config && config.server) {
    footer = /*#__PURE__*/_react.default.createElement("div", {
      className: classes.footer_container
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.footer_column
    }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
      variant: "caption"
    }, "Need an account?\xA0"), /*#__PURE__*/_react.default.createElement(_core.Typography, {
      color: "primary",
      variant: "caption",
      component: "a",
      target: "_blank",
      href: "".concat(config.server, "/user/sign_up")
    }, "Register now.")), /*#__PURE__*/_react.default.createElement("div", {
      className: classes.footer_column
    }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
      color: "primary",
      variant: "caption",
      component: "a",
      target: "_blank",
      href: "".concat(config.server, "/user/forgot_password")
    }, "Forgot password?")));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    className: classes.avatar,
    src: user && user.avatar_url ? user.avatar_url : null
  }, /*#__PURE__*/_react.default.createElement(_icons.LockOutlined, null)), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "h1",
    variant: "h5"
  }, user ? user.full_name : actionText), errorText ? /*#__PURE__*/_react.default.createElement(_core.Typography, {
    "data-test": "login-error-text",
    component: "p",
    style: {
      color: 'red'
    }
  }, errorText) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    "data-test": "username-input",
    name: "username",
    type: "text",
    label: "Username",
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    autoComplete: "username",
    disabled: !!user,
    defaultValue: username,
    onChange: updateFormData
  }), /*#__PURE__*/_react.default.createElement(_core.TextField, {
    "data-test": "password-input",
    name: "password",
    type: "password",
    label: "Password",
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    autoComplete: "current-password",
    disabled: !!user,
    onChange: updateFormData
  }), /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, {
    "data-test": "remember-checkbox",
    label: "Keep me logged in",
    control: /*#__PURE__*/_react.default.createElement(_core.Checkbox, {
      color: "primary",
      value: "remember",
      disabled: !!user,
      checked: remember,
      id: 'remember-' + Math.random(),
      onChange: updateFormData
    })
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    "data-test": user ? 'logout-button' : 'submit-button',
    type: "button",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: function onClick() {
      return onSubmit(formData);
    }
  }, user ? 'Logout' : actionText), footer));
}

;
LoginForm.propTypes = {
  /** Configuration to use for sign up/forgot password flow */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  }),

  /** Callback function to propogate the username and password entered. */
  onSubmit: _propTypes.default.func.isRequired,

  /** The text to describe the action of logging in. */
  actionText: _propTypes.default.string,

  /** The text to describe the error when Authentication fails. */
  errorText: _propTypes.default.string,

  /** The authenticated user object */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object
  })
};
LoginForm.defaultProps = {
  actionText: 'Login'
};
var LoginFormComponent = LoginForm;
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL0xvZ2luRm9ybS5qcyJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJjb25maWciLCJhdXRoZW50aWNhdGlvbiIsImFjdGlvblRleHQiLCJlcnJvclRleHQiLCJvblN1Ym1pdCIsImNsYXNzZXMiLCJfYXV0aGVudGljYXRpb24iLCJ1c2VyIiwiX3VzZXJuYW1lIiwidXNlcm5hbWUiLCJfcmVtZW1iZXIiLCJyZW1lbWJlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJwYXNzd29yZCIsIl9mb3JtRGF0YSIsInVwZGF0ZUZvcm1EYXRhIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsImZvb3RlciIsInNlcnZlciIsImZvb3Rlcl9jb250YWluZXIiLCJmb290ZXJfY29sdW1uIiwicm9vdCIsImF2YXRhciIsImF2YXRhcl91cmwiLCJmdWxsX25hbWUiLCJjb2xvciIsImZvcm0iLCJNYXRoIiwicmFuZG9tIiwic3VibWl0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIkxvZ2luRm9ybUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBUUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsU0FBVCxPQU1HO0FBQUEsTUFMREMsTUFLQyxRQUxEQSxNQUtDO0FBQUEsTUFKREMsY0FJQyxRQUpEQSxjQUlDO0FBQUEsTUFIREMsVUFHQyxRQUhEQSxVQUdDO0FBQUEsTUFGREMsU0FFQyxRQUZEQSxTQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDO0FBQ0QsTUFBTUMsT0FBTyxHQUFHLDJCQUFoQjs7QUFDQSxNQUFNQyxlQUFlLEdBQUdMLGNBQWMsSUFBSTtBQUFF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O0FBQ0UsSUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLElBQUEsU0FBUyxFQUFFRixPQUFPLENBQUM4QixNQUZyQjtBQUdFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTS9CLFFBQVEsQ0FBQ1EsUUFBRCxDQUFkO0FBQUE7QUFIWCxLQUlJTCxJQUFELEdBQVMsUUFBVCxHQUFvQkwsVUFKdkIsQ0FuQkYsRUF5QkdxQixNQXpCSCxDQVhGLENBREY7QUF5Q0Q7O0FBQUE7QUFFRHhCLFNBQVMsQ0FBQ3FDLFNBQVYsR0FBc0I7QUFDcEI7QUFDQXBDLEVBQUFBLE1BQU0sRUFBRXFDLG1CQUFVQyxLQUFWLENBQWdCO0FBQUVkLElBQUFBLE1BQU0sRUFBRWEsbUJBQVVFLE1BQVYsQ0FBaUJDO0FBQTNCLEdBQWhCLENBRlk7O0FBR3BCO0FBQ0FwQyxFQUFBQSxRQUFRLEVBQUVpQyxtQkFBVUksSUFBVixDQUFlRCxVQUpMOztBQUtwQjtBQUNBdEMsRUFBQUEsVUFBVSxFQUFFbUMsbUJBQVVFLE1BTkY7O0FBT3BCO0FBQ0FwQyxFQUFBQSxTQUFTLEVBQUVrQyxtQkFBVUUsTUFSRDs7QUFTcEI7QUFDQXRDLEVBQUFBLGNBQWMsRUFBRW9DLG1CQUFVQyxLQUFWLENBQWdCO0FBQUUvQixJQUFBQSxJQUFJLEVBQUU4QixtQkFBVUs7QUFBbEIsR0FBaEI7QUFWSSxDQUF0QjtBQWFBM0MsU0FBUyxDQUFDNEMsWUFBVixHQUF5QjtBQUFFekMsRUFBQUEsVUFBVSxFQUFFO0FBQWQsQ0FBekI7QUFFTyxJQUFNMEMsa0JBQWtCLEdBQUc3QyxTQUEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFZmZlY3QgZnJvbSAndXNlLWRlZXAtY29tcGFyZS1lZmZlY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIEF2YXRhcixcbiAgQnV0dG9uLFxuICBGb3JtQ29udHJvbExhYmVsLFxuICBDaGVja2JveCxcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBMb2NrT3V0bGluZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi91c2VTdHlsZXMnO1xuXG5mdW5jdGlvbiBMb2dpbkZvcm0oe1xuICBjb25maWcsXG4gIGF1dGhlbnRpY2F0aW9uLFxuICBhY3Rpb25UZXh0LFxuICBlcnJvclRleHQsXG4gIG9uU3VibWl0LFxufSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IF9hdXRoZW50aWNhdGlvbiA9IGF1dGhlbnRpY2F0aW9uIHx8IHsgdXNlcjoge30gfTtcbiAgY29uc3QgX3VzZXJuYW1lID0gX2F1dGhlbnRpY2F0aW9uLnVzZXIudXNlcm5hbWU7XG4gIGNvbnN0IF9yZW1lbWJlciA9IF9hdXRoZW50aWNhdGlvbi5yZW1lbWJlcjtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiBfdXNlcm5hbWUsIHJlbWVtYmVyOiBfcmVtZW1iZXIgfSk7XG4gIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkLCByZW1lbWJlciB9ID0gZm9ybURhdGE7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoX2F1dGhlbnRpY2F0aW9uKSB7XG4gICAgICBsZXQgX2Zvcm1EYXRhID0geyAuLi5mb3JtRGF0YSB9O1xuXG4gICAgICBpZiAoX2F1dGhlbnRpY2F0aW9uLnVzZXIudXNlcm5hbWUpIHtcbiAgICAgICAgX2Zvcm1EYXRhLnVzZXJuYW1lID0gX2F1dGhlbnRpY2F0aW9uLnVzZXIudXNlcm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoX2F1dGhlbnRpY2F0aW9uLnJlbWVtYmVyKSB7XG4gICAgICAgIF9mb3JtRGF0YS5yZW1lbWJlciA9IF9hdXRoZW50aWNhdGlvbi5yZW1lbWJlcjtcbiAgICAgIH1cbiAgICAgIHNldEZvcm1EYXRhKF9mb3JtRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBfZm9ybURhdGEgPSB7IC4uLmZvcm1EYXRhIH07XG4gICAgICBfZm9ybURhdGEucGFzc3dvcmQgPSAnJztcbiAgICAgIHNldEZvcm1EYXRhKF9mb3JtRGF0YSk7XG4gICAgfVxuICB9LCBbX2F1dGhlbnRpY2F0aW9uXSk7XG5cblxuXG4gIGxldCB1c2VyO1xuXG4gIGlmIChhdXRoZW50aWNhdGlvbikgdXNlciA9IGF1dGhlbnRpY2F0aW9uLnVzZXI7XG5cbiAgY29uc3QgdXBkYXRlRm9ybURhdGEgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLCBuYW1lLCB2YWx1ZSwgY2hlY2tlZCxcbiAgICB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IF9mb3JtRGF0YSA9IHsgLi4uZm9ybURhdGEgfTtcblxuICAgIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSBfZm9ybURhdGFbdmFsdWVdID0gY2hlY2tlZDtcbiAgICBlbHNlIF9mb3JtRGF0YVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgc2V0Rm9ybURhdGEoX2Zvcm1EYXRhKTtcbiAgfTtcblxuICBsZXQgZm9vdGVyID0gPD48Lz47XG5cbiAgaWYgKGNvbmZpZyAmJiBjb25maWcuc2VydmVyKSB7XG4gICAgZm9vdGVyID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyX2NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcl9jb2x1bW59PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCI+TmVlZCBhbiBhY2NvdW50PyZuYnNwOzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwiY2FwdGlvblwiIGNvbXBvbmVudD1cImFcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgJHtjb25maWcuc2VydmVyfS91c2VyL3NpZ25fdXBgfT5SZWdpc3RlciBub3cuPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyX2NvbHVtbn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNhcHRpb25cIiBjb21wb25lbnQ9XCJhXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YCR7Y29uZmlnLnNlcnZlcn0vdXNlci9mb3Jnb3RfcGFzc3dvcmRgfT5Gb3Jnb3QgcGFzc3dvcmQ/PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gc3JjPXt1c2VyICYmIHVzZXIuYXZhdGFyX3VybCA/IHVzZXIuYXZhdGFyX3VybCA6IG51bGx9PlxuICAgICAgICA8TG9ja091dGxpbmVkIC8+XG4gICAgICA8L0F2YXRhcj5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgIHsodXNlcikgPyB1c2VyLmZ1bGxfbmFtZSA6IGFjdGlvblRleHR9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICB7ZXJyb3JUZXh0ID8gKFxuICAgICAgICA8VHlwb2dyYXBoeSBkYXRhLXRlc3Q9XCJsb2dpbi1lcnJvci10ZXh0XCIgY29tcG9uZW50PVwicFwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cbiAgICAgICAgICB7ZXJyb3JUZXh0fVxuICAgICAgICA8L1R5cG9ncmFwaHk+KSA6IDw+PC8+fVxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICA8VGV4dEZpZWxkIGRhdGEtdGVzdD1cInVzZXJuYW1lLWlucHV0XCIgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBsYWJlbD1cIlVzZXJuYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGggYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIlxuICAgICAgICAgIGRpc2FibGVkPXshIXVzZXJ9IGRlZmF1bHRWYWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUZvcm1EYXRhfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dEZpZWxkIGRhdGEtdGVzdD1cInBhc3N3b3JkLWlucHV0XCIgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJQYXNzd29yZFwiIHJlcXVpcmVkXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgbWFyZ2luPVwibm9ybWFsXCIgZnVsbFdpZHRoIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgIGRpc2FibGVkPXshIXVzZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZUZvcm1EYXRhfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgIGRhdGEtdGVzdD1cInJlbWVtYmVyLWNoZWNrYm94XCJcbiAgICAgICAgICBsYWJlbD1cIktlZXAgbWUgbG9nZ2VkIGluXCJcbiAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgIDxDaGVja2JveCBjb2xvcj1cInByaW1hcnlcIiB2YWx1ZT1cInJlbWVtYmVyXCIgZGlzYWJsZWQ9eyEhdXNlcn0gY2hlY2tlZD17cmVtZW1iZXJ9XG4gICAgICAgICAgICAgIGlkPXsncmVtZW1iZXItJyArIE1hdGgucmFuZG9tKCl9IG9uQ2hhbmdlPXt1cGRhdGVGb3JtRGF0YX0gLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gZGF0YS10ZXN0PXt1c2VyID8gJ2xvZ291dC1idXR0b24nIDogJ3N1Ym1pdC1idXR0b24nfSB0eXBlPVwiYnV0dG9uXCIgZnVsbFdpZHRoIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25TdWJtaXQoZm9ybURhdGEpfT5cbiAgICAgICAgICB7KHVzZXIpID8gJ0xvZ291dCcgOiBhY3Rpb25UZXh0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAge2Zvb3Rlcn1cbiAgICAgIDwvZm9ybT5cbiAgICA8L2RpdiA+XG4gICk7XG59O1xuXG5Mb2dpbkZvcm0ucHJvcFR5cGVzID0ge1xuICAvKiogQ29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHNpZ24gdXAvZm9yZ290IHBhc3N3b3JkIGZsb3cgKi9cbiAgY29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoeyBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9KSxcbiAgLyoqIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHByb3BvZ2F0ZSB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGVudGVyZWQuICovXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogVGhlIHRleHQgdG8gZGVzY3JpYmUgdGhlIGFjdGlvbiBvZiBsb2dnaW5nIGluLiAqL1xuICBhY3Rpb25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogVGhlIHRleHQgdG8gZGVzY3JpYmUgdGhlIGVycm9yIHdoZW4gQXV0aGVudGljYXRpb24gZmFpbHMuICovXG4gIGVycm9yVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFRoZSBhdXRoZW50aWNhdGVkIHVzZXIgb2JqZWN0ICovXG4gIGF1dGhlbnRpY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoeyB1c2VyOiBQcm9wVHlwZXMub2JqZWN0IH0pLFxufTtcblxuTG9naW5Gb3JtLmRlZmF1bHRQcm9wcyA9IHsgYWN0aW9uVGV4dDogJ0xvZ2luJyB9O1xuXG5leHBvcnQgY29uc3QgTG9naW5Gb3JtQ29tcG9uZW50ID0gTG9naW5Gb3JtO1xuIl19