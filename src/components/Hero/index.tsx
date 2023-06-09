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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iste
          sint consectetur reiciendis nesciunt repellendus eum possimus quos
          voluptatum, dolorem excepturi accusantium? Minima facere cumque quidem
          cum, quis dolorum atque.
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
        <MainButton>
          Baixar CV
          <img src={download} />
        </MainButton>
      </HeroContent>
      <img src={heroImage} />
    </HeroContainer>
  )
}

export default Hero
