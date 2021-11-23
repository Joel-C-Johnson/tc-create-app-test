"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _objectSpread(_objectSpread({}, require.requireActual('../core')), {}, {
  get: function get(_ref) {
    var config = _ref.config;
    return config.headers ? Promise.resolve([{
      name: 'user-token',
      id: 'test-id',
      sha1: 'encrypted123456789'
    }]) : Promise.reject();
  },
  post: function post(_ref2) {
    var url = _ref2.url;
    return !url.match(/fail/ig) ? Promise.resolve([{
      name: 'user-token',
      id: 'test-id',
      sha1: 'encrypted123456789'
    }]) : Promise.reject();
  },
  del: function del(_ref3) {
    var url = _ref3.url;
    return !url.match(/fail/ig) ? Promise.resolve() : Promise.reject();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2dpdGVhLWFwaS9fX21vY2tzX18vY29yZS50cyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsInJlcXVpcmVBY3R1YWwiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuYW1lIiwiaWQiLCJzaGExIiwicmVqZWN0IiwicG9zdCIsInVybCIsIm1hdGNoIiwiZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAsbUNBQ0tDLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQixTQUF0QixDQURMO0FBRUVDLEVBQUFBLEdBQUcsRUFBRTtBQUFBLFFBQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFdBQWdCQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixDQUFDO0FBQ3JEQyxNQUFBQSxJQUFJLEVBQUUsWUFEK0M7QUFFckRDLE1BQUFBLEVBQUUsRUFBRSxTQUZpRDtBQUdyREMsTUFBQUEsSUFBSSxFQUFFO0FBSCtDLEtBQUQsQ0FBaEIsQ0FBakIsR0FJZkosT0FBTyxDQUFDSyxNQUFSLEVBSkQ7QUFBQSxHQUZQO0FBT0VDLEVBQUFBLElBQUksRUFBRTtBQUFBLFFBQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFdBQWEsQ0FBQ0EsR0FBRyxDQUFDQyxLQUFKLENBQVUsUUFBVixDQUFELEdBQXVCUixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsQ0FBQztBQUN6REMsTUFBQUEsSUFBSSxFQUFFLFlBRG1EO0FBRXpEQyxNQUFBQSxFQUFFLEVBQUUsU0FGcUQ7QUFHekRDLE1BQUFBLElBQUksRUFBRTtBQUhtRCxLQUFELENBQWhCLENBQXZCLEdBSWJKLE9BQU8sQ0FBQ0ssTUFBUixFQUpBO0FBQUEsR0FQUjtBQVlFSSxFQUFBQSxHQUFHLEVBQUU7QUFBQSxRQUFHRixHQUFILFNBQUdBLEdBQUg7QUFBQSxXQUFhLENBQUNBLEdBQUcsQ0FBQ0MsS0FBSixDQUFVLFFBQVYsQ0FBRCxHQUF1QlIsT0FBTyxDQUFDQyxPQUFSLEVBQXZCLEdBQTJDRCxPQUFPLENBQUNLLE1BQVIsRUFBeEQ7QUFBQTtBQVpQIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIC4uLnJlcXVpcmUucmVxdWlyZUFjdHVhbCgnLi4vY29yZScpLFxuICBnZXQ6ICh7IGNvbmZpZyB9KSA9PiBjb25maWcuaGVhZGVycyA/IFByb21pc2UucmVzb2x2ZShbe1xuICAgIG5hbWU6ICd1c2VyLXRva2VuJyxcbiAgICBpZDogJ3Rlc3QtaWQnLFxuICAgIHNoYTE6ICdlbmNyeXB0ZWQxMjM0NTY3ODknLFxuICB9XSkgOiBQcm9taXNlLnJlamVjdCgpLFxuICBwb3N0OiAoeyB1cmwgfSkgPT4gIXVybC5tYXRjaCgvZmFpbC9pZykgPyBQcm9taXNlLnJlc29sdmUoW3tcbiAgICBuYW1lOiAndXNlci10b2tlbicsXG4gICAgaWQ6ICd0ZXN0LWlkJyxcbiAgICBzaGExOiAnZW5jcnlwdGVkMTIzNDU2Nzg5JyxcbiAgfV0pIDogUHJvbWlzZS5yZWplY3QoKSxcbiAgZGVsOiAoeyB1cmwgfSkgPT4gIXVybC5tYXRjaCgvZmFpbC9pZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVqZWN0KCksXG59Il19