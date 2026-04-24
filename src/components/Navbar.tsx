import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-cyan-950 px-20">
      <div><Link to="/" className="text-3xl font-bold text-white">React Scaffold</Link></div>
      <ul className="flex gap-4 list-none">
        <li><NavLink to="/" className="text-xl text-white hover:text-yellow-400 transition-colors duration-200">Home</NavLink></li>
        <li><NavLink to="/about" className="text-xl text-white hover:text-yellow-400 transition-colors duration-200">About</NavLink></li>
        <li><NavLink to="/search" className="text-xl text-white hover:text-yellow-400 transition-colors duration-200">Search</NavLink></li>
        <li><NavLink to="/products" className="text-xl text-white hover:text-yellow-400 transition-colors duration-200">Products</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar

