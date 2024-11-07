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
  useMediaQuery,
  Box,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Email,
  Phone,
  Facebook,
  Instagram,
  WhatsApp,
  LinkedIn,
  Agriculture,
  Fastfood,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import WhatsAppTopUp from "./WhatsApp";

export default function EnhancedNavbar() {
  const location = useLocation(); // Get the current route for updating the page title and meta tags
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State to control the opening/closing of the mobile drawer
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if the screen size is mobile or not
  const [showScrollTop, setShowScrollTop] = useState(false); // State to toggle visibility of scroll-to-top button
  const [showProductOptions, setShowProductOptions] = useState(false); // State to toggle visibility of product options in desktop navbar

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen); // Toggle mobile drawer open/close

  // Scroll to top effect when route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]);

  // Handle showing the scroll-to-top button after scrolling a certain distance
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 100); // Show button if scrolled 100px
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on unmount
  }, []);

  // Handle scrolling back to top when the button is clicked
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // Dynamically set the page title and meta tags based on the current route
  useEffect(() => {
    const pageTitle =
      location.pathname === "/"
        ? "Home"
        : location.pathname.charAt(1).toUpperCase() +
          location.pathname.slice(2); // Capitalize the first letter of the route for page title
    document.title = `Fortuna Enterprise - ${pageTitle} | Quality Import-Export Solutions`;

    // Set meta tags for SEO based on the current route
    const metaTags =
      {
        "/": {
          keywords:
            "import-export, global trade, Fortuna Enterprise, trade solutions",
          description:
            "Fortuna Enterprise is your premier partner in global import-export solutions.",
        },
        "/about": {
          keywords: "about Fortuna Enterprise, import-export services",
          description:
            "Learn more about Fortuna Enterprise's commitment to quality and service in global trade.",
        },
        "/products": {
          keywords:
            "import-export products, agriculture, textiles, electronics",
          description:
            "Explore our range of high-quality import-export products including agricultural goods and electronics.",
        },
        "/services": {
          keywords: "import-export services, logistics, sourcing solutions",
          description:
            "Discover our tailored import-export services for business growth.",
        },
        "/contact": {
          keywords: "contact Fortuna Enterprise, support, inquiries",
          description:
            "Get in touch with Fortuna Enterprise for all your import-export inquiries.",
        },
      }[location.pathname] || {}; // Default to empty object if route not found

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaKeywords) metaKeywords.setAttribute("content", metaTags.keywords); // Update meta keywords
    if (metaDescription)
      metaDescription.setAttribute("content", metaTags.description); // Update meta description
  }, [location]);

  // Product options for the "Products" dropdown menu
  const productActions = [
    {
      icon: <Agriculture />, // Icon for Agricultural Products
      name: "Agricultural Products",
      path: "/products/agriculture",
    },
    {
      icon: <FontAwesomeIcon icon={faPepperHot} />, // Pepper icon from FontAwesome
      name: "Premium Spices",
      path: "/products/spices",
    },
    {
      icon: <Fastfood />, // Icon for Processed Foods
      name: "Processed Foods",
      path: "/products/processed-foods",
    },
  ];
  // Main navigation menu items
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Contact Information Bar */}
      <Box
        sx={{
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box display="flex" alignItems="center">
          {/* Contact info with icons */}
          <Email sx={{ mr: 1, fontSize: { xs: 18, sm: 24 } }} />
          <Typography sx={{ fontSize: { xs: "10px", sm: "16px" } }}>
            info@fortunaenterprise.in
          </Typography>
          <Phone sx={{ ml: 4, mr: 1, fontSize: { xs: 18, sm: 24 } }} />
          <Typography sx={{ fontSize: { xs: "10px", sm: "16px" } }}>
            +91-7506615066
          </Typography>
        </Box>

        {/* Social media icons */}
        <Box display="flex" alignItems="center">
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            sx={{ color: "white" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/fortunaenterprise_/"
            target="_blank"
            sx={{ color: "white" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=917506615066&text= Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20products.",
                "_blank"
              )
            }
            sx={{ color: "white" }}
          >
            <WhatsApp />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/mahesh-gulechaa-941867210/"
            target="_blank"
            sx={{ color: "white" }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
      {/* Main Navigation Bar */}
      <AppBar
        position="sticky"
        style={{ backgroundColor: "#ffffff", color: "#333" }}
      >
        <Toolbar className="container mx-auto flex justify-between items-center px-4 py-2">
          {/* Logo and site name */}
          <Typography variant="h6" style={{ color: "#333" }}>
            <Link
              to="/"
              className="flex items-center no-underline hover:no-underline"
            >
              <img
                src="/company-logo-png.png"
                alt="Company Logo"
                className="h-8 mr-2"
              />
              <span className="text-xl">Fortuna Enterprise</span>
            </Link>
          </Typography>

          {/* Desktop Menu Items */}
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
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Products Dropdown */}
            <div
              onMouseEnter={() => setShowProductOptions(true)}
              onMouseLeave={() => setShowProductOptions(false)}
              style={{ position: "relative" }}
            >
              <Button
                style={{
                  color: "#333",
                  fontWeight: showProductOptions ? "bold" : "normal",
                }}
              >
                Products
              </Button>
              {showProductOptions && (
                <SpeedDial
                  ariaLabel="Products"
                  open={showProductOptions}
                  direction="down"
                  style={{
                    position: "absolute",
                    top: "-25px", // Moves the SpeedDial 10% above the button
                    left: 0,
                    zIndex: 1, // Ensures it appears above other components
                  }}
                  FabProps={{
                    style: {
                      backgroundColor: "transparent", // Remove background color
                      boxShadow: "none", // Remove the shadow (blue bubble effect)
                    },
                  }}
                >
                  {productActions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                      onClick={() => (window.location.href = action.path)}
                      sx={{
                        "& .MuiTooltip-tooltip": {
                          fontSize: "16px", // Default font size
                        },
                        "&:hover .MuiTooltip-tooltip": {
                          fontSize: "18px", // Increase font size on hover
                        },
                      }}
                    />
                  ))}
                </SpeedDial>
              )}
            </div>
          </div>

          {/* "Get Started" Button */}
          <Button
            component={Link}
            to="/contact"
            style={{
              backgroundColor: "#1E40AF",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: "9999px",
              marginLeft: isMobile ? "auto" : "16px",
            }}
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={toggleDrawer}
              style={{ color: "#333" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <div style={{ width: "250px" }}>
            <IconButton
              onClick={toggleDrawer} // Ensure this toggles the drawer state correctly
              style={{ float: "right", margin: "8px" }}
            >
              <CloseIcon />
            </IconButton>
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  onClick={toggleDrawer} // Close drawer on item click
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}

              <ListItem
                button
                onClick={() => setShowProductOptions(!showProductOptions)}
              >
                <ListItemText primary="Products" />
              </ListItem>
              {showProductOptions && (
                <Box ml={4}>
                  {productActions.map((action) => (
                    <ListItem
                      button
                      key={action.name}
                      component={Link}
                      to={action.path}
                      onClick={toggleDrawer} // Close drawer on product item click
                    >
                      <ListItemText primary={action.name} />
                    </ListItem>
                  ))}
                </Box>
              )}
            </List>
          </div>
        </Drawer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Box
            onClick={handleScrollToTop}
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              zIndex: 100,
              bgcolor: "primary.main", // Default background color
              p: 0.5, // Padding to make the button smaller
              borderRadius: "50%",
              cursor: "pointer",
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "background-color 0.3s ease", // Smooth transition for background color
              "&:hover": {
                bgcolor: "primary.dark", // Darker background color on hover
              },
              "&:active": {
                bgcolor: "primary.light", // Lighter background color when clicked
              },
            }}
          >
            <KeyboardArrowUpIcon fontSize="medium" sx={{ color: "white" }} />
          </Box>
        )}
      </AppBar>
      <WhatsAppTopUp /> {/* Floating WhatsApp button */}
    </>
  );
}
