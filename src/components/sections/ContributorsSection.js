import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Section from '../Section';

const contributorStyles = () => ({
  title: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
});

const Contributor = withStyles(contributorStyles)(
  ({ classes, contributor }) => (
    <Card>
      <CardMedia
        component="img"
        alt={`${contributor.login}'s github avatar'`}
        height="140"
        image={contributor.avatar_url}
        title={`${contributor.login}'s github avatar'`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {contributor.login}
        </Typography>
        <Typography component="p">
          Contributions: {contributor.contributions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={contributor.html_url}>
          GitHub
        </Button>
      </CardActions>
    </Card>
  )
);

Contributor.propTypes = {
  classes: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  contributor: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    contributions: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
  }),
};

class ContributorsSection extends React.Component {
  state = {
    contributors: [],
  };

  componentDidMount() {
    this.fetchContributors();
  }

  componentWillUnmount() {
    this.willUnmout = true;
  }

  fetchContributors() {
    fetch(this.props.apiUrl)
      .then(r => r.json())
      .then(contributors => {
        const totalContributions = contributors
          .map(contributor => contributor.contributions)
          .reduce((prev, next) => prev + next);
        const arithmeticAverage = totalContributions / contributors.length;
        const filteredContributors = contributors.filter(
          contributor => contributor.contributions >= arithmeticAverage
        );
        if (!this.willUnmout) {
          this.setState({ contributors: filteredContributors });
        }
      });
  }

  render() {
    const contributors = this.state.contributors.map(contributor => (
      <Grid item key={contributor.id} xs={6} sm={4} md={3} lg={2}>
        <Contributor contributor={contributor} />
      </Grid>
    ));
    return (
      <Section title="Contributors">
        <Grid container spacing={16}>
          {contributors}
        </Grid>
      </Section>
    );
  }
}

ContributorsSection.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};

const query = graphql`
  query {
    site {
      siteMetadata {
        projectContributorsApi
      }
    }
  }
`;

const RenderSection = data => (
  <ContributorsSection apiUrl={data.site.siteMetadata.projectContributorsApi} />
);

const Component = () => <StaticQuery query={query} render={RenderSection} />;

export default Component;
