module.exports = {
  siteMetadata: {
    siteTitle: `sono.io`,
    defaultTitle: `sono.io`,
    siteTitleShort: `sono.io`,
    siteDescription: `Real-time communication library on the Deno runtime`,
    siteUrl: `https://sono.land/`,
    siteAuthor: `@sono`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/oslabs-beta/sono.land`,
        baseDir: `/sono.land`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sono.land`,
        short_name: `sono.land`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `sono.land`,
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-dark-mode'
  ],
};
