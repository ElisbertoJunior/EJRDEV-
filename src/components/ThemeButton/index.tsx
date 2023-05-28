import { ButtonContainer } from './styles'

type Props = {
  onClick: () => void
}

const ThemeButton = ({ onClick }: Props) => {
  return <ButtonContainer onClick={onClick}>Trocar</ButtonContainer>
}

export default ThemeButton
