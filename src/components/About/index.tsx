import SectionTitle from '../SectionTitle'
import { AboutContainer, AboutContent } from './styles'
import profileImage from '../../assets/images/perfil.png'
import gitHubIcon from '../../assets/icons/github (2).png'
import linkedinIcon from '../../assets/icons/likedin.png'

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>Sobre</SectionTitle>
      <AboutContent>
        <img src={profileImage} alt="Foto de perfil Elisberto Junior" />
        <div>
          <p>
            Desenvolvedor de Software, iniciando no desenvolvimento em 2021, me
            considero entusiasta em novas tecnologias e adquirindo conhecimento
            dia após dia.
            <br />
            <br />
            Meu foco de desenvolvimento e com JavaScript, TypeScript, NodeJS,
            React dentre outras tecnologias que uso no meu dia a dia.
            <br />
            <br />
            Sou ágil e consistente em aprender qualquer tecnologia e alta
            adaptabilidade às mudanças, pronto para encarar qualquer desafio! Se
            eu pudesse me definir em 3 palavras, certamente seriam: focado,
            perseverante e esforçado!
          </p>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://github.com/ElisbertoJunior"
                rel="noreferrer"
              >
                <img src={gitHubIcon} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/elisbertojuniordev/"
                rel="noreferrer"
              >
                <img src={linkedinIcon} />
              </a>
            </li>
          </ul>
        </div>
      </AboutContent>
    </AboutContainer>
  )
}

export default About
