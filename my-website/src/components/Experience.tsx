import { experience } from '../data/experience';

export default function Experience() {
  return (
    <div className="experience-layout">
      <div className="experience-intro">
        <p className="eyebrow">02 / Experience</p>
        <h2 id="experience-heading">Where I’ve worked</h2>
        <p>I’ve worked in real production environments and helped RPI students learn to code.</p>
      </div>
      <div>
        {experience.map(role => (
          <article className="experience-row" key={role.title}>
            <div className="role-heading"><h3>{role.title}</h3><span>{role.dates}</span></div>
            <p className="organization">{role.organization} · {role.location}</p>
            <ul className="detail-list">{role.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
          </article>
        ))}
      </div>
    </div>
  );
}
