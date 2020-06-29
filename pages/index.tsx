import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Environments, { IEnvironments } from '~/components/Environments'

interface Props extends IEnvironments {}

export default function IndexPage({ environments }: Props) {
  return (
    <>
      <Head>
        <title>Documents</title>
      </Head>
      <Environments environments={environments} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async function () {
  const environments = [{ id: '1' }]

  return {
    props: {
      environments,
    },
  }
}
