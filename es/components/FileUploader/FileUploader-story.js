function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, number, select, text } from '@storybook/addon-knobs';
import { settings } from 'carbon-components';
import FileUploader, { FileUploaderButton } from '../FileUploader';
import FileUploaderSkeleton from '../FileUploader/FileUploader.Skeleton';
import Button from '../Button';
import FileUploaderItem from './FileUploaderItem';
import FileUploaderDropContainer from './FileUploaderDropContainer';
var prefix = settings.prefix;
var buttonKinds = {
  'Primary (primary)': 'primary',
  'Secondary (secondary)': 'secondary',
  'Danger (danger)': 'danger',
  'Ghost (ghost)': 'ghost',
  'Danger Primary (danger--primary)': 'danger--primary',
  'Tertiary (tertiary)': 'tertiary'
};
var filenameStatuses = {
  'Edit (edit)': 'edit',
  'Complete (complete)': 'complete',
  'Uploading (uploading)': 'uploading'
};
var props = {
  fileUploaderButton: function fileUploaderButton() {
    var buttonKind = select('Button kind (buttonKind)', buttonKinds, '');
    return {
      className: 'bob',
      labelText: text('Label text (labelText)', 'Add files'),
      name: text('Form item name: (name)', ''),
      multiple: boolean('Supports multiple files (multiple)', true),
      disabled: boolean('Disabled (disabled)', false),
      buttonKind: buttonKind || 'primary',
      disableLabelChanges: boolean('Prevent the label from being replaced with file selected file (disableLabelChanges)', false),
      role: text('ARIA role of the button (role)', 'button'),
      tabIndex: number('Tab index (tabIndex)', 0),
      onChange: action('onChange')
    };
  },
  fileUploader: function fileUploader() {
    return {
      labelTitle: text('The label title (labelTitle)', 'Upload'),
      labelDescription: text('The label description (labelDescription)', 'only .jpg files at 500mb or less'),
      buttonLabel: text('The button label (buttonLabel)', 'Add files'),
      filenameStatus: select('Status for file name (filenameStatus)', filenameStatuses, 'edit'),
      accept: array('Accepted file extensions (accept)', ['.jpg', '.png'], ','),
      name: text('Form item name: (name)', ''),
      multiple: boolean('Supports multiple files (multiple)', true),
      iconDescription: text('Close button icon description (iconDescription)', 'Clear file')
    };
  },
  fileUploaderItem: function fileUploaderItem() {
    return {
      name: text('Filename (name)', 'README.md'),
      status: select('Status for file name (status)', filenameStatuses, 'edit'),
      iconDescription: text('Close button icon description (iconDescription)', 'Clear file'),
      onDelete: action('onDelete'),
      invalid: boolean('Invalid (invalid)', false),
      errorSubject: text('Error subject (errorSubject)', 'File size exceeds limit'),
      errorBody: text('Error body (errorBody)', '500kb max file size. Select a new file and try again.')
    };
  },
  fileUploaderDropContainer: function fileUploaderDropContainer() {
    return {
      labelText: text('Label text (labelText)', 'Drag and drop files here or click to upload'),
      name: text('Form item name (name)', ''),
      multiple: boolean('Supports multiple files (multiple)', true),
      accept: array('Accepted MIME types or file extensions (accept)', ['image/jpeg', 'image/png'], ','),
      disabled: boolean('Disabled (disabled)', false),
      role: text('ARIA role of the button (role)', ''),
      tabIndex: number('Tab index (tabIndex)', 0),
      onChange: action('onChange')
    };
  }
};
storiesOf('FileUploader', module).addDecorator(withKnobs).add('FileUploaderButton', function () {
  return React.createElement(FileUploaderButton, props.fileUploaderButton());
}, {
  info: {
    text: "\n            The FileUploaderButton can be used as a standalone component if you do not need the extra UI that comes with FileUploader. The FileUploaderButton is used in FileUploader.\n          "
  }
}).add('FileUploader', function () {
  var fileUploader;
  return React.createElement("div", {
    className: "".concat(prefix, "--file__container")
  }, React.createElement(FileUploader, _extends({}, props.fileUploader(), {
    ref: function ref(node) {
      return fileUploader = node;
    }
  })), React.createElement(Button, {
    kind: "secondary",
    small: true,
    style: {
      marginTop: '1rem'
    },
    onClick: function onClick() {
      fileUploader.clearFiles();
    }
  }, "Clear File"));
}, {
  info: {
    text: "\n            The FileUploader components allow the user to upload any necessary files. This uses the FileUploaderButton and Filename components. Filename components will appear below the FileUploaderButton when files are added. Use the filenameStatus prop to control what icon appears in Filename ('edit', 'complete', or 'uploading').\n          "
  }
}).add('FileUploaderItem', function () {
  return React.createElement(FileUploaderItem, props.fileUploaderItem());
}, {
  info: {
    text: "\n          <FileUploaderItem /> represents an item that has been uploaded to the file uploader component. Use the `status` prop to control which icon appears ('edit', 'complete', or 'uploading').\n        "
  }
}).add('FileUploaderDropContainer', function () {
  return React.createElement(FileUploaderDropContainer, props.fileUploaderDropContainer());
}, {
  info: {
    text: '<FileUploaderDropContainer /> is a drag and drop file uploader which allows users to upload files via both the normal file selection dialog and by dragging and dropping files.'
  }
}).add('Drag and drop upload container example application', function () {
  return require('./stories/drop-container').default(props.fileUploaderDropContainer());
}, {
  info: {
    text: 'Example application with drag and drop file uploader'
  }
}).add('skeleton', function () {
  return React.createElement("div", {
    style: {
      width: '500px'
    }
  }, React.createElement(FileUploaderSkeleton, null));
}, {
  info: {
    text: "\n    Placeholder skeleton state to use when content is loading.\n    "
  }
});