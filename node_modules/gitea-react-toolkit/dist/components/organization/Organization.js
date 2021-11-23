"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _path = _interopRequireDefault(require("path"));

var _ = require("..");

var _icons = require("@material-ui/icons");

var _core2 = require("../../core");

var _localStrings = require("../../core/localStrings");

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

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    avatar: {
      borderRadius: '20%'
    },
    errorMessage: {
      color: _core.colors.red[500]
    }
  };
});

function Organization(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      organization = _ref.organization,
      _ref$onOrganization = _ref.onOrganization,
      onOrganization = _ref$onOrganization === void 0 ? function () {} : _ref$onOrganization,
      selected = _ref.selected,
      _ref$messages = _ref.messages;
  _ref$messages = _ref$messages === void 0 ? {} : _ref$messages;
  var _ref$messages$primary = _ref$messages.primaryLoading,
      primaryLoading = _ref$messages$primary === void 0 ? 'Loading…' : _ref$messages$primary,
      _ref$messages$seconda = _ref$messages.secondaryLoading,
      secondaryLoading = _ref$messages$seconda === void 0 ? 'Attempting to load organization details…' : _ref$messages$seconda,
      _ref$messages$primary2 = _ref$messages.primaryError,
      primaryError = _ref$messages$primary2 === void 0 ? 'No organization' : _ref$messages$primary2,
      _ref$messages$seconda2 = _ref$messages.secondaryError,
      secondaryError = _ref$messages$seconda2 === void 0 ? 'Please provide a valid organization object or url.' : _ref$messages$seconda2;
  var classes = useStyles();

  var _useState = (0, _react.useState)(organization),
      _useState2 = _slicedToArray(_useState, 2),
      org = _useState2[0],
      setOrg = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _ref2 = (0, _react.useContext)(_.AuthenticationContext) || {},
      contextAuthentication = _ref2.state;

  var getData = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
      var _config, _url, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _config = _ref3.config, _url = _ref3.url;
              _context.next = 3;
              return (0, _core2.get)({
                config: _config,
                url: _url
              });

            case 3:
              data = _context.sent;
              setOrg(data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }(), []);
  (0, _useDeepCompareEffect.default)(function () {
    if (url) {
      setLoading(true);
      getData({
        config: config,
        url: url
      });
    } else if (organization) {
      setOrg(organization);
    }

    setLoading(false);
  }, [url, organization, config, getData]);

  var _onOrganization = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var user, hasWritePermissions;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(org === undefined)) {
              _context2.next = 3;
              break;
            }

            onOrganization(org);
            return _context2.abrupt("return");

          case 3:
            // first get the user (if logged in)
            // if not logged in, go ahead and set the org
            user = contextAuthentication.user.login;

            if (user) {
              _context2.next = 7;
              break;
            }

            onOrganization(org);
            return _context2.abrupt("return");

          case 7:
            _context2.next = 9;
            return (0, _core2.isSelectedOrgWritable)({
              org: org,
              user: user,
              config: config
            });

          case 9:
            hasWritePermissions = _context2.sent;

            if (!hasWritePermissions) {
              alert("Your door43 user account doesn't have permission to edit the " + "files in the organization you have chosen.\n" + "Please contact your organization administrator and request write permissions.");
            } else {
              onOrganization(org);
            }

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [org, onOrganization]);

  var _ref6 = org || {},
      avatar_url = _ref6.avatar_url,
      description = _ref6.description,
      full_name = _ref6.full_name,
      username = _ref6.username;

  var primary = full_name || username || loading && primaryLoading || !org && primaryError;
  var secondary = description || loading && secondaryLoading || !org && secondaryError;
  var orgUrl = "https://git.door43.org/".concat(username);
  return /*#__PURE__*/_react.default.createElement(_core.ListItem, {
    selected: selected,
    "data-test": "organization-item",
    alignItems: "flex-start",
    button: true,
    ContainerComponent: "div",
    onClick: _onOrganization
  }, /*#__PURE__*/_react.default.createElement(_core.ListItemAvatar, null, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    alt: full_name || username,
    src: avatar_url,
    className: classes.avatar
  })), /*#__PURE__*/_react.default.createElement(_core.ListItemText, {
    primary: primary,
    secondary: secondary,
    classes: {
      secondary: full_name == null && username == null && loading !== true ? classes.errorMessage : null
    }
  }), org && /*#__PURE__*/_react.default.createElement(_core.ListItemSecondaryAction, null, /*#__PURE__*/_react.default.createElement(_core.Tooltip, {
    title: (0, _localStrings.localString)('OpenOrg'),
    arrow: true
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "aria-label": "Open Link",
    onClick: function onClick() {
      window.open(orgUrl, '_blank');
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.Code, null)))));
}

Organization.propTypes = {
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

  /** Url to get organization data, if organization data is not provided. */
  url: _propTypes.default.string,

  /** Configuration required if paths are provided as URL. */
  config: _propTypes.default.shape({
    server: _propTypes.default.string.isRequired
  }),

  /** The selected organization */
  selected: _propTypes.default.bool,
  messages: _propTypes.default.shape({
    primaryError: _propTypes.default.string,
    secondaryError: _propTypes.default.string,
    primaryLoading: _propTypes.default.string,
    secondaryLoading: _propTypes.default.string
  })
};
var _default = Organization;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9Pcmdhbml6YXRpb24uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiLCJlcnJvck1lc3NhZ2UiLCJjb2xvciIsImNvbG9ycyIsInJlZCIsIk9yZ2FuaXphdGlvbiIsInVybCIsImNvbmZpZyIsIm9yZ2FuaXphdGlvbiIsIm9uT3JnYW5pemF0aW9uIiwic2VsZWN0ZWQiLCJtZXNzYWdlcyIsInByaW1hcnlMb2FkaW5nIiwic2Vjb25kYXJ5TG9hZGluZyIsInByaW1hcnlFcnJvciIsInNlY29uZGFyeUVycm9yIiwiY2xhc3NlcyIsIm9yZyIsInNldE9yZyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiQXV0aGVudGljYXRpb25Db250ZXh0IiwiY29udGV4dEF1dGhlbnRpY2F0aW9uIiwic3RhdGUiLCJnZXREYXRhIiwiX2NvbmZpZyIsIl91cmwiLCJkYXRhIiwiX29uT3JnYW5pemF0aW9uIiwidW5kZWZpbmVkIiwidXNlciIsImxvZ2luIiwiaGFzV3JpdGVQZXJtaXNzaW9ucyIsImFsZXJ0IiwiYXZhdGFyX3VybCIsImRlc2NyaXB0aW9uIiwiZnVsbF9uYW1lIiwidXNlcm5hbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwib3JnVXJsIiwid2luZG93Iiwib3BlbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImlkIiwibnVtYmVyIiwibG9jYXRpb24iLCJ2aXNpYmlsaXR5Iiwid2Vic2l0ZSIsImZ1bmMiLCJzZXJ2ZXIiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFVQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdCQUFXLFVBQUNDLEtBQUQ7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STVCQyxJQUFBQSxFQUFFLEVBQUVKLG1CQUFVSyxNQUFWLENBQWlCRixVQUpPO0FBSzVCRyxJQUFBQSxRQUFRLEVBQUVOLG1CQUFVRSxNQUFWLENBQWlCQyxVQUxDO0FBTTVCVixJQUFBQSxRQUFRLEVBQUVPLG1CQUFVRSxNQUFWLENBQWlCQyxVQU5DO0FBTzVCSSxJQUFBQSxVQUFVLEVBQUVQLG1CQUFVRSxNQUFWLENBQWlCQyxVQVBEO0FBUTVCSyxJQUFBQSxPQUFPLEVBQUVSLG1CQUFVRSxNQUFWLENBQWlCQztBQVJFLEdBQWhCLENBRlM7O0FBWXZCO0FBQ0F0QyxFQUFBQSxjQUFjLEVBQUVtQyxtQkFBVVMsSUFBVixDQUFlTixVQWJSOztBQWN2QjtBQUNBekMsRUFBQUEsR0FBRyxFQUFFc0MsbUJBQVVFLE1BZlE7O0FBZ0J2QjtBQUNBdkMsRUFBQUEsTUFBTSxFQUFFcUMsbUJBQVVDLEtBQVYsQ0FBZ0I7QUFBRVMsSUFBQUEsTUFBTSxFQUFFVixtQkFBVUUsTUFBVixDQUFpQkM7QUFBM0IsR0FBaEIsQ0FqQmU7O0FBa0J2QjtBQUNBckMsRUFBQUEsUUFBUSxFQUFFa0MsbUJBQVVXLElBbkJHO0FBb0J2QjVDLEVBQUFBLFFBQVEsRUFBRWlDLG1CQUFVQyxLQUFWLENBQWdCO0FBQ3hCL0IsSUFBQUEsWUFBWSxFQUFFOEIsbUJBQVVFLE1BREE7QUFFeEIvQixJQUFBQSxjQUFjLEVBQUU2QixtQkFBVUUsTUFGRjtBQUd4QmxDLElBQUFBLGNBQWMsRUFBRWdDLG1CQUFVRSxNQUhGO0FBSXhCakMsSUFBQUEsZ0JBQWdCLEVBQUUrQixtQkFBVUU7QUFKSixHQUFoQjtBQXBCYSxDQUF6QjtlQTRCZXpDLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUVmZmVjdCBmcm9tICd1c2UtZGVlcC1jb21wYXJlLWVmZmVjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUF2YXRhcixcbiAgTGlzdEl0ZW1UZXh0LFxuICBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbixcbiAgSWNvbkJ1dHRvbixcbiAgY29sb3JzLFxuICBUb29sdGlwLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29udGV4dCB9IGZyb20gJy4uJztcblxuaW1wb3J0IHsgQ29kZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5pbXBvcnQgeyBnZXQsIGlzU2VsZWN0ZWRPcmdXcml0YWJsZX0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBsb2NhbFN0cmluZyB9IGZyb20gXCIuLi8uLi9jb3JlL2xvY2FsU3RyaW5nc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgYXZhdGFyOiB7IGJvcmRlclJhZGl1czogJzIwJScgfSxcbiAgZXJyb3JNZXNzYWdlOiB7IGNvbG9yOiBjb2xvcnMucmVkWzUwMF0gfSxcbn0pKTtcblxuZnVuY3Rpb24gT3JnYW5pemF0aW9uKHtcbiAgdXJsID0gJycsXG4gIGNvbmZpZyA9IHt9LFxuICBvcmdhbml6YXRpb24sXG4gIG9uT3JnYW5pemF0aW9uID0gKCkgPT4ge30sXG4gIHNlbGVjdGVkLFxuICBtZXNzYWdlczoge1xuICAgIHByaW1hcnlMb2FkaW5nID0gJ0xvYWRpbmfigKYnLFxuICAgIHNlY29uZGFyeUxvYWRpbmcgPSAnQXR0ZW1wdGluZyB0byBsb2FkIG9yZ2FuaXphdGlvbiBkZXRhaWxz4oCmJyxcblxuICAgIHByaW1hcnlFcnJvciA9ICdObyBvcmdhbml6YXRpb24nLFxuICAgIHNlY29uZGFyeUVycm9yID0gJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgb3JnYW5pemF0aW9uIG9iamVjdCBvciB1cmwuJyxcbiAgfSA9IHt9LFxufSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcmcsIHNldE9yZ10gPSB1c2VTdGF0ZShvcmdhbml6YXRpb24pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBzdGF0ZTogY29udGV4dEF1dGhlbnRpY2F0aW9uIH0gPSB1c2VDb250ZXh0KEF1dGhlbnRpY2F0aW9uQ29udGV4dCkgfHwge307XG5cbiAgY29uc3QgZ2V0RGF0YSA9IHVzZUNhbGxiYWNrKGFzeW5jICh7IGNvbmZpZzogX2NvbmZpZywgdXJsOiBfdXJsIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0KHsgY29uZmlnOiBfY29uZmlnLCB1cmw6IF91cmwgfSk7XG4gICAgc2V0T3JnKGRhdGEpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXJsKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZ2V0RGF0YSh7IGNvbmZpZywgdXJsIH0pO1xuICAgIH0gZWxzZSBpZiAob3JnYW5pemF0aW9uKSB7XG4gICAgICBzZXRPcmcob3JnYW5pemF0aW9uKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFt1cmwsIG9yZ2FuaXphdGlvbiwgY29uZmlnLCBnZXREYXRhXSk7XG5cbiAgY29uc3QgX29uT3JnYW5pemF0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmICggb3JnID09PSB1bmRlZmluZWQgKSB7XG4gICAgICBvbk9yZ2FuaXphdGlvbihvcmcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGZpcnN0IGdldCB0aGUgdXNlciAoaWYgbG9nZ2VkIGluKVxuICAgIC8vIGlmIG5vdCBsb2dnZWQgaW4sIGdvIGFoZWFkIGFuZCBzZXQgdGhlIG9yZ1xuICAgIGxldCB1c2VyID0gY29udGV4dEF1dGhlbnRpY2F0aW9uLnVzZXIubG9naW47XG4gICAgaWYgKCAhdXNlciApIHtcbiAgICAgIG9uT3JnYW5pemF0aW9uKG9yZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdXNlciBkb2VzIG5vdCBoYXZlIHdyaXRlIGFjY2VzcyB0byB0aGUgb3JnXG4gICAgLy8gaS5lLiwgaXMgb25seSBpbiB0ZWFtcyB3aXRoIHJlYWQgYWNjZXNzXG4gICAgLy8gdGhlbiBzaG93IGFsZXJ0IGFuZCBkbyBub3Qgc2V0IHRoZSBvcmdcbiAgICAvLyBtYWtlIHRoZSB1c2VyIHBpY2sgYW5vdGhlclxuICAgIGNvbnN0IGhhc1dyaXRlUGVybWlzc2lvbnMgPSBhd2FpdCBpc1NlbGVjdGVkT3JnV3JpdGFibGUoe29yZyx1c2VyLGNvbmZpZ30pO1xuICAgIGlmICggISBoYXNXcml0ZVBlcm1pc3Npb25zICkge1xuICAgICAgYWxlcnQoXG4gICAgICAgIFwiWW91ciBkb29yNDMgdXNlciBhY2NvdW50IGRvZXNuJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGVkaXQgdGhlIFwiICtcbiAgICAgICAgXCJmaWxlcyBpbiB0aGUgb3JnYW5pemF0aW9uIHlvdSBoYXZlIGNob3Nlbi5cXG5cIiArXG4gICAgICAgIFwiUGxlYXNlIGNvbnRhY3QgeW91ciBvcmdhbml6YXRpb24gYWRtaW5pc3RyYXRvciBhbmQgcmVxdWVzdCB3cml0ZSBwZXJtaXNzaW9ucy5cIlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25Pcmdhbml6YXRpb24ob3JnKTtcbiAgICB9XG4gIH0sIFtvcmcsIG9uT3JnYW5pemF0aW9uXSk7XG5cbiAgY29uc3Qge1xuICAgIGF2YXRhcl91cmwsIGRlc2NyaXB0aW9uLCBmdWxsX25hbWUsIHVzZXJuYW1lLFxuICB9ID0gb3JnIHx8IHt9O1xuXG4gIGNvbnN0IHByaW1hcnkgPVxuICAgIGZ1bGxfbmFtZSB8fFxuICAgIHVzZXJuYW1lIHx8XG4gICAgKGxvYWRpbmcgJiYgcHJpbWFyeUxvYWRpbmcpIHx8XG4gICAgKCFvcmcgJiYgcHJpbWFyeUVycm9yKTtcbiAgY29uc3Qgc2Vjb25kYXJ5ID1cbiAgICBkZXNjcmlwdGlvbiB8fCAobG9hZGluZyAmJiBzZWNvbmRhcnlMb2FkaW5nKSB8fCAoIW9yZyAmJiBzZWNvbmRhcnlFcnJvcik7XG4gIGNvbnN0IG9yZ1VybCA9IGBodHRwczovL2dpdC5kb29yNDMub3JnLyR7dXNlcm5hbWV9YDtcbiAgcmV0dXJuIChcbiAgICA8TGlzdEl0ZW1cbiAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgIGRhdGEtdGVzdD0nb3JnYW5pemF0aW9uLWl0ZW0nXG4gICAgICBhbGlnbkl0ZW1zPSdmbGV4LXN0YXJ0J1xuICAgICAgYnV0dG9uXG4gICAgICBDb250YWluZXJDb21wb25lbnQ9J2RpdidcbiAgICAgIG9uQ2xpY2s9e19vbk9yZ2FuaXphdGlvbn1cbiAgICA+XG4gICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgIDxBdmF0YXJcbiAgICAgICAgICBhbHQ9e2Z1bGxfbmFtZSB8fCB1c2VybmFtZX1cbiAgICAgICAgICBzcmM9e2F2YXRhcl91cmx9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn1cbiAgICAgICAgLz5cbiAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgIHByaW1hcnk9e3ByaW1hcnl9XG4gICAgICAgIHNlY29uZGFyeT17c2Vjb25kYXJ5fVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgc2Vjb25kYXJ5OlxuICAgICAgICAgICAgZnVsbF9uYW1lID09IG51bGwgJiYgdXNlcm5hbWUgPT0gbnVsbCAmJiBsb2FkaW5nICE9PSB0cnVlXG4gICAgICAgICAgICAgID8gY2xhc3Nlcy5lcnJvck1lc3NhZ2VcbiAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHtvcmcgJiYgKFxuICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2xvY2FsU3RyaW5nKCdPcGVuT3JnJyl9IGFycm93PlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSdPcGVuIExpbmsnXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHdpbmRvdy5vcGVuKG9yZ1VybCwgJ19ibGFuaycpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29kZSAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICApfVxuICAgIDwvTGlzdEl0ZW0+XG4gICk7XG59XG5cbk9yZ2FuaXphdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKiBPcmdhbml6YXRpb24gZGF0YSB0byByZW5kZXIsIGlmIHVybCBub3QgcHJvdmlkZWQuICovXG4gIG9yZ2FuaXphdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhdmF0YXJfdXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBmdWxsX25hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB2aXNpYmlsaXR5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgd2Vic2l0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSxcbiAgLyoqIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBvcmdhbml6YXRpb24gaXMgc2VsZWN0ZWQuICovXG4gIG9uT3JnYW5pemF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKiogVXJsIHRvIGdldCBvcmdhbml6YXRpb24gZGF0YSwgaWYgb3JnYW5pemF0aW9uIGRhdGEgaXMgbm90IHByb3ZpZGVkLiAqL1xuICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBDb25maWd1cmF0aW9uIHJlcXVpcmVkIGlmIHBhdGhzIGFyZSBwcm92aWRlZCBhcyBVUkwuICovXG4gIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHsgc2VydmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQgfSksXG4gIC8qKiBUaGUgc2VsZWN0ZWQgb3JnYW5pemF0aW9uICovXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVzc2FnZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcHJpbWFyeUVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlY29uZGFyeUVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByaW1hcnlMb2FkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlY29uZGFyeUxvYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemF0aW9uO1xuIl19