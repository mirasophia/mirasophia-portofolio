// src/pages/Committees.jsx
import React, { useState } from 'react';
import committees from '../data/committees';
import '../index.css'; 

export default function Committees() {
  const initial = committees.reduce((acc, c) => ({ ...acc, [c.id]: 0 }), {});
  const [idxs, setIdxs] = useState(initial);

  const prev = (id) => {
    setIdxs(prevState => {
      const arr = committees.find(c => c.id === id).photos;
      const next = (prevState[id] - 1 + arr.length) % arr.length;
      return { ...prevState, [id]: next };
    });
  };
  const next = (id) => {
    setIdxs(prevState => {
      const arr = committees.find(c => c.id === id).photos;
      const next = (prevState[id] + 1) % arr.length;
      return { ...prevState, [id]: next };
    });
  };

  const resolveImg = (relPath) => {
    try {
      return new URL(`../assets/${relPath}`, import.meta.url).href;
    } catch (e) {
      return `/assets/${relPath}`;
    }
  };

  const cvUrl = '/mnt/data/Mira Sophia Ikhsawiyanthi-CV.pdf';

  return (
    <main className="page container committees-page">
      <h2 className="section-title">Committees & Activities</h2>

      <div className="committees-grid">
        {committees.map(c => {
          const idx = idxs[c.id] ?? 0;
          const img = resolveImg(c.photos[idx]);
          const logo = resolveImg(c.logo);

          return (
            <article key={c.id} className="comm-card">
              <div className="comm-thumb">
                <img src={img} alt={`${c.title} ${idx+1}`} className="comm-image" />
                <button className="comm-arrow left" onClick={() => prev(c.id)} aria-label="previous">‹</button>
                <button className="comm-arrow right" onClick={() => next(c.id)} aria-label="next">›</button>
                <div className="comm-counter">{idx + 1} / {c.photos.length}</div>

                <div className="comm-logo">
                  <img src={logo} alt={`${c.title} logo`} />
                </div>
              </div>

              <div className="comm-body">
                <h3 className="comm-title">{c.title}</h3>
                <p className="comm-role">{c.role} <span className="comm-period"> — {c.period}</span></p>
                <p className="comm-desc">{c.shortDesc}</p>

                <ul className="comm-bullets">
                  {c.bullets.map((b,i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <p style={{ textAlign: 'center', marginTop: 36 }}>
        <a href="/" className="back-link" aria-label="Back to homepage">
          <span aria-hidden="true">←</span> Back home
        </a>
      </p>
      
    </main>
  );
}
