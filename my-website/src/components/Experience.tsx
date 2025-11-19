export default function Experience() {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-6">Experience</h3>

      <ul className="space-y-6">
        <li className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-xl font-semibold mb-2">RCOS Developer</h4>
          <p className="text-gray-700">
            Built frontend components for HackRPI website; worked in a 19-dev team using React, TS, MongoDB.
          </p>
        </li>

        <li className="bg-white p-5 rounded-xl shadow">
          <h4 className="text-xl font-semibold mb-2">CS1 Mentor</h4>
          <p className="text-gray-700">
            Supported 500-student course; taught debugging, recursion, algorithms, and Python fundamentals.
          </p>
        </li>
      </ul>
    </div>
  );
}
