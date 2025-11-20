import ProjectCard from "./ProjectCard";
import bytebite from "../data/bytebite.png";

export default function Projects() {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-6">Projects</h3>
    
      <div className="flex flex-col gap-24">
        <ProjectCard
          title="ByteBite"
          description="ByteBite is an AI-powered dining recommendation platform created at HackRPI 2025.
          It solves a real problem at RPI by normalizing Sodexo's inconsistent JSON menu feeds and turning
          them into clean, structured data. Leveraging Google Gemini, ByteBite ranks meals for users based 
          on their dietary preferences and allergens in real time."
          demo="https://bytebites.tech"
          github="https://github.com/TheByteGuy/bytebite"
          image = {bytebite}
          award="Best Data Science Hack – HackRPI 2025"
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
