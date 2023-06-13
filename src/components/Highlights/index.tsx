import React from 'react'
import SectionTitle from '../SectionTitle'
import Card from '../Card'
import { Container } from './styles'
import { useGetFeaturedProjectsQuery } from '../../services/api'

const Highlights = () => {
  const { data, isLoading } = useGetFeaturedProjectsQuery()

  return (
    <div className="conatiner">
      <SectionTitle>Projetos destaque</SectionTitle>
      <Container>
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
      </Container>
    </div>
  )
}

export default Highlights
