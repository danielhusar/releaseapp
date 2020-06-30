import React from 'react'
import { render, environment } from './helpers'
import EnvironmentDetail from '../EnvironmentDetail'

describe('EnvironmentDetail', () => {
  it('renders', () => {
    const { container } = render(<EnvironmentDetail {...environment} />)
    expect(container).toMatchSnapshot()
  })
})
