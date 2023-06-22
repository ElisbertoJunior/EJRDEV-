import { useState } from 'react'
import logo from '../../assets/images/EJRDEV.png'
import login from '../../assets/images/login.png'
import * as S from './styles'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.HeaderContainer>
      <div className="container">
        <img src={logo} alt="Logo EJRDEV" />
        <nav>
          <S.Links>
            <li>
              <S.ItemLink to={'/'}>Início</S.ItemLink>
            </li>
            <li>
              <S.ItemLink to={'/projects'}>Projetos</S.ItemLink>
            </li>
            <li>
              <S.ItemLink to={'/contact'}>Contato</S.ItemLink>
            </li>
            <li>
              <S.ItemLink to={'/login'}>
                <img src={login} alt="Icone de login" />
              </S.ItemLink>
            </li>
          </S.Links>
          <S.Hamburger onClick={() => setIsOpen(!isOpen)}>
            <div>
              <div />
              <div />
              <div />
            </div>
          </S.Hamburger>
        </nav>
      </div>

      <S.NavMobile className={isOpen ? 'is-open' : ''}>
        <S.Links>
          <li>
            <S.ItemLink onClick={() => setIsOpen(false)} to={'/'}>
              Início
            </S.ItemLink>
          </li>
          <li>
            <S.ItemLink onClick={() => setIsOpen(false)} to={'/projects'}>
              Projetos
            </S.ItemLink>
          </li>
          <li>
            <S.ItemLink onClick={() => setIsOpen(false)} to={'/contact'}>
              Contato
            </S.ItemLink>
          </li>
        </S.Links>
      </S.NavMobile>
    </S.HeaderContainer>
  )
}

export default Header
