import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import hyperiumLogo from '../images/hyperium-logo.png';
import Container from './Container';

const styles = theme => ({
  toolbar: {
    transition: 'min-height linear 200ms',
  },
  menuButton: {
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  containerItem: {
    padding: 0,
  },
  titleLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
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
    <Container itemClassName={classes.containerItem}>
      <Toolbar
        className={classes.toolbar}
        variant={toolbarVariant || 'regular'}
      >
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleSidebarToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component={Link}
          to="/"
          className={classes.titleLink}
        >
          <img src={hyperiumLogo} height="32" alt="Hyperium logo" />
          yperium
        </Typography>
        <div className={classes.grow} />
        {children}
      </Toolbar>
    </Container>
  </AppBar>
);

Navbar.propTypes = {
  classes: PropTypes.shape({
    toolbar: PropTypes.string.isRequired,
    menuButton: PropTypes.string.isRequired,
    grow: PropTypes.string.isRequired,
    containerItem: PropTypes.string.isRequired,
    titleLink: PropTypes.string.isRequired,
  }),
  position: PropTypes.string,
  color: PropTypes.string,
  elevation: PropTypes.number,
  toolbarVariant: PropTypes.string,
  children: PropTypes.node,
  handleSidebarToggle: PropTypes.func,
};

export default withStyles(styles)(Navbar);
