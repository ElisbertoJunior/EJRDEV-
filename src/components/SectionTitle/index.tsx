import { Container } from './styles'

type Props = {
  children: string
}

const SectionTitle = ({ children }: Props) => {
  return (
    <Container>
      <div />
      <h3>{children}</h3>
    </Container>
  )
}

export default SectionTitle
