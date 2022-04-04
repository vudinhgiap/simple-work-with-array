"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Styles_1 = require("./Styles");
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var InputBase_1 = __importDefault(require("@material-ui/core/InputBase"));
var Clear_1 = __importDefault(require("@material-ui/icons/Clear"));
var prop_types_1 = __importDefault(require("prop-types"));
var EnhancedSearch = /** @class */ (function (_super) {
    __extends(EnhancedSearch, _super);
    function EnhancedSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangeSearch = function (event) {
            _this.setState({
                keyword: event.target.value,
                isShowIconClear: true,
            }, function () {
                _this.props.handleValueChange(_this.state.keyword);
            });
        };
        _this.handleClearText = function (event) {
            var keyword = "";
            _this.props.handleClearSearch();
            _this.setState({
                keyword: keyword,
                isShowIconClear: false,
            }, function () {
                _this.props.handleValueChange(_this.state.keyword);
            });
        };
        _this.handleKeyDown = function (e) {
            if (e.key === "Enter") {
                _this.props.handleSearch(_this.state.keyword);
            }
        };
        _this.state = {
            keyword: "",
            isShowIconClear: false,
        };
        return _this;
    }
    EnhancedSearch.prototype.reset = function () {
        this.setState({
            keyword: "",
            isShowIconClear: false,
        });
    };
    EnhancedSearch.prototype.render = function () {
        var _a = this.props, classes = _a.classes, placeholder = _a.placeholder, handleSearch = _a.handleSearch, handleClearSearch = _a.handleClearSearch, handleValueChange = _a.handleValueChange, other = __rest(_a, ["classes", "placeholder", "handleSearch", "handleClearSearch", "handleValueChange"]);
        var _b = this.state, keyword = _b.keyword, isShowIconClear = _b.isShowIconClear;
        return (react_1.default.createElement("div", __assign({ className: classes.search }, other),
            react_1.default.createElement("div", { className: classes.searchIcon },
                react_1.default.createElement(Search_1.default, null)),
            react_1.default.createElement(InputBase_1.default, { placeholder: placeholder, classes: {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }, className: classes.input, inputProps: { "aria-label": "search" }, value: keyword, onChange: this.handleChangeSearch, onKeyDown: this.handleKeyDown }),
            isShowIconClear === true ? (react_1.default.createElement(Clear_1.default, { className: classes.clearIcon, onClick: this.handleClearText })) : ("")));
    };
    EnhancedSearch.propTypes = {
        handleClearSearch: prop_types_1.default.func,
        handleSearch: prop_types_1.default.func,
        handleValueChange: prop_types_1.default.func,
        placeholder: prop_types_1.default.string,
    };
    EnhancedSearch.defaultProps = {
        handleClearSearch: function () { },
        handleSearch: function () { },
        handleValueChange: function () { },
        placeholder: "",
    };
    return EnhancedSearch;
}(react_1.Component));
exports.default = (0, styles_1.withStyles)(Styles_1.useStyles)(EnhancedSearch);
