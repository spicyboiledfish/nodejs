"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Index = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Index);
    _this = _super.call(this, props);
    _this.state = {
      page: {
        tdk: {
          title: '首页',
          description: '首屏展示',
          keywords: '首页的关键字'
        }
      }
    };
    return _this;
  }

  (0, _createClass2.default)(Index, [{
    key: "render",
    value: function render() {
      var _this$state$page$tdk = this.state.page.tdk,
          tdk = _this$state$page$tdk === void 0 ? {} : _this$state$page$tdk;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, tdk.title), /*#__PURE__*/_react.default.createElement("meta", {
        name: "description",
        content: tdk.description
      }), /*#__PURE__*/_react.default.createElement("meta", {
        name: "keywords",
        content: tdk.keywords
      })), "\u9996\u9875");
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      return {};
    }
  }]);
  return Index;
}(_react.default.Component);

var _default = Index;
exports.default = _default;