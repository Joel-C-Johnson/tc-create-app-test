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

var _markdownTranslatable = require("markdown-translatable");

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
    actions: {
      textAlign: 'right',
      paddingRight: "".concat(theme.spacing(1.5), "px"),
      width: '100%'
    },
    action: {
      marginLeft: "0px"
    }
  };
});

function FileCard(_ref) {
  var authentication = _ref.authentication,
      repository = _ref.repository,
      file = _ref.file;
  var classes = useStyles();

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      preview = _useState2[0],
      setPreview = _useState2[1];

  var _useState3 = (0, _react.useState)(file ? file.content : ''),
      _useState4 = _slicedToArray(_useState3, 2),
      markdown = _useState4[0],
      setMarkdown = _useState4[1];

  var changed = markdown !== (file && file.content);
  var avatarUrl = repository.avatar_url || repository.owner.avatar_url;
  var access = repository.permissions.push;
  (0, _react.useEffect)(function () {
    setMarkdown(file && file.content);
  }, [file]);
  var branch = file && file.branch ? file.branch : repository.default_branch;
  return /*#__PURE__*/_react.default.createElement(_core.Card, null, /*#__PURE__*/_react.default.createElement(_core.CardHeader, {
    avatar: /*#__PURE__*/_react.default.createElement(_core.Avatar, {
      src: avatarUrl
    }),
    title: /*#__PURE__*/_react.default.createElement("strong", null, file && file.path),
    subheader: repository.full_name + '/' + branch
  }), /*#__PURE__*/_react.default.createElement(_core.CardContent, null, /*#__PURE__*/_react.default.createElement(_core.Paper, null, /*#__PURE__*/_react.default.createElement(_markdownTranslatable.BlockEditable, {
    preview: preview,
    markdown: markdown,
    onEdit: setMarkdown,
    editable: !!authentication
  }))), /*#__PURE__*/_react.default.createElement(_core.CardActions, null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.actions
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: classes.action,
    "aria-label": "Preview",
    onClick: function onClick() {
      return setPreview(!preview);
    }
  }, !preview ? /*#__PURE__*/_react.default.createElement(_icons.Pageview, null) : /*#__PURE__*/_react.default.createElement(_icons.PageviewOutlined, null)), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: classes.action,
    "aria-label": "Save",
    disabled: !access,
    onClick: function onClick() {
      if (changed) file.save(markdown);
    }
  }, changed ? /*#__PURE__*/_react.default.createElement(_icons.Save, null) : /*#__PURE__*/_react.default.createElement(_icons.SaveOutlined, null)), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    className: classes.action,
    "aria-label": "Delete",
    disabled: !access,
    onClick: function onClick() {
      var confirmation = window.confirm("Are you sure you want to Delete ".concat(file.filepath, "?"));
      if (confirmation) file.dangerouslyDelete();
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.DeleteSweepOutlined, null)), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    title: "Close Repository",
    onClick: file.close
  }, /*#__PURE__*/_react.default.createElement(_icons.CancelOutlined, null)))));
}

;
FileCard.propTypes = {
  /** Repository tree_url can be used in place of blobConfig */
  repository: _propTypes.default.shape({
    owner: _propTypes.default.shape({
      username: _propTypes.default.string.isRequired,
      avatar_url: _propTypes.default.string.isRequired
    }),
    name: _propTypes.default.string.isRequired,
    avatar_url: _propTypes.default.string
  }).isRequired,

  /** Pass a previously returned file object to bypass the selection. */
  file: _propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    path: _propTypes.default.string.isRequired,
    sha: _propTypes.default.string.isRequired,
    content: _propTypes.default.string,
    branch: _propTypes.default.string,
    filepath: _propTypes.default.string
  }),

  /** Pass a previously returned authentication object to bypass login. */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    token: _propTypes.default.object.isRequired,
    config: _propTypes.default.object.isRequired
  })
};
var _default = FileCard;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbGUvRmlsZUNhcmQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJhY3Rpb25zIiwidGV4dEFsaWduIiwicGFkZGluZ1JpZ2h0Iiwic3BhY2luZyIsIndpZHRoIiwiYWN0aW9uIiwibWFyZ2luTGVmdCIsIkZpbGVDYXJkIiwiYXV0aGVudGljYXRpb24iLCJyZXBvc2l0b3J5IiwiZmlsZSIsImNsYXNzZXMiLCJwcmV2aWV3Iiwic2V0UHJldmlldyIsImNvbnRlbnQiLCJtYXJrZG93biIsInNldE1hcmtkb3duIiwiY2hhbmdlZCIsImF2YXRhclVybCIsImF2YXRhcl91cmwiLCJvd25lciIsImFjY2VzcyIsInBlcm1pc3Npb25zIiwicHVzaCIsImJyYW5jaCIsImRlZmF1bHRfYnJhbmNoIiwicGF0aCIsImZ1bGxfbmFtZSIsInNhdmUiLCJjb25maXJtYXRpb24iLCJ3aW5kb3ciLCJjb25maXJtIiwiZmlsZXBhdGgiLCJkYW5nZXJvdXNseURlbGV0ZSIsImNsb3NlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJ1c2VybmFtZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJuYW1lIiwic2hhIiwidXNlciIsIm9iamVjdCIsInRva2VuIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVcsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxTQUFTLEVBQUUsT0FESjtBQUVQQyxNQUFBQSxZQUFZLFlBQUtILEtBQUssQ0FBQ0ksT0FBTixDQUFjLEdBQWQsQ0FBTCxPQUZMO0FBR1BDLE1BQUFBLEtBQUssRUFBRTtBQUhBLEtBRDRCO0FBTXJDQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEs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TEU7QUFNcEJQLElBQUFBLFFBQVEsRUFBRUksbUJBQVVHO0FBTkEsR0FBaEIsQ0FYYTs7QUFtQm5CO0FBQ0EvQixFQUFBQSxjQUFjLEVBQUU0QixtQkFBVUMsS0FBVixDQUFnQjtBQUM5Qk0sSUFBQUEsSUFBSSxFQUFFUCxtQkFBVVEsTUFBVixDQUFpQkosVUFETztBQUU5QkssSUFBQUEsS0FBSyxFQUFFVCxtQkFBVVEsTUFBVixDQUFpQkosVUFGTTtBQUc5Qk0sSUFBQUEsTUFBTSxFQUFFVixtQkFBVVEsTUFBVixDQUFpQko7QUFISyxHQUFoQjtBQXBCRyxDQUFyQjtlQTJCZWpDLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgUGFwZXIsIENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkQWN0aW9ucywgQXZhdGFyLCBJY29uQnV0dG9uLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBTYXZlLCBTYXZlT3V0bGluZWQsIFBhZ2V2aWV3LCBQYWdldmlld091dGxpbmVkLCBEZWxldGVTd2VlcE91dGxpbmVkLCBDYW5jZWxPdXRsaW5lZCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcbmltcG9ydCB7IEJsb2NrRWRpdGFibGUgfSBmcm9tICdtYXJrZG93bi10cmFuc2xhdGFibGUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGFjdGlvbnM6IHtcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgcGFkZGluZ1JpZ2h0OiBgJHt0aGVtZS5zcGFjaW5nKDEuNSl9cHhgLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIG1hcmdpbkxlZnQ6IGAwcHhgLFxuICB9LFxufSkpO1xuXG5mdW5jdGlvbiBGaWxlQ2FyZCh7XG4gIGF1dGhlbnRpY2F0aW9uLFxuICByZXBvc2l0b3J5LFxuICBmaWxlLFxufSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbWFya2Rvd24sIHNldE1hcmtkb3duXSA9IHVzZVN0YXRlKGZpbGUgPyBmaWxlLmNvbnRlbnQgOiAnJyk7XG4gIGNvbnN0IGNoYW5nZWQgPSAobWFya2Rvd24gIT09IChmaWxlICYmIGZpbGUuY29udGVudCkpO1xuICBjb25zdCBhdmF0YXJVcmwgPSByZXBvc2l0b3J5LmF2YXRhcl91cmwgfHwgcmVwb3NpdG9yeS5vd25lci5hdmF0YXJfdXJsO1xuICBjb25zdCBhY2Nlc3MgPSByZXBvc2l0b3J5LnBlcm1pc3Npb25zLnB1c2g7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNYXJrZG93bihmaWxlICYmIGZpbGUuY29udGVudCk7XG4gIH0sIFtmaWxlXSk7XG5cbiAgY29uc3QgYnJhbmNoID0gKGZpbGUgJiYgZmlsZS5icmFuY2gpID8gZmlsZS5icmFuY2ggOiByZXBvc2l0b3J5LmRlZmF1bHRfYnJhbmNoO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZEhlYWRlclxuICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXthdmF0YXJVcmx9IC8+fVxuICAgICAgICB0aXRsZT17PHN0cm9uZz57ZmlsZSAmJiBmaWxlLnBhdGh9PC9zdHJvbmc+fVxuICAgICAgICBzdWJoZWFkZXI9e3JlcG9zaXRvcnkuZnVsbF9uYW1lICsgJy8nICsgYnJhbmNofVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFBhcGVyPlxuICAgICAgICAgIDxCbG9ja0VkaXRhYmxlXG4gICAgICAgICAgICBwcmV2aWV3PXtwcmV2aWV3fVxuICAgICAgICAgICAgbWFya2Rvd249e21hcmtkb3dufVxuICAgICAgICAgICAgb25FZGl0PXtzZXRNYXJrZG93bn1cbiAgICAgICAgICAgIGVkaXRhYmxlPXshIWF1dGhlbnRpY2F0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufSBhcmlhLWxhYmVsPVwiUHJldmlld1wiIG9uQ2xpY2s9eygpID0+IHNldFByZXZpZXcoIXByZXZpZXcpfT5cbiAgICAgICAgICAgIHshcHJldmlldyA/IDxQYWdldmlldyAvPiA6IDxQYWdldmlld091dGxpbmVkIC8+fVxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTYXZlXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXshYWNjZXNzfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2hhbmdlZCkgZmlsZS5zYXZlKG1hcmtkb3duKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoYW5nZWQgPyA8U2F2ZSAvPiA6IDxTYXZlT3V0bGluZWQgLz59XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IWFjY2Vzc31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29uZmlybWF0aW9uID0gd2luZG93LmNvbmZpcm0oXG4gICAgICAgICAgICAgICAgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBEZWxldGUgJHtmaWxlLmZpbGVwYXRofT9gXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbmZpcm1hdGlvbikgZmlsZS5kYW5nZXJvdXNseURlbGV0ZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGVsZXRlU3dlZXBPdXRsaW5lZCAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9XCJDbG9zZSBSZXBvc2l0b3J5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2ZpbGUuY2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhbmNlbE91dGxpbmVkIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuRmlsZUNhcmQucHJvcFR5cGVzID0ge1xuICAvKiogUmVwb3NpdG9yeSB0cmVlX3VybCBjYW4gYmUgdXNlZCBpbiBwbGFjZSBvZiBibG9iQ29uZmlnICovXG4gIHJlcG9zaXRvcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb3duZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgYXZhdGFyX3VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhdmF0YXJfdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KS5pc1JlcXVpcmVkLFxuICAvKiogUGFzcyBhIHByZXZpb3VzbHkgcmV0dXJuZWQgZmlsZSBvYmplY3QgdG8gYnlwYXNzIHRoZSBzZWxlY3Rpb24uICovXG4gIGZpbGU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzaGE6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJyYW5jaDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWxlcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIC8qKiBQYXNzIGEgcHJldmlvdXNseSByZXR1cm5lZCBhdXRoZW50aWNhdGlvbiBvYmplY3QgdG8gYnlwYXNzIGxvZ2luLiAqL1xuICBhdXRoZW50aWNhdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdG9rZW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlQ2FyZDtcbiJdfQ==