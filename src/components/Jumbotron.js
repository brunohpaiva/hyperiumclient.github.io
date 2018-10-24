import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Container from '../components/Container';

const styles = theme => ({
  jumbotron: {
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing.unit * 5}px 0 ${theme.spacing.unit * 5}px`,
  },
  jumbotronContent: theme.mixins.gutters(),
});

const Jumbotron = ({ classes, children, className, ...props }) => (
  <Container
    containerClassName={classnames(classes.jumbotron, className)}
    itemClassName={classes.jumbotronContent}
    itemProps={{
      xs: 12,
      md: 6,
      xl: 4,
    }}
    {...props}
  >
    {children}
  </Container>
);

Jumbotron.propTypes = {
  classes: PropTypes.shape({
    jumbotron: PropTypes.string.isRequired,
    jumbotronContent: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(Jumbotron);
