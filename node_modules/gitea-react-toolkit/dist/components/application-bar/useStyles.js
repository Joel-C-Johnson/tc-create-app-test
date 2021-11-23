"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 360;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    hide: {
      display: 'none'
    },
    appBar: {},
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: '10000'
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: _objectSpread(_objectSpread({
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px'
    }, theme.mixins.toolbar), {}, {
      justifyContent: 'flex-end'
    }),
    // RepositoryMenu and UserMenu
    avatar: {
      width: '35px',
      height: '35px'
    },
    modal: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      right: '10%',
      maxHeight: '80%',
      overflow: 'scroll'
    }
  };
});
exports.useStyles = useStyles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWJhci91c2VTdHlsZXMuanMiXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImdyb3ciLCJoaWRlIiwiZGlzcGxheSIsImFwcEJhciIsIm1lbnVCdXR0b24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ6SW5kZXgiLCJkcmF3ZXJQYXBlciIsImRyYXdlckhlYWRlciIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwibWl4aW5zIiwidG9vbGJhciIsImp1c3RpZnlDb250ZW50IiwiYXZhdGFyIiwiaGVpZ2h0IiwibW9kYWwiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsIm1heEhlaWdodCIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRU8sSUFBTUMsU0FBUyxHQUFHLHdCQUFXLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQzVDQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsUUFBUSxFQUFFO0FBRE4sS0FEc0M7QUFJNUNDLElBQUFBLElBQUksRUFBRTtBQUNKRCxNQUFBQSxRQUFRLEVBQUU7QUFETixLQUpzQztBQU81Q0UsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRTtBQURMLEtBUHNDO0FBVTVDQyxJQUFBQSxNQUFNLEVBQUUsRUFWb0M7QUFZNUNDLElBQUFBLFVBQVUsRUFBRTtBQUNWQyxNQUFBQSxVQUFVLEVBQUUsQ0FBQyxFQURIO0FBRVZDLE1BQUFBLFdBQVcsRUFBRTtBQUZILEtBWmdDO0FBZ0I1Q0MsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLEtBQUssRUFBRWIsV0FERDtBQUVOYyxNQUFBQSxVQUFVLEVBQUUsQ0FGTjtBQUdOQyxNQUFBQSxNQUFNLEVBQUU7QUFIRixLQWhCb0M7QUFxQjVDQyxJQUFBQSxXQUFXLEVBQUU7QUFDWEgsTUFBQUEsS0FBSyxFQUFFYjtBQURJLEtBckIrQjtBQXdCNUNpQixJQUFBQSxZQUFZO0FBQ1ZWLE1BQUFBLE9BQU8sRUFBRSxNQURDO0FBRVZXLE1BQUFBLFVBQVUsRUFBRSxRQUZGO0FBR1ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhDLE9BSVBqQixLQUFLLENBQUNrQixNQUFOLENBQWFDLE9BSk47QUFLVkMsTUFBQUEsY0FBYyxFQUFFO0FBTE4sTUF4QmdDO0FBK0I1QztBQUNBQyxJQUFBQSxNQUFNLEVBQUU7QUFDTlYsTUFBQUEsS0FBSyxFQUFFLE1BREQ7QUFFTlcsTUFBQUEsTUFBTSxFQUFFO0FBRkYsS0FoQ29DO0FBb0M1Q0MsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsRUFBRSxVQURMO0FBRUxDLE1BQUFBLEdBQUcsRUFBRSxLQUZBO0FBR0xDLE1BQUFBLElBQUksRUFBRSxLQUhEO0FBSUxDLE1BQUFBLEtBQUssRUFBRSxLQUpGO0FBS0xDLE1BQUFBLFNBQVMsRUFBRSxLQUxOO0FBTUxDLE1BQUFBLFFBQVEsRUFBRTtBQU5MO0FBcENxQyxHQUFMO0FBQUEsQ0FBaEIsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgZHJhd2VyV2lkdGggPSAzNjA7XG5cbmV4cG9ydCBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgZ3Jvdzoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBoaWRlOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9LFxuICBhcHBCYXI6IHtcbiAgfSxcbiAgbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpbkxlZnQ6IC0xMixcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHpJbmRleDogJzEwMDAwJyxcbiAgfSxcbiAgZHJhd2VyUGFwZXI6IHtcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gIH0sXG4gIGRyYXdlckhlYWRlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICB9LFxuICAvLyBSZXBvc2l0b3J5TWVudSBhbmQgVXNlck1lbnVcbiAgYXZhdGFyOiB7XG4gICAgd2lkdGg6ICczNXB4JyxcbiAgICBoZWlnaHQ6ICczNXB4JyxcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcxMCUnLFxuICAgIGxlZnQ6ICcxMCUnLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICBtYXhIZWlnaHQ6ICc4MCUnLFxuICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgfSxcbn0pKTtcbiJdfQ==