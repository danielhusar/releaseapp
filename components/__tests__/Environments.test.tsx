import React from 'react'
import { render, app } from './helpers'
import Environments from '../Environments'

const RealDate = Date.now

beforeAll(() => {
  global.Date.now = jest.fn(() => new Date('2020-04-20T15:48:38.039Z').getTime())
})

afterAll(() => {
  global.Date.now = RealDate
})

describe('Environments', () => {
  it('renders', () => {
    const { container } = render(<Environments {...app} />)
    expect(container).toMatchSnapshot()
  })
})
