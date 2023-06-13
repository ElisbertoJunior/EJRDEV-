import Card from '../../components/Card'
import SectionTitle from '../../components/SectionTitle'
import { ProjectsContainer } from './styles'
import { useGetListQuery } from '../../services/api'

const Projects = () => {
  const { data, isLoading } = useGetListQuery()

  return (
    <>
      <SectionTitle marginTop="32px">Projetos</SectionTitle>
      <ProjectsContainer>
        {data &&
          data.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              linkRepos={project.linkRepos}
              linkProject={project.linkProject}
              src={project.src}
            />
          ))}
      </ProjectsContainer>
    </>
  )
}

export default Projects
