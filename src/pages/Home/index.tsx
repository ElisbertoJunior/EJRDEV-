import { Link } from 'react-router-dom'
import About from '../../components/About'
import Hero from '../../components/Hero'
import Highlights from '../../components/Highlights'
import Stacks from '../../components/Stacks'
import { ProjectButton } from './styles'

const Home = () => {
  return (
    <>
      <Hero />
      <Stacks />
      <About />
      <Highlights />
      <Link to={'/projects'}>
        <ProjectButton>Ver lista completa</ProjectButton>
      </Link>
    </>
  )
}

export default Home
