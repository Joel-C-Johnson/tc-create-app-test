"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Organization: true,
  useOrganization: true
};
Object.defineProperty(exports, "Organization", {
  enumerable: true,
  get: function get() {
    return _Organization.default;
  }
});
Object.defineProperty(exports, "useOrganization", {
  enumerable: true,
  get: function get() {
    return _useOrganization.default;
  }
});

var _Organization = _interopRequireDefault(require("./Organization"));

var _useOrganization = _interopRequireDefault(require("./useOrganization"));

var _Organization2 = require("./Organization.context");

Object.keys(_Organization2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Organization2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Organization2[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgT3JnYW5pemF0aW9uIH0gZnJvbSAnLi9Pcmdhbml6YXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VPcmdhbml6YXRpb24gfSBmcm9tICcuL3VzZU9yZ2FuaXphdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL09yZ2FuaXphdGlvbi5jb250ZXh0JzsiXX0=