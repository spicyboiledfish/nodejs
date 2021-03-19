"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var App = function App(_ref) {
  var routeList = _ref.routeList;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/index"
  }, "\u9996\u9875"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/list"
  }, "\u5217\u8868\u9875"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, routeList.map(function (item, index) {
    return item.initialData ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      key: item.path,
      exact: item.exact,
      path: item.path,
      render: function render(props) {
        return /*#__PURE__*/_react.default.createElement(item.component, (0, _extends2.default)({}, props, {
          initialData: item.initialData
        }));
      }
    }) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, (0, _extends2.default)({
      key: item.path
    }, item));
  })));
};

var _default = App;
exports.default = _default;