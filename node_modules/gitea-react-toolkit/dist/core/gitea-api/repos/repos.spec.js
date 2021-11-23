"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var core = _interopRequireWildcard(require("../core"));

var helpers = _interopRequireWildcard(require("./repos"));

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
describe('Repos', function () {
  afterEach(function () {
    jest.clearAllMocks();
  });
  describe('createRepo', function () {
    it('should create a repo', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var postSpy, params, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              postSpy = jest.spyOn(core, 'post');
              params = {
                repo: 'a_repo',
                settings: {},
                config: config
              };
              _context.next = 4;
              return helpers.createRepo(params);

            case 4:
              res = _context.sent;
              expect(postSpy).toHaveBeenCalledTimes(1);
              expect(postSpy).toHaveBeenCalledWith(expect.objectContaining({
                config: config,
                payload: {
                  auto_init: true,
                  name: params.repo
                },
                url: 'api/v1/user/repos'
              }));
              expect(res).toEqual('OK');

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  describe('readRepo', function () {
    it('should read a repo', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var getSpy, params, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              getSpy = jest.spyOn(core, 'get');
              params = {
                owner: 'a_owner',
                repo: 'a_repo',
                config: config
              };
              _context2.next = 4;
              return helpers.readRepo(params);

            case 4:
              res = _context2.sent;
              expect(getSpy).toHaveBeenCalledTimes(1);
              expect(getSpy).toHaveBeenCalledWith(expect.objectContaining({
                config: config,
                noCache: true,
                url: "api/v1/repos/".concat(params.owner, "/").concat(params.repo)
              }));
              expect(res).toEqual('OK');

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
  describe('ensureRepo', function () {
    it('should ensure a repo', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var getSpy, params, res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              getSpy = jest.spyOn(core, 'get');
              params = {
                owner: 'a_owner',
                repo: 'a_repo',
                config: config,
                settings: {}
              };
              _context3.next = 4;
              return helpers.ensureRepo(params);

            case 4:
              res = _context3.sent;
              expect(getSpy).toHaveBeenCalledTimes(1);
              expect(getSpy).toHaveBeenCalledWith(expect.objectContaining({
                config: config,
                noCache: true,
                url: "api/v1/repos/".concat(params.owner, "/").concat(params.repo)
              }));
              expect(res).toEqual('OK');

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    it('should ensure a repo', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var getSpy, postSpy, params, res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              getSpy = jest.spyOn(core, 'get');
              postSpy = jest.spyOn(core, 'post');
              params = {
                owner: 'a_owner',
                repo: 'fail',
                config: config,
                settings: {}
              };
              _context4.next = 5;
              return helpers.ensureRepo(params);

            case 5:
              res = _context4.sent;
              expect(getSpy).toHaveBeenCalledTimes(1);
              expect(getSpy).toHaveBeenCalledWith(expect.objectContaining({
                config: config,
                noCache: true,
                url: "api/v1/repos/".concat(params.owner, "/").concat(params.repo)
              }));
              expect(postSpy).toHaveBeenCalledTimes(1);
              expect(postSpy).toHaveBeenCalledWith(expect.objectContaining({
                config: config,
                payload: {
                  auto_init: true,
                  name: params.repo
                },
                url: 'api/v1/user/repos'
              }));
              expect(res).toEqual('OK');

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe('updateRepo', function () {
    it('should update a repo', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var patchSpy, params, res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              patchSpy = jest.spyOn(core, 'patch');
              params = {
                owner: 'a_owner',
                repo: 'a_repo',
                config: config,
                settings: {}
              };
              _context5.next = 4;
              return helpers.updateRepo(params);

            case 4:
              res = _context5.sent;
              expect(patchSpy).toHaveBeenCalledTimes(1);
              expect(patchSpy).toHaveBeenCalledWith(expect.objectContaining({
                config: config,
                url: "api/v1/repos/".concat(params.owner, "/").concat(params.repo),
                payload: {}
              }));
              expect(res).toEqual('OK');

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  });
  describe('deleteRepo', function () {
    it('should delete a repo', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var delSpy, params, res;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              delSpy = jest.spyOn(core, 'del');
              params = {
                owner: 'a_owner',
                repo: 'a_repo',
                config: config
              };
              _context6.next = 4;
              return helpers.deleteRepo(params);

            case 4:
              res = _context6.sent;
              expect(delSpy).toHaveBeenCalledTimes(1);
              expect(delSpy).toHaveBeenCalledWith(expect.objectContaining({
                config: config,
                url: "api/v1/repos/".concat(params.owner, "/").concat(params.repo),
                payload: {}
              }));
              expect(res).toEqual('OK');

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9yZXBvcy9yZXBvcy5zcGVjLmpzIl0sIm5hbWVzIjpbIlRFU1RfVE9LRU4iLCJhdXRoVG9rZW4iLCJzaGExIiwiaWQiLCJuYW1lIiwiY29uZmlnIiwidG9rZW4iLCJ0b2tlbmlkIiwic2VydmVyIiwiZGVzY3JpYmUiLCJhZnRlckVhY2giLCJqZXN0IiwiY2xlYXJBbGxNb2NrcyIsIml0IiwicG9zdFNweSIsInNweU9uIiwiY29yZSIsInBhcmFtcyIsInJlcG8iLCJzZXR0aW5ncyIsImhlbHBlcnMiLCJjcmVhdGVSZXBvIiwicmVzIiwiZXhwZWN0IiwidG9IYXZlQmVlbkNhbGxlZFRpbWVzIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJvYmplY3RDb250YWluaW5nIiwicGF5bG9hZCIsImF1dG9faW5pdCIsInVybCIsInRvRXF1YWwiLCJnZXRTcHkiLCJvd25lciIsInJlYWRSZXBvIiwibm9DYWNoZSIsImVuc3VyZVJlcG8iLCJwYXRjaFNweSIsInVwZGF0ZVJlcG8iLCJkZWxTcHkiLCJkZWxldGVSZXBvIl0sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsb0JBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxJQUFJLEVBQUVGLFVBRFU7QUFFaEJHLEVBQUFBLEVBQUUsRUFBRSxTQUZZO0FBR2hCQyxFQUFBQSxJQUFJLEVBQUU7QUFIVSxDQUFsQjtBQUtBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxLQUFLLEVBQUVMLFNBRE07QUFFYk0sRUFBQUEsT0FBTyxFQUFFUCxVQUZJO0FBR2JRLEVBQUFBLE1BQU0sRUFBRTtBQUhLLENBQWY7QUFNQUMsUUFBUSxDQUFDLE9BQUQsRUFBVSxZQUFNO0FBQ3RCQyxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkQyxJQUFBQSxJQUFJLENBQUNDLGFBQUw7QUFDRCxHQUZRLENBQVQ7QUFH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QSxJQUFJLEVBQUUsUUFGTztBQUdiYixnQkFBQUEsTUFBTSxFQUFOQTtBQUhhLGVBRlU7QUFBQTtBQUFBLHFCQU9QZSxPQUFPLENBQUNtQixVQUFSLENBQW1CdEIsTUFBbkIsQ0FQTzs7QUFBQTtBQU9uQkssY0FBQUEsR0FQbUI7QUFRekJDLGNBQUFBLE1BQU0sQ0FBQ2UsTUFBRCxDQUFOLENBQWVkLHFCQUFmLENBQXFDLENBQXJDO0FBQ0FELGNBQUFBLE1BQU0sQ0FBQ2UsTUFBRCxDQUFOLENBQWViLG9CQUFmLENBQW9DRixNQUFNLENBQUNHLGdCQUFQLENBQXdCO0FBQzFEckIsZ0JBQUFBLE1BQU0sRUFBTkEsTUFEMEQ7QUFFMUR3QixnQkFBQUEsR0FBRyx5QkFBa0JaLE1BQU0sQ0FBQ2UsS0FBekIsY0FBa0NmLE1BQU0sQ0FBQ0MsSUFBekMsQ0FGdUQ7QUFHMURTLGdCQUFBQSxPQUFPLEVBQUU7QUFIaUQsZUFBeEIsQ0FBcEM7QUFLQUosY0FBQUEsTUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWVEsT0FBWixDQUFvQixJQUFwQjs7QUFkeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBekIsR0FBRjtBQWdCRCxHQWpCTyxDQUFSO0FBa0JELENBN0hPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImplc3RcIiAvPlxuaW1wb3J0ICogYXMgY29yZSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9yZXBvcyc7XG5jb25zdCBURVNUX1RPS0VOID0gJ2VuY3J5cHRlZDEyMzQ1Njc4OSc7XG5jb25zdCBhdXRoVG9rZW4gPSB7XG4gIHNoYTE6IFRFU1RfVE9LRU4sXG4gIGlkOiAndGVzdC1pZCcsXG4gIG5hbWU6ICd0ZXN0LXRva2VuJyxcbn07XG5jb25zdCBjb25maWcgPSB7XG4gIHRva2VuOiBhdXRoVG9rZW4sXG4gIHRva2VuaWQ6IFRFU1RfVE9LRU4sXG4gIHNlcnZlcjogJ3Rlc3Qtc2VydmVyJyxcbn07XG5cbmRlc2NyaWJlKCdSZXBvcycsICgpID0+IHtcbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBqZXN0LmNsZWFyQWxsTW9ja3MoKTtcbiAgfSk7XG4gIGRlc2NyaWJlKCdjcmVhdGVSZXBvJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgY3JlYXRlIGEgcmVwbycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHBvc3RTcHkgPSBqZXN0LnNweU9uKGNvcmUsICdwb3N0Jyk7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIHJlcG86ICdhX3JlcG8nLFxuICAgICAgICBzZXR0aW5nczoge30sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH07XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBoZWxwZXJzLmNyZWF0ZVJlcG8ocGFyYW1zKTtcbiAgICAgIGV4cGVjdChwb3N0U3B5KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG4gICAgICBleHBlY3QocG9zdFNweSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIHBheWxvYWQ6IHsgYXV0b19pbml0OiB0cnVlLCBuYW1lOiBwYXJhbXMucmVwbyB9LFxuICAgICAgICB1cmw6ICdhcGkvdjEvdXNlci9yZXBvcycsXG4gICAgICB9KSk7XG4gICAgICBleHBlY3QocmVzKS50b0VxdWFsKCdPSycpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgncmVhZFJlcG8nLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZWFkIGEgcmVwbycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGdldFNweSA9IGplc3Quc3B5T24oY29yZSwgJ2dldCcpO1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBvd25lcjogJ2Ffb3duZXInLFxuICAgICAgICByZXBvOiAnYV9yZXBvJyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMucmVhZFJlcG8ocGFyYW1zKTtcbiAgICAgIGV4cGVjdChnZXRTcHkpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcbiAgICAgIGV4cGVjdChnZXRTcHkpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGV4cGVjdC5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBub0NhY2hlOiB0cnVlLFxuICAgICAgICB1cmw6IGBhcGkvdjEvcmVwb3MvJHtwYXJhbXMub3duZXJ9LyR7cGFyYW1zLnJlcG99YCxcbiAgICAgIH0pKTtcbiAgICAgIGV4cGVjdChyZXMpLnRvRXF1YWwoJ09LJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdlbnN1cmVSZXBvJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgZW5zdXJlIGEgcmVwbycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGdldFNweSA9IGplc3Quc3B5T24oY29yZSwgJ2dldCcpO1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBvd25lcjogJ2Ffb3duZXInLFxuICAgICAgICByZXBvOiAnYV9yZXBvJyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBzZXR0aW5nczoge30sXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgaGVscGVycy5lbnN1cmVSZXBvKHBhcmFtcyk7XG4gICAgICBleHBlY3QoZ2V0U3B5KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG4gICAgICBleHBlY3QoZ2V0U3B5KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChleHBlY3Qub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgbm9DYWNoZTogdHJ1ZSxcbiAgICAgICAgdXJsOiBgYXBpL3YxL3JlcG9zLyR7cGFyYW1zLm93bmVyfS8ke3BhcmFtcy5yZXBvfWAsXG4gICAgICB9KSk7XG4gICAgICBleHBlY3QocmVzKS50b0VxdWFsKCdPSycpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBlbnN1cmUgYSByZXBvJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZ2V0U3B5ID0gamVzdC5zcHlPbihjb3JlLCAnZ2V0Jyk7XG4gICAgICBjb25zdCBwb3N0U3B5ID0gamVzdC5zcHlPbihjb3JlLCAncG9zdCcpO1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBvd25lcjogJ2Ffb3duZXInLFxuICAgICAgICByZXBvOiAnZmFpbCcsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMuZW5zdXJlUmVwbyhwYXJhbXMpO1xuICAgICAgZXhwZWN0KGdldFNweSkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuICAgICAgZXhwZWN0KGdldFNweSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICBjb25maWcsXG4gICAgICAgIG5vQ2FjaGU6IHRydWUsXG4gICAgICAgIHVybDogYGFwaS92MS9yZXBvcy8ke3BhcmFtcy5vd25lcn0vJHtwYXJhbXMucmVwb31gLFxuICAgICAgfSkpO1xuICAgICAgZXhwZWN0KHBvc3RTcHkpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcbiAgICAgIGV4cGVjdChwb3N0U3B5KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChleHBlY3Qub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcGF5bG9hZDogeyBhdXRvX2luaXQ6IHRydWUsIG5hbWU6IHBhcmFtcy5yZXBvIH0sXG4gICAgICAgIHVybDogJ2FwaS92MS91c2VyL3JlcG9zJyxcbiAgICAgIH0pKTtcbiAgICAgIGV4cGVjdChyZXMpLnRvRXF1YWwoJ09LJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCd1cGRhdGVSZXBvJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgdXBkYXRlIGEgcmVwbycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHBhdGNoU3B5ID0gamVzdC5zcHlPbihjb3JlLCAncGF0Y2gnKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgb3duZXI6ICdhX293bmVyJyxcbiAgICAgICAgcmVwbzogJ2FfcmVwbycsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMudXBkYXRlUmVwbyhwYXJhbXMpO1xuICAgICAgZXhwZWN0KHBhdGNoU3B5KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG4gICAgICBleHBlY3QocGF0Y2hTcHkpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGV4cGVjdC5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB1cmw6IGBhcGkvdjEvcmVwb3MvJHtwYXJhbXMub3duZXJ9LyR7cGFyYW1zLnJlcG99YCxcbiAgICAgICAgcGF5bG9hZDoge30sXG4gICAgICB9KSk7XG4gICAgICBleHBlY3QocmVzKS50b0VxdWFsKCdPSycpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnZGVsZXRlUmVwbycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGRlbGV0ZSBhIHJlcG8nLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkZWxTcHkgPSBqZXN0LnNweU9uKGNvcmUsICdkZWwnKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgb3duZXI6ICdhX293bmVyJyxcbiAgICAgICAgcmVwbzogJ2FfcmVwbycsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH07XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBoZWxwZXJzLmRlbGV0ZVJlcG8ocGFyYW1zKTtcbiAgICAgIGV4cGVjdChkZWxTcHkpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcbiAgICAgIGV4cGVjdChkZWxTcHkpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGV4cGVjdC5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB1cmw6IGBhcGkvdjEvcmVwb3MvJHtwYXJhbXMub3duZXJ9LyR7cGFyYW1zLnJlcG99YCxcbiAgICAgICAgcGF5bG9hZDoge30sXG4gICAgICB9KSk7XG4gICAgICBleHBlY3QocmVzKS50b0VxdWFsKCdPSycpO1xuICAgIH0pO1xuICB9KTtcbn0pOyJdfQ==