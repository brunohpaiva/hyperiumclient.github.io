import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Container from './Container';

const id = string => string.toLowerCase().replace(' ', '-');

const styles = theme => ({
  section: {
    padding: `${theme.spacing.unit * 6}px 0 ${theme.spacing.unit * 3}px`,
  },
  titleContainer: {
    marginBottom: `${theme.spacing.unit * 2}px`,
  },
});

const Section = ({ classes, children, title }) => (
  <section id={id(title)} className={classes.section}>
    <Container>
      <Container
        itemProps={{ xs: 6, sm: 4, md: 4, lg: 3, xl: 3 }}
        containerClassName={classes.titleContainer}
      >
        <Typography component="h3" variant="h4" align="center" gutterBottom>
          {title}
        </Typography>
        <Divider />
      </Container>
      {children}
    </Container>
  </section>
);

Section.propTypes = {
  classes: PropTypes.shape({
    section: PropTypes.string.isRequired,
    titleContainer: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Section);
