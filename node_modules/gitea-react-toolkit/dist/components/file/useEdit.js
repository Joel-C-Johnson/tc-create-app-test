"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useEdit;

var _react = require("react");

var _ = require("../..");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useEdit(_ref) {
  var sha = _ref.sha,
      repo = _ref.repo,
      owner = _ref.owner,
      token = _ref.token,
      config = _ref.config,
      branch = _ref.branch,
      author = _ref.author,
      content = _ref.content,
      message = _ref.message,
      filepath = _ref.filepath;

  var _useState = (0, _react.useState)({
    editResponse: null,
    isEditing: false,
    isError: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      isEditing = _useState2$.isEditing,
      isError = _useState2$.isError,
      error = _useState2$.error,
      editResponse = _useState2$.editResponse,
      setState = _useState2[1];

  var _ref2 = token || {},
      tokenid = _ref2.name;

  var _message = message || "Edit '".concat(filepath, "' using '").concat(tokenid, "'");

  function onSaveEdit(_x) {
    return _onSaveEdit.apply(this, arguments);
  }

  function _onSaveEdit() {
    _onSaveEdit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_branch) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!content) {
                _context.next = 10;
                break;
              }

              setState(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  editResponse: null,
                  isEditing: true,
                  isError: false
                });
              });
              _context.next = 5;
              return (0, _.updateContent)({
                sha: sha,
                repo: repo,
                owner: owner,
                config: config,
                author: author,
                content: content,
                filepath: filepath,
                message: _message,
                // Use branch passed to function or branch passed to custom hook. 
                branch: _branch || branch
              });

            case 5:
              response = _context.sent;
              setState(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  editResponse: response
                });
              });
              return _context.abrupt("return", true);

            case 10:
              console.warn('Content value is empty');

            case 11:
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setState(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  isError: true,
                  error: _context.t0
                });
              });
              return _context.abrupt("return", false);

            case 17:
              _context.prev = 17;
              setState(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  isEditing: false
                });
              });
              return _context.finish(17);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13, 17, 20]]);
    }));
    return _onSaveEdit.apply(this, arguments);
  }

  return {
    error: error,
    isError: isError,
    isEditing: isEditing,
    onSaveEdit: onSaveEdit,
    editResponse: editResponse
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbGUvdXNlRWRpdC5qcyJdLCJuYW1lcyI6WyJ1c2VFZGl0Iiwic2hhIiwicmVwbyIsIm93bmVyIiwidG9rZW4iLCJjb25maWciLCJicmFuY2giLCJhdXRob3IiLCJjb250ZW50IiwibWVzc2FnZSIsImZpbGVwYXRoIiwiZWRpdFJlc3BvbnNlIiwiaXNFZGl0aW5nIiwiaXNFcnJvciIsImVycm9yIiwic2V0U3RhdGUiLCJ0b2tlbmlkIiwibmFtZSIsIl9tZXNzYWdlIiwib25TYXZlRWRpdCIsIl9icmFuY2giLCJwcmV2U3RhdGUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLE9BQVQsT0FXWjtBQUFBLE1BVkRDLEdBVUMsUUFWREEsR0FVQztBQUFBLE1BVERDLElBU0MsUUFUREEsSUFTQztBQUFBLE1BUkRDLEtBUUMsUUFSREEsS0FRQztBQUFBLE1BUERDLEtBT0MsUUFQREEsS0FPQztBQUFBLE1BTkRDLE1BTUMsUUFOREEsTUFNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUFBLE1BSkRDLE1BSUMsUUFKREEsTUFJQztBQUFBLE1BSERDLE9BR0MsUUFIREEsT0FHQztBQUFBLE1BRkRDLE9BRUMsUUFGREEsT0FFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQzs7QUFBQSxrQkFDK0QscUJBQVM7QUFDdkVDLElBQUFBLFlBQVksRUFBRSxJQUR5RDtBQUV2RUMsSUFBQUEsU0FBUyxFQUFFLEtBRjREO0FBR3ZFQyxJQUFBQSxPQUFPLEVBQUUsS0FIOEQ7QUFJdkVDLElBQUFBLEtBQUssRUFBRTtBQUpnRSxHQUFULENBRC9EO0FBQUE7QUFBQTtBQUFBLE1BQ1FGLFNBRFIsZUFDUUEsU0FEUjtBQUFBLE1BQ21CQyxPQURuQixlQUNtQkEsT0FEbkI7QUFBQSxNQUM0QkMsS0FENUIsZUFDNEJBLEtBRDVCO0FBQUEsTUFDbUNILFlBRG5DLGVBQ21DQSxZQURuQztBQUFBLE1BQ21ESSxRQURuRDs7QUFBQSxjQU95QlgsS0FBSyxJQUFJLEVBUGxDO0FBQUEsTUFPYVksT0FQYixTQU9PQyxJQVBQOztBQVFELE1BQU1DLFFBQVEsR0FBR1QsT0FBTyxvQkFBYUMsUUFBYixzQkFBaUNNLE9BQWpDLE1BQXhCOztBQVJDLFdBVWNHLFVBVmQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsMEVBVUQsaUJBQTBCQyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxtQkFFUVosT0FGUjtBQUFBO0FBQUE7QUFBQTs7QUFHTU8sY0FBQUEsUUFBUSxDQUFDLFVBQUNNLFNBQUQ7QUFBQSx1REFDSkEsU0FESTtBQUVQVixrQkFBQUEsWUFBWSxFQUFFLElBRlA7QUFHUEMsa0JBQUFBLFNBQVMsRUFBRSxJQUhKO0FBSVBDLGtCQUFBQSxPQUFPLEVBQUU7QUFKRjtBQUFBLGVBQUQsQ0FBUjtBQUhOO0FBQUEscUJBVTZCLHFCQUFjO0FBQ25DWixnQkFBQUEsR0FBRyxFQUFIQSxHQURtQztBQUVuQ0MsZ0JBQUFBLElBQUksRUFBSkEsSUFGbUM7QUFHbkNDLGdCQUFBQSxLQUFLLEVBQUxBLEtBSG1DO0FBSW5DRSxnQkFBQUEsTUFBTSxFQUFOQSxNQUptQztBQUtuQ0UsZ0JBQUFBLE1BQU0sRUFBTkEsTUFMbUM7QUFNbkNDLGdCQUFBQSxPQUFPLEVBQVBBLE9BTm1DO0FBT25DRSxnQkFBQUEsUUFBUSxFQUFSQSxRQVBtQztBQVFuQ0QsZ0JBQUFBLE9BQU8sRUFBRVMsUUFSMEI7QUFTbkM7QUFDQVosZ0JBQUFBLE1BQU0sRUFBRWMsT0FBTyxJQUFJZDtBQVZnQixlQUFkLENBVjdCOztBQUFBO0FBVVlnQixjQUFBQSxRQVZaO0FBdUJNUCxjQUFBQSxRQUFRLENBQUMsVUFBQ00sU0FBRDtBQUFBLHVEQUNKQSxTQURJO0FBRVBWLGtCQUFBQSxZQUFZLEVBQUVXO0FBRlA7QUFBQSxlQUFELENBQVI7QUF2Qk4sK0NBMkJhLElBM0JiOztBQUFBO0FBNkJNQyxjQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSx3QkFBYjs7QUE3Qk47QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdDSVQsY0FBQUEsUUFBUSxDQUFDLFVBQUNNLFNBQUQ7QUFBQSx1REFDSkEsU0FESTtBQUVQUixrQkFBQUEsT0FBTyxFQUFFLElBRkY7QUFHUEMsa0JBQUFBLEtBQUs7QUFIRTtBQUFBLGVBQUQsQ0FBUjtBQWhDSiwrQ0FxQ1csS0FyQ1g7O0FBQUE7QUFBQTtBQXVDSUMsY0FBQUEsUUFBUSxDQUFDLFVBQUNNLFNBQUQ7QUFBQSx1REFDSkEsU0FESTtBQUVQVCxrQkFBQUEsU0FBUyxFQUFFO0FBRko7QUFBQSxlQUFELENBQVI7QUF2Q0o7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FWQztBQUFBO0FBQUE7O0FBd0RELFNBQU87QUFDTEUsSUFBQUEsS0FBSyxFQUFMQSxLQURLO0FBRUxELElBQUFBLE9BQU8sRUFBUEEsT0FGSztBQUdMRCxJQUFBQSxTQUFTLEVBQVRBLFNBSEs7QUFJTE8sSUFBQUEsVUFBVSxFQUFWQSxVQUpLO0FBS0xSLElBQUFBLFlBQVksRUFBWkE7QUFMSyxHQUFQO0FBT0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVwZGF0ZUNvbnRlbnQgfSBmcm9tICcuLi8uLic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUVkaXQoe1xuICBzaGEsXG4gIHJlcG8sXG4gIG93bmVyLFxuICB0b2tlbixcbiAgY29uZmlnLFxuICBicmFuY2gsXG4gIGF1dGhvcixcbiAgY29udGVudCxcbiAgbWVzc2FnZSxcbiAgZmlsZXBhdGgsXG59KSB7XG4gIGNvbnN0IFt7IGlzRWRpdGluZywgaXNFcnJvciwgZXJyb3IsIGVkaXRSZXNwb25zZSB9LCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgZWRpdFJlc3BvbnNlOiBudWxsLFxuICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgaXNFcnJvcjogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gIH0pXG4gIGNvbnN0IHsgbmFtZTogdG9rZW5pZCB9ID0gdG9rZW4gfHwge31cbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlIHx8IGBFZGl0ICcke2ZpbGVwYXRofScgdXNpbmcgJyR7dG9rZW5pZH0nYDtcblxuICBhc3luYyBmdW5jdGlvbiBvblNhdmVFZGl0KF9icmFuY2gpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgZWRpdFJlc3BvbnNlOiBudWxsLFxuICAgICAgICAgIGlzRWRpdGluZzogdHJ1ZSxcbiAgICAgICAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICAgICAgfSkpXG4gIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZGF0ZUNvbnRlbnQoe1xuICAgICAgICAgIHNoYSxcbiAgICAgICAgICByZXBvLFxuICAgICAgICAgIG93bmVyLFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBhdXRob3IsXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICBmaWxlcGF0aCxcbiAgICAgICAgICBtZXNzYWdlOiBfbWVzc2FnZSxcbiAgICAgICAgICAvLyBVc2UgYnJhbmNoIHBhc3NlZCB0byBmdW5jdGlvbiBvciBicmFuY2ggcGFzc2VkIHRvIGN1c3RvbSBob29rLiBcbiAgICAgICAgICBicmFuY2g6IF9icmFuY2ggfHwgYnJhbmNoLFxuICAgICAgICB9KTtcbiAgXG4gICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIGVkaXRSZXNwb25zZTogcmVzcG9uc2UsXG4gICAgICAgIH0pKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDb250ZW50IHZhbHVlIGlzIGVtcHR5JylcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpc0Vycm9yOiB0cnVlLFxuICAgICAgICBlcnJvcixcbiAgICAgIH0pKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXJyb3IsXG4gICAgaXNFcnJvcixcbiAgICBpc0VkaXRpbmcsXG4gICAgb25TYXZlRWRpdCxcbiAgICBlZGl0UmVzcG9uc2UsXG4gIH1cbn0iXX0=