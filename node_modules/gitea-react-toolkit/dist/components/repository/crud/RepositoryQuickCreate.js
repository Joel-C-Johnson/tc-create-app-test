"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _ = require("../..");

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
    listItemAvatar: {
      marginRight: '16px',
      marginTop: '20px'
    },
    avatar: {
      borderRadius: '20%'
    },
    root: {
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '100%'
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

function RepositoryQuickCreate() {
  var classes = useStyles();

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      repo = _useState2[0],
      setRepo = _useState2[1];

  var _useContext = (0, _react.useContext)(_.AuthenticationContext),
      authentication = _useContext.state;

  var _useContext2 = (0, _react.useContext)(_.RepositoryContext),
      create = _useContext2.actions.create;

  var _authentication$user = authentication.user,
      username = _authentication$user.username,
      avatar_url = _authentication$user.avatar_url;
  var handleCreate = (0, _react.useCallback)(function () {
    create({
      name: repo
    });
  }, [repo, create]);
  return /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    alignItems: "flex-start",
    ContainerComponent: "div",
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemAvatar, {
    className: classes.listItemAvatar
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    alt: username,
    src: avatar_url,
    className: classes.avatar
  })), /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.input
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    id: "owner",
    label: "Owner",
    type: "text",
    disabled: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: username
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.input
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    id: "repo",
    label: "Repository",
    type: "text",
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    defaultValue: "",
    autoComplete: undefined,
    onChange: function onChange(event) {
      setRepo(event.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement(_core.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "aria-label": "Add Repo",
    onClick: handleCreate
  }, /*#__PURE__*/_react.default.createElement(_icons.AddCircle, null))));
}

RepositoryQuickCreate.propTypes = {};
var _default = RepositoryQuickCreate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvY3J1ZC9SZXBvc2l0b3J5UXVpY2tDcmVhdGUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJsaXN0SXRlbUF2YXRhciIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIiwicm9vdCIsInNoYXBlIiwibWFyZ2luTGVmdCIsIndpZHRoIiwiZm9ybSIsImlucHV0IiwiZGlzcGxheSIsIlJlcG9zaXRvcnlRdWlja0NyZWF0ZSIsImNsYXNzZXMiLCJyZXBvIiwic2V0UmVwbyIsIkF1dGhlbnRpY2F0aW9uQ29udGV4dCIsImF1dGhlbnRpY2F0aW9uIiwic3RhdGUiLCJSZXBvc2l0b3J5Q29udGV4dCIsImNyZWF0ZSIsImFjdGlvbnMiLCJ1c2VyIiwidXNlcm5hbWUiLCJhdmF0YXJfdXJsIiwiaGFuZGxlQ3JlYXRlIiwibmFtZSIsInVuZGVmaW5lZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQVFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVcsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLElBQUFBLGNBQWMsRUFBRTtBQUNkQyxNQUFBQSxXQUFXLEVBQUUsTUFEQztBQUVkQyxNQUFBQSxTQUFTLEVBQUU7QUFGRyxLQURxQjtBQUtyQ0MsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLFlBQVksRUFBRTtBQURSLEtBTDZCO0FBUXJDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkQsTUFBQUEsWUFBWSxFQUFFTCxLQUFLLENBQUNPLEtBQU4sQ0FBWUYsWUFEdEI7QUFFSkcsTUFBQUEsVUFBVSxFQUFFLENBRlI7QUFHSkMsTUFBQUEsS0FBSyxFQUFFO0FBSEgsS0FSK0I7QUFhckNDLElBQUFBLElBQUks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QixDQUFDbUIsU0FBdEIsR0FBa0MsRUFBbEM7ZUFFZW5CLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUF2YXRhcixcbiAgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24sXG4gIEljb25CdXR0b24sXG4gIFRleHRGaWVsZCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgQWRkQ2lyY2xlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW1wb3J0IHsgUmVwb3NpdG9yeUNvbnRleHQsIEF1dGhlbnRpY2F0aW9uQ29udGV4dCB9IGZyb20gJy4uLy4uJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBsaXN0SXRlbUF2YXRhcjoge1xuICAgIG1hcmdpblJpZ2h0OiAnMTZweCcsXG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIGJvcmRlclJhZGl1czogJzIwJScsXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICBtYXJnaW5MZWZ0OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBpbnB1dDoge1xuICAgIHdpZHRoOiAnNDAlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW5SaWdodDogJzFlbScsXG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gUmVwb3NpdG9yeVF1aWNrQ3JlYXRlKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtyZXBvLCBzZXRSZXBvXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHsgc3RhdGU6IGF1dGhlbnRpY2F0aW9uIH0gPSB1c2VDb250ZXh0KEF1dGhlbnRpY2F0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHsgYWN0aW9uczogeyBjcmVhdGUgfSB9ID0gdXNlQ29udGV4dChSZXBvc2l0b3J5Q29udGV4dCk7XG5cbiAgY29uc3QgeyB1c2VyOiB7IHVzZXJuYW1lLCBhdmF0YXJfdXJsIH0gfSA9IGF1dGhlbnRpY2F0aW9uO1xuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjcmVhdGUoeyBuYW1lOiByZXBvIH0pO1xuICB9LCBbcmVwbywgY3JlYXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdEl0ZW1cbiAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICA+XG4gICAgICA8TGlzdEl0ZW1BdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtQXZhdGFyfT5cbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIGFsdD17dXNlcm5hbWV9XG4gICAgICAgICAgc3JjPXthdmF0YXJfdXJsfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XG4gICAgICAgIC8+XG4gICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgaWQ9J293bmVyJyBsYWJlbD0nT3duZXInIHR5cGU9J3RleHQnIGRpc2FibGVkXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGhcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBpZD0ncmVwbycgbGFiZWw9J1JlcG9zaXRvcnknIHR5cGU9J3RleHQnIHJlcXVpcmVkXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49XCJub3JtYWxcIiBmdWxsV2lkdGhcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiIGF1dG9Db21wbGV0ZT17dW5kZWZpbmVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICBzZXRSZXBvKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgUmVwb1wiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ3JlYXRlfVxuICAgICAgICA+XG4gICAgICAgICAgPEFkZENpcmNsZSAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgIDwvTGlzdEl0ZW0+XG4gICk7XG59XG5cblJlcG9zaXRvcnlRdWlja0NyZWF0ZS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3NpdG9yeVF1aWNrQ3JlYXRlO1xuIl19