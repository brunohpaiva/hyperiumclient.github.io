module.exports = {
  siteMetadata: {
    title: 'Hyperium',
    siteUrl: 'https://hyperium.cc',
    copyrightText: 'Copyright © 2018 Sk1er LLC.',
    projectContributorsApi:
      'https://api.github.com/repos/HyperiumClient/Hyperium/contributors',
    universalInstallerLatestReleaseApi:
      'https://api.github.com/repos/HyperiumClient/Installer/releases/latest',
    hyperiumVersionsApi: 'https://api.hyperium.cc/versions',
    texturePackUrl: 'http://bit.ly/HyperiumPack',
    addonWorkspaceUrl:
      'https://github.com/HyperiumClient/Addon-Workspace/archive/master.zip',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hyperium',
        short_name: 'Hyperium',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-71140240-7',
        respectDNT: true,
        exclude: [],
        cookieDomain: 'hyperium.cc',
      },
    },
  ],
};
