"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var helpers = _interopRequireWildcard(require("./users"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../core', function () {
  return {
    get: function get() {
      return Promise.resolve({
        id: 'test-user'
      });
    },
    apiPath: 'api/v1'
  };
});
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
describe('Users', function () {
  var core = require('../core');

  beforeEach(function () {
    jest.clearAllMocks();
  });
  describe('getUser', function () {
    it('should get a user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var getSpy, params, expected, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getSpy = jest.spyOn(core, 'get');
              params = {
                username: 'a_user',
                config: config
              };
              expected = expect.objectContaining({
                config: config,
                url: "api/v1/users/".concat(params.username)
              });
              _context.next = 5;
              return helpers.getUser(params);

            case 5:
              res = _context.sent;
              expect(getSpy).toHaveBeenCalledTimes(1);
              expect(getSpy).toHaveBeenCalledWith(expected);
              expect(res).toEqual({
                'id': 'test-user'
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  describe('getUID', function () {
    it('should get a user', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var getSpy, params, expected, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              getSpy = jest.spyOn(core, 'get');
              params = {
                username: 'a_user',
                config: config
              };
              expected = expect.objectContaining({
                config: config,
                url: "api/v1/users/".concat(params.username)
              });
              _context2.next = 5;
              return helpers.getUID(params);

            case 5:
              res = _context2.sent;
              expect(getSpy).toHaveBeenCalledTimes(1);
              expect(getSpy).toHaveBeenCalledWith(expected);
              expect(res).toEqual('test-user');

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS91c2Vycy91c2Vycy5zcGVjLmpzIl0sIm5hbWVzIjpbImplc3QiLCJtb2NrIiwiZ2V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJpZCIsImFwaVBhdGgiLCJURVNUX1RPS0VOIiwiYXV0aFRva2VuIiwic2hhMSIsIm5hbWUiLCJjb25maWciLCJ0b2tlbiIsInRva2VuaWQiLCJzZXJ2ZXIiLCJkZXNjcmliZSIsImNvcmUiLCJyZXF1aXJlIiwiYmVmb3JlRWFjaCIsImNsZWFyQWxsTW9ja3MiLCJpdCIsImdldFNweSIsInNweU9uIiwicGFyYW1zIiwidXNlcm5hbWUiLCJleHBlY3RlZCIsImV4cGVjdCIsIm9iamVjdENvbnRhaW5pbmciLCJ1cmwiLCJoZWxwZXJzIiwiZ2V0VXNlciIsInJlcyIsInRvSGF2ZUJlZW5DYWxsZWRUaW1lcyIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwidG9FcXVhbCIsImdldFVJRCJdLCJtYXBwaW5ncyI6Ijs7OztBQUVBOzs7Ozs7Ozs7O0FBQ0FBLElBQUksQ0FBQ0MsSUFBTCxDQUFVLFNBQVYsRUFBcUI7QUFBQSxTQUFPO0FBQUVDLElBQUFBLEdBQUcsRUFBRTtBQUFBLGFBQU1DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjtBQUFFQyxRQUFBQSxFQUFFLEVBQUU7QUFBTixPQUFoQixDQUFOO0FBQUEsS0FBUDtBQUFtREMsSUFBQUEsT0FBTyxFQUFFO0FBQTVELEdBQVA7QUFBQSxDQUFyQjtBQUVBLElBQU1DLFVBQVUsR0FBRyxvQkFBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLElBQUksRUFBRUYsVUFEVTtBQUVoQkYsRUFBQUEsRUFBRSxFQUFFLFNBRlk7QUFHaEJLLEVBQUFBLElBQUksRUFBRTtBQUhVLENBQWxCO0FBS0EsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLEtBQUssRUFBRUosU0FETTtBQUViSyxFQUFBQSxPQUFPLEVBQUVOLFVBRkk7QUFHYk8sRUFBQUEsTUFBTSxFQUFFO0FBSEssQ0FBZjtBQU1BQyxRQUFRLENBQUMsT0FBRCxFQUFVLFlBQU07QUFDdEIsTUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFwQjs7QUFFQUMsRUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmxCLElBQUFBLElBQUksQ0FBQ21CLGFBQUw7QUFDRCxHQUZTLENBQVY7QUFHQUosRUFBQUEsUUFBUSxDQUFDLFNBQUQsRUFBWSxZQUFNO0FBQ3hCSyxJQUFBQSxFQUFFLENBQUMsbUJBQUQsdUVBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkMsY0FBQUEsTUFEZ0IsR0FDUHJCLElBQUksQ0FBQ3NCLEtBQUwsQ0FBV04sSUFBWCxFQUFpQixLQUFqQixDQURPO0FBRWhCTyxjQUFBQSxNQUZnQixHQUVQO0FBQUVDLGdCQUFBQSxRQUFRLEVBQUUsUUFBWjtBQUFzQmIsZ0JBQUFBLE1BQU0sRUFBTkE7QUFBdEIsZUFGTztBQUdoQmMsY0FBQUEsUUFIZ0IsR0FHTEMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QjtBQUN2Q2hCLGdCQUFBQSxNQUFNLEVBQU5BLE1BRHVDO0FBRXZDaUIsZ0JBQUFBLEdBQUcseUJBQWtCTCxNQUFNLENBQUNDLFFBQXpCO0FBRm9DLGVBQXhCLENBSEs7QUFBQTtBQUFBLHFCQU9KSyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JQLE1BQWhCLENBUEk7O0FBQUE7QUFPaEJRLGNBQUFBLEdBUGdCO0FBUXRCTCxjQUFBQSxNQUFNLENBQUNMLE1BQUQsQ0FBTixDQUFlVyxxQkFBZixDQUFxQyxDQUFyQztBQUNBTixjQUFBQSxNQUFNLENBQUNMLE1BQUQsQ0FBTixDQUFlWSxvQkFBZixDQUFvQ1IsUUFBcEM7QUFDQUMsY0FBQUEsTUFBTSxDQUFDSyxHQUFELENBQU4sQ0FBWUcsT0FBWixDQUFvQjtBQUFFLHNCQUFNO0FBQVIsZUFBcEI7O0FBVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXRCLEdBQUY7QUFZRCxHQWJPLENBQVI7QUFlQW5CLEVBQUFBLFFBQVEsQ0FBQyxRQUFELEVBQVcsWUFBTTtBQUN2QkssSUFBQUEsRUFBRSxDQUFDLG1CQUFELHVFQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLGNBQUFBLE1BRGdCLEdBQ1ByQixJQUFJLENBQUNzQixLQUFMLENBQVdOLElBQVgsRUFBaUIsS0FBakIsQ0FETztBQUVoQk8sY0FBQUEsTUFGZ0IsR0FFUDtBQUFFQyxnQkFBQUEsUUFBUSxFQUFFLFFBQVo7QUFBc0JiLGdCQUFBQSxNQUFNLEVBQU5BO0FBQXRCLGVBRk87QUFHaEJjLGNBQUFBLFFBSGdCLEdBR0xDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0I7QUFDdkNoQixnQkFBQUEsTUFBTSxFQUFOQSxNQUR1QztBQUV2Q2lCLGdCQUFBQSxHQUFHLHlCQUFrQkwsTUFBTSxDQUFDQyxRQUF6QjtBQUZvQyxlQUF4QixDQUhLO0FBQUE7QUFBQSxxQkFPSkssT0FBTyxDQUFDTSxNQUFSLENBQWVaLE1BQWYsQ0FQSTs7QUFBQTtBQU9oQlEsY0FBQUEsR0FQZ0I7QUFRdEJMLGNBQUFBLE1BQU0sQ0FBQ0wsTUFBRCxDQUFOLENBQWVXLHFCQUFmLENBQXFDLENBQXJDO0FBQ0FOLGNBQUFBLE1BQU0sQ0FBQ0wsTUFBRCxDQUFOLENBQWVZLG9CQUFmLENBQW9DUixRQUFwQztBQUNBQyxjQUFBQSxNQUFNLENBQUNLLEdBQUQsQ0FBTixDQUFZRyxPQUFaLENBQW9CLFdBQXBCOztBQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF0QixHQUFGO0FBWUQsR0FiTyxDQUFSO0FBY0QsQ0FuQ08sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMgKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiamVzdFwiIC8+XG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vdXNlcnMnO1xuamVzdC5tb2NrKCcuLi9jb3JlJywgKCkgPT4gKHsgZ2V0OiAoKSA9PiBQcm9taXNlLnJlc29sdmUoeyBpZDogJ3Rlc3QtdXNlcicgfSksIGFwaVBhdGg6ICdhcGkvdjEnIH0pKTtcblxuY29uc3QgVEVTVF9UT0tFTiA9ICdlbmNyeXB0ZWQxMjM0NTY3ODknO1xuY29uc3QgYXV0aFRva2VuID0ge1xuICBzaGExOiBURVNUX1RPS0VOLFxuICBpZDogJ3Rlc3QtaWQnLFxuICBuYW1lOiAndGVzdC10b2tlbicsXG59O1xuY29uc3QgY29uZmlnID0ge1xuICB0b2tlbjogYXV0aFRva2VuLFxuICB0b2tlbmlkOiBURVNUX1RPS0VOLFxuICBzZXJ2ZXI6ICd0ZXN0LXNlcnZlcicsXG59O1xuXG5kZXNjcmliZSgnVXNlcnMnLCAoKSA9PiB7XG4gIGNvbnN0IGNvcmUgPSByZXF1aXJlKCcuLi9jb3JlJyk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgamVzdC5jbGVhckFsbE1vY2tzKCk7XG4gIH0pO1xuICBkZXNjcmliZSgnZ2V0VXNlcicsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGdldCBhIHVzZXInLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBnZXRTcHkgPSBqZXN0LnNweU9uKGNvcmUsICdnZXQnKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcm5hbWU6ICdhX3VzZXInLCBjb25maWcgfTtcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0gZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIHVybDogYGFwaS92MS91c2Vycy8ke3BhcmFtcy51c2VybmFtZX1gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBoZWxwZXJzLmdldFVzZXIocGFyYW1zKTtcbiAgICAgIGV4cGVjdChnZXRTcHkpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcbiAgICAgIGV4cGVjdChnZXRTcHkpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGV4cGVjdGVkKTtcbiAgICAgIGV4cGVjdChyZXMpLnRvRXF1YWwoeyAnaWQnOiAndGVzdC11c2VyJyB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2dldFVJRCcsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGdldCBhIHVzZXInLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBnZXRTcHkgPSBqZXN0LnNweU9uKGNvcmUsICdnZXQnKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcm5hbWU6ICdhX3VzZXInLCBjb25maWcgfTtcbiAgICAgIGNvbnN0IGV4cGVjdGVkID0gZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIHVybDogYGFwaS92MS91c2Vycy8ke3BhcmFtcy51c2VybmFtZX1gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBoZWxwZXJzLmdldFVJRChwYXJhbXMpO1xuICAgICAgZXhwZWN0KGdldFNweSkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuICAgICAgZXhwZWN0KGdldFNweSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoZXhwZWN0ZWQpO1xuICAgICAgZXhwZWN0KHJlcykudG9FcXVhbCgndGVzdC11c2VyJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7Il19