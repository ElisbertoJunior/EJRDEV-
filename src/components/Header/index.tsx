import logo from '../../assets/images/EJRDEV.png'
import { HeaderContainer, ItemLink, Links } from './styles'
const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logo} alt="Logo EJRDEV" />
        <nav>
          <Links>
            <li>
              <ItemLink href="#">Início</ItemLink>
            </li>
            <li>
              <ItemLink href="#">Projetos</ItemLink>
            </li>
            <li>
              <ItemLink href="#">Contato</ItemLink>
            </li>
          </Links>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
