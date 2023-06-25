import { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { useAddFeaturedProjectMutation } from '../../services/api'

const FormFeaturedProject = () => {
  const [addFeaturedProject] = useAddFeaturedProjectMutation()
  const [projectFeaturedForm, setProjectFeaturedForm] =
    useState<NewProjectFormData>({
      title: '',
      description: '',
      linkRepos: '',
      linkProject: '',
      file: null
    })

  const handleFileFeaturedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setProjectFeaturedForm((prevForm) => ({
      ...prevForm,
      file
    }))
  }

  const handSubmitFeatured = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!projectFeaturedForm.file) {
      alert('Por favor, selecione uma imagem para upload.')
      return
    }

    const formData = new FormData()
    formData.append('title', projectFeaturedForm.title)
    formData.append('description', projectFeaturedForm.description)
    formData.append('linkRepos', projectFeaturedForm.linkRepos)
    formData.append('linkProject', projectFeaturedForm.linkProject)
    formData.append('file', projectFeaturedForm.file)

    try {
      await addFeaturedProject(formData)

      projectFeaturedForm.title = ''
      projectFeaturedForm.description = ''
      projectFeaturedForm.linkRepos = ''
      projectFeaturedForm.linkProject = ''
      projectFeaturedForm.file = null

      alert('Projeto adicionado com sucesso!')
    } catch (error) {
      console.error('Erro ao adicionar projeto:', error)
    }
  }

  return (
    <form encType="multipart/form-data" onSubmit={handSubmitFeatured}>
      <SectionTitle>Adicionar a lista de projetos</SectionTitle>
      <input
        type="text"
        placeholder="Titulo"
        name="title"
        value={projectFeaturedForm.title}
        onChange={(e) =>
          setProjectFeaturedForm((prevForm) => ({
            ...prevForm,
            title: e.target.value
          }))
        }
      />
      <textarea
        placeholder="Descrição"
        name="description"
        value={projectFeaturedForm.description}
        onChange={(e) =>
          setProjectFeaturedForm((prevForm) => ({
            ...prevForm,
            description: e.target.value
          }))
        }
      />
      <input
        type="text"
        placeholder="link para o repositório"
        name="linkRepos"
        value={projectFeaturedForm.linkRepos}
        onChange={(e) =>
          setProjectFeaturedForm((prevForm) => ({
            ...prevForm,
            linkRepos: e.target.value
          }))
        }
      />
      <input
        type="text"
        placeholder="link para teste do projeto"
        name="linkProject"
        value={projectFeaturedForm.linkProject}
        onChange={(e) =>
          setProjectFeaturedForm((prevForm) => ({
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
        onChange={handleFileFeaturedChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default FormFeaturedProject
