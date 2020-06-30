import React from 'react'
import { render, environment } from './helpers'
import EnvironmentDetail from '../EnvironmentDetail'

const RealDate = Date.now

beforeAll(() => {
  global.Date.now = jest.fn(() => new Date('2020-04-20T15:48:38.039Z').getTime())
})

afterAll(() => {
  global.Date.now = RealDate
})

describe('EnvironmentDetail', () => {
  it('renders', () => {
    const { container } = render(<EnvironmentDetail {...environment} />)
    expect(container).toMatchSnapshot()
  })
})
