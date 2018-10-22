import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Logo from '../components/Logo'

const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`

const Home = () => (
  <Layout>
    <Header data-testid="HeaderWrapper">
      <Logo />
      <p data-testid="HeaderTitle">Astrocoders Gatsby boilerplate</p>
    </Header>
  </Layout>
)

export default Home
