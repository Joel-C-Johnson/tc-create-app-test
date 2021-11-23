"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var http = _interopRequireWildcard(require("./http"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('axios');
jest.mock('axios-cache-adapter');
var TEST_TOKEN = 'encrypted123456789';
var authToken = {
  sha1: TEST_TOKEN,
  id: 'test-id',
  name: 'test-token'
};
var config = {
  token: authToken,
  tokenid: TEST_TOKEN,
  server: 'test-server'
};
describe('extendConfig', function () {
  it('should pass', function () {
    var expected = expect.objectContaining({
      baseURL: config.server,
      headers: expect.objectContaining({
        'Authorization': expect.stringMatching(/token\s/),
        'Content-Type': 'application/json'
      }),
      token: {
        sha1: TEST_TOKEN,
        id: authToken.id,
        name: authToken.name
      },
      tokenid: config.tokenid
    });
    var res = http.extendConfig(config);
    expect(res).toEqual(expected);
  });
});
describe('get', function () {
  it('should pass with noCache', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {
              config: config,
              noCache: true,
              url: 'https://passing.com'
            };
            _context.next = 3;
            return http.get(params);

          case 3:
            res = _context.sent;
            return _context.abrupt("return", expect(res).toEqual('OK'));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should pass', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = {
              config: config,
              url: 'https://passing.com'
            };
            _context2.next = 3;
            return http.get(params);

          case 3:
            res = _context2.sent;
            return _context2.abrupt("return", expect(res).toEqual('OK'));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should fail with 404', function () {
    var params = {
      config: config,
      url: 'https://failing.com'
    };
    return expect(http.get(params)).rejects.toEqual('Request failed with status code 404');
  });
});
describe('post-like methods', function () {
  it('should perform POST method', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var payload, params, res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            payload = {
              data: '123helloWorld'
            };
            params = {
              url: 'https://passing.com',
              payload: payload,
              config: config
            };
            _context3.next = 4;
            return http.post(params);

          case 4:
            res = _context3.sent;
            expect(res).toEqual('OK');

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should perform PUT method', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var payload, params, res;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            payload = {
              data: '123helloWorld'
            };
            params = {
              url: 'https://passing.com',
              payload: payload,
              config: config
            };
            _context4.next = 4;
            return http.put(params);

          case 4:
            res = _context4.sent;
            return _context4.abrupt("return", expect(res).toEqual('OK'));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should perform PATCH method', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var payload, params, res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            payload = {
              data: '123helloWorld'
            };
            params = {
              url: 'https://passing.com',
              payload: payload,
              config: config
            };
            _context5.next = 4;
            return http.patch(params);

          case 4:
            res = _context5.sent;
            return _context5.abrupt("return", expect(res).toEqual('OK'));

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
});
describe('delete', function () {
  it('should perform DELETE method', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            params = {
              config: config,
              noCache: true,
              url: 'https://passing.com'
            };
            _context6.next = 3;
            return http.get(params);

          case 3:
            res = _context6.sent;
            return _context6.abrupt("return", expect(res).toEqual('OK'));

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9odHRwL2h0dHAuc3BlYy5qcyJdLCJuYW1lcyI6WyJqZXN0IiwibW9jayIsIlRFU1RfVE9LRU4iLCJhdXRoVG9rZW4iLCJzaGExIiwiaWQiLCJuYW1lIiwiY29uZmlnIiwidG9rZW4iLCJ0b2tlbmlkIiwic2VydmVyIiwiZGVzY3JpYmUiLCJpdCIsImV4cGVjdGVkIiwiZXhwZWN0Iiwib2JqZWN0Q29udGFpbmluZyIsImJhc2VVUkwiLCJoZWFkZXJzIiwic3RyaW5nTWF0Y2hpbmciLCJyZXMiLCJodHRwIiwiZXh0ZW5kQ29uZmlnIiwidG9FcXVhbCIsInBhcmFtcyIsIm5vQ2FjaGUiLCJ1cmwiLCJnZXQiLCJyZWplY3RzIiwicGF5bG9hZCIsImRhdGEiLCJwb3N0IiwicHV0IiwicGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTs7Ozs7Ozs7OztBQUNBQSxJQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFWO0FBQ0FELElBQUksQ0FBQ0MsSUFBTCxDQUFVLHFCQUFWO0FBRUEsSUFBTUMsVUFBVSxHQUFHLG9CQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFRixVQURVO0FBRWhCRyxFQUFBQSxFQUFFLEVBQUUsU0FGWTtBQUdoQkMsRUFBQUEsSUFBSSxFQUFFO0FBSFUsQ0FBbEI7QUFLQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsS0FBSyxFQUFFTCxTQURNO0FBRWJNLEVBQUFBLE9BQU8sRUFBRVAsVUFGSTtBQUdiUSxFQUFBQSxNQUFNLEVBQUU7QUFISyxDQUFmO0FBTUFDLFFBQVEsQ0FBQyxjQUFELEVBQWlCLFlBQU07QUFDN0JDLEVBQUFBLEVBQUUsQ0FBQyxhQUFELEVBQWdCLFlBQU07QUFDdEIsUUFBTUMsUUFBUSxHQUFHQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCO0FBQ3ZDQyxNQUFBQSxPQUFPLEVBQUVULE1BQU0sQ0FBQ0csTUFEdUI7QUFFdkNPLE1BQUFBLE9BQU8sRUFBRUgsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QjtBQUMvQix5QkFBaUJELE1BQU0sQ0FBQ0ksY0FBUCxDQUFzQixTQUF0QixDQURjO0FBRS9CLHdCQUFnQjtBQUZlLE9BQXhCLENBRjhCO0FBTXZDVixNQUFBQSxLQUFLLEVBQUU7QUFDTEosUUFBQUEsSUFBSSxFQUFFRixVQUREO0FBQ2FHLFFBQUFBLEVBQUUsRUFBRUYsU0FBUyxDQUFDRSxFQUQzQjtBQUMrQkMsUUFBQUEsSUFBSSxFQUFFSCxTQUFTLENBQUNHO0FBRC9DLE9BTmdDO0FBU3ZDRyxNQUFBQSxPQUFPLEVBQUVGLE1BQU0sQ0FBQ0U7QUFUdUIsS0FBeEIsQ0FBakI7QUFXQSxRQUFNVSxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsWUFBTCxDQUFrQmQsTUFBbEIsQ0FBWjtBQUNBTyxJQUFBQSxNQUFNLENBQUNLLEdBQUQsQ0FBTixDQUFZRyxPQUFaLENBQW9CVCxRQUFwQjtBQUNELEdBZEMsQ0FBRjtBQWVELENBaEJPLENBQVI7QUFrQkFGLFFBQVEsQ0FBQyxLQUFELEVBQVEsWUFBTTtBQUNwQkMsRUFBQUEsRUFBRSxDQUFDLDBCQUFELHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJXLFlBQUFBLE1BRHVCLEdBQ2Q7QUFDYmhCLGNBQUFBLE1BQU0sRUFBTkEsTUFEYTtBQUViaUIsY0FBQUEsT0FBTyxFQUFFLElBRkk7QUFHYkMsY0FBQUEsR0FBRyxFQUFFO0FBSFEsYUFEYztBQUFBO0FBQUEsbUJBTVhMLElBQUksQ0FBQ00sR0FBTCxDQUFTSCxNQUFULENBTlc7O0FBQUE7QUFNdkJKLFlBQUFBLEdBTnVCO0FBQUEsNkNBT3RCTCxNQUFNLENBQUNLLEdBQUQsQ0FBTixDQUFZRyxPQUFaLENBQW9CLElBQXBCLENBUHNCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCLEdBQUY7QUFVQVYsRUFBQUEsRUFBRSxDQUFDLGFBQUQsdUVBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWVyxZQUFBQSxNQURVLEdBQ0Q7QUFDYmhCLGNBQUFBLE1BQU0sRUFBTkEsTUFEYTtBQUVia0IsY0FBQUEsR0FBRyxFQUFFO0FBRlEsYUFEQztBQUFBO0FBQUEsbUJBS0VMLElBQUksQ0FBQ00sR0FBTCxDQUFTSCxNQUFULENBTEY7O0FBQUE7QUFLVkosWUFBQUEsR0FMVTtBQUFBLDhDQU1UTCxNQUFNLENBQUNLLEdBQUQsQ0FBTixDQUFZRyxPQUFaLENBQW9CLElBQXBCLENBTlM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaEIsR0FBRjtBQVVBVixFQUFBQSxFQUFFLENBQUMsc0JBQUQsRUFBeUIsWUFBTTtBQUMvQixRQUFNVyxNQUFNLEdBQUc7QUFDYmhCLE1BQUFBLE1BQU0sRUFBTkEsTUFEYTtBQUVia0IsTUFBQUEsR0FBRyxFQUFFO0FBRlEsS0FBZjtBQUtBLFdBQU9YLE1BQU0sQ0FBQ00sSUFBSSxDQUFDTSxHQUFMLENBQVNILE1BQVQsQ0FBRCxDQUFOLENBQXlCSSxPQUF6QixDQUFpQ0wsT0FBakMsQ0FBeUMscUNBQXpDLENBQVA7QUFDRCxHQVBDLENBQUY7QUFRRCxDQTdCTyxDQUFSO0FBK0JBWCxRQUFRLENBQUMsbUJBQUQsRUFBc0IsWUFBTTtBQUNsQ0MsRUFBQUEsRUFBRSxDQUFDLDRCQUFELHVFQUErQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekJnQixZQUFBQSxPQUR5QixHQUNmO0FBQUVDLGNBQUFBLElBQUksRUFBRTtBQUFSLGFBRGU7QUFFekJOLFlBQUFBLE1BRnlCLEdBRWhCO0FBQ2JFLGNBQUFBLEdBQUcsRUFBRSxxQkFEUTtBQUViRyxjQUFBQSxPQUFPLEVBQVBBLE9BRmE7QUFHYnJCLGNBQUFBLE1BQU0sRUFBTkE7QUFIYSxhQUZnQjtBQUFBO0FBQUEsbUJBT2JhLElBQUksQ0FBQ1UsSUFBTCxDQUFVUCxNQUFWLENBUGE7O0FBQUE7QUFPekJKLFlBQUFBLEdBUHlCO0FBUS9CTCxZQUFBQSxNQUFNLENBQUNLLEdBQUQsQ0FBTixDQUFZRyxPQUFaLENBQW9CLElBQXBCOztBQVIrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEvQixHQUFGO0FBVUFWLEVBQUFBLEVBQUUsQ0FBQywyQkFBRCx1RUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCZ0IsWUFBQUEsT0FEd0IsR0FDZDtBQUFFQyxjQUFBQSxJQUFJLEVBQUU7QUFBUixhQURjO0FBRXhCTixZQUFBQSxNQUZ3QixHQUVmO0FBQ2JFLGNBQUFBLEdBQUcsRUFBRSxxQkFEUTtBQUViRyxjQUFBQSxPQUFPLEVBQVBBLE9BRmE7QUFHYnJCLGNBQUFBLE1BQU0sRUFBTkE7QUFIYSxhQUZlO0FBQUE7QUFBQSxtQkFPWmEsSUFBSSxDQUFDVyxHQUFMLENBQVNSLE1BQVQsQ0FQWTs7QUFBQTtBQU94QkosWUFBQUEsR0FQd0I7QUFBQSw4Q0FRdkJMLE1BQU0sQ0FBQ0ssR0FBRCxDQUFOLENBQVlHLE9BQVosQ0FBb0IsSUFBcEIsQ0FSdUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUIsR0FBRjtBQVVBVixFQUFBQSxFQUFFLENBQUMsNkJBQUQsdUVBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQmdCLFlBQUFBLE9BRDBCLEdBQ2hCO0FBQUVDLGNBQUFBLElBQUksRUFBRTtBQUFSLGFBRGdCO0FBRTFCTixZQUFBQSxNQUYwQixHQUVqQjtBQUNiRSxjQUFBQSxHQUFHLEVBQUUscUJBRFE7QUFFYkcsY0FBQUEsT0FBTyxFQUFQQSxPQUZhO0FBR2JyQixjQUFBQSxNQUFNLEVBQU5BO0FBSGEsYUFGaUI7QUFBQTtBQUFBLG1CQU9kYSxJQUFJLENBQUNZLEtBQUwsQ0FBV1QsTUFBWCxDQVBjOztBQUFBO0FBTzFCSixZQUFBQSxHQVAwQjtBQUFBLDhDQVF6QkwsTUFBTSxDQUFDSyxHQUFELENBQU4sQ0FBWUcsT0FBWixDQUFvQixJQUFwQixDQVJ5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFoQyxHQUFGO0FBVUQsQ0EvQk8sQ0FBUjtBQWlDQVgsUUFBUSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ3ZCQyxFQUFBQSxFQUFFLENBQUMsOEJBQUQsdUVBQWlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQlcsWUFBQUEsTUFEMkIsR0FDbEI7QUFDYmhCLGNBQUFBLE1BQU0sRUFBTkEsTUFEYTtBQUViaUIsY0FBQUEsT0FBTyxFQUFFLElBRkk7QUFHYkMsY0FBQUEsR0FBRyxFQUFFO0FBSFEsYUFEa0I7QUFBQTtBQUFBLG1CQU1mTCxJQUFJLENBQUNNLEdBQUwsQ0FBU0gsTUFBVCxDQU5lOztBQUFBO0FBTTNCSixZQUFBQSxHQU4yQjtBQUFBLDhDQU8xQkwsTUFBTSxDQUFDSyxHQUFELENBQU4sQ0FBWUcsT0FBWixDQUFvQixJQUFwQixDQVAwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFqQyxHQUFGO0FBU0QsQ0FWTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW1hZ2ljLW51bWJlcnMgKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiamVzdFwiIC8+XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJy4vaHR0cCc7XG5qZXN0Lm1vY2soJ2F4aW9zJyk7XG5qZXN0Lm1vY2soJ2F4aW9zLWNhY2hlLWFkYXB0ZXInKTtcblxuY29uc3QgVEVTVF9UT0tFTiA9ICdlbmNyeXB0ZWQxMjM0NTY3ODknO1xuY29uc3QgYXV0aFRva2VuID0ge1xuICBzaGExOiBURVNUX1RPS0VOLFxuICBpZDogJ3Rlc3QtaWQnLFxuICBuYW1lOiAndGVzdC10b2tlbicsXG59O1xuY29uc3QgY29uZmlnID0ge1xuICB0b2tlbjogYXV0aFRva2VuLFxuICB0b2tlbmlkOiBURVNUX1RPS0VOLFxuICBzZXJ2ZXI6ICd0ZXN0LXNlcnZlcicsXG59O1xuXG5kZXNjcmliZSgnZXh0ZW5kQ29uZmlnJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIHBhc3MnLCAoKSA9PiB7XG4gICAgY29uc3QgZXhwZWN0ZWQgPSBleHBlY3Qub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBiYXNlVVJMOiBjb25maWcuc2VydmVyLFxuICAgICAgaGVhZGVyczogZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGV4cGVjdC5zdHJpbmdNYXRjaGluZygvdG9rZW5cXHMvKSxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0pLFxuICAgICAgdG9rZW46IHtcbiAgICAgICAgc2hhMTogVEVTVF9UT0tFTiwgaWQ6IGF1dGhUb2tlbi5pZCwgbmFtZTogYXV0aFRva2VuLm5hbWUsXG4gICAgICB9LFxuICAgICAgdG9rZW5pZDogY29uZmlnLnRva2VuaWQsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzID0gaHR0cC5leHRlbmRDb25maWcoY29uZmlnKTtcbiAgICBleHBlY3QocmVzKS50b0VxdWFsKGV4cGVjdGVkKTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ2dldCcsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBwYXNzIHdpdGggbm9DYWNoZScsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBjb25maWcsXG4gICAgICBub0NhY2hlOiB0cnVlLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9wYXNzaW5nLmNvbScsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwLmdldChwYXJhbXMpO1xuICAgIHJldHVybiBleHBlY3QocmVzKS50b0VxdWFsKCdPSycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHBhc3MnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY29uZmlnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9wYXNzaW5nLmNvbScsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwLmdldChwYXJhbXMpO1xuICAgIHJldHVybiBleHBlY3QocmVzKS50b0VxdWFsKCdPSycpO1xuICB9KTtcblxuXG4gIGl0KCdzaG91bGQgZmFpbCB3aXRoIDQwNCcsICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBjb25maWcsXG4gICAgICB1cmw6ICdodHRwczovL2ZhaWxpbmcuY29tJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGV4cGVjdChodHRwLmdldChwYXJhbXMpKS5yZWplY3RzLnRvRXF1YWwoJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDA0Jyk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKCdwb3N0LWxpa2UgbWV0aG9kcycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBwZXJmb3JtIFBPU1QgbWV0aG9kJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7IGRhdGE6ICcxMjNoZWxsb1dvcmxkJyB9O1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHVybDogJ2h0dHBzOi8vcGFzc2luZy5jb20nLFxuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbmZpZyxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAucG9zdChwYXJhbXMpO1xuICAgIGV4cGVjdChyZXMpLnRvRXF1YWwoJ09LJyk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHBlcmZvcm0gUFVUIG1ldGhvZCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0geyBkYXRhOiAnMTIzaGVsbG9Xb3JsZCcgfTtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICB1cmw6ICdodHRwczovL3Bhc3NpbmcuY29tJyxcbiAgICAgIHBheWxvYWQsXG4gICAgICBjb25maWcsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwLnB1dChwYXJhbXMpO1xuICAgIHJldHVybiBleHBlY3QocmVzKS50b0VxdWFsKCdPSycpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCBwZXJmb3JtIFBBVENIIG1ldGhvZCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0geyBkYXRhOiAnMTIzaGVsbG9Xb3JsZCcgfTtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICB1cmw6ICdodHRwczovL3Bhc3NpbmcuY29tJyxcbiAgICAgIHBheWxvYWQsXG4gICAgICBjb25maWcsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwLnBhdGNoKHBhcmFtcyk7XG4gICAgcmV0dXJuIGV4cGVjdChyZXMpLnRvRXF1YWwoJ09LJyk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKCdkZWxldGUnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgcGVyZm9ybSBERUxFVEUgbWV0aG9kJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIG5vQ2FjaGU6IHRydWUsXG4gICAgICB1cmw6ICdodHRwczovL3Bhc3NpbmcuY29tJyxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAuZ2V0KHBhcmFtcyk7XG4gICAgcmV0dXJuIGV4cGVjdChyZXMpLnRvRXF1YWwoJ09LJyk7XG4gIH0pO1xufSk7Il19