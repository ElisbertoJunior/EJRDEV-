import SectionTitle from '../../components/SectionTitle'
import imgProfile from '../../assets/images/perfil.png'
import git from '../../assets/icons/github (2).png'
import linkedin from '../../assets/icons/likedin.png'
import watts from '../../assets/icons/whattsicon.png'
import mail from '../../assets/icons/mail (1).png'

import { CardContact, ContactContainer } from './styles'

const Contact = () => {
  return (
    <ContactContainer>
      <SectionTitle marginTop="32px">Contato</SectionTitle>
      <p>
        Gostou do que viu? Então não perca tempo. Entre em contato e vamos
        conversar sobre seu projeto!
      </p>
      <CardContact>
        <img src={imgProfile} alt="Foto de perfil de Elisberto Junior" />
        <h3>Elisberto Junior</h3>
        <small>Desenvolvedor Full-Stack</small>
        <br />
        <br />
        <hr />
        <ul>
          <li>
            <a
              href="mailto:elisberto_jr@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mail} alt="Icone de Email" />
              elisberto_jr@hotmail.com
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5562992533318"
              target="_blank"
              rel="noreferrer"
            >
              <img src={watts} alt="Icone do Whatsapp" />
              (62) 99253-3318
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/elisbertojuniordev/">
              <img src={linkedin} alt="Icone do Linkedin" />
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/ElisbertoJunior">
              <img src={git} alt="Icone do Github" />
              Git Hub
            </a>
          </li>
        </ul>
      </CardContact>
    </ContactContainer>
  )
}

export default Contact
