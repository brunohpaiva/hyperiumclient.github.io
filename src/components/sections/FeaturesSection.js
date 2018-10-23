import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Section from '../Section';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }),
  mb: {
    marginBottom: theme.spacing.unit * 2,
  },
});

const FeaturesSection = ({ classes }) => (
  <Section title="Features">
    <Grid container spacing={16}>
      <Grid item md={6}>
        <Paper className={classnames(classes.paper, classes.mb)} elevation={1}>
          <Typography variant="h5" component="h3">
            Performance Enchantments
          </Typography>
          <Typography component="p">
            Hyperium addresses many issues within Minecraft that negatively
            affect performance. As a result, you should see a more stable game
            with a higher average frame rate.
          </Typography>
        </Paper>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h5" component="h3">
            Advanced Customization
          </Typography>
          <Typography component="p">
            Control many features within Minecraft that are not normally
            controllable.
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={6}>
        <Paper className={classnames(classes.paper, classes.mb)} elevation={1}>
          <Typography variant="h5" component="h3">
            Cosmetics
          </Typography>
          <Typography component="p">
            Hyperium adds many purchasable cosmetics including custom particle
            auras, capes, wings, ears, dragon head and more.
          </Typography>
        </Paper>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="h5" component="h3">
            Discord Rich Presence
          </Typography>
          <Typography component="p">
            Let your friends know what games you are playing with Minecraft!
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Section>
);

FeaturesSection.propTypes = {
  classes: PropTypes.shape({
    paper: PropTypes.string.isRequired,
  }),
};

export default withStyles(styles)(FeaturesSection);
