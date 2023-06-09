import { Container } from './styles'

type Props = {
  children: string
  marginTop?: string
}

const SectionTitle = ({ children, marginTop }: Props) => {
  return (
    <Container marginTop={marginTop}>
      <div />
      <h3>{children}</h3>
    </Container>
  )
}

export default SectionTitle
