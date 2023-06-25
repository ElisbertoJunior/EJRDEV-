import heroImage from '../../assets/images/pc.svg'
import git from '../../assets/icons/github (2).png'
import linkedin from '../../assets/icons/likedin.png'
import download from '../../assets/icons/donwload.png'

import * as S from './styles'

const Hero = () => {
  return (
    <S.HeroContainer>
      <S.HeroContent>
        <h2>
          Olá, eu sou Elisberto <span>Junior</span>!
        </h2>
        <h3>
          Desenvolvedor <span>Full-stack.</span>
        </h3>
        <p>
          Desenvolvedor Full-Stack especializado na stack MERN, com proficiência
          em Redux e TypeScript. Conhecimento atualizado das principais
          tecnologias do mercado. Apaixonado por criar soluções robustas e
          escaláveis, focadas em proporcionar experiências excepcionais aos
          usuários. Pronto para enfrentar desafios e contribuir para projetos
          inovadores.
        </p>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://github.com/ElisbertoJunior"
              rel="noreferrer"
            >
              <img src={git} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/elisbertojuniordev/"
              rel="noreferrer"
            >
              <img src={linkedin} />
            </a>
          </li>
        </ul>
        <a href="https://drive.google.com/u/0/uc?id=1fvNkvMXqlnmckd1ylnwvKHicM4WLLFMR&export=download">
          <S.MainButton>
            Baixar CV
            <img src={download} />
          </S.MainButton>
        </a>
      </S.HeroContent>
      <img src={heroImage} />
    </S.HeroContainer>
  )
}

export default Hero
