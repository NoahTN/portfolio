module.exports = {
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `NoahTN Portfolio`,
    description: `A portfolio website built using Gatsby`,
    author: `NoahTN`,
  },
  plugins: [
    'gatsby-plugin-emotion', 
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
         defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
         },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
         name: 'abouts',
         path: 'abouts',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
         name: 'projects',
         path: 'projects',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
         name: 'personal',
         path: 'personal',
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
