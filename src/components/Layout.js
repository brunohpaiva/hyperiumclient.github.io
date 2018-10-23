import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { StaticQuery, graphql } from 'gatsby';
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
                <Button>Home</Button>
                <Button>Mods</Button>
                <Button>Features</Button>
                <Button>Privacy Policy</Button>
                <Button>Contact</Button>
                <Button variant="contained" color="primary">
                  Downloads
                </Button>
              </div>
            </Navbar>
            <Hidden smUp>
              <Sidebar open={sidebarOpen} onClose={this.handleSidebarToggle}>
                <List>
                  <ListItem button>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Mods" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Features" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Privacy Policy" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Contact" />
                  </ListItem>
                  <ListItem button>
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
};

export default withRoot(withStyles(styles)(Layout));
