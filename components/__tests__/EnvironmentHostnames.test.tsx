import React from 'react'
import { render, environment } from './helpers'
import EnvironmentHostnames from '../EnvironmentHostnames'

describe('EnvironmentHostnames', () => {
  it('renders', () => {
    const { container } = render(<EnvironmentHostnames {...environment} />)
    expect(container).toMatchSnapshot()
  })
})
