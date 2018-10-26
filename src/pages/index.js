import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { scroller } from 'react-scroll';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import ModsSection from '../components/sections/ModsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PrivacyPolicySection from '../components/sections/PrivacyPolicySection';
import ContactSection from '../components/sections/ContactSection';
import ContributorsSection from '../components/sections/ContributorsSection';

import cinematicBluredImage from '../images/mc-cinematic-blured.png';

const styles = theme => ({
  jumbotron: {
    backgroundImage: `url(${cinematicBluredImage})`,
    backgroundAttachment: 'fixed',
    backgroundPositionY: '-140px',
    marginTop: '-24px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-32px',
    },
  },
  pageTitle: {
    fontWeight: 400,
  },
  textWhite: {
    color: theme.palette.background.paper,
  },
});

class IndexPage extends React.Component {
  componentDidMount() {
    const hash = this.props.location.hash || '';
    if (hash.length > 1) {
      scroller.scrollTo(hash.substring(1), {
        smooth: true,
        offset: -15,
        duration: 500,
      });
    }
  }

  render() {
    const { classes, location } = this.props;
    return (
      <Layout location={location}>
        <Jumbotron
          className={classes.jumbotron}
          containerProps={{ id: 'home' }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            className={classnames(classes.pageTitle, classes.textWhite)}
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
            Free and Open-source Minecraft Client with HUDs and other popular
            mods
          </Typography>
          <Grid container spacing={16} justify="center">
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

        <ModsSection />
        <FeaturesSection />
        <PrivacyPolicySection />
        <ContactSection />
        <ContributorsSection />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  classes: PropTypes.shape({
    jumbotron: PropTypes.string.isRequired,
    textWhite: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string,
  }),
};

export default withStyles(styles)(IndexPage);
