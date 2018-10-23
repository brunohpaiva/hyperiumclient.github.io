import React from 'react';
import PropTypes from 'prop-types';

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html lang="en" {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="author" content="Hyperium Team" />
      <meta
        name="description"
        content="Free and Open-source Minecraft Client with HUDs and other popular mods"
      />

      <meta property="og:url" content="https://hyperium.cc" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Hyperium" />
      <meta
        property="og:image"
        content="https://hyperium.cc/icons/icon-512x512.png"
      />
      <meta
        property="og:description"
        content="Free and Open-source Minecraft Client with HUDs and other popular mods"
      />
      <meta property="og:site_name" content="Hyperium" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://hyperium.cc" />
      <meta name="twitter:title" content="Hyperium" />
      <meta
        name="twitter:description"
        content="Free and Open-source Minecraft Client with HUDs and other popular mods"
      />
      <meta
        name="twitter:image"
        content="https://hyperium.cc/icons/icon-512x512.png"
      />

      {headComponents}
    </head>
    <body {...bodyAttributes}>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      {preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
);

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

export default HTML;
