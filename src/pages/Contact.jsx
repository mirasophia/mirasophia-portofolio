import React, { useEffect, useState } from 'react';

import sophie1 from '../assets/sophie1.png';
import sophie2 from '../assets/sophie2.png';

export default function Contact() {
  const images = [sophie1, sophie2];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx(i => (i + 1) % images.length);
    }, 900); // change speed if needed
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="page container contact-page">
      <h2 className="section-title">Get in touch</h2>

      <div className="contact-row">
        <div className="contact-left">

          <div className="contact-pill">
            <h4>Email</h4>
            <p><a href="mailto:septembersoph@gmail.com">septembersoph@gmail.com</a></p>
          </div>

          <div className="contact-pill">
            <h4>Phone</h4>
            <p><a href="tel:+6281336363320">+62 813 3636 3320</a></p>
          </div>

          <div className="contact-pill">
            <h4>LinkedIn</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/mira-sophia-ikh3/"
                target="_blank"
                rel="noreferrer"
              >
                mira-sophia-ikh3
              </a>
            </p>
          </div>

          <div className="contact-pill">
            <h4>GitHub</h4>
            <p>
              <a href="https://github.com/mirasophia" target="_blank" rel="noreferrer">
                github.com/mirasophia
              </a>
            </p>
          </div>
        </div>

        <div className="contact-right" aria-hidden="false">
          <div className="boomerang-frame" role="img" aria-label="portfolio camera sticker">
            <img
              key={idx}
              src={images[idx]}
              alt="Sophie sticker"
              className={`boomerang-img boomerang-sticker ${idx === 0 ? 'first' : 'second'}`}
              draggable="false"
            />
          </div>

          <p className="contact-sign oooh-baby">Thank you for visiting 🧚‍♀️🧚</p>

        </div>

      </div>

      <p style={{ textAlign: 'center', marginTop: 36 }}>
        <a href="/" className="back-link" aria-label="Back to homepage">
          <span aria-hidden="true">←</span> Back home
        </a>
      </p>

    </main>
  );
}
