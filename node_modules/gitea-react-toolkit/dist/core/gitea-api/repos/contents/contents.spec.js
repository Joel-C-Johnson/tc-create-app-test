"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var helpers = _interopRequireWildcard(require("./contents"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
describe('createContent', function () {
  var payload = {
    hello: 'world'
  };
  it('should create a file from path and proper config params', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'a_user',
              filepath: 'my/test/path',
              payload: payload,
              config: config
            };
            _context.next = 3;
            return helpers.createContent(params);

          case 3:
            res = _context.sent;
            expect(res).toEqual('OK');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should fail to create a file for some reason', function () {
    var params = {
      owner: 'a_owner',
      repo: 'fail',
      filepath: 'my/test/path',
      payload: payload,
      config: config
    };
    return expect(helpers.createContent(params)).rejects.toEqual('Request failed with status code 404');
  });
});
describe('readContent', function () {
  it('should read a file from path and proper config params', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'a_user',
              filepath: 'my/test/path',
              config: config
            };
            _context2.next = 3;
            return helpers.readContent(params);

          case 3:
            res = _context2.sent;
            expect(res).toEqual('OK');

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should fail to read a file for some reason', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'fail',
              filepath: 'my/test/path',
              config: config
            };
            _context3.next = 3;
            return helpers.readContent(params);

          case 3:
            res = _context3.sent;
            expect(res).toEqual(null);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});
describe('updateContent', function () {
  var payload = {
    hello: 'world'
  };
  it('should update a file from path and proper config params', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'a_user',
              filepath: 'my/test/path',
              payload: payload,
              config: config
            };
            _context4.next = 3;
            return helpers.updateContent(params);

          case 3:
            res = _context4.sent;
            expect(res).toEqual('OK');

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should fail to update a file for some reason', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'fail',
              filepath: 'my/test/path',
              payload: payload,
              config: config
            };
            _context5.next = 3;
            return helpers.updateContent(params);

          case 3:
            res = _context5.sent;
            expect(res).toEqual(null);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
});
describe('removeFile', function () {
  var payload = {
    hello: 'world'
  };
  it('should remove a file from path and proper config params', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'a_user',
              filepath: 'my/test/path',
              payload: payload,
              config: config
            };
            _context6.next = 3;
            return helpers.removeFile(params);

          case 3:
            res = _context6.sent;
            expect(res).toEqual('OK');

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('should fail to remove a file for some reason', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var params, res;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            params = {
              owner: 'a_owner',
              repo: 'fail',
              filepath: 'my/test/path',
              payload: payload,
              config: config
            };
            _context7.next = 3;
            return helpers.removeFile(params);

          case 3:
            res = _context7.sent;
            expect(res).toEqual(null);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9jb250ZW50cy9jb250ZW50cy5zcGVjLmpzIl0sIm5hbWVzIjpbIlRFU1RfVE9LRU4iLCJhdXRoVG9rZW4iLCJzaGExIiwiaWQiLCJuYW1lIiwiY29uZmlnIiwidG9rZW4iLCJ0b2tlbmlkIiwic2VydmVyIiwiZGVzY3JpYmUiLCJwYXlsb2FkIiwiaGVsbG8iLCJpdCIsInBhcmFtcyIsIm93bmVyIiwicmVwbyIsImZpbGVwYXRoIiwiaGVscGVycyIsImNyZWF0ZUNvbnRlbnQiLCJyZXMiLCJleHBlY3QiLCJ0b0VxdWFsIiwicmVqZWN0cyIsInJlYWRDb250ZW50IiwidXBkYXRlQ29udGVudCIsInJlbW92ZUZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7Ozs7Ozs7OztBQUNBLElBQU1BLFVBQVUsR0FBRyxvQkFBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLElBQUksRUFBRUYsVUFEVTtBQUVoQkcsRUFBQUEsRUFBRSxFQUFFLFNBRlk7QUFHaEJDLEVBQUFBLElBQUksRUFBRTtBQUhVLENBQWxCO0FBS0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLEtBQUssRUFBRUwsU0FETTtBQUViTSxFQUFBQSxPQUFPLEVBQUVQLFVBRkk7QUFHYlEsRUFBQUEsTUFBTSxFQUFFO0FBSEssQ0FBZjtBQU1BQyxRQUFRLENBQUMsZUFBRCxFQUFrQixZQUFNO0FBQzlCLE1BQU1DLE9BQU8sR0FBRztBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFoQjtBQUVBQyxFQUFBQSxFQUFFLENBQUMseURBQUQsdUVBQTREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0REMsWUFBQUEsTUFEc0QsR0FDN0M7QUFDYkMsY0FBQUEsS0FBSyxFQUFFLFNBRE07QUFFYkMsY0FBQUEsSUFBSSxFQUFFLFFBRk87QUFHYkMsY0FBQUEsUUFBUSxFQUFFLGNBSEc7QUFJYk4sY0FBQUEsT0FBTyxFQUFQQSxPQUphO0FBS2JMLGNBQUFBLE1BQU0sRUFBTkE7QUFMYSxhQUQ2QztBQUFBO0FBQUEsbUJBUTFDWSxPQUFPLENBQUNDLGFBQVIsQ0FBc0JMLE1BQXRCLENBUjBDOztBQUFBO0FBUXRETSxZQUFBQSxHQVJzRDtBQVM1REMsWUFBQUEsTUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWUUsT0FBWixDQUFvQixJQUFwQjs7QUFUNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUQsR0FBRjtBQVlBVCxFQUFBQSxFQUFFLENBQUMsOENBQUQsRUFBaUQsWUFBTTtBQUN2RCxRQUFNQyxNQUFNLEdBQUc7QUFDYkMsTUFBQUEsS0FBSyxFQUFFLFNBRE07QUFFYkMsTUFBQUEsSUFBSSxFQUFFLE1BRk87QUFHYkMsTUFBQUEsUUFBUSxFQUFFLGNBSEc7QUFJYk4sTUFBQUEsT0FBTyxFQUFQQSxPQUphO0FBS2JMLE1BQUFBLE1BQU0sRUFBTkE7QUFMYSxLQUFmO0FBT0EsV0FBT2UsTUFBTSxDQUFDSCxPQUFPLENBQUNDLGFBQVIsQ0FBc0JMLE1BQXRCLENBQUQsQ0FBTixDQUFzQ1MsT0FBdEMsQ0FBOENELE9BQTlDLENBQXNELHFDQUF0RCxDQUFQO0FBQ0QsR0FUQyxDQUFGO0FBVUQsQ0F6Qk8sQ0FBUjtBQTJCQVosUUFBUSxDQUFDLGFBQUQsRUFBZ0IsWUFBTTtBQUM1QkcsRUFBQUEsRUFBRSxDQUFDLHVEQUFELHVFQUEwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcERDLFlBQUFBLE1BRG9ELEdBQzNDO0FBQ2JDLGNBQUFBLEtBQUssRUFBRSxTQURNO0FBRWJDLGNBQUFBLElBQUksRUFBRSxRQUZPO0FBR2JDLGNBQUFBLFFBQVEsRUFBRSxjQUhHO0FBSWJYLGNBQUFBLE1BQU0sRUFBTkE7QUFKYSxhQUQyQztBQUFBO0FBQUEsbUJBT3hDWSxPQUFPLENBQUNNLFdBQVIsQ0FBb0JWLE1BQXBCLENBUHdDOztBQUFBO0FBT3BETSxZQUFBQSxHQVBvRDtBQVExREMsWUFBQUEsTUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWUUsT0FBWixDQUFvQixJQUFwQjs7QUFSMEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUQsR0FBRjtBQVdBVCxFQUFBQSxFQUFFLENBQUMsNENBQUQsdUVBQStDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6Q0MsWUFBQUEsTUFEeUMsR0FDaEM7QUFDYkMsY0FBQUEsS0FBSyxFQUFFLFNBRE07QUFFYkMsY0FBQUEsSUFBSSxFQUFFLE1BRk87QUFHYkMsY0FBQUEsUUFBUSxFQUFFLGNBSEc7QUFJYlgsY0FBQUEsTUFBTSxFQUFOQTtBQUphLGFBRGdDO0FBQUE7QUFBQSxtQkFPN0JZLE9BQU8sQ0FBQ00sV0FBUixDQUFvQlYsTUFBcEIsQ0FQNkI7O0FBQUE7QUFPekNNLFlBQUFBLEdBUHlDO0FBUS9DQyxZQUFBQSxNQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZRSxPQUFaLENBQW9CLElBQXBCOztBQVIrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEvQyxHQUFGO0FBVUQsQ0F0Qk8sQ0FBUjtBQXdCQVosUUFBUSxDQUFDLGVBQUQsRUFBa0IsWUFBTTtBQUM5QixNQUFNQyxPQUFPLEdBQUc7QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBaEI7QUFFQUMsRUFBQUEsRUFBRSxDQUFDLHlEQUFELHVFQUE0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdERDLFlBQUFBLE1BRHNELEdBQzdDO0FBQ2JDLGNBQUFBLEtBQUssRUFBRSxTQURNO0FBRWJDLGNBQUFBLElBQUksRUFBRSxRQUZPO0FBR2JDLGNBQUFBLFFBQVEsRUFBRSxjQUhHO0FBSWJOLGNBQUFBLE9BQU8sRUFBUEEsT0FKYTtBQUtiTCxjQUFBQSxNQUFNLEVBQU5BO0FBTGEsYUFENkM7QUFBQTtBQUFBLG1CQVExQ1ksT0FBTyxDQUFDTyxhQUFSLENBQXNCWCxNQUF0QixDQVIwQzs7QUFBQTtBQVF0RE0sWUFBQUEsR0FSc0Q7QUFTNURDLFlBQUFBLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsSUFBcEI7O0FBVDREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVELEdBQUY7QUFZQVQsRUFBQUEsRUFBRSxDQUFDLDhDQUFELHVFQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDM0NDLFlBQUFBLE1BRDJDLEdBQ2xDO0FBQ2JDLGNBQUFBLEtBQUssRUFBRSxTQURNO0FBRWJDLGNBQUFBLElBQUksRUFBRSxNQUZPO0FBR2JDLGNBQUFBLFFBQVEsRUFBRSxjQUhHO0FBSWJOLGNBQUFBLE9BQU8sRUFBUEEsT0FKYTtBQUtiTCxjQUFBQSxNQUFNLEVBQU5BO0FBTGEsYUFEa0M7QUFBQTtBQUFBLG1CQVEvQlksT0FBTyxDQUFDTyxhQUFSLENBQXNCWCxNQUF0QixDQVIrQjs7QUFBQTtBQVEzQ00sWUFBQUEsR0FSMkM7QUFTakRDLFlBQUFBLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsSUFBcEI7O0FBVGlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWpELEdBQUY7QUFXRCxDQTFCTyxDQUFSO0FBNEJBWixRQUFRLENBQUMsWUFBRCxFQUFlLFlBQU07QUFDM0IsTUFBTUMsT0FBTyxHQUFHO0FBQUVDLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQWhCO0FBRUFDLEVBQUFBLEVBQUUsQ0FBQyx5REFBRCx1RUFBNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3REQyxZQUFBQSxNQURzRCxHQUM3QztBQUNiQyxjQUFBQSxLQUFLLEVBQUUsU0FETTtBQUViQyxjQUFBQSxJQUFJLEVBQUUsUUFGTztBQUdiQyxjQUFBQSxRQUFRLEVBQUUsY0FIRztBQUliTixjQUFBQSxPQUFPLEVBQVBBLE9BSmE7QUFLYkwsY0FBQUEsTUFBTSxFQUFOQTtBQUxhLGFBRDZDO0FBQUE7QUFBQSxtQkFRMUNZLE9BQU8sQ0FBQ1EsVUFBUixDQUFtQlosTUFBbkIsQ0FSMEM7O0FBQUE7QUFRdERNLFlBQUFBLEdBUnNEO0FBUzVEQyxZQUFBQSxNQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZRSxPQUFaLENBQW9CLElBQXBCOztBQVQ0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE1RCxHQUFGO0FBWUFULEVBQUFBLEVBQUUsQ0FBQyw4Q0FBRCx1RUFBaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzNDQyxZQUFBQSxNQUQyQyxHQUNsQztBQUNiQyxjQUFBQSxLQUFLLEVBQUUsU0FETTtBQUViQyxjQUFBQSxJQUFJLEVBQUUsTUFGTztBQUdiQyxjQUFBQSxRQUFRLEVBQUUsY0FIRztBQUliTixjQUFBQSxPQUFPLEVBQVBBLE9BSmE7QUFLYkwsY0FBQUEsTUFBTSxFQUFOQTtBQUxhLGFBRGtDO0FBQUE7QUFBQSxtQkFRL0JZLE9BQU8sQ0FBQ1EsVUFBUixDQUFtQlosTUFBbkIsQ0FSK0I7O0FBQUE7QUFRM0NNLFlBQUFBLEdBUjJDO0FBU2pEQyxZQUFBQSxNQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZRSxPQUFaLENBQW9CLElBQXBCOztBQVRpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFqRCxHQUFGO0FBV0QsQ0ExQk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiamVzdFwiIC8+XG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vY29udGVudHMnO1xuY29uc3QgVEVTVF9UT0tFTiA9ICdlbmNyeXB0ZWQxMjM0NTY3ODknO1xuY29uc3QgYXV0aFRva2VuID0ge1xuICBzaGExOiBURVNUX1RPS0VOLFxuICBpZDogJ3Rlc3QtaWQnLFxuICBuYW1lOiAndGVzdC10b2tlbicsXG59O1xuY29uc3QgY29uZmlnID0ge1xuICB0b2tlbjogYXV0aFRva2VuLFxuICB0b2tlbmlkOiBURVNUX1RPS0VOLFxuICBzZXJ2ZXI6ICd0ZXN0LXNlcnZlcicsXG59O1xuXG5kZXNjcmliZSgnY3JlYXRlQ29udGVudCcsICgpID0+IHtcbiAgY29uc3QgcGF5bG9hZCA9IHsgaGVsbG86ICd3b3JsZCcgfTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZSBhIGZpbGUgZnJvbSBwYXRoIGFuZCBwcm9wZXIgY29uZmlnIHBhcmFtcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBvd25lcjogJ2Ffb3duZXInLFxuICAgICAgcmVwbzogJ2FfdXNlcicsXG4gICAgICBmaWxlcGF0aDogJ215L3Rlc3QvcGF0aCcsXG4gICAgICBwYXlsb2FkLFxuICAgICAgY29uZmlnLFxuICAgIH07XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaGVscGVycy5jcmVhdGVDb250ZW50KHBhcmFtcyk7XG4gICAgZXhwZWN0KHJlcykudG9FcXVhbCgnT0snKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBmYWlsIHRvIGNyZWF0ZSBhIGZpbGUgZm9yIHNvbWUgcmVhc29uJywgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIG93bmVyOiAnYV9vd25lcicsXG4gICAgICByZXBvOiAnZmFpbCcsXG4gICAgICBmaWxlcGF0aDogJ215L3Rlc3QvcGF0aCcsXG4gICAgICBwYXlsb2FkLFxuICAgICAgY29uZmlnLFxuICAgIH07XG4gICAgcmV0dXJuIGV4cGVjdChoZWxwZXJzLmNyZWF0ZUNvbnRlbnQocGFyYW1zKSkucmVqZWN0cy50b0VxdWFsKCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNCcpO1xuICB9KTtcbn0pO1xuXG5kZXNjcmliZSgncmVhZENvbnRlbnQnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgcmVhZCBhIGZpbGUgZnJvbSBwYXRoIGFuZCBwcm9wZXIgY29uZmlnIHBhcmFtcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBvd25lcjogJ2Ffb3duZXInLFxuICAgICAgcmVwbzogJ2FfdXNlcicsXG4gICAgICBmaWxlcGF0aDogJ215L3Rlc3QvcGF0aCcsXG4gICAgICBjb25maWcsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBoZWxwZXJzLnJlYWRDb250ZW50KHBhcmFtcyk7XG4gICAgZXhwZWN0KHJlcykudG9FcXVhbCgnT0snKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBmYWlsIHRvIHJlYWQgYSBmaWxlIGZvciBzb21lIHJlYXNvbicsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBvd25lcjogJ2Ffb3duZXInLFxuICAgICAgcmVwbzogJ2ZhaWwnLFxuICAgICAgZmlsZXBhdGg6ICdteS90ZXN0L3BhdGgnLFxuICAgICAgY29uZmlnLFxuICAgIH07XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaGVscGVycy5yZWFkQ29udGVudChwYXJhbXMpO1xuICAgIGV4cGVjdChyZXMpLnRvRXF1YWwobnVsbCk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKCd1cGRhdGVDb250ZW50JywgKCkgPT4ge1xuICBjb25zdCBwYXlsb2FkID0geyBoZWxsbzogJ3dvcmxkJyB9O1xuXG4gIGl0KCdzaG91bGQgdXBkYXRlIGEgZmlsZSBmcm9tIHBhdGggYW5kIHByb3BlciBjb25maWcgcGFyYW1zJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIG93bmVyOiAnYV9vd25lcicsXG4gICAgICByZXBvOiAnYV91c2VyJyxcbiAgICAgIGZpbGVwYXRoOiAnbXkvdGVzdC9wYXRoJyxcbiAgICAgIHBheWxvYWQsXG4gICAgICBjb25maWcsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBoZWxwZXJzLnVwZGF0ZUNvbnRlbnQocGFyYW1zKTtcbiAgICBleHBlY3QocmVzKS50b0VxdWFsKCdPSycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGZhaWwgdG8gdXBkYXRlIGEgZmlsZSBmb3Igc29tZSByZWFzb24nLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgb3duZXI6ICdhX293bmVyJyxcbiAgICAgIHJlcG86ICdmYWlsJyxcbiAgICAgIGZpbGVwYXRoOiAnbXkvdGVzdC9wYXRoJyxcbiAgICAgIHBheWxvYWQsXG4gICAgICBjb25maWcsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBoZWxwZXJzLnVwZGF0ZUNvbnRlbnQocGFyYW1zKTtcbiAgICBleHBlY3QocmVzKS50b0VxdWFsKG51bGwpO1xuICB9KTtcbn0pO1xuXG5kZXNjcmliZSgncmVtb3ZlRmlsZScsICgpID0+IHtcbiAgY29uc3QgcGF5bG9hZCA9IHsgaGVsbG86ICd3b3JsZCcgfTtcblxuICBpdCgnc2hvdWxkIHJlbW92ZSBhIGZpbGUgZnJvbSBwYXRoIGFuZCBwcm9wZXIgY29uZmlnIHBhcmFtcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBvd25lcjogJ2Ffb3duZXInLFxuICAgICAgcmVwbzogJ2FfdXNlcicsXG4gICAgICBmaWxlcGF0aDogJ215L3Rlc3QvcGF0aCcsXG4gICAgICBwYXlsb2FkLFxuICAgICAgY29uZmlnLFxuICAgIH07XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaGVscGVycy5yZW1vdmVGaWxlKHBhcmFtcyk7XG4gICAgZXhwZWN0KHJlcykudG9FcXVhbCgnT0snKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBmYWlsIHRvIHJlbW92ZSBhIGZpbGUgZm9yIHNvbWUgcmVhc29uJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIG93bmVyOiAnYV9vd25lcicsXG4gICAgICByZXBvOiAnZmFpbCcsXG4gICAgICBmaWxlcGF0aDogJ215L3Rlc3QvcGF0aCcsXG4gICAgICBwYXlsb2FkLFxuICAgICAgY29uZmlnLFxuICAgIH07XG4gICAgY29uc3QgcmVzID0gYXdhaXQgaGVscGVycy5yZW1vdmVGaWxlKHBhcmFtcyk7XG4gICAgZXhwZWN0KHJlcykudG9FcXVhbChudWxsKTtcbiAgfSk7XG59KTsiXX0=