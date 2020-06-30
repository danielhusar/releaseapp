import React from 'react'
import { render, environment } from './helpers'
import BuildUrl from '../BuildUrl'

describe('BuildUrl', () => {
  it('renders', () => {
    const { container } = render(<BuildUrl {...environment.current_build} />)
    expect(container).toMatchSnapshot()
  })
})
