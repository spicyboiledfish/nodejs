"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _matchRoute = _interopRequireDefault(require("../../router/matchRoute"));

var _index = _interopRequireDefault(require("../../router/index"));

var _config = _interopRequireDefault(require("../../router/config"));

var initialData = JSON.parse(document.getElementById('ssr').value);
var route = (0, _matchRoute.default)(document.location.pathname, _config.default);
var targetRoute = route.targetRoute;

if (targetRoute) {
  //设置组件初始化数据
  targetRoute.initialData = initialData;
}

_reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_index.default, {
  routeList: _config.default
})), document.getElementById('root'));