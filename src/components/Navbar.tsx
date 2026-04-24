import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-cyan-950 px-20">
      <div><Link to="/" className="text-3xl font-bold text-white">React Scaffold</Link></div>
      <ul className="flex gap-4 list-none">
        <li><Link to="/" className="text-xl text-white hover:text-yellow-400 transition-colors duration-200">Home</Link></li>
        <li><Link to="/about" className="text-xl text-white hover:text-yellow-400 transition-colors duration-200">About</Link></li>
        <li><Link to="/team" className="text-xl text-white hover:text-yellow-400 transition-colors duration-200">Team</Link></li>
        <li><Link to="/products" className="text-xl text-white hover:text-yellow-400 transition-colors duration-200">Products</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

