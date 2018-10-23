import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import hyperiumLargeLogo from '../images/hyperium-large.png';
import Container from './Container';

const styles = theme => ({
  toolbar: {
    transition: 'min-height linear 200ms',
  },
  navIconHide: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
});

const Navbar = ({
  classes,
  position,
  color,
  elevation,
  toolbarVariant,
  children,
  handleSidebarToggle,
}) => (
  <AppBar
    position={position || 'static'}
    color={color || 'default'}
    elevation={elevation || 4}
  >
    <Container>
      <Toolbar
        className={classes.toolbar}
        variant={toolbarVariant || 'regular'}
      >
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleSidebarToggle}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <img src={hyperiumLargeLogo} height="32" />
        <div className={classes.grow} />
        {children}
      </Toolbar>
    </Container>
  </AppBar>
);

Navbar.propTypes = {
  classes: PropTypes.shape({
    toolbar: PropTypes.string.isRequired,
    navIconHide: PropTypes.string.isRequired,
    grow: PropTypes.string.isRequired,
  }),
  position: PropTypes.string,
  color: PropTypes.string,
  elevation: PropTypes.number,
  toolbarVariant: PropTypes.string,
  grow: PropTypes.string.isRequired,
  children: PropTypes.node,
  handleSidebarToggle: PropTypes.func,
};

export default withStyles(styles)(Navbar);
