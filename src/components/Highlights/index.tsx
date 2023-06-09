import React from 'react'
import SectionTitle from '../SectionTitle'
import Card from '../Card'
import { Container } from './styles'

const Highlights = () => {
  return (
    <div className="conatiner">
      <SectionTitle>Projetos destaque</SectionTitle>
      <Container>
        <Card />
        <Card />
      </Container>
    </div>
  )
}

export default Highlights
