"use strict";

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

var _iconsReact = require("@carbon/icons-react");

var _enzyme = require("enzyme");

var _FileUploader = _interopRequireWildcard(require("./FileUploader"));

var _FileUploaderDropContainer = _interopRequireDefault(require("./FileUploaderDropContainer"));

var _FileUploaderItem = _interopRequireDefault(require("./FileUploaderItem"));

var _FileUploader2 = _interopRequireDefault(require("../FileUploader/FileUploader.Skeleton"));

var _Loading = _interopRequireDefault(require("../Loading"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;
describe('Filename', function () {
  describe('renders as expected', function () {
    var icons = [_Loading.default, _iconsReact.Close16, _iconsReact.CheckmarkFilled16];
    var statuses = ['uploading', 'edit', 'complete'];
    statuses.forEach(function (status, i) {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_FileUploader.Filename, {
        iconDescription: "Upload complete",
        status: status
      }));
      it('renders upload status icon as expected', function () {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(icons[i]).length).toBe(1);
      });
    });
  });
  describe('Check that functions passed in as props are called', function () {
    var wrapper;
    var mockProps;
    beforeEach(function () {
      mockProps = {
        onClick: jest.fn(),
        onKeyDown: jest.fn(),
        status: 'complete'
      };
      wrapper = (0, _enzyme.mount)(_react.default.createElement(_FileUploader.Filename, mockProps));
    });
    it('should call onClick', function () {
      wrapper.simulate('click');
      expect(mockProps.onClick).toBeCalled();
    });
    it('should call onKeyDown', function () {
      wrapper.simulate('keydown');
      expect(mockProps.onKeyDown).toBeCalled();
    });
  });
  describe('click on edit icon (close--solid)', function () {
    it('should have a click event', function () {
      var mountWrapper = (0, _enzyme.mount)(_react.default.createElement(_FileUploader.Filename, {
        iconDescription: "Upload complete",
        status: "complete"
      }));
      var onClick = jest.fn();
      mountWrapper.setProps({
        onClick: onClick,
        status: 'edit'
      });
      mountWrapper.find(_iconsReact.Close16).simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});
describe('FileUploaderItem', function () {
  var mountWrapper = (0, _enzyme.mount)(_react.default.createElement(_FileUploaderItem.default, {
    file: {
      name: 'jd.jpg',
      status: 'edit'
    }
  }));
  describe('click on edit icon (close--solid)', function () {
    it('should have a click event', function () {
      var onDelete = jest.fn();
      mountWrapper.setProps({
        onDelete: onDelete,
        status: 'edit'
      });
      mountWrapper.find(_iconsReact.Close16).simulate('click');
      expect(onDelete).toBeCalled();
    });
  });
});
describe('FileUploaderButton', function () {
  var button = _react.default.createElement(_FileUploader.FileUploaderButton, {
    className: "extra-class"
  });

  var mountWrapper = (0, _enzyme.mount)(button);
  describe('Renders as expected with default props', function () {
    it('renders with expected className', function () {
      expect(mountWrapper.find('label').hasClass("".concat(prefix, "--btn"))).toBe(true);
    });
    it('renders with given className', function () {
      expect(mountWrapper.hasClass('extra-class')).toBe(true);
    });
    it('renders with default labelText prop', function () {
      expect(mountWrapper.props().labelText).toEqual('Add file');
    });
    it('renders with default buttonKind prop', function () {
      expect(mountWrapper.props().buttonKind).toEqual('primary');
    });
    it('renders with expected button className', function () {
      expect(mountWrapper.find(".".concat(prefix, "--btn--primary")).exists()).toBe(true);
    });
    it('renders with default multiple prop', function () {
      expect(mountWrapper.props().multiple).toEqual(false);
    });
    it('renders with default disableLabelChanges prop', function () {
      expect(mountWrapper.props().disableLabelChanges).toEqual(false);
    });
    it('renders with default accept prop', function () {
      expect(mountWrapper.props().accept).toEqual([]);
    });
    it('renders with default disabled prop', function () {
      expect(mountWrapper.props().disabled).toBe(false);
    });
    it('disables file upload input', function () {
      var wrapper = (0, _enzyme.shallow)(button);
      wrapper.setProps({
        disabled: true
      });
      expect(wrapper.find('input').prop('disabled')).toEqual(true);
    });
    it('does have default role', function () {
      expect(mountWrapper.props().role).toBeTruthy();
    });
    it('resets the input value onClick', function () {
      var input = mountWrapper.find(".".concat(prefix, "--visually-hidden"));
      input.instance().value = '';
      var evt = {
        target: {
          value: input.instance().value
        }
      };
      input.simulate('click', evt);
      expect(evt.target.value).toEqual(null);
    });
  });
  describe('Unique id props', function () {
    it('each FileUploaderButton should have a unique ID', function () {
      var mountedButtons = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_FileUploader.FileUploaderButton, {
        className: "extra-class"
      }), _react.default.createElement(_FileUploader.FileUploaderButton, {
        className: "extra-class"
      })));
      var firstButton = mountedButtons.find(_FileUploader.FileUploaderButton).at(0);
      var lastButton = mountedButtons.find(_FileUploader.FileUploaderButton).at(1);
      var isEqual = firstButton === lastButton;
      expect(isEqual).toBe(false);
    });
  });
  describe('Update labelText', function () {
    it('should have equal state and props', function () {
      expect((0, _enzyme.shallow)(_react.default.createElement(_FileUploader.FileUploaderButton, {
        labelText: "foo"
      })).state().labelText).toEqual('foo');
    });
    it('should change the label text upon change in props', function () {
      mountWrapper.setProps({
        labelText: 'foo'
      });
      mountWrapper.setState({
        labelText: 'foo'
      });
      mountWrapper.setProps({
        labelText: 'bar'
      });
      expect(mountWrapper.state().labelText).toEqual('bar');
    });
    it('should avoid change the label text upon setting props, unless there the value actually changes', function () {
      mountWrapper.setProps({
        labelText: 'foo'
      });
      mountWrapper.setState({
        labelText: 'bar'
      });
      mountWrapper.setProps({
        labelText: 'foo'
      });
      expect(mountWrapper.state().labelText).toEqual('bar');
    });
  });
});
describe('FileUploader', function () {
  var fileUploader = _react.default.createElement(_FileUploader.default, {
    className: "extra-class"
  });

  var mountWrapper = (0, _enzyme.mount)(fileUploader);
  describe('Renders as expected with defaults', function () {
    it('should render with default className', function () {
      expect(mountWrapper.children().hasClass("".concat(prefix, "--form-item"))).toEqual(true);
    });
    it('should render with given className', function () {
      expect(mountWrapper.hasClass('extra-class')).toEqual(true);
    });
    it('renders with FileUploaderButton with disableLabelChanges set to true', function () {
      expect(mountWrapper.find('FileUploaderButton').props().disableLabelChanges).toEqual(true);
    });
    it('renders input with hidden prop', function () {
      expect(mountWrapper.find('input').props().className).toEqual("".concat(prefix, "--visually-hidden"));
    });
    it("renders with empty div.".concat(prefix, "--file-container by default"), function () {
      expect(mountWrapper.find("div.".concat(prefix, "--file-container")).text()).toEqual('');
    });
    it('clears all uploaded files when the clearFiles method is called', function () {
      var mountUploadedWrapper = (0, _enzyme.mount)(fileUploader);
      mountUploadedWrapper.setState({
        filenames: ['examplefile.jpg'],
        filenameStatus: 'complete'
      }); // Test to make sure that the Filename is rendered

      expect(mountUploadedWrapper.find(_FileUploader.Filename)).toHaveLength(1); // Test to make sure it was properly removed

      mountUploadedWrapper.instance().clearFiles();
      expect(mountUploadedWrapper.update().find(_FileUploader.Filename)).toHaveLength(0);
    });
  });
  describe('Update filenameStatus', function () {
    it('should have equal state and props', function () {
      expect((0, _enzyme.shallow)(_react.default.createElement(_FileUploader.default, {
        filenameStatus: "uploading"
      })).state().filenameStatus).toEqual('uploading');
    });
    it('should change the label text upon change in props', function () {
      mountWrapper.setProps({
        filenameStatus: 'uploading'
      });
      mountWrapper.setState({
        filenameStatus: 'uploading'
      });
      mountWrapper.setProps({
        filenameStatus: 'edit'
      });
      expect(mountWrapper.state().filenameStatus).toEqual('edit');
    });
    it('should avoid change the label text upon setting props, unless there the value actually changes', function () {
      mountWrapper.setProps({
        filenameStatus: 'uploading'
      });
      mountWrapper.setState({
        filenameStatus: 'edit'
      });
      mountWrapper.setProps({
        filenameStatus: 'uploading'
      });
      expect(mountWrapper.state().filenameStatus).toEqual('edit');
    });
  });
});
describe('FileUploaderDropContainer', function () {
  var dropContainer = _react.default.createElement(_FileUploaderDropContainer.default, {
    className: "extra-class"
  });

  var mountWrapper = (0, _enzyme.mount)(dropContainer);
  describe('Renders as expected with default props', function () {
    it('renders with given className', function () {
      expect(mountWrapper.hasClass('extra-class')).toBe(true);
    });
    it('renders with default labelText prop', function () {
      expect(mountWrapper.props().labelText).toEqual('Add file');
    });
    it('renders with default multiple prop', function () {
      expect(mountWrapper.props().multiple).toEqual(false);
    });
    it('renders with default accept prop', function () {
      expect(mountWrapper.props().accept).toEqual([]);
    });
    it('disables file upload input', function () {
      var wrapper = (0, _enzyme.shallow)(dropContainer);
      wrapper.setProps({
        disabled: true
      });
      expect(wrapper.find('input').prop('disabled')).toEqual(true);
    });
    it('does not have default role', function () {
      expect(mountWrapper.props().role).not.toBeTruthy();
    });
    it('resets the input value onClick', function () {
      var input = mountWrapper.find(".".concat(prefix, "--file-input"));
      input.instance().value = '';
      var evt = {
        target: {
          value: input.instance().value
        }
      };
      input.simulate('click', evt);
      expect(evt.target.value).toEqual(null);
    });
  });
  describe('Unique id props', function () {
    it('each FileUploaderDropContainer should have a unique ID', function () {
      var mountedDropContainers = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_FileUploaderDropContainer.default, {
        className: "extra-class"
      }), _react.default.createElement(_FileUploaderDropContainer.default, {
        className: "extra-class"
      })));
      var firstDropContainer = mountedDropContainers.find(_FileUploaderDropContainer.default).at(0);
      var lastDropContainer = mountedDropContainers.find(_FileUploaderDropContainer.default).at(1);
      var isEqual = firstDropContainer === lastDropContainer;
      expect(isEqual).toBe(false);
    });
  });
});
describe('FileUploaderSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_FileUploader2.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--form-item"))).toEqual(true);
    });
  });
});