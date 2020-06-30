import React from 'react'
import { render, environment } from './helpers'
import EnvironmentInfo from '../EnvironmentInfo'

describe('EnvironmentInfo', () => {
  it('renders', () => {
    const { container } = render(<EnvironmentInfo {...environment} />)
    expect(container).toMatchSnapshot()
  })
})
