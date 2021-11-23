"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepositoryContextProvider = RepositoryContextProvider;
exports.RepositoryContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RepositoryContext = _react.default.createContext();

exports.RepositoryContext = RepositoryContext;

function RepositoryContextProvider(_ref) {
  var full_name = _ref.full_name,
      repositories = _ref.repositories,
      urls = _ref.urls,
      defaultOwner = _ref.defaultOwner,
      defaultQuery = _ref.defaultQuery,
      _config = _ref.config,
      _authentication = _ref.authentication,
      repository = _ref.repository,
      onRepository = _ref.onRepository,
      branch = _ref.branch,
      children = _ref.children;

  var _useContext = (0, _react.useContext)(_.AuthenticationContext),
      contextAuthentication = _useContext.state,
      contextConfig = _useContext.config;

  var _useRepository = (0, _.useRepository)({
    full_name: full_name,
    repositories: repositories,
    urls: urls,
    defaultOwner: defaultOwner,
    defaultQuery: defaultQuery,
    config: _config || contextConfig,
    authentication: _authentication || contextAuthentication,
    repository: repository,
    branch: branch,
    onRepository: onRepository
  }),
      state = _useRepository.state,
      actions = _useRepository.actions,
      component = _useRepository.component,
      components = _useRepository.components,
      config = _useRepository.config;

  var context = {
    state: state,
    actions: actions,
    component: component,
    components: components,
    config: config
  };
  return /*#__PURE__*/_react.default.createElement(RepositoryContext.Provider, {
    value: context
  }, children);
}

;
RepositoryContextProvider.propTypes = {
  /** Repository data to render, if url not provided. */
  repository: _propTypes.default.shape({
    id: _propTypes.default.number,
    owner: _propTypes.default.object.isRequired,
    name: _propTypes.default.string.isRequired,
    full_name: _propTypes.default.string.isRequired,
    description: _propTypes.default.string.isRequired,
    html_url: _propTypes.default.string.isRequired,
    website: _propTypes.default.string.isRequired,
    tree_url: _propTypes.default.string,
    avatar_url: _propTypes.default.string,
    branch: _propTypes.default.string
  }),

  /** Function to call when repository is selected. */
  onRepository: _propTypes.default.func.isRequired,

  /** Full name of the repo, `owner/name` */
  full_name: _propTypes.default.string,

  /** Pass a previously returned authentication object to bypass login. */
  authentication: _propTypes.default.shape({
    user: _propTypes.default.object.isRequired,
    token: _propTypes.default.object.isRequired,
    config: _propTypes.default.object.isRequired,
    remember: _propTypes.default.bool
  }),

  /** Urls array to get repository data, if repository data is not provided. */
  urls: _propTypes.default.array,

  /** Repositories data array to render, if urls not provided. */
  repositories: _propTypes.default.array,

  /** Prefill the owner search field. */
  defaultOwner: _propTypes.default.string,

  /** Prefill the query search field. */
  defaultQuery: _propTypes.default.string,

  /** The name of the branch to read/write files */
  branch: _propTypes.default.string,

  /** Configuration to pass through to the Search/Repositories component. */
  config: _propTypes.default.shape({
    /** Configuration required for Search or Repositories if paths are provided as URL. */
    server: _propTypes.default.string
  }),

  /** Children to render inside of Provider */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvUmVwb3NpdG9yeS5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIlJlcG9zaXRvcnlDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiUmVwb3NpdG9yeUNvbnRleHRQcm92aWRlciIsImZ1bGxfbmFtZSIsInJlcG9zaXRvcmllcyIsInVybHMiLCJkZWZhdWx0T3duZXIiLCJkZWZhdWx0UXVlcnkiLCJfY29uZmlnIiwiY29uZmlnIiwiX2F1dGhlbnRpY2F0aW9uIiwiYXV0aGVudGljYXRpb24iLCJyZXBvc2l0b3J5Iiwib25SZXBvc2l0b3J5IiwiYnJhbmNoIiwiY2hpbGRyZW4iLCJBdXRoZW50aWNhdGlvbkNvbnRleHQiLCJjb250ZXh0QXV0aGVudGljYXRpb24iLCJzdGF0ZSIsImNvbnRleHRDb25maWciLCJhY3Rpb25zIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImNvbnRleHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImlkIiwibnVtYmVyIiwib3duZXIiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwibmFtZSIsInN0cmluZyIsImRlc2NyaXB0aW9uIiwiaHRtbF91cmwiLCJ3ZWJzaXRlIiwidHJlZV91cmwiLCJhdmF0YXJfdXJsIiwiZnVuYyIsInVzZXIiLCJ0b2tlbiIsInJlbWVtYmVyIiwiYm9vbCIsImFycmF5Iiwic2VydmVyIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0MsZUFBTUMsYUFBTixFQUExQjs7OztBQUVBLFNBQVNDLHlCQUFULE9BWUo7QUFBQSxNQVhEQyxTQVdDLFFBWERBLFNBV0M7QUFBQSxNQVZEQyxZQVVDLFFBVkRBLFlBVUM7QUFBQSxNQVREQyxJQVNDLFFBVERBLElBU0M7QUFBQSxNQVJEQyxZQVFDLFFBUkRB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aUJDLFVBRk07QUFHOUJ0QixJQUFBQSxNQUFNLEVBQUVnQixtQkFBVUssTUFBVixDQUFpQkMsVUFISztBQUk5QlcsSUFBQUEsUUFBUSxFQUFFakIsbUJBQVVrQjtBQUpVLEdBQWhCLENBbkJvQjs7QUF5QnBDO0FBQ0F0QyxFQUFBQSxJQUFJLEVBQUVvQixtQkFBVW1CLEtBMUJvQjs7QUEyQnBDO0FBQ0F4QyxFQUFBQSxZQUFZLEVBQUVxQixtQkFBVW1CLEtBNUJZOztBQTZCcEM7QUFDQXRDLEVBQUFBLFlBQVksRUFBRW1CLG1CQUFVUSxNQTlCWTs7QUErQnBDO0FBQ0ExQixFQUFBQSxZQUFZLEVBQUVrQixtQkFBVVEsTUFoQ1k7O0FBaUNwQztBQUNBbkIsRUFBQUEsTUFBTSxFQUFFVyxtQkFBVVEsTUFsQ2tCOztBQW1DcEM7QUFDQXhCLEVBQUFBLE1BQU0sRUFBRWdCLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3RCO0FBQ0FtQixJQUFBQSxNQUFNLEVBQUVwQixtQkFBVVE7QUFGSSxHQUFoQixDQXBDNEI7O0FBd0NwQztBQUNBbEIsRUFBQUEsUUFBUSxFQUFFVSxtQkFBVXFCLFNBQVYsQ0FBb0IsQ0FDNUJyQixtQkFBVXNCLE9BQVYsQ0FBa0J0QixtQkFBVXVCLElBQTVCLENBRDRCLEVBRTVCdkIsbUJBQVV1QixJQUZrQixDQUFwQixFQUdQakI7QUE1Q2lDLENBQXRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyB1c2VSZXBvc2l0b3J5LCBBdXRoZW50aWNhdGlvbkNvbnRleHQgfSBmcm9tICcuLi8uLic7XG5cbmV4cG9ydCBjb25zdCBSZXBvc2l0b3J5Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJlcG9zaXRvcnlDb250ZXh0UHJvdmlkZXIoe1xuICBmdWxsX25hbWUsXG4gIHJlcG9zaXRvcmllcyxcbiAgdXJscyxcbiAgZGVmYXVsdE93bmVyLFxuICBkZWZhdWx0UXVlcnksXG4gIGNvbmZpZzogX2NvbmZpZyxcbiAgYXV0aGVudGljYXRpb246IF9hdXRoZW50aWNhdGlvbixcbiAgcmVwb3NpdG9yeSxcbiAgb25SZXBvc2l0b3J5LFxuICBicmFuY2gsXG4gIGNoaWxkcmVuLFxufSkge1xuICBjb25zdCB7IHN0YXRlOiBjb250ZXh0QXV0aGVudGljYXRpb24sIGNvbmZpZzogY29udGV4dENvbmZpZyB9ID0gdXNlQ29udGV4dChBdXRoZW50aWNhdGlvbkNvbnRleHQpO1xuICBjb25zdCB7XG4gICAgc3RhdGUsIGFjdGlvbnMsIGNvbXBvbmVudCwgY29tcG9uZW50cywgY29uZmlnLFxuICB9ID0gdXNlUmVwb3NpdG9yeSh7XG4gICAgZnVsbF9uYW1lLCByZXBvc2l0b3JpZXMsIHVybHMsIGRlZmF1bHRPd25lciwgZGVmYXVsdFF1ZXJ5LFxuICAgIGNvbmZpZzogX2NvbmZpZyB8fCBjb250ZXh0Q29uZmlnLFxuICAgIGF1dGhlbnRpY2F0aW9uOiBfYXV0aGVudGljYXRpb24gfHwgY29udGV4dEF1dGhlbnRpY2F0aW9uLFxuICAgIHJlcG9zaXRvcnksIGJyYW5jaCwgb25SZXBvc2l0b3J5LFxuICB9KTtcblxuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIHN0YXRlLFxuICAgIGFjdGlvbnMsXG4gICAgY29tcG9uZW50LFxuICAgIGNvbXBvbmVudHMsXG4gICAgY29uZmlnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlcG9zaXRvcnlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1JlcG9zaXRvcnlDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuUmVwb3NpdG9yeUNvbnRleHRQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKiBSZXBvc2l0b3J5IGRhdGEgdG8gcmVuZGVyLCBpZiB1cmwgbm90IHByb3ZpZGVkLiAqL1xuICByZXBvc2l0b3J5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG93bmVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGZ1bGxfbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaHRtbF91cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB3ZWJzaXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHJlZV91cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXZhdGFyX3VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBicmFuY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICAvKiogRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHJlcG9zaXRvcnkgaXMgc2VsZWN0ZWQuICovXG4gIG9uUmVwb3NpdG9yeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqIEZ1bGwgbmFtZSBvZiB0aGUgcmVwbywgYG93bmVyL25hbWVgICovXG4gIGZ1bGxfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFBhc3MgYSBwcmV2aW91c2x5IHJldHVybmVkIGF1dGhlbnRpY2F0aW9uIG9iamVjdCB0byBieXBhc3MgbG9naW4uICovXG4gIGF1dGhlbnRpY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0b2tlbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHJlbWVtYmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgfSksXG4gIC8qKiBVcmxzIGFycmF5IHRvIGdldCByZXBvc2l0b3J5IGRhdGEsIGlmIHJlcG9zaXRvcnkgZGF0YSBpcyBub3QgcHJvdmlkZWQuICovXG4gIHVybHM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqIFJlcG9zaXRvcmllcyBkYXRhIGFycmF5IHRvIHJlbmRlciwgaWYgdXJscyBub3QgcHJvdmlkZWQuICovXG4gIHJlcG9zaXRvcmllczogUHJvcFR5cGVzLmFycmF5LFxuICAvKiogUHJlZmlsbCB0aGUgb3duZXIgc2VhcmNoIGZpZWxkLiAqL1xuICBkZWZhdWx0T3duZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBQcmVmaWxsIHRoZSBxdWVyeSBzZWFyY2ggZmllbGQuICovXG4gIGRlZmF1bHRRdWVyeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBicmFuY2ggdG8gcmVhZC93cml0ZSBmaWxlcyAqL1xuICBicmFuY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBDb25maWd1cmF0aW9uIHRvIHBhc3MgdGhyb3VnaCB0byB0aGUgU2VhcmNoL1JlcG9zaXRvcmllcyBjb21wb25lbnQuICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAvKiogQ29uZmlndXJhdGlvbiByZXF1aXJlZCBmb3IgU2VhcmNoIG9yIFJlcG9zaXRvcmllcyBpZiBwYXRocyBhcmUgcHJvdmlkZWQgYXMgVVJMLiAqL1xuICAgIHNlcnZlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIC8qKiBDaGlsZHJlbiB0byByZW5kZXIgaW5zaWRlIG9mIFByb3ZpZGVyICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLmlzUmVxdWlyZWQsXG59O1xuIl19