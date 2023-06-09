import Card from '../../components/Card'
import SectionTitle from '../../components/SectionTitle'
import { ProjectsContainer } from './styles'

const Projects = () => {
  return (
    <>
      <SectionTitle marginTop="32px">Projetos</SectionTitle>
      <ProjectsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ProjectsContainer>
    </>
  )
}

export default Projects
