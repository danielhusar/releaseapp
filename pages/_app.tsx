import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from '~/lib/theme'
import Main from '~/components/Main'
import GlobalStyles from '~/components/GlobalStyles'
import Error from './_error'

interface Props {
  nonce: string
  pageProps: unknown
}

interface State {
  error: boolean
}

export default class MyApp extends App<Props, State> {
  state = {
    error: false,
  }
  componentDidCatch() {
    this.setState({ error: true })
    // Do something with the error, like send it to Sentry
  }
  render() {
    const { Component, pageProps } = this.props
    const { error } = this.state
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>Daniel Jun 13 2020</title>
        </Head>
        <CSSReset />
        <GlobalStyles />
        <Main aria-live="polite">{error ? <Error status={500} /> : <Component {...pageProps} />}</Main>
      </ThemeProvider>
    )
  }
}
