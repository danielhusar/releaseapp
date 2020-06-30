import React from 'react'
import { Box, Heading } from '@chakra-ui/core'
import Table from './Table'
import EnvironmentRow from './EnvironmentRow'
import { IEnvironment } from '~/@types/environment'

export interface IEnvironments {
  environments: IEnvironment[]
}

export default function Environments({ environments }: IEnvironments) {
  return (
    <Box
      p="6"
      borderWidth="1px"
      background="white"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      data-testid="environment"
    >
      <Heading size="md" fontWeight={400} marginBottom={5}>
        Environments
      </Heading>

      <Table head={['Name', 'Status', 'Date', 'Build', 'Commit SHA', 'Actions']}>
        {environments.map((environment) => (
          <EnvironmentRow {...environment} key={environment.id} />
        ))}
      </Table>
    </Box>
  )
}
