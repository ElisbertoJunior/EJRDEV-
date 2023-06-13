import { useDispatch, useSelector } from 'react-redux'
import SectionTitle from '../../components/SectionTitle'
import { clearToken } from '../../store/reducers/authSlice'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'

const Admin = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state: RootReducer) => state.auth)

  if (!isAuthenticated) return <Navigate to={'/login'} />

  return (
    <>
      {alert('Bem vindo de volta chefe!')}
      <SectionTitle>Gerenciar projetos</SectionTitle>
      <button type="button" onClick={() => dispatch(clearToken())}>
        Logout
      </button>
    </>
  )
}

export default Admin
