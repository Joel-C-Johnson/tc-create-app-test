"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileContextProvider = FileContextProvider;
exports.FileContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FileContext = _react.default.createContext();

exports.FileContext = FileContext;

function FileContextProvider(_ref) {
  var _config = _ref.config,
      _authentication = _ref.authentication,
      _repository = _ref.repository,
      filepath = _ref.filepath,
      onFilepath = _ref.onFilepath,
      defaultContent = _ref.defaultContent,
      create = _ref.create,
      onOpenValidation = _ref.onOpenValidation,
      children = _ref.children,
      onLoadCache = _ref.onLoadCache,
      onSaveCache = _ref.onSaveCache,
      onConfirmClose = _ref.onConfirmClose,
      releaseFlag = _ref.releaseFlag;

  var _useContext = (0, _react.useContext)(_.AuthenticationContext),
      contextAuthentication = _useContext.state;

  var _useContext2 = (0, _react.useContext)(_.RepositoryContext),
      contextRepository = _useContext2.state,
      contextConfig = _useContext2.config;

  var _useFile = (0, _.useFile)({
    config: _config || contextConfig,
    authentication: _authentication || contextAuthentication,
    repository: _repository || contextRepository,
    filepath: filepath,
    onFilepath: onFilepath,
    defaultContent: defaultContent,
    create: create,
    onOpenValidation: onOpenValidation,
    onConfirmClose: onConfirmClose,
    onLoadCache: onLoadCache,
    onSaveCache: onSaveCache,
    releaseFlag: releaseFlag
  }),
      state = _useFile.state,
      stateValues = _useFile.stateValues,
      actions = _useFile.actions,
      component = _useFile.component,
      components = _useFile.components,
      config = _useFile.config;

  var context = {
    state: state,
    stateValues: stateValues,
    actions: actions,
    component: component,
    components: components,
    config: config
  };
  return /*#__PURE__*/_react.default.createElement(FileContext.Provider, {
    value: context
  }, children);
}

;
FileContextProvider.propTypes = {
  /** The full filepath for the file. */
  filepath: _propTypes.default.string,

  /** Function to propogate filepath when the Blob is selected. */
  onFilepath: _propTypes.default.func,

  /** The default string to populate the file if it doesn't exist */
  defaultContent: _propTypes.default.string,

  /** use a form to create a new file */
  create: _propTypes.default.bool,

  /** Authentication object returned from a successful withAuthentication login. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired,
    headers: _propTypes.default.shape({
      Authorization: _propTypes.default.string.isRequired
    })
  }),
  authentication: _propTypes.default.shape({
    config: _propTypes.default.shape({
      server: _propTypes.default.string.isRequired,
      headers: _propTypes.default.shape({
        Authorization: _propTypes.default.string.isRequired
      }).isRequired
    }).isRequired,
    user: _propTypes.default.shape({
      username: _propTypes.default.string.isRequired,
      email: _propTypes.default.string.isRequired
    }).isRequired
  }),

  /** Repository tree_url can be used in place of blobConfig */
  repository: _propTypes.default.shape({
    owner: _propTypes.default.shape({
      username: _propTypes.default.string.isRequired
    }),
    name: _propTypes.default.string.isRequired
  }),

  /** Children to render inside of Provider */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,
  releaseFlag: _propTypes.default.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbGUvRmlsZS5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiRmlsZUNvbnRleHRQcm92aWRlciIsIl9jb25maWciLCJjb25maWciLCJfYXV0aGVudGljYXRpb24iLCJhdXRoZW50aWNhdGlvbiIsIl9yZXBvc2l0b3J5IiwicmVwb3NpdG9yeSIsImZpbGVwYXRoIiwib25GaWxlcGF0aCIsImRlZmF1bHRDb250ZW50IiwiY3JlYXRlIiwib25PcGVuVmFsaWRhdGlvbiIsImNoaWxkcmVuIiwib25Mb2FkQ2FjaGUiLCJvblNhdmVDYWNoZSIsIm9uQ29uZmlybUNsb3NlIiwicmVsZWFzZUZsYWciLCJBdXRoZW50aWNhdGlvbkNvbnRleHQiLCJjb250ZXh0QXV0aGVudGljYXRpb24iLCJzdGF0ZSIsIlJlcG9zaXRvcnlDb250ZXh0IiwiY29udGV4dFJlcG9zaXRvcnkiLCJjb250ZXh0Q29uZmlnIiwic3RhdGVWYWx1ZXMiLCJhY3Rpb25zIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImNvbnRleHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsInNoYXBlIiwic2VydmVyIiwiaXNSZXF1aXJlZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJvd25lciIsIm5hbWUiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztBQU1PLElBQU1BLFdBQVcsR0FBR0MsZUFBTUMsYUFBTixFQUFwQjs7OztBQUVBLFNBQVNDLG1CQUFULE9BY0o7QUFBQSxNQWJPQyxPQWFQLFFBYkRDLE1BYUM7QUFBQSxNQVplQyxlQVlmLFFBWkRDLGNBWUM7QUFBQSxNQVhXQyxXQVdYLFFBWERDLFVBV0M7QUFB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QUFWLENBQWdCO0FBQ3RCQyxNQUFBQSxNQUFNLEVBQUVMLG1CQUFVQyxNQUFWLENBQWlCSyxVQURIO0FBRXRCQyxNQUFBQSxPQUFPLEVBQUVQLG1CQUFVSSxLQUFWLENBQWdCO0FBQ3ZCSSxRQUFBQSxhQUFhLEVBQUVSLG1CQUFVQyxNQUFWLENBQWlCSztBQURULE9BQWhCLEVBRU5BO0FBSm1CLEtBQWhCLEVBS0xBLFVBTjJCO0FBTzlCRyxJQUFBQSxJQUFJLEVBQUVULG1CQUFVSSxLQUFWLENBQWdCO0FBQ3BCTSxNQUFBQSxRQUFRLEVBQUVWLG1CQUFVQyxNQUFWLENBQWlCSyxVQURQO0FBRXBCSyxNQUFBQSxLQUFLLEVBQUVYLG1CQUFVQyxNQUFWLENBQWlCSztBQUZKLEtBQWhCLEVBR0hBO0FBVjJCLEdBQWhCLENBaEJjOztBQTRCOUI7QUFDQTdCLEVBQUFBLFVBQVUsRUFBRXVCLG1CQUFVSSxLQUFWLENBQWdCO0FBQzFCUSxJQUFBQSxLQUFLLEVBQUVaLG1CQUFVSSxLQUFWLENBQWdCO0FBQ3JCTSxNQUFBQSxRQUFRLEVBQUVWLG1CQUFVQyxNQUFWLENBQWlCSztBQUROLEtBQWhCLENBRG1CO0FBSTFCTyxJQUFBQSxJQUFJLEVBQUViLG1CQUFVQyxNQUFWLENBQWlCSztBQUpHLEdBQWhCLENBN0JrQjs7QUFtQzlCO0FBQ0F2QixFQUFBQSxRQUFRLEVBQUVpQixtQkFBVWMsU0FBVixDQUFvQixDQUM1QmQsbUJBQVVlLE9BQVYsQ0FBa0JmLG1CQUFVZ0IsSUFBNUIsQ0FENEIsRUFFNUJoQixtQkFBVWdCLElBRmtCLENBQXBCLEVBR1BWLFVBdkMyQjtBQXdDOUJuQixFQUFBQSxXQUFXLEVBQUVhLG1CQUFVRztBQXhDTyxDQUFoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgdXNlRmlsZSxcbiAgQXV0aGVudGljYXRpb25Db250ZXh0LFxuICBSZXBvc2l0b3J5Q29udGV4dCxcbn0gZnJvbSAnLi4vLi4nO1xuXG5leHBvcnQgY29uc3QgRmlsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBGaWxlQ29udGV4dFByb3ZpZGVyKHtcbiAgY29uZmlnOiBfY29uZmlnLFxuICBhdXRoZW50aWNhdGlvbjogX2F1dGhlbnRpY2F0aW9uLFxuICByZXBvc2l0b3J5OiBfcmVwb3NpdG9yeSxcbiAgZmlsZXBhdGgsXG4gIG9uRmlsZXBhdGgsXG4gIGRlZmF1bHRDb250ZW50LFxuICBjcmVhdGUsXG4gIG9uT3BlblZhbGlkYXRpb24sXG4gIGNoaWxkcmVuLFxuICBvbkxvYWRDYWNoZSxcbiAgb25TYXZlQ2FjaGUsXG4gIG9uQ29uZmlybUNsb3NlLFxuICByZWxlYXNlRmxhZyxcbn0pIHtcbiAgY29uc3QgeyBzdGF0ZTogY29udGV4dEF1dGhlbnRpY2F0aW9uIH0gPSB1c2VDb250ZXh0KEF1dGhlbnRpY2F0aW9uQ29udGV4dCk7XG4gIGNvbnN0IHsgc3RhdGU6IGNvbnRleHRSZXBvc2l0b3J5LCBjb25maWc6IGNvbnRleHRDb25maWcgfSA9IHVzZUNvbnRleHQoUmVwb3NpdG9yeUNvbnRleHQpO1xuXG4gIGNvbnN0IHtcbiAgICBzdGF0ZSwgc3RhdGVWYWx1ZXMsIGFjdGlvbnMsIGNvbXBvbmVudCwgY29tcG9uZW50cywgY29uZmlnLFxuICB9ID0gdXNlRmlsZSh7XG4gICAgY29uZmlnOiBfY29uZmlnIHx8IGNvbnRleHRDb25maWcsXG4gICAgYXV0aGVudGljYXRpb246IF9hdXRoZW50aWNhdGlvbiB8fCBjb250ZXh0QXV0aGVudGljYXRpb24sXG4gICAgcmVwb3NpdG9yeTogX3JlcG9zaXRvcnkgfHwgY29udGV4dFJlcG9zaXRvcnksXG4gICAgZmlsZXBhdGgsIG9uRmlsZXBhdGgsIGRlZmF1bHRDb250ZW50LCBjcmVhdGUsIG9uT3BlblZhbGlkYXRpb24sIG9uQ29uZmlybUNsb3NlLFxuICAgIG9uTG9hZENhY2hlLCBvblNhdmVDYWNoZSwgcmVsZWFzZUZsYWcsXG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgc3RhdGUsXG4gICAgc3RhdGVWYWx1ZXMsXG4gICAgYWN0aW9ucyxcbiAgICBjb21wb25lbnQsXG4gICAgY29tcG9uZW50cyxcbiAgICBjb25maWcsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmlsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRmlsZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5GaWxlQ29udGV4dFByb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqIFRoZSBmdWxsIGZpbGVwYXRoIGZvciB0aGUgZmlsZS4gKi9cbiAgZmlsZXBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBGdW5jdGlvbiB0byBwcm9wb2dhdGUgZmlsZXBhdGggd2hlbiB0aGUgQmxvYiBpcyBzZWxlY3RlZC4gKi9cbiAgb25GaWxlcGF0aDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBUaGUgZGVmYXVsdCBzdHJpbmcgdG8gcG9wdWxhdGUgdGhlIGZpbGUgaWYgaXQgZG9lc24ndCBleGlzdCAqL1xuICBkZWZhdWx0Q29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIHVzZSBhIGZvcm0gdG8gY3JlYXRlIGEgbmV3IGZpbGUgKi9cbiAgY3JlYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIEF1dGhlbnRpY2F0aW9uIG9iamVjdCByZXR1cm5lZCBmcm9tIGEgc3VjY2Vzc2Z1bCB3aXRoQXV0aGVudGljYXRpb24gbG9naW4uICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoZWFkZXJzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgQXV0aG9yaXphdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICB9KSxcbiAgYXV0aGVudGljYXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY29uZmlnOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBoZWFkZXJzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBBdXRob3JpemF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB9KS5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgdXNlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHVzZXJuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH0pLFxuICAvKiogUmVwb3NpdG9yeSB0cmVlX3VybCBjYW4gYmUgdXNlZCBpbiBwbGFjZSBvZiBibG9iQ29uZmlnICovXG4gIHJlcG9zaXRvcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb3duZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG4gIC8qKiBDaGlsZHJlbiB0byByZW5kZXIgaW5zaWRlIG9mIFByb3ZpZGVyICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLmlzUmVxdWlyZWQsXG4gIHJlbGVhc2VGbGFnOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iXX0=