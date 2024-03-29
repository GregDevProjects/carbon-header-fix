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

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { CaretRight24, CaretLeft24 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import Select from '../Select';
import SelectItem from '../SelectItem';
import { equals } from '../../tools/array';
var prefix = settings.prefix;
var instanceId = 0;

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSizeChange", function (evt) {
      var pageSize = Number(evt.target.value);

      _this.setState({
        pageSize: pageSize,
        page: 1
      });

      _this.props.onChange({
        page: 1,
        pageSize: pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageChange", function (evt) {
      _this.setState({
        page: evt.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageInputChange", function (evt) {
      var page = Number(evt.target.value);

      if (page > 0 && page <= Math.max(Math.ceil(_this.props.totalItems / _this.state.pageSize), 1)) {
        _this.setState({
          page: page
        });

        _this.props.onChange({
          page: page,
          pageSize: _this.state.pageSize
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "incrementPage", function () {
      var page = _this.state.page + 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decrementPage", function () {
      var page = _this.state.page - 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectItems", function (total) {
      var counter = 1;
      var itemArr = [];

      while (counter <= total) {
        itemArr.push(React.createElement(SelectItem, {
          key: counter,
          value: counter,
          text: String(counter)
        }));
        counter++;
      }

      return itemArr;
    });

    var _this$props = _this.props,
        pageSizes = _this$props.pageSizes,
        _page = _this$props.page,
        _pageSize = _this$props.pageSize;
    _this.state = {
      page: _page,
      pageSize: _pageSize && pageSizes.includes(_pageSize) ? _pageSize : pageSizes[0],
      prevPageSizes: pageSizes,
      prevPage: _page,
      prevPageSize: _pageSize
    };
    _this.uniqueId = ++instanceId;
    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          backwardText = _this$props2.backwardText,
          className = _this$props2.className,
          forwardText = _this$props2.forwardText,
          id = _this$props2.id,
          itemsPerPageText = _this$props2.itemsPerPageText,
          itemRangeText = _this$props2.itemRangeText,
          pageRangeText = _this$props2.pageRangeText,
          pageSize = _this$props2.pageSize,
          pageSizes = _this$props2.pageSizes,
          itemText = _this$props2.itemText,
          pageText = _this$props2.pageText,
          pageNumberText = _this$props2.pageNumberText,
          pagesUnknown = _this$props2.pagesUnknown,
          isLastPage = _this$props2.isLastPage,
          pageInputDisabled = _this$props2.pageInputDisabled,
          totalItems = _this$props2.totalItems,
          onChange = _this$props2.onChange,
          pageNumber = _this$props2.page,
          other = _objectWithoutProperties(_this$props2, ["backwardText", "className", "forwardText", "id", "itemsPerPageText", "itemRangeText", "pageRangeText", "pageSize", "pageSizes", "itemText", "pageText", "pageNumberText", "pagesUnknown", "isLastPage", "pageInputDisabled", "totalItems", "onChange", "page"]);

      var classNames = classnames("".concat(prefix, "--pagination"), className);
      var inputId = id || this.uniqueId;
      var _this$state = this.state,
          statePage = _this$state.page,
          statePageSize = _this$state.pageSize;
      var totalPages = Math.max(Math.ceil(totalItems / statePageSize), 1);
      var backButtonDisabled = this.props.disabled || statePage === 1;
      var backButtonClasses = classnames("".concat(prefix, "--pagination__button"), "".concat(prefix, "--pagination__button--backward"), _defineProperty({}, "".concat(prefix, "--pagination__button--no-index"), backButtonDisabled));
      var forwardButtonDisabled = this.props.disabled || statePage === totalPages;
      var forwardButtonClasses = classnames("".concat(prefix, "--pagination__button"), "".concat(prefix, "--pagination__button--forward"), _defineProperty({}, "".concat(prefix, "--pagination__button--no-index"), forwardButtonDisabled));
      var selectItems = this.renderSelectItems(totalPages);

      var pageRange = function () {
        if (pageInputDisabled) {
          return null;
        }

        return React.createElement("span", {
          className: "".concat(prefix, "--pagination__text")
        }, pagesUnknown ? pageText(statePage) : pageRangeText(statePage, totalPages));
      }();

      return React.createElement("div", _extends({
        className: classNames
      }, other), React.createElement("div", {
        className: "".concat(prefix, "--pagination__left")
      }, React.createElement("label", {
        id: "".concat(prefix, "-pagination-select-").concat(inputId, "-count-label"),
        className: "".concat(prefix, "--pagination__text"),
        htmlFor: "".concat(prefix, "-pagination-select-").concat(inputId)
      }, itemsPerPageText), React.createElement(Select, {
        id: "".concat(prefix, "-pagination-select-").concat(inputId),
        className: "".concat(prefix, "--select__item-count"),
        labelText: "",
        hideLabel: true,
        noLabel: true,
        inline: true,
        onChange: this.handleSizeChange,
        value: statePageSize
      }, pageSizes.map(function (size) {
        return React.createElement(SelectItem, {
          key: size,
          value: size,
          text: String(size)
        });
      })), React.createElement("span", {
        className: "".concat(prefix, "--pagination__text")
      }, pagesUnknown ? itemText(statePageSize * (statePage - 1) + 1, statePage * statePageSize) : itemRangeText(Math.min(statePageSize * (statePage - 1) + 1, totalItems), Math.min(statePage * statePageSize, totalItems), totalItems))), React.createElement("div", {
        className: "".concat(prefix, "--pagination__right")
      }, pageInputDisabled ? null : React.createElement(Select, {
        id: "".concat(prefix, "-pagination-select-").concat(inputId + 2),
        className: "".concat(prefix, "--select__page-number"),
        labelText: "Page number, of ".concat(totalPages, " pages"),
        inline: true,
        hideLabel: true,
        onChange: this.handlePageInputChange,
        value: statePage
      }, selectItems), pageRange, React.createElement("button", {
        type: "button",
        className: backButtonClasses,
        onClick: this.decrementPage,
        "aria-label": backwardText,
        disabled: backButtonDisabled
      }, React.createElement(CaretLeft24, null)), React.createElement("button", {
        type: "button",
        className: forwardButtonClasses,
        "aria-label": forwardText,
        onClick: this.incrementPage,
        disabled: forwardButtonDisabled || isLastPage
      }, React.createElement(CaretRight24, null))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var pageSizes = _ref.pageSizes,
          page = _ref.page,
          pageSize = _ref.pageSize;
      var prevPageSizes = state.prevPageSizes,
          prevPage = state.prevPage,
          prevPageSize = state.prevPageSize,
          currentPage = state.page,
          currentPageSize = state.pageSize;
      var pageSizesChanged = !equals(pageSizes, prevPageSizes);

      if (pageSizesChanged && !pageSizes.includes(pageSize)) {
        pageSize = pageSizes[0];
      }

      var pageChanged = page !== prevPage;
      var pageSizeChanged = pageSize !== prevPageSize;
      return !pageSizesChanged && !pageChanged && !pageSizeChanged ? null : {
        page: pageSizeChanged && 1 || pageChanged && page || currentPage,
        pageSize: pageSizeChanged ? pageSize : currentPageSize,
        prevPageSizes: pageSizes,
        prevPage: page,
        prevPageSize: pageSize
      };
    }
  }]);

  return Pagination;
}(Component);

_defineProperty(Pagination, "propTypes", {
  /**
   * The description for the backward icon.
   */
  backwardText: PropTypes.string,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The function returning a translatable text showing where the current page is,
   * in a manner of the range of items.
   */
  itemRangeText: PropTypes.func,

  /**
   * The description for the forward icon.
   */
  forwardText: PropTypes.string,

  /**
   * The unique ID of this component instance.
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The translatable text indicating the number of items per page.
   */
  itemsPerPageText: PropTypes.string,

  /**
   * A variant of `itemRangeText`, used if the total number of items is unknown.
   */
  itemText: PropTypes.func,

  /**
   * The callback function called when the current page changes.
   */
  onChange: PropTypes.func,
  pageNumberText: PropTypes.string,

  /**
   * A function returning PII showing where the current page is.
   */
  pageRangeText: PropTypes.func,

  /**
   * The translatable text showing the current page.
   */
  pageText: PropTypes.func,

  /**
   * The choices for `pageSize`.
   */
  pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,

  /**
   * The total number of items.
   */
  totalItems: PropTypes.number,

  /**
   * `true` if the backward/forward buttons should be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The current page.
   */
  page: PropTypes.number,

  /**
   * The number dictating how many items a page contains.
   */
  pageSize: PropTypes.number,

  /**
   * `true` if the total number of items is unknown.
   */
  pagesUnknown: PropTypes.bool,
  // TODO: remove when v9 is deprecated

  /**
   * `true` if the current page should be the last page.
   */
  isLastPage: PropTypes.bool,

  /**
   * `true` if the select box to change the page should be disabled.
   */
  pageInputDisabled: PropTypes.bool
});

_defineProperty(Pagination, "defaultProps", {
  backwardText: 'Previous page',
  itemRangeText: function itemRangeText(min, max, total) {
    return "".concat(min, "\u2013").concat(max, " of ").concat(total, " items");
  },
  forwardText: 'Next page',
  itemsPerPageText: 'Items per page:',
  pageNumberText: 'Page Number',
  pageRangeText: function pageRangeText(current, total) {
    return "of ".concat(total, " pages");
  },
  disabled: false,
  page: 1,
  pagesUnknown: false,
  isLastPage: false,
  pageInputDisabled: false,
  itemText: function itemText(min, max) {
    return "".concat(min, "\u2013").concat(max, " items");
  },
  pageText: function pageText(page) {
    return "page ".concat(page);
  }
});

export { Pagination as default };