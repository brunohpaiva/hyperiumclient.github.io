import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Container from './Container';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    transition: 'min-height linear 200ms',
  },
  navIconHide: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
});

const Navbar = ({
  classes,
  position,
  color,
  elevation,
  toolbarVariant,
  title,
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
        <Typography variant="h6" color="inherit" className={classes.title}>
          {title}
        </Typography>
        {children}
      </Toolbar>
    </Container>
  </AppBar>
);

Navbar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
  }),
  position: PropTypes.string,
  color: PropTypes.string,
  elevation: PropTypes.number,
  toolbarVariant: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  handleSidebarToggle: PropTypes.func,
};

export default withStyles(styles)(Navbar);
