import React from 'react'
import Link from 'next/link'
import { Button, Badge, Stack, Avatar } from '@chakra-ui/core'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import BuildUrl from './BuildUrl'
import { IEnvironment } from '~/@types/environment'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

export default function EnvironmentRow({
  id,
  name,
  last_deployed_at,
  aasm_state,
  current_build,
  app,
  owner,
}: IEnvironment) {
  return (
    <tr key={id}>
      <td>
        <Stack isInline align="center" spacing={4}>
          {owner ? <Avatar src={owner.avatar_url} size="sm" name={owner.name} /> : <Avatar size="sm" />}
          <span>
            <Link href="/app/[appId]/environment/[envId]" as={`/app/${app.id}/environment/${id}`}>
              <a>{name}</a>
            </Link>
          </span>
        </Stack>
      </td>
      <td>
        <Badge variant="solid" variantColor={aasm_state === 'done' ? 'green' : 'red'}>
          {aasm_state}
        </Badge>
      </td>
      <td>{timeAgo.format(last_deployed_at)}</td>
      <td>{current_build.id}</td>
      <td>
        <BuildUrl {...current_build} />
      </td>
      <td>
        <Link href="/app/[appId]/environment/[envId]" as={`/app/${app.id}/environment/${id}`}>
          <a>
            <Button variantColor="blue">View</Button>
          </a>
        </Link>
      </td>
    </tr>
  )
}
