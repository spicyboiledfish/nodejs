"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _api = _interopRequireDefault(require("../../api"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var List = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(List, _React$Component);

  var _super = _createSuper(List);

  function List(props) {
    var _this;

    (0, _classCallCheck2.default)(this, List);
    _this.state = {
      list: []
    };
    return (0, _possibleConstructorReturn2.default)(_this);
  }

  (0, _createClass2.default)(List, [{
    key: "render",
    value: function render() {
      var list = this.state.list;
      return /*#__PURE__*/_react.default.createElement("div", null, list.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: index
        }, /*#__PURE__*/_react.default.createElement("span", null, item.title), /*#__PURE__*/_react.default.createElement("span", null, item.desc), /*#__PURE__*/_react.default.createElement("img", {
          src: item.img,
          style: {
            width: '20px',
            height: '20px'
          }
        }));
      }));
    }
  }]);
  return List;
}(_react.default.Component);

(0, _defineProperty2.default)(List, "getInitialProps", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  var fetchapi, res;
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fetchapi = function fetchapi() {
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve({
                  code: 0,
                  data: _api.default
                });
              }, 100);
            });
          };

          _context.next = 3;
          return fetchapi();

        case 3:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var _default = List;
exports.default = _default;