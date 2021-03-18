"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../client/pages/index"));

var _list = _interopRequireDefault(require("../client/pages/list"));

var routeList = [{
  path: '/index',
  component: _index.default,
  exact: true //是否精确匹配

}, {
  path: '/list',
  component: _list.default,
  exact: true
}];
var _default = routeList;
exports.default = _default;