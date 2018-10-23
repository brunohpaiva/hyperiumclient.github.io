import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';

import ModsSection from '../components/sections/ModsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PrivacyPolicySection from '../components/sections/PrivacyPolicySection';

const styles = theme => ({
  jumbotron: {
    backgroundImage: 'url(https://hyperium.cc/images/mc-cinematic-blured.png)',
    backgroundAttachment: 'fixed',
    backgroundPositionY: '-140px',
    marginTop: '-24px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-32px',
    },
  },
  textWhite: {
    color: theme.palette.background.paper,
  },
});

const IndexPage = ({ classes }) => (
  <Layout>
    <Jumbotron className={classes.jumbotron}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        gutterBottom
        className={classes.textWhite}
      >
        Hyperium
      </Typography>
      <Typography
        component="h2"
        variant="h6"
        align="center"
        gutterBottom
        className={classes.textWhite}
      >
        Free and Open-source Minecraft Client with HUDs and other popular mods
      </Typography>
      <Grid container spacing={16} justify="center">
        <Grid item>
          <Button variant="contained" color="primary">
            Downloads
          </Button>
        </Grid>
      </Grid>
    </Jumbotron>

    <ModsSection />
    <FeaturesSection />
    <PrivacyPolicySection />
  </Layout>
);

IndexPage.propTypes = {
  classes: PropTypes.shape({
    jumbotron: PropTypes.string.isRequired,
    textWhite: PropTypes.string.isRequired,
  }),
};

export default withStyles(styles)(IndexPage);
