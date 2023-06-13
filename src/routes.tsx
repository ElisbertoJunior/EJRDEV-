import { Routes as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Admin from './pages/Admin'

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Router>
  )
}

export default Routes
