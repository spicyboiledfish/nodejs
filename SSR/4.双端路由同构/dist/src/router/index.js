"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/index"
  }, "\u9996\u9875"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/list"
  }, "\u5217\u8868\u9875"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, _config.default.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, _extends({
      key: item.path
    }, item));
  })));
};

var _default = App;
exports.default = _default;