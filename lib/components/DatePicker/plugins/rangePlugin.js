"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rangePlugin = _interopRequireDefault(require("flatpickr/dist/plugins/rangePlugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {object} config Plugin configuration.
 * @returns {Plugin} An extension of Flatpickr `rangePlugin` that does the following:
 *   * Better ensures the calendar dropdown is always aligned to the `<input>` for the starting date.
 *     Workaround for: https://github.com/flatpickr/flatpickr/issues/1944
 */
var _default = function _default(config) {
  var factory = (0, _rangePlugin.default)(Object.assign({
    position: 'left'
  }, config));
  return function (fp) {
    return Object.assign(factory(fp), {
      onPreCalendarPosition: function onPreCalendarPosition() {}
    });
  };
};

exports.default = _default;