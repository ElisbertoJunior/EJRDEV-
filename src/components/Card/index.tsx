import { CardContainer, DeleteButton, GitHubButton, WebButton } from './styles'
import gitLogo from '../../assets/icons/github (2).png'
import webLogo from '../../assets/icons/web.png'

export type Props = {
  _id?: string
  title: string
  description: string
  linkRepos: string
  linkProject: string
  src: string
  cardType: 'user' | 'admin'
  onClick?: () => any
}

const Card = ({
  _id = '',
  title,
  description,
  linkRepos,
  linkProject,
  src,
  cardType,
  onClick
}: Props) => {
  if (cardType === 'user') {
    return (
      <CardContainer id={_id}>
        <img src={src} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>
            <GitHubButton>
              <a href={linkRepos} target="_blank" rel="noreferrer">
                <img src={gitLogo} />
                Repositorio
              </a>
            </GitHubButton>
            <WebButton>
              <a href={linkProject} target="_blank" rel="noreferrer">
                <img src={webLogo} />
                Site
              </a>
            </WebButton>
          </div>
        </div>
      </CardContainer>
    )
  }

  return (
    <CardContainer id={_id}>
      <img src={src} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <GitHubButton>
            <a href={linkRepos} target="_blank" rel="noreferrer">
              <img src={gitLogo} />
              Repositorio
            </a>
          </GitHubButton>
          <WebButton>
            <a href={linkProject} target="_blank" rel="noreferrer">
              <img src={webLogo} />
              Site
            </a>
          </WebButton>
          <DeleteButton onClick={onClick}>Deletar</DeleteButton>
        </div>
      </div>
    </CardContainer>
  )
}

export default Card
