import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware)
  }
})

export type RootReducer = ReturnType<typeof store.getState>
