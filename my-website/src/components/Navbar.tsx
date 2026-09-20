import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Brian Tam home">Brian Tam</a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span></button>
        <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="nav-resume" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}
