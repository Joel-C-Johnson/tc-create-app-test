"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var helpers = _interopRequireWildcard(require("./authentication"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

jest.unmock('axios');
jest.unmock('axios-cache-adapter');
jest.mock('./users', function () {
  return _objectSpread(_objectSpread({}, require.requireActual('./users')), {}, {
    getUser: function getUser() {
      return Promise.resolve({
        id: 'test-user'
      });
    }
  });
});
var TEST_TOKEN = 'encrypted123456789';
describe('encodeAuthentication', function () {
  it('should encode authentication given username/password', function () {
    var params = {
      username: 'username',
      password: 'password'
    };
    var res = helpers.encodeAuthentication(params);
    expect(res).toEqual(expect.stringMatching(/Basic\s/ig));
  });
  it('should encode authentication given token', function () {
    var params = {
      token: TEST_TOKEN
    };
    var res = helpers.encodeAuthentication(params);
    expect(res).toEqual(expect.stringMatching(/token/ig));
  });
});
describe('authorizationHeaders', function () {
  it('should return correct authorization headers given username/password', function () {
    var expected = expect.objectContaining({
      'Content-Type': expect.any(String),
      'Authorization': expect.any(String)
    });
    var params = {
      username: 'username',
      password: 'password'
    };
    var res = helpers.authorizationHeaders(params);
    expect(res).toEqual(expected);
  });
  it('should return correct authorization headers given token', function () {
    var expected = expect.objectContaining({
      'Content-Type': expect.any(String),
      'Authorization': expect.any(String)
    });
    var params = {
      token: TEST_TOKEN
    };
    var res = helpers.authorizationHeaders(params);
    expect(res).toEqual(expected);
  });
});
describe('authenticate', function () {
  it('should return correct authorization object given username/password and config object', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var params, expected, res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {
              username: 'username',
              password: 'password',
              config: {
                tokenid: 'test-token',
                token: {
                  sha1: TEST_TOKEN,
                  id: '',
                  name: ''
                }
              }
            };
            expected = expect.objectContaining({
              config: expect.objectContaining({
                headers: expect.objectContaining({
                  'Authorization': expect.stringMatching(/token\s/),
                  'Content-Type': 'application/json'
                }),
                token: {
                  sha1: TEST_TOKEN,
                  id: '',
                  name: ''
                },
                tokenid: params.config.tokenid
              }),
              user: expect.objectContaining({
                id: expect.any(String)
              })
            });
            _context.next = 4;
            return helpers.authenticate(params);

          case 4:
            res = _context.sent;
            expect(res).toEqual(expected);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9hdXRoZW50aWNhdGlvbi5zcGVjLmpzIl0sIm5hbWVzIjpbImplc3QiLCJ1bm1vY2siLCJtb2NrIiwicmVxdWlyZSIsInJlcXVpcmVBY3R1YWwiLCJnZXRVc2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpZCIsIlRFU1RfVE9LRU4iLCJkZXNjcmliZSIsIml0IiwicGFyYW1zIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlcyIsImhlbHBlcnMiLCJlbmNvZGVBdXRoZW50aWNhdGlvbiIsImV4cGVjdCIsInRvRXF1YWwiLCJzdHJpbmdNYXRjaGluZyIsInRva2VuIiwiZXhwZWN0ZWQiLCJvYmplY3RDb250YWluaW5nIiwiYW55IiwiU3RyaW5nIiwiYXV0aG9yaXphdGlvbkhlYWRlcnMiLCJjb25maWciLCJ0b2tlbmlkIiwic2hhMSIsIm5hbWUiLCJoZWFkZXJzIiwidXNlciIsImF1dGhlbnRpY2F0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLE9BQVo7QUFDQUQsSUFBSSxDQUFDQyxNQUFMLENBQVkscUJBQVo7QUFDQUQsSUFBSSxDQUFDRSxJQUFMLENBQVUsU0FBVixFQUFxQjtBQUFBLHlDQUFZQyxPQUFPLENBQUNDLGFBQVIsQ0FBc0IsU0FBdEIsQ0FBWjtBQUE4Q0MsSUFBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUMsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUVDLFFBQUFBLEVBQUUsRUFBRTtBQUFOLE9BQWhCLENBQU47QUFBQTtBQUF2RDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLG9CQUFuQjtBQUdBQyxRQUFRLENBQUMsc0JBQUQsRUFBeUIsWUFBTTtBQUNyQ0MsRUFBQUEsRUFBRSxDQUFDLHNEQUFELEVBQXlELFlBQU07QUFDL0QsUUFBTUMsTUFBTSxHQUFHO0FBQ2JDLE1BQUFBLFFBQVEsRUFBRSxVQURHO0FB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QUFQLENBQXNCLFNBQXRCLENBRGM7QUFFL0Isa0NBQWdCO0FBRmUsaUJBQXhCLENBRHFCO0FBSzlCQyxnQkFBQUEsS0FBSyxFQUFFO0FBQ0xRLGtCQUFBQSxJQUFJLEVBQUVwQixVQUREO0FBQ2FELGtCQUFBQSxFQUFFLEVBQUUsRUFEakI7QUFDcUJzQixrQkFBQUEsSUFBSSxFQUFFO0FBRDNCLGlCQUx1QjtBQVE5QkYsZ0JBQUFBLE9BQU8sRUFBRWhCLE1BQU0sQ0FBQ2UsTUFBUCxDQUFjQztBQVJPLGVBQXhCLENBRCtCO0FBV3ZDSSxjQUFBQSxJQUFJLEVBQUVkLE1BQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0I7QUFBRWYsZ0JBQUFBLEVBQUUsRUFBRVUsTUFBTSxDQUFDTSxHQUFQLENBQVdDLE1BQVg7QUFBTixlQUF4QjtBQVhpQyxhQUF4QixDQVh3RTtBQUFBO0FBQUEsbUJBd0J2RVQsT0FBTyxDQUFDaUIsWUFBUixDQUFxQnJCLE1BQXJCLENBeEJ1RTs7QUFBQTtBQXdCbkZHLFlBQUFBLEdBeEJtRjtBQXlCekZHLFlBQUFBLE1BQU0sQ0FBQ0gsR0FBRCxDQUFOLENBQVlJLE9BQVosQ0FBb0JHLFFBQXBCOztBQXpCeUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekYsR0FBRjtBQTJCRCxDQTVCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJqZXN0XCIgLz5cbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9hdXRoZW50aWNhdGlvbic7XG5qZXN0LnVubW9jaygnYXhpb3MnKTtcbmplc3QudW5tb2NrKCdheGlvcy1jYWNoZS1hZGFwdGVyJyk7XG5qZXN0Lm1vY2soJy4vdXNlcnMnLCAoKSA9PiAoeyAuLi5yZXF1aXJlLnJlcXVpcmVBY3R1YWwoJy4vdXNlcnMnKSwgZ2V0VXNlcjogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKHsgaWQ6ICd0ZXN0LXVzZXInIH0pIH0pKTtcbmNvbnN0IFRFU1RfVE9LRU4gPSAnZW5jcnlwdGVkMTIzNDU2Nzg5JztcblxuXG5kZXNjcmliZSgnZW5jb2RlQXV0aGVudGljYXRpb24nLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgZW5jb2RlIGF1dGhlbnRpY2F0aW9uIGdpdmVuIHVzZXJuYW1lL3Bhc3N3b3JkJywgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHVzZXJuYW1lOiAndXNlcm5hbWUnLFxuICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBoZWxwZXJzLmVuY29kZUF1dGhlbnRpY2F0aW9uKHBhcmFtcyk7XG4gICAgZXhwZWN0KHJlcykudG9FcXVhbChleHBlY3Quc3RyaW5nTWF0Y2hpbmcoL0Jhc2ljXFxzL2lnKSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZW5jb2RlIGF1dGhlbnRpY2F0aW9uIGdpdmVuIHRva2VuJywgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgdG9rZW46IFRFU1RfVE9LRU4gfTtcbiAgICBjb25zdCByZXMgPSBoZWxwZXJzLmVuY29kZUF1dGhlbnRpY2F0aW9uKHBhcmFtcyk7XG4gICAgZXhwZWN0KHJlcykudG9FcXVhbChleHBlY3Quc3RyaW5nTWF0Y2hpbmcoL3Rva2VuL2lnKSk7XG4gIH0pO1xufSk7XG5cbmRlc2NyaWJlKCdhdXRob3JpemF0aW9uSGVhZGVycycsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCByZXR1cm4gY29ycmVjdCBhdXRob3JpemF0aW9uIGhlYWRlcnMgZ2l2ZW4gdXNlcm5hbWUvcGFzc3dvcmQnLCAoKSA9PiB7XG4gICAgY29uc3QgZXhwZWN0ZWQgPSBleHBlY3Qub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogZXhwZWN0LmFueShTdHJpbmcpLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBleHBlY3QuYW55KFN0cmluZyksXG4gICAgfSk7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgdXNlcm5hbWU6ICd1c2VybmFtZScsXG4gICAgICBwYXNzd29yZDogJ3Bhc3N3b3JkJyxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGhlbHBlcnMuYXV0aG9yaXphdGlvbkhlYWRlcnMocGFyYW1zKTtcbiAgICBleHBlY3QocmVzKS50b0VxdWFsKGV4cGVjdGVkKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCByZXR1cm4gY29ycmVjdCBhdXRob3JpemF0aW9uIGhlYWRlcnMgZ2l2ZW4gdG9rZW4nLCAoKSA9PiB7XG4gICAgY29uc3QgZXhwZWN0ZWQgPSBleHBlY3Qub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogZXhwZWN0LmFueShTdHJpbmcpLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBleHBlY3QuYW55KFN0cmluZyksXG4gICAgfSk7XG4gICAgY29uc3QgcGFyYW1zID0geyB0b2tlbjogVEVTVF9UT0tFTiB9O1xuICAgIGNvbnN0IHJlcyA9IGhlbHBlcnMuYXV0aG9yaXphdGlvbkhlYWRlcnMocGFyYW1zKTtcbiAgICBleHBlY3QocmVzKS50b0VxdWFsKGV4cGVjdGVkKTtcbiAgfSk7XG59KTtcblxuXG5kZXNjcmliZSgnYXV0aGVudGljYXRlJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIHJldHVybiBjb3JyZWN0IGF1dGhvcml6YXRpb24gb2JqZWN0IGdpdmVuIHVzZXJuYW1lL3Bhc3N3b3JkIGFuZCBjb25maWcgb2JqZWN0JywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHVzZXJuYW1lOiAndXNlcm5hbWUnLFxuICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdG9rZW5pZDogJ3Rlc3QtdG9rZW4nLFxuICAgICAgICB0b2tlbjoge1xuICAgICAgICAgIHNoYTE6IFRFU1RfVE9LRU4sIGlkOiAnJywgbmFtZTogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgZXhwZWN0ZWQgPSBleHBlY3Qub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICBjb25maWc6IGV4cGVjdC5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgaGVhZGVyczogZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoe1xuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogZXhwZWN0LnN0cmluZ01hdGNoaW5nKC90b2tlblxccy8pLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0pLFxuICAgICAgICB0b2tlbjoge1xuICAgICAgICAgIHNoYTE6IFRFU1RfVE9LRU4sIGlkOiAnJywgbmFtZTogJycsXG4gICAgICAgIH0sXG4gICAgICAgIHRva2VuaWQ6IHBhcmFtcy5jb25maWcudG9rZW5pZCxcbiAgICAgIH0pLFxuICAgICAgdXNlcjogZXhwZWN0Lm9iamVjdENvbnRhaW5pbmcoeyBpZDogZXhwZWN0LmFueShTdHJpbmcpIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhlbHBlcnMuYXV0aGVudGljYXRlKHBhcmFtcyk7XG4gICAgZXhwZWN0KHJlcykudG9FcXVhbChleHBlY3RlZCk7XG4gIH0pO1xufSk7Il19