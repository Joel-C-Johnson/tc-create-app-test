"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCatalogContent = fetchCatalogContent;

var _path = _interopRequireDefault(require("path"));

var _localforage = _interopRequireDefault(require("localforage"));

var _axiosCacheAdapter = require("axios-cache-adapter");

var _http = require("../../core/gitea-api/http/http");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function fetchCatalogContent(_x, _x2, _x3, _x4, _x5) {
  return _fetchCatalogContent.apply(this, arguments);
} // caches http file fetches done by fetchFileFromServer()


function _fetchCatalogContent() {
  _fetchCatalogContent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, repository, tag, filepath, config) {
    var _config, uri, _data, _yield$Door43Api$get, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _config = config ? (0, _http.extendConfig)(config) : {}; // example: https://qa.door43.org/unfoldingWord/en_tn/raw/tag/v47/en_tn_65-3JN.tsv
            // might need this instead:
            // https://qa.door43.org/api/v1/repos/unfoldingword/en_tn/contents/en_tn_65-3JN.tsv?ref=v47
            // in which case, the content will be in a JSON object and will be base64 encoded.

            uri = _path.default.join(username, repository, 'raw', 'tag', tag, filepath);
            _context.prev = 2;
            _context.next = 5;
            return Door43Api.get(uri, _objectSpread({}, _config));

          case 5:
            _yield$Door43Api$get = _context.sent;
            data = _yield$Door43Api$get.data;

            if (data) {
              // success
              //console.log("fetchCatalogContent: uri,data:", uri,data);
              _data = data;
            }

            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            console.log("Error:", _context.t0, "on uri:", uri);
            _data = "";

          case 14:
            return _context.abrupt("return", _data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));
  return _fetchCatalogContent.apply(this, arguments);
}

var cacheStore = _localforage.default.createInstance({
  driver: [_localforage.default.INDEXEDDB],
  name: 'web-cache'
}); // API for http requests


var Door43Api = (0, _axiosCacheAdapter.setup)({
  cache: {
    store: cacheStore,
    maxAge: 5 * 60 * 1000,
    // 5-minutes
    exclude: {
      query: false
    },
    key: function key(req) {
      // if (req.params) debugger
      var serialized = req.params instanceof URLSearchParams ? req.params.toString() : JSON.stringify(req.params) || '';
      return req.url + serialized;
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbGUvZGNzQ2F0YWxvZ05leHRBcGlzLmpzIl0sIm5hbWVzIjpbImZldGNoQ2F0YWxvZ0NvbnRlbnQiLCJ1c2VybmFtZSIsInJlcG9zaXRvcnkiLCJ0YWciLCJmaWxlcGF0aCIsImNvbmZpZyIsIl9jb25maWciLCJ1cmkiLCJQYXRoIiwiam9pbiIsIkRvb3I0M0FwaSIsImdldCIsImRhdGEiLCJfZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYWNoZVN0b3JlIiwibG9jYWxmb3JhZ2UiLCJjcmVhdGVJbnN0YW5jZSIsImRyaXZlciIsIklOREVYRUREQiIsIm5hbWUiLCJjYWNoZSIsInN0b3JlIiwibWF4QWdlIiwiZXhjbHVkZSIsInF1ZXJ5Iiwia2V5IiwicmVxIiwic2VyaWFsaXplZCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztTQUdzQkEsbUI7O0VBMEJ0Qjs7OztpRkExQk8saUJBQW1DQyxRQUFuQyxFQUE2Q0MsVUFBN0MsRUFBeURDLEdBQXpELEVBQThEQyxRQUE5RCxFQUF3RUMsTUFBeEU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDQyxZQUFBQSxPQURELEdBQ1dELE1BQU0sR0FBRyx3QkFBYUEsTUFBYixDQUFILEdBQTBCLEVBRDNDLEVBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBQ01FLFlBQUFBLEdBUEQsR0FPT0MsY0FBS0MsSUFBTCxDQUFVUixRQUFWLEVBQW1CQyxVQUFuQixFQUE4QixLQUE5QixFQUFvQyxLQUFwQyxFQUEyQ0MsR0FBM0MsRUFBZ0RDLFFBQWhELENBUFA7QUFBQTtBQUFBO0FBQUEsbUJBVW9CTSxTQUFTLENBQUNDLEdBQVYsQ0FBY0osR0FBZCxvQkFBd0JELE9BQXhCLEVBVnBCOztBQUFBO0FBQUE7QUFVS00sWUFBQUEsSUFWTCx3QkFVS0EsSUFWTDs7QUFZSCxnQkFBS0EsSUFBTCxFQUFZO0FBQ1Y7QUFDQTtBQUNBQyxjQUFBQSxLQUFLLEdBQUdELElBQVI7QUFDRDs7QUFoQkU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFrQkhFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosZUFBOEIsU0FBOUIsRUFBd0NSLEdBQXhDO0FBQ0FNLFlBQUFBLEtBQUssR0FBRyxFQUFSOztBQW5CRztBQUFBLDZDQXFCRUEsS0FyQkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQTJCUCxJQUFNRyxVQUFVLEdBQUdDLHFCQUFZQyxjQUFaLENBQTJCO0FBQzVDQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQ0YscUJBQVlHLFNBQWIsQ0FEb0M7QUFFNUNDLEVBQUFBLElBQUksRUFBRTtBQUZzQyxDQUEzQixDQUFuQixDLENBTUE7OztBQUNBLElBQU1YLFNBQVMsR0FBRyw4QkFBTTtBQUN0QlksRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLEtBQUssRUFBRVAsVUFERjtBQUVMUSxJQUFBQSxNQUFNLEVBQUUsSUFBSSxFQUFKLEdBQVMsSUFGWjtBQUVrQjtBQUN2QkMsSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBSEo7QUFJTEMsSUFBQUEsR0FBRyxFQUFFLGFBQUFDLEdBQUcsRUFBSTtBQUNWO0FBQ0EsVUFBSUMsVUFBVSxHQUFHRCxHQUFHLENBQUNFLE1BQUosWUFBc0JDLGVBQXRCLEdBQ2ZILEdBQUcsQ0FBQ0UsTUFBSixDQUFXRSxRQUFYLEVBRGUsR0FDU0MsSUFBSSxDQUFDQyxTQUFMLENBQWVOLEdBQUcsQ0FBQ0UsTUFBbkIsS0FBOEIsRUFEeEQ7QUFFQSxhQUFPRixHQUFHLENBQUNPLEdBQUosR0FBVU4sVUFBakI7QUFDRDtBQVRJO0FBRGUsQ0FBTixDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgY29kZSBjb3BpZWQgZnJvbTpcclxuLy8gZ2l0aHViID4gdW5mb2xkaW5nd29yZC1ib3gzID4gYWRtaW4tYXBwID4gc3JjL3V0aWxzL2Rjc0FwaXMuanNcclxuaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XHJcbmltcG9ydCB7IHNldHVwIH0gZnJvbSAnYXhpb3MtY2FjaGUtYWRhcHRlcic7XHJcbmltcG9ydCB7IGV4dGVuZENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvZ2l0ZWEtYXBpL2h0dHAvaHR0cCdcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDYXRhbG9nQ29udGVudCh1c2VybmFtZSwgcmVwb3NpdG9yeSwgdGFnLCBmaWxlcGF0aCwgY29uZmlnKSB7XHJcbiAgY29uc3QgX2NvbmZpZyA9IGNvbmZpZyA/IGV4dGVuZENvbmZpZyhjb25maWcpIDoge307XHJcblxyXG4gIC8vIGV4YW1wbGU6IGh0dHBzOi8vcWEuZG9vcjQzLm9yZy91bmZvbGRpbmdXb3JkL2VuX3RuL3Jhdy90YWcvdjQ3L2VuX3RuXzY1LTNKTi50c3ZcclxuICAvLyBtaWdodCBuZWVkIHRoaXMgaW5zdGVhZDpcclxuICAvLyBodHRwczovL3FhLmRvb3I0My5vcmcvYXBpL3YxL3JlcG9zL3VuZm9sZGluZ3dvcmQvZW5fdG4vY29udGVudHMvZW5fdG5fNjUtM0pOLnRzdj9yZWY9djQ3XHJcbiAgLy8gaW4gd2hpY2ggY2FzZSwgdGhlIGNvbnRlbnQgd2lsbCBiZSBpbiBhIEpTT04gb2JqZWN0IGFuZCB3aWxsIGJlIGJhc2U2NCBlbmNvZGVkLlxyXG4gIGNvbnN0IHVyaSA9IFBhdGguam9pbih1c2VybmFtZSxyZXBvc2l0b3J5LCdyYXcnLCd0YWcnLCB0YWcsIGZpbGVwYXRoKTtcclxuICBsZXQgX2RhdGE7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgRG9vcjQzQXBpLmdldCh1cmksIHsgLi4uX2NvbmZpZyB9KTtcclxuIFxyXG4gICAgaWYgKCBkYXRhICkge1xyXG4gICAgICAvLyBzdWNjZXNzXHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJmZXRjaENhdGFsb2dDb250ZW50OiB1cmksZGF0YTpcIiwgdXJpLGRhdGEpO1xyXG4gICAgICBfZGF0YSA9IGRhdGE7XHJcbiAgICB9IFxyXG4gIH0gY2F0Y2ggKGdldGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLGdldGVycm9yLFwib24gdXJpOlwiLHVyaSk7XHJcbiAgICBfZGF0YSA9IFwiXCI7XHJcbiAgfVxyXG4gIHJldHVybiBfZGF0YTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBjYWNoZXMgaHR0cCBmaWxlIGZldGNoZXMgZG9uZSBieSBmZXRjaEZpbGVGcm9tU2VydmVyKClcclxuY29uc3QgY2FjaGVTdG9yZSA9IGxvY2FsZm9yYWdlLmNyZWF0ZUluc3RhbmNlKHtcclxuICBkcml2ZXI6IFtsb2NhbGZvcmFnZS5JTkRFWEVEREJdLFxyXG4gIG5hbWU6ICd3ZWItY2FjaGUnLFxyXG59KTtcclxuXHJcblxyXG4vLyBBUEkgZm9yIGh0dHAgcmVxdWVzdHNcclxuY29uc3QgRG9vcjQzQXBpID0gc2V0dXAoe1xyXG4gIGNhY2hlOiB7XHJcbiAgICBzdG9yZTogY2FjaGVTdG9yZSxcclxuICAgIG1heEFnZTogNSAqIDYwICogMTAwMCwgLy8gNS1taW51dGVzXHJcbiAgICBleGNsdWRlOiB7IHF1ZXJ5OiBmYWxzZSB9LFxyXG4gICAga2V5OiByZXEgPT4ge1xyXG4gICAgICAvLyBpZiAocmVxLnBhcmFtcykgZGVidWdnZXJcclxuICAgICAgbGV0IHNlcmlhbGl6ZWQgPSByZXEucGFyYW1zIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zID9cclxuICAgICAgICByZXEucGFyYW1zLnRvU3RyaW5nKCkgOiBKU09OLnN0cmluZ2lmeShyZXEucGFyYW1zKSB8fCAnJztcclxuICAgICAgcmV0dXJuIHJlcS51cmwgKyBzZXJpYWxpemVkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbiJdfQ==