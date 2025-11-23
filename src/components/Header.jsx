import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-nav" role="navigation" aria-label="Main">
      <div className="nav-inner container">
        <NavLink to="/" className="brand">Mira Sophia</NavLink>

        <nav id="primary-nav">
          <NavLink to="/projects" className={({isActive})=> isActive ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/committees" className={({isActive})=> isActive ? 'active' : ''}>Committees</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}