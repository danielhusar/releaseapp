import React from 'react'
import { IEnvironment } from '~/@types/environment'

export default function BuildUrl({
  source_control,
  repository_full_name,
  commit_long,
  commit_short,
}: IEnvironment['current_build']) {
  return (
    <a
      href={`https://${source_control}/${repository_full_name}/commit/${commit_long}`}
      target="_blank"
      rel="noreferrer"
    >
      {commit_short}
    </a>
  )
}
