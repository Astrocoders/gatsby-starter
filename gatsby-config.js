module.exports = {
  siteMetadata: {
    title: `Astrocoders Gatsby Starter`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum eros ut ex ornare, dignissim congue diam ullamcorper. Pellentesque ultrices magna consectetur velit feugiat semper.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:300,400,900`, `Roboto\: 300,400,700`],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Astrocoders Gatsby Starter',
        short_name: 'gatsby-starter',
        description: 'A static site made with Gatsby',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#835FE2',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#835FE2`,
        showSpinner: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
}
