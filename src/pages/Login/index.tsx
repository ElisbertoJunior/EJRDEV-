import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { FormContainer } from './styles'
import { useLoginMutation } from '../../services/api'
import { setToken } from '../../store/reducers/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'

interface FormObject {
  username: string
  password: string
}

const Login = () => {
  const [login, { isLoading, isError }] = useLoginMutation()
  const { isAuthenticated } = useSelector((state: RootReducer) => state.auth)
  const dispatch = useDispatch()

  const [form, setForm] = useState<FormObject>({ username: '', password: '' })
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await login(form)

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
