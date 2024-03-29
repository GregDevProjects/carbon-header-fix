"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleClass;

/**
 * Adds or removes a CSS class to an element.
 * @param {Element} element An element.
 * @param {string} name A CSS class name.
 * @param {boolean} add `true` to add the given CSS class to given the element. Otherwise to remove.
 */
function toggleClass(element, name, add) {
  if (element.classList.contains(name) === !add) {
    element.classList[add ? 'add' : 'remove'](name);
  }
}