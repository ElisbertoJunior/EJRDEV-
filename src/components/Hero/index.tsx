import heroImage from '../../assets/images/pc.svg'
import git from '../../assets/icons/github (2).png'
import linkedin from '../../assets/icons/likedin.png'
import { HeroContainer, HeroContent, MainButton } from './styles'

import download from '../../assets/icons/donwload.png'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
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
          <MainButton>
            Baixar CV
            <img src={download} />
          </MainButton>
        </a>
      </HeroContent>
      <img src={heroImage} />
    </HeroContainer>
  )
}

export default Hero
