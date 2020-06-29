import React from 'react'
import Head from 'next/head'
import { Heading } from '@chakra-ui/core'

interface Props {
  status: number
}

interface GetInitialProps {
  res: Response
}

export default class Error extends React.Component<Props> {
  static getInitialProps({ res }: GetInitialProps) {
    return { status: res.status }
  }

  render() {
    const message = this.props.status === 404 ? "This page doesn't exists." : 'Something went wrong.'

    return (
      <>
        <Head>
          <title>Error</title>
        </Head>
        <Heading textAlign="center" size="xl">
          {message}
        </Heading>
      </>
    )
  }
}
