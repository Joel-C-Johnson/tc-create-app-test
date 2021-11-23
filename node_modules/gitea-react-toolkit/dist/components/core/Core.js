"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Core(_ref) {
  var promise = _ref.promise,
      props = _ref.props,
      authenticate = _ref.authenticate;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      authentication = _useState2[0],
      setAuthentication = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      response = _useState4[0],
      setResponse = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useAuthentication = (0, _.useAuthentication)({
    config: props.config,
    onAuthentication: setAuthentication
  }),
      authenticationComponent = _useAuthentication.component;

  var needsAuthentication = authenticate && !authentication && authenticationComponent;

  var _promise = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _response, _error;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            _context.next = 4;
            return promise(_objectSpread(_objectSpread({}, props), authentication));

          case 4:
            _response = _context.sent;
            setResponse(_response);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            _error = {
              error: _context.t0.message
            };
            setResponse(_error);

          case 12:
            setLoading(false);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  })), [authentication, promise, props]);

  var responseComponent = /*#__PURE__*/_react.default.createElement("div", null);

  if (needsAuthentication && authenticationComponent) {
    return authenticationComponent;
  }

  if (response) {
    responseComponent = /*#__PURE__*/_react.default.createElement("div", null, JSON.stringify(response));
  } else if (loading) {
    responseComponent = /*#__PURE__*/_react.default.createElement("div", null);
  } else if (!response && typeof response !== 'undefined' && !loading) {
    responseComponent = 'No response';
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", null, "Props"), /*#__PURE__*/_react.default.createElement(_core.Paper, null, /*#__PURE__*/_react.default.createElement("div", null, JSON.stringify(props))), /*#__PURE__*/_react.default.createElement("h3", null, "Response"), /*#__PURE__*/_react.default.createElement(_core.Paper, null, responseComponent), /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "contained",
    color: "primary",
    onClick: _promise
  }, "Run"));
}

;
Core.propTypes = {
  props: _propTypes.default.object.isRequired,
  promise: _propTypes.default.func.isRequired,
  authenticate: _propTypes.default.bool
};
Core.defaultProps = {
  authenticate: false,
  confirm: false
};
var _default = Core;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvcmUvQ29yZS5qcyJdLCJuYW1lcyI6WyJDb3JlIiwicHJvbWlzZSIsInByb3BzIiwiYXV0aGVudGljYXRlIiwiYXV0aGVudGljYXRpb24iLCJzZXRBdXRoZW50aWNhdGlvbiIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbmZpZyIsIm9uQXV0aGVudGljYXRpb24iLCJhdXRoZW50aWNhdGlvbkNvbXBvbmVudCIsImNvbXBvbmVudCIsIm5lZWRzQXV0aGVudGljYXRpb24iLCJfcHJvbWlzZSIsIl9yZXNwb25zZSIsIl9lcnJvciIsImVycm9yIiwibWVzc2FnZSIsInJlc3BvbnNlQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImNvbmZpcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxJQUFULE9BSUc7QUFBQSxNQUhEQyxPQUdDLFFBSERBLE9BR0M7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxZQUNDLFFBRERBLFlBQ0M7O0FBQUEsa0JBQzJDLHFCQUFTLElBQVQsQ0FEM0M7QUFBQTtBQUFBLE1BQ01DLGNBRE47QUFBQSxNQUNzQkMsaUJBRHRCOztBQUFBLG1CQUUrQixzQkFGL0I7QUFBQTtBQUFBLE1BRU1DLFFBRk47QUFBQSxNQUVnQkMsV0FGaEI7O0FBQUEsbUJBRzZCLHFCQUFTLEtBQVQsQ0FIN0I7QUFBQTtBQUFBLE1BR01DLE9BSE47QUFBQSxNQUdlQyxVQUhmOztBQUFBLDJCQUk4Qyx5QkFBa0I7QUFBRUMsSUFBQUEsTUFBTSxFQUFFUixLQUFLLENBQUNRLE1BQWhCO0FBQXdCQyxJQUFBQSxnQkFBZ0IsRUFBRU47QUFBMUMsR0FBbEIsQ0FKOUM7QUFBQSxNQUlrQk8sdUJBSmxCLHNCQUlPQyxTQUpQOztBQUtELE1BQU1DLG1CQUFtQixHQUFJWCxZQUFZLElBQUksQ0FBQ0MsY0FBakIsSUFBbUNRLHVCQUFoRTs7QUFDQSxNQUFNRyxRQUFRLEdBQUcsOEZBQVk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXpCTixZQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBRnlCO0FBQUEsbUJBR0RSLE9BQU8saUNBQzFCQyxLQUQwQixHQUUxQkUsY0FGMEIsRUFITjs7QUFBQTtBQUduQlksWUFBQUEsU0FIbUI7QUFPekJULFlBQUFBLFdBQVcsQ0FBQ1MsU0FBRCxDQUFYO0FBUHlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU25CQyxZQUFBQSxNQVRtQixHQVNWO0FBQUVDLGNBQUFBLEtBQUssRUFBRSxZQUFNQztBQUFmLGFBVFU7QUFVekJaLFlBQUFBLFdBQVcsQ0FBQ1UsTUFBRCxDQUFYOztBQVZ5QjtBQVkzQlIsWUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFaMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBWixJQWFkLENBQUNMLGNBQUQsRUFBaUJILE9BQWpCLEVBQTBCQyxLQUExQixDQWJjLENBQWpCOztBQWVBLE1BQUlrQixpQkFBaUIsZ0JBQUcseUNBQXhCOztBQUVBLE1BQUlOLG1CQUFtQixJQUFJRix1QkFBM0IsRUFBb0Q7QUFDbEQsV0FBT0EsdUJBQVA7QUFDRDs7QUFFRCxNQUFJTixRQUFKLEVBQWM7QUFDWmMsSUFBQUEsaUJBQWlCLGdCQUFHLDBDQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWhCLFFBQWYsQ0FBTixDQUFwQjtBQUNELEdBRkQsTUFFTyxJQUFJRSxPQUFKLEVBQWE7QUFDbEJZLElBQUFBLGlCQUFpQixnQkFBRyx5Q0FBcEI7QUFDRCxHQUZNLE1BRUEsSUFBSSxDQUFDZCxRQUFELElBQWEsT0FBUUEsUUFBUixLQUFzQixXQUFuQyxJQUFrRCxDQUFDRSxPQUF2RCxFQUFnRTtBQUNyRVksSUFBQUEsaUJBQWlCLEdBQUcsYUFBcEI7QUFDRDs7QUFDRCxzQkFDRSx5RUFDRSxpREFERixlQUVFLDZCQUFDLFdBQUQscUJBQ0UsMENBQU1DLElBQUksQ0FBQ0MsU0FBTCxDQUFlcEIsS0FBZixDQUFOLENBREYsQ0FGRixlQUtFLG9EQUxGLGVBTUUsNkJBQUMsV0FBRCxRQUNHa0IsaUJBREgsQ0FORixlQVNFLDZCQUFDLFlBQUQ7QUFBUSxJQUFBLE9BQU8sRUFBQyxXQUFoQjtBQUE0QixJQUFBLEtBQUssRUFBQyxTQUFsQztBQUE0QyxJQUFBLE9BQU8sRUFBRUw7QUFBckQsV0FURixDQURGO0FBZUQ7O0FBQUE7QUFFRGYsSUFBSSxDQUFDdUIsU0FBTCxHQUFpQjtBQUNmckIsRUFBQUEsS0FBSyxFQUFFc0IsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRFQ7QUFFZnpCLEVBQUFBLE9BQU8sRUFBRXVCLG1CQUFVRyxJQUFWLENBQWVELFVBRlQ7QUFHZnZCLEVBQUFBLFlBQVksRUFBRXFCLG1CQUFVSTtBQUhULENBQWpCO0FBTUE1QixJQUFJLENBQUM2QixZQUFMLEdBQW9CO0FBQ2xCMUIsRUFBQUEsWUFBWSxFQUFFLEtBREk7QUFFbEIyQixFQUFBQSxPQUFPLEVBQUU7QUFGUyxDQUFwQjtlQUtlOUIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFwZXIsIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW1wb3J0IHsgdXNlQXV0aGVudGljYXRpb24gfSBmcm9tICcuLic7XG5cbmZ1bmN0aW9uIENvcmUoe1xuICBwcm9taXNlLFxuICBwcm9wcyxcbiAgYXV0aGVudGljYXRlLFxufSkge1xuICBjb25zdCBbYXV0aGVudGljYXRpb24sIHNldEF1dGhlbnRpY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBjb21wb25lbnQ6IGF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gPSB1c2VBdXRoZW50aWNhdGlvbih7IGNvbmZpZzogcHJvcHMuY29uZmlnLCBvbkF1dGhlbnRpY2F0aW9uOiBzZXRBdXRoZW50aWNhdGlvbiB9KTtcbiAgY29uc3QgbmVlZHNBdXRoZW50aWNhdGlvbiA9IChhdXRoZW50aWNhdGUgJiYgIWF1dGhlbnRpY2F0aW9uICYmIGF1dGhlbnRpY2F0aW9uQ29tcG9uZW50KTtcbiAgY29uc3QgX3Byb21pc2UgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCBfcmVzcG9uc2UgPSBhd2FpdCBwcm9taXNlKHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIC4uLmF1dGhlbnRpY2F0aW9uLFxuICAgICAgfSk7XG4gICAgICBzZXRSZXNwb25zZShfcmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBfZXJyb3IgPSB7IGVycm9yOiBlcnJvci5tZXNzYWdlIH07XG4gICAgICBzZXRSZXNwb25zZShfZXJyb3IpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW2F1dGhlbnRpY2F0aW9uLCBwcm9taXNlLCBwcm9wc10pO1xuXG4gIGxldCByZXNwb25zZUNvbXBvbmVudCA9IDxkaXYgLz47XG5cbiAgaWYgKG5lZWRzQXV0aGVudGljYXRpb24gJiYgYXV0aGVudGljYXRpb25Db21wb25lbnQpIHtcbiAgICByZXR1cm4gYXV0aGVudGljYXRpb25Db21wb25lbnQ7XG4gIH1cblxuICBpZiAocmVzcG9uc2UpIHtcbiAgICByZXNwb25zZUNvbXBvbmVudCA9IDxkaXY+e0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlKX08L2Rpdj47XG4gIH0gZWxzZSBpZiAobG9hZGluZykge1xuICAgIHJlc3BvbnNlQ29tcG9uZW50ID0gPGRpdi8+O1xuICB9IGVsc2UgaWYgKCFyZXNwb25zZSAmJiB0eXBlb2YgKHJlc3BvbnNlKSAhPT0gJ3VuZGVmaW5lZCcgJiYgIWxvYWRpbmcpIHtcbiAgICByZXNwb25zZUNvbXBvbmVudCA9ICdObyByZXNwb25zZSc7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgzPlByb3BzPC9oMz5cbiAgICAgIDxQYXBlcj5cbiAgICAgICAgPGRpdj57SlNPTi5zdHJpbmdpZnkocHJvcHMpfTwvZGl2PlxuICAgICAgPC9QYXBlcj5cbiAgICAgIDxoMz5SZXNwb25zZTwvaDM+XG4gICAgICA8UGFwZXI+XG4gICAgICAgIHtyZXNwb25zZUNvbXBvbmVudH1cbiAgICAgIDwvUGFwZXI+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj0ncHJpbWFyeScgb25DbGljaz17X3Byb21pc2V9PlxuICAgICAgICBSdW5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuQ29yZS5wcm9wVHlwZXMgPSB7XG4gIHByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHByb21pc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGF1dGhlbnRpY2F0ZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db3JlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0aGVudGljYXRlOiBmYWxzZSxcbiAgY29uZmlybTogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3JlOyJdfQ==