interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  number: string;
  technologies: string[];
  demo?: string;
  github?: string;
  image?: string;
  award?: string;
  dates?: string;
  highlights?: string[];
  overview?: {
    event: string;
    tagline: string;
    features: { title: string; detail: string }[];
  };
}

export default function ProjectCard({ title, description, category, number, technologies, demo, github, image, award, dates, highlights, overview }: ProjectCardProps) {
  return (
    <article className={`project-card ${award ? 'project-card-awarded' : ''}`}>
      {award && <div className="award-banner">
        <div className="award-emblem" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3h8v6a4 4 0 0 1-8 0V3Z" /><path d="M8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4M12 13v5M8 21h8M9 18h6v3H9z" /></svg>
        </div>
        <div className="award-copy"><span className="award-label">Hackathon winner</span><strong>{award.split(' · ')[0]}</strong></div>
        <span className="award-event">{award.split(' · ')[1]}</span>
      </div>}
      <div className="project-visual">
        {image ? <img src={image} alt={`${title} project preview`} loading="lazy" decoding="async" /> : (
          <div className="project-overview">
            {overview && <p className="eyebrow">{overview.event}</p>}
            <p className="project-overview-title">{title}{overview && <span>{overview.tagline}</span>}</p>
            {overview && <dl>{overview.features.map(feature => <div key={feature.title}><dt>{feature.title}</dt><dd>{feature.detail}</dd></div>)}</dl>}
          </div>
        )}
      </div>
      <div className="project-content">
        <p className="project-kicker"><span className="project-number">{number}</span><span>{category}</span></p>
        <h3>{title}</h3>
        {dates && <p className="project-dates">{dates}</p>}
        <p className="project-description">{description}</p>
        {highlights && <ul className="detail-list project-highlights">{highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>}
        <ul className="tech-tags" aria-label={`${title} technologies`}>{technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
        {(demo || github) && <div className="project-links">
          {demo && <a href={demo} target="_blank" rel="noreferrer" aria-label={`View ${title} live site`}>Live site <span aria-hidden="true">↗</span></a>}
          {github && <a href={github} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`}>GitHub <span aria-hidden="true">↗</span></a>}
        </div>}
      </div>
    </article>
  );
}
