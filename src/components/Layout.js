import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../utils/layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={({ site: { siteMetadata: data } }) => (
      <main>
        <Helmet>
          <title>{data.title}</title>
          <meta name="description" content={data.description} />
          <meta name="viewport" content="width=device-width, maximum-scale=1" />
        </Helmet>
        {children}
      </main>
    )}
  />
)

export default Layout
