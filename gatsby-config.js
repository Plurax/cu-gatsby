module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    siteUrl: "https://christoph.familie-uhlich.de",
    title: "Christoph Uhlich",
    // Used to provide alt text for your avatar
    author: `My Name`,
    // Used for SEO
    description: `My site description...`,
    // Used for resolving images in social cards
    siteUrl: `https://example.com`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-transformer-orga`,
      options: { slug: ({ language, uuid }) => `/${language}/${uuid}` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: "content",
        ignore: ['**/\.*', '**/*.db-journal'],
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'de',
        langKeyForNull: 'de',
        prefixDefault: true,
        useLangKeyLayout: false
      },
    }
  ]
};
