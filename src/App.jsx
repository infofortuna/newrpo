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
import Footer from "./components/Footer"; // Corrected spelling
import Pricing from "./components/Pricing";
// import NotFound from "./components/NotFound"; // Import 404 component

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* <Route path="*" element={<NotFound />} /> Catch-all route for 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
