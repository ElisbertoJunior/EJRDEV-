import heroImage from '../../assets/images/pc.svg'
import git from '../../assets/icons/github (2).png'
import linkedin from '../../assets/icons/likedin.png'
import { HeroContainer, HeroContent } from './styles'
const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
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
            voluptatum, dolorem excepturi accusantium? Minima facere cumque
            quidem cum, quis dolorum atque.
          </p>
          <ul>
            <li>
              <a href="#">
                <img src={git} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedin} />
              </a>
            </li>
          </ul>
        </HeroContent>
        <img src={heroImage} />
      </div>
    </HeroContainer>
  )
}

export default Hero
