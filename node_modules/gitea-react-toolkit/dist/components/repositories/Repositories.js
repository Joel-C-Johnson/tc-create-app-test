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

function Repositories(_ref) {
  var urls = _ref.urls,
      repositories = _ref.repositories,
      onRepository = _ref.onRepository,
      config = _ref.config;
  var updateRepository = (0, _react.useCallback)(function (repo) {
    onRepository(repo);
  }, [onRepository]);
  var components = [];

  if (repositories) {
    components = repositories.map(function (repository) {
      return /*#__PURE__*/_react.default.createElement(_.Repository, {
        key: JSON.stringify(repository),
        repository: repository,
        onRepository: updateRepository,
        config: config
      });
    });
  } else if (urls) {
    components = urls.map(function (url, index) {
      return /*#__PURE__*/_react.default.createElement(_.Repository, {
        key: index,
        url: url,
        onRepository: updateRepository,
        config: config
      });
    });
  }

  return /*#__PURE__*/_react.default.createElement(_core.List, null, components);
}

Repositories.propTypes = {
  /** Urls array to get repository data, if repository data is not provided. */
  urls: _propTypes.default.array,

  /** Repositories data array to render, if urls not provided. */
  repositories: _propTypes.default.array,

  /** Function to call when repository is selected. */
  onRepository: _propTypes.default.func.isRequired,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  })
};
var _default = Repositories;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcmllcy9SZXBvc2l0b3JpZXMuanMiXSwibmFtZXMiOlsiUmVwb3NpdG9yaWVzIiwidXJscyIsInJlcG9zaXRvcmllcyIsIm9uUmVwb3NpdG9yeSIsImNvbmZpZyIsInVwZGF0ZVJlcG9zaXRvcnkiLCJyZXBvIiwiY29tcG9uZW50cyIsIm1hcCIsInJlcG9zaXRvcnkiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJzZXJ2ZXIiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLFNBQVNBLFlBQVQsT0FLRztBQUFBLE1BSkRDLElBSUMsUUFKREEsSUFJQztBQUFBLE1BSERDLFlBR0MsUUFIREEsWUFHQztBQUFBLE1BRkRDLFlBRUMsUUFGREEsWUFFQztBQUFBLE1BRERDLE1BQ0MsUUFEREEsTUFDQztBQUNELE1BQU1DLGdCQUFnQixHQUFHLHdCQUFZLFVBQUNDLElBQUQsRUFBVTtBQUM3Q0gsSUFBQUEsWUFBWSxDQUFDRyxJQUFELENBQVo7QUFDRCxHQUZ3QixFQUV0QixDQUFDSCxZQUFELENBRnNCLENBQXpCO0FBSUEsTUFBSUksVUFBVSxHQUFHLEVBQWpCOztBQUVBLE1BQUlMLFlBQUosRUFBa0I7QUFDaEJLLElBQUFBLFVBQVUsR0FBR0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCLFVBQUNDLFVBQUQ7QUFBQSwwQkFDNUIsNkJBQUMsWUFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsVUFBZixDQURQO0FBRUUsUUFBQSxVQUFVLEVBQUVBLFVBRmQ7QUFHRSxRQUFBLFlBQVksRUFBRUosZ0JBSGhCO0FBSUUsUUFBQSxNQUFNLEVBQUVEO0FBSlYsUUFENEI7QUFBQSxLQUFqQixDQUFiO0FBUUQsR0FURCxNQVNPLElBQUlILElBQUosRUFBVTtBQUNmTSxJQUFBQSxVQUFVLEdBQUdOLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUNJLEdBQUQsRUFBTUMsS0FBTjtBQUFBLDBCQUNwQiw2QkFBQyxZQUFEO0FBQ0UsUUFBQSxHQUFHLEVBQUVBLEtBRFA7QUFFRSxRQUFBLEdBQUcsRUFBRUQsR0FGUDtBQUdFLFFBQUEsWUFBWSxFQUFFUCxnQkFIaEI7QUFJRSxRQUFBLE1BQU0sRUFBRUQ7QUFKVixRQURvQjtBQUFBLEtBQVQsQ0FBYjtBQVFEOztBQUNELHNCQUNFLDZCQUFDLFVBQUQsUUFDR0csVUFESCxDQURGO0FBS0Q7O0FBRURQLFlBQVksQ0FBQ2MsU0FBYixHQUF5QjtBQUN2QjtBQUNBYixFQUFBQSxJQUFJLEVBQUVjLG1CQUFVQyxLQUZPOztBQUd2QjtBQUNBZCxFQUFBQSxZQUFZLEVBQUVhLG1CQUFVQyxLQUpEOztBQUt2QjtBQUNBYixFQUFBQSxZQUFZLEVBQUVZLG1CQUFVRSxJQUFWLENBQWVDLFVBTk47O0FBT3ZCO0FBQ0FkLEVBQUFBLE1BQU0sRUFBRVcsbUJBQVVJLEtBQVYsQ0FBZ0I7QUFDdEJDLElBQUFBLE1BQU0sRUFBRUwsbUJBQVVNLE1BQVYsQ0FBaUJIO0FBREgsR0FBaEI7QUFSZSxDQUF6QjtlQWFlbEIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXBvc2l0b3J5IH0gZnJvbSAnLi4vJztcblxuZnVuY3Rpb24gUmVwb3NpdG9yaWVzKHtcbiAgdXJscyxcbiAgcmVwb3NpdG9yaWVzLFxuICBvblJlcG9zaXRvcnksXG4gIGNvbmZpZyxcbn0pIHtcbiAgY29uc3QgdXBkYXRlUmVwb3NpdG9yeSA9IHVzZUNhbGxiYWNrKChyZXBvKSA9PiB7XG4gICAgb25SZXBvc2l0b3J5KHJlcG8pO1xuICB9LCBbb25SZXBvc2l0b3J5XSk7XG5cbiAgbGV0IGNvbXBvbmVudHMgPSBbXTtcblxuICBpZiAocmVwb3NpdG9yaWVzKSB7XG4gICAgY29tcG9uZW50cyA9IHJlcG9zaXRvcmllcy5tYXAoKHJlcG9zaXRvcnkpID0+XG4gICAgICA8UmVwb3NpdG9yeVxuICAgICAgICBrZXk9e0pTT04uc3RyaW5naWZ5KHJlcG9zaXRvcnkpfVxuICAgICAgICByZXBvc2l0b3J5PXtyZXBvc2l0b3J5fVxuICAgICAgICBvblJlcG9zaXRvcnk9e3VwZGF0ZVJlcG9zaXRvcnl9XG4gICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgLz5cbiAgICApO1xuICB9IGVsc2UgaWYgKHVybHMpIHtcbiAgICBjb21wb25lbnRzID0gdXJscy5tYXAoKHVybCwgaW5kZXgpID0+XG4gICAgICA8UmVwb3NpdG9yeVxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgb25SZXBvc2l0b3J5PXt1cGRhdGVSZXBvc2l0b3J5fVxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMaXN0PlxuICAgICAge2NvbXBvbmVudHN9XG4gICAgPC9MaXN0PlxuICApO1xufVxuXG5SZXBvc2l0b3JpZXMucHJvcFR5cGVzID0ge1xuICAvKiogVXJscyBhcnJheSB0byBnZXQgcmVwb3NpdG9yeSBkYXRhLCBpZiByZXBvc2l0b3J5IGRhdGEgaXMgbm90IHByb3ZpZGVkLiAqL1xuICB1cmxzOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKiBSZXBvc2l0b3JpZXMgZGF0YSBhcnJheSB0byByZW5kZXIsIGlmIHVybHMgbm90IHByb3ZpZGVkLiAqL1xuICByZXBvc2l0b3JpZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiByZXBvc2l0b3J5IGlzIHNlbGVjdGVkLiAqL1xuICBvblJlcG9zaXRvcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8qKiBDb25maWd1cmF0aW9uIHJlcXVpcmVkIGlmIHBhdGhzIGFyZSBwcm92aWRlZCBhcyBVUkwuICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzZXJ2ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvc2l0b3JpZXM7XG4iXX0=