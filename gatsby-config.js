module.exports = {
  siteMetadata: {
    title: 'Hyperium',
    siteUrl: 'https://hyperium.cc',
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
