"use strict";

var _authentication = require("../../authentication");

var _orgs = require("./orgs");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

jest.mock('../../http', function () {
  return {
    get: function get() {
      return Promise.resolve([{
        'avatar_url': 'https://bg.door43.org/avatars/17918',
        'description': '',
        'full_name': '',
        'id': 17918,
        'location': '',
        'username': 'TC-Create-Test-Org',
        'visibility': 'public',
        'website': ''
      }]);
    },
    apiPath: 'api/v1'
  };
});
describe('Organization Lists', function () {
  it('should list organizations with correct config', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var username, password, expected, authHeaders, config, organizations;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = 'test';
            password = 'password';
            expected = [{
              'avatar_url': 'https://bg.door43.org/avatars/17918',
              'description': '',
              'full_name': '',
              'id': 17918,
              'location': '',
              'username': 'TC-Create-Test-Org',
              'visibility': 'public',
              'website': ''
            }];
            authHeaders = (0, _authentication.authorizationHeaders)({
              username: username,
              password: password
            });
            config = {
              server: 'https://bg.door43.org/',
              headers: _objectSpread({}, authHeaders)
            };
            _context.next = 7;
            return (0, _orgs.getCurrentUserOrgs)({
              config: config
            });

          case 7:
            organizations = _context.sent;
            expect(organizations).toMatchObject(expected);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS91c2Vycy9vcmdzL29yZ3Muc3BlYy50cyJdLCJuYW1lcyI6WyJqZXN0IiwibW9jayIsImdldCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYXBpUGF0aCIsImRlc2NyaWJlIiwiaXQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXhwZWN0ZWQiLCJhdXRoSGVhZGVycyIsImNvbmZpZyIsInNlcnZlciIsImhlYWRlcnMiLCJvcmdhbml6YXRpb25zIiwiZXhwZWN0IiwidG9NYXRjaE9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0FBLElBQUksQ0FBQ0MsSUFBTCxDQUFVLFlBQVYsRUFBd0I7QUFBQSxTQUFPO0FBQzdCQyxJQUFBQSxHQUFHLEVBQUU7QUFBQSxhQUFNQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsQ0FBQztBQUMxQixzQkFBYyxxQ0FEWTtBQUUxQix1QkFBZSxFQUZXO0FBRzFCLHFCQUFhLEVBSGE7QUFJMUIsY0FBTSxLQUpvQjtBQUsxQixvQkFBWSxFQUxjO0FBTTFCLG9CQUFZLG9CQU5jO0FBTzFCLHNCQUFjLFFBUFk7QUFRMUIsbUJBQVc7QUFSZSxPQUFELENBQWhCLENBQU47QUFBQSxLQUR3QjtBQVV4QkMsSUFBQUEsT0FBTyxFQUFFO0FBVmUsR0FBUDtBQUFBLENBQXhCO0FBYUFDLFFBQVEsQ0FBQyxvQkFBRCxFQUF1QixZQUFNO0FBQ25DQyxFQUFBQSxFQUFFLENBQUMsK0NBQUQsdUVBQWtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1Q0MsWUFBQUEsUUFENEMsR0FDakMsTUFEaUM7QUFFNUNDLFlBQUFBLFFBRjRDLEdBRWpDLFVBRmlDO0FBRzVDQyxZQUFBQSxRQUg0QyxHQUdqQyxDQUNmO0FBQ0UsNEJBQWMscUNBRGhCO0FBRUUsNkJBQWUsRUFGakI7QUFHRSwyQkFBYSxFQUhmO0FBSUUsb0JBQU0sS0FKUjtBQUtFLDBCQUFZLEVBTGQ7QUFNRSwwQkFBWSxvQkFOZDtBQU9FLDRCQUFjLFFBUGhCO0FBUUUseUJBQVc7QUFSYixhQURlLENBSGlDO0FBZ0I1Q0MsWUFBQUEsV0FoQjRDLEdBZ0I5QiwwQ0FBcUI7QUFBRUgsY0FBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlDLGNBQUFBLFFBQVEsRUFBUkE7QUFBWixhQUFyQixDQWhCOEI7QUFpQjVDRyxZQUFBQSxNQWpCNEMsR0FpQm5DO0FBQUVDLGNBQUFBLE1BQU0sRUFBRSx3QkFBVjtBQUFvQ0MsY0FBQUEsT0FBTyxvQkFBT0gsV0FBUDtBQUEzQyxhQWpCbUM7QUFBQTtBQUFBLG1CQWtCdEIsOEJBQW1CO0FBQUVDLGNBQUFBLE1BQU0sRUFBTkE7QUFBRixhQUFuQixDQWxCc0I7O0FBQUE7QUFrQjVDRyxZQUFBQSxhQWxCNEM7QUFtQmxEQyxZQUFBQSxNQUFNLENBQUNELGFBQUQsQ0FBTixDQUFzQkUsYUFBdEIsQ0FBb0NQLFFBQXBDOztBQW5Ca0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBbEQsR0FBRjtBQXFCRCxDQXRCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJqZXN0XCIgLz5cbmltcG9ydCB7IGF1dGhvcml6YXRpb25IZWFkZXJzIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24nO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXJPcmdzIH0gZnJvbSAnLi9vcmdzJztcbmplc3QubW9jaygnLi4vLi4vaHR0cCcsICgpID0+ICh7XG4gIGdldDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFt7XG4gICAgJ2F2YXRhcl91cmwnOiAnaHR0cHM6Ly9iZy5kb29yNDMub3JnL2F2YXRhcnMvMTc5MTgnLFxuICAgICdkZXNjcmlwdGlvbic6ICcnLFxuICAgICdmdWxsX25hbWUnOiAnJyxcbiAgICAnaWQnOiAxNzkxOCxcbiAgICAnbG9jYXRpb24nOiAnJyxcbiAgICAndXNlcm5hbWUnOiAnVEMtQ3JlYXRlLVRlc3QtT3JnJyxcbiAgICAndmlzaWJpbGl0eSc6ICdwdWJsaWMnLFxuICAgICd3ZWJzaXRlJzogJycsXG4gIH1dKSwgYXBpUGF0aDogJ2FwaS92MScsXG59KSk7XG5cbmRlc2NyaWJlKCdPcmdhbml6YXRpb24gTGlzdHMnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgbGlzdCBvcmdhbml6YXRpb25zIHdpdGggY29ycmVjdCBjb25maWcnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSAndGVzdCc7XG4gICAgY29uc3QgcGFzc3dvcmQgPSAncGFzc3dvcmQnO1xuICAgIGNvbnN0IGV4cGVjdGVkID0gW1xuICAgICAge1xuICAgICAgICAnYXZhdGFyX3VybCc6ICdodHRwczovL2JnLmRvb3I0My5vcmcvYXZhdGFycy8xNzkxOCcsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICcnLFxuICAgICAgICAnZnVsbF9uYW1lJzogJycsXG4gICAgICAgICdpZCc6IDE3OTE4LFxuICAgICAgICAnbG9jYXRpb24nOiAnJyxcbiAgICAgICAgJ3VzZXJuYW1lJzogJ1RDLUNyZWF0ZS1UZXN0LU9yZycsXG4gICAgICAgICd2aXNpYmlsaXR5JzogJ3B1YmxpYycsXG4gICAgICAgICd3ZWJzaXRlJzogJycsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCBhdXRoSGVhZGVycyA9IGF1dGhvcml6YXRpb25IZWFkZXJzKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuICAgIGNvbnN0IGNvbmZpZyA9IHsgc2VydmVyOiAnaHR0cHM6Ly9iZy5kb29yNDMub3JnLycsIGhlYWRlcnM6IHsgLi4uYXV0aEhlYWRlcnMgfSB9O1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvbnMgPSBhd2FpdCBnZXRDdXJyZW50VXNlck9yZ3MoeyBjb25maWcgfSk7XG4gICAgZXhwZWN0KG9yZ2FuaXphdGlvbnMpLnRvTWF0Y2hPYmplY3QoZXhwZWN0ZWQpO1xuICB9KTtcbn0pO1xuIl19