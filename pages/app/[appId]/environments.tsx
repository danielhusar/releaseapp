import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import AppSwitch from '~/components/AppSwitch'
import Content from '~/components/Content'
import Spacer from '~/components/Spacer'
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
      <Content>
        <AppSwitch appId={appId} apps={apps} activeNav="environments" />
        <Spacer size={3} />
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
