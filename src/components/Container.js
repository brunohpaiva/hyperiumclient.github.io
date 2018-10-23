import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const styles = theme => ({
  item: theme.mixins.gutters(),
});

const Container = ({
  classes,
  children,
  containerProps,
  containerClassName,
  itemProps,
  itemClassName,
}) => (
  <Grid
    container
    spacing={0}
    justify="center"
    {...containerProps}
    className={containerClassName}
  >
    <Grid
      xs={12}
      md={10}
      xl={8}
      item
      {...itemProps}
      className={classnames(classes.item, itemClassName)}
    >
      {children}
    </Grid>
  </Grid>
);

Container.propTypes = {
  classes: PropTypes.shape({
    item: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
  containerProps: PropTypes.object,
  containerClassName: PropTypes.string,
  itemProps: PropTypes.object,
  itemClassName: PropTypes.string,
};

export default withStyles(styles)(Container);
