"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../..");

var _core = require("../../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useOrganization(_ref) {
  var organization = _ref.organization,
      config = _ref.config,
      onOrganization = _ref.onOrganization,
      authentication = _ref.authentication;
  var update = (0, _react.useCallback)(function (_organization) {
    onOrganization(_organization);
  }, [onOrganization]);
  var list = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _organizations;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _core.getCurrentUserOrgs)({
              config: config
            });

          case 2:
            _organizations = _context.sent;
            return _context.abrupt("return", _organizations);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [config]);
  var close = (0, _react.useCallback)(function () {
    update();
  }, [update]);
  var componentProps = {
    config: config || authentication.config,
    authentication: authentication,
    organization: organization,
    onOrganization: update
  };
  var components = {
    view: /*#__PURE__*/_react.default.createElement(_.Organization, componentProps),
    list: /*#__PURE__*/_react.default.createElement(_.CurrentUserOrganizations, componentProps)
  };
  var component = organization ? components.view : components.list;
  return {
    state: organization,
    actions: {
      update: update,
      list: list,
      close: close
    },
    component: component,
    components: components,
    config: config,
    authentication: authentication
  };
}

;
useOrganization.propTypes = {
  /** Organization data to render, if url not provided. */
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

  /** Pass a previously returned authentication object to bypass login. */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    token: _propTypes.default.object.isRequired,
    config: _propTypes.default.object.isRequired,
    remember: _propTypes.default.bool
  }),

  /** Organizations data array to render, if urls not provided. */
  organizations: _propTypes.default.array,

  /** Configuration to pass through to the Search/Organizations component. */
  config: _propTypes.default.shape({
    /** Configuration required for Search or Organizations if paths are provided as URL. */
    server: _propTypes.default.string
  }).isRequired
};
var _default = useOrganization;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29yZ2FuaXphdGlvbi91c2VPcmdhbml6YXRpb24uanMiXSwibmFtZXMiOlsidXNlT3JnYW5pemF0aW9uIiwib3JnYW5pemF0aW9uIiwiY29uZmlnIiwib25Pcmdhbml6YXRpb24iLCJhdXRoZW50aWNhdGlvbiIsInVwZGF0ZSIsIl9vcmdhbml6YXRpb24iLCJsaXN0IiwiX29yZ2FuaXphdGlvbnMiLCJjbG9zZSIsImNvbXBvbmVudFByb3BzIiwiY29tcG9uZW50cyIsInZpZXciLCJjb21wb25lbnQiLCJzdGF0ZSIsImFjdGlvbnMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImF2YXRhcl91cmwiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJmdWxsX25hbWUiLCJpZCIsIm51bWJlciIsImxvY2F0aW9uIiwidXNlcm5hbWUiLCJ2aXNpYmlsaXR5Iiwid2Vic2l0ZSIsImZ1bmMiLCJ1c2VyIiwib2JqZWN0IiwidG9rZW4iLCJyZW1lbWJlciIsImJvb2wiLCJvcmdhbml6YXRpb25zIiwiYXJyYXkiLCJzZXJ2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxlQUFULE9BS0c7QUFBQSxNQUpEQyxZQUlDLFFBSkRBLFlBSUM7QUFBQSxNQUhEQyxNQUdDLFFBSERBLE1BR0M7QUFBQSxNQUZEQyxjQUVDLFFBRkRBLGNBRUM7QUFBQSxNQUREQyxjQUNDLFFBRERBLGNBQ0M7QUFDRCxNQUFNQyxNQUFNLEdBQUcsd0JBQVksVUFBQ0MsYUFBRCxFQUFtQjtBQUM1Q0gsSUFBQUEsY0FBYyxDQUFDRyxhQUFELENBQWQ7QUFDRCxHQUZjLEVBRVosQ0FBQ0gsY0FBRCxDQUZZLENBQWY7QUFJQSxNQUFNSSxJQUFJLEdBQUcsOEZBQVk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ00sOEJBQW1C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QixFQUdMQztBQTNCdUIsQ0FBNUI7ZUE4QmVyQixlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgT3JnYW5pemF0aW9uLCBDdXJyZW50VXNlck9yZ2FuaXphdGlvbnMgfSBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlck9yZ3MgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuZnVuY3Rpb24gdXNlT3JnYW5pemF0aW9uKHtcbiAgb3JnYW5pemF0aW9uLFxuICBjb25maWcsXG4gIG9uT3JnYW5pemF0aW9uLFxuICBhdXRoZW50aWNhdGlvbixcbn0pIHtcbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soKF9vcmdhbml6YXRpb24pID0+IHtcbiAgICBvbk9yZ2FuaXphdGlvbihfb3JnYW5pemF0aW9uKTtcbiAgfSwgW29uT3JnYW5pemF0aW9uXSk7XG5cbiAgY29uc3QgbGlzdCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBfb3JnYW5pemF0aW9ucyA9IGF3YWl0IGdldEN1cnJlbnRVc2VyT3Jncyh7IGNvbmZpZyB9KTtcbiAgICByZXR1cm4gX29yZ2FuaXphdGlvbnM7XG4gIH0sIFtjb25maWddKTtcblxuICBjb25zdCBjbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB1cGRhdGUoKTtcbiAgfSwgW3VwZGF0ZV0pO1xuXG4gIGNvbnN0IGNvbXBvbmVudFByb3BzID0ge1xuICAgIGNvbmZpZzogY29uZmlnIHx8IGF1dGhlbnRpY2F0aW9uLmNvbmZpZyxcbiAgICBhdXRoZW50aWNhdGlvbixcbiAgICBvcmdhbml6YXRpb24sXG4gICAgb25Pcmdhbml6YXRpb246IHVwZGF0ZSxcbiAgfTtcblxuICBjb25zdCBjb21wb25lbnRzID0ge1xuICAgIHZpZXc6ICg8T3JnYW5pemF0aW9uIHsuLi5jb21wb25lbnRQcm9wc30gLz4pLFxuICAgIGxpc3Q6ICg8Q3VycmVudFVzZXJPcmdhbml6YXRpb25zIHsuLi5jb21wb25lbnRQcm9wc30gLz4pLFxuICB9O1xuXG4gIGNvbnN0IGNvbXBvbmVudCA9IG9yZ2FuaXphdGlvbiA/IGNvbXBvbmVudHMudmlldyA6IGNvbXBvbmVudHMubGlzdDtcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiBvcmdhbml6YXRpb24sXG4gICAgYWN0aW9uczoge1xuICAgICAgdXBkYXRlLFxuICAgICAgbGlzdCxcbiAgICAgIGNsb3NlLFxuICAgIH0sXG4gICAgY29tcG9uZW50LFxuICAgIGNvbXBvbmVudHMsXG4gICAgY29uZmlnLFxuICAgIGF1dGhlbnRpY2F0aW9uLFxuICB9O1xufTtcblxudXNlT3JnYW5pemF0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqIE9yZ2FuaXphdGlvbiBkYXRhIHRvIHJlbmRlciwgaWYgdXJsIG5vdCBwcm92aWRlZC4gKi9cbiAgb3JnYW5pemF0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGF2YXRhcl91cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGZ1bGxfbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHZpc2liaWxpdHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB3ZWJzaXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLFxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIG9yZ2FuaXphdGlvbiBpcyBzZWxlY3RlZC4gKi9cbiAgb25Pcmdhbml6YXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8qKiBQYXNzIGEgcHJldmlvdXNseSByZXR1cm5lZCBhdXRoZW50aWNhdGlvbiBvYmplY3QgdG8gYnlwYXNzIGxvZ2luLiAqL1xuICBhdXRoZW50aWNhdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdG9rZW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICByZW1lbWJlcjogUHJvcFR5cGVzLmJvb2wsXG4gIH0pLFxuICAvKiogT3JnYW5pemF0aW9ucyBkYXRhIGFycmF5IHRvIHJlbmRlciwgaWYgdXJscyBub3QgcHJvdmlkZWQuICovXG4gIG9yZ2FuaXphdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqIENvbmZpZ3VyYXRpb24gdG8gcGFzcyB0aHJvdWdoIHRvIHRoZSBTZWFyY2gvT3JnYW5pemF0aW9ucyBjb21wb25lbnQuICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAvKiogQ29uZmlndXJhdGlvbiByZXF1aXJlZCBmb3IgU2VhcmNoIG9yIE9yZ2FuaXphdGlvbnMgaWYgcGF0aHMgYXJlIHByb3ZpZGVkIGFzIFVSTC4gKi9cbiAgICBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VPcmdhbml6YXRpb247XG4iXX0=