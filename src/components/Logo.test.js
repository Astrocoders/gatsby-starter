import React from 'react'
import { render } from 'react-testing-library'

import Logo from './Logo'

describe('Logo component', () => {
  it('should have alt attr', () => {
    const { queryByAltText } = render(<Logo />)

    expect(queryByAltText('Gatsby Logo')).toBeTruthy()
  })
})
