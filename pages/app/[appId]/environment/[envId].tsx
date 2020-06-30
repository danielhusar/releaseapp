import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import AppSwitch from '~/components/AppSwitch'
import Spacer from '~/components/Spacer'
import Content from '~/components/Content'
import Error from '../../../_error'
import { IEnvironments } from '~/components/Environments'
import EnvironmentDetail from '~/components/EnvironmentDetail'
import api, { API_ENDPOINT } from '~/lib/api'
import { extractAppsFromEnvironments } from '~/lib/appHelpers'

interface Props extends IEnvironments {
  appId: number | undefined
  envId: number | undefined
}

export default function EnvironmentPage({ environments, appId, envId }: Props) {
  const apps = extractAppsFromEnvironments(environments)
  const app = appId && apps[appId]
  const environment = app && app.environments.find((env) => env.id === envId)

  if (!app || !appId || !environment) {
    return <Error status={404} />
  }

  return (
    <>
      <Head>
        <title>
          Release | Apps | {app.name} | {environment.name}
        </title>
      </Head>
      <Content>
        <AppSwitch appId={appId} apps={apps} activeNav="environments" />
        <Spacer size={3} />
        <EnvironmentDetail {...environment} />
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
      envId: Number(query.envId),
    },
  }
}
