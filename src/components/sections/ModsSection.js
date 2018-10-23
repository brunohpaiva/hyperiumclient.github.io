import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Section from '../Section';

const mods = [
  {
    name: 'Autofriend',
    description:
      'Autofriend automatically accepts all friend requests on Hypixel.',
  },
  {
    name: 'AutoGG 2.0',
    description:
      'AutoGG automatically says "gg" after a game has ended on Hypixel.',
  },
  {
    name: 'Autotip 2.0.3',
    description:
      'Autotip automatically tips all active Network Boosters and other Autotip users on the Hypixel Network (hypixel.net), allowing the user to collect coins, karma, and experience over time.',
  },
  {
    name: 'AutoWho',
    description:
      'AutoWho automatically run the "/who" command before a ranked game has started on Hypixel.',
  },
  {
    name: 'BlockOverlay',
    description:
      'BlockOverlay allows you to change the style, thickness and color of the box that shows the selected block.',
  },
  {
    name: 'ChromaHUD 3.0',
    description:
      'ChromaHUD is a Minecraft Mod to show custom information on your screen.',
  },
  {
    name: 'Custom Crosshair',
    description:
      'Custom Crosshair allows you to change the style, thickness, size and color of the crosshair.',
  },
  {
    name: 'Custom Reach Display Mod',
    description:
      'Hyperium Reach Display Mod is an exclusive mod that adds the distance of the hits directly in the world where they happened.',
  },
  {
    name: 'Fortnite Compass Mod',
    description:
      'Fortnite Compass Mod adds a bar at the top of your screen indicating the direction you are facing.',
  },
  {
    name: 'Glint Colorizer',
    description:
      'Glint Colorizer allows you to change toggle and change the enchantment glint on items.',
  },
  {
    name: 'KeystrokesMod 4.1.1',
    description:
      'KeystrokesMod enabled the ability to show the AWSD, left and right click, and the spacebar status keys onscreen.',
  },
  {
    name: 'Levelhead 4.1.2',
    description:
      "Levelhead is a Minecraft Mod created for the Hypixel Network mc.hypixel.net to show a player's network level above their head.",
  },
  {
    name: 'Motion Blur Mod',
    description:
      'Motion blur enabled the ability to add motion blur when moving in Minecraft.',
  },
  {
    name: 'OldAnimations 1.0',
    description:
      'OldAnimations is a Minecraft Mod to turn back Minecraft 1.7 animations.',
  },
  {
    name: 'Orange Marshall Vanilla Enchantments',
    description:
      'Orange Marshall Vanilla Enhancements adds enchantments to several key parts of the game.',
  },
  {
    name: 'PerspectiveMod 1.0',
    description:
      'PerspectiveMod is a Minecraft Mod that allows you to view your character in at any angle by modifying camera placement.',
  },
  {
    name: 'SidebarMod 1.0',
    description:
      'SidebarMod is a Minecraft Mod that allows you to edit the scoreboard placement and size.',
  },
  {
    name: 'ToggleChat 1.0',
    description:
      'ToggleChat is a Minecraft Mod that allows you to toggle the visibility of specific chat messages on the Hypixel Network.',
  },
];

const stylesMod = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const Mod = withStyles(stylesMod)(({ classes, mod }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography className={classes.heading}>{mod.name}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>{mod.description}</Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
));

Mod.propTypes = {
  mod: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

const ModsSection = () => {
  const arrayTwo = mods.map(mod => (
    <Mod key={mod.name.toLowerCase()} mod={mod} />
  ));
  const arrayOne = arrayTwo.splice(0, Math.ceil(arrayTwo.length / 2));

  return (
    <Section title="Mods">
      <Grid container spacing={8}>
        <Grid item md={6}>
          {arrayOne}
        </Grid>
        <Grid item md={6}>
          {arrayTwo}
        </Grid>
      </Grid>
    </Section>
  );
};

export default ModsSection;
