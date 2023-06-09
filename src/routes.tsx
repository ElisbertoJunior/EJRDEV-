import { Routes as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Router>
  )
}

export default Routes
