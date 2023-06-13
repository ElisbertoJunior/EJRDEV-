import { CardContainer, GitHubButton, WebButton } from './styles'
import gitLogo from '../../assets/icons/github (2).png'
import webLogo from '../../assets/icons/web.png'

type Props = {
  id: string
  title: string
  description: string
  linkRepos: string
  linkProject: string
  src: string
}

const Card = ({
  id,
  title,
  description,
  linkRepos,
  linkProject,
  src
}: Props) => {
  return (
    <CardContainer id={id}>
      <img src={`http://localhost:4000/${src}`} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <GitHubButton>
          <a href={linkRepos}>
            <img src={gitLogo} />
            Repositorio
          </a>
        </GitHubButton>
        <WebButton>
          <a href={linkProject}>
            <img src={webLogo} />
            Site
          </a>
        </WebButton>
      </div>
    </CardContainer>
  )
}

export default Card
