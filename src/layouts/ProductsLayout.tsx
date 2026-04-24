import { Outlet } from "react-router";

function ProductsLayout() {
  return (
    <>
    <p className="text-4xl text-red-600 text-center">ProductsLayout</p>
    <Outlet context={{greeting: "hello"}}/>
    </>
  )
}

export default ProductsLayout