import React, { useState } from 'react';
import projects from '../data/projects';
import '../index.css'; 

export default function Projects() {
  const initial = projects.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {});
  const [indices, setIndices] = useState(initial);

  const prevPhoto = (projId) => {
    setIndices(prev => {
      const arr = projects.find(p => p.id === projId).photos;
      const nextIdx = (prev[projId] - 1 + arr.length) % arr.length;
      return { ...prev, [projId]: nextIdx };
    });
  };

  const nextPhoto = (projId) => {
    setIndices(prev => {
      const arr = projects.find(p => p.id === projId).photos;
      const nextIdx = (prev[projId] + 1) % arr.length;
      return { ...prev, [projId]: nextIdx };
    });
  };

  const resolveImg = (relPath) => {
    return new URL(`../assets/${relPath}`, import.meta.url).href;
  };

  return (
    <main className="page container">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map(p => {
          const idx = indices[p.id] || 0;
          const imgSrc = resolveImg(p.photos[idx]);

          return (
            <article key={p.id} className="proj-card">
              <div className="proj-thumb">
                <img src={imgSrc} alt={`${p.title} ${idx + 1}`} className="proj-image" />
                <button
                  aria-label="previous"
                  className="thumb-arrow left"
                  onClick={() => prevPhoto(p.id)}
                >‹</button>

                <button
                  aria-label="next"
                  className="thumb-arrow right"
                  onClick={() => nextPhoto(p.id)}
                >›</button>

                <div className="thumb-counter">{idx + 1} / {p.photos.length}</div>
              </div>

              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <p className="role">{p.role}</p>

                <p className="proj-desc">{p.desc}</p>

                <ul className="proj-bullets">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>

                <div className="tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                <div className="proj-actions">
                  {p.figma ? (
                    <a className="btn primary" href={p.figma} target="_blank" rel="noreferrer">Open Figma</a>
                  ) : null}
                </div>
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
