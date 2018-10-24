import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Container from '../components/Container';

const styles = theme => ({
  item: theme.mixins.gutters(),
});

const NotFoundPage = ({ classes, location }) => (
  <Layout location={location}>
    <Container itemProps={{ className: classes.item }}>
      <Typography variant="h2" gutterBottom>
        NOT FOUND
      </Typography>
      <Typography>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Typography>
    </Container>
  </Layout>
);

NotFoundPage.propTypes = {
  classes: PropTypes.shape({
    item: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default withStyles(styles)(NotFoundPage);
