function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import { keys, matches } from '../../internal/keyboard';
import uniqueId from '../../tools/uniqueId';
var prefix = settings.prefix;
export default function FileUploaderDropContainer(props) {
  var _classNames2;

  var inputRef = useRef();

  var accept = props.accept,
      className = props.className,
      id = props.id,
      disabled = props.disabled,
      labelText = props.labelText,
      multiple = props.multiple,
      name = props.name,
      onAddFiles = props.onAddFiles,
      role = props.role,
      tabIndex = props.tabIndex,
      other = _objectWithoutProperties(props, ["accept", "className", "id", "disabled", "labelText", "multiple", "name", "onAddFiles", "role", "tabIndex"]);

  var uid = useRef(uniqueId());

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setActive = _useState2[1];

  var labelClasses = classNames("".concat(prefix, "--file-browse-btn"), _defineProperty({}, "".concat(prefix, "--file-browse-btn--disabled"), disabled));
  var dropareaClasses = classNames("".concat(prefix, "--file__drop-container"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--file__drop-container--drag-over"), isActive), _defineProperty(_classNames2, className, className), _classNames2));
  /**
   * Filters the array of added files based on file type restrictions
   * @param {Event} evt - Event object, used to get the list of files added
   */

  var validateFiles = function validateFiles(evt) {
    if (evt.type === 'drop') {
      var acceptedTypes = new Set(accept);
      return _toConsumableArray(evt.dataTransfer.files).filter(function (_ref) {
        var name = _ref.name,
            _ref$type = _ref.type,
            mimeType = _ref$type === void 0 ? '' : _ref$type;
        var fileExtensionRegExp = new RegExp(/\.[0-9a-z]+$/, 'i');
        var hasFileExtension = fileExtensionRegExp.test(name);

        if (!hasFileExtension) {
          return false;
        }

        var _name$match = name.match(fileExtensionRegExp),
            _name$match2 = _slicedToArray(_name$match, 1),
            fileExtension = _name$match2[0];

        return acceptedTypes.has(mimeType) || acceptedTypes.has(fileExtension);
      });
    }

    return _toConsumableArray(evt.target.files);
  };

  var handleChange = function handleChange(evt) {
    var addedFiles = validateFiles(evt);
    return onAddFiles(evt, {
      addedFiles: addedFiles
    });
  };

  return React.createElement("div", {
    className: "".concat(prefix, "--file"),
    onDragOver: function onDragOver(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      if (disabled) {
        return;
      }

      setActive(true);
      evt.dataTransfer.dropEffect = 'copy';
    },
    onDragLeave: function onDragLeave(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      if (disabled) {
        return;
      }

      setActive(false);
      evt.dataTransfer.dropEffect = 'move';
    },
    onDrop: function onDrop(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      if (disabled) {
        return;
      }

      setActive(false);
      handleChange(evt);
    }
  }, React.createElement("label", _extends({
    className: labelClasses,
    htmlFor: id || uid.current,
    tabIndex: tabIndex || 0,
    onKeyDown: function onKeyDown(evt) {
      if (matches(evt, [keys.Enter, keys.Space])) {
        inputRef.current.click();
      }
    }
  }, other), React.createElement("div", {
    className: dropareaClasses,
    role: role || 'button'
  }, labelText, React.createElement("input", {
    type: "file",
    id: id || uid.current,
    className: "".concat(prefix, "--file-input"),
    ref: inputRef,
    tabIndex: "-1",
    disabled: disabled,
    accept: accept,
    name: name,
    multiple: multiple,
    onChange: handleChange,
    onClick: function onClick(evt) {
      evt.target.value = null;
    }
  }))));
}
FileUploaderDropContainer.propTypes = {
  /**
   * Provide a custom className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Provide a unique id for the underlying <input> node
   */
  id: PropTypes.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * this control
   */
  labelText: PropTypes.string.isRequired,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: PropTypes.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: PropTypes.string,

  /**
   * Provide an accessibility role for the <FileUploaderButton>
   */
  role: PropTypes.string,

  /**
   * Provide a custom tabIndex value for the <FileUploaderButton>
   */
  tabIndex: PropTypes.number,

  /**
   * Specify whether file input is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: PropTypes.arrayOf(PropTypes.string),

  /**
   * Event handler that is called after files are added to the uploader
   * The event handler signature looks like `onAddFiles(evt, { addedFiles })`
   */
  onAddFiles: PropTypes.func
};
FileUploaderDropContainer.defaultProps = {
  tabIndex: 0,
  labelText: 'Add file',
  multiple: false,
  onAddFiles: function onAddFiles() {},
  accept: []
};