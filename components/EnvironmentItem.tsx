import React from 'react'
import Link from 'next/link'
import { Avatar, Box } from '@chakra-ui/core'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import styled from './Styled'
import { IEnvironment } from '~/@types/environment'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const AvatarStyled = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const Name = styled.div`
  &::first-letter {
    text-transform: uppercase;
  }
`

const Heading = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 10px;
`

const Deploy = styled.div``

const Hostnames = styled.div`
  a + a {
    margin-left: 5px;
  }
`

export default function EnvironmentItem({
  id,
  name,
  last_deployed_at,
  aasm_state,
  app,
  owner,
  hostnames,
}: IEnvironment) {
  return (
    <Box
      p="4"
      borderWidth="1px"
      background="white"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      position="relative"
      fontSize="14px"
      borderBottomWidth="3px"
      borderBottomColor={aasm_state === 'done' ? '#42bb3f' : '#ff6363'}
    >
      <AvatarStyled>
        {owner ? <Avatar src={owner.avatar_url} size="xs" name={owner.name} /> : <Avatar size="xs" />}
      </AvatarStyled>

      <Name>
        <Link href="/app/[appId]/environment/[envId]" as={`/app/${app.id}/environment/${id}`}>
          <a>{name}</a>
        </Link>
      </Name>

      <Heading>Last deploy</Heading>
      <Deploy>{timeAgo.format(last_deployed_at)}</Deploy>

      <Heading>Hostnames</Heading>
      <Hostnames>
        {hostnames.map((hostname) => (
          <a key={hostname.hostname} href={`https://${hostname.hostname_with_params}`} target="_blank" rel="noreferrer">
            {hostname.target}
          </a>
        ))}
      </Hostnames>
    </Box>
  )
}
