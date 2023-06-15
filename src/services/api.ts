import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchasePayload = {
  username: string
  password: string
}

type PurchaseResponse = {
  token: string
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
    }),
    // eslint-disable-next-line prettier/prettier
    addProject: builder.mutation<{ msg: string }, FormData>({
      query: (body) => ({
        url: 'api/projects',
        method: 'POST',
        body
      })
    }),
    // eslint-disable-next-line prettier/prettier
    addFeaturedProject: builder.mutation<{ msg: string }, Partial<PurchasePayloadProject>>({
      query: (body) => ({
        url: 'api/destaques',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetListQuery,
  useGetFeaturedProjectsQuery,
  useLoginMutation,
  useAddProjectMutation,
  useAddFeaturedProjectMutation
} = api

export default api
