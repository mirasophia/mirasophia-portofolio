import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import Committees from './pages/Committees'
import Contact from './pages/Contact'
import './index.css'

export default function App(){
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}