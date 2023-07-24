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
          Sou um desenvolvedor Full-Stack com experiência em Java e Spring no
          back-end, e React com TypeScript no front-end. Tenho conhecimentos
          sólidos em bancos de dados SQL. Estou em constante aprendizado e me
          atualizando com as principais tecnologias do mercado. Tenho paixão por
          criar soluções robustas, escaláveis e proporcionar experiências
          excepcionais aos usuários. Estou pronto para enfrentar desafios e
          contribuir para projetos inovadores, utilizando minhas habilidades e
          vontade de aprender para atingir resultados de qualidade.
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
        <a href="https://drive.google.com/u/0/uc?id=1akw5FntDJSluhJvpqiVDF-RPpcoJ1it5&export=download">
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
