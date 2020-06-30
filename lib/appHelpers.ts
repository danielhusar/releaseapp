import { IApp, IEnvironment } from '~/@types/environment'

export function extractAppsFromEnvironments(environments: IEnvironment[]) {
  return environments.reduce((acc: Record<string, IApp>, environment) => {
    acc[environment.app.id] =
      acc[environment.app.id] ||
      ({
        id: environment.app.id,
        name: environment.app.name,
        environments: [],
      } as IApp)

    acc[environment.app.id].environments.push({
      ...environment,
      last_deployed_at: new Date(environment.last_deployed_at),
      current_build: {
        ...environment.current_build,
        commit_date: new Date(environment.current_build.commit_date),
        created_at: new Date(environment.current_build.created_at),
      },
    })
    return acc
  }, {})
}
