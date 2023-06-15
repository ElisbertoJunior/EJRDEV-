import { useDispatch, useSelector } from 'react-redux'
import SectionTitle from '../../components/SectionTitle'
import { clearToken } from '../../store/reducers/authSlice'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'
import { AdminButton, FormContainer } from './styles'
import { useState } from 'react'
import { useAddProjectMutation } from '../../services/api'

type NewProjectFormData = {
  title: string
  description: string
  linkRepos: string
  linkProject: string
  file: File | null
}

const Admin = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state: RootReducer) => state.auth)
  const [highlightProject, setHighlightProject] = useState(false)
  const [projectForm, setProjectForm] = useState<NewProjectFormData>({
    title: '',
    description: '',
    linkRepos: '',
    linkProject: '',
    file: null
  })

  const [addProject, { isLoading }] = useAddProjectMutation()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setProjectForm((prevForm) => ({
      ...prevForm,
      file
    }))
  }

  const handSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!projectForm.file) {
      alert('Por favor, selecione uma imagem para upload.')
      return
    }

    const formData = new FormData()
    formData.append('title', projectForm.title)
    formData.append('description', projectForm.description)
    formData.append('linkRepos', projectForm.linkRepos)
    formData.append('linkProject', projectForm.linkProject)
    formData.append('file', projectForm.file)

    try {
      const result = await addProject(formData)
      console.log(result)
      // ...
    } catch (error) {
      console.error('Erro de autenticação:', error)
    }
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
        {highlightProject ? (
          <form encType="multipart/form-data" onSubmit={handSubmit}>
            <SectionTitle>
              Adicionar a lista de projetos em destaque
            </SectionTitle>
            <input
              type="text"
              placeholder="Titulo"
              name="title"
              value={projectForm.title}
              onChange={(e) =>
                setProjectForm((prevForm) => ({
                  ...prevForm,
                  title: e.target.value
                }))
              }
            />
            <textarea
              placeholder="Descrição"
              name="description"
              value={projectForm.description}
              onChange={(e) =>
                setProjectForm((prevForm) => ({
                  ...prevForm,
                  description: e.target.value
                }))
              }
            />
            <input
              type="text"
              placeholder="link para o repositório"
              name="linkRepos"
              value={projectForm.linkRepos}
              onChange={(e) =>
                setProjectForm((prevForm) => ({
                  ...prevForm,
                  linkRepos: e.target.value
                }))
              }
            />
            <input
              type="text"
              placeholder="link para teste do projeto"
              name="linkProject"
              value={projectForm.linkProject}
              onChange={(e) =>
                setProjectForm((prevForm) => ({
                  ...prevForm,
                  linkProject: e.target.value
                }))
              }
            />
            <input
              className="input-file"
              type="file"
              placeholder="Imagem para capa do rojeto"
              name="file"
              onChange={handleFileChange}
            />
            <button type="submit">Adicionar</button>
          </form>
        ) : (
          <form encType="multipart/form-data" onSubmit={handSubmit}>
            <SectionTitle>Adicionar a lista de projetos</SectionTitle>
            <input
              type="text"
              placeholder="Titulo"
              name="title"
              value={projectForm.title}
              onChange={(e) =>
                setProjectForm((prevForm) => ({
                  ...prevForm,
                  title: e.target.value
                }))
              }
            />
            <textarea
              placeholder="Descrição"
              name="description"
              value={projectForm.description}
              onChange={(e) =>
                setProjectForm((prevForm) => ({
                  ...prevForm,
                  description: e.target.value
                }))
              }
            />
            <input
              type="text"
              placeholder="link para o repositório"
              name="linkRepos"
              value={projectForm.linkRepos}
              onChange={(e) =>
                setProjectForm((prevForm) => ({
                  ...prevForm,
                  linkRepos: e.target.value
                }))
              }
            />
            <input
              type="text"
              placeholder="link para teste do projeto"
              name="linkProject"
              value={projectForm.linkProject}
              onChange={(e) =>
                setProjectForm((prevForm) => ({
                  ...prevForm,
                  linkProject: e.target.value
                }))
              }
            />
            <input
              className="input-file"
              type="file"
              placeholder="Imagem para capa do rojeto"
              name="src"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button type="submit">Adicionar</button>
          </form>
        )}
        <AdminButton
          state="disabled"
          type="button"
          onClick={() => dispatch(clearToken())}
        >
          Logout
        </AdminButton>
      </FormContainer>
    </>
  )
}

export default Admin
