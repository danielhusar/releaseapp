import React from 'react'
import { Grid } from '@chakra-ui/core'
import Environment, { IEnvironment } from './Environment'

export interface IEnvironments {
  environments: IEnvironment[]
}

export default function Environments({ environments }: IEnvironments) {
  return (
    <>
      <h1>Environments</h1>
      <Grid templateColumns="repeat(auto-fill,minmax(250px,1fr))" gap={5}>
        {environments.map((environment) => (
          <Environment {...environment} key={environment.id} />
        ))}
      </Grid>
    </>
  )
}
