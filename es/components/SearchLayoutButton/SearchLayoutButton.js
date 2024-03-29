function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { ListBulleted16, Grid16 } from '@carbon/icons-react';
var prefix = settings.prefix;
/**
 * The layout button for `<Search>`.
 */

var SearchLayoutButton =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchLayoutButton, _Component);

  function SearchLayoutButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchLayoutButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchLayoutButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      format: 'list'
    });

    _defineProperty(_assertThisInitialized(_this), "toggleLayout", function () {
      var format = _this.state.format === 'list' ? 'grid' : 'list';

      _this.setState({
        format: format
      }, function () {
        var onChangeFormat = _this.props.onChangeFormat;

        if (typeof onChangeFormat === 'function') {
          onChangeFormat({
            format: format
          });
        }
      });
    });

    return _this;
  }

  _createClass(SearchLayoutButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          labelText = _this$props.labelText,
          iconDescriptionList = _this$props.iconDescriptionList,
          iconDescriptionGrid = _this$props.iconDescriptionGrid;

      var SearchLayoutButtonIcon = function SearchLayoutButtonIcon() {
        if (_this2.state.format === 'list') {
          return React.createElement(ListBulleted16, {
            className: "".concat(prefix, "--search-view"),
            "aria-label": iconDescriptionList
          });
        }

        return React.createElement(Grid16, {
          className: "".concat(prefix, "--search-view"),
          "aria-label": iconDescriptionGrid
        });
      };

      return React.createElement("button", {
        className: "".concat(prefix, "--search-button"),
        type: "button",
        onClick: this.toggleLayout,
        "aria-label": labelText,
        title: labelText
      }, React.createElement("div", {
        className: "".concat(prefix, "--search__toggle-layout__container")
      }, React.createElement(SearchLayoutButtonIcon, null)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var format = _ref.format;
      var prevFormat = state.prevFormat;
      return prevFormat === format ? null : {
        format: format || 'list',
        prevFormat: format
      };
    }
    /**
     * Toggles the button state upon user-initiated event.
     */

  }]);

  return SearchLayoutButton;
}(Component);

_defineProperty(SearchLayoutButton, "propTypes", {
  /**
   * The layout.
   */
  format: PropTypes.oneOf(['list', 'grid']),

  /**
   * The a11y label text.
   */
  labelText: PropTypes.string,

  /**
   * The description for the "list" icon.
   */
  iconDescriptionList: PropTypes.string,

  /**
   * The description for the "grid" icon.
   */
  iconDescriptionGrid: PropTypes.string,

  /**
   * The callback called when layout switches.
   */
  onChangeFormat: PropTypes.func
});

_defineProperty(SearchLayoutButton, "defaultProps", {
  labelText: 'Filter',
  iconDescriptionList: 'list',
  iconDescriptionGrid: 'grid'
});

export default SearchLayoutButton;