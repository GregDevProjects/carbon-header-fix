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

/* eslint react/no-multi-comp: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import { Close16, WarningFilled16, CheckmarkFilled16 } from '@carbon/icons-react';
import Loading from '../Loading';
import uid from '../../tools/uniqueId';
import { ButtonTypes } from '../../prop-types/types';
var prefix = settings.prefix;
export var FileUploaderButton =
/*#__PURE__*/
function (_Component) {
  _inherits(FileUploaderButton, _Component);

  function FileUploaderButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FileUploaderButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FileUploaderButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      var files = evt.target.files;
      var length = evt.target.files.length;

      if (files && !_this.props.disableLabelChanges) {
        if (length > 1) {
          _this.setState({
            labelText: "".concat(length, " files")
          });
        } else if (length === 1) {
          _this.setState({
            labelText: files[0].name
          });
        }
      }

      _this.props.onChange(evt);
    });

    return _this;
  }

  _createClass(FileUploaderButton, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          disableLabelChanges = _this$props.disableLabelChanges,
          labelText = _this$props.labelText,
          multiple = _this$props.multiple,
          role = _this$props.role,
          tabIndex = _this$props.tabIndex,
          buttonKind = _this$props.buttonKind,
          accept = _this$props.accept,
          name = _this$props.name,
          disabled = _this$props.disabled,
          other = _objectWithoutProperties(_this$props, ["className", "disableLabelChanges", "labelText", "multiple", "role", "tabIndex", "buttonKind", "accept", "name", "disabled"]);

      var classes = classNames("".concat(prefix, "--btn"), "".concat(prefix, "--btn--sm"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--btn--").concat(buttonKind), buttonKind), _defineProperty(_classNames, "".concat(prefix, "--btn--disabled"), disabled), _classNames));
      this.uid = this.props.id || uid();
      return React.createElement(React.Fragment, null, React.createElement("label", _extends({
        tabIndex: disabled ? -1 : tabIndex || 0,
        "aria-disabled": disabled,
        className: classes,
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 13 || evt.which === 32) {
            _this2.input.click();
          }
        },
        htmlFor: this.uid
      }, other), React.createElement("span", {
        role: role
      }, this.state.labelText)), React.createElement("input", {
        className: "".concat(prefix, "--visually-hidden"),
        ref: function ref(input) {
          return _this2.input = input;
        },
        id: this.uid,
        disabled: disabled,
        type: "file",
        tabIndex: "-1",
        multiple: multiple,
        accept: accept,
        name: name,
        onChange: this.handleChange,
        onClick: function onClick(evt) {
          evt.target.value = null;
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var labelText = _ref.labelText;
      var prevLabelText = state.prevLabelText;
      return prevLabelText === labelText ? null : {
        labelText: labelText,
        prevLabelText: labelText
      };
    }
  }]);

  return FileUploaderButton;
}(Component);

_defineProperty(FileUploaderButton, "propTypes", {
  /**
   * Provide a custom className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify whether you want to disable any updates to the FileUploaderButton
   * label
   */
  disableLabelChanges: PropTypes.bool,

  /**
   * Provide a unique id for the underlying <input> node
   */
  id: PropTypes.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * this control
   */
  labelText: PropTypes.node,

  /**
   * Specify whether you want the component to list the files that have been
   * submitted to be uploaded
   */
  listFiles: PropTypes.bool,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: PropTypes.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: PropTypes.string,

  /**
   * Provide an optional `onChange` hook that is called each time the <input>
   * value changes
   */
  onChange: PropTypes.func,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Provide an accessibility role for the <FileUploaderButton>
   */
  role: PropTypes.string,

  /**
   * Provide a custom tabIndex value for the <FileUploaderButton>
   */
  tabIndex: PropTypes.number,

  /**
   * Specify the type of underlying button
   */
  buttonKind: ButtonTypes.buttonKind,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: PropTypes.arrayOf(PropTypes.string),

  /**
   * Specify whether file input is disabled
   */
  disabled: PropTypes.bool
});

_defineProperty(FileUploaderButton, "defaultProps", {
  tabIndex: 0,
  disableLabelChanges: false,
  labelText: 'Add file',
  buttonKind: 'primary',
  multiple: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  accept: [],
  disabled: false,
  role: 'button'
});

export function Filename(_ref2) {
  var iconDescription = _ref2.iconDescription,
      status = _ref2.status,
      invalid = _ref2.invalid,
      other = _objectWithoutProperties(_ref2, ["iconDescription", "status", "invalid"]);

  switch (status) {
    case 'uploading':
      return React.createElement(Loading, {
        description: iconDescription,
        withOverlay: false,
        small: true
      });

    case 'edit':
      return React.createElement(React.Fragment, null, invalid && React.createElement(WarningFilled16, {
        className: "".concat(prefix, "--file-invalid")
      }), React.createElement(Close16, _extends({
        className: "".concat(prefix, "--file-close"),
        "aria-label": iconDescription
      }, other), iconDescription && React.createElement("title", null, iconDescription)));

    case 'complete':
      return React.createElement(CheckmarkFilled16, _extends({
        className: "".concat(prefix, "--file-complete"),
        "aria-label": iconDescription
      }, other), iconDescription && React.createElement("title", null, iconDescription));

    default:
      return null;
  }
}
Filename.propTypes = {
  /**
   * Provide a description of the SVG icon to denote file upload status
   */
  iconDescription: PropTypes.string,

  /**
   * Status of the file upload
   */
  status: PropTypes.oneOf(['edit', 'complete', 'uploading']),

  /**
   * Provide a custom tabIndex value for the <Filename>
   */
  tabIndex: PropTypes.string
};
Filename.defaultProps = {
  iconDescription: 'Uploading file',
  status: 'uploading',
  tabIndex: '0'
};

var FileUploader =
/*#__PURE__*/
function (_Component2) {
  _inherits(FileUploader, _Component2);

  function FileUploader() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, FileUploader);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(FileUploader)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "state", {
      filenames: []
    });

    _defineProperty(_assertThisInitialized(_this3), "nodes", []);

    _defineProperty(_assertThisInitialized(_this3), "handleChange", function (evt) {
      evt.stopPropagation();

      _this3.setState({
        filenames: _this3.state.filenames.concat(Array.prototype.map.call(evt.target.files, function (file) {
          return file.name;
        }))
      });

      _this3.props.onChange(evt);
    });

    _defineProperty(_assertThisInitialized(_this3), "handleClick", function (evt, index) {
      var filteredArray = _this3.state.filenames.filter(function (filename) {
        return filename !== _this3.nodes[index].innerText.trim();
      });

      _this3.setState({
        filenames: filteredArray
      });

      _this3.props.onClick(evt);
    });

    _defineProperty(_assertThisInitialized(_this3), "clearFiles", function () {
      // A clearFiles function that resets filenames and can be referenced using a ref by the parent.
      _this3.setState({
        filenames: []
      });
    });

    return _this3;
  }

  _createClass(FileUploader, [{
    key: "render",
    value: function render() {
      var _classNames2,
          _this4 = this;

      var _this$props2 = this.props,
          iconDescription = _this$props2.iconDescription,
          buttonLabel = _this$props2.buttonLabel,
          buttonKind = _this$props2.buttonKind,
          filenameStatus = _this$props2.filenameStatus,
          labelDescription = _this$props2.labelDescription,
          labelTitle = _this$props2.labelTitle,
          className = _this$props2.className,
          multiple = _this$props2.multiple,
          accept = _this$props2.accept,
          name = _this$props2.name,
          other = _objectWithoutProperties(_this$props2, ["iconDescription", "buttonLabel", "buttonKind", "filenameStatus", "labelDescription", "labelTitle", "className", "multiple", "accept", "name"]);

      var classes = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--form-item"), true), _defineProperty(_classNames2, className, className), _classNames2));
      return React.createElement("div", _extends({
        className: classes
      }, other), React.createElement("strong", {
        className: "".concat(prefix, "--file--label")
      }, labelTitle), React.createElement("p", {
        className: "".concat(prefix, "--label-description")
      }, labelDescription), React.createElement(FileUploaderButton, {
        labelText: buttonLabel,
        multiple: multiple,
        buttonKind: buttonKind,
        onChange: this.handleChange,
        disableLabelChanges: true,
        accept: accept,
        name: name
      }), React.createElement("div", {
        className: "".concat(prefix, "--file-container")
      }, this.state.filenames.length === 0 ? null : this.state.filenames.map(function (name, index) {
        return React.createElement("span", _extends({
          key: index,
          className: "".concat(prefix, "--file__selected-file"),
          ref: function ref(node) {
            return _this4.nodes[index] = node;
          } // eslint-disable-line

        }, other), React.createElement("p", {
          className: "".concat(prefix, "--file-filename")
        }, name), React.createElement("span", {
          className: "".concat(prefix, "--file__state-container")
        }, React.createElement(Filename, {
          iconDescription: iconDescription,
          status: filenameStatus,
          onKeyDown: function onKeyDown(evt) {
            if (evt.which === 13 || evt.which === 32) {
              _this4.handleClick(evt, index);
            }
          },
          onClick: function onClick(evt) {
            if (filenameStatus === 'edit') {
              _this4.handleClick(evt, index);
            }
          }
        })));
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref3, state) {
      var filenameStatus = _ref3.filenameStatus;
      var prevFilenameStatus = state.prevFilenameStatus;
      return prevFilenameStatus === filenameStatus ? null : {
        filenameStatus: filenameStatus,
        prevFilenameStatus: filenameStatus
      };
    }
  }]);

  return FileUploader;
}(Component);

_defineProperty(FileUploader, "propTypes", {
  /**
   * Provide a description for the complete/close icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * the <FileUploaderButton>
   */
  buttonLabel: PropTypes.string,

  /**
   * Specify the type of the <FileUploaderButton>
   */
  buttonKind: ButtonTypes.buttonKind,

  /**
   * Specify the status of the File Upload
   */
  filenameStatus: PropTypes.oneOf(['edit', 'complete', 'uploading']).isRequired,

  /**
   * Specify the description text of this <FileUploader>
   */
  labelDescription: PropTypes.string,

  /**
   * Specify the title text of this <FileUploader>
   */
  labelTitle: PropTypes.string,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: PropTypes.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: PropTypes.string,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Provide a custom className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: PropTypes.arrayOf(PropTypes.string)
});

_defineProperty(FileUploader, "defaultProps", {
  iconDescription: 'Provide icon description',
  filenameStatus: 'uploading',
  buttonLabel: '',
  buttonKind: 'primary',
  multiple: false,
  onClick: function onClick() {},
  accept: []
});

export { FileUploader as default };