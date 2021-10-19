/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lh2dzm21y4wy`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Abel"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Asado Barcelona`,
        short_name: `AsadoBCN`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#171717`,
        display: `standalone`,
        icon: `src/assets/images/asado-icon.png`,
        icons: [
          {
            src: `src/assets/images/asado-icon.png`,
            sizes: `3000x3000`,
            type: `image/png`,
          },
          {
            src: `src/assets/images/asado-icon-150x150.png`,
            purpose: `maskable`,
            sizes: `150x150`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-minify`,
  ],
}
