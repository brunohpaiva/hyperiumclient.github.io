import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Section from '../Section';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }),
});

const PrivacyPolicySection = ({ classes }) => (
  <Section title="Privacy Policy">
    <Grid container spacing={16}>
      <Grid item md={6}>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h5" component="h3">
            What data does Hyperium Collect?
          </Typography>
          <Typography component="p">
            When using Hyperium, the client and integrated mods send a few small
            pieces of information to a remote server in exchange for a temporary
            token for accessing data from Hypixel. This information includes
            your Minecraft UUID and username, Minecraft Version, Client Version
            and specific mod being used. This information is processed and used
            to determine if the client is out of date or if the client should
            abort the startup procedure. Hyperium may also collect the servers
            you play on and the duration of time spent on servers.
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={6}>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h5" component="h3">
            What we do with the data
          </Typography>
          <Typography component="p">
            The data is stored securely for analytic purposes. We will never
            sell or release the data collected from specific users. All analytic
            graphs may be viewed on{' '}
            <a href="https://sk1er.club/graphs/hyperium">
              sk1er.club/graphs/hyperium
            </a>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Section>
);

PrivacyPolicySection.propTypes = {
  classes: PropTypes.shape({
    paper: PropTypes.string.isRequired,
  }),
};

export default withStyles(styles)(PrivacyPolicySection);
