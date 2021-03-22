"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _server = require("react-dom/server");

var _index = _interopRequireDefault(require("../router/index"));

var _config = _interopRequireDefault(require("../router/config"));

var _matchRoute = _interopRequireDefault(require("../router/matchRoute"));

var _reactHelmet = require("react-helmet");

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(ctx, next) {
    var path, matchResult, targetRoute, targetMatch, fetchFunc, fetchResult, context, helmet, html;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            path = ctx.request.path;

            if (!(path.indexOf('.') > -1)) {
              _context.next = 4;
              break;
            }

            ctx.body = null;
            return _context.abrupt("return", next());

          case 4:
            // 根据路由获取目标路由对象
            matchResult = (0, _matchRoute.default)(path, _config.default);
            targetRoute = matchResult.targetRoute, targetMatch = matchResult.targetMatch; // 数据预取

            fetchFunc = targetRoute.component.getInitialProps;
            fetchResult = {};

            if (!fetchFunc) {
              _context.next = 12;
              break;
            }

            _context.next = 11;
            return fetchFunc();

          case 11:
            fetchResult = _context.sent;

          case 12:
            //通过context传递数据
            context = {
              initialData: fetchResult
            };
            helmet = _reactHelmet.Helmet.renderStatic();
            console.log('helmet', helmet.title.toString(), helmet.meta.toString());
            html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_reactRouter.StaticRouter, {
              location: path,
              context: context
            }, /*#__PURE__*/_react.default.createElement(_index.default, {
              routeList: _config.default
            })));
            ctx.body = "<!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        ".concat(helmet.title.toString(), "\n        ").concat(helmet.meta.toString(), "\n        <title>my react ssr</title>\n    </head>\n    <body>\n        <div id=\"root\">").concat(html, "</div>\n        <textarea id=\"ssr\" style=\"display: none;\">").concat(JSON.stringify(fetchResult), "</textarea>\n    </body>\n    </html>\n    <script type=\"text/javascript\"  src=\"index.js\"></script>\n    ");
            _context.next = 19;
            return next();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;