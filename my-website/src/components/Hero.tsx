


export default function Hero() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 text-primary">Hi, I'm Brian 👋</h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        I'm a full-stack developer and RPI CS student who builds AI-powered apps,
        intuitive UIs, and open-source software.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="/resume.pdf"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Resume
        </a>
        <a
          href="https://github.com/BrianTam100"
          className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
