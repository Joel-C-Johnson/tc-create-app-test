"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _ = require("../..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing(2), "px ").concat(theme.spacing(3), "px ").concat(theme.spacing(3), "px")
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      marginTop: theme.spacing(3)
    }
  };
});

function RepositoryForm() {
  var classes = useStyles();

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      errorText = _useState4[0],
      setErrorText = _useState4[1];

  var _useContext = (0, _react.useContext)(_.AuthenticationContext),
      authentication = _useContext.state;

  var _useContext2 = (0, _react.useContext)(_.RepositoryContext),
      repository = _useContext2.state,
      _useContext2$actions = _useContext2.actions,
      create = _useContext2$actions.create,
      save = _useContext2$actions.save;

  var updateFormData = function updateFormData(event) {
    var _event$target = event.target,
        type = _event$target.type,
        name = _event$target.name,
        value = _event$target.value,
        checked = _event$target.checked;

    var _formData = _objectSpread({}, formData);

    if (type === 'checkbox') _formData[value] = checked;else _formData[name] = value;
    setFormData(_formData);
  };

  var mode;
  var authenticated = authentication && authentication.user;

  if (authenticated) {
    var admin = repository && repository.permissions.admin;
    if (!repository) mode = 'create';else if (admin) mode = 'edit';
  } else if (repository) mode = 'view';else mode = 'error';

  var disabled = mode === 'view';
  var handleSubmit = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(settings) {
      var repo, _repo;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(mode === 'create')) {
                _context.next = 7;
                break;
              }

              _context.next = 3;
              return create(settings);

            case 3:
              repo = _context.sent;
              if (!repo) setErrorText('Error creating repository.');
              _context.next = 12;
              break;

            case 7:
              if (!(mode === 'edit')) {
                _context.next = 12;
                break;
              }

              _context.next = 10;
              return save(settings);

            case 10:
              _repo = _context.sent;
              if (!_repo) setErrorText('Error editing repository.');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [create, mode, save]);
  var actionText;
  if (mode === 'create') actionText = 'Create Repository';else if (mode === 'edit') actionText = 'Edit Repository';else if (mode === 'view') actionText = 'View Repository';else if (mode === 'error') {
    actionText = 'View/Edit/Create Repository';
    if (!errorText) setErrorText('Please login and/or provide a repository');
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    className: classes.avatar
  }, /*#__PURE__*/_react.default.createElement(_icons.FolderShared, null)), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "h1",
    variant: "h5"
  }, actionText), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    component: "p",
    style: {
      color: 'red'
    }
  }, errorText), /*#__PURE__*/_react.default.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    onChange: updateFormData,
    helperText: "Name must be alpha-numeric and not include spaces.",
    disabled: disabled,
    defaultValue: repository ? repository.name : ''
  }), /*#__PURE__*/_react.default.createElement(_core.TextField, {
    name: "description",
    label: "Description",
    type: "text",
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    onChange: updateFormData,
    disabled: disabled,
    defaultValue: repository ? repository.description : ''
  }), /*#__PURE__*/_react.default.createElement(_.FormCheckbox, {
    name: "private",
    label: "Private",
    onChange: updateFormData,
    disabled: disabled,
    checked: repository ? repository.private : false
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    type: "button",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    disabled: disabled,
    onClick: function onClick() {
      return handleSubmit(formData);
    }
  }, actionText)));
}

RepositoryForm.propTypes = {};
RepositoryForm.defaultProps = {
  actionText: 'Repository Settings'
};
var _default = RepositoryForm;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvY3J1ZC9SZXBvc2l0b3J5Rm9ybS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwic3BhY2luZyIsImF2YXRhciIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImZvcm0iLCJ3aWR0aCIsIm1hcmdpblRvcCIsInN1Ym1pdCIsIlJlcG9zaXRvcnlGb3JtIiwiY2xhc3NlcyIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlcnJvclRleHQiLCJzZXRFcnJvclRleHQiLCJBdXRoZW50aWNhdGlvbkNvbnRleHQiLCJhdXRoZW50aWNhdGlvbiIsInN0YXRlIiwiUmVwb3NpdG9yeUNvbnRleHQiLCJyZXBvc2l0b3J5IiwiYWN0aW9ucyIsImNyZWF0ZSIsInNhdmUiLCJ1cGRhdGVGb3JtRGF0YSIsImV2ZW50IiwidGFyZ2V0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJfZm9ybURhdGEiLCJtb2RlIiwiYXV0aGVudGljYXRlZCIsInVzZXIiLCJhZG1pbiIsInBlcm1pc3Npb25zIiwiZGlzYWJsZWQiLCJoYW5kbGVTdWJtaXQiLCJzZXR0aW5ncyIsInJlcG8iLCJhY3Rpb25UZXh0IiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsInByaXZhdGUiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQU1BOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTUEsU0FBUyxHQUFHLHdCQUFXLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSkMsTUFB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QUFFbkIsY0FGWjtBQUU0QixJQUFBLFFBQVEsRUFBRWEsUUFGdEM7QUFHRSxJQUFBLE9BQU8sRUFBRWpCLFVBQVUsR0FBR0EsVUFBVSxDQUFDd0IsT0FBZCxHQUF3QjtBQUg3QyxJQWRGLGVBbUJFLDZCQUFDLFlBQUQ7QUFBUSxJQUFBLElBQUksRUFBQyxRQUFiO0FBQXNCLElBQUEsU0FBUyxNQUEvQjtBQUFnQyxJQUFBLE9BQU8sRUFBQyxXQUF4QztBQUFvRCxJQUFBLEtBQUssRUFBQyxTQUExRDtBQUNFLElBQUEsU0FBUyxFQUFFakMsT0FBTyxDQUFDRixNQURyQjtBQUM2QixJQUFBLFFBQVEsRUFBRTRCLFFBRHZDO0FBRUUsSUFBQSxPQUFPLEVBQUc7QUFBQSxhQUFNQyxZQUFZLENBQUMxQixRQUFELENBQWxCO0FBQUE7QUFGWixLQUlHNkIsVUFKSCxDQW5CRixDQVZGLENBREY7QUF1Q0Q7O0FBRUQvQixjQUFjLENBQUNtQyxTQUFmLEdBQTJCLEVBQTNCO0FBRUFuQyxjQUFjLENBQUNvQyxZQUFmLEdBQThCO0FBQzVCTCxFQUFBQSxVQUFVLEVBQUU7QUFEZ0IsQ0FBOUI7ZUFJZS9CLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJ1dHRvbixcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge1xuICBGb2xkZXJTaGFyZWQsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5cbmltcG9ydCB7XG4gIEZvcm1DaGVja2JveCxcbiAgUmVwb3NpdG9yeUNvbnRleHQsXG4gIEF1dGhlbnRpY2F0aW9uQ29udGV4dCxcbn0gZnJvbSAnLi4vLi4nO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoMyl9cHggJHt0aGVtZS5zcGFjaW5nKDMpfXB4YCxcbiAgfSxcbiAgYXZhdGFyOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIFJlcG9zaXRvcnlGb3JtKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZXJyb3JUZXh0LCBzZXRFcnJvclRleHRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgeyBzdGF0ZTogYXV0aGVudGljYXRpb24gfSA9IHVzZUNvbnRleHQoQXV0aGVudGljYXRpb25Db250ZXh0KTtcbiAgY29uc3QgeyBzdGF0ZTogcmVwb3NpdG9yeSwgYWN0aW9uczogeyBjcmVhdGUsIHNhdmUgfSB9ID0gdXNlQ29udGV4dChSZXBvc2l0b3J5Q29udGV4dCk7XG5cbiAgY29uc3QgdXBkYXRlRm9ybURhdGEgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHR5cGUsIG5hbWUsIHZhbHVlLCBjaGVja2VkIH0gPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgX2Zvcm1EYXRhID0geyAuLi5mb3JtRGF0YSB9O1xuXG4gICAgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIF9mb3JtRGF0YVt2YWx1ZV0gPSBjaGVja2VkO1xuICAgIGVsc2UgX2Zvcm1EYXRhW25hbWVdID0gdmFsdWU7XG4gICAgc2V0Rm9ybURhdGEoX2Zvcm1EYXRhKTtcbiAgfTtcblxuICBsZXQgbW9kZTtcbiAgY29uc3QgYXV0aGVudGljYXRlZCA9IChhdXRoZW50aWNhdGlvbiAmJiBhdXRoZW50aWNhdGlvbi51c2VyKTtcblxuICBpZiAoYXV0aGVudGljYXRlZCkge1xuICAgIGNvbnN0IGFkbWluID0gcmVwb3NpdG9yeSAmJiByZXBvc2l0b3J5LnBlcm1pc3Npb25zLmFkbWluO1xuXG4gICAgaWYgKCFyZXBvc2l0b3J5KSBtb2RlID0gJ2NyZWF0ZSc7XG4gICAgZWxzZSBpZiAoYWRtaW4pIG1vZGUgPSAnZWRpdCc7XG4gIH0gZWxzZSBpZiAocmVwb3NpdG9yeSkgbW9kZSA9ICd2aWV3JztcbiAgZWxzZSBtb2RlID0gJ2Vycm9yJztcblxuICBjb25zdCBkaXNhYmxlZCA9IChtb2RlID09PSAndmlldycpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKGFzeW5jIChzZXR0aW5ncykgPT4ge1xuICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xuICAgICAgY29uc3QgcmVwbyA9IGF3YWl0IGNyZWF0ZShzZXR0aW5ncyk7XG5cbiAgICAgIGlmICghcmVwbykgc2V0RXJyb3JUZXh0KCdFcnJvciBjcmVhdGluZyByZXBvc2l0b3J5LicpO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2VkaXQnKSB7XG4gICAgICBjb25zdCByZXBvID0gYXdhaXQgc2F2ZShzZXR0aW5ncyk7XG5cbiAgICAgIGlmICghcmVwbykgc2V0RXJyb3JUZXh0KCdFcnJvciBlZGl0aW5nIHJlcG9zaXRvcnkuJyk7XG4gICAgfVxuICB9LCBbY3JlYXRlLCBtb2RlLCBzYXZlXSk7XG5cbiAgbGV0IGFjdGlvblRleHQ7XG5cbiAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSBhY3Rpb25UZXh0ID0gJ0NyZWF0ZSBSZXBvc2l0b3J5JztcbiAgZWxzZSBpZiAobW9kZSA9PT0gJ2VkaXQnKSBhY3Rpb25UZXh0ID0gJ0VkaXQgUmVwb3NpdG9yeSc7XG4gIGVsc2UgaWYgKG1vZGUgPT09ICd2aWV3JykgYWN0aW9uVGV4dCA9ICdWaWV3IFJlcG9zaXRvcnknO1xuICBlbHNlIGlmIChtb2RlID09PSAnZXJyb3InKSB7XG4gICAgYWN0aW9uVGV4dCA9ICdWaWV3L0VkaXQvQ3JlYXRlIFJlcG9zaXRvcnknO1xuXG4gICAgaWYgKCFlcnJvclRleHQpIHNldEVycm9yVGV4dCgnUGxlYXNlIGxvZ2luIGFuZC9vciBwcm92aWRlIGEgcmVwb3NpdG9yeScpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XG4gICAgICAgIDxGb2xkZXJTaGFyZWQgLz5cbiAgICAgIDwvQXZhdGFyPlxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAge2FjdGlvblRleHR9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxuICAgICAgICB7ZXJyb3JUZXh0fVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICA8VGV4dEZpZWxkIG5hbWU9XCJuYW1lXCIgbGFiZWw9XCJOYW1lXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZFxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG1hcmdpbj1cIm5vcm1hbFwiIGZ1bGxXaWR0aFxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVGb3JtRGF0YX1cbiAgICAgICAgICBoZWxwZXJUZXh0PVwiTmFtZSBtdXN0IGJlIGFscGhhLW51bWVyaWMgYW5kIG5vdCBpbmNsdWRlIHNwYWNlcy5cIlxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JlcG9zaXRvcnkgPyByZXBvc2l0b3J5Lm5hbWUgOiAnJ31cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwiZGVzY3JpcHRpb25cIiBsYWJlbD1cIkRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG1hcmdpbj1cIm5vcm1hbFwiIGZ1bGxXaWR0aFxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVGb3JtRGF0YX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXBvc2l0b3J5ID8gcmVwb3NpdG9yeS5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybUNoZWNrYm94XG4gICAgICAgICAgbmFtZT1cInByaXZhdGVcIiBsYWJlbD1cIlByaXZhdGVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVGb3JtRGF0YX0gZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGNoZWNrZWQ9e3JlcG9zaXRvcnkgPyByZXBvc2l0b3J5LnByaXZhdGUgOiBmYWxzZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZnVsbFdpZHRoIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9IGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlU3VibWl0KGZvcm1EYXRhKSB9XG4gICAgICAgID5cbiAgICAgICAgICB7YWN0aW9uVGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlcG9zaXRvcnlGb3JtLnByb3BUeXBlcyA9IHt9O1xuXG5SZXBvc2l0b3J5Rm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGlvblRleHQ6ICdSZXBvc2l0b3J5IFNldHRpbmdzJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9zaXRvcnlGb3JtO1xuIl19