import "../style.css"
interface ProjectCardProps {
  title: string;
  description: string;
  demo?: string;
  github?: string;
  learnMore?: string;
  image?: string;
  award?: string;
}

export default function ProjectCard({ title, description, demo, github, image, award }: ProjectCardProps) {
  return (
    <div className="relative group">

      {/* 🔥 MOVING BORDER EFFECT — ONLY IF AWARD EXISTS */}
     {award && (
        <div
            className="
            absolute -inset-[6px]     /* farther out */
            rounded-[22px]            /* bigger curve for top visibility */
            p-[3px]                   /* thicker border ring */
            pointer-events-none
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500
            bg-[length:300%_300%]
            animate-movingBorder
            blur-[1px]                /* optional slight blur for visibility */
            "
        />
        )}




      {/* Actual Card */}
      <div className="relative p-5 bg-white rounded-xl shadow border border-gray-200 
                      transition-all group-hover:shadow-xl group-hover:-translate-y-1">

        <h4 className="text-xl font-bold mb-2 text-primary">{title}</h4>

        {award && (
          <span className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 
                            text-sm font-semibold rounded-full 
                            bg-gradient-to-r from-blue-600 to-indigo-600 
                            text-white shadow-lg shadow-blue-500/30">
            🏆 {award}
          </span>
        )}

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full object-cover rounded-lg mb-4 shadow-sm border border-gray-200"
          />
        )}

        <p className="text-gray-700 mb-3">{description}</p>
            <div className="flex gap-3 text-sm mt-4">
            {demo && (
                <a
                href={demo}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium
                            hover:bg-blue-700 transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                >
                Live Demo
                </a>
            )}

            {github && (
                <a
                href={github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium
                            hover:bg-gray-100 transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                >
                GitHub
                </a>
            )}
            </div>

      </div>
    </div>
  );
}
