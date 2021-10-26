import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    useMediaQuery,
    useTheme,
    SwipeableDrawer,
    AppBar,
    Toolbar,
    useScrollTrigger,
    Tabs,
    Tab,
    Button,
    Menu,
    MenuItem,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { IElevationScrollProps } from './IHeaderProps';
import { useStyles } from './Header.styles';
import logo from '../../../assets/logo.svg';

function ElevationScroll(props: IElevationScrollProps) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Header: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const handleMenuItemClick = (e: React.MouseEvent<HTMLElement>, i: number) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    };

    const menuOptions = [
        { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
        { name: 'Custom Software Development', link: '/customsoftware', activeIndex: 1, selectedIndex: 1 },
        { name: 'Mobile App Development', link: '/mobileapps', activeIndex: 1, selectedIndex: 2 },
        { name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 3 },
    ];

    const routes = [
        { name: 'Home', link: '/', activeIndex: 0, selectedIndex: 0 },
        {
            name: 'Services',
            link: '/services',
            activeIndex: 1,
            selectedIndex: 1,
            ariaOwns: anchorEl ? 'simple-menu' : undefined,
            ariaPopup: anchorEl ? 'true' : undefined,
            mouseOver: (e: React.MouseEvent<HTMLElement>) => handleClick(e),
        },
        { name: 'The Revolution', link: '/revolution', activeIndex: 2, selectedIndex: 2 },
        { name: 'About Us', link: '/about', activeIndex: 3, selectedIndex: 3 },
        { name: 'Contact Us', link: '/contact', activeIndex: 4, selectedIndex: 4 },
    ];

    React.useEffect(() => {
        [...menuOptions, ...routes].forEach((route) => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex);
                        }
                    }
                    break;
                default:
                    break;
            }
        });
    }, [value, menuOptions, selectedIndex, routes]);

    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                {routes.map((route, index) => (
                    <Tab
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspop={route.ariaPopup}
                        onMouseOver={route.mouseOver}
                    ></Tab>
                ))}
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{ onMouseLeave: handleClose }}
                elevation={0}
            >
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={i}
                        component={Link}
                        to={option.link}
                        classes={{ root: classes.menuItem }}
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                            handleMenuItemClick(e, i);
                            setValue(1);
                            handleClose();
                        }}
                        selected={i === selectedIndex && value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <List disablePadding>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(0);
                        }}
                        divider
                        button
                        component={Link}
                        to="/"
                        selected={value === 0}
                    >
                        <ListItemText
                            className={value === 0 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem}
                            disableTypography
                        >
                            Home
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(1);
                        }}
                        divider
                        button
                        component={Link}
                        to="/services"
                        selected={value === 1}
                    >
                        <ListItemText
                            className={value === 1 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem}
                            disableTypography
                        >
                            Services
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(2);
                        }}
                        divider
                        button
                        component={Link}
                        to="/revolution"
                        selected={value === 2}
                    >
                        <ListItemText
                            className={value === 2 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem}
                            disableTypography
                        >
                            The Revolution
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(3);
                        }}
                        divider
                        button
                        component={Link}
                        to="/about"
                        selected={value === 3}
                    >
                        <ListItemText
                            className={value === 3 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem}
                            disableTypography
                        >
                            About Us
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(4);
                        }}
                        divider
                        button
                        component={Link}
                        to="/contact"
                        selected={value === 4}
                    >
                        <ListItemText
                            className={value === 4 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem}
                            disableTypography
                        >
                            Contact Us
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => setOpenDrawer(false)}
                        divider
                        button
                        component={Link}
                        className={classes.drawerItemEstimate}
                        to="/estimate"
                    >
                        <ListItemText className={classes.drawerItem} disableTypography>
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContaner} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        <Button className={classes.logoContainer} disableRipple component={Link} to="/" onClick={() => setValue(0)}>
                            <img alt={'Company logo'} className={classes.logo} src={logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    );
};

export default Header;
