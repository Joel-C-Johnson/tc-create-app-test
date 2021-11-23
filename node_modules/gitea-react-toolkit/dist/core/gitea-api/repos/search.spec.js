"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var helpers = _interopRequireWildcard(require("./search"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../core', function () {
  return {
    get: function get() {
      return Promise.resolve([{
        name: 'a_repo'
      }]);
    },
    apiPath: ''
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
describe('Search', function () {
  describe('repositoryExists', function () {
    it('should create a repo', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var params, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = {
                owner: 'a_owner',
                repository: 'a_repo',
                config: config
              };
              _context.next = 3;
              return helpers.repositoryExists(params);

            case 3:
              res = _context.sent;
              expect(res).toEqual(true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  describe('repositorySearch', function () {
    it('should create a repo', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var params, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = {
                owner: 'a_owner',
                query: 'a_query',
                config: config
              };
              _context2.next = 3;
              return helpers.repositorySearch(params);

            case 3:
              res = _context2.sent;
              expect(res).toEqual([{
                name: 'a_repo'
              }]);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9zZWFyY2guc3BlYy5qcyJdLCJuYW1lcyI6WyJqZXN0IiwibW9jayIsImdldCIsIlByb21pc2UiLCJyZXNvbHZlIiwibmFtZSIsImFwaVBhdGgiLCJURVNUX1RPS0VOIiwiYXV0aFRva2VuIiwic2hhMSIsImlkIiwiY29uZmlnIiwidG9rZW4iLCJ0b2tlbmlkIiwic2VydmVyIiwiZGVzY3JpYmUiLCJpdCIsInBhcmFtcyIsIm93bmVyIiwicmVwb3NpdG9yeSIsImhlbHBlcnMiLCJyZXBvc2l0b3J5RXhpc3RzIiwicmVzIiwiZXhwZWN0IiwidG9FcXVhbCIsInF1ZXJ5IiwicmVwb3NpdG9yeVNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0FBLElBQUksQ0FBQ0MsSUFBTCxDQUFVLFNBQVYsRUFBcUI7QUFBQSxTQUFPO0FBQUVDLElBQUFBLEdBQUcsRUFBRTtBQUFBLGFBQU1DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixDQUFDO0FBQUVDLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQUQsQ0FBaEIsQ0FBTjtBQUFBLEtBQVA7QUFBb0RDLElBQUFBLE9BQU8sRUFBRTtBQUE3RCxHQUFQO0FBQUEsQ0FBckI7QUFFQSxJQUFNQyxVQUFVLEdBQUcsb0JBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxJQUFJLEVBQUVGLFVBRFU7QUFFaEJHLEVBQUFBLEVBQUUsRUFBRSxTQUZZO0FBR2hCTCxFQUFBQSxJQUFJLEVBQUU7QUFIVSxDQUFsQjtBQUtBLElBQU1NLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxLQUFLLEVBQUVKLFNBRE07QUFFYkssRUFBQUEsT0FBTyxFQUFFTixVQUZJO0FBR2JPLEVBQUFBLE1BQU0sRUFBRTtBQUhLLENBQWY7QUFNQUMsUUFBUSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ3ZCQSxFQUFBQSxRQUFRLENBQUMsa0JBQUQsRUFBcUIsWUFBTTtBQUNqQ0MsSUFBQUEsRUFBRSxDQUFDLHNCQUFELHVFQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJDLGNBQUFBLE1BRG1CLEdBQ1Y7QUFDYkMsZ0JBQUFBLEtBQUssRUFBRSxTQURNO0FBRWJDLGdCQUFBQSxVQUFVLEVBQUUsUUFGQztBQUdiUixnQkFBQUEsTUFBTSxFQUFOQTtBQUhhLGVBRFU7QUFBQTtBQUFBLHFCQU1QUyxPQUFPLENBQUNDLGdCQUFSLENBQXlCSixNQUF6QixDQU5POztBQUFBO0FBTW5CSyxjQUFBQSxHQU5tQjtBQU96QkMsY0FBQUEsTUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWUUsT0FBWixDQUFvQixJQUFwQjs7QUFQeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBekIsR0FBRjtBQVNELEdBVk8sQ0FBUjtBQVlBVCxFQUFBQSxRQUFRLENBQUMsa0JBQUQsRUFBcUIsWUFBTTtBQUNqQ0MsSUFBQUEsRUFBRSxDQUFDLHNCQUFELHVFQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJDLGNBQUFBLE1BRG1CLEdBQ1Y7QUFDYkMsZ0JBQUFBLEtBQUssRUFBRSxTQURNO0FBRWJPLGdCQUFBQSxLQUFLLEVBQUUsU0FGTTtBQUdiZCxnQkFBQUEsTUFBTSxFQUFOQTtBQUhhLGVBRFU7QUFBQTtBQUFBLHFCQU1QUyxPQUFPLENBQUNNLGdCQUFSLENBQXlCVCxNQUF6QixDQU5POztBQUFBO0FBTW5CSyxjQUFBQSxHQU5tQjtBQU96QkMsY0FBQUEsTUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWUUsT0FBWixDQUFvQixDQUFDO0FBQUVuQixnQkFBQUEsSUFBSSxFQUFFO0FBQVIsZUFBRCxDQUFwQjs7QUFQeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBekIsR0FBRjtBQVNELEdBVk8sQ0FBUjtBQVdELENBeEJPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImplc3RcIiAvPlxuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuL3NlYXJjaCc7XG5qZXN0Lm1vY2soJy4uL2NvcmUnLCAoKSA9PiAoeyBnZXQ6ICgpID0+IFByb21pc2UucmVzb2x2ZShbeyBuYW1lOiAnYV9yZXBvJyB9XSksIGFwaVBhdGg6ICcnIH0pKTtcblxuY29uc3QgVEVTVF9UT0tFTiA9ICdlbmNyeXB0ZWQxMjM0NTY3ODknO1xuY29uc3QgYXV0aFRva2VuID0ge1xuICBzaGExOiBURVNUX1RPS0VOLFxuICBpZDogJ3Rlc3QtaWQnLFxuICBuYW1lOiAndGVzdC10b2tlbicsXG59O1xuY29uc3QgY29uZmlnID0ge1xuICB0b2tlbjogYXV0aFRva2VuLFxuICB0b2tlbmlkOiBURVNUX1RPS0VOLFxuICBzZXJ2ZXI6ICd0ZXN0LXNlcnZlcicsXG59O1xuXG5kZXNjcmliZSgnU2VhcmNoJywgKCkgPT4ge1xuICBkZXNjcmliZSgncmVwb3NpdG9yeUV4aXN0cycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGNyZWF0ZSBhIHJlcG8nLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIG93bmVyOiAnYV9vd25lcicsXG4gICAgICAgIHJlcG9zaXRvcnk6ICdhX3JlcG8nLFxuICAgICAgICBjb25maWcsXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgaGVscGVycy5yZXBvc2l0b3J5RXhpc3RzKHBhcmFtcyk7XG4gICAgICBleHBlY3QocmVzKS50b0VxdWFsKHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgncmVwb3NpdG9yeVNlYXJjaCcsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGNyZWF0ZSBhIHJlcG8nLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIG93bmVyOiAnYV9vd25lcicsXG4gICAgICAgIHF1ZXJ5OiAnYV9xdWVyeScsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH07XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBoZWxwZXJzLnJlcG9zaXRvcnlTZWFyY2gocGFyYW1zKTtcbiAgICAgIGV4cGVjdChyZXMpLnRvRXF1YWwoW3sgbmFtZTogJ2FfcmVwbycgfV0pO1xuICAgIH0pO1xuICB9KTtcbn0pOyJdfQ==