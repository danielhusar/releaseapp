export interface IOwner {
  id: number
  email: string
  provider: string | null
  uid: string | null
  name: string
  avatar_url: string
}

export interface IHostName {
  hostname: string
  target: string
  hostname_with_params: string
  type?: string
}

export interface IBuild {
  id: number
  name: string
  branch: string
  status: 'done' | 'errored'
  builder: string
  message: string | null
  created_at: Date
  repository_name: string
  repository_id: number
  repository_full_name: string
  source_control: string
  commit_long: string
  commit_short: string
  commit_email: string
  commit_date: Date
  commit_message: string
  artifacts: unknown
  url: string
}

export interface IEnvironment {
  id: number
  name: string
  version: number
  aasm_state: 'done' | 'errored'
  permanent: boolean
  tracking_branch: string
  last_deployed_at: Date
  pr_title: string | null
  owner?: IOwner | null
  namespace: string
  mode: 'development' | 'production'
  hostnames: IHostName[]
  current_build: IBuild
  pull_request_url: string | null
  app: {
    id: number
    name: string
  }
}

export interface IApp {
  id: number
  name: string
  environments: IEnvironment[]
}

export type IApps = Record<string, IApp>
