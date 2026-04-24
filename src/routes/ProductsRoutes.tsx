import { Routes, Route } from "react-router";
import ProductsLayout from "../layouts/ProductsLayout";
import Products from "../pages/Products";
import Product from "../pages/Product";

function ProductsRoutes() {
  return (
    <Routes>
      <Route element={<ProductsLayout />}>
        <Route index element={<Products />} />
        <Route path=":id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default ProductsRoutes

