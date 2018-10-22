import React from 'react'
import renderer from 'react-test-renderer'
import { PureHeader as Header } from './Header'

describe('Header', () =>
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Astrocoders Gatsby Starter',
        },
      },
    }
    const tree = renderer.create(<Header data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
