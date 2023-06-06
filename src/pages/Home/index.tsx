import About from '../../components/About'
import Hero from '../../components/Hero'
import Highlights from '../../components/Highlights'
import Stacks from '../../components/Stacks'

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Stacks />
      <About />
      <Highlights />
    </div>
  )
}

export default Home
