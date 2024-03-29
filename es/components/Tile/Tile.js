function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
import classNames from 'classnames';
import { settings } from 'carbon-components';
import { CheckmarkFilled16 as CheckmarkFilled, ChevronDown16 } from '@carbon/icons-react';
import { keys, matches } from '../../internal/keyboard';
var prefix = settings.prefix;
export var Tile =
/*#__PURE__*/
function (_Component) {
  _inherits(Tile, _Component);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tile).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["children", "className"]);

      var tileClasses = classNames("".concat(prefix, "--tile"), className);
      return React.createElement("div", _extends({
        className: tileClasses
      }, other), children);
    }
  }]);

  return Tile;
}(Component);

_defineProperty(Tile, "propTypes", {
  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The CSS class names.
   */
  className: PropTypes.string
});

export var ClickableTile =
/*#__PURE__*/
function (_Component2) {
  _inherits(ClickableTile, _Component2);

  function ClickableTile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ClickableTile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClickableTile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (evt) {
      evt.persist();

      _this.setState({
        clicked: !_this.state.clicked
      }, function () {
        _this.props.handleClick(evt);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      evt.persist();

      if (matches(evt, [keys.Enter, keys.Space])) {
        _this.setState({
          clicked: !_this.state.clicked
        }, function () {
          _this.props.handleKeyDown(evt);
        });
      } else {
        _this.props.handleKeyDown(evt);
      }
    });

    return _this;
  }

  _createClass(ClickableTile, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          href = _this$props2.href,
          className = _this$props2.className,
          handleClick = _this$props2.handleClick,
          handleKeyDown = _this$props2.handleKeyDown,
          clicked = _this$props2.clicked,
          other = _objectWithoutProperties(_this$props2, ["children", "href", "className", "handleClick", "handleKeyDown", "clicked"]);

      var classes = classNames("".concat(prefix, "--link"), "".concat(prefix, "--tile"), "".concat(prefix, "--tile--clickable"), _defineProperty({}, "".concat(prefix, "--tile--is-clicked"), this.state.clicked), className);
      return React.createElement("a", _extends({
        href: href,
        className: classes
      }, other, {
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown
      }), children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var clicked = _ref.clicked;
      var prevClicked = state.prevClicked;
      return prevClicked === clicked ? null : {
        clicked: clicked,
        prevClicked: clicked
      };
    }
  }]);

  return ClickableTile;
}(Component);

_defineProperty(ClickableTile, "propTypes", {
  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The href for the link.
   */
  href: PropTypes.string,

  /**
   * The rel property for the link.
   */
  rel: PropTypes.string
});

_defineProperty(ClickableTile, "defaultProps", {
  clicked: false,
  handleClick: function handleClick() {},
  handleKeyDown: function handleKeyDown() {}
});

export var SelectableTile =
/*#__PURE__*/
function (_Component3) {
  _inherits(SelectableTile, _Component3);

  function SelectableTile() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, SelectableTile);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(SelectableTile)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      selected: _this2.props.selected
    });

    _defineProperty(_assertThisInitialized(_this2), "handleClick", function (evt) {
      evt.preventDefault();
      evt.persist();
      var isInput = evt.target === _this2.input;

      if (!isInput) {
        _this2.setState({
          selected: !_this2.state.selected
        }, function () {
          _this2.props.handleClick(evt);
        });
      } else {
        _this2.props.handleClick(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "handleKeyDown", function (evt) {
      evt.persist();

      if (matches(evt, [keys.Enter, keys.Space])) {
        evt.preventDefault();

        _this2.setState({
          selected: !_this2.state.selected
        }, function () {
          _this2.props.handleKeyDown(evt);
        });
      } else {
        _this2.props.handleKeyDown(evt);
      }
    });

    return _this2;
  }

  _createClass(SelectableTile, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          id = _this$props3.id,
          tabIndex = _this$props3.tabIndex,
          value = _this$props3.value,
          name = _this$props3.name,
          title = _this$props3.title,
          iconDescription = _this$props3.iconDescription,
          className = _this$props3.className,
          handleClick = _this$props3.handleClick,
          handleKeyDown = _this$props3.handleKeyDown,
          onChange = _this$props3.onChange,
          other = _objectWithoutProperties(_this$props3, ["children", "id", "tabIndex", "value", "name", "title", "iconDescription", "className", "handleClick", "handleKeyDown", "onChange"]);

      var classes = classNames("".concat(prefix, "--tile"), "".concat(prefix, "--tile--selectable"), _defineProperty({}, "".concat(prefix, "--tile--is-selected"), this.state.selected), className);
      return React.createElement(React.Fragment, null, React.createElement("input", {
        ref: function ref(input) {
          _this3.input = input;
        },
        tabIndex: -1,
        id: id,
        className: "".concat(prefix, "--tile-input"),
        value: value,
        onChange: onChange,
        type: "checkbox",
        name: name,
        title: title,
        checked: this.state.selected
      }), React.createElement("label", _extends({
        htmlFor: id,
        className: classes,
        tabIndex: tabIndex
      }, other, {
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown
      }), React.createElement("div", {
        className: "".concat(prefix, "--tile__checkmark")
      }, React.createElement(CheckmarkFilled, {
        "aria-label": iconDescription
      }, iconDescription && React.createElement("title", null, iconDescription))), React.createElement("div", {
        className: "".concat(prefix, "--tile-content")
      }, children)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var selected = _ref2.selected;
      var prevSelected = state.prevSelected;
      return prevSelected === selected ? null : {
        selected: selected,
        prevSelected: selected
      };
    }
  }]);

  return SelectableTile;
}(Component);

_defineProperty(SelectableTile, "propTypes", {
  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * `true` to select this tile.
   */
  selected: PropTypes.bool,

  /**
   * The ID of the `<input>`.
   */
  id: PropTypes.string,

  /**
   * The value of the `<input>`.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * The `name` of the `<input>`.
   */
  name: PropTypes.string,

  /**
   * The `title` of the `<input>`.
   */
  title: PropTypes.string,

  /**
   * The empty handler of the `<input>`.
   */
  onChange: PropTypes.func,

  /**
   * The description of the checkmark icon.
   */
  iconDescription: PropTypes.string,

  /**
   * Specify the tab index of the wrapper element
   */
  tabIndex: PropTypes.number
});

_defineProperty(SelectableTile, "defaultProps", {
  value: 'value',
  title: 'title',
  iconDescription: 'Tile checkmark',
  selected: false,
  handleClick: function handleClick() {},
  handleKeyDown: function handleKeyDown() {},
  onChange: function onChange() {},
  tabIndex: 0
});

export var ExpandableTile =
/*#__PURE__*/
function (_Component4) {
  _inherits(ExpandableTile, _Component4);

  function ExpandableTile() {
    var _getPrototypeOf4;

    var _this4;

    _classCallCheck(this, ExpandableTile);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(ExpandableTile)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this4), "state", {});

    _defineProperty(_assertThisInitialized(_this4), "componentDidMount", function () {
      var getStyle = window.getComputedStyle(_this4.tile, null);

      if (_this4.aboveTheFold) {
        _this4.setState({
          tileMaxHeight: _this4.aboveTheFold.getBoundingClientRect().height,
          tilePadding: parseInt(getStyle.getPropertyValue('padding-top'), 10) + parseInt(getStyle.getPropertyValue('padding-bottom'), 10)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this4), "componentDidUpdate", function (prevProps) {
      if (prevProps.expanded !== _this4.props.expanded) _this4.setMaxHeight();
    });

    _defineProperty(_assertThisInitialized(_this4), "setMaxHeight", function () {
      return _this4.setState({
        tileMaxHeight: _this4.state.expanded ? _this4.tileContent.getBoundingClientRect().height : _this4.aboveTheFold.getBoundingClientRect().height
      });
    });

    _defineProperty(_assertThisInitialized(_this4), "handleClick", function (evt) {
      if (!_this4.props.onBeforeClick(evt)) return;
      evt.persist();

      _this4.setState({
        expanded: !_this4.state.expanded
      }, function () {
        _this4.setMaxHeight();

        _this4.props.handleClick(evt);
      });
    });

    _defineProperty(_assertThisInitialized(_this4), "handleKeyDown", function (evt) {
      if (matches(evt, [keys.Enter, keys.Space])) {
        evt.persist();

        _this4.setState({
          expanded: !_this4.state.expanded
        }, function () {
          _this4.setMaxHeight();

          _this4.props.handleClick(evt);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this4), "getChildren", function () {
      return React.Children.toArray(_this4.props.children);
    });

    return _this4;
  }

  _createClass(ExpandableTile, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props4 = this.props,
          tabIndex = _this$props4.tabIndex,
          className = _this$props4.className,
          tileMaxHeight = _this$props4.tileMaxHeight,
          tilePadding = _this$props4.tilePadding,
          handleClick = _this$props4.handleClick,
          tileCollapsedIconText = _this$props4.tileCollapsedIconText,
          tileExpandedIconText = _this$props4.tileExpandedIconText,
          other = _objectWithoutProperties(_this$props4, ["tabIndex", "className", "tileMaxHeight", "tilePadding", "handleClick", "tileCollapsedIconText", "tileExpandedIconText"]);

      var expanded = this.state.expanded;
      var classes = classNames("".concat(prefix, "--tile"), "".concat(prefix, "--tile--expandable"), _defineProperty({}, "".concat(prefix, "--tile--is-expanded"), expanded), className);
      var tileStyle = {
        maxHeight: expanded ? null : this.state.tileMaxHeight + this.state.tilePadding
      };
      var childrenAsArray = this.getChildren();
      return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        React.createElement("div", _extends({
          ref: function ref(tile) {
            _this5.tile = tile;
          },
          style: tileStyle,
          className: classes
        }, other, {
          onClick: this.handleClick,
          onKeyPress: this.handleKeyDown,
          tabIndex: tabIndex
        }), React.createElement("div", {
          ref: function ref(tileContent) {
            _this5.tileContent = tileContent;
          }
        }, React.createElement("div", {
          ref: function ref(aboveTheFold) {
            _this5.aboveTheFold = aboveTheFold;
          },
          className: "".concat(prefix, "--tile-content")
        }, childrenAsArray[0]), React.createElement("button", {
          "aria-expanded": expanded,
          "aria-label": expanded ? tileExpandedIconText : tileCollapsedIconText,
          className: "".concat(prefix, "--tile__chevron")
        }, React.createElement(ChevronDown16, null)), React.createElement("div", {
          className: "".concat(prefix, "--tile-content")
        }, childrenAsArray[1])))
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref3, state) {
      var expanded = _ref3.expanded,
          tileMaxHeight = _ref3.tileMaxHeight,
          tilePadding = _ref3.tilePadding;
      var prevExpanded = state.prevExpanded,
          prevTileMaxHeight = state.prevTileMaxHeight,
          prevTilePadding = state.prevTilePadding,
          currentExpanded = state.expanded,
          currentTileMaxHeight = state.tileMaxHeight,
          currentTilePadding = state.tilePadding;
      var expandedChanged = prevExpanded !== expanded;
      var tileMaxHeightChanged = prevTileMaxHeight !== tileMaxHeight;
      var tilePaddingChanged = prevTilePadding !== tilePadding;
      return !expandedChanged && !tileMaxHeightChanged && !tilePaddingChanged ? null : {
        expanded: !expandedChanged ? currentExpanded : expanded,
        tileMaxHeight: !tileMaxHeightChanged ? currentTileMaxHeight : tileMaxHeight,
        tilePadding: !tilePaddingChanged ? currentTilePadding : tilePadding,
        prevExpanded: expanded,
        prevTileMaxHeight: tileMaxHeight,
        prevTilePadding: tilePadding
      };
    }
  }]);

  return ExpandableTile;
}(Component);

_defineProperty(ExpandableTile, "propTypes", {
  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * `true` if the tile is expanded.
   */
  expanded: PropTypes.bool,

  /**
   * optional handler to decide whether to ignore a click. returns false if click should be ignored
   */
  onBeforeClick: PropTypes.func,

  /**
   * The `tabindex` attribute.
   */
  tabIndex: PropTypes.number,

  /**
   * The description of the "collapsed" icon that can be read by screen readers.
   */
  tileCollapsedIconText: PropTypes.string,

  /**
   * The description of the "expanded" icon that can be read by screen readers.
   */
  tileExpandedIconText: PropTypes.string,

  /**
   * An ID that can be provided to aria-labelledby
   */
  id: PropTypes.string
});

_defineProperty(ExpandableTile, "defaultProps", {
  tabIndex: 0,
  expanded: false,
  tileMaxHeight: '0',
  onBeforeClick: function onBeforeClick() {
    return true;
  },
  handleClick: function handleClick() {},
  tileCollapsedIconText: 'Interact to expand Tile',
  tileExpandedIconText: 'Interact to collapse Tile'
});

export var TileAboveTheFoldContent =
/*#__PURE__*/
function (_Component5) {
  _inherits(TileAboveTheFoldContent, _Component5);

  function TileAboveTheFoldContent() {
    _classCallCheck(this, TileAboveTheFoldContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TileAboveTheFoldContent).apply(this, arguments));
  }

  _createClass(TileAboveTheFoldContent, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement("span", {
        className: "".concat(prefix, "--tile-content__above-the-fold")
      }, children);
    }
  }]);

  return TileAboveTheFoldContent;
}(Component);

_defineProperty(TileAboveTheFoldContent, "propTypes", {
  /**
   * The child nodes.
   */
  children: PropTypes.node
});

export var TileBelowTheFoldContent =
/*#__PURE__*/
function (_Component6) {
  _inherits(TileBelowTheFoldContent, _Component6);

  function TileBelowTheFoldContent() {
    _classCallCheck(this, TileBelowTheFoldContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TileBelowTheFoldContent).apply(this, arguments));
  }

  _createClass(TileBelowTheFoldContent, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement("span", {
        className: "".concat(prefix, "--tile-content__below-the-fold")
      }, children);
    }
  }]);

  return TileBelowTheFoldContent;
}(Component);

_defineProperty(TileBelowTheFoldContent, "propTypes", {
  /**
   * The child nodes.
   */
  children: PropTypes.node
});