import React from 'react'
import { Heading, Box } from '@chakra-ui/core'
import Table from './Table'
import { IEnvironment } from '~/@types/environment'

export default function EnvironmentHostnames({ hostnames }: IEnvironment) {
  return (
    <Box
      p="6"
      borderWidth="1px"
      background="white"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      data-testid="environment-hostnames"
    >
      <Heading size="md" fontWeight={400} marginBottom={5}>
        Hostnames
      </Heading>

      <Table slim={true}>
        {hostnames.map((hostname) => (
          <tr key={hostname.hostname}>
            <td>
              <b>{hostname.target}</b> -{' '}
              <a href={`https://${hostname.hostname_with_params}`} target="_blank" rel="noreferrer">
                {hostname.hostname}
              </a>
            </td>
          </tr>
        ))}
      </Table>
    </Box>
  )
}
