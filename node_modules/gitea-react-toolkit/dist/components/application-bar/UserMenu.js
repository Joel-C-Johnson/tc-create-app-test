"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _useStyles = require("./useStyles");

var _ = require("..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function UserMenu() {
  var classes = (0, _useStyles.useStyles)();

  var _ref = (0, _react.useContext)(_.AuthenticationContext) || {},
      authentication = _ref.state,
      component = _ref.component;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var closeModal = function closeModal() {
    return setModal(false);
  };

  var openModal = function openModal() {
    return setModal(true);
  };

  (0, _react.useEffect)(function () {
    if (authentication && authentication.user) {
      closeModal();
    }
  }, [authentication]);
  var avatar = !(authentication && authentication.user) ? /*#__PURE__*/_react.default.createElement(_icons.AccountCircle, {
    fontSize: "large"
  }) : /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    "data-test": "user-menu-avatar",
    className: classes.avatar,
    src: authentication.user.avatar_url
  });
  var authenticationModal = !modal ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement(_core.Modal, {
    open: true,
    onClose: closeModal
  }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
    className: classes.modal
  }, component));
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "data-test": "user-menu-icon",
    onClick: openModal,
    color: "inherit"
  }, avatar), authenticationModal);
}

;
var _default = UserMenu;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci9Vc2VyTWVudS5qcyJdLCJuYW1lcyI6WyJVc2VyTWVudSIsImNsYXNzZXMiLCJBdXRoZW50aWNhdGlvbkNvbnRleHQiLCJhdXRoZW50aWNhdGlvbiIsInN0YXRlIiwiY29tcG9uZW50IiwibW9kYWwiLCJzZXRNb2RhbCIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJ1c2VyIiwiYXZhdGFyIiwiYXZhdGFyX3VybCIsImF1dGhlbnRpY2F0aW9uTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQU1BOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLE1BQU1DLE9BQU8sR0FBRywyQkFBaEI7O0FBRGtCLGFBRTJCLHVCQUFXQyx1QkFBWCxLQUFxQyxFQUZoRTtBQUFBLE1BRUhDLGNBRkcsUUFFVkMsS0FGVTtBQUFBLE1BRWFDLFNBRmIsUUFFYUEsU0FGYjs7QUFBQSxrQkFHUSxxQkFBUyxLQUFULENBSFI7QUFBQTtBQUFBLE1BR1hDLEtBSFc7QUFBQSxNQUdKQyxRQUhJOztBQUlsQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1ELFFBQVEsQ0FBQyxLQUFELENBQWQ7QUFBQSxHQUFuQjs7QUFDQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1GLFFBQVEsQ0FBQyxJQUFELENBQWQ7QUFBQSxHQUFsQjs7QUFFQSx3QkFBVSxZQUFNO0FBQ2QsUUFBSUosY0FBYyxJQUFJQSxjQUFjLENBQUNPLElBQXJDLEVBQTJDO0FBQ3pDRixNQUFBQSxVQUFVO0FBQ1g7QUFDRixHQUpELEVBSUcsQ0FBQ0wsY0FBRCxDQUpIO0FBTUEsTUFBTVEsTUFBTSxHQUFHLEVBQUVSLGNBQWMsSUFBSUEsY0FBYyxDQUFDTyxJQUFuQyxpQkFBMkMsNkJBQUMsb0JBQUQ7QUFBZSxJQUFBLFFBQVEsRUFBQztBQUF4QixJQUEzQyxnQkFDYiw2QkFBQyxZQUFEO0FBQVEsaUJBQVUsa0JBQWxCO0FBQXFDLElBQUEsU0FBUyxFQUFFVCxPQUFPLENBQUNVLE1BQXhEO0FBQWdFLElBQUEsR0FBRyxFQUFFUixjQUFjLENBQUNPLElBQWYsQ0FBb0JFO0FBQXpGLElBREY7QUFJQSxNQUFNQyxtQkFBbUIsR0FBSSxDQUFDUCxLQUFGLGdCQUFXLDJEQUFYLGdCQUMxQiw2QkFBQyxXQUFEO0FBQU8sSUFBQSxJQUFJLEVBQUUsSUFBYjtBQUFtQixJQUFBLE9BQU8sRUFBRUU7QUFBNUIsa0JBQ0UsNkJBQUMsV0FBRDtBQUFPLElBQUEsU0FBUyxFQUFFUCxPQUFPLENBQUNLO0FBQTFCLEtBQ0dELFNBREgsQ0FERixDQURGO0FBUUEsc0JBQ0UsdURBQ0UsNkJBQUMsZ0JBQUQ7QUFDRSxpQkFBVSxnQkFEWjtBQUVFLElBQUEsT0FBTyxFQUFFSSxTQUZYO0FBR0UsSUFBQSxLQUFLLEVBQUM7QUFIUixLQUtHRSxNQUxILENBREYsRUFRR0UsbUJBUkgsQ0FERjtBQVlEOztBQUFBO2VBRWNiLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEljb25CdXR0b24sXG4gIEF2YXRhcixcbiAgTW9kYWwsXG4gIFBhcGVyLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBBY2NvdW50Q2lyY2xlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcblxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi91c2VTdHlsZXMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db250ZXh0IH0gZnJvbSAnLi4nO1xuXG5mdW5jdGlvbiBVc2VyTWVudSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHN0YXRlOiBhdXRoZW50aWNhdGlvbiwgY29tcG9uZW50IH0gPSB1c2VDb250ZXh0KEF1dGhlbnRpY2F0aW9uQ29udGV4dCkgfHwge307XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoZmFsc2UpO1xuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiBzZXRNb2RhbCh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoZW50aWNhdGlvbiAmJiBhdXRoZW50aWNhdGlvbi51c2VyKSB7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9LCBbYXV0aGVudGljYXRpb25dKVxuXG4gIGNvbnN0IGF2YXRhciA9ICEoYXV0aGVudGljYXRpb24gJiYgYXV0aGVudGljYXRpb24udXNlcikgPyA8QWNjb3VudENpcmNsZSBmb250U2l6ZT1cImxhcmdlXCIgLz4gOiAoXG4gICAgPEF2YXRhciBkYXRhLXRlc3Q9XCJ1c2VyLW1lbnUtYXZhdGFyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gc3JjPXthdXRoZW50aWNhdGlvbi51c2VyLmF2YXRhcl91cmx9IC8+XG4gICk7XG5cbiAgY29uc3QgYXV0aGVudGljYXRpb25Nb2RhbCA9ICghbW9kYWwpID8gPD48Lz4gOiAoXG4gICAgPE1vZGFsIG9wZW49e3RydWV9IG9uQ2xvc2U9e2Nsb3NlTW9kYWx9PlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH0+XG4gICAgICAgIHtjb21wb25lbnR9XG4gICAgICA8L1BhcGVyPlxuICAgIDwvTW9kYWw+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgZGF0YS10ZXN0PVwidXNlci1tZW51LWljb25cIlxuICAgICAgICBvbkNsaWNrPXtvcGVuTW9kYWx9XG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICA+XG4gICAgICAgIHthdmF0YXJ9XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICB7YXV0aGVudGljYXRpb25Nb2RhbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJNZW51O1xuIl19