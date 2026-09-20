const coursework = ['Artificial Intelligence', 'Data Structures & Algorithms', 'Operating Systems', 'Database Systems', 'Computer Architecture', 'Theory of Computation'];

export default function Education() {
  return (
    <>
      <div className="section-heading"><div><p className="eyebrow">01 / Education</p><h2 id="education-heading">Education</h2></div></div>
        <article className="education-card">
          <p className="eyebrow">Troy, NY · Aug. 2024 – May 2028</p>
          <h3>Rensselaer Polytechnic Institute</h3>
          <p className="degree">Bachelor of Science in Computer Science and Information Technology & Web Science</p>
          <p className="graduation">Expected graduation · May 2028</p>
          <h4>Relevant coursework</h4>
          <ul className="coursework">{coursework.map(course => <li key={course}>{course}</li>)}</ul>
        </article>
    </>
  );
}
