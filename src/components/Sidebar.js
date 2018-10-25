import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  drawerPaper: {
    width: 240,
  },
});

const Sidebar = ({ classes, children, open, onClose }) => (
  <SwipeableDrawer
    variant="temporary"
    open={open}
    onClose={onClose}
    ModalProps={{
      keepMounted: true,
    }}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    {children}
  </SwipeableDrawer>
);

Sidebar.propTypes = {
  classes: PropTypes.shape({
    drawerPaper: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default withStyles(styles)(Sidebar);
