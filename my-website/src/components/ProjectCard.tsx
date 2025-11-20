interface ProjectCardProps {
  title: string;
  description: string;
  demo?: string;
  github?: string;
  image?: string;
  award?: string;
}

export default function ProjectCard({
  title,
  description,
  demo,
  github,
  image,
  award,
}: ProjectCardProps) {
  return (
    <section className="w-full py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* LEFT — IMAGE */}
  <div className="flex justify-center items-start">
    <img
      src={image}
      alt={title}
      className="
        max-w-2xl 
        w-full 
        h-[360px] 
        object-contain 
        rounded-2xl 
        shadow-sm 
        border border-gray-200
      "
    />
  </div>


    {/* RIGHT — TEXT CONTENT */}
    <div className="flex flex-col justify-start">

      <h2 className="text-4xl font-bold mb-3 text-primary">{title}</h2>

        {award && (
      <span
        className="
          inline-flex items-center gap-2 w-fit mb-6 px-5 py-2
          text-sm font-medium rounded-full
          bg-gradient-to-r from-purple-500/20 to-blue-500/20
          text-purple-900
          border border-purple-300/30
          shadow-[0_2px_10px_rgba(0,0,0,0.06)]
          backdrop-blur-sm
        "
      >
        🏆 {award}
      </span>
    )}


      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        {description}
      </p>

      <div className="flex gap-4 mb-8">
        {demo && (
          <a
            href={demo}
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition"
          >
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        )}
      </div>



    </div>

  </div>
</section>

  );
}
