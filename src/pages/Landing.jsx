import React, { useEffect, useState } from 'react'
import SparkleCanvas from '../components/SparkleCanvas'
import PolaroidStack from '../components/PolaroidStack'

export default function Landing() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 160)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="landing container" role="main">
      <SparkleCanvas />

      <header className="hero">
        <div className="hero-inner">
          <h1 className="welcome-text oooh-baby">
            Welcome to <span>Mira Sophia’s</span> world 🌻
          </h1>

          <p className="subtext">
            This is my personal portfolio — welcome!
          </p>

          <div className="hero-stickers-row" aria-hidden="true">
            <img src="/src/assets/hearteu.png" className="hero-sticker row-sticker sticker-hearteu" alt="" />
            <img src="/src/assets/butterfly.png" className="hero-sticker row-sticker" alt="" />
            <img src="/src/assets/crayons.png" className="hero-sticker row-sticker" alt="" />
            <img src="/src/assets/roblox.png" className="hero-sticker row-sticker" alt="" />
            <img src="/src/assets/camera.png" className="hero-sticker row-sticker" alt="" />
            <img src="/src/assets/cat.png" className="hero-sticker row-sticker" alt="" />
            <img src="/src/assets/ribbon.png" className="hero-sticker row-sticker" alt="" />
            <img src="/src/assets/rabbit.png" className="hero-sticker row-sticker sticker-rabbit" alt="" />
          </div>
        </div>
      </header>

      <section className="intro-panel">
        <div className="about-card" aria-labelledby="about-title">
          <h2 id="about-title" className="oooh-baby">Hi — I’m Sophie 👋🏼</h2>

          <p>
            My name is Mira Sophia, but you can call me Sophie. I’m an Informatics student at Universitas Multimedia Nusantara
            who enjoys exploring design and front-end development. I love learning how visuals, layouts, and interactions come
            together to create simple and pleasant digital experiences.
          </p>

          <p>
            As a student, I’m still growing my skills through projects, curiosity, and continuous practice. I enjoy trying new
            things, learning from mistakes, and improving little by little — whether it’s design, coding, or finding better ways
            to solve problems.
          </p>

          <p style={{ color: 'var(--muted)' }}>
            Here are some of the tools and technologies I'm currently learning:
          </p>

          <div className="skills" role="list">
            <button className="skill-chip">Figma</button>
            <button className="skill-chip">HTML</button>
            <button className="skill-chip">CSS</button>
            <button className="skill-chip">JavaScript</button>
            <button className="skill-chip">React</button>
            <button className="skill-chip">Laravel</button>
            <button className="skill-chip">SQL</button>
            <button className="skill-chip">Firebase</button>
          </div>
        </div>

        <div className="polaroid-area" aria-hidden="true">
          {ready && <PolaroidStack />}
        </div>
      </section>
    </main>
  )
}
