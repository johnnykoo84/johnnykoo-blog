module.exports = {
  siteMetadata: {
    title: `kooboy blog`,
    author: `Johnny Ilmo Koo`,
    description: `Now or Never`,
    siteUrl: `https://johnnykoo.dev`,
    social: {
      twitter: `johnnykoo84`,
      facebook: "johnnykoo84",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow",
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-js",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-social-cards`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-158209368-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`,
      },
    },

    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-disqus",
      options: {
        shortname: "kooboyblog",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Ubuntu Mono",
          `limelight`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-lodash`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-remark-social-cards`,
      options: {
        title: {
          field: "title",
          font: "DejaVuSansCondensed",
          color: "black",
          size: 48,
          style: "bold",
          x: null,
          y: null,
        },
        meta: {
          parts: [
            "- ",
            { field: "author" },
            " » ",
            { field: "date", format: "mmmm dS" },
          ],
          font: "DejaVuSansCondensed",
          color: "black",
          size: 24,
          style: "normal",
          x: null,
          y: null,
        },
        background: "#FFFFFF",
        xMargin: 24,
        yMargin: 24,
      },
    },
  ],
}
