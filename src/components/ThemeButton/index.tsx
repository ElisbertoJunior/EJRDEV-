import { ButtonContainer } from './styles'

type Props = {
  onClick: () => void
  children: JSX.Element
}

const ThemeButton = ({ onClick, children }: Props) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}

export default ThemeButton
