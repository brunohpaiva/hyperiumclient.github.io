import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Container from './Container';

const styles = theme => ({
  container: {
    marginTop: `${theme.spacing.unit * 3}px`,
    padding: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 4}px`,
    backgroundColor: theme.palette.background.paper,
  },
});

const Footer = ({ classes, copyrightText }) => (
  <Container containerClassName={classes.container}>
    <Typography align="center" variant="body1">
      {copyrightText}
    </Typography>
  </Container>
);

Footer.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }),
  copyrightText: PropTypes.string.isRequired,
};

export default withStyles(styles)(Footer);
