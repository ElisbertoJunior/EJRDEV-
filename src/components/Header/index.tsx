import { useState } from 'react'
import logo from '../../assets/images/EJRDEV.png'
import {
  Hamburger,
  HeaderContainer,
  ItemLink,
  Links,
  NavMobile
} from './styles'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="Logo EJRDEV" />
        <nav>
          <Links>
            <li>
              <ItemLink to={'/'}>Início</ItemLink>
            </li>
            <li>
              <ItemLink to={'/projects'}>Projetos</ItemLink>
            </li>
            <li>
              <ItemLink to={'/contact'}>Contato</ItemLink>
            </li>
          </Links>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <div>
              <div />
              <div />
              <div />
            </div>
          </Hamburger>
        </nav>
      </div>

      <NavMobile className={isOpen ? 'is-open' : ''}>
        <Links>
          <li>
            <ItemLink to={'/'}>Início</ItemLink>
          </li>
          <li>
            <ItemLink to={'/projects'}>Projetos</ItemLink>
          </li>
          <li>
            <ItemLink to={'/contact'}>Contato</ItemLink>
          </li>
        </Links>
      </NavMobile>
    </HeaderContainer>
  )
}

export default Header
