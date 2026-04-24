import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search.tsx";
import Navbar from "./components/Navbar.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductsRoutes from "./routes/ProductsRoutes.tsx";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <p className="text-center text-xl">Location: {location.state?.name}</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/*" element={<ProductsRoutes />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
    </>
  );
}

export default App;


