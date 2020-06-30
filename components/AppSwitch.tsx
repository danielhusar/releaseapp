import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Select } from '@chakra-ui/core'
import styled, { css } from './Styled'
import Spacer from './Spacer'
import { IApps } from '~/@types/environment'

interface SideBarProps {
  appId: number
  apps: IApps
  activeNav: 'environments'
}

const Wrap = styled.div`
  display: inline-block;
  width: auto;

  select {
    width: auto;
  }
`

export default function AppSwitch({ apps, appId }: SideBarProps) {
  const router = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.push('/app/[appId]/environments', `/app/${e.target.value}/environments`)
  }

  return (
    <Wrap>
      <Select defaultValue={appId} variant="flushed" onChange={handleChange} data-testid="select">
        {Object.keys(apps).map((appKey) => {
          const app = apps[appKey]
          return (
            <option key={app.id} value={app.id}>
              {app.name}
            </option>
          )
        })}
      </Select>
    </Wrap>
  )
}
