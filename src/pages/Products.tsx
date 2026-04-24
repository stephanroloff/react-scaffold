import { NavLink } from "react-router";

function Products() {
  return (
    <>
      <h1 className="text-4xl text-center font-bold p-20">Products</h1>
      <ul className="flex gap-4 list-none justify-center flex-col items-center">
        <li><NavLink to="/products/1" className="text-xl underline">Product 1</NavLink></li>
        <li><NavLink to="/products/2" className="text-xl underline">Product 2</NavLink></li>
        <li><NavLink to="/products/3" className="text-xl underline">Product 3</NavLink></li>
      </ul>
    </>
  )
}

export default Products