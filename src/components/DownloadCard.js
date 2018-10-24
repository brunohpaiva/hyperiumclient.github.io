import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const styles = theme => ({
  cardActions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class DownloadCard extends React.Component {
  state = {
    expanded: false,
  };

  handleChangelogClick = () =>
    this.setState({ expanded: !this.state.expanded });

  render() {
    const {
      classes,
      title,
      description,
      downloadUrl,
      shareAction,
      changelogItems,
    } = this.props;
    const { expanded } = this.state;
    return (
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions} disableActionSpacing>
          <Tooltip title="Download">
            <div>
              <IconButton
                aria-label="Download"
                href={downloadUrl}
                disabled={!downloadUrl}
              >
                <GetAppIcon />
              </IconButton>
            </div>
          </Tooltip>
          {!!shareAction && (
            <Tooltip title="Share">
              <IconButton aria-label="Share" onClick={shareAction}>
                <ShareIcon />
              </IconButton>
            </Tooltip>
          )}
          {!!changelogItems && (
            <Tooltip title="Changelog">
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleChangelogClick}
                aria-expanded={expanded}
                aria-label="Changelog"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
          )}
        </CardActions>
        {!!changelogItems && (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider />
            <List subheader={<ListSubheader>Changelog</ListSubheader>}>
              {changelogItems.map((text, index) => (
                <ListItem key={index}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </Card>
    );
  }
}

DownloadCard.propTypes = {
  classes: PropTypes.shape({
    cardActions: PropTypes.string.isRequired,
    expand: PropTypes.string.isRequired,
    expandOpen: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  downloadUrl: PropTypes.string,
  shareAction: PropTypes.func,
  changelogItems: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles(styles)(DownloadCard);
