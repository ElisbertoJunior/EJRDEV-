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
      <div className="container">
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
            <ItemLink onClick={() => setIsOpen(false)} to={'/'}>
              Início
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={() => setIsOpen(false)} to={'/projects'}>
              Projetos
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={() => setIsOpen(false)} to={'/contact'}>
              Contato
            </ItemLink>
          </li>
        </Links>
      </NavMobile>
    </HeaderContainer>
  )
}

export default Header
