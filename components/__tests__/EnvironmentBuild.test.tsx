import React from 'react'
import { render, environment } from './helpers'
import EnvironmentBuild from '../EnvironmentBuild'

describe('EnvironmentBuild', () => {
  it('renders', () => {
    const { container } = render(<EnvironmentBuild {...environment} />)
    expect(container).toMatchSnapshot()
  })
})
