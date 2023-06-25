import { Link } from 'react-router-dom'
import * as S from './styles'
import gitLogo from '../../assets/icons/github (2).png'
import linkedinLogo from '../../assets/icons/likedin.png'
import whattsLogo from '../../assets/icons/whattsicon.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.FooterContainer>
      <div className="container">
        <S.FooterContent>
          <div>
            <nav>
              <h4>Acesso rápido</h4>
              <S.LinkItems>
                <li>
                  <Link to={'/'}>Início</Link>
                </li>
                <li>
                  <Link to={'/projects'}>Prejetos</Link>
                </li>
              </S.LinkItems>
            </nav>
            <nav>
              <h4>Contato</h4>
              <S.LinkItems>
                <li>
                  <a
                    href="https://github.com/ElisbertoJunior"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={gitLogo} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/elisbertojuniordev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedinLogo} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5562992533318"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={whattsLogo} />
                  </a>
                </li>
              </S.LinkItems>
            </nav>
          </div>
          <p>
            {currentYear} - &copy; Elisberto Junior Todos os direitos reservados
          </p>
        </S.FooterContent>
      </div>
    </S.FooterContainer>
  )
}

export default Footer
