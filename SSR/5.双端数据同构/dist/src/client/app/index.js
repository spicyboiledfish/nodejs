"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("../../router/index"));

_reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_index.default, null)), document.getElementById('root'));