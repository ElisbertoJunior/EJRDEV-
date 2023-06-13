import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { FormContainer } from './styles'

interface FormObject {
  username: string
  password: string
}

const Login = () => {
  const [form, setForm] = useState<FormObject>({ username: '', password: '' })

  return (
    <FormContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(form)
        }}
      >
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
