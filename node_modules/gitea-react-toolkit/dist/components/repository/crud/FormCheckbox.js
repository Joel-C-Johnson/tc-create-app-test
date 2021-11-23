"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormCheckbox(_ref) {
  var name = _ref.name,
      label = _ref.label,
      checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, {
    label: label,
    control: /*#__PURE__*/_react.default.createElement(_core.Checkbox, {
      color: "primary",
      value: "private",
      defaultChecked: checked,
      disabled: disabled,
      name: name,
      id: name + Math.random(),
      onChange: onChange
    })
  });
}

FormCheckbox.propTypes = {
  /** The name/id of the field, must be unique. */
  name: _propTypes.default.string.isRequired,

  /** The label of the field. */
  label: _propTypes.default.string.isRequired,

  /** Prepopulate the default value. */
  checked: _propTypes.default.bool,

  /** The function to propogate changes. */
  onChange: _propTypes.default.func,

  /** Set if this field should be required. */
  required: _propTypes.default.bool,

  /** Set if this field should be disabled. */
  disabled: _propTypes.default.bool
};
var _default = FormCheckbox;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlcG9zaXRvcnkvY3J1ZC9Gb3JtQ2hlY2tib3guanMiXSwibmFtZXMiOlsiRm9ybUNoZWNrYm94IiwibmFtZSIsImxhYmVsIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJNYXRoIiwicmFuZG9tIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwicmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUtBLFNBQVNBLFlBQVQsT0FNRztBQUFBLE1BTERDLElBS0MsUUFMREEsSUFLQztBQUFBLE1BSkRDLEtBSUMsUUFKREEsS0FJQztBQUFBLE1BSERDLE9BR0MsUUFIREEsT0FHQztBQUFBLE1BRkRDLFFBRUMsUUFGREEsUUFFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQztBQUNELHNCQUNFLDZCQUFDLHNCQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVILEtBRFQ7QUFFRSxJQUFBLE9BQU8sZUFDTCw2QkFBQyxjQUFEO0FBQ0UsTUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLE1BQUEsS0FBSyxFQUFDLFNBRlI7QUFHRSxNQUFBLGNBQWMsRUFBRUMsT0FIbEI7QUFJRSxNQUFBLFFBQVEsRUFBRUUsUUFKWjtBQUtFLE1BQUEsSUFBSSxFQUFFSixJQUxSO0FBTUUsTUFBQSxFQUFFLEVBQUVBLElBQUksR0FBR0ssSUFBSSxDQUFDQyxNQUFMLEVBTmI7QUFPRSxNQUFBLFFBQVEsRUFBRUg7QUFQWjtBQUhKLElBREY7QUFnQkQ7O0FBRURKLFlBQVksQ0FBQ1EsU0FBYixHQUF5QjtBQUN2QjtBQUNBUCxFQUFBQSxJQUFJLEVBQUVRLG1CQUFVQyxNQUFWLENBQWlCQyxVQUZBOztBQUd2QjtBQUNBVCxFQUFBQSxLQUFLLEVBQUVPLG1CQUFVQyxNQUFWLENBQWlCQyxVQUpEOztBQUt2QjtBQUNBUixFQUFBQSxPQUFPLEVBQUVNLG1CQUFVRyxJQU5JOztBQU92QjtBQUNBUixFQUFBQSxRQUFRLEVBQUVLLG1CQUFVSSxJQVJHOztBQVN2QjtBQUNBQyxFQUFBQSxRQUFRLEVBQUVMLG1CQUFVRyxJQVZHOztBQVd2QjtBQUNBUCxFQUFBQSxRQUFRLEVBQUVJLG1CQUFVRztBQVpHLENBQXpCO2VBZWVaLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sTGFiZWwsXG4gIENoZWNrYm94LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmZ1bmN0aW9uIEZvcm1DaGVja2JveCh7XG4gIG5hbWUsXG4gIGxhYmVsLFxuICBjaGVja2VkLFxuICBvbkNoYW5nZSxcbiAgZGlzYWJsZWQsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgIGNvbnRyb2w9e1xuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHZhbHVlPVwicHJpdmF0ZVwiXG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgaWQ9e25hbWUgKyBNYXRoLnJhbmRvbSgpfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufVxuXG5Gb3JtQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAvKiogVGhlIG5hbWUvaWQgb2YgdGhlIGZpZWxkLCBtdXN0IGJlIHVuaXF1ZS4gKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKiogVGhlIGxhYmVsIG9mIHRoZSBmaWVsZC4gKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqIFByZXBvcHVsYXRlIHRoZSBkZWZhdWx0IHZhbHVlLiAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIFRoZSBmdW5jdGlvbiB0byBwcm9wb2dhdGUgY2hhbmdlcy4gKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKiogU2V0IGlmIHRoaXMgZmllbGQgc2hvdWxkIGJlIHJlcXVpcmVkLiAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBTZXQgaWYgdGhpcyBmaWVsZCBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1DaGVja2JveDtcbiJdfQ==