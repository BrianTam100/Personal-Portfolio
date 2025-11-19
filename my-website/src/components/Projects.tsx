import ProjectCard from "./ProjectCard";
import bytebite from "../data/bytebite.png";

export default function Projects() {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-6">Projects</h3>
    
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
            title="ByteBite"
            award="Best Data Science Hack — HackRPI 2025"
            description="..."
            image={bytebite}
            demo="https://bytebites.tech"
            github="https://github.com/TheByteGuy/bytebite"
            technologies={["React", "JavaScript", "Node.js", "Tailwind", "Google Gemini"]}
            />


        <ProjectCard
          title="Movie Recommendation App"
          description="Full-stack movie discovery platform with TMDb API, ML ranking, and watchlists."
          demo="https://movie-recommendation-project-git-main-briantam100s-projects.vercel.app/"
          github="https://github.com/BrianTam100/MovieRecommendationProject"
        />
      </div>
    </div>
  );
}
