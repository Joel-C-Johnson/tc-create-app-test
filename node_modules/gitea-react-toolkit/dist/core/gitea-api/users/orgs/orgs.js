"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUserOrgs = getCurrentUserOrgs;
exports.isSelectedOrgWritable = isSelectedOrgWritable;

var _path = _interopRequireDefault(require("path"));

var _http = require("../../http");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCurrentUserOrgs(_ref) {
  var config = _ref.config;

  var url = _path.default.join(_http.apiPath, 'user/orgs');

  return (0, _http.get)({
    url: url,
    config: config
  });
}

function isSelectedOrgWritable(_x) {
  return _isSelectedOrgWritable.apply(this, arguments);
}

function _isSelectedOrgWritable() {
  _isSelectedOrgWritable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var org, user, config, teamsUrl, teamsResults, permission, j, isTeamMemberUrl, teamMemberResult, _permission;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            org = _ref2.org, user = _ref2.user, config = _ref2.config;
            teamsUrl = _path.default.join(_http.apiPath, 'orgs/' + org.username + '/teams');
            _context.next = 4;
            return (0, _http.get)({
              url: teamsUrl,
              config: config
            });

          case 4:
            teamsResults = _context.sent;

            if (teamsResults) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", true);

          case 7:
            // https://git.door43.org/api/v1/teams/172/members/cecil.new?access_token=PlaygroundTesting
            // test for membership, looking for something other than "read"
            permission = false;
            j = 0;

          case 9:
            if (!(j < teamsResults.length)) {
              _context.next = 23;
              break;
            }

            isTeamMemberUrl = _path.default.join(_http.apiPath, 'teams/' + teamsResults[j].id + '/members/' + user);
            _context.next = 13;
            return (0, _http.get)({
              url: isTeamMemberUrl,
              config: config
            });

          case 13:
            teamMemberResult = _context.sent;

            if (!(teamMemberResult === null)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("continue", 20);

          case 16:
            _permission = teamsResults[j].permission;

            if (!(_permission !== 'read')) {
              _context.next = 20;
              break;
            }

            permission = true;
            return _context.abrupt("break", 23);

          case 20:
            j++;
            _context.next = 9;
            break;

          case 23:
            return _context.abrupt("return", permission);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _isSelectedOrgWritable.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS91c2Vycy9vcmdzL29yZ3MudHMiXSwibmFtZXMiOlsiZ2V0Q3VycmVudFVzZXJPcmdzIiwiY29uZmlnIiwidXJsIiwicGF0aCIsImpvaW4iLCJhcGlQYXRoIiwiaXNTZWxlY3RlZE9yZ1dyaXRhYmxlIiwib3JnIiwidXNlciIsInRlYW1zVXJsIiwidXNlcm5hbWUiLCJ0ZWFtc1Jlc3VsdHMiLCJwZXJtaXNzaW9uIiwiaiIsImxlbmd0aCIsImlzVGVhbU1lbWJlclVybCIsImlkIiwidGVhbU1lbWJlclJlc3VsdCIsIl9wZXJtaXNzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQWNPLFNBQVNBLGtCQUFULE9BQXdGO0FBQUEsTUFBMURDLE1BQTBELFFBQTFEQSxNQUEwRDs7QUFDN0YsTUFBTUMsR0FBRyxHQUFHQyxjQUFLQyxJQUFMLENBQVVDLGFBQVYsRUFBbUIsV0FBbkIsQ0FBWjs7QUFDQSxTQUFPLGVBQUk7QUFBRUgsSUFBQUEsR0FBRyxFQUFIQSxHQUFGO0FBQU9ELElBQUFBLE1BQU0sRUFBTkE7QUFBUCxHQUFKLENBQVA7QUFDRDs7U0FFcUJLLHFCOzs7OzttRkFBZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDQyxZQUFBQSxHQUF2QyxTQUF1Q0EsR0FBdkMsRUFBNENDLElBQTVDLFNBQTRDQSxJQUE1QyxFQUFrRFAsTUFBbEQsU0FBa0RBLE1BQWxEO0FBRUNRLFlBQUFBLFFBRkQsR0FFWU4sY0FBS0MsSUFBTCxDQUFVQyxhQUFWLEVBQW1CLFVBQVFFLEdBQUcsQ0FBQ0csUUFBWixHQUFxQixRQUF4QyxDQUZaO0FBQUE7QUFBQSxtQkFHb0IsZUFBSTtBQUFFUixjQUFBQSxHQUFHLEVBQUVPLFFBQVA7QUFBaUJSLGNBQUFBLE1BQU0sRUFBTkE7QUFBakIsYUFBSixDQUhwQjs7QUFBQTtBQUdEVSxZQUFBQSxZQUhDOztBQUFBLGdCQUtDQSxZQUxEO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQU1JLElBTko7O0FBQUE7QUFTTDtBQUNBO0FBQ0lDLFlBQUFBLFVBWEMsR0FXWSxLQVhaO0FBWUtDLFlBQUFBLENBWkwsR0FZTyxDQVpQOztBQUFBO0FBQUEsa0JBWVVBLENBQUMsR0FBR0YsWUFBWSxDQUFDRyxNQVozQjtBQUFBO0FBQUE7QUFBQTs7QUFhQ0MsWUFBQUEsZUFiRCxHQWFtQlosY0FBS0MsSUFBTCxDQUFVQyxhQUFWLEVBQW1CLFdBQVNNLFlBQVksQ0FBQ0UsQ0FBRCxDQUFaLENBQWdCRyxFQUF6QixHQUE0QixXQUE1QixHQUF3Q1IsSUFBM0QsQ0FibkI7QUFBQTtBQUFBLG1CQWMwQixlQUFJO0FBQUNOLGNBQUFBLEdBQUcsRUFBRWEsZUFBTjtBQUF1QmQsY0FBQUEsTUFBTSxFQUFOQTtBQUF2QixhQUFKLENBZDFCOztBQUFBO0FBY0NnQixZQUFBQSxnQkFkRDs7QUFBQSxrQkFlRUEsZ0JBQWdCLEtBQUssSUFmdkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFtQkNDLFlBQUFBLFdBbkJELEdBbUJlUCxZQUFZLENBQUNFLENBQUQsQ0FBWixDQUFnQkQsVUFuQi9COztBQUFBLGtCQW9CRU0sV0FBVyxLQUFLLE1BcEJsQjtBQUFBO0FBQUE7QUFBQTs7QUFxQkROLFlBQUFBLFVBQVUsR0FBRyxJQUFiO0FBckJDOztBQUFBO0FBWW1DQyxZQUFBQSxDQUFDLEVBWnBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZDQTBCRUQsVUExQkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgYXBpUGF0aCwgZ2V0IH0gZnJvbSAnLi4vLi4vaHR0cCc7XG5pbXBvcnQgeyBBUElDb25maWcgfSBmcm9tICcuLi8uLi9odHRwL2h0dHAuZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JnYW5pemF0aW9uIHtcbiAgYXZhdGFyX3VybDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBmdWxsX25hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgdmlzaWJpbGl0eTogc3RyaW5nO1xuICB3ZWJzaXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlck9yZ3MoeyBjb25maWcgfTogeyBjb25maWc6IEFQSUNvbmZpZyB9KTogUHJvbWlzZTxPcmdhbml6YXRpb25bXT4ge1xuICBjb25zdCB1cmwgPSBwYXRoLmpvaW4oYXBpUGF0aCwgJ3VzZXIvb3JncycpO1xuICByZXR1cm4gZ2V0KHsgdXJsLCBjb25maWcgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc1NlbGVjdGVkT3JnV3JpdGFibGUoeyBvcmcsIHVzZXIsIGNvbmZpZ306IHsgb3JnOiBPcmdhbml6YXRpb24sIHVzZXI6c3RyaW5nLCBjb25maWc6QVBJQ29uZmlnIH0pOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICBjb25zdCB0ZWFtc1VybCA9IHBhdGguam9pbihhcGlQYXRoLCAnb3Jncy8nK29yZy51c2VybmFtZSsnL3RlYW1zJyk7XG4gIGxldCB0ZWFtc1Jlc3VsdHMgPSBhd2FpdCBnZXQoeyB1cmw6IHRlYW1zVXJsLCBjb25maWcgfSk7XG4gIC8vIGlmIHRoZXJlIGFyZSBubyB0ZWFtcywgdGhlbiBza2lwIG90aGVyIGNoZWNrc1xuICBpZiAoICF0ZWFtc1Jlc3VsdHMgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBodHRwczovL2dpdC5kb29yNDMub3JnL2FwaS92MS90ZWFtcy8xNzIvbWVtYmVycy9jZWNpbC5uZXc/YWNjZXNzX3Rva2VuPVBsYXlncm91bmRUZXN0aW5nXG4gIC8vIHRlc3QgZm9yIG1lbWJlcnNoaXAsIGxvb2tpbmcgZm9yIHNvbWV0aGluZyBvdGhlciB0aGFuIFwicmVhZFwiXG4gIGxldCBwZXJtaXNzaW9uID0gZmFsc2U7XG4gIGZvciAoIGxldCBqPTA7IGogPCB0ZWFtc1Jlc3VsdHMubGVuZ3RoOyBqKysgKSB7XG4gICAgbGV0IGlzVGVhbU1lbWJlclVybCA9IHBhdGguam9pbihhcGlQYXRoLCAndGVhbXMvJyt0ZWFtc1Jlc3VsdHNbal0uaWQrJy9tZW1iZXJzLycrdXNlcik7XG4gICAgbGV0IHRlYW1NZW1iZXJSZXN1bHQgPSBhd2FpdCBnZXQoe3VybDogaXNUZWFtTWVtYmVyVXJsLCBjb25maWd9KTtcbiAgICBpZiAoIHRlYW1NZW1iZXJSZXN1bHQgPT09IG51bGwgKSB7XG4gICAgICAvLyBub3QgYSB0ZWFtIG1lbWJlclxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCBfcGVybWlzc2lvbiA9IHRlYW1zUmVzdWx0c1tqXS5wZXJtaXNzaW9uO1xuICAgIGlmICggX3Blcm1pc3Npb24gIT09ICdyZWFkJyApIHtcbiAgICAgIHBlcm1pc3Npb24gPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBlcm1pc3Npb247XG59Il19