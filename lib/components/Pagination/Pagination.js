"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _iconsReact = require("@carbon/icons-react");

var _carbonComponents = require("carbon-components");

var _Select = _interopRequireDefault(require("../Select"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

var _array = require("../../tools/array");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
        itemArr.push(_react.default.createElement(_SelectItem.default, {
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

      var classNames = (0, _classnames3.default)("".concat(prefix, "--pagination"), className);
      var inputId = id || this.uniqueId;
      var _this$state = this.state,
          statePage = _this$state.page,
          statePageSize = _this$state.pageSize;
      var totalPages = Math.max(Math.ceil(totalItems / statePageSize), 1);
      var backButtonDisabled = this.props.disabled || statePage === 1;
      var backButtonClasses = (0, _classnames3.default)("".concat(prefix, "--pagination__button"), "".concat(prefix, "--pagination__button--backward"), _defineProperty({}, "".concat(prefix, "--pagination__button--no-index"), backButtonDisabled));
      var forwardButtonDisabled = this.props.disabled || statePage === totalPages;
      var forwardButtonClasses = (0, _classnames3.default)("".concat(prefix, "--pagination__button"), "".concat(prefix, "--pagination__button--forward"), _defineProperty({}, "".concat(prefix, "--pagination__button--no-index"), forwardButtonDisabled));
      var selectItems = this.renderSelectItems(totalPages);

      var pageRange = function () {
        if (pageInputDisabled) {
          return null;
        }

        return _react.default.createElement("span", {
          className: "".concat(prefix, "--pagination__text")
        }, pagesUnknown ? pageText(statePage) : pageRangeText(statePage, totalPages));
      }();

      return _react.default.createElement("div", _extends({
        className: classNames
      }, other), _react.default.createElement("div", {
        className: "".concat(prefix, "--pagination__left")
      }, _react.default.createElement("label", {
        id: "".concat(prefix, "-pagination-select-").concat(inputId, "-count-label"),
        className: "".concat(prefix, "--pagination__text"),
        htmlFor: "".concat(prefix, "-pagination-select-").concat(inputId)
      }, itemsPerPageText), _react.default.createElement(_Select.default, {
        id: "".concat(prefix, "-pagination-select-").concat(inputId),
        className: "".concat(prefix, "--select__item-count"),
        labelText: "",
        hideLabel: true,
        noLabel: true,
        inline: true,
        onChange: this.handleSizeChange,
        value: statePageSize
      }, pageSizes.map(function (size) {
        return _react.default.createElement(_SelectItem.default, {
          key: size,
          value: size,
          text: String(size)
        });
      })), _react.default.createElement("span", {
        className: "".concat(prefix, "--pagination__text")
      }, pagesUnknown ? itemText(statePageSize * (statePage - 1) + 1, statePage * statePageSize) : itemRangeText(Math.min(statePageSize * (statePage - 1) + 1, totalItems), Math.min(statePage * statePageSize, totalItems), totalItems))), _react.default.createElement("div", {
        className: "".concat(prefix, "--pagination__right")
      }, pageInputDisabled ? null : _react.default.createElement(_Select.default, {
        id: "".concat(prefix, "-pagination-select-").concat(inputId + 2),
        className: "".concat(prefix, "--select__page-number"),
        labelText: "Page number, of ".concat(totalPages, " pages"),
        inline: true,
        hideLabel: true,
        onChange: this.handlePageInputChange,
        value: statePage
      }, selectItems), pageRange, _react.default.createElement("button", {
        type: "button",
        className: backButtonClasses,
        onClick: this.decrementPage,
        "aria-label": backwardText,
        disabled: backButtonDisabled
      }, _react.default.createElement(_iconsReact.CaretLeft24, null)), _react.default.createElement("button", {
        type: "button",
        className: forwardButtonClasses,
        "aria-label": forwardText,
        onClick: this.incrementPage,
        disabled: forwardButtonDisabled || isLastPage
      }, _react.default.createElement(_iconsReact.CaretRight24, null))));
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
      var pageSizesChanged = !(0, _array.equals)(pageSizes, prevPageSizes);

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
}(_react.Component);

exports.default = Pagination;

_defineProperty(Pagination, "propTypes", {
  /**
   * The description for the backward icon.
   */
  backwardText: _propTypes.default.string,

  /**
   * The CSS class names.
   */
  className: _propTypes.default.string,

  /**
   * The function returning a translatable text showing where the current page is,
   * in a manner of the range of items.
   */
  itemRangeText: _propTypes.default.func,

  /**
   * The description for the forward icon.
   */
  forwardText: _propTypes.default.string,

  /**
   * The unique ID of this component instance.
   */
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The translatable text indicating the number of items per page.
   */
  itemsPerPageText: _propTypes.default.string,

  /**
   * A variant of `itemRangeText`, used if the total number of items is unknown.
   */
  itemText: _propTypes.default.func,

  /**
   * The callback function called when the current page changes.
   */
  onChange: _propTypes.default.func,
  pageNumberText: _propTypes.default.string,

  /**
   * A function returning PII showing where the current page is.
   */
  pageRangeText: _propTypes.default.func,

  /**
   * The translatable text showing the current page.
   */
  pageText: _propTypes.default.func,

  /**
   * The choices for `pageSize`.
   */
  pageSizes: _propTypes.default.arrayOf(_propTypes.default.number).isRequired,

  /**
   * The total number of items.
   */
  totalItems: _propTypes.default.number,

  /**
   * `true` if the backward/forward buttons should be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The current page.
   */
  page: _propTypes.default.number,

  /**
   * The number dictating how many items a page contains.
   */
  pageSize: _propTypes.default.number,

  /**
   * `true` if the total number of items is unknown.
   */
  pagesUnknown: _propTypes.default.bool,
  // TODO: remove when v9 is deprecated

  /**
   * `true` if the current page should be the last page.
   */
  isLastPage: _propTypes.default.bool,

  /**
   * `true` if the select box to change the page should be disabled.
   */
  pageInputDisabled: _propTypes.default.bool
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