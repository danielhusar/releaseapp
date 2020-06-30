import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@chakra-ui/core'
import theme from '~/lib/theme'
import { IEnvironment } from '~/@types/environment'
import { extractAppsFromEnvironments } from '~/lib/appHelpers'
import environmentsFixtures from '~/cypress/fixtures/environments.json'

const AllTheProviders = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

export const apps = extractAppsFromEnvironments((environmentsFixtures as unknown) as IEnvironment[])
export const firstEnvironment = Object.keys(apps)[0]
export const app = apps[firstEnvironment]
export const environment = app.environments[0]
