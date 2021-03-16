"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _server = require("react-dom/server");

var _index = _interopRequireDefault(require("../router/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(ctx, next) {
  console.log('ctx.request.path', ctx.request.path);
  var path = ctx.request.path;
  var html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_reactRouter.StaticRouter, {
    location: path
  }, /*#__PURE__*/_react.default.createElement(_index.default, null)));
  ctx.body = "<!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>my react ssr</title>\n    </head>\n    <body>\n        <div id=\"root\">".concat(html, "</div>\n    </body>\n    </html>\n    <script type=\"text/javascript\"  src=\"index.js\"></script>\n    ");
  return next();
};

exports.default = _default;