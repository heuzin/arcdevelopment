import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.25em',
        },
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: '7em',
        },
        [theme.breakpoints.down('xs')]: {
            height: '5.5em',
        },
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
    },
    menu: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        borderRadius: 0,
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1,
        },
    },
    drawerIcon: {
        height: '50px',
        width: '50px',
    },
    drawerIconContaner: {
        marginLeft: 'auto',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    drawer: {
        backgroundColor: theme.palette.primary.main,
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7,
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.secondary.main,
    },
    drawerItemSelected: {
        opacity: 1,
    },
}));
