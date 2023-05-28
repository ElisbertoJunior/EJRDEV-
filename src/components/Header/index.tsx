import logo from '../../assets/images/EJRDEV.png'
import { HeaderContainer } from './styles'
const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logo} alt="Logo EJRDEV" />
        <nav>
          <ul>
            <li>Início</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
