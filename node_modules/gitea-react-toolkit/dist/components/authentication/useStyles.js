"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: "".concat(theme.spacing(2), "px ").concat(theme.spacing(3), "px ").concat(theme.spacing(3), "px")
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    footer_container: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    footer_column: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
});
exports.useStyles = useStyles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uL3VzZVN0eWxlcy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwic3BhY2luZyIsImF2YXRhciIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImZvcm0iLCJ3aWR0aCIsIm1hcmdpblRvcCIsInN1Ym1pdCIsIm1hcmdpbkJvdHRvbSIsImZvb3Rlcl9jb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsImZvb3Rlcl9jb2x1bW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFNQSxTQUFTLEdBQUcsd0JBQVcsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDNUNDLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxPQUFPLEVBQUUsTUFETDtBQUVKQyxNQUFBQSxhQUFhLEVBQUUsUUFGWDtBQUdKQyxNQUFBQSxVQUFVLEVBQUUsUUFIUjtBQUlKQyxNQUFBQSxPQUFPLFlBQUtMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FBTCxnQkFBMkJOLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FBM0IsZ0JBQWlETixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBQWpEO0FBSkgsS0FEc0M7QUFPNUNDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxNQUFNLEVBQUVSLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FERjtBQUVORyxNQUFBQSxlQUFlLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQUZqQyxLQVBvQztBQVc1Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLEtBQUssRUFBRSxNQURIO0FBQ1c7QUFDZkMsTUFBQUEsU0FBUyxFQUFFZixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBRlAsS0FYc0M7QUFlNUNVLElBQUFBLE1BQU0sRUFBRTtBQUNORCxNQUFBQSxTQUFTLEVBQUVmLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FETDtBQUVOVyxNQUFBQSxZQUFZLEVBQUVqQixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBRlIsS0Fmb0M7QUFtQjVDWSxJQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQmhCLE1BQUFBLE9BQU8sRUFBRSxNQURPO0FBRWhCaUIsTUFBQUEsY0FBYyxFQUFFO0FBRkEsS0FuQjBCO0FBdUI1Q0MsSUFBQUEsYUFBYSxFQUFFO0FBQ2JsQixNQUFBQSxPQUFPLEVBQUUsTUFESTtBQUViaUIsTUFBQUEsY0FBYyxFQUFFO0FBRkg7QUF2QjZCLEdBQUw7QUFBQSxDQUFoQixDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5leHBvcnQgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDMpfXB4ICR7dGhlbWUuc3BhY2luZygzKX1weGAsXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICB9LFxuICBmb3JtOiB7XG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgZm9vdGVyX2NvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBmb290ZXJfY29sdW1uOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG59KSk7Il19