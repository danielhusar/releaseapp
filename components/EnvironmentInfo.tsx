import React from 'react'
import { Heading, Box } from '@chakra-ui/core'
import Table from './Table'
import BuildUrl from './BuildUrl'
import { IEnvironment } from '~/@types/environment'

export default function EnvironmentInfo({ namespace, mode, version, name, current_build }: IEnvironment) {
  return (
    <Box
      p="6"
      borderWidth="1px"
      background="white"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      data-testid="environment-info"
    >
      <Heading size="md" fontWeight={400} marginBottom={5}>
        Info
      </Heading>

      <Table slim={true}>
        <tr>
          <td>
            <b>Name</b> - {name}
          </td>
        </tr>
        <tr>
          <td>
            <b>Namespace</b> - {namespace}
          </td>
        </tr>
        <tr>
          <td>
            <b>Mode</b> - {mode}
          </td>
        </tr>
        <tr>
          <td>
            <b>Config Version</b> - {version}
          </td>
        </tr>

        <tr>
          <td>
            <b>Deployed Build</b> - {current_build.id}
          </td>
        </tr>
        <tr>
          <td>
            <b>Deployed Commit SHA</b> - <BuildUrl {...current_build} />
          </td>
        </tr>
      </Table>
    </Box>
  )
}
