import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Container from '../components/Container';
import DownloadCard from '../components/DownloadCard';

import cinematicBluredImage from '../images/mc-cinematic-blured.png';

const formatDate = date =>
  date.toLocaleDateString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

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
    color: theme.palette.background.paper,
    fontWeight: 400,
  },
  container: {
    padding: `${theme.spacing.unit * 6}px 0 ${theme.spacing.unit * 3}px`,
  },
});

class DownloadsPage extends React.Component {
  state = {
    universalInstaller: {
      version: 'Loading...',
      downloadUrl: undefined,
      changelogItems: undefined,
    },
    hyperiumLatestVersion: {
      version: 'Loading...',
      downloadUrl: undefined,
    },
  };

  componentDidMount() {
    this.fetchLatestUniversalInstallerVersion();
    this.fetchLatestHyperiumVersion();
  }

  componentWillUnmount() {
    this.willUnmout = true;
  }

  fetchLatestUniversalInstallerVersion() {
    fetch(this.props.data.site.siteMetadata.universalInstallerLatestReleaseApi)
      .then(r => r.json())
      .then(release => {
        const asset = release.assets.filter(
          asset => !asset.name.toLowerCase().includes('sources')
        )[0];

        if (!this.willUnmout) {
          this.setState({
            universalInstaller: {
              version: `${release.tag_name} of ${formatDate(
                new Date(release.published_at)
              )}`,
              downloadUrl: asset.browser_download_url,
              changelogItems: release.body.split('\n'),
            },
          });
        }
      });
  }

  fetchLatestHyperiumVersion() {
    fetch(this.props.data.site.siteMetadata.hyperiumVersionsApi)
      .then(r => r.json())
      .then(versions => {
        if (!this.willUnmout) {
          this.setState({
            hyperiumLatestVersion: {
              version: `${versions.latest.build} build ${versions.latest.id}`,
              downloadUrl: versions.latest.url,
            },
          });
        }
      });
  }

  render() {
    const { classes, data } = this.props;
    const { universalInstaller, hyperiumLatestVersion } = this.state;
    return (
      <Layout location={this.props.location}>
        <Jumbotron className={classes.jumbotron}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            className={classes.pageTitle}
          >
            Downloads
          </Typography>
        </Jumbotron>
        <Container containerClassName={classes.container}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <DownloadCard
                title="Universal Installer"
                description={`Version ${universalInstaller.version}`}
                downloadUrl={universalInstaller.downloadUrl}
                changelogItems={universalInstaller.changelogItems}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <DownloadCard
                title="Latest Version"
                description={`Version ${hyperiumLatestVersion.version}`}
                downloadUrl={hyperiumLatestVersion.downloadUrl}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <DownloadCard
                title="Texture Pack"
                description="Version 1.0"
                downloadUrl={data.site.siteMetadata.texturePackUrl}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <DownloadCard
                title="Addon Kit"
                description="Version Latest"
                downloadUrl={data.site.siteMetadata.addonWorkspaceUrl}
              />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

DownloadsPage.propTypes = {
  classes: PropTypes.shape({
    jumbotron: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        universalInstallerLatestReleaseApi: PropTypes.string.isRequired,
        hyperiumVersionsApi: PropTypes.string.isRequired,
        texturePackUrl: PropTypes.string.isRequired,
        addonWorkspaceUrl: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export const query = graphql`
  query DownloadsPageQuery {
    site {
      siteMetadata {
        universalInstallerLatestReleaseApi
        hyperiumVersionsApi
        texturePackUrl
        addonWorkspaceUrl
      }
    }
  }
`;

export default withStyles(styles)(DownloadsPage);
