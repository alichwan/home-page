import { NavLink } from 'react-router-dom'
import { House } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        <House size={17} strokeWidth={2} />
      </NavLink>
      <NavLink to="/professional" className="nav-link">Professional</NavLink>
      <NavLink to="/personal"     className="nav-link">Personal</NavLink>
      <NavLink to="/projects"     className="nav-link">Projects</NavLink>
    </nav>
  )
}

export default Navbar
