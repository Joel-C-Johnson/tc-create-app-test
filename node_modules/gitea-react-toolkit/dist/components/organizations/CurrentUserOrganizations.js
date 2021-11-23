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

var _ = require("../");

var _core2 = require("../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      overflow: 'auto',
      height: '100%'
    }
  };
});

function CurrentUserOrganizations(_ref) {
  var onOrganization = _ref.onOrganization,
      authentication = _ref.authentication,
      organization = _ref.organization,
      _ref$messages = _ref.messages;
  _ref$messages = _ref$messages === void 0 ? {} : _ref$messages;
  var _ref$messages$primary = _ref$messages.primaryError,
      primaryError = _ref$messages$primary === void 0 ? 'No Organizations' : _ref$messages$primary,
      _ref$messages$seconda = _ref$messages.secondaryError,
      secondaryError = _ref$messages$seconda === void 0 ? 'You are not currently a member of any organizations.' : _ref$messages$seconda;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      organizations = _useState4[0],
      setOrganizations = _useState4[1];

  var getData = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var userOrgs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(authentication && authentication.config)) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return (0, _core2.getCurrentUserOrgs)({
              config: authentication.config
            });

          case 3:
            userOrgs = _context.sent;

            if (userOrgs) {
              setOrganizations(userOrgs);
            } else {
              setOrganizations([]);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [authentication]);
  (0, _react.useEffect)(function () {
    if (authentication) {
      setLoading(true);
      getData().finally(function () {
        setLoading(false);
      });
    }
  }, [authentication, getData]);
  return authentication && (organization || organizations && organizations.length > 0) ? /*#__PURE__*/_react.default.createElement(_core.List, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_.Organizations, {
    organization: organization,
    organizations: organizations,
    onOrganization: onOrganization,
    config: authentication.config,
    messages: {
      primaryError: primaryError,
      secondaryError: secondaryError
    }
  })) : !loading && (!organizations || organizations.length == 0) ? /*#__PURE__*/_react.default.createElement(_core.Typography, {
    "data-test": "login-error-text",
    component: "p",
    style: {
      color: 'red'
    }
  }, "No organizations found for this account") : loading && /*#__PURE__*/_react.default.createElement("center", null, /*#__PURE__*/_react.default.createElement(_core.CircularProgress, null));
}

CurrentUserOrganizations.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    token: _propTypes.default.object.isRequired,
    config: _propTypes.default.object.isRequired,
    remember: _propTypes.default.bool
  }),

  /** The currently selected organization */
  organization: _propTypes.default.shape({
    avatar_url: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    full_name: _propTypes.default.string.isRequired,
    id: _propTypes.default.number.isRequired,
    location: _propTypes.default.string.isRequired,
    username: _propTypes.default.string.isRequired,
    visibility: _propTypes.default.string.isRequired,
    website: _propTypes.default.string.isRequired
  }),

  /** Function to call when organization is selected. */
  onOrganization: _propTypes.default.func.isRequired,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  }),
  messages: _propTypes.default.shape({
    primaryError: _propTypes.default.string,
    secondaryError: _propTypes.default.string
  })
};
var _default = CurrentUserOrganizations;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29yZ2FuaXphdGlvbnMvQ3VycmVudFVzZXJPcmdhbml6YXRpb25zLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInJvb3QiLCJvdmVyZmxvdyIsImhlaWdodCIsIkN1cnJlbnRVc2VyT3JnYW5pemF0aW9ucyIsIm9uT3JnYW5pemF0aW9uIiwiYXV0aGVudGljYXRpb24iLCJvcmdhbml6YXRpb24iLCJtZXNzYWdlcyIsInByaW1hcnlFcnJvciIsInNlY29uZGFyeUVycm9yIiwiY2xhc3NlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib3JnYW5pemF0aW9ucyIsInNldE9yZ2FuaXphdGlvbnMiLCJnZXREYXRhIiwiY29uZmlnIiwidXNlck9yZ3MiLCJmaW5hbGx5IiwibGVuZ3RoIiwiY29sb3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInVzZXIiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwidG9rZW4iLCJyZW1lbWJlciIsImJvb2wiLCJhdmF0YXJfdXJsIiwic3RyaW5nIiwiZGVzY3JpcHRpb24iLCJmdWxsX25hbWUiLCJpZCIsIm51bWJlciIsImxvY2F0aW9uIiwidXNlcm5hbWUiLCJ2aXNpYmlsaXR5Iiwid2Vic2l0ZSIsImZ1bmMiLCJzZXJ2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUNBOztBQUlBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVc7QUFBQSxTQUFPO0FBQ2xDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsUUFBUSxFQUFFLE1BRE47QUFFSkMsTUFBQUEsTUFBTSxFQUFFO0FBRko7QUFENEIsR0FBUDtBQUFBLENBQVgsQ0FBbEI7O0FBT0EsU0FBU0Msd0JBQVQsT0FRRztBQUFBLE1BUERDLGNBT0MsUUFQREEsY0FPQztBQUFBLE1BTkRDLGNBTUMsUUFOREEsY0FNQztBQUFBLE1B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QixFQUFBQSxZQUFZLEVBQUVnQixtQkFBVUMsS0FBVixDQUFnQjtBQUM1Qk8sSUFBQUEsVUFBVSxFQUFFUixtQkFBVVMsTUFBVixDQUFpQkwsVUFERDtBQUU1Qk0sSUFBQUEsV0FBVyxFQUFFVixtQkFBVVMsTUFBVixDQUFpQkwsVUFGRjtBQUc1Qk8sSUFBQUEsU0FBUyxFQUFFWCxtQkFBVVMsTUFBVixDQUFpQkwsVUFIQTtBQUk1QlEsSUFBQUEsRUFBRSxFQUFFWixtQkFBVWEsTUFBVixDQUFpQlQsVUFKTztBQUs1QlUsSUFBQUEsUUFBUSxFQUFFZCxtQkFBVVMsTUFBVixDQUFpQkwsVUFMQztBQU01QlcsSUFBQUEsUUFBUSxFQUFFZixtQkFBVVMsTUFBVixDQUFpQkwsVUFOQztBQU81QlksSUFBQUEsVUFBVSxFQUFFaEIsbUJBQVVTLE1BQVYsQ0FBaUJMLFVBUEQ7QUFRNUJhLElBQUFBLE9BQU8sRUFBRWpCLG1CQUFVUyxNQUFWLENBQWlCTDtBQVJFLEdBQWhCLENBVHFCOztBQW1CbkM7QUFDQXRCLEVBQUFBLGNBQWMsRUFBRWtCLG1CQUFVa0IsSUFBVixDQUFlZCxVQXBCSTs7QUFxQm5DO0FBQ0FWLEVBQUFBLE1BQU0sRUFBRU0sbUJBQVVDLEtBQVYsQ0FBZ0I7QUFBRWtCLElBQUFBLE1BQU0sRUFBRW5CLG1CQUFVUyxNQUFWLENBQWlCTDtBQUEzQixHQUFoQixDQXRCMkI7QUF1Qm5DbkIsRUFBQUEsUUFBUSxFQUFFZSxtQkFBVUMsS0FBVixDQUFnQjtBQUN4QmYsSUFBQUEsWUFBWSxFQUFFYyxtQkFBVVMsTUFEQTtBQUV4QnRCLElBQUFBLGNBQWMsRUFBRWEsbUJBQVVTO0FBRkYsR0FBaEI7QUF2QnlCLENBQXJDO2VBNkJlNUIsd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIExpc3QsIENpcmN1bGFyUHJvZ3Jlc3MsIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW1wb3J0IHsgT3JnYW5pemF0aW9ucyB9IGZyb20gJy4uLyc7XG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlck9yZ3MgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICByb290OiB7XG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gQ3VycmVudFVzZXJPcmdhbml6YXRpb25zKHtcbiAgb25Pcmdhbml6YXRpb24sXG4gIGF1dGhlbnRpY2F0aW9uLFxuICBvcmdhbml6YXRpb24sXG4gIG1lc3NhZ2VzOiB7XG4gICAgcHJpbWFyeUVycm9yID0gJ05vIE9yZ2FuaXphdGlvbnMnLFxuICAgIHNlY29uZGFyeUVycm9yID0gJ1lvdSBhcmUgbm90IGN1cnJlbnRseSBhIG1lbWJlciBvZiBhbnkgb3JnYW5pemF0aW9ucy4nLFxuICB9ID0ge30sXG59KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3JnYW5pemF0aW9ucywgc2V0T3JnYW5pemF0aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZ2V0RGF0YSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoYXV0aGVudGljYXRpb24gJiYgYXV0aGVudGljYXRpb24uY29uZmlnKSB7XG4gICAgICBjb25zdCB1c2VyT3JncyA9IGF3YWl0IGdldEN1cnJlbnRVc2VyT3Jncyh7IGNvbmZpZzogYXV0aGVudGljYXRpb24uY29uZmlnIH0pO1xuXG4gICAgICBpZiAodXNlck9yZ3MpIHtcbiAgICAgICAgc2V0T3JnYW5pemF0aW9ucyh1c2VyT3Jncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRPcmdhbml6YXRpb25zKFtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthdXRoZW50aWNhdGlvbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZ2V0RGF0YSgpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2F1dGhlbnRpY2F0aW9uLCBnZXREYXRhXSk7XG4gIHJldHVybiAoYXV0aGVudGljYXRpb24gJiYgKG9yZ2FuaXphdGlvbiB8fCAob3JnYW5pemF0aW9ucyAmJiBvcmdhbml6YXRpb25zLmxlbmd0aCA+IDApKSkgPyAoXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPE9yZ2FuaXphdGlvbnNcbiAgICAgICAgb3JnYW5pemF0aW9uPXtvcmdhbml6YXRpb259XG4gICAgICAgIG9yZ2FuaXphdGlvbnM9e29yZ2FuaXphdGlvbnN9XG4gICAgICAgIG9uT3JnYW5pemF0aW9uPXtvbk9yZ2FuaXphdGlvbn1cbiAgICAgICAgY29uZmlnPXthdXRoZW50aWNhdGlvbi5jb25maWd9XG4gICAgICAgIG1lc3NhZ2VzPXt7IHByaW1hcnlFcnJvciwgc2Vjb25kYXJ5RXJyb3IgfX1cbiAgICAgIC8+XG4gICAgPC9MaXN0PlxuICApIDogIWxvYWRpbmcgJiYgKCFvcmdhbml6YXRpb25zIHx8IG9yZ2FuaXphdGlvbnMubGVuZ3RoID09IDApID8gKFxuICAgIDxUeXBvZ3JhcGh5IGRhdGEtdGVzdD1cImxvZ2luLWVycm9yLXRleHRcIiBjb21wb25lbnQ9XCJwXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxuICAgICAgTm8gb3JnYW5pemF0aW9ucyBmb3VuZCBmb3IgdGhpcyBhY2NvdW50XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApXG4gICAgICA6IGxvYWRpbmcgJiYgKFxuICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XG4gICAgICAgIDwvY2VudGVyPlxuICAgICAgKTtcbn1cblxuQ3VycmVudFVzZXJPcmdhbml6YXRpb25zLnByb3BUeXBlcyA9IHtcbiAgLyoqIFBhc3MgYSBwcmV2aW91c2x5IHJldHVybmVkIGF1dGhlbnRpY2F0aW9uIG9iamVjdCB0byBieXBhc3MgbG9naW4uICovXG4gIGF1dGhlbnRpY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0b2tlbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHJlbWVtYmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgfSksXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIG9yZ2FuaXphdGlvbiAqL1xuICBvcmdhbml6YXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXZhdGFyX3VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZnVsbF9uYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHVzZXJuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdmlzaWJpbGl0eTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHdlYnNpdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gb3JnYW5pemF0aW9uIGlzIHNlbGVjdGVkLiAqL1xuICBvbk9yZ2FuaXphdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqIENvbmZpZ3VyYXRpb24gcmVxdWlyZWQgaWYgcGF0aHMgYXJlIHByb3ZpZGVkIGFzIFVSTC4gKi9cbiAgY29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoeyBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9KSxcbiAgbWVzc2FnZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcHJpbWFyeUVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlY29uZGFyeUVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRVc2VyT3JnYW5pemF0aW9ucztcbiJdfQ==