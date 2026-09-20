import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';

export default function App() {
  const [motionPaused, setMotionPaused] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.motion = motionPaused ? 'paused' : 'playing';
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    const setup = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      if (motionPaused || preference.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const delay = Number((entry.target as HTMLElement).dataset.revealDelay || 0);
          const reveal = (element: Element, offset: number, distance: number) => {
            const animation = element.animate(
              [{ opacity: 0, transform: `translateY(${distance}px)` }, { opacity: 1, transform: 'translateY(0)' }],
              { duration: 700, delay: offset, fill: 'backwards', easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          };
          reveal(entry.target, delay, 30);
          entry.target.querySelectorAll('.skill-items li, .detail-list li, .award-copy, .award-event').forEach((item, index) => {
            reveal(item, delay + 100 + index * 45, 12);
          });
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
      document.querySelectorAll('.section-heading, .education-card, .experience-intro, .experience-row, .project-card, .skill-card, .contact-layout').forEach(element => observer?.observe(element));
    };
    setup();
    preference.addEventListener('change', setup);
    return () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener('change', setup);
      delete document.documentElement.dataset.motion;
    };
  }, [motionPaused]);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <section id="home" className="container hero" aria-label="Introduction"><Hero motionPaused={motionPaused} onToggleMotion={() => setMotionPaused(paused => !paused)} /></section>
        <section id="education" className="container section-space" aria-labelledby="education-heading"><Education /></section>
        <section id="experience" className="background-section section-space" aria-labelledby="experience-heading"><div className="container"><Experience /></div></section>
        <section id="projects" className="work-section section-space" aria-labelledby="projects-heading"><div className="container"><Projects /></div></section>
        <section id="skills" className="container section-space" aria-labelledby="skills-heading"><Skills /></section>
        <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="container"><Contact /></div></section>
      </main>
      <Footer />
    </>
  );
}
