"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
var useStyles = function (theme) {
    var _a, _b, _c;
    return ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: (_a = {
                flexGrow: 1,
                display: 'none'
            },
            _a[theme.breakpoints.up('sm')] = {
                display: 'block',
            },
            _a),
        search: (_b = {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: (0, styles_1.fade)(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: (0, styles_1.fade)(theme.palette.common.white, 0.25),
                },
                marginLeft: 0,
                width: '100%'
            },
            _b[theme.breakpoints.up('sm')] = {
                width: 'auto',
            },
            _b),
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9e9e9e',
            zIndex: 1
        },
        inputRoot: {
            // color: 'inherit',
            width: '100%'
        },
        inputInput: (_c = {
                padding: theme.spacing(1, 4, 1, 6),
                transition: theme.transitions.create('width'),
                width: '100%',
                border: '1px solid #a3a3a3',
                borderRadius: '4px'
            },
            _c[theme.breakpoints.up('sm')] = {
                width: '100%',
                '&:focus': {
                    width: '100%',
                },
            },
            _c.height = '22px',
            _c),
        clearIcon: {
            marginLeft: '-27px',
            position: 'absolute',
            marginTop: '8px',
            fontSize: '21px',
            color: '#757575'
        },
        input: {
            background: "#ffffff",
            borderRadius: '4px'
        }
    });
};
exports.useStyles = useStyles;
