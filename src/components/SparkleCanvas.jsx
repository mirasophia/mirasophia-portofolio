import React, { useEffect, useRef } from 'react'

export default function SparkleCanvas(){
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let sparkles = []

    function resize(){
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    function onMove(e){
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const perMove = prefersReduced ? 1 : 3
      for (let i=0;i<perMove;i++){
        sparkles.push({
          x: e.clientX + (Math.random()-0.5)*12,
          y: e.clientY + (Math.random()-0.5)*12,
          r: Math.random()*3 + 0.6,
          opacity: 1,
          vx: (Math.random()-0.5)*0.3,
          vy: (Math.random()-0.5)*-0.6 - 0.2,
          hue: 30 + Math.random()*40
        })
      }
    }
    document.addEventListener('mousemove', onMove)

    let raf = null
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      for (let i = sparkles.length - 1; i >= 0; i--){
        const s = sparkles[i]
        ctx.globalAlpha = s.opacity
        ctx.fillStyle = `hsl(${s.hue} 80% 85%)`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2)
        ctx.fill()

        s.x += s.vx
        s.y += s.vy
        s.opacity -= 0.02
        if (s.opacity <= 0) sparkles.splice(i,1)
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas id="sparkle" ref={ref} aria-hidden="true" />
}