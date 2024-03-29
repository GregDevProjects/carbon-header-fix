/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { settings } from 'carbon-components';
import { Close16, CheckmarkFilled16 } from '@carbon/icons-react';
import { mount, shallow } from 'enzyme';
import FileUploader, { FileUploaderButton, Filename } from './FileUploader';
import FileUploaderDropContainer from './FileUploaderDropContainer';
import FileUploaderItem from './FileUploaderItem';
import FileUploaderSkeleton from '../FileUploader/FileUploader.Skeleton';
import Loading from '../Loading';
var prefix = settings.prefix;
describe('Filename', function () {
  describe('renders as expected', function () {
    var icons = [Loading, Close16, CheckmarkFilled16];
    var statuses = ['uploading', 'edit', 'complete'];
    statuses.forEach(function (status, i) {
      var wrapper = mount(React.createElement(Filename, {
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
      wrapper = mount(React.createElement(Filename, mockProps));
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
      var mountWrapper = mount(React.createElement(Filename, {
        iconDescription: "Upload complete",
        status: "complete"
      }));
      var onClick = jest.fn();
      mountWrapper.setProps({
        onClick: onClick,
        status: 'edit'
      });
      mountWrapper.find(Close16).simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});
describe('FileUploaderItem', function () {
  var mountWrapper = mount(React.createElement(FileUploaderItem, {
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
      mountWrapper.find(Close16).simulate('click');
      expect(onDelete).toBeCalled();
    });
  });
});
describe('FileUploaderButton', function () {
  var button = React.createElement(FileUploaderButton, {
    className: "extra-class"
  });
  var mountWrapper = mount(button);
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
      var wrapper = shallow(button);
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
      var mountedButtons = mount(React.createElement("div", null, React.createElement(FileUploaderButton, {
        className: "extra-class"
      }), React.createElement(FileUploaderButton, {
        className: "extra-class"
      })));
      var firstButton = mountedButtons.find(FileUploaderButton).at(0);
      var lastButton = mountedButtons.find(FileUploaderButton).at(1);
      var isEqual = firstButton === lastButton;
      expect(isEqual).toBe(false);
    });
  });
  describe('Update labelText', function () {
    it('should have equal state and props', function () {
      expect(shallow(React.createElement(FileUploaderButton, {
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
  var fileUploader = React.createElement(FileUploader, {
    className: "extra-class"
  });
  var mountWrapper = mount(fileUploader);
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
      var mountUploadedWrapper = mount(fileUploader);
      mountUploadedWrapper.setState({
        filenames: ['examplefile.jpg'],
        filenameStatus: 'complete'
      }); // Test to make sure that the Filename is rendered

      expect(mountUploadedWrapper.find(Filename)).toHaveLength(1); // Test to make sure it was properly removed

      mountUploadedWrapper.instance().clearFiles();
      expect(mountUploadedWrapper.update().find(Filename)).toHaveLength(0);
    });
  });
  describe('Update filenameStatus', function () {
    it('should have equal state and props', function () {
      expect(shallow(React.createElement(FileUploader, {
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
  var dropContainer = React.createElement(FileUploaderDropContainer, {
    className: "extra-class"
  });
  var mountWrapper = mount(dropContainer);
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
      var wrapper = shallow(dropContainer);
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
      var mountedDropContainers = mount(React.createElement("div", null, React.createElement(FileUploaderDropContainer, {
        className: "extra-class"
      }), React.createElement(FileUploaderDropContainer, {
        className: "extra-class"
      })));
      var firstDropContainer = mountedDropContainers.find(FileUploaderDropContainer).at(0);
      var lastDropContainer = mountedDropContainers.find(FileUploaderDropContainer).at(1);
      var isEqual = firstDropContainer === lastDropContainer;
      expect(isEqual).toBe(false);
    });
  });
});
describe('FileUploaderSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(FileUploaderSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--form-item"))).toEqual(true);
    });
  });
});