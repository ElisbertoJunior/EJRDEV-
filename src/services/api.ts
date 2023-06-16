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
    baseUrl: 'https://api-ejrdev.onrender.com/'
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
        url: 'api/destaques',
        method: 'POST',
        body
      })
    }),
    // eslint-disable-next-line prettier/prettier
    addFeaturedProject: builder.mutation<{ msg: string }, FormData>({
      query: (body) => ({
        url: 'api/projects',
        method: 'POST',
        body
      })
    }),
    removeProject: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `api/projects/${id}`,
        method: 'DELETE'
      })
    }),
    removeFeaturedProject: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `api/destaques/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useGetListQuery,
  useGetFeaturedProjectsQuery,
  useLoginMutation,
  useAddProjectMutation,
  useAddFeaturedProjectMutation,
  useRemoveProjectMutation,
  useRemoveFeaturedProjectMutation
} = api

export default api
