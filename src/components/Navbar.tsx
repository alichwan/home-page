import { NavLink } from 'react-router-dom'
import { House } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'
import './Navbar.css'

function Navbar() {
  const { t } = useLanguage()
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        <House size={17} strokeWidth={2} />
      </NavLink>
      <NavLink to="/professional" className="nav-link">
      {
        t("Professional", "Profesional")
      }</NavLink>
      <NavLink to="/personal"     className="nav-link">
      {
        t("Personal", "Personal")
      }</NavLink>
      <NavLink to="/projects"     className="nav-link">
      {
        t("Projects", "Proyectos")
      }</NavLink>

      <div className="navbar-right">
        <LanguageToggle />
      </div>
    </nav>
  )
}

export default Navbar
