import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  useGetFeaturedProjectsQuery,
  useGetListQuery,
  useRemoveFeaturedProjectMutation,
  useRemoveProjectMutation
} from '../../services/api'
import { clearToken } from '../../store/reducers/authSlice'
import { RootReducer } from '../../store'

import SectionTitle from '../../components/SectionTitle'
import FormProject from '../../components/FormProject'
import FormFeaturedProject from '../../components/FormFeaturedProject'
import Card from '../../components/Card'

import * as S from './styles'

const Admin = () => {
  const dispatch = useDispatch()

  const [removeFeaturedProject] = useRemoveFeaturedProjectMutation()
  const [removeProject] = useRemoveProjectMutation()

  const { isAuthenticated } = useSelector((state: RootReducer) => state.auth)
  const [highlightProject, setHighlightProject] = useState(false)

  const { data } = useGetListQuery()
  const { data: proj } = useGetFeaturedProjectsQuery()

  const handleRemoveProject = async (projectId: string) => {
    console.log(projectId)
    await removeProject(projectId)
  }

  const handleRemoveFeaturedProject = async (projectId: string) => {
    await removeFeaturedProject(projectId)
    console.log(projectId)
  }

  if (!isAuthenticated) return <Navigate to={'/login'} />

  return (
    <>
      {alert('Bem vindo de volta chefe!')}
      <SectionTitle>Gerenciar projetos</SectionTitle>
      <S.FormContainer>
        <div>
          <S.AdminButton
            state={highlightProject ? 'disabled' : 'active'}
            type="button"
            onClick={() => setHighlightProject(false)}
          >
            Novo projeto
          </S.AdminButton>
          <S.AdminButton
            state={highlightProject ? 'active' : 'disabled'}
            type="button"
            onClick={() => setHighlightProject(true)}
          >
            Novo projeto destaque
          </S.AdminButton>
        </div>
        {highlightProject ? <FormProject /> : <FormFeaturedProject />}
        <S.AdminButton
          state="disabled"
          type="button"
          onClick={() => dispatch(clearToken())}
        >
          Logout
        </S.AdminButton>
      </S.FormContainer>

      {highlightProject ? (
        <S.ProjectsContainer>
          {proj &&
            proj.map((project) => (
              <Card
                cardType="admin"
                key={project._id}
                _id={project._id}
                title={project.title}
                description={project.description}
                linkRepos={project.linkRepos}
                linkProject={project.linkProject}
                src={project.src}
                onClick={() => handleRemoveFeaturedProject(project._id)}
              />
            ))}
        </S.ProjectsContainer>
      ) : (
        <S.ProjectsContainer>
          {data &&
            data.map((project) => (
              <Card
                cardType="admin"
                key={project._id}
                _id={project._id}
                title={project.title}
                description={project.description}
                linkRepos={project.linkRepos}
                linkProject={project.linkProject}
                src={project.src}
                onClick={() => {
                  handleRemoveProject(project._id)
                  console.log(project)
                }}
              />
            ))}
        </S.ProjectsContainer>
      )}
    </>
  )
}

export default Admin
