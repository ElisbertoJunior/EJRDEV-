import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useLoginMutation } from '../../services/api'

import SectionTitle from '../../components/SectionTitle'
import { setToken } from '../../store/reducers/authSlice'

import { FormContainer } from './styles'

interface FormObject {
  username: string
  password: string
}

const Login = () => {
  const [login] = useLoginMutation()
  const { isAuthenticated } = useSelector((state: RootReducer) => state.auth)
  const dispatch = useDispatch()

  const [form, setForm] = useState<FormObject>({ username: '', password: '' })
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await login(form)

      console.log(form)

      if ('data' in result && result.data.token) {
        const token = result.data.token
        localStorage.setItem('token', token)
        dispatch(setToken(token))
      }
    } catch (error) {
      console.error('Erro de autenticação:', error)
    }
  }

  if (isAuthenticated) return <Navigate to={'/admin'} />

  return (
    <FormContainer>
      <form onSubmit={handleLogin}>
        <SectionTitle marginTop="40px">Login</SectionTitle>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={form.username}
          onChange={(e) =>
            setForm((prevForm) => ({ ...prevForm, username: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={form.password}
          onChange={(e) =>
            setForm((prevForm) => ({ ...prevForm, password: e.target.value }))
          }
        />
        <button type="submit">Entrar</button>
      </form>
    </FormContainer>
  )
}

export default Login
