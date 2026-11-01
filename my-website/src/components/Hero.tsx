// Add portrait.jpg (or .jpeg, .png, .webp, .avif) to src/data to replace the placeholder.
const portraits = import.meta.glob<string>('../data/portrait.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
});
const portrait = Object.values(portraits)[0];

interface HeroProps {
  motionPaused: boolean;
  onToggleMotion: () => void;
}

export default function Hero({}: HeroProps) {
  return (
    <div className="hero-layout">
      <div className="hero-main">
        <p className="eyebrow availability"><span /> Open to Summer 2027 internships</p>
        <h1>Hi, I’m<br /><span className="serif-word">Brian Tam.</span></h1>
        <p className="hero-description">I’m a CS and IT & Web Science student at RPI, concentrating in AI/ML and graduating in 2028. I build web apps and AI-powered hardware, contribute to open-source projects, and help teach CS1. In Summer 2026, I built internal tools at Isaac Morris Limited.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">See my projects <span aria-hidden="true">↘</span></a>
          <a className="text-link" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">View résumé <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame">
          {portrait ? (
            <img src={portrait} alt="Brian Tam" width="800" height="1000" fetchPriority="high" />
          ) : (
            <div className="portrait-placeholder" role="img" aria-label="Placeholder for Brian Tam’s portrait">
              <span className="portrait-initials" aria-hidden="true">BT<span>.</span></span>
              <span className="portrait-placeholder-label">Your photo here</span>
            </div>
          )}
        </div>
        <figcaption><span>Brian Tam</span><span>Brooklyn, NY</span></figcaption>
      </figure>
      <div className="hero-bottom"><span>Brooklyn, NY · RPI ’28</span><a href="https://github.com/BrianTam100" target="_blank" rel="noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a></div>
    </div>
  );
}
