"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));

var _helpers = require("./helpers");

var _ = require("..");

var _dcsCatalogNextApis = require("./dcsCatalogNextApis");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function useFile(_ref) {
  var authentication = _ref.authentication,
      repository = _ref.repository,
      filepath = _ref.filepath,
      onFilepath = _ref.onFilepath,
      defaultContent = _ref.defaultContent,
      _config = _ref.config,
      _ref$create = _ref.create,
      create = _ref$create === void 0 ? false : _ref$create,
      onOpenValidation = _ref.onOpenValidation,
      onLoadCache = _ref.onLoadCache,
      onSaveCache = _ref.onSaveCache,
      onConfirmClose = _ref.onConfirmClose,
      releaseFlag = _ref.releaseFlag;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isChanged = _useState4[0],
      setIsChanged = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      blob = _useState6[0],
      setBlob = _useState6[1];

  var _useContext = (0, _react.useContext)(_.RepositoryContext),
      updateBranch = _useContext.actions.updateBranch,
      repositoryConfig = _useContext.config;

  var config = _config || repositoryConfig;
  var branch = repository && (repository.branch || repository.default_branch);

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      deleted = _useState8[0],
      setDeleted = _useState8[1];

  var _setBlob = (0, _react.useCallback)(function (_blob) {
    if (blob && _blob && onConfirmClose) {
      if (onConfirmClose()) {
        setBlob(_blob);
      }
    } else {
      setBlob(_blob);
    }
  }, [blob, setBlob, onConfirmClose]);

  var _useBlob = (0, _.useBlob)({
    blob: blob,
    onBlob: _setBlob,
    config: config,
    repository: repository,
    filepath: filepath,
    releaseFlag: releaseFlag
  }),
      blobState = _useBlob.state,
      blobActions = _useBlob.actions,
      blobComponents = _useBlob.components;

  var _ref2 = repository && repository.permissions ? repository.permissions : {},
      writeable = _ref2.push;

  var update = (0, _react.useCallback)(function (_file) {
    setFile(_file);
  }, []);
  (0, _react.useEffect)(function () {
    setIsChanged(false);
  }, [file, deleted, closed]);
  var read = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_filepath) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!onFilepath) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return onFilepath(_filepath);

            case 3:
              ;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), [onFilepath]);
  var load = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _file, defaultCachedContentFile, content, _publishedContent, _repository$catalog, _repository$catalog$p, prodTag;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(config && repository && filepath)) {
              _context2.next = 29;
              break;
            }

            _context2.next = 3;
            return (0, _helpers.ensureFile)({
              filepath: filepath,
              defaultContent: defaultContent,
              authentication: authentication,
              config: config,
              repository: repository,
              branch: branch,
              onOpenValidation: onOpenValidation
            });

          case 3:
            _file = _context2.sent;
            console.log("ensureFile:");
            console.log(_file);
            // if (loadDefaultCachedContentFile) { 
            //   console.log("_file.html_url");
            //   console.log(_file.html_url);
            //   defaultCachedContentFile = await loadDefaultCachedContentFile(_file.html_url);
            // }
            console.log("GRT // onLoadCache!", _file, _file.html_url);

            if (!(onLoadCache && _file && _file.html_url)) {
              _context2.next = 11;
              break;
            }

            _context2.next = 10;
            return onLoadCache({
              authentication: authentication,
              repository: repository,
              branch: branch,
              html_url: _file.html_url
            });

          case 10:
            defaultCachedContentFile = _context2.sent;

          case 11:
            console.log("GRT defaultContent", '|', defaultContent);
            console.log("GRT defaultCachedContent", '|', defaultCachedContentFile);

            if (defaultCachedContentFile) {
              console.log(defaultCachedContentFile.sha);
            }

            if (_file) {
              console.log(_file.sha);
            } // let content;
            // content = await repositoryActions.fileFromZip(filepath);
            //const content = await getContentFromFile(_file);
            // Allow app to provide CACHED ("offline" content);
            // Might be different BRANCH (different user) or different FILE.
            // Might be STALE (sha has changed on DCS).
            // (NOTE: STALE cache would mean THIS user edited the same file in another browser.)


            if (!(defaultCachedContentFile && defaultCachedContentFile.content && defaultCachedContentFile.sha && defaultCachedContentFile.html_url && defaultCachedContentFile.filepath && defaultCachedContentFile.timestamp && defaultCachedContentFile.sha === _file.sha && defaultCachedContentFile.html_url === _file.html_url)) {
              _context2.next = 19;
              break;
            }

            // Load autosaved content:
            content = defaultCachedContentFile.content;
            _context2.next = 28;
            break;

          case 19:
            if (_file && _file.content && defaultCachedContentFile && defaultCachedContentFile.content && defaultCachedContentFile.filepath && defaultCachedContentFile.sha && defaultCachedContentFile.timestamp) {
              console.log(_file);
              console.log(defaultCachedContentFile);
              alert("A previous file was autosaved. The autosaved file will be overwritten.\n\n" + "File: " + defaultCachedContentFile.filepath + ".\n" + "Edited: " + defaultCachedContentFile.timestamp.toLocaleString() + ".");
            } // Get SERVER content: Overwrite cache:


            _context2.next = 22;
            return (0, _helpers.getContentFromFile)(_file);

          case 22:
            content = _context2.sent;
            // Check catalog next:
            prodTag = (_repository$catalog = repository.catalog) === null || _repository$catalog === void 0 ? void 0 : (_repository$catalog$p = _repository$catalog.prod) === null || _repository$catalog$p === void 0 ? void 0 : _repository$catalog$p.branch_or_tag_name;

            if (!prodTag) {
              _context2.next = 28;
              break;
            }

            _context2.next = 27;
            return (0, _dcsCatalogNextApis.fetchCatalogContent)('unfoldingword', repository.name, prodTag, filepath, config);

          case 27:
            _publishedContent = _context2.sent;

          case 28:
            update(_objectSpread(_objectSpread({}, _file), {}, {
              branch: branch,
              content: content,
              filepath: _file.path,
              publishedContent: _publishedContent
            }));

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [authentication, branch, config, defaultContent, onLoadCache, filepath, repository, update]);
  var createFile = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
      var _branch, _filepath, _defaultContent, onOpenValidation, _file;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _branch = _ref5.branch, _filepath = _ref5.filepath, _defaultContent = _ref5.defaultContent, onOpenValidation = _ref5.onOpenValidation;

              if (!(config && repository)) {
                _context3.next = 7;
                break;
              }

              _context3.next = 4;
              return (0, _helpers.ensureFile)({
                authentication: authentication,
                config: config,
                repository: repository,
                branch: _branch,
                filepath: _filepath,
                defaultContent: _defaultContent,
                onOpenValidation: onOpenValidation
              });

            case 4:
              _file = _context3.sent;

              if (_file) {
                updateBranch(_branch);
                onFilepath(_filepath);
              }

              ;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }(), [authentication, config, repository, updateBranch, onFilepath]);
  var close = (0, _react.useCallback)(function () {
    if (blobActions && blobActions.close) {
      blobActions.close();
    }

    ;

    if (onFilepath) {
      onFilepath();
    }

    ;
    update();
  }, [update, blobActions, onFilepath]);
  var save = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(content) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log("GRT save // will save file");
              _context5.next = 3;
              return (0, _helpers.saveFile)({
                authentication: authentication,
                repository: repository,
                branch: branch,
                file: file,
                content: content
              }).then(
              /*#__PURE__*/
              // Empty cache if user has saved this file
              // (save() will not happen for "OFFLINE" system files)
              _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        console.log("GRT save // will EMPTY cache");
                        _context4.next = 3;
                        return saveCache(null);

                      case 3:
                        console.log("GRT save // will load file");
                        _context4.next = 6;
                        return load();

                      case 6:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }(), [writeable, authentication, repository, branch, file, load, _helpers.saveFile, saveCache]);
  var saveCache = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(content) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!onSaveCache) {
                _context6.next = 3;
                break;
              }

              _context6.next = 3;
              return onSaveCache({
                authentication: authentication,
                repository: repository,
                branch: branch,
                file: file,
                content: content
              });

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x4) {
      return _ref9.apply(this, arguments);
    };
  }(), [writeable, authentication, repository, branch, file, onSaveCache]);
  var dangerouslyDelete = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var _deleted;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!writeable) {
              _context7.next = 5;
              break;
            }

            _context7.next = 3;
            return (0, _helpers.deleteFile)({
              authentication: authentication,
              repository: repository,
              file: file,
              branch: branch
            });

          case 3:
            _deleted = _context7.sent;

            if (_deleted) {
              setDeleted(true);
            }

          case 5:
            ;

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })), [file, authentication, branch, repository, writeable]);
  (0, _useDeepCompareEffect.default)(function () {
    var notLoaded = !file && filepath && !deleted;
    var loadNew = file && filepath && file.filepath !== filepath;

    if (notLoaded || loadNew) {
      load();
    }
  }, [deleted, filepath, load, file]);
  var blobFilepath = blobState && blobState.filepath;
  (0, _react.useEffect)(function () {
    if (blobFilepath && onFilepath) {
      onFilepath(blobFilepath);
    }

    ;
  }, [blobFilepath, onFilepath]);
  (0, _useDeepCompareEffect.default)(function () {
    // if there is a file but no repository, close file.
    if (!repository && file) close();
  }, [repository, file, close]);
  (0, _react.useEffect)(function () {
    if (deleted) {
      close();
      setDeleted(false);
    }

    ;
  }, [deleted, close]);
  var actions = {
    update: update,
    load: load,
    read: read,
    save: save,
    saveCache: saveCache,
    onSaveCache: onSaveCache,
    onLoadCache: onLoadCache,
    close: close,
    dangerouslyDelete: dangerouslyDelete,
    setIsChanged: setIsChanged,
    onConfirmClose: onConfirmClose
  };
  var components = {
    create: repository && /*#__PURE__*/_react.default.createElement(_.FileForm, {
      branch: branch,
      defaultContent: defaultContent,
      onSubmit: createFile
    }),
    browse: repository && blobComponents.browse,
    fileCard: repository && file && /*#__PURE__*/_react.default.createElement(_.FileCard, {
      authentication: authentication,
      repository: repository,
      file: _objectSpread(_objectSpread({}, file), actions)
    })
  };

  var component = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

  if (file) {
    component = components.fileCard;
  } else if (!filepath) {
    if (create) {
      component = components.create;
    } else {
      component = components.browse;
    }
  }

  return {
    state: file,
    stateValues: {
      isChanged: isChanged
    },
    actions: actions,
    component: component,
    components: components
  };
}

;
useFile.propTypes = {
  /** The full filepath for the file. */
  filepath: _propTypes.default.string,

  /** Function to propogate filepath when the Blob is selected. */
  onFilepath: _propTypes.default.func,

  /** Authentication object returned from a successful withAuthentication login. */
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
  }).isRequired,

  /** use a form to create a new file */
  create: _propTypes.default.bool
};
var _default = useFile;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbGUvdXNlRmlsZS5qcyJdLCJuYW1lcyI6WyJ1c2VGaWxlIiwiYXV0aGVudGljYXRpb24iLCJyZXBvc2l0b3J5IiwiZmlsZXBhdGgiLCJvbkZpbGVwYXRoIiwiZGVmYXVsdENvbnRlbnQiLCJfY29uZmlnIiwiY29uZmlnIiwiY3JlYXRlIiwib25PcGVuVmFsaWRhdGlvbiIsIm9uTG9hZENhY2hlIiwib25TYXZlQ2FjaGUiLCJvbkNvbmZpcm1DbG9zZSIsInJlbGVhc2VGbGFnIiwiZmlsZSIsInNldEZpbGUiLCJpc0NoYW5nZWQiLCJzZXRJc0NoYW5nZWQiLCJibG9iIiwic2V0QmxvYiIsIlJlcG9zaXRvcnlDb250ZXh0IiwidXBkYXRlQnJhbmNoIiwiYWN0aW9ucyIsInJlcG9zaXRvcnlDb25maWciLCJicmFuY2giLCJkZWZhdWx0X2JyYW5jaCIsImRlbGV0ZWQiLCJzZXREZWxldGVkIiwiX3NldEJsb2IiLCJfYmxvYiIsIm9uQmxvYiIsImJsb2JTdGF0ZSIsInN0YXRlIiwiYmxvYkFjdGlvbnMiLCJibG9iQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJwZXJtaXNzaW9ucyIsIndyaXRlYWJsZSIsInB1c2giLCJ1cGRhdGUiLCJfZmlsZSIsImNsb3NlZCIsInJlYWQiLCJfZmlsZXBhdGgiLCJsb2FkIiwiY29uc29sZSIsImxvZyIsImh0bWxfdXJsIiwiZGVmYXVsdENhY2hlZENvbnRlbnRGaWxlIiwic2hhIiwiY29udGVudCIsInRpbWVzdGFtcCIsImFsZXJ0IiwidG9Mb2NhbGVTdHJpbmciLCJwcm9kVGFnIiwiY2F0YWxvZyIsInByb2QiLCJicmFuY2hfb3JfdGFnX25hbWUiLCJuYW1lIiwiX3B1Ymxpc2hlZENvbnRlbnQiLCJwYXRoIiwicHVibGlzaGVkQ29udGVudCIsImNyZWF0ZUZpbGUiLCJfYnJhbmNoIiwiX2RlZmF1bHRDb250ZW50IiwiY2xvc2UiLCJzYXZlIiwidGhlbiIsInNhdmVDYWNoZSIsInNhdmVGaWxlIiwiZGFuZ2Vyb3VzbHlEZWxldGUiLCJfZGVsZXRlZCIsIm5vdExvYWRlZCIsImxvYWROZXciLCJibG9iRmlsZXBhdGgiLCJicm93c2UiLCJmaWxlQ2FyZCIsImNvbXBvbmVudCIsInN0YXRlVmFsdWVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsInNoYXBlIiwic2VydmVyIiwiaXNSZXF1aXJlZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJvd25lciIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUlBOztBQUNBOztBQUVBOztBQUdBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxPQUFULE9BYUc7QUFBQSxNQVpEQyxjQVlDLFFBWkRBLGNBWUM7QUFBQSxNQVhEQyxVQVdDLFFBWERBLFVBV0M7QUFBQSxNQVZEQyxRQVVDLFFBVkRBLFFBVUM7QUFBQSxNQVREQyxVQVNDLFFBVERBLFVBU0M7QUFBQSxNQVJEQyxjQVFDLFFBUkRBLGNBUUM7QUFBQSxNQVBPQyxPQU9QLFFBUERDLE1BT0M7QUFBQSx5QkFOREMsTUFNQztBQUFBLE1BTkRBLE1BTUMsNEJBTk0sS0FNTjtBQUFBLE1BTERDLGdCQUtDLFFBTERBLGdCQUtDO0FBQUEsTUFKREMsV0FJQyxRQUpEQSxXQUlDO0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsTUFGREMsY0FFQyxRQUZEQSxjQUVDO0FBQUEsTUFEREMsV0FDQyxRQUREQSxXQUNDOztBQUFBLGtCQUN1QixzQkFEdkI7QUFBQTtBQUFBLE1BQ01DLElBRE47QUFBQSxNQUNZQyxPQURaOztBQUFBLG1CQUVpQyxxQkFBUyxLQUFULENBRmpDO0FBQUE7QUFBQSxNQUVNQyxTQUZOO0FBQUEsTUFFaUJDLFlBRmpCOztBQUFBLG1CQUd1QixzQkFIdkI7QUFBQTtBQUFBLE1BR01DLElBSE47QUFBQSxNQUdZQyxPQUhaOztBQUFBLG9C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QUs5QkcsSUFBQUEsSUFBSSxFQUFFUixtQkFBVUcsS0FBVixDQUFnQjtBQUNwQk0sTUFBQUEsUUFBUSxFQUFFVCxtQkFBVUMsTUFBVixDQUFpQkksVUFEUDtBQUVwQkssTUFBQUEsS0FBSyxFQUFFVixtQkFBVUMsTUFBVixDQUFpQkk7QUFGSixLQUFoQixFQUdIQTtBQVIyQixHQUFoQixDQU5FOztBQWdCbEI7QUFDQW5GLEVBQUFBLFVBQVUsRUFBRThFLG1CQUFVRyxLQUFWLENBQWdCO0FBQzFCUSxJQUFBQSxLQUFLLEVBQUVYLG1CQUFVRyxLQUFWLENBQWdCO0FBQUVNLE1BQUFBLFFBQVEsRUFBRVQsbUJBQVVDLE1BQVYsQ0FBaUJJO0FBQTdCLEtBQWhCLENBRG1CO0FBRTFCM0IsSUFBQUEsSUFBSSxFQUFFc0IsbUJBQVVDLE1BQVYsQ0FBaUJJO0FBRkcsR0FBaEIsRUFHVEEsVUFwQmU7O0FBcUJsQjtBQUNBN0UsRUFBQUEsTUFBTSxFQUFFd0UsbUJBQVVZO0FBdEJBLENBQXBCO2VBeUJlNUYsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdCwgdXNlTWVtb1xufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVzZURlZXBDb21wYXJlRWZmZWN0IGZyb20gJ3VzZS1kZWVwLWNvbXBhcmUtZWZmZWN0JztcblxuaW1wb3J0IHtcbiAgZ2V0Q29udGVudEZyb21GaWxlLCBzYXZlRmlsZSwgZW5zdXJlRmlsZSwgZGVsZXRlRmlsZSxcbn0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7XG4gIEZpbGVDYXJkLCBGaWxlRm9ybSwgdXNlQmxvYiwgUmVwb3NpdG9yeUNvbnRleHQsXG59IGZyb20gJy4uJztcbmltcG9ydCB7ZmV0Y2hDYXRhbG9nQ29udGVudH0gZnJvbSAnLi9kY3NDYXRhbG9nTmV4dEFwaXMnO1xuXG5mdW5jdGlvbiB1c2VGaWxlKHtcbiAgYXV0aGVudGljYXRpb24sXG4gIHJlcG9zaXRvcnksXG4gIGZpbGVwYXRoLFxuICBvbkZpbGVwYXRoLFxuICBkZWZhdWx0Q29udGVudCxcbiAgY29uZmlnOiBfY29uZmlnLFxuICBjcmVhdGU9ZmFsc2UsXG4gIG9uT3BlblZhbGlkYXRpb24sXG4gIG9uTG9hZENhY2hlLFxuICBvblNhdmVDYWNoZSxcbiAgb25Db25maXJtQ2xvc2UsXG4gIHJlbGVhc2VGbGFnLFxufSkge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNDaGFuZ2VkLCBzZXRJc0NoYW5nZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYmxvYiwgc2V0QmxvYl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgYWN0aW9uczogeyB1cGRhdGVCcmFuY2ggfSwgY29uZmlnOiByZXBvc2l0b3J5Q29uZmlnIH0gPSB1c2VDb250ZXh0KFJlcG9zaXRvcnlDb250ZXh0KTtcblxuICBjb25zdCBjb25maWcgPSBfY29uZmlnIHx8IHJlcG9zaXRvcnlDb25maWc7XG4gIGNvbnN0IGJyYW5jaCA9IHJlcG9zaXRvcnkgJiYgKHJlcG9zaXRvcnkuYnJhbmNoIHx8IHJlcG9zaXRvcnkuZGVmYXVsdF9icmFuY2gpO1xuICBjb25zdCBbZGVsZXRlZCwgc2V0RGVsZXRlZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IF9zZXRCbG9iID0gdXNlQ2FsbGJhY2soKF9ibG9iKSA9PiB7XG4gICAgaWYgKGJsb2IgJiYgX2Jsb2IgJiYgb25Db25maXJtQ2xvc2UpIHtcbiAgICAgIGlmIChvbkNvbmZpcm1DbG9zZSgpKVxuICAgICAge1xuICAgICAgICBzZXRCbG9iKF9ibG9iKTtcbiAgICAgIH1cbiAgICB9IGVsc2V7XG4gICAgICBzZXRCbG9iKF9ibG9iKTtcbiAgICB9XG4gIH0sW2Jsb2IsIHNldEJsb2IsIG9uQ29uZmlybUNsb3NlXSk7XG5cbiAgY29uc3Qge1xuICAgIHN0YXRlOiBibG9iU3RhdGUsIGFjdGlvbnM6IGJsb2JBY3Rpb25zLCBjb21wb25lbnRzOiBibG9iQ29tcG9uZW50cyxcbiAgfSA9IHVzZUJsb2Ioe1xuICAgIGJsb2IsIG9uQmxvYjogX3NldEJsb2IsIGNvbmZpZywgcmVwb3NpdG9yeSwgZmlsZXBhdGgsIHJlbGVhc2VGbGFnLFxuICB9KTtcblxuICBjb25zdCB7IHB1c2g6IHdyaXRlYWJsZSB9ID0gKHJlcG9zaXRvcnkgJiYgcmVwb3NpdG9yeS5wZXJtaXNzaW9ucykgPyByZXBvc2l0b3J5LnBlcm1pc3Npb25zIDoge307XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soKF9maWxlKSA9PiB7XG4gICAgc2V0RmlsZShfZmlsZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ2hhbmdlZChmYWxzZSk7XG4gIH0sIFtmaWxlLCBkZWxldGVkLCBjbG9zZWRdKTtcblxuICBjb25zdCByZWFkID0gdXNlQ2FsbGJhY2soYXN5bmMgKF9maWxlcGF0aCkgPT4ge1xuICAgIGlmIChvbkZpbGVwYXRoKSB7XG4gICAgICBhd2FpdCBvbkZpbGVwYXRoKF9maWxlcGF0aCk7XG4gICAgfTtcbiAgfSwgW29uRmlsZXBhdGhdKTtcblxuICBjb25zdCBsb2FkID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjb25maWcgJiYgcmVwb3NpdG9yeSAmJiBmaWxlcGF0aCkge1xuICAgICAgY29uc3QgX2ZpbGUgPSBhd2FpdCBlbnN1cmVGaWxlKHtcbiAgICAgICAgZmlsZXBhdGgsIGRlZmF1bHRDb250ZW50LCBhdXRoZW50aWNhdGlvbiwgY29uZmlnLCByZXBvc2l0b3J5LCBicmFuY2gsIG9uT3BlblZhbGlkYXRpb24sXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJlbnN1cmVGaWxlOlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKF9maWxlKTtcblxuICAgICAgbGV0IGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZTtcbiAgICAgIC8vIGlmIChsb2FkRGVmYXVsdENhY2hlZENvbnRlbnRGaWxlKSB7IFxuICAgICAgLy8gICBjb25zb2xlLmxvZyhcIl9maWxlLmh0bWxfdXJsXCIpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhfZmlsZS5odG1sX3VybCk7XG4gICAgICAvLyAgIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZSA9IGF3YWl0IGxvYWREZWZhdWx0Q2FjaGVkQ29udGVudEZpbGUoX2ZpbGUuaHRtbF91cmwpO1xuICAgICAgLy8gfVxuICAgICAgY29uc29sZS5sb2coXCJHUlQgLy8gb25Mb2FkQ2FjaGUhXCIsIF9maWxlLCBfZmlsZS5odG1sX3VybCk7XG4gICAgICBpZiAob25Mb2FkQ2FjaGUgJiYgX2ZpbGUgJiYgX2ZpbGUuaHRtbF91cmwpXG4gICAgICB7XG4gICAgICAgIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZSA9IGF3YWl0IG9uTG9hZENhY2hlKHthdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgYnJhbmNoLCBodG1sX3VybDogX2ZpbGUuaHRtbF91cmx9KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXCJHUlQgZGVmYXVsdENvbnRlbnRcIiwgJ3wnLCBkZWZhdWx0Q29udGVudCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkdSVCBkZWZhdWx0Q2FjaGVkQ29udGVudFwiLCAnfCcsIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZSk7XG5cbiAgICAgIGlmIChkZWZhdWx0Q2FjaGVkQ29udGVudEZpbGUpXG4gICAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZS5zaGEpO1xuICAgICAgfVxuICAgICAgaWYgKF9maWxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9maWxlLnNoYSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGxldCBjb250ZW50O1xuICAgICAgLy8gY29udGVudCA9IGF3YWl0IHJlcG9zaXRvcnlBY3Rpb25zLmZpbGVGcm9tWmlwKGZpbGVwYXRoKTtcbiAgICAgIC8vY29uc3QgY29udGVudCA9IGF3YWl0IGdldENvbnRlbnRGcm9tRmlsZShfZmlsZSk7XG5cbiAgICAgIC8vIEFsbG93IGFwcCB0byBwcm92aWRlIENBQ0hFRCAoXCJvZmZsaW5lXCIgY29udGVudCk7XG4gICAgICAvLyBNaWdodCBiZSBkaWZmZXJlbnQgQlJBTkNIIChkaWZmZXJlbnQgdXNlcikgb3IgZGlmZmVyZW50IEZJTEUuXG4gICAgICAvLyBNaWdodCBiZSBTVEFMRSAoc2hhIGhhcyBjaGFuZ2VkIG9uIERDUykuXG4gICAgICAvLyAoTk9URTogU1RBTEUgY2FjaGUgd291bGQgbWVhbiBUSElTIHVzZXIgZWRpdGVkIHRoZSBzYW1lIGZpbGUgaW4gYW5vdGhlciBicm93c2VyLilcbiAgICAgIGxldCBjb250ZW50O1xuICAgICAgbGV0IF9wdWJsaXNoZWRDb250ZW50O1xuXG4gICAgICBpZiAoZGVmYXVsdENhY2hlZENvbnRlbnRGaWxlICYmIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZS5jb250ZW50ICYmIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZS5zaGEgXG4gICAgICAgICAgJiYgZGVmYXVsdENhY2hlZENvbnRlbnRGaWxlLmh0bWxfdXJsICYmIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZS5maWxlcGF0aCAmJiBkZWZhdWx0Q2FjaGVkQ29udGVudEZpbGUudGltZXN0YW1wIFxuICAgICAgICAgICYmIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZS5zaGEgPT09IF9maWxlLnNoYVxuICAgICAgICAgICYmIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZS5odG1sX3VybCA9PT0gX2ZpbGUuaHRtbF91cmxcbiAgICAgICkge1xuICAgICAgICAvLyBMb2FkIGF1dG9zYXZlZCBjb250ZW50OlxuICAgICAgICBjb250ZW50ID0gZGVmYXVsdENhY2hlZENvbnRlbnRGaWxlLmNvbnRlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2ZpbGUgJiYgX2ZpbGUuY29udGVudCBcbiAgICAgICAgICAgICYmIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZSAmJiBkZWZhdWx0Q2FjaGVkQ29udGVudEZpbGUuY29udGVudCBcbiAgICAgICAgICAgICYmIGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZS5maWxlcGF0aCAmJiBkZWZhdWx0Q2FjaGVkQ29udGVudEZpbGUuc2hhXG4gICAgICAgICAgICAmJiBkZWZhdWx0Q2FjaGVkQ29udGVudEZpbGUudGltZXN0YW1wKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coX2ZpbGUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRDYWNoZWRDb250ZW50RmlsZSk7XG4gICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICBcIkEgcHJldmlvdXMgZmlsZSB3YXMgYXV0b3NhdmVkLiBUaGUgYXV0b3NhdmVkIGZpbGUgd2lsbCBiZSBvdmVyd3JpdHRlbi5cXG5cXG5cIiArXG4gICAgICAgICAgICBcIkZpbGU6IFwiICsgZGVmYXVsdENhY2hlZENvbnRlbnRGaWxlLmZpbGVwYXRoICsgXCIuXFxuXCIgK1xuICAgICAgICAgICAgXCJFZGl0ZWQ6IFwiICsgZGVmYXVsdENhY2hlZENvbnRlbnRGaWxlLnRpbWVzdGFtcC50b0xvY2FsZVN0cmluZygpICsgXCIuXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCBTRVJWRVIgY29udGVudDogT3ZlcndyaXRlIGNhY2hlOlxuICAgICAgICBjb250ZW50ID0gYXdhaXQgZ2V0Q29udGVudEZyb21GaWxlKF9maWxlKTtcblxuICAgICAgICAvLyBDaGVjayBjYXRhbG9nIG5leHQ6XG4gICAgICAgIGNvbnN0IHByb2RUYWcgPSByZXBvc2l0b3J5LmNhdGFsb2c/LnByb2Q/LmJyYW5jaF9vcl90YWdfbmFtZTtcbiAgICAgICAgaWYgKCBwcm9kVGFnICkge1xuICAgICAgICAgIF9wdWJsaXNoZWRDb250ZW50ID0gYXdhaXQgZmV0Y2hDYXRhbG9nQ29udGVudCgndW5mb2xkaW5nd29yZCcsIHJlcG9zaXRvcnkubmFtZSwgcHJvZFRhZywgZmlsZXBhdGgsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlKHtcbiAgICAgICAgLi4uX2ZpbGUsIGJyYW5jaCwgY29udGVudCwgZmlsZXBhdGg6IF9maWxlLnBhdGgsIHB1Ymxpc2hlZENvbnRlbnQ6IF9wdWJsaXNoZWRDb250ZW50LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbYXV0aGVudGljYXRpb24sIGJyYW5jaCwgY29uZmlnLCBkZWZhdWx0Q29udGVudCwgb25Mb2FkQ2FjaGUsIGZpbGVwYXRoLCByZXBvc2l0b3J5LCB1cGRhdGVdKTtcblxuICBjb25zdCBjcmVhdGVGaWxlID0gdXNlQ2FsbGJhY2soYXN5bmMgKHtcbiAgICBicmFuY2g6IF9icmFuY2gsIGZpbGVwYXRoOiBfZmlsZXBhdGgsIGRlZmF1bHRDb250ZW50OiBfZGVmYXVsdENvbnRlbnQsIG9uT3BlblZhbGlkYXRpb24sXG4gIH0pID0+IHtcbiAgICBpZiAoY29uZmlnICYmIHJlcG9zaXRvcnkpIHtcbiAgICAgIGNvbnN0IF9maWxlID0gYXdhaXQgZW5zdXJlRmlsZSh7XG4gICAgICAgIGF1dGhlbnRpY2F0aW9uLCBjb25maWcsIHJlcG9zaXRvcnksXG4gICAgICAgIGJyYW5jaDogX2JyYW5jaCxcbiAgICAgICAgZmlsZXBhdGg6IF9maWxlcGF0aCxcbiAgICAgICAgZGVmYXVsdENvbnRlbnQ6IF9kZWZhdWx0Q29udGVudCxcbiAgICAgICAgb25PcGVuVmFsaWRhdGlvbixcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX2ZpbGUpIHtcbiAgICAgICAgdXBkYXRlQnJhbmNoKF9icmFuY2gpO1xuICAgICAgICBvbkZpbGVwYXRoKF9maWxlcGF0aCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2F1dGhlbnRpY2F0aW9uLCBjb25maWcsIHJlcG9zaXRvcnksIHVwZGF0ZUJyYW5jaCwgb25GaWxlcGF0aF0pO1xuXG4gIGNvbnN0IGNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChibG9iQWN0aW9ucyAmJiBibG9iQWN0aW9ucy5jbG9zZSkge1xuICAgICAgYmxvYkFjdGlvbnMuY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgaWYgKG9uRmlsZXBhdGgpIHtcbiAgICAgIG9uRmlsZXBhdGgoKTtcbiAgICB9O1xuICAgIHVwZGF0ZSgpO1xuICB9LCBbdXBkYXRlLCBibG9iQWN0aW9ucywgb25GaWxlcGF0aF0pO1xuXG4gIGNvbnN0IHNhdmUgPSB1c2VDYWxsYmFjayhhc3luYyAoY29udGVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiR1JUIHNhdmUgLy8gd2lsbCBzYXZlIGZpbGVcIik7XG4gICAgYXdhaXQgc2F2ZUZpbGUoe1xuICAgICAgYXV0aGVudGljYXRpb24sIHJlcG9zaXRvcnksIGJyYW5jaCwgZmlsZSwgY29udGVudCxcbiAgICB9KS50aGVuKFxuICAgICAgLy8gRW1wdHkgY2FjaGUgaWYgdXNlciBoYXMgc2F2ZWQgdGhpcyBmaWxlXG4gICAgICAvLyAoc2F2ZSgpIHdpbGwgbm90IGhhcHBlbiBmb3IgXCJPRkZMSU5FXCIgc3lzdGVtIGZpbGVzKVxuICAgICAgYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR1JUIHNhdmUgLy8gd2lsbCBFTVBUWSBjYWNoZVwiKTtcbiAgICAgICAgYXdhaXQgc2F2ZUNhY2hlKG51bGwpOyBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR1JUIHNhdmUgLy8gd2lsbCBsb2FkIGZpbGVcIik7XG4gICAgICAgIGF3YWl0IGxvYWQoKTtcbiAgICAgIH1cbiAgICApO1xuICB9LCBbd3JpdGVhYmxlLCBhdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgYnJhbmNoLCBmaWxlLCBsb2FkLCBzYXZlRmlsZSwgc2F2ZUNhY2hlXSk7XG5cbiAgY29uc3Qgc2F2ZUNhY2hlID0gdXNlQ2FsbGJhY2soYXN5bmMgKGNvbnRlbnQpID0+IHtcbiAgICBpZiAob25TYXZlQ2FjaGUpIHtcbiAgICAgIGF3YWl0IG9uU2F2ZUNhY2hlKHthdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgYnJhbmNoLCBmaWxlLCBjb250ZW50fSk7XG4gICAgfVxuICB9LCBbd3JpdGVhYmxlLCBhdXRoZW50aWNhdGlvbiwgcmVwb3NpdG9yeSwgYnJhbmNoLCBmaWxlLCBvblNhdmVDYWNoZV0pO1xuXG4gIGNvbnN0IGRhbmdlcm91c2x5RGVsZXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmICh3cml0ZWFibGUpIHtcbiAgICAgIGNvbnN0IF9kZWxldGVkID0gYXdhaXQgZGVsZXRlRmlsZSh7XG4gICAgICAgIGF1dGhlbnRpY2F0aW9uLCByZXBvc2l0b3J5LCBmaWxlLCBicmFuY2gsXG4gICAgICB9KTtcblxuICAgICAgaWYgKF9kZWxldGVkKSB7XG4gICAgICAgIHNldERlbGV0ZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2ZpbGUsIGF1dGhlbnRpY2F0aW9uLCBicmFuY2gsIHJlcG9zaXRvcnksIHdyaXRlYWJsZV0pO1xuXG4gIHVzZURlZXBDb21wYXJlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBub3RMb2FkZWQgPSAoIWZpbGUgJiYgZmlsZXBhdGggJiYgIWRlbGV0ZWQpO1xuICAgIGNvbnN0IGxvYWROZXcgPSAoZmlsZSAmJiBmaWxlcGF0aCAmJiBmaWxlLmZpbGVwYXRoICE9PSBmaWxlcGF0aCk7XG5cbiAgICBpZiAobm90TG9hZGVkIHx8IGxvYWROZXcpIHtcbiAgICAgIGxvYWQoKTtcbiAgICB9XG4gIH0sIFtkZWxldGVkLCBmaWxlcGF0aCwgbG9hZCwgZmlsZV0pO1xuXG4gIGNvbnN0IGJsb2JGaWxlcGF0aCA9IGJsb2JTdGF0ZSAmJiBibG9iU3RhdGUuZmlsZXBhdGg7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYmxvYkZpbGVwYXRoICYmIG9uRmlsZXBhdGgpIHtcbiAgICAgIG9uRmlsZXBhdGgoYmxvYkZpbGVwYXRoKTtcbiAgICB9O1xuICB9LCBbYmxvYkZpbGVwYXRoLCBvbkZpbGVwYXRoXSk7XG5cbiAgdXNlRGVlcENvbXBhcmVFZmZlY3QoKCkgPT4geyAvLyBpZiB0aGVyZSBpcyBhIGZpbGUgYnV0IG5vIHJlcG9zaXRvcnksIGNsb3NlIGZpbGUuXG4gICAgaWYgKCFyZXBvc2l0b3J5ICYmIGZpbGUpIGNsb3NlKCk7XG4gIH0sIFtyZXBvc2l0b3J5LCBmaWxlLCBjbG9zZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgICBzZXREZWxldGVkKGZhbHNlKTtcbiAgICB9O1xuICB9LCBbZGVsZXRlZCwgY2xvc2VdKTtcblxuICBjb25zdCBhY3Rpb25zID0ge1xuICAgIHVwZGF0ZSxcbiAgICBsb2FkLFxuICAgIHJlYWQsXG4gICAgc2F2ZSxcbiAgICBzYXZlQ2FjaGUsXG4gICAgb25TYXZlQ2FjaGUsXG4gICAgb25Mb2FkQ2FjaGUsXG4gICAgY2xvc2UsXG4gICAgZGFuZ2Vyb3VzbHlEZWxldGUsXG4gICAgc2V0SXNDaGFuZ2VkLFxuICAgIG9uQ29uZmlybUNsb3NlLFxuICB9O1xuXG4gIGNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgY3JlYXRlOiByZXBvc2l0b3J5ICYmIChcbiAgICAgIDxGaWxlRm9ybVxuICAgICAgICBicmFuY2g9e2JyYW5jaH1cbiAgICAgICAgZGVmYXVsdENvbnRlbnQ9e2RlZmF1bHRDb250ZW50fVxuICAgICAgICBvblN1Ym1pdD17Y3JlYXRlRmlsZX1cbiAgICAgIC8+XG4gICAgKSxcbiAgICBicm93c2U6IHJlcG9zaXRvcnkgJiYgYmxvYkNvbXBvbmVudHMuYnJvd3NlLFxuICAgIGZpbGVDYXJkOiByZXBvc2l0b3J5ICYmIGZpbGUgJiYgKFxuICAgICAgPEZpbGVDYXJkXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uPXthdXRoZW50aWNhdGlvbn1cbiAgICAgICAgcmVwb3NpdG9yeT17cmVwb3NpdG9yeX1cbiAgICAgICAgZmlsZT17eyAuLi5maWxlLCAuLi5hY3Rpb25zIH19XG4gICAgICAvPlxuICAgICksXG4gIH07XG5cbiAgbGV0IGNvbXBvbmVudCA9IDw+PC8+O1xuXG4gIGlmIChmaWxlKSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50cy5maWxlQ2FyZDtcbiAgfSBlbHNlIGlmICghZmlsZXBhdGgpIHtcbiAgICBpZiAoY3JlYXRlKSB7XG4gICAgICBjb21wb25lbnQgPSBjb21wb25lbnRzLmNyZWF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50cy5icm93c2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZTogZmlsZSxcbiAgICBzdGF0ZVZhbHVlczoge2lzQ2hhbmdlZH0sXG4gICAgYWN0aW9ucyxcbiAgICBjb21wb25lbnQsXG4gICAgY29tcG9uZW50cyxcbiAgfTtcbn07XG5cbnVzZUZpbGUucHJvcFR5cGVzID0ge1xuICAvKiogVGhlIGZ1bGwgZmlsZXBhdGggZm9yIHRoZSBmaWxlLiAqL1xuICBmaWxlcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIEZ1bmN0aW9uIHRvIHByb3BvZ2F0ZSBmaWxlcGF0aCB3aGVuIHRoZSBCbG9iIGlzIHNlbGVjdGVkLiAqL1xuICBvbkZpbGVwYXRoOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqIEF1dGhlbnRpY2F0aW9uIG9iamVjdCByZXR1cm5lZCBmcm9tIGEgc3VjY2Vzc2Z1bCB3aXRoQXV0aGVudGljYXRpb24gbG9naW4uICovXG4gIGF1dGhlbnRpY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNlcnZlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgaGVhZGVyczogUHJvcFR5cGVzLnNoYXBlKHsgQXV0aG9yaXphdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkIH0pLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICB1c2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgdXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgfSksXG4gIC8qKiBSZXBvc2l0b3J5IHRyZWVfdXJsIGNhbiBiZSB1c2VkIGluIHBsYWNlIG9mIGJsb2JDb25maWcgKi9cbiAgcmVwb3NpdG9yeTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvd25lcjogUHJvcFR5cGVzLnNoYXBlKHsgdXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9KSxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIC8qKiB1c2UgYSBmb3JtIHRvIGNyZWF0ZSBhIG5ldyBmaWxlICovXG4gIGNyZWF0ZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VGaWxlO1xuIl19