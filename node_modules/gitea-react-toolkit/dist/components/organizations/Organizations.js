"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Organizations(_ref) {
  var url = _ref.url,
      _ref$organization = _ref.organization,
      organization = _ref$organization === void 0 ? {} : _ref$organization,
      urls = _ref.urls,
      organizations = _ref.organizations,
      onOrganization = _ref.onOrganization,
      config = _ref.config,
      _ref$messages = _ref.messages;
  _ref$messages = _ref$messages === void 0 ? {} : _ref$messages;
  var _ref$messages$primary = _ref$messages.primaryError,
      primaryError = _ref$messages$primary === void 0 ? 'No organizations' : _ref$messages$primary,
      _ref$messages$seconda = _ref$messages.secondaryError,
      secondaryError = _ref$messages$seconda === void 0 ? 'Please provide valid organization objects or urls.' : _ref$messages$seconda;
  var updateOrganization = (0, _react.useCallback)(function (repo) {
    onOrganization(repo);
  }, [onOrganization]);
  var components = [];

  if (organizations && organizations.length > 0) {
    components = organizations.map(function (_organization) {
      return /*#__PURE__*/_react.default.createElement(_.Organization, {
        key: _organization.id,
        selected: organization && _organization.id === organization.id,
        organization: _organization,
        onOrganization: updateOrganization,
        config: config
      });
    });
  } else if (urls && urls.length > 0) {
    components = urls.map(function (_url, index) {
      return /*#__PURE__*/_react.default.createElement(_.Organization, {
        selected: _url === url,
        key: index,
        url: _url,
        onOrganization: updateOrganization,
        config: config,
        messages: {
          primaryError: primaryError,
          secondaryError: secondaryError
        }
      });
    });
  } else {
    components = [/*#__PURE__*/_react.default.createElement(_.Organization, {
      key: 0,
      organization: organization,
      config: config,
      messages: {
        primaryError: primaryError,
        secondaryError: secondaryError
      }
    })];
  }

  return /*#__PURE__*/_react.default.createElement(_core.List, null, components);
}

Organizations.propTypes = {
  /** Url to get organization data, if organization data is not provided. */
  url: _propTypes.default.string,

  /** Urls array to get organization data, if organization data is not provided. */
  urls: _propTypes.default.array,

  /** Organizations data array to render, if urls not provided. */
  organizations: _propTypes.default.array,

  /** Function to call when organization is selected. */
  onOrganization: _propTypes.default.func.isRequired,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
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
  messages: _propTypes.default.shape({
    primaryError: _propTypes.default.string,
    secondaryError: _propTypes.default.string
  })
};
var _default = Organizations;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29yZ2FuaXphdGlvbnMvT3JnYW5pemF0aW9ucy5qcyJdLCJuYW1lcyI6WyJPcmdhbml6YXRpb25zIiwidXJsIiwib3JnYW5pemF0aW9uIiwidXJscyIsIm9yZ2FuaXphdGlvbnMiLCJvbk9yZ2FuaXphdGlvbiIsImNvbmZpZyIsIm1lc3NhZ2VzIiwicHJpbWFyeUVycm9yIiwic2Vjb25kYXJ5RXJyb3IiLCJ1cGRhdGVPcmdhbml6YXRpb24iLCJyZXBvIiwiY29tcG9uZW50cyIsImxlbmd0aCIsIm1hcCIsIl9vcmdhbml6YXRpb24iLCJpZCIsIl91cmwiLCJpbmRleCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImFycmF5IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzaGFwZSIsInNlcnZlciIsImF2YXRhcl91cmwiLCJkZXNjcmlwdGlvbiIsImZ1bGxfbmFtZSIsIm51bWJlciIsImxvY2F0aW9uIiwidXNlcm5hbWUiLCJ2aXNpYmlsaXR5Iiwid2Vic2l0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBU0EsYUFBVCxPQVdHO0FBQUEsTUFWREMsR0FVQyxRQVZEQSxHQVVDO0FBQUEsK0JBVERDLFlBU0M7QUFBQSxNQVREQSxZQVNDLGtDQVRjLEVBU2Q7QUFBQSxNQVJEQyxJQVFDLFFBUkRBLElBUUM7QUFBQSxNQVBEQyxhQU9DLFFBUERBLGFBT0M7QUFBQSxNQU5EQyxjQU1DLFFBTkRBLGNBTUM7QUFBQSxNQUxEQyxNQUtDLFFBTERBLE1BS0M7QUFBQSwyQkFKREMsUUFJQztBQUFBLDZDQURHLEVBQ0g7QUFBQSw0Q0FIQ0MsWUFHRDtBQUFBLE1BSENBLFlBR0Qsc0NBSGdCLGtCQUdoQjtBQUFBLDRDQUZDQyxjQUVEO0FBQUEsTUFGQ0EsY0FFRCxzQ0FGa0Isb0RBRWxCO0FBQ0QsTUFBTUMsa0JBQWtCLEdBQUcsd0JBQ3pCLFVBQUNDLElB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TzVCUyxJQUFBQSxVQUFVLEVBQUViLG1CQUFVQyxNQUFWLENBQWlCRyxVQVBEO0FBUTVCVSxJQUFBQSxPQUFPLEVBQUVkLG1CQUFVQyxNQUFWLENBQWlCRztBQVJFLEdBQWhCLENBWlU7QUFzQnhCakIsRUFBQUEsUUFBUSxFQUFFYSxtQkFBVUssS0FBVixDQUFnQjtBQUN4QmpCLElBQUFBLFlBQVksRUFBRVksbUJBQVVDLE1BREE7QUFFeEJaLElBQUFBLGNBQWMsRUFBRVcsbUJBQVVDO0FBRkYsR0FBaEI7QUF0QmMsQ0FBMUI7ZUE0QmVyQixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBPcmdhbml6YXRpb24gfSBmcm9tICcuLi8nO1xuXG5mdW5jdGlvbiBPcmdhbml6YXRpb25zKHtcbiAgdXJsLFxuICBvcmdhbml6YXRpb24gPSB7fSxcbiAgdXJscyxcbiAgb3JnYW5pemF0aW9ucyxcbiAgb25Pcmdhbml6YXRpb24sXG4gIGNvbmZpZyxcbiAgbWVzc2FnZXM6IHtcbiAgICBwcmltYXJ5RXJyb3IgPSAnTm8gb3JnYW5pemF0aW9ucycsXG4gICAgc2Vjb25kYXJ5RXJyb3IgPSAnUGxlYXNlIHByb3ZpZGUgdmFsaWQgb3JnYW5pemF0aW9uIG9iamVjdHMgb3IgdXJscy4nLFxuICB9ID0ge30sXG59KSB7XG4gIGNvbnN0IHVwZGF0ZU9yZ2FuaXphdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgIChyZXBvKSA9PiB7XG4gICAgICBvbk9yZ2FuaXphdGlvbihyZXBvKTtcbiAgICB9LFxuICAgIFtvbk9yZ2FuaXphdGlvbl1cbiAgKTtcblxuICBsZXQgY29tcG9uZW50cyA9IFtdO1xuXG4gIGlmIChvcmdhbml6YXRpb25zICYmIG9yZ2FuaXphdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIGNvbXBvbmVudHMgPSBvcmdhbml6YXRpb25zLm1hcCgoX29yZ2FuaXphdGlvbikgPT4gKFxuICAgICAgPE9yZ2FuaXphdGlvblxuICAgICAgICBrZXk9e19vcmdhbml6YXRpb24uaWR9XG4gICAgICAgIHNlbGVjdGVkPXtvcmdhbml6YXRpb24gJiYgX29yZ2FuaXphdGlvbi5pZCA9PT0gb3JnYW5pemF0aW9uLmlkfVxuICAgICAgICBvcmdhbml6YXRpb249e19vcmdhbml6YXRpb259XG4gICAgICAgIG9uT3JnYW5pemF0aW9uPXt1cGRhdGVPcmdhbml6YXRpb259XG4gICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgLz5cbiAgICApKTtcbiAgfSBlbHNlIGlmICh1cmxzICYmIHVybHMubGVuZ3RoID4gMCkge1xuICAgIGNvbXBvbmVudHMgPSB1cmxzLm1hcCgoX3VybCwgaW5kZXgpID0+IChcbiAgICAgIDxPcmdhbml6YXRpb25cbiAgICAgICAgc2VsZWN0ZWQ9e191cmwgPT09IHVybH1cbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgdXJsPXtfdXJsfVxuICAgICAgICBvbk9yZ2FuaXphdGlvbj17dXBkYXRlT3JnYW5pemF0aW9ufVxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgbWVzc2FnZXM9e3sgcHJpbWFyeUVycm9yLCBzZWNvbmRhcnlFcnJvciB9fVxuICAgICAgLz5cbiAgICApKTtcbiAgfSBlbHNlIHtcbiAgICBjb21wb25lbnRzID0gW1xuICAgICAgPE9yZ2FuaXphdGlvblxuICAgICAgICBrZXk9ezB9XG4gICAgICAgIG9yZ2FuaXphdGlvbj17b3JnYW5pemF0aW9ufVxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgbWVzc2FnZXM9e3sgcHJpbWFyeUVycm9yLCBzZWNvbmRhcnlFcnJvciB9fVxuICAgICAgLz4sXG4gICAgXTtcbiAgfVxuICByZXR1cm4gPExpc3Q+e2NvbXBvbmVudHN9PC9MaXN0Pjtcbn1cblxuT3JnYW5pemF0aW9ucy5wcm9wVHlwZXMgPSB7XG4gIC8qKiBVcmwgdG8gZ2V0IG9yZ2FuaXphdGlvbiBkYXRhLCBpZiBvcmdhbml6YXRpb24gZGF0YSBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFVybHMgYXJyYXkgdG8gZ2V0IG9yZ2FuaXphdGlvbiBkYXRhLCBpZiBvcmdhbml6YXRpb24gZGF0YSBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybHM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqIE9yZ2FuaXphdGlvbnMgZGF0YSBhcnJheSB0byByZW5kZXIsIGlmIHVybHMgbm90IHByb3ZpZGVkLiAqL1xuICBvcmdhbml6YXRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gb3JnYW5pemF0aW9uIGlzIHNlbGVjdGVkLiAqL1xuICBvbk9yZ2FuaXphdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqIENvbmZpZ3VyYXRpb24gcmVxdWlyZWQgaWYgcGF0aHMgYXJlIHByb3ZpZGVkIGFzIFVSTC4gKi9cbiAgY29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoeyBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9KSxcbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgb3JnYW5pemF0aW9uICovXG4gIG9yZ2FuaXphdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhdmF0YXJfdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBmdWxsX25hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB2aXNpYmlsaXR5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgd2Vic2l0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSxcbiAgbWVzc2FnZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcHJpbWFyeUVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlY29uZGFyeUVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZ2FuaXphdGlvbnM7XG4iXX0=