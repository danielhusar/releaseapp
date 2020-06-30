import React from 'react'
import Link from 'next/link'
import { Grid, Heading } from '@chakra-ui/core'
import EnvironmentInfo from './EnvironmentInfo'
import EnvironmentHostnames from './EnvironmentHostnames'
import EnvironmentBuild from './EnvironmentBuild'
import Spacer from './Spacer'
import styled from './Styled'
import { IEnvironment } from '~/@types/environment'

const ResponsiveGrid = styled(Grid)`
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

export default function EnvironmentDetail(props: IEnvironment) {
  return (
    <>
      <Heading size="md" fontWeight={400} marginBottom={5}>
        <Link href="/app/[appId]/environments" as={`/app/${props.app.id}/environments`}>
          <a>Environments</a>
        </Link>{' '}
        - {props.name}
      </Heading>

      <ResponsiveGrid templateColumns="1fr 1fr" gap="30px">
        <EnvironmentInfo {...props} />
        <EnvironmentBuild {...props} />
      </ResponsiveGrid>
      <Spacer size={3} />
      <EnvironmentHostnames {...props} />
    </>
  )
}
