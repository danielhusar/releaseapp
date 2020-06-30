import React from 'react'
import EnvironmentInfo from './EnvironmentInfo'
import EnvironmentHostnames from './EnvironmentHostnames'
import EnvironmentBuild from './EnvironmentBuild'
import Spacer from './Spacer'
import { IEnvironment } from '~/@types/environment'

export default function EnvironmentDetail(props: IEnvironment) {
  return (
    <>
      <EnvironmentInfo {...props} />
      <Spacer size={4} />
      <EnvironmentHostnames {...props} />
      <Spacer size={4} />
      <EnvironmentBuild {...props} />
    </>
  )
}
