import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Project = {
  id: string
  title: string
  description: string
  linkRepos: string
  linkProject: string
  src: string
}

type PurchasePayload = {
  username: string
  password: string
}

type PurchaseResponse = {
  token: string
  user: {
    username: string
    passwordAndUserMatch: boolean
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getList: builder.query<Project[], void>({
      query: () => 'api/projects'
    }),
    getFeaturedProjects: builder.query<Project[], void>({
      query: () => 'api/destaques'
    }),
    login: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'user/login',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetListQuery,
  useGetFeaturedProjectsQuery,
  useLoginMutation
} = api

export default api
