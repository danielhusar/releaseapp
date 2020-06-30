import React from 'react'
import { Grid } from '@chakra-ui/core'
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
      <ResponsiveGrid templateColumns="1fr 1fr" gap="30px">
        <EnvironmentInfo {...props} />
        <EnvironmentBuild {...props} />
      </ResponsiveGrid>
      <Spacer size={3} />
      <EnvironmentHostnames {...props} />
    </>
  )
}
