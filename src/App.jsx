import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import Blog from "./blog/Blog";
import BlogPage from "./blog/BlogPage";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import NotFound from "./components/NotFound"; // Uncomment the import
import AgriculturalProductsPage from "./products/AgriculturalProductsPage";
import PremiumSpicesPage from "./products/PremiumSpicesPage";
import ProcessedFoodsPage from "./products/ProcessedFoodsPage";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/products", element: <Products /> },
  { path: "/contact", element: <Contact /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <BlogPage /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/products/agriculture", element: <AgriculturalProductsPage /> },
  { path: "/products/spices", element: <PremiumSpicesPage /> },
  { path: "/products/processed-foods", element: <ProcessedFoodsPage /> },
  { path: "*", element: <NotFound /> }, // Catch-all route for 404
];

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
