import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <>
      <div className="section-heading">
        <div><p className="eyebrow">03 / Projects</p><h2 id="projects-heading">What I’ve been building</h2></div>
        <p>Two award-winning hackathon projects and an open-source editorial platform at RPI.</p>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => <ProjectCard key={project.title} number={String(index + 1).padStart(2, '0')} {...project} />)}
      </div>
    </>
  );
}
