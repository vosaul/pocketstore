module.exports = {
  siteMetadata: {
    title: `Інтернет-магазин мобільних аксесуарів і техніки PocketStore`,
    description: `Купити чохол на телефон на PocketStore. ➔ Низькі ціни. ☝ Замовити оригінальні чохли на будь-які мобільні телефони. ➤ Продаж чохлів онлайн. Самовивіз і доставка в Київ, Одесу, Харків, Львів, Дніпро і по всій Україні.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    slogan: `Спеціалізовані магазини мобільних аксесуарів`,
    sloganShort: `Магазини мобільних аксесуарів`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /* {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'CustomNode',
        imagePath: 'imageUrl',
        name: 'imageUrl',
      },
    }, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `xml`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-xml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
