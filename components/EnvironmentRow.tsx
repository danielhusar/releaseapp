import React from 'react'
import Link from 'next/link'
import { Button, Badge } from '@chakra-ui/core'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { IEnvironment } from '~/@types/environment'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

export default function EnvironmentRow({ id, name, last_deployed_at, aasm_state, current_build, app }: IEnvironment) {
  return (
    <tr key={id}>
      <td>
        <Link href="/app/[appId]/environment/[envId]" as={`/app/${app.id}/environment/${id}`}>
          <a>{name}</a>
        </Link>
      </td>
      <td>
        <Badge variant="solid" variantColor={aasm_state === 'done' ? 'green' : 'red'}>
          {aasm_state}
        </Badge>
      </td>
      <td>{timeAgo.format(last_deployed_at)}</td>
      <td>{current_build.id}</td>
      <td>
        <a
          href={`https://${current_build.source_control}/${current_build.repository_full_name}/commit/${current_build.commit_long}`}
          target="_blank"
          rel="noreferrer"
        >
          {current_build.commit_short}
        </a>
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
