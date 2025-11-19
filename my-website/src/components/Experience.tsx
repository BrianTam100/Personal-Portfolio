export default function Experience() {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-8 text-gray-900">Experience</h3>

      <ul className="space-y-8">
        <li className="
          p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200
          shadow-[0_4px_20px_rgba(0,0,0,0.04)]
          transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          hover:-translate-y-1
        ">
          <h4 className="text-2xl font-semibold text-gray-900 mb-2">RCOS Developer</h4>
          <p className="text-gray-600 leading-relaxed">
            Built modern frontend components for the HackRPI website; collaborated with a 19-developer team 
            using React, TypeScript, and MongoDB.
          </p>
        </li>

        <li className="
          p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200
          shadow-[0_4px_20px_rgba(0,0,0,0.04)]
          transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          hover:-translate-y-1
        ">
          <h4 className="text-2xl font-semibold text-gray-900 mb-2">CS1 Mentor</h4>
          <p className="text-gray-600 leading-relaxed">
            Assisted students in RPI’s 500-student CS1 course; taught debugging, recursion, algorithms,
            and core Python foundations.
          </p>
        </li>
      </ul>
    </div>
  );
}
