import React from 'react'
import { render } from './helpers'
import Spacer from '../Spacer'

describe('Spacer', () => {
  it('renders', () => {
    const { container } = render(<Spacer size={5} />)
    expect(container).toMatchSnapshot()
  })
})
