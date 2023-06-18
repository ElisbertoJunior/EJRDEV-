import { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { useAddProjectMutation } from '../../services/api'

const FormProject = () => {
  const [addProject, { isLoading }] = useAddProjectMutation()

  const [projectForm, setProjectForm] = useState<NewProjectFormData>({
    title: '',
    description: '',
    linkRepos: '',
    linkProject: '',
    file: null
  })

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
      await addProject(formData)

      projectForm.title = ''
      projectForm.description = ''
      projectForm.linkRepos = ''
      projectForm.linkProject = ''
      projectForm.file = null

      alert('Projeto adicionado com sucesso!')
    } catch (error) {
      console.error('Erro ao adicionar projeto:', error)
    }
  }

  return (
    <form encType="multipart/form-data" onSubmit={handSubmit}>
      <SectionTitle>Adicionar a lista de projetos em destaque</SectionTitle>
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
  )
}

export default FormProject
