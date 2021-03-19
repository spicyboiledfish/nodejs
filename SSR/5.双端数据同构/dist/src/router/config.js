"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../client/pages/index"));

var _list = _interopRequireDefault(require("../client/pages/list"));

var pageNotFound = function pageNotFound() {
  return /*#__PURE__*/React.createElement("div", null, "404\u9875\u9762");
};

var routeList = [{
  path: '/',
  component: _index.default,
  exact: true
}, {
  path: '/index',
  component: _index.default,
  exact: true //是否精确匹配

}, {
  path: '/list',
  component: _list.default,
  exact: true
}, {
  path: '*',
  component: pageNotFound,
  exact: true
}];
var _default = routeList;
exports.default = _default;