"use strict";
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
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var InputBase_1 = __importDefault(require("@mui/material/InputBase"));
var Search_1 = __importDefault(require("@mui/icons-material/Search"));
var Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
var MoreHoriz_1 = __importDefault(require("@mui/icons-material/MoreHoriz"));
var material_2 = require("@mui/material");
var SearchBox = function (props) {
    var defaultValue = props.defaultValue, includeSearchById = props.includeSearchById, onSearch = props.onSearch, onClickAdvancedSearch = props.onClickAdvancedSearch, translationText = props.translationText, other = __rest(props, ["defaultValue", "includeSearchById", "onSearch", "onClickAdvancedSearch", "translationText"]);
    var _a = react_1.default.useState("searchString"), searchType = _a[0], setSearchType = _a[1];
    var _b = react_1.default.useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : ""), value = _b[0], setValue = _b[1];
    var handleKeyDown = function (e) {
        if (e.key === "Enter") {
            onSearch(searchType, value);
        }
    };
    var handleClear = function () {
        setValue("");
        onSearch(searchType, "");
    };
    var handleChangeType = function () {
        setValue("");
        onSearch(searchType, "");
        setSearchType(searchType === "searchString" ? "id" : "searchString");
    };
    return (react_1.default.createElement(material_1.Paper, { sx: {
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "40%",
            maxWidth: "360px",
            marginLeft: 0,
            marginRight: function (theme) { return theme.spacing(2); },
        } },
        react_1.default.createElement(material_1.IconButton, { size: "small", disabled: true },
            react_1.default.createElement(Search_1.default, { fontSize: "small" })),
        react_1.default.createElement(InputBase_1.default, __assign({ sx: { ml: 1, flex: 1 }, placeholder: searchType === "searchString"
                ? translationText === null || translationText === void 0 ? void 0 : translationText.SearchPlaceholder
                : translationText === null || translationText === void 0 ? void 0 : translationText.SearchById, type: searchType === "searchString" ? "text" : "number", inputProps: { "aria-label": "search" }, value: value, onChange: function (e) { return setValue(e.target.value); }, onKeyDown: function (e) { return handleKeyDown(e); } }, other)),
        value && (react_1.default.createElement(material_1.Tooltip, { title: ((translationText === null || translationText === void 0 ? void 0 : translationText.Clear) || "").toString() },
            react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return handleClear(); }, sx: { color: function (theme) { return theme.palette.text.primary; } } },
                react_1.default.createElement(Clear_1.default, { fontSize: "small" })))),
        includeSearchById && (react_1.default.createElement(material_1.Tooltip, { title: searchType === "searchString"
                ? ((translationText === null || translationText === void 0 ? void 0 : translationText.SearchById) || "").toString()
                : ((translationText === null || translationText === void 0 ? void 0 : translationText.SearchByName) || "").toString() },
            react_1.default.createElement(material_2.Button, { size: "small", sx: { minWidth: 30, color: function (theme) { return theme.palette.text.primary; } }, color: "secondary", onClick: function () { return handleChangeType(); } }, searchType === "searchString" ? "ID" : "N"))),
        onClickAdvancedSearch && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(material_2.Divider, { sx: { height: 28, m: 0.5 }, orientation: "vertical" }),
            react_1.default.createElement(material_1.Tooltip, { title: ((translationText === null || translationText === void 0 ? void 0 : translationText.AdvanceSearch) || "").toString() },
                react_1.default.createElement(material_1.IconButton, { size: "small", onClick: function () { return onClickAdvancedSearch(); }, sx: { color: function (theme) { return theme.palette.text.primary; } } },
                    react_1.default.createElement(MoreHoriz_1.default, { fontSize: "small" })))))));
};
exports.default = SearchBox;
