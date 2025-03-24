import { Project } from '@dmytro-oborskyi/network/src/gql/generated'
import { fetchApi } from './fetchApi'

export const getProjects = async (): Promise<Project[]> =>
  fetchApi({
    endpoint: '/projects',
    method: 'GET',
  })
