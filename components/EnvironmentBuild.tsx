import React from 'react'
import { Heading, Box, Badge } from '@chakra-ui/core'
import Table from './Table'
import { IEnvironment } from '~/@types/environment'

const dateTimeFormat = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Los_Angeles',
  timeZoneName: 'short',
})

export default function EnvironmentBuild({ aasm_state, last_deployed_at, current_build }: IEnvironment) {
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
        Build
      </Heading>

      <Table slim={true}>
        <tr>
          <td>
            <b>Status</b> -{' '}
            <Badge variant="solid" variantColor={aasm_state === 'done' ? 'green' : 'red'}>
              {aasm_state}
            </Badge>
          </td>
        </tr>
        <tr>
          <td>
            <b>Created at</b> - {dateTimeFormat.format(current_build.created_at)}
          </td>
        </tr>
        <tr>
          <td>
            <b>Deployed at</b> - {dateTimeFormat.format(last_deployed_at)}
          </td>
        </tr>
        <tr>
          <td>
            <b>Branch</b> - {current_build.branch}
          </td>
        </tr>
        <tr>
          <td>
            <b>Commiter</b> - {current_build.commit_email}
          </td>
        </tr>
        <tr>
          <td>
            <b>Commit message</b> - {current_build.commit_message}
          </td>
        </tr>
      </Table>
    </Box>
  )
}
