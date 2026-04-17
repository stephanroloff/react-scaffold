import { Link } from "react-router";

function Products() {
  return (
    <>
      <h1 className="text-4xl text-center font-bold p-20">Products</h1>
      <ul className="flex gap-4 list-none justify-center flex-col items-center">
        <li><Link to="/products/1" className="text-xl underline">Product 1</Link></li>
        <li><Link to="/products/2" className="text-xl underline">Product 2</Link></li>
        <li><Link to="/products/3" className="text-xl underline">Product 3</Link></li>
      </ul>
    </>
  )
}

export default Products