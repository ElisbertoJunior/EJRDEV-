import { useGetFeaturedProjectsQuery } from '../../services/api'
import SectionTitle from '../SectionTitle'
import Card from '../Card'
import Loader from '../Loader'
import { Container } from './styles'

const Highlights = () => {
  const { data, isLoading } = useGetFeaturedProjectsQuery()

  if (isLoading) {
    return (
      <>
        <SectionTitle>Projetos destaque</SectionTitle>
        <Loader />
      </>
    )
  }

  return (
    <div className="conatiner">
      <SectionTitle>Projetos destaque</SectionTitle>
      <Container>
        {data &&
          data.map((project) => (
            <Card
              cardType="user"
              key={project._id}
              _id={project._id}
              title={project.title}
              description={project.description}
              linkRepos={project.linkRepos}
              linkProject={project.linkProject}
              src={project.src}
            />
          ))}
      </Container>
    </div>
  )
}

export default Highlights
