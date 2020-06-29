import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document<{
  nonce: string
}> {
  render() {
    return (
      <html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
