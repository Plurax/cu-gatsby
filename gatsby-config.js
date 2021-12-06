module.exports = {
  siteMetadata: {
    languages: ["de","en"],
    // Used for the site title and SEO
    siteUrl: "https://christoph.familie-uhlich.de",
    title: "Christoph Uhlich",
    // Used to provide alt text for your avatar
    author: `Christoph Uhlich`,
    // Used for SEO
    description: `My site description...`,
    // Used for resolving images in social cards
    siteUrl: `https://christoph.familie-uhlich.de`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/plurax`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/plurax`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/christoph-uhlich/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: "@theme-ui/preset-base",
      },
    },
    {
      resolve: `gatsby-transformer-orga`,
      options: {
        slug: ({ language, uuid }) => `/${language}/${uuid}`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
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
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
        modifyVars: {
          "primary-color": "#d32f2f",
          "heading-color": "#ff6659"
        }
      }
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
