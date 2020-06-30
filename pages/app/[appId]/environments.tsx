import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Heading } from '@chakra-ui/core'
import SideBar from '~/components/SideBar'
import Content from '~/components/Content'
import Error from '../../_error'
import Environments, { IEnvironments } from '~/components/Environments'
import api, { API_ENDPOINT } from '~/lib/api'
import { extractAppsFromEnvironments } from '~/lib/appHelpers'

interface Props extends IEnvironments {
  appId: number | undefined
}

export default function EnvironmentsPage({ environments, appId }: Props) {
  const apps = extractAppsFromEnvironments(environments)
  const app = appId && apps[appId]

  if (!app || !appId) {
    return <Error status={404} />
  }

  return (
    <>
      <Head>
        <title>Release | Apps | {app.name}</title>
      </Head>
      <SideBar appId={appId} apps={apps} activeNav="environments"></SideBar>
      <Content>
        <Heading as="h1" size="lg" marginBottom={5} fontWeight={400}>
          {app.name}
        </Heading>
        <Environments environments={app.environments} />
      </Content>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async function ({ query }) {
  const environments = await api.get(API_ENDPOINT)

  return {
    props: {
      environments,
      appId: Number(query.appId),
    },
  }
}
