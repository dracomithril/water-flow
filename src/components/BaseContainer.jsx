import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import About from './About';
import Footer from './Footer';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});
const menuOptions = [
  {
    name: 'Calculate',
    icon: (
      <ListItemIcon>
        <EqualizerIcon />
      </ListItemIcon>
    ),
    page: <Typography noWrap>You think water moves fast? You should see ice.</Typography>,
  },
  {
    name: 'About',
    icon: (
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
    ),
    page: <About />,
  },
];

class BaseContainer extends Component {
  state = {
    mobileOpen: false,
    selectedMenu: menuOptions[0].name,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  handleMenuClick = value => {
    this.setState({ selectedMenu: value });
  };

  render() {
    const { classes, theme } = this.props;
    const menuItems = menuOptions.map(elem => (
      <ListItem
        key={elem.name}
        button
        onClick={() => {
          this.handleMenuClick(elem.name);
        }}
      >
        {elem.icon}
        <ListItemText primary={elem.name} />
      </ListItem>
    ));
    const drawer = (
      <React.Fragment>
        <div className={classes.toolbar} />
        <Divider />
        <List>{menuItems}</List>
        <Divider />
        <Footer />
      </React.Fragment>
    );

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Water piping
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {menuOptions.find(elem => elem.name === this.state.selectedMenu).page}
        </main>
      </div>
    );
  }
}

BaseContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
};

export default withStyles(styles, { withTheme: true })(BaseContainer);
