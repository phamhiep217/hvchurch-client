import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Route, Switch, NavLink } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import routes from '../routes';

const routeView = () => {
  let buffer = [];
  routes.forEach((prop, key) => {
    if (prop.layout === '/home') {
      if (prop.collapse) {
        prop.childs.forEach((propChild, keyA) => {
          buffer.push(
            <Route
              path={prop.layout + propChild.path}
              component={propChild.component}
              key={'A' + keyA}
            />
          );
        });
        return;
      }
      buffer.push(
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    }
  });

  return buffer;
};
const switchRoutes = <Switch>{routeView()}</Switch>;
const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& .MuiListItemIcon-root': {
      minWidth: '36px'
    }
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    height: '50px',
    display: 'flex',
    padding: '0 8px',
    //padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  textTitle: {
    color: theme.palette.primary.main,
    margin: 'auto',
    width: '100%',
    fontWeight: '300',
    fontSize: '28px'
  },
  nested: {
    '& .MuiListItemText-inset': {
      padding: '0px'
    },
    paddingLeft: theme.spacing(4)
  },
  navLink: {
    textDecoration: 'none',
    color: 'black'
  }
}));

const rederListItem = (props, obj, classes) => {
  const { openCollapse, handleOpenCallapse, role } = props;
  if (!role.includes(obj.id)) return;
  if (obj.collapse) {
    return (
      <div key={obj.name}>
        <ListItem button onClick={handleOpenCallapse}>
          <ListItemIcon>
            <Icon color="primary">{obj.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={obj.name} />
          {openCollapse ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {obj.childs.map((objChild, index) => {
          if (role.includes(objChild.id))
            return (
              <Collapse
                key={index}
                in={openCollapse}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <NavLink
                    to={{
                      pathname: obj.layout + objChild.path,
                      state: objChild.name
                    }}
                    className={classes.navLink}
                  >
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <Icon color="primary">{objChild.icon}</Icon>
                      </ListItemIcon>
                      <ListItemText inset primary={objChild.name} />
                    </ListItem>
                  </NavLink>
                </List>
              </Collapse>
            );
          return null;
        })}
      </div>
    );
  }
  return (
    <div key={obj.name}>
      <NavLink
        to={{ pathname: obj.layout + obj.path, state: obj.name }}
        className={classes.navLink}
      >
        <ListItem button>
          <ListItemIcon>
            <Icon color="primary">{obj.icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={obj.name} />
        </ListItem>
      </NavLink>
    </div>
  );
};

const Home = props => {
  console.log('Home render2');
  const classes = useStyles();
  const theme = useTheme();
  const {
    open,
    namelogin,
    handleDrawerOpen,
    handleDrawerClose,
    history
  } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            {history.location.state ? history.location.state : 'Trang chủ'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <div className={classes.textTitle}>{namelogin}</div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((obj, index) => rederListItem(props, obj, classes))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {switchRoutes}
        {history.location.pathname === '/home'
          ? console.log('asf')
          : console.log('bbbb')}
      </main>
    </div>
  );
};

Home.propTypes = {
  handleOpenCallapse: PropTypes.func.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  openCollapse: PropTypes.bool.isRequired,
  namelogin: PropTypes.string.isRequired,
  role: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

export default Home;
