import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { StaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import withRoot from '../withRoot';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const styles = theme => ({
  navbarMenu: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  content: {
    paddingTop: `${theme.spacing.unit * 11}px`,
    [theme.breakpoints.down('xs')]: {
      paddingTop: `${theme.spacing.unit * 10}px`,
    },
  },
});

class Layout extends React.Component {
  state = {
    scrollTop: 0,
    sidebarOpen: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollListener);
  }

  scrollListener = e => {
    const state = this.state;
    const scrollTop = e.target.scrollingElement.scrollTop;
    if (scrollTop >= 64) {
      if (!state.scrollTop < 64) {
        this.setState({
          scrollTop: scrollTop,
        });
      }
    } else {
      if (state.scrollTop >= 64) {
        this.setState({
          scrollTop: 0,
        });
      }
    }
  };

  handleSidebarToggle = () =>
    this.setState({ sidebarOpen: !this.state.sidebarOpen });

  createLinkComponent = path => props =>
    this.props.location.pathname !== '/' ? (
      <GatsbyLink to={path} {...props} />
    ) : (
      <ScrollLink
        to={path.substring(path.indexOf('#') + 1)}
        smooth
        duration={500}
        offset={-15}
        {...props}
      />
    );

  render() {
    const { children, classes } = this.props;
    const { scrollTop, sidebarOpen } = this.state;
    const toolbarVariant = scrollTop >= 64 ? 'dense' : 'regular';
    return (
      <StaticQuery
        query={query}
        render={data => (
          <React.Fragment>
            <Helmet title={data.site.siteMetadata.title} />
            <Navbar
              position="fixed"
              toolbarVariant={toolbarVariant}
              handleSidebarToggle={this.handleSidebarToggle}
            >
              <div className={classes.navbarMenu}>
                <Button component={this.createLinkComponent('/#home')}>
                  Home
                </Button>
                <Button component={this.createLinkComponent('/#mods')}>
                  Mods
                </Button>
                <Button component={this.createLinkComponent('/#features')}>
                  Features
                </Button>
                <Button
                  component={this.createLinkComponent('/#privacy-policy')}
                >
                  Privacy
                </Button>
                <Button component={this.createLinkComponent('/#contact')}>
                  Contact
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={GatsbyLink}
                  to="/downloads"
                >
                  Downloads
                </Button>
              </div>
            </Navbar>
            <Hidden smUp>
              <Sidebar open={sidebarOpen} onClose={this.handleSidebarToggle}>
                <List>
                  <ListItem
                    button
                    component={this.createLinkComponent('/#home')}
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    button
                    component={this.createLinkComponent('/#mods')}
                  >
                    <ListItemText primary="Mods" />
                  </ListItem>
                  <ListItem
                    button
                    component={this.createLinkComponent('/#features')}
                  >
                    <ListItemText primary="Features" />
                  </ListItem>
                  <ListItem
                    button
                    component={this.createLinkComponent('/#privacy-policy')}
                  >
                    <ListItemText primary="Privacy Policy" />
                  </ListItem>
                  <ListItem
                    button
                    component={this.createLinkComponent('/#contact')}
                  >
                    <ListItemText primary="Contact" />
                  </ListItem>
                  <ListItem button component={GatsbyLink} to="/downloads">
                    <ListItemText primary="Downloads" />
                  </ListItem>
                </List>
              </Sidebar>
            </Hidden>
            <div className={classes.content}>{children}</div>
          </React.Fragment>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    navbarMenu: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default withRoot(withStyles(styles)(Layout));
