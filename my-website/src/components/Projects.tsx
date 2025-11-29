import ProjectCard from "./ProjectCard";
import bytebite from "../data/bytebite.png";
import watchlist from "../data/watchlist.png";
import thread from "../data/thread.png";

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
          title="The Thread"
          description = "The Thread is an RCOS-developed editorial magazine platform for RPI, designed to publish student-written stories, showcase campus culture, and deliver dynamic, real-time content through a modern, React-based interface backed by MongoDB and AWS S3."
          github="https://github.com/thread-rpi"
          demo = "https://needle-ui.vercel.app/"
          image = {thread}
        />

        <ProjectCard
          title="Watchlist++"
          description="Watchlist++ is a full-stack movie discovery platform designed to make film exploration simple and engaging.
It connects to the TMDb REST API to deliver real-time data on trending titles, cast, and streaming availability, transforming raw API responses into clean, structured content.
Using a responsive React + Tailwind interface, Watchlist++ lets users browse films, watch trailers, and build personal watchlists, all powered by a scalable Node.js + MongoDB backend."
          demo="https://movie-recommendation-project-git-main-briantam100s-projects.vercel.app/"
          github="https://github.com/BrianTam100/MovieRecommendationProject"
          image = {watchlist}
        />
      </div>
    </div>
  );
}
