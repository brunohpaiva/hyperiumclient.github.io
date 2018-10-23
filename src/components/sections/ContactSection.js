import React from 'react';
import Grid from '@material-ui/core/Grid';

import discordLogoLarge from '../../images/discord-large.png';
import Section from '../Section';

class ContactSection extends React.Component {
  render() {
    return (
      <Section title="Contact">
        <Grid container justify="center">
          <Grid item>
            <a href="https://hyperium.cc/discord">
              <img src={discordLogoLarge} width="300" />
            </a>
          </Grid>
        </Grid>
      </Section>
    );
  }
}

export default ContactSection;
