import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const Container = ({ children, containerProps, itemProps }) => (
  <Grid container spacing={0} justify="center" {...containerProps}>
    <Grid xs={12} md={10} xl={8} item {...itemProps}>
      {children}
    </Grid>
  </Grid>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  containerProps: PropTypes.object,
  itemProps: PropTypes.object,
};

export default Container;
