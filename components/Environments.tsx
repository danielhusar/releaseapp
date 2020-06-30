import React from 'react'
import { Heading, Grid } from '@chakra-ui/core'
import EnvironmentItem from './EnvironmentItem'
import { IEnvironment } from '~/@types/environment'

export interface IEnvironments {
  environments: IEnvironment[]
}

export default function Environments({ environments }: IEnvironments) {
  return (
    <>
      <Heading size="md" fontWeight={400} marginBottom={5}>
        Environments
      </Heading>

      <Grid templateColumns="repeat(auto-fill,minmax(250px,1fr))" gap={5}>
        {environments.map((environment) => (
          <EnvironmentItem {...environment} key={environment.id} />
        ))}
      </Grid>
    </>
  )
}
