const skills = [
  { category: 'Languages', symbol: '{ }', note: 'From systems code to web applications.', items: ['C', 'C++', 'Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'PHP', 'MIPS'] },
  { category: 'Frameworks & web', symbol: '</>', note: 'Interfaces, servers, and the APIs between them.', items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'HTML/CSS', 'REST APIs'] },
  { category: 'Databases & cloud', symbol: 'DB', note: 'Storing data and getting applications online.', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Snowflake', 'AWS S3', 'Azure', 'DigitalOcean'] },
  { category: 'Tools & AI', symbol: '>_', note: 'Development workflows and machine learning.', items: ['Git', 'Docker', 'Linux/Unix', 'CI/CD', 'scikit-learn', 'RAG', 'Semantic Search', 'LLM APIs'] },
];

export default function Skills() {
  return (
    <>
      <div className="section-heading"><div><p className="eyebrow">04 / Skills</p><h2 id="skills-heading">Tools & technologies</h2></div></div>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <article className="skill-card" key={group.category} data-reveal-delay={index % 2 * 90}>
            <div className="skill-card-top"><span className="skill-symbol" aria-hidden="true">{group.symbol}</span><span className="skill-index" aria-hidden="true">0{index + 1}</span></div>
            <h3>{group.category}</h3>
            <p>{group.note}</p>
            <ul className="skill-items">{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul>
          </article>
        ))}
      </div>
    </>
  );
}
