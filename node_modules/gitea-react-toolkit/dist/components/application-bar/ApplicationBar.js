"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

require("@material-ui/icons");

var _useStyles = require("./useStyles");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ApplicationBar(_ref) {
  var title = _ref.title,
      build = _ref.build,
      buttons = _ref.buttons,
      drawerMenu = _ref.drawerMenu,
      drawerMenuProps = _ref.drawerMenuProps,
      hideRepositoryMenu = _ref.hideRepositoryMenu;
  var classes = (0, _useStyles.useStyles)();

  var _useContext = (0, _react.useContext)(_.FileContext),
      file = _useContext.state;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.AppBar, {
    position: "static",
    className: classes.appBar
  }, /*#__PURE__*/_react.default.createElement(_core.Toolbar, {
    "data-test": "application-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.menuButton
  }, /*#__PURE__*/_react.default.createElement(_.DrawerMenu, drawerMenuProps, drawerMenu)), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "h6",
    color: "inherit",
    className: classes.grow,
    noWrap: true
  }, title, build && /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "caption",
    color: "inherit"
  }, " build ", build)), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    variant: "subtitle2",
    color: "inherit",
    className: classes.grow,
    noWrap: true
  }, file ? file.filepath : ''), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.grow
  }), buttons, !hideRepositoryMenu ? /*#__PURE__*/_react.default.createElement(_.RepositoryMenu, null) : null, /*#__PURE__*/_react.default.createElement(_.UserMenu, null))));
}

ApplicationBar.defaultProps = {
  drawerMenuProps: {},
  hideRepositoryMenu: false
};
ApplicationBar.propTypes = {
  /** The title string or jsx to be displayed. */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),

  /** Additional buttons to be displayed. */
  buttons: _propTypes.default.element,

  /** Component to render inside of the drawer menu. */
  drawerMenu: _propTypes.default.element,

  /** Drawer menu props. */
  drawerMenuProps: _propTypes.default.object
};
var _default = ApplicationBar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9BcHBsaWNhdGlvbkJhci5qcyJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvbkJhciIsInRpdGxlIiwiYnVpbGQiLCJidXR0b25zIiwiZHJhd2VyTWVudSIsImRyYXdlck1lbnVQcm9wcyIsImhpZGVSZXBvc2l0b3J5TWVudSIsImNsYXNzZXMiLCJGaWxlQ29udGV4dCIsImZpbGUiLCJzdGF0ZSIsInJvb3QiLCJhcHBCYXIiLCJtZW51QnV0dG9uIiwiZ3JvdyIsImZpbGVwYXRoIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiZWxlbWVudCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBS0E7O0FBR0E7O0FBQ0E7Ozs7Ozs7O0FBSUEsU0FBU0EsY0FBVCxPQU9HO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKREMsT0FJQyxRQUpEQSxPQUlDO0FBQUEsTUFIREMsVUFHQyxRQUhEQSxVQUdDO0FBQUEsTUFGREMsZUFFQyxRQUZEQSxlQUVDO0FBQUEsTUFEREMsa0JBQ0MsUUFEREEsa0JBQ0M7QUFDRCxNQUFNQyxPQUFPLEdBQUcsMkJBQWhCOztBQURDLG9CQUV1Qix1QkFBV0MsYUFBWCxDQUZ2QjtBQUFBLE1BRWNDLElBRmQsZUFFT0MsS0FGUDs7QUFJRCxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFSCxPQUFPLENBQUNJO0FBQXhCLGtCQUNFLDZCQUFDLFlBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBQyxRQURYO0FBRUUsSUFBQSxTQUFTLEVBQUVKLE9BQU8sQ0FBQ0s7QUFGckIsa0JBR0UsNkJBQUMsYUFBRDtBQUFTLGlCQUFVO0FBQW5CLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVMLE9BQU8sQ0FBQ007QUFBeEIsa0JBQ0UsNkJBQUMsWUFBRCxFQUFnQlIsZUFBaEIsRUFDR0QsVUFESCxDQURGLENBREYsZUFNRSw2QkFBQyxnQkFBRDtBQUFZLElBQUEsT0FBTyxFQUFDLElBQXBCO0FBQXlCLElBQUEsS0FBSyxFQUFDLFNBQS9CO0FBQXlDLElBQUEsU0FBUyxFQUFFRyxPQUFPLENBQUNPLElBQTVEO0FBQWtFLElBQUEsTUFBTTtBQUF4RSxLQUNHYixLQURILEVBRUdDLEtBQUssaUJBQUksNkJBQUMsZ0JBQUQ7QUFBWSxJQUFBLE9BQU8sRUFBQyxTQUFwQjtBQUE4QixJQUFBLEtBQUssRUFBQztBQUFwQyxnQkFBdURBLEtBQXZELENBRlosQ0FORixlQVVFLDZCQUFDLGdCQUFEO0FBQVksSUFBQSxPQUFPLEVBQUMsV0FBcEI7QUFBZ0MsSUFBQSxLQUFLLEVBQUMsU0FBdEM7QUFBZ0QsSUFBQSxTQUFTLEVBQUVLLE9BQU8sQ0FBQ08sSUFBbkU7QUFBeUUsSUFBQSxNQUFNO0FBQS9FLEtBQ0dMLElBQUksR0FBR0EsSUFBSSxDQUFDTSxRQUFSLEdBQW1CLEVBRDFCLENBVkYsZUFhRTtBQUFLLElBQUEsU0FBUyxFQUFFUixPQUFPLENBQUNPO0FBQXhCLElBYkYsRUFjR1gsT0FkSCxFQWVHLENBQUNHLGtCQUFELGdCQUFzQiw2QkFBQyxnQkFBRCxPQUF0QixHQUEyQyxJQWY5QyxlQWdCRSw2QkFBQyxVQUFELE9BaEJGLENBSEYsQ0FERixDQURGO0FBMEJEOztBQUVETixjQUFjLENBQUNnQixZQUFmLEdBQThCO0FBQzVCWCxFQUFBQSxlQUFlLEVBQUUsRUFEVztBQUU1QkMsRUFBQUEsa0JBQWtCLEVBQUU7QUFGUSxDQUE5QjtBQUtBTixjQUFjLENBQUNpQixTQUFmLEdBQTJCO0FBQ3pCO0FBQ0FoQixFQUFBQSxLQUFLLEVBQUVpQixtQkFBVUMsU0FBVixDQUFvQixDQUN6QkQsbUJBQVVFLE1BRGUsRUFFekJGLG1CQUFVRyxPQUZlLENBQXBCLENBRmtCOztBQU16QjtBQUNBbEIsRUFBQUEsT0FBTyxFQUFFZSxtQkFBVUcsT0FQTTs7QUFRekI7QUFDQWpCLEVBQUFBLFVBQVUsRUFBRWMsbUJBQVVHLE9BVEc7O0FBVXpCO0FBQ0FoQixFQUFBQSxlQUFlLEVBQUVhLG1CQUFVSTtBQVhGLENBQTNCO2VBY2V0QixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQXBwQmFyLFxuICBUb29sYmFyLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICcuL3VzZVN0eWxlcyc7XG5pbXBvcnQge1xuICBVc2VyTWVudSwgRHJhd2VyTWVudSwgUmVwb3NpdG9yeU1lbnUsIEZpbGVDb250ZXh0LFxufSBmcm9tICcuLic7XG5cbmZ1bmN0aW9uIEFwcGxpY2F0aW9uQmFyKHtcbiAgdGl0bGUsXG4gIGJ1aWxkLFxuICBidXR0b25zLFxuICBkcmF3ZXJNZW51LFxuICBkcmF3ZXJNZW51UHJvcHMsXG4gIGhpZGVSZXBvc2l0b3J5TWVudSxcbn0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHN0YXRlOiBmaWxlIH0gPSB1c2VDb250ZXh0KEZpbGVDb250ZXh0KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXBwQmFyXG4gICAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XG4gICAgICAgIDxUb29sYmFyIGRhdGEtdGVzdD1cImFwcGxpY2F0aW9uLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259PlxuICAgICAgICAgICAgPERyYXdlck1lbnUgey4uLmRyYXdlck1lbnVQcm9wc30+XG4gICAgICAgICAgICAgIHtkcmF3ZXJNZW51fVxuICAgICAgICAgICAgPC9EcmF3ZXJNZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fSBub1dyYXA+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICB7YnVpbGQgJiYgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cImluaGVyaXRcIiA+IGJ1aWxkIHtidWlsZH08L1R5cG9ncmFwaHk+fVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUyXCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9IG5vV3JhcD5cbiAgICAgICAgICAgIHtmaWxlID8gZmlsZS5maWxlcGF0aCA6ICcnfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fSAvPlxuICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgIHshaGlkZVJlcG9zaXRvcnlNZW51ID8gPFJlcG9zaXRvcnlNZW51IC8+IDogbnVsbH1cbiAgICAgICAgICA8VXNlck1lbnUgLz5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkFwcGxpY2F0aW9uQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHJhd2VyTWVudVByb3BzOiB7fSxcbiAgaGlkZVJlcG9zaXRvcnlNZW51OiBmYWxzZSxcbn07XG5cbkFwcGxpY2F0aW9uQmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqIFRoZSB0aXRsZSBzdHJpbmcgb3IganN4IHRvIGJlIGRpc3BsYXllZC4gKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gIF0pLFxuICAvKiogQWRkaXRpb25hbCBidXR0b25zIHRvIGJlIGRpc3BsYXllZC4gKi9cbiAgYnV0dG9uczogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIC8qKiBDb21wb25lbnQgdG8gcmVuZGVyIGluc2lkZSBvZiB0aGUgZHJhd2VyIG1lbnUuICovXG4gIGRyYXdlck1lbnU6IFByb3BUeXBlcy5lbGVtZW50LFxuICAvKiogRHJhd2VyIG1lbnUgcHJvcHMuICovXG4gIGRyYXdlck1lbnVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uQmFyO1xuIl19