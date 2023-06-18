import React from 'react'
import SectionTitle from '../SectionTitle'
import Card from '../Card'
import { Container } from './styles'
import { useGetFeaturedProjectsQuery } from '../../services/api'
import Loader from '../Loader'

const Highlights = () => {
  const { data, isLoading } = useGetFeaturedProjectsQuery()

  if (isLoading) return <Loader />

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
