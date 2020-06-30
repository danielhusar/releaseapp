import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Select } from '@chakra-ui/core'
import styled, { css } from './Styled'
import Spacer from './Spacer'
import { IApps } from '~/@types/environment'

interface SideBarProps {
  appId: string
  apps: IApps
  activeNav: 'environments'
}

const Nav = styled.nav`
  width: 300px;
  background: #0f0f0f;
  color: white;
  height: 100vh;
  grid-column: sidebar;
  padding: 30px;
  overflow: scroll;
`

const NavLink = styled.a<{ active: boolean }>`
  display: block;
  padding: 10px;
  width: 100%;
  color: #fff;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 45px 1fr;
  align-items: center;

  svg {
    width: 30px;
    fill: currentColor;
  }

  &:hover {
    background-color: rgba(200, 200, 200, 0.2);
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #284274;

      &:hover {
        background-color: #284274;
      }
    `}
`

export default function SideBar({ apps, appId, activeNav }: SideBarProps) {
  const router = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.push('/app/[appId]/environments', `/app/${e.target.value}/environments`)
  }

  return (
    <Nav>
      <img src="https://app.releaseapp.io/static/media/logo-large.e6fe72c6.svg" alt="logo" width="130" />
      <Spacer size={3} />
      <Select defaultValue={appId} variant="flushed" onChange={handleChange}>
        {Object.keys(apps).map((appKey: unknown) => {
          const app = apps[appKey as number]
          return (
            <option key={app.id} value={app.id}>
              {app.name}
            </option>
          )
        })}
      </Select>
      <Spacer size={3} />
      <Link href="/app/[appId]/environments" as={`/app/${appId}/environments`}>
        <NavLink href={`/app/${appId}/environments`} active={activeNav === 'environments'}>
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path>
          </svg>
          Environments
        </NavLink>
      </Link>
    </Nav>
  )
}
