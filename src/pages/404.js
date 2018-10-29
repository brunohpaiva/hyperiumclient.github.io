import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';

const styles = theme => ({
  jumbotron: {
    marginTop: '-24px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-32px',
    },
  },
  pageTitle: {
    fontWeight: 400,
  },
});

const NotFoundPage = ({ classes, location }) => (
  <Layout location={location}>
    <Jumbotron className={classes.jumbotron}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        gutterBottom
        className={classes.pageTitle}
      >
        Not Found
      </Typography>
      <Typography component="h2" variant="h6" align="center" gutterBottom>
        {"You just hit a route that doesn't exist... the sadness."}
      </Typography>
      <Grid container spacing={16} justify="center">
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/">
            Home
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/downloads"
          >
            Downloads
          </Button>
        </Grid>
      </Grid>
    </Jumbotron>
  </Layout>
);

NotFoundPage.propTypes = {
  classes: PropTypes.shape({
    jumbotron: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default withStyles(styles)(NotFoundPage);
