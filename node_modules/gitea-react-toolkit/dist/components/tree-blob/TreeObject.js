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

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * A TreeObject Component to render a Git Tree tree object.
 */

function TreeObject(_ref) {
  var path = _ref.path,
      tree = _ref.tree,
      url = _ref.url,
      selected = _ref.selected,
      pathSelected = _ref.pathSelected,
      onBlob = _ref.onBlob,
      depth = _ref.depth,
      filepath = _ref.filepath,
      comparer = _ref.comparer;
  var classes = useStyles();

  var _filepath = _path.default.join(filepath || '', path);

  var icon = selected ? /*#__PURE__*/_react.default.createElement(_icons.Folder, null) : /*#__PURE__*/_react.default.createElement(_icons.FolderOpen, null);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    button: true,
    selected: selected,
    className: classes.root,
    style: {
      paddingLeft: depth + 'em'
    }
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemIcon, {
    style: {
      marginRight: 0
    }
  }, icon), /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
    className: classes.pathText,
    primary: path + '/'
  })), /*#__PURE__*/_react.default.createElement(_.Tree, {
    pathSelected: pathSelected,
    tree: tree,
    url: url,
    selected: selected,
    onBlob: onBlob,
    depth: depth + 1,
    filepath: _filepath,
    comparer: comparer
  }));
}

TreeObject.propTypes = {
  /** The filename or path in the Git Tree Object */
  path: _propTypes.default.string.isRequired,

  /** An array of paths from the Gitea file tree api. */
  tree: _propTypes.default.arrayOf(_propTypes.default.shape({
    path: _propTypes.default.string.isRequired,
    type: _propTypes.default.oneOf(['tree', 'blob']).isRequired
  })),

  /** The Url to fetch the listing if listing is not provided. */
  url: _propTypes.default.string,

  /** Set whether or not the File object is currently selected. */
  selected: _propTypes.default.bool,

  /** Set which of the File object is currently selected. */
  pathSelected: _propTypes.default.string,

  /** Function to propogate when the Blob is selected. */
  onBlob: _propTypes.default.func,

  /** The depth of the path in the tree sets the inset of the component. */
  depth: _propTypes.default.number,

  /** The nested filepath that will concatenate. */
  filepath: _propTypes.default.string
};
TreeObject.defaultProps = {
  selected: false,
  depth: 1
};
var _default = TreeObject;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RyZWUtYmxvYi9UcmVlT2JqZWN0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBhZGRpbmdSaWdodCIsInBhdGhUZXh0IiwicGFkZGluZ0xlZnQiLCJUcmVlT2JqZWN0IiwicGF0aCIsInRyZWUiLCJ1cmwiLCJzZWxlY3RlZCIsInBhdGhTZWxlY3RlZCIsIm9uQmxvYiIsImRlcHRoIiwiZmlsZXBhdGgiLCJjb21wYXJlciIsImNsYXNzZXMiLCJfZmlsZXBhdGgiLCJQYXRoIiwiam9pbiIsImljb24iLCJtYXJnaW5SaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwic2hhcGUiLCJ0eXBlIiwib25lT2YiLCJib29sIiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUtBOztBQUtBOzs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdCQUFXLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsWUFBWSxFQUFFO0FBRFYsS0FEK0I7QUFJckNDLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxXQUFXLEVBQUU7QUFETDtBQUoyQixHQUFMO0FBQUEsQ0FBaEIsQ0FBbEI7QUFTQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsVUFBVCxPQVVHO0FBQUEsTUFUREMsSUFTQyxRQVREQSxJQVNDO0FBQUEsTUFSREMsSUFRQyxRQVJEQSxJQVFDO0FBQUEsTUFQREMsR0FPQyxRQVBEQSxHQU9DO0FBQUEsTUFOREMsUUFNQyxRQU5EQSxRQU1DO0FBQUEsTUFMREMsWUFLQyxRQUxEQSxZQUtDO0FBQUEsTUFKREMsTUFJQyxRQUpEQSxNQUlDO0FBQUEsTUFIREMsS0FHQyxRQUhEQSxLQUdDO0FBQUEsTUFGREMsUUFFQyxRQUZEQSxRQUVDO0FBQUEsTUFEREMsUUFDQyxRQUREQSxRQUNDO0FBQ0QsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6Qjs7QUFDQSxNQUFNaUIsU0FBUyxHQUFHQyxjQUFLQyxJQUFMLENBQVVMLFFBQVEsSUFBSSxFQUF0QixFQUEwQlAsSUFBMUIsQ0FBbEI7O0FBRUEsTUFBTWEsSUFBSSxHQUFHVixRQUFRLGdCQUNuQiw2QkFBQyxhQUFELE9BRG1CLGdCQUVuQiw2QkFBQyxpQkFBRCxPQUZGO0FBSUEsc0JBQ0UseUVBQ0UsNkJBQUMsY0FBRDtBQUNFLElBQUEsTUFBTSxNQURSO0FBRUUsSUFBQSxRQUFRLEVBQUVBLFFBRlo7QUFHRSxJQUFBLFNBQVMsRUFBRU0sT0FBTyxDQUFDZCxJQUhyQjtBQUlFLElBQUEsS0FBSyxFQUFFO0FBQUNHLE1BQUFBLFdBQVcsRUFBRVEsS0FBSyxHQUFHO0FBQXRCO0FBSlQsa0JBTUUsNkJBQUMsa0JBQUQ7QUFBYyxJQUFBLEtBQUssRUFBRTtBQUFFUSxNQUFBQSxXQUFXLEVBQUU7QUFBZjtBQUFyQixLQUNHRCxJQURILENBTkYsZUFTRSw2QkFBQyxrQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFFSixPQUFPLENBQUNaLFFBRHJCO0FBRUUsSUFBQSxPQUFPLEVBQUVHLElBQUksR0FBRztBQUZsQixJQVRGLENBREYsZUFlRSw2QkFBQyxNQUFEO0FBQ0UsSUFBQSxZQUFZLEVBQUVJLFlBRGhCO0FBRUUsSUFBQSxJQUFJLEVBQUVILElBRlI7QUFHRSxJQUFBLEdBQUcsRUFBRUMsR0FIUDtBQUlFLElBQUEsUUFBUSxFQUFFQyxRQUpaO0FBS0UsSUFBQSxNQUFNLEVBQUVFLE1BTFY7QUFNRSxJQUFBLEtBQUssRUFBRUMsS0FBSyxHQUFHLENBTmpCO0FBT0UsSUFBQSxRQUFRLEVBQUVJLFNBUFo7QUFRRSxJQUFBLFFBQVEsRUFBRUY7QUFSWixJQWZGLENBREY7QUE0QkQ7O0FBRURULFVBQVUsQ0FBQ2dCLFNBQVgsR0FBdUI7QUFDckI7QUFDQWYsRUFBQUEsSUFBSSxFQUFFZ0IsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBRkY7O0FBR3JCO0FBQ0FqQixFQUFBQSxJQUFJLEVBQUVlLG1CQUFVRyxPQUFWLENBQWtCSCxtQkFBVUksS0FBVixDQUFnQjtBQUN0Q3BCLElBQUFBLElBQUksRUFBRWdCLG1CQUFVQyxNQUFWLENBQWlCQyxVQURlO0FBRXRDRyxJQUFBQSxJQUFJLEVBQUVMLG1CQUFVTSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFRLE1BQVIsQ0FBaEIsRUFBaUNKO0FBRkQsR0FBaEIsQ0FBbEIsQ0FKZTs7QUFRckI7QUFDQWhCLEVBQUFBLEdBQUcsRUFBRWMsbUJBQVVDLE1BVE07O0FBVXJCO0FBQ0FkLEVBQUFBLFFBQVEsRUFBRWEsbUJBQVVPLElBWEM7O0FBWXJCO0FBQ0FuQixFQUFBQSxZQUFZLEVBQUVZLG1CQUFVQyxNQWJIOztBQWNyQjtBQUNBWixFQUFBQSxNQUFNLEVBQUVXLG1CQUFVUSxJQWZHOztBQWdCckI7QUFDQWxCLEVBQUFBLEtBQUssRUFBRVUsbUJBQVVTLE1BakJJOztBQWtCckI7QUFDQWxCLEVBQUFBLFFBQVEsRUFBRVMsbUJBQVVDO0FBbkJDLENBQXZCO0FBc0JBbEIsVUFBVSxDQUFDMkIsWUFBWCxHQUEwQjtBQUN4QnZCLEVBQUFBLFFBQVEsRUFBRSxLQURjO0FBRXhCRyxFQUFBQSxLQUFLLEVBQUU7QUFGaUIsQ0FBMUI7ZUFLZVAsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7XG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUljb24sXG4gIExpc3RJdGVtVGV4dCxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHtcbiAgRm9sZGVyLFxuICBGb2xkZXJPcGVuLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xuXG5pbXBvcnQgeyBUcmVlIH0gZnJvbSAnLi8nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nUmlnaHQ6ICcwLjdlbScsXG4gIH0sXG4gIHBhdGhUZXh0OiB7XG4gICAgcGFkZGluZ0xlZnQ6ICcwLjdlbScsXG4gIH0sXG59KSk7XG5cbi8qKlxuICogQSBUcmVlT2JqZWN0IENvbXBvbmVudCB0byByZW5kZXIgYSBHaXQgVHJlZSB0cmVlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gVHJlZU9iamVjdCh7XG4gIHBhdGgsXG4gIHRyZWUsXG4gIHVybCxcbiAgc2VsZWN0ZWQsXG4gIHBhdGhTZWxlY3RlZCxcbiAgb25CbG9iLFxuICBkZXB0aCxcbiAgZmlsZXBhdGgsXG4gIGNvbXBhcmVyLFxufSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IF9maWxlcGF0aCA9IFBhdGguam9pbihmaWxlcGF0aCB8fCAnJywgcGF0aCk7XG5cbiAgY29uc3QgaWNvbiA9IHNlbGVjdGVkID9cbiAgICA8Rm9sZGVyIC8+IDpcbiAgICA8Rm9sZGVyT3BlbiAvPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlzdEl0ZW1cbiAgICAgICAgYnV0dG9uXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IGRlcHRoICsgJ2VtJ319XG4gICAgICA+XG4gICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAge2ljb259XG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhdGhUZXh0fVxuICAgICAgICAgIHByaW1hcnk9e3BhdGggKyAnLyd9XG4gICAgICAgIC8+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAgPFRyZWVcbiAgICAgICAgcGF0aFNlbGVjdGVkPXtwYXRoU2VsZWN0ZWR9XG4gICAgICAgIHRyZWU9e3RyZWV9XG4gICAgICAgIHVybD17dXJsfVxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgIG9uQmxvYj17b25CbG9ifVxuICAgICAgICBkZXB0aD17ZGVwdGggKyAxfVxuICAgICAgICBmaWxlcGF0aD17X2ZpbGVwYXRofVxuICAgICAgICBjb21wYXJlcj17Y29tcGFyZXJ9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuXG5UcmVlT2JqZWN0LnByb3BUeXBlcyA9IHtcbiAgLyoqIFRoZSBmaWxlbmFtZSBvciBwYXRoIGluIHRoZSBHaXQgVHJlZSBPYmplY3QgKi9cbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKiogQW4gYXJyYXkgb2YgcGF0aHMgZnJvbSB0aGUgR2l0ZWEgZmlsZSB0cmVlIGFwaS4gKi9cbiAgdHJlZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsndHJlZScsJ2Jsb2InXSkuaXNSZXF1aXJlZCxcbiAgfSkpLFxuICAvKiogVGhlIFVybCB0byBmZXRjaCB0aGUgbGlzdGluZyBpZiBsaXN0aW5nIGlzIG5vdCBwcm92aWRlZC4gKi9cbiAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogU2V0IHdoZXRoZXIgb3Igbm90IHRoZSBGaWxlIG9iamVjdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuICovXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIFNldCB3aGljaCBvZiB0aGUgRmlsZSBvYmplY3QgaXMgY3VycmVudGx5IHNlbGVjdGVkLiAqL1xuICBwYXRoU2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBGdW5jdGlvbiB0byBwcm9wb2dhdGUgd2hlbiB0aGUgQmxvYiBpcyBzZWxlY3RlZC4gKi9cbiAgb25CbG9iOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqIFRoZSBkZXB0aCBvZiB0aGUgcGF0aCBpbiB0aGUgdHJlZSBzZXRzIHRoZSBpbnNldCBvZiB0aGUgY29tcG9uZW50LiAqL1xuICBkZXB0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqIFRoZSBuZXN0ZWQgZmlsZXBhdGggdGhhdCB3aWxsIGNvbmNhdGVuYXRlLiAqL1xuICBmaWxlcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblRyZWVPYmplY3QuZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZDogZmFsc2UsXG4gIGRlcHRoOiAxLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJlZU9iamVjdDtcbiJdfQ==