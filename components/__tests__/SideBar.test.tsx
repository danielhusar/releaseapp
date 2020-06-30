import React from 'react'
import { useRouter } from 'next/router'
import { render, fireEvent, apps, app } from './helpers'
import SideBar from '../SideBar'
jest.mock('next/router', () => {
  const pushMock = jest.fn()
  return {
    useRouter: () => ({
      push: pushMock,
    }),
  }
})

describe('SideBar', () => {
  it('renders', () => {
    const { container } = render(<SideBar apps={apps} appId={app.id} activeNav="environments" />)
    expect(container).toMatchSnapshot()
  })

  it('changes app and calles router on select change', () => {
    const routerMock = useRouter()
    const { getByTestId } = render(<SideBar apps={apps} appId={app.id} activeNav="environments" />)
    const select = getByTestId('select')
    const event = {
      target: {
        value: 417,
      },
    }
    fireEvent.change(select, event)
    expect(routerMock.push).toHaveBeenCalledTimes(1)
    expect(routerMock.push).toHaveBeenCalledWith('/app/[appId]/environments', '/app/417/environments')
  })
})
