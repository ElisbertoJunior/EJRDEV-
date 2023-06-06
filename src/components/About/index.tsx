import SectionTitle from '../SectionTitle'
import { AboutContainer } from './styles'
import profileImage from '../../assets/images/perfil.png'

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>Sobre</SectionTitle>
      <AboutContent>
        <img src={profileImage} alt="Foto de perfil Elisberto Junior" />
        <p>
          Desenvolvedor de Software, iniciando no desenvolvimento em 2021, me
          considero entusiasta em novas tecnologias e adquirindo conhecimento
          dia após dia.
          <br />
          <br />
          Meu foco de desenvolvimento e com JavaScript, TypeScript, NodeJS,
          Angular dentre outras tecnologias que uso no meu dia a dia.
          <br />
          <br />
          Sou ágil e consistente em aprender qualquer tecnologia e alta
          adaptabilidade às mudanças, pronto para encarar qualquer desafio! Se
          eu pudesse me definir em 3 palavras, certamente seriam: focado,
          perseverante e esforçado!
        </p>
      </AboutContent>
    </AboutContainer>
  )
}

export default About
