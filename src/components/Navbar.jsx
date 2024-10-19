"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; 
import { useTheme } from "@mui/material/styles";
import "./styles.css"; // Import your CSS file

const EnhancedNavbar = () => {
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  // Scroll to top on pathname change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show "Scroll to Top" button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Meta tags and title setup
  useEffect(() => {
    const pageTitle = location.pathname === "/" ? "Home" : location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
    const titlePrefix = "Fortuna Enterprise";
    const titleSuffix = " | Quality Import-Export Solutions";
    document.title = `${titlePrefix} - ${pageTitle} ${titleSuffix}`;
  
    const metaTags = {
      "/": {
        description: "Fortuna Enterprise is your premier partner in global import-export solutions. Explore our services today!",
      },
      "/about": {
        description: "Learn more about Fortuna Enterprise and our commitment to quality and service in global trade.",
      },
      "/products": {
        description: "Explore our wide range of high-quality import-export products including agricultural goods and electronics.",
      },
      "/services": {
        description: "Discover our comprehensive import-export services tailored for your business needs and growth.",
      },
      "/contact": {
        description: "Get in touch with Fortuna Enterprise for all your import-export inquiries and support.",
      },
      "/blog": {
        description: "Read the Fortuna Enterprise blog for the latest insights on import-export and industry trends.",
      },
      "/dashboard": {
        description: "Admin Dashboard for managing blog posts and user access.",
      },
    }[location.pathname] || {};
  
    let metaDescriptionElement = document.querySelector('meta[name="description"]');
  
    if (!metaDescriptionElement) {
      metaDescriptionElement = document.createElement("meta");
      metaDescriptionElement.name = "description";
      document.head.appendChild(metaDescriptionElement);
    }
  
    metaDescriptionElement.setAttribute("content", metaTags.description);
  
    // Open Graph Tags
    const ogTags = {
      "/": {
        title: "Welcome to Fortuna Enterprise",
        type: "website",
        url: window.location.href,
        image: "/path-to-your-image.jpg", // Replace with your image path
      },
      // Add other routes as needed...
    }[location.pathname] || {};
  
    let ogTitleElement = document.querySelector('meta[property="og:title"]');
    let ogTypeElement = document.querySelector('meta[property="og:type"]');
    let ogUrlElement = document.querySelector('meta[property="og:url"]');
    let ogImageElement = document.querySelector('meta[property="og:image"]');
  
    if (!ogTitleElement) {
      ogTitleElement = document.createElement("meta");
      ogTitleElement.property = "og:title";
      document.head.appendChild(ogTitleElement);
    }
  
    if (!ogTypeElement) {
      ogTypeElement = document.createElement("meta");
      ogTypeElement.property = "og:type";
      document.head.appendChild(ogTypeElement);
    }
  
    if (!ogUrlElement) {
      ogUrlElement = document.createElement("meta");
      ogUrlElement.property = "og:url";
      document.head.appendChild(ogUrlElement);
    }
  
    if (!ogImageElement) {
      ogImageElement = document.createElement("meta");
      ogImageElement.property = "og:image";
      document.head.appendChild(ogImageElement);
    }
  
    ogTitleElement.setAttribute("content", ogTags.title);
    ogTypeElement.setAttribute("content", ogTags.type);
    ogUrlElement.setAttribute("content", ogTags.url);
    ogImageElement.setAttribute("content", ogTags.image);
  
    return () => {
      // Optionally clear or reset meta tags on unmount
      metaDescriptionElement.removeAttribute("content");
      ogTitleElement.removeAttribute("content");
      ogTypeElement.removeAttribute("content");
      ogUrlElement.removeAttribute("content");
      ogImageElement.removeAttribute("content");
    };
  }, [location]);
  
  const isAdmin = true; // Replace with actual admin check logic

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    ...(isAdmin ? [{ path: "/dashboard", label: "Dashboard" }] : []), // Conditionally show Dashboard for admins
  ];

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "#ffffff", color: "#333" }}>
        <Toolbar className="container mx-auto flex justify-between items-center px-4 py-2">
          <Typography variant="h6" style={{ color: "#333" }}>
            <Link to="/" className="flex items-center no-underline hover:no-underline">
              <img src="/company-logo-png.png" alt="Fortuna Enterprise Company Logo" className="h-8 mr-2" />
              <span className="text-xl">Fortuna Enterprise</span>
            </Link>
          </Typography>

          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "#1E40AF" : "#333",
                  fontWeight: location.pathname === item.path ? "bold" : "normal",
                  textDecoration: location.pathname === item.path ? "underline" : "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1E40AF")}
                onMouseLeave={(e) => (e.target.style.color = location.pathname === item.path ? "#1E40AF" : "#333")}>
                {item.label}
              </Button>
            ))}
          </div>

          <Button
            component={Link}
            to="/contact"
            style={{
              backgroundColor: "#1E40AF",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: "9999px",
              transition: "background-color 0.3s",
              marginLeft: isMobile ? "auto" : "16px",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1D4ED8")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1E40AF")}>
            Get Started
          </Button>

          {isMobile && (
            <IconButton edge="end" aria-label="menu" onClick={toggleDrawer} style={{ color: "#333", marginLeft: "8px" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <div style={{ width: "250px", padding: "16px", backgroundColor: "#f9f9f9" }}>
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h6" style={{ fontWeight: "bold", color: "#333" }}>
                Menu
              </Typography>
              <IconButton aria-label="close menu" onClick={toggleDrawer}>
                <CloseIcon style={{ color: "#333" }} />
              </IconButton>
            </div>
            <Divider />
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.path}
                  onClick={toggleDrawer}
                  component={Link}
                  to={item.path}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0e0e0")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  aria-label={`Navigate to ${item.label}`}>
                  <ListItemText>
                    <span
                      style={{
                        color: location.pathname === item.path ? "#1E40AF" : "#333",
                        fontWeight: location.pathname === item.path ? "bold" : "normal",
                      }}>
                      {item.label}
                    </span>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </AppBar>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            backgroundColor: "#1E40AF",
            color: "#ffffff",
            borderRadius: "50%",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          }}>
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </>
  );
};

// Prop Types for validation
EnhancedNavbar.propTypes = {
  logoSrc: PropTypes.string.isRequired,
};

export default EnhancedNavbar;
