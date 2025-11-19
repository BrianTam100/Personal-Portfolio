export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-semibold">Brian Tam</h1>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
