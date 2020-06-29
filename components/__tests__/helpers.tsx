import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@chakra-ui/core'
import theme from '~/lib/theme'

const AllTheProviders = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
