import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import api, { API_ENDPOINT } from '~/lib/api'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Apps</title>
      </Head>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Record<string, unknown>> = async function ({ res }) {
  const environments = await api.get(API_ENDPOINT)
  res.setHeader('Location', `/app/${environments[0].app.id}/environments`)
  res.statusCode = 301

  return {
    props: {},
  }
}
