import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle'
import { clearToken } from '../../store/reducers/authSlice'
import { RootReducer } from '../../store'
import { AdminButton, FormContainer, ProjectsContainer } from './styles'
import { useState } from 'react'

import FormProject from '../../components/FormProject'
import FormFeaturedProject from '../../components/FormFeaturedProject'
import {
  useGetFeaturedProjectsQuery,
  useGetListQuery,
  useRemoveFeaturedProjectMutation,
  useRemoveProjectMutation
} from '../../services/api'
import Card from '../../components/Card'

const Admin = () => {
  const dispatch = useDispatch()

  const [removeFeaturedProject] = useRemoveFeaturedProjectMutation()
  const [removeProject] = useRemoveProjectMutation()

  const { isAuthenticated } = useSelector((state: RootReducer) => state.auth)
  const [highlightProject, setHighlightProject] = useState(false)

  const { data, isLoading } = useGetListQuery()
  const { data: proj, isLoading: loading } = useGetFeaturedProjectsQuery()

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
      {/* {alert('Bem vindo de volta chefe!')} */}
      <SectionTitle>Gerenciar projetos</SectionTitle>
      <FormContainer>
        <div>
          <AdminButton
            state={highlightProject ? 'disabled' : 'active'}
            type="button"
            onClick={() => setHighlightProject(false)}
          >
            Novo projeto
          </AdminButton>
          <AdminButton
            state={highlightProject ? 'active' : 'disabled'}
            type="button"
            onClick={() => setHighlightProject(true)}
          >
            Novo projeto destaque
          </AdminButton>
        </div>
        {highlightProject ? <FormProject /> : <FormFeaturedProject />}
        <AdminButton
          state="disabled"
          type="button"
          onClick={() => dispatch(clearToken())}
        >
          Logout
        </AdminButton>
      </FormContainer>

      {highlightProject ? (
        <ProjectsContainer>
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
        </ProjectsContainer>
      ) : (
        <ProjectsContainer>
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
        </ProjectsContainer>
      )}
    </>
  )
}

export default Admin
