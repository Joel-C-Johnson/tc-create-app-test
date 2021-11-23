"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deepFreeze = _interopRequireDefault(require("deep-freeze"));

var _helpers = require("../file/helpers");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useBlob(_ref) {
  var _repository$catalog, _repository$catalog$p;

  var config = _ref.config,
      __blob = _ref.blob,
      onBlob = _ref.onBlob,
      repository = _ref.repository,
      tree = _ref.tree,
      _url = _ref.url,
      releaseFlag = _ref.releaseFlag;

  var blob = __blob && (0, _deepFreeze.default)(__blob);

  var url = _url || repository && repository.tree_url;
  console.log("releaseFlag?", releaseFlag);

  if (releaseFlag && repository !== null && repository !== void 0 && (_repository$catalog = repository.catalog) !== null && _repository$catalog !== void 0 && (_repository$catalog$p = _repository$catalog.prod) !== null && _repository$catalog$p !== void 0 && _repository$catalog$p.branch_or_tag_name) {
    // p.replace(regex, 'ferret')
    url = url.replace(/master$/, repository.catalog.prod.branch_or_tag_name);
  }

  console.log("url=", url);
  var update = (0, _react.useCallback)(function (_blob) {
    if (onBlob) {
      onBlob(_blob);
    }

    ;
  }, [onBlob]);
  var close = (0, _react.useCallback)(function () {
    update();
  }, [update]);
  var tsvManifestFileComparer = (0, _react.useCallback)(function (item1, item2) {
    return (0, _helpers.manifestFileComparer)({
      repository: repository,
      item1: item1,
      item2: item2
    });
  }, [repository, repository === null || repository === void 0 ? void 0 : repository.books, _helpers.manifestFileComparer]);
  var browse = (0, _react.useMemo)(function () {
    return tree || url ? /*#__PURE__*/_react.default.createElement(_.Tree, {
      tree: tree,
      url: url,
      config: config,
      selected: true,
      onBlob: update,
      comparer: tsvManifestFileComparer
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }, [tree, url, config, update, repository === null || repository === void 0 ? void 0 : repository.name]);
  return {
    state: blob,
    actions: {
      close: close,
      update: update
    },
    component: browse,
    components: {
      browse: browse
    }
  };
}

;
useBlob.propTypes = {
  /** An array of paths from the Gitea file tree api. */
  tree: _propTypes.default.arrayOf(_propTypes.default.shape({
    path: _propTypes.default.string.isRequired,
    type: _propTypes.default.oneOf(['tree', 'blob']).isRequired
  })),

  /** The Url to fetch the listing if listing is not provided. */
  url: _propTypes.default.string,

  /** Repository tree_url can be used in place of blobConfig */
  repository: _propTypes.default.shape({
    /** The Url to fetch the listing if listing is not provided. */
    tree_url: _propTypes.default.string.isRequired
  })
};
var _default = useBlob;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi91c2VCbG9iLmpzIl0sIm5hbWVzIjpbInVzZUJsb2IiLCJjb25maWciLCJfX2Jsb2IiLCJibG9iIiwib25CbG9iIiwicmVwb3NpdG9yeSIsInRyZWUiLCJfdXJsIiwidXJsIiwicmVsZWFzZUZsYWciLCJ0cmVlX3VybCIsImNvbnNvbGUiLCJsb2ciLCJjYXRhbG9nIiwicHJvZCIsImJyYW5jaF9vcl90YWdfbmFtZSIsInJlcGxhY2UiLCJ1cGRhdGUiLCJfYmxvYiIsImNsb3NlIiwidHN2TWFuaWZlc3RGaWxlQ29tcGFyZXIiLCJpdGVtMSIsIml0ZW0yIiwiYm9va3MiLCJtYW5pZmVzdEZpbGVDb21wYXJlciIsImJyb3dzZSIsIm5hbWUiLCJzdGF0ZSIsImFjdGlvbnMiLCJjb21wb25lbnQiLCJjb21wb25lbnRzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwicGF0aCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJ0eXBlIiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztBQUVBLFNBQVNBLE9BQVQsT0FTRztBQUFBOztBQUFBLE1BUkRDLE1BUUMsUUFSREEsTUFRQztBQUFBLE1BUEtDLE1BT0wsUUFQREMsSUFPQztBQUFBLE1BTkRDLE1BTUMsUUFOREEsTUFNQztBQUFBLE1BTERDLFVBS0MsUUFMREEsVUFLQztBQUFBLE1BSERDLElBR0MsUUFIREEsSUFHQztBQUFBLE1BRklDLElBRUosUUFGREMsR0FFQztBQUFBLE1BRERDLFdBQ0MsUUFEREEsV0FDQzs7QUFDRCxNQUFNTixJQUFJLEdBQUdELE1BQU0sSUFBSSx5QkFBV0EsTUFBWCxDQUF2Qjs7QUFFQSxNQUFJTSxHQUFHLEdBQUdELElBQUksSUFBS0YsVUFBVSxJQUFJQSxVQUFVLENBQUNLLFFBQTVDO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0Ms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LEdBQWhCO0FBVE0sQ0FBcEI7ZUFlZXJDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkZWVwRnJlZXplIGZyb20gJ2RlZXAtZnJlZXplJztcblxuaW1wb3J0IHttYW5pZmVzdEZpbGVDb21wYXJlcn0gZnJvbSAnLi4vZmlsZS9oZWxwZXJzJztcblxuaW1wb3J0IHsgVHJlZSB9IGZyb20gJy4nO1xuXG5mdW5jdGlvbiB1c2VCbG9iKHtcbiAgY29uZmlnLFxuICBibG9iOiBfX2Jsb2IsXG4gIG9uQmxvYixcbiAgcmVwb3NpdG9yeSxcbiAgLy8gZmlsZXBhdGgsIFRPRE86IHVzZSBmaWxlcGF0aCB0byBwcmUtc2VsZWN0IGJsb2I7XG4gIHRyZWUsXG4gIHVybDogX3VybCxcbiAgcmVsZWFzZUZsYWcsXG59KSB7XG4gIGNvbnN0IGJsb2IgPSBfX2Jsb2IgJiYgZGVlcEZyZWV6ZShfX2Jsb2IpO1xuXG4gIGxldCB1cmwgPSBfdXJsIHx8IChyZXBvc2l0b3J5ICYmIHJlcG9zaXRvcnkudHJlZV91cmwpO1xuICBjb25zb2xlLmxvZyhcInJlbGVhc2VGbGFnP1wiLHJlbGVhc2VGbGFnKTtcbiAgaWYgKCByZWxlYXNlRmxhZyAmJiByZXBvc2l0b3J5Py5jYXRhbG9nPy5wcm9kPy5icmFuY2hfb3JfdGFnX25hbWUgKSB7XG4gICAgLy8gcC5yZXBsYWNlKHJlZ2V4LCAnZmVycmV0JylcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvbWFzdGVyJC8scmVwb3NpdG9yeS5jYXRhbG9nLnByb2QuYnJhbmNoX29yX3RhZ19uYW1lKTtcbiAgfVxuICBjb25zb2xlLmxvZyhcInVybD1cIix1cmwpO1xuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjaygoX2Jsb2IpID0+IHtcbiAgICBpZiAob25CbG9iKSB7XG4gICAgICBvbkJsb2IoX2Jsb2IpO1xuICAgIH07XG4gIH0sIFtvbkJsb2JdKTtcblxuICBjb25zdCBjbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB1cGRhdGUoKTtcbiAgfSwgW3VwZGF0ZV0pO1xuXG4gIGNvbnN0IHRzdk1hbmlmZXN0RmlsZUNvbXBhcmVyID0gdXNlQ2FsbGJhY2soKGl0ZW0xLGl0ZW0yKSA9PiB7XG4gICAgcmV0dXJuIG1hbmlmZXN0RmlsZUNvbXBhcmVyKHtyZXBvc2l0b3J5LCBpdGVtMSwgaXRlbTJ9KTtcbiAgfSwgW3JlcG9zaXRvcnksIHJlcG9zaXRvcnk/LmJvb2tzLCBtYW5pZmVzdEZpbGVDb21wYXJlcl0pO1xuICBcbiAgY29uc3QgYnJvd3NlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuICh0cmVlIHx8IHVybCkgPyAoXG4gICAgICA8VHJlZVxuICAgICAgICB0cmVlPXt0cmVlfVxuICAgICAgICB1cmw9e3VybH1cbiAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgIHNlbGVjdGVkPXt0cnVlfVxuICAgICAgICBvbkJsb2I9e3VwZGF0ZX1cbiAgICAgICAgY29tcGFyZXI9e3Rzdk1hbmlmZXN0RmlsZUNvbXBhcmVyfVxuICAgICAgLz5cbiAgICApIDogKDw+PC8+KTtcbiAgfSwgW3RyZWUsIHVybCwgY29uZmlnLCB1cGRhdGUsIHJlcG9zaXRvcnk/Lm5hbWVdKTtcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiBibG9iLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIGNsb3NlLFxuICAgICAgdXBkYXRlLFxuICAgIH0sXG4gICAgY29tcG9uZW50OiBicm93c2UsXG4gICAgY29tcG9uZW50czogeyBicm93c2UgfSxcbiAgfTtcbn07XG5cbnVzZUJsb2IucHJvcFR5cGVzID0ge1xuICAvKiogQW4gYXJyYXkgb2YgcGF0aHMgZnJvbSB0aGUgR2l0ZWEgZmlsZSB0cmVlIGFwaS4gKi9cbiAgdHJlZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsndHJlZScsJ2Jsb2InXSkuaXNSZXF1aXJlZCxcbiAgfSkpLFxuICAvKiogVGhlIFVybCB0byBmZXRjaCB0aGUgbGlzdGluZyBpZiBsaXN0aW5nIGlzIG5vdCBwcm92aWRlZC4gKi9cbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogUmVwb3NpdG9yeSB0cmVlX3VybCBjYW4gYmUgdXNlZCBpbiBwbGFjZSBvZiBibG9iQ29uZmlnICovXG4gIHJlcG9zaXRvcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgLyoqIFRoZSBVcmwgdG8gZmV0Y2ggdGhlIGxpc3RpbmcgaWYgbGlzdGluZyBpcyBub3QgcHJvdmlkZWQuICovXG4gICAgdHJlZV91cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VCbG9iOyJdfQ==