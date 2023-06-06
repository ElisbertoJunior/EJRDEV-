import { CardContainer, GitHubButton, WebButton } from './styles'
import gitLogo from '../../assets/icons/github (2).png'
import webLogo from '../../assets/icons/web.png'

const Card = () => {
  return (
    <CardContainer>
      <img src="http://via.placeholder.com/640x360" />
      <div>
        <h3>Nome do Projeto</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quis suscipit nulla, nemo doloribus in. Deleniti odit ipsam
          accusantium libero illo consequatur adipisci corporis expedita neque,
          placeat ea molestiae architecto.
        </p>
        <GitHubButton>
          <a href="#">
            <img src={gitLogo} />
            Repositorio
          </a>
        </GitHubButton>
        <WebButton>
          <a href="#">
            <img src={webLogo} />
            Site
          </a>
        </WebButton>
      </div>
    </CardContainer>
  )
}

export default Card
