import * as S from './styles'
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
      <S.CardContainer id={_id}>
        <img src={src} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>
            <S.GitHubButton>
              <a href={linkRepos} target="_blank" rel="noreferrer">
                <img src={gitLogo} />
                Repositorio
              </a>
            </S.GitHubButton>
            <S.WebButton>
              <a href={linkProject} target="_blank" rel="noreferrer">
                <img src={webLogo} />
                Site
              </a>
            </S.WebButton>
          </div>
        </div>
      </S.CardContainer>
    )
  }

  return (
    <S.CardContainer id={_id}>
      <img src={src} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <S.GitHubButton>
            <a href={linkRepos} target="_blank" rel="noreferrer">
              <img src={gitLogo} />
              Repositorio
            </a>
          </S.GitHubButton>
          <S.WebButton>
            <a href={linkProject} target="_blank" rel="noreferrer">
              <img src={webLogo} />
              Site
            </a>
          </S.WebButton>
          <S.DeleteButton onClick={onClick}>Deletar</S.DeleteButton>
        </div>
      </div>
    </S.CardContainer>
  )
}

export default Card
