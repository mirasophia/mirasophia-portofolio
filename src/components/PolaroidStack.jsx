import React, { useEffect, useRef } from 'react'

export default function PolaroidStack() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    wrap.classList.add('polaroid-out')

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            wrap.classList.add('polaroid-in')
            wrap.classList.remove('polaroid-out')
          } else {
            wrap.classList.remove('polaroid-in')
            wrap.classList.add('polaroid-out')
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -20% 0px' }
    )

    obs.observe(wrap)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="polaroid-wrap-single polaroid-wrap" ref={wrapRef}>
      <div className="polaroid-card polaroid-single">
        <img
          src="/src/assets/polaroid-clean.jpg"
          alt="Mira polaroid"
          className="polaroid-photo"
          draggable="false"
        />
      </div>
    </div>
  )
}
