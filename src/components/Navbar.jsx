"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; // Import the up arrow icon
import { useTheme } from "@mui/material/styles";
import "./styles.css"; // Import your CSS file
import {
  Email,
  Phone,
  Facebook,
  Instagram,
  WhatsApp,
  YouTube,
  LinkedIn,
} from "@mui/icons-material";
import WhatsAppTopUp from "./WhatsApp";

export default function EnhancedNavbar() {
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
      if (window.scrollY > 100) {
        // Adjust this value as needed
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };
  useEffect(() => {
    const pageTitle =
      location.pathname === "/"
        ? "Home"
        : location.pathname.charAt(1).toUpperCase() +
          location.pathname.slice(2);

    const titlePrefix = "Fortuna Enterprise";
    const titleSuffix = " | Quality Import-Export Solutions";

    document.title = `${titlePrefix} - ${pageTitle} ${titleSuffix}`;

    const metaTags =
      {
        "/": {
          keywords:
            "import-export, global trade, Fortuna Enterprise, trade solutions, quality products",
          description:
            "Fortuna Enterprise is your premier partner in global import-export solutions. Explore our services today!",
        },
        "/about": {
          keywords:
            "about Fortuna Enterprise, import-export services, company mission, global trade experts",
          description:
            "Learn more about Fortuna Enterprise and our commitment to quality and service in global trade.",
        },
        "/products": {
          keywords:
            "import-export products, agricultural goods, textiles, consumer electronics, quality imports",
          description:
            "Explore our wide range of high-quality import-export products including agricultural goods and electronics.",
        },
        "/services": {
          keywords:
            "import-export services, logistics management, sourcing solutions, trade consulting",
          description:
            "Discover our comprehensive import-export services tailored for your business needs and growth.",
        },
        "/contact": {
          keywords:
            "contact Fortuna Enterprise, customer support, inquiries, trade assistance",
          description:
            "Get in touch with Fortuna Enterprise for all your import-export inquiries and support.",
        },
        "/blog": {
          keywords:
            "Fortuna Enterprise blog, import-export insights, industry news, expert advice",
          description:
            "Read the Fortuna Enterprise blog for the latest insights on import-export and industry trends.",
        },
        "/dashboard": {
          keywords:
            "dashboard, admin panel, manage blog posts, user management",
          description:
            "Admin Dashboard for managing blog posts and user access.",
        },
      }[location.pathname] || {};

    // Update or create meta tags
    let metaKeywordsElement = document.querySelector('meta[name="keywords"]');
    let metaDescriptionElement = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaKeywordsElement) {
      metaKeywordsElement = document.createElement("meta");
      metaKeywordsElement.name = "keywords";
      document.head.appendChild(metaKeywordsElement);
    }

    if (!metaDescriptionElement) {
      metaDescriptionElement = document.createElement("meta");
      metaDescriptionElement.name = "description";
      document.head.appendChild(metaDescriptionElement);
    }

    metaKeywordsElement.setAttribute("content", metaTags.keywords);
    metaDescriptionElement.setAttribute("content", metaTags.description);

    return () => {
      // Optionally clear or reset meta tags on unmount
      metaKeywordsElement.removeAttribute("content");
      metaDescriptionElement.removeAttribute("content");
    };
  }, [location]);

  const isAdmin = false; // Replace with actual admin check logic

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    ...(isAdmin ? [{ path: "/dashboard", label: "Dashboard" }] : []), // Conditionally show Dashboard for admins
  ];

  // for whatsapp
  const handleTopUpClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=917506615066&text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
      "_blank"
    );
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          flexDirection: "row", // Keep everything in a single row
        }}>
        <Box display="flex" alignItems="center" sx={{ flexWrap: "wrap" }}>
          <Email sx={{ mr: 1, fontSize: { xs: 18, sm: 24 } }} />{" "}
          {/* Adjust icon size */}
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "16px" }, // Small font for mobile
            }}>
            info@fortunaenterprise.in
          </Typography>
          <Phone sx={{ ml: 4, mr: 1, fontSize: { xs: 18, sm: 24 } }} />
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "16px" },
            }}>
            +91-7506615066
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            sx={{ color: "white", fontSize: { xs: 18, sm: 24 } }}>
            <Facebook />
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            sx={{ color: "white", fontSize: { xs: 18, sm: 24 } }}>
            <Instagram />
          </IconButton>
          <IconButton
            target="_blank"
            sx={{ color: "white", fontSize: { xs: 18, sm: 24 } }}>
            <WhatsApp onClick={handleTopUpClick} />
          </IconButton>
          <IconButton
            href="https://www.youtube.com"
            target="_blank"
            sx={{ color: "white", fontSize: { xs: 18, sm: 24 } }}>
            <YouTube />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com"
            target="_blank"
            sx={{ color: "white", fontSize: { xs: 18, sm: 24 } }}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>

      <AppBar
        position="sticky"
        style={{ backgroundColor: "#ffffff", color: "#333" }}>
        <Toolbar className="container mx-auto flex justify-between items-center px-4 py-2">
          <Typography variant="h6" style={{ color: "#333" }}>
            <Link
              to="/"
              className="flex items-center no-underline hover:no-underline">
              <img
                src="/company-logo-png.png"
                alt="Fortuna Enterprise Company Logo"
                className="h-8 mr-2"
              />
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
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                  textDecoration:
                    location.pathname === item.path ? "underline" : "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1E40AF")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    location.pathname === item.path ? "#1E40AF" : "#333")
                }>
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
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={toggleDrawer}
              style={{ color: "#333", marginLeft: "8px" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <div
            style={{
              width: "250px",
              padding: "16px",
              backgroundColor: "#f9f9f9",
            }}>
            <div className="flex justify-between items-center mb-4">
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", color: "#333" }}>
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
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e0e0e0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                  aria-label={`Navigate to ${item.label}`} // Accessibility improvement
                >
                  <ListItemText>
                    <span
                      style={{
                        color:
                          location.pathname === item.path ? "#1E40AF" : "#333",
                        fontWeight:
                          location.pathname === item.path ? "bold" : "normal",
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
          onClick={ScrollToTopButton}
          style={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            backgroundColor: "#25D366", // WhatsApp green
            color: "#fff",
            borderRadius: "50%", // Make it circular
            width: "56px", // Fixed width
            height: "56px", // Fixed height
            display: "flex", // Center icon vertically and horizontally
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s, transform 0.2s",
            zIndex: 1000,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#128C7E"; // Darker shade on hover
            e.target.style.transform = "scale(1.1)"; // Slightly enlarge on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#25D366"; // Original color
            e.target.style.transform = "scale(1)"; // Reset scale
          }}
          aria-label="Scroll to Top"
          onFocus={(e) => (e.target.style.outline = "none")}
          onBlur={(e) => (e.target.style.outline = "")}>
          <KeyboardArrowUpIcon />
        </Button>
      )}
      <WhatsAppTopUp />
    </>
  );
}
