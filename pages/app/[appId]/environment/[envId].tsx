import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Heading } from '@chakra-ui/core'
import SideBar from '~/components/SideBar'
import Content from '~/components/Content'
import Error from '../../../_error'
import { IEnvironments } from '~/components/Environments'
import EnvironmentDetail from '~/components/EnvironmentDetail'
import api, { API_ENDPOINT } from '~/lib/api'
import { extractAppsFromEnvironments } from '~/lib/appHelpers'

interface Props extends IEnvironments {
  appId: string | undefined
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
          Apps | {app.name} | {environment.name}
        </title>
      </Head>
      <SideBar appId={appId} apps={apps} activeNav="environments"></SideBar>
      <Content>
        <Heading as="h1" size="lg" marginBottom={5} fontWeight={400} textTransform="capitalize">
          <Link href="/app/[appId]/environments" as={`/app/${app.id}/environments`}>
            <a>{app.name}</a>
          </Link>{' '}
          - {environment.name}
        </Heading>
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
      appId: query.appId as string,
      envId: Number(query.envId),
    },
  }
}
