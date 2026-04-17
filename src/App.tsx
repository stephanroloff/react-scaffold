import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Navbar from "./components/Navbar.tsx";
import Products from "./pages/Products.tsx";
import Product from "./pages/Product.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products">
          <Route index element={<Products />} /> 
          <Route path=":id" element={<Product />} /> {/* Dynamic route */}
        </Route>
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
    </>
  );
}

export default App;
