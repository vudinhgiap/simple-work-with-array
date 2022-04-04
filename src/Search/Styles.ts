import { fade } from '@material-ui/core/styles';
export const useStyles: any = (theme:any) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
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
    inputInput: {
        padding: theme.spacing(1, 4, 1, 6),
        transition: theme.transitions.create('width'),
        width: '100%',
        border: '1px solid #a3a3a3',
        borderRadius: '4px',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
        height: '22px'
    },
    clearIcon: {
        marginLeft: '-27px',
        position: 'absolute',
        marginTop: '8px',
        fontSize: '21px',
        color: '#757575'
    },
    input: {
        background: `#ffffff`,
        borderRadius: '4px'
    }
})