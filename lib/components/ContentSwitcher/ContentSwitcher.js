"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _events = require("../../tools/events");

var _keyboard = require("../../internal/keyboard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var ContentSwitcher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContentSwitcher, _React$Component);

  function ContentSwitcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContentSwitcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContentSwitcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_switchRefs", []);

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleItemRef", function (index) {
      return function (ref) {
        _this._switchRefs[index] = ref;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleChildChange", function (data) {
      // the currently selected child index
      var selectedIndex = _this.state.selectedIndex; // the newly selected child index

      var index = data.index;
      var key = data.key;

      if ((0, _keyboard.matches)(data, [_keyboard.keys.ArrowRight, _keyboard.keys.ArrowLeft])) {
        var nextIndex = (0, _keyboard.getNextIndex)(key, selectedIndex, _this.props.children.length);

        _this.setState({
          selectedIndex: nextIndex
        }, function () {
          var switchRef = _this._switchRefs[nextIndex];
          switchRef && switchRef.focus();

          _this.props.onChange(data);
        });
      } else {
        if (selectedIndex !== index) {
          _this.setState({
            selectedIndex: index
          }, function () {
            var switchRef = _this._switchRefs[index];
            switchRef && switchRef.focus();

            _this.props.onChange(data);
          });
        }
      }
    });

    return _this;
  }

  _createClass(ContentSwitcher, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          selectedIndex = _this$props.selectedIndex,
          other = _objectWithoutProperties(_this$props, ["children", "className", "selectedIndex"]);

      var classes = (0, _classnames.default)("".concat(prefix, "--content-switcher"), className);
      return _react.default.createElement("div", _extends({}, other, {
        className: classes
      }), _react.default.Children.map(children, function (child, index) {
        return _react.default.cloneElement(child, {
          index: index,
          onClick: (0, _events.composeEventHandlers)([_this2.handleChildChange, child.props.onClick]),
          onKeyDown: _this2.handleChildChange,
          selected: index === _this2.state.selectedIndex,
          ref: _this2.handleItemRef(index)
        });
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var selectedIndex = _ref.selectedIndex;
      var prevSelectedIndex = state.prevSelectedIndex;
      return prevSelectedIndex === selectedIndex ? null : {
        selectedIndex: selectedIndex,
        prevSelectedIndex: selectedIndex
      };
    }
  }]);

  return ContentSwitcher;
}(_react.default.Component);

exports.default = ContentSwitcher;

_defineProperty(ContentSwitcher, "propTypes", {
  /**
   * Pass in Switch components to be rendered in the ContentSwitcher
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be added to the container node
   */
  className: _propTypes.default.string,

  /**
   * Specify an `onChange` handler that is called whenever the ContentSwitcher
   * changes which item is selected
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Specify a selected index for the initially selected content
   */
  selectedIndex: _propTypes.default.number
});

_defineProperty(ContentSwitcher, "defaultProps", {
  selectedIndex: 0
});