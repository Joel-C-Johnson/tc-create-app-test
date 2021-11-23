"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      paddingRight: '0.7em'
    },
    pathText: {
      paddingLeft: '0.7em'
    }
  };
});
/**
 * A Blob Component to render a Git Tree blob object.
 */

function BlobObject(_ref) {
  var selected = _ref.selected,
      blob = _ref.blob,
      _ref$blob = _ref.blob,
      path = _ref$blob.path,
      size = _ref$blob.size,
      onBlob = _ref.onBlob,
      depth = _ref.depth,
      filepath = _ref.filepath;
  var classes = useStyles();

  var _filepath = _path.default.join(filepath || '', path);

  var _blob = _objectSpread(_objectSpread({}, blob), {}, {
    filepath: _filepath
  });

  var icon = selected ? /*#__PURE__*/_react.default.createElement(_icons.Note, null) : /*#__PURE__*/_react.default.createElement(_icons.NoteOutlined, null);
  return /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    button: true,
    selected: selected,
    className: classes.root,
    style: {
      paddingLeft: depth + 'em'
    },
    onClick: function onClick() {
      if (onBlob) {
        onBlob(_blob);
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemIcon, {
    style: {
      marginRight: 0
    }
  }, icon), /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
    className: classes.pathText,
    primary: path,
    secondary: (0, _helpers.humanFileSize)(size)
  }));
}

BlobObject.propTypes = {
  /** Blob data to render, if url not provided. */
  blob: _propTypes.default.shape({
    /** The filepath in the Git Tree Blob Object */
    path: _propTypes.default.string.isRequired,

    /** The url in the Git Tree Blob Object */
    url: _propTypes.default.string,

    /** The content size of the Git Tree Blob Object */
    size: _propTypes.default.number
  }),

  /** Set whether or not the File object is currently selected. */
  selected: _propTypes.default.bool,

  /** Function to propogate when the Blob is selected. */
  onBlob: _propTypes.default.func,

  /** The depth of the path in the tree sets the inset of the component. */
  depth: _propTypes.default.number,

  /** The nested filepath that will concatenate. */
  filepath: _propTypes.default.string
};
BlobObject.defaultProps = {
  selected: false,
  depth: 1
};
var _default = BlobObject;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi9CbG9iT2JqZWN0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBhZGRpbmdSaWdodCIsInBhdGhUZXh0IiwicGFkZGluZ0xlZnQiLCJCbG9iT2JqZWN0Iiwic2VsZWN0ZWQiLCJibG9iIiwicGF0aCIsInNpemUiLCJvbkJsb2IiLCJkZXB0aCIsImZpbGVwYXRoIiwiY2xhc3NlcyIsIl9maWxlcGF0aCIsIlBhdGgiLCJqb2luIiwiX2Jsb2IiLCJpY29uIiwibWFyZ2luUmlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJ1cmwiLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUtBOztBQUtBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdCQUFXLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsWUFBWSxFQUFFO0FBRFYsS0FEK0I7QUFJckNDLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxXQUFXLEVBQUU7QUFETDtBQUoyQixHQUFMO0FBQUEsQ0FBaEIsQ0FBbEI7QUFTQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsVUFBVCxPQVVHO0FBQUEsTUFUREMsUUFTQyxRQVREQSxRQVNDO0FBQUEsTUFSREMsSUFRQyxRQVJEQSxJQVFDO0FBQUEsdUJBUERBLElBT0M7QUFBQSxNQU5DQyxJQU1ELGFBTkNBLElBTUQ7QUFBQSxNQUxDQyxJQUtELGFBTENBLElBS0Q7QUFBQSxNQUhEQyxNQUdDLFFBSERBLE1BR0M7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxRQUNDLFFBRERBLFFBQ0M7QUFDRCxNQUFNQyxPQUFPLEdBQUdkLFNBQVMsRUFBekI7O0FBQ0EsTUFBTWUsU0FBUyxHQUFHQyxjQUFLQyxJQUFMLENBQVVKLFFBQVEsSUFBSSxFQUF0QixFQUEwQkosSUFBMUIsQ0FBbEI7O0FBQ0EsTUFBTVMsS0FBSyxtQ0FBUVYsSUFBUjtBQUFjSyxJQUFBQSxRQUFRLEVBQUVFO0FBQXhCLElBQVg7O0FBRUEsTUFBTUksSUFBSSxHQUFHWixRQUFRLGdCQUNuQiw2QkFBQyxXQUFELE9BRG1CLGdCQUVuQiw2QkFBQyxtQkFBRCxPQUZGO0FBSUEsc0JBQ0UsNkJBQUMsY0FBRDtBQUNFLElBQUEsTUFBTSxNQURSO0FBRUUsSUFBQSxRQUFRLEVBQUVBLFFBRlo7QUFHRSxJQUFBLFNBQVMsRUFBRU8sT0FBTyxDQUFDWixJQUhyQjtBQUlFLElBQUEsS0FBSyxFQUFFO0FBQUVHLE1BQUFBLFdBQVcsRUFBRU8sS0FBSyxHQUFHO0FBQXZCLEtBSlQ7QUFLRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiLFVBQUlELE1BQUosRUFBWTtBQUFFQSxRQUFBQSxNQUFNLENBQUNPLEtBQUQsQ0FBTjtBQUFnQjtBQUMvQjtBQVBILGtCQVNFLDZCQUFDLGtCQUFEO0FBQWMsSUFBQSxLQUFLLEVBQUU7QUFBRUUsTUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBckIsS0FDR0QsSUFESCxDQVRGLGVBWUUsNkJBQUMsa0JBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRUwsT0FBTyxDQUFDVixRQURyQjtBQUVFLElBQUEsT0FBTyxFQUFFSyxJQUZYO0FBR0UsSUFBQSxTQUFTLEVBQUUsNEJBQWNDLElBQWQ7QUFIYixJQVpGLENBREY7QUFvQkQ7O0FBRURKLFVBQVUsQ0FBQ2UsU0FBWCxHQUF1QjtBQUNyQjtBQUNBYixFQUFBQSxJQUFJLEVBQUVjLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3BCO0FBQ0FkLElBQUFBLElBQUksRUFBRWEsbUJBQVVFLE1BQVYsQ0FBaUJDLFVBRkg7O0FBR3BCO0FBQ0FDLElBQUFBLEdBQUcsRUFBRUosbUJBQVVFLE1BSks7O0FBS3BCO0FBQ0FkLElBQUFBLElBQUksRUFBRVksbUJBQVVLO0FBTkksR0FBaEIsQ0FGZTs7QUFVckI7QUFDQXBCLEVBQUFBLFFBQVEsRUFBRWUsbUJBQVVNLElBWEM7O0FBWXJCO0FBQ0FqQixFQUFBQSxNQUFNLEVBQUVXLG1CQUFVTyxJQWJHOztBQWNyQjtBQUNBakIsRUFBQUEsS0FBSyxFQUFFVSxtQkFBVUssTUFmSTs7QUFnQnJCO0FBQ0FkLEVBQUFBLFFBQVEsRUFBRVMsbUJBQVVFO0FBakJDLENBQXZCO0FBb0JBbEIsVUFBVSxDQUFDd0IsWUFBWCxHQUEwQjtBQUN4QnZCLEVBQUFBLFFBQVEsRUFBRSxLQURjO0FBRXhCSyxFQUFBQSxLQUFLLEVBQUU7QUFGaUIsQ0FBMUI7ZUFLZU4sVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUljb24sXG4gIExpc3RJdGVtVGV4dCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHtcbiAgTm90ZSxcbiAgTm90ZU91dGxpbmVkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbXBvcnQgeyBodW1hbkZpbGVTaXplIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZ1JpZ2h0OiAnMC43ZW0nLFxuICB9LFxuICBwYXRoVGV4dDoge1xuICAgIHBhZGRpbmdMZWZ0OiAnMC43ZW0nLFxuICB9XG59KSk7XG5cbi8qKlxuICogQSBCbG9iIENvbXBvbmVudCB0byByZW5kZXIgYSBHaXQgVHJlZSBibG9iIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gQmxvYk9iamVjdCh7XG4gIHNlbGVjdGVkLFxuICBibG9iLFxuICBibG9iOiB7XG4gICAgcGF0aCxcbiAgICBzaXplLFxuICB9LFxuICBvbkJsb2IsXG4gIGRlcHRoLFxuICBmaWxlcGF0aCxcbn0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBfZmlsZXBhdGggPSBQYXRoLmpvaW4oZmlsZXBhdGggfHwgJycsIHBhdGgpO1xuICBjb25zdCBfYmxvYiA9IHsgLi4uYmxvYiwgZmlsZXBhdGg6IF9maWxlcGF0aCB9O1xuXG4gIGNvbnN0IGljb24gPSBzZWxlY3RlZCA/XG4gICAgPE5vdGUgLz4gOlxuICAgIDxOb3RlT3V0bGluZWQgLz47XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdEl0ZW1cbiAgICAgIGJ1dHRvblxuICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogZGVwdGggKyAnZW0nIH19XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGlmIChvbkJsb2IpIHsgb25CbG9iKF9ibG9iKTsgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TGlzdEl0ZW1JY29uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19PlxuICAgICAgICB7aWNvbn1cbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucGF0aFRleHR9XG4gICAgICAgIHByaW1hcnk9e3BhdGh9XG4gICAgICAgIHNlY29uZGFyeT17aHVtYW5GaWxlU2l6ZShzaXplKX1cbiAgICAgIC8+XG4gICAgPC9MaXN0SXRlbT5cbiAgKTtcbn1cblxuQmxvYk9iamVjdC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBCbG9iIGRhdGEgdG8gcmVuZGVyLCBpZiB1cmwgbm90IHByb3ZpZGVkLiAqL1xuICBibG9iOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIC8qKiBUaGUgZmlsZXBhdGggaW4gdGhlIEdpdCBUcmVlIEJsb2IgT2JqZWN0ICovXG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIC8qKiBUaGUgdXJsIGluIHRoZSBHaXQgVHJlZSBCbG9iIE9iamVjdCAqL1xuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiogVGhlIGNvbnRlbnQgc2l6ZSBvZiB0aGUgR2l0IFRyZWUgQmxvYiBPYmplY3QgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgLyoqIFNldCB3aGV0aGVyIG9yIG5vdCB0aGUgRmlsZSBvYmplY3QgaXMgY3VycmVudGx5IHNlbGVjdGVkLiAqL1xuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBGdW5jdGlvbiB0byBwcm9wb2dhdGUgd2hlbiB0aGUgQmxvYiBpcyBzZWxlY3RlZC4gKi9cbiAgb25CbG9iOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqIFRoZSBkZXB0aCBvZiB0aGUgcGF0aCBpbiB0aGUgdHJlZSBzZXRzIHRoZSBpbnNldCBvZiB0aGUgY29tcG9uZW50LiAqL1xuICBkZXB0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqIFRoZSBuZXN0ZWQgZmlsZXBhdGggdGhhdCB3aWxsIGNvbmNhdGVuYXRlLiAqL1xuICBmaWxlcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkJsb2JPYmplY3QuZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZDogZmFsc2UsXG4gIGRlcHRoOiAxLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvYk9iamVjdDtcbiJdfQ==