import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

import '../css/layout.css'

const Layout = ({ children, data }) => (
  <React.Fragment>
    <Header data={data} />
    <main>{children}</main>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
