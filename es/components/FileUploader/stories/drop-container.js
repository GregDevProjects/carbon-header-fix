function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useCallback } from 'react';
import { settings } from 'carbon-components';
import FileUploaderItem from '../FileUploaderItem';
import FileUploaderDropContainer from '../FileUploaderDropContainer';
import FormItem from '../../FormItem';
import uid from '../../../tools/uniqueId';
var prefix = settings.prefix;

function ExampleDropContainerApp(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var uploadFile =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(fileToUpload) {
      var updatedFile, rand;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(fileToUpload.size > 512000)) {
                _context.next = 4;
                break;
              }

              updatedFile = _objectSpread({}, fileToUpload, {
                status: 'edit',
                iconDescription: 'Delete file',
                invalid: true,
                errorSubject: 'File size exceeds limit',
                errorBody: '500kb max file size. Select a new file and try again.'
              });
              setFiles(function (files) {
                return files.map(function (file) {
                  return file.uuid === fileToUpload.uuid ? updatedFile : file;
                });
              });
              return _context.abrupt("return");

            case 4:
              // simulate network request time
              rand = Math.random() * 1000;
              setTimeout(function () {
                var updatedFile = _objectSpread({}, fileToUpload, {
                  status: 'complete',
                  iconDescription: 'Upload complete'
                });

                setFiles(function (files) {
                  return files.map(function (file) {
                    return file.uuid === fileToUpload.uuid ? updatedFile : file;
                  });
                });
              }, rand); // show x icon after 1 second

              setTimeout(function () {
                var updatedFile = _objectSpread({}, fileToUpload, {
                  status: 'edit',
                  iconDescription: 'Delete file'
                });

                setFiles(function (files) {
                  return files.map(function (file) {
                    return file.uuid === fileToUpload.uuid ? updatedFile : file;
                  });
                });
              }, rand + 1000);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function uploadFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onAddFiles = useCallback(function (evt, _ref2) {
    var addedFiles = _ref2.addedFiles;
    evt.stopPropagation();
    var newFiles = addedFiles.map(function (file) {
      return {
        uuid: uid(),
        name: file.name,
        size: file.size,
        status: 'uploading',
        iconDescription: 'Uploading'
      };
    });
    props.multiple ? setFiles([].concat(_toConsumableArray(files), _toConsumableArray(newFiles))) : setFiles([].concat(_toConsumableArray(files), [newFiles[0]]));
    newFiles.forEach(uploadFile);
  }, [files, props.multiple]);
  var handleFileUploaderItemClick = useCallback(function (evt, _ref3) {
    var clickedUuid = _ref3.uuid;
    return setFiles(files.filter(function (_ref4) {
      var uuid = _ref4.uuid;
      return clickedUuid !== uuid;
    }));
  }, [files]);
  return React.createElement(FormItem, null, React.createElement("strong", {
    className: "".concat(prefix, "--file--label")
  }, "Account photo"), React.createElement("p", {
    className: "".concat(prefix, "--label-description")
  }, "Only .jpg and .png files. 500kb max file size"), React.createElement(FileUploaderDropContainer, _extends({}, props, {
    onAddFiles: onAddFiles
  })), React.createElement("div", {
    className: "uploaded-files",
    style: {
      width: '100%'
    }
  }, files.map(function (_ref5) {
    var uuid = _ref5.uuid,
        name = _ref5.name,
        size = _ref5.size,
        status = _ref5.status,
        iconDescription = _ref5.iconDescription,
        invalid = _ref5.invalid,
        rest = _objectWithoutProperties(_ref5, ["uuid", "name", "size", "status", "iconDescription", "invalid"]);

    return React.createElement(FileUploaderItem, _extends({
      key: uid(),
      uuid: uuid,
      name: name,
      size: size,
      status: status,
      iconDescription: iconDescription,
      invalid: invalid,
      onDelete: handleFileUploaderItemClick
    }, rest));
  })));
}

export default (function (props) {
  return React.createElement(ExampleDropContainerApp, props);
});