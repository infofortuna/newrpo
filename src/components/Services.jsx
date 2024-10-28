import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Modal,
  IconButton,
} from "@mui/material";
import { MdCheckCircle, MdClose } from "react-icons/md"; // Importing icons
import { FaGlobe } from "react-icons/fa"; // Icon for export markets

gsap.registerPlugin(ScrollTrigger);

const styles = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: 24,
    padding: 4,
    maxWidth: "90%",
    maxHeight: "80%",
    overflowY: "auto",
  },
};

function Services() {
  const servicesRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const cards = servicesRef.current.querySelectorAll(".service-card");

    if (!isSmallScreen) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
        }
      );
    }

    if (isSmallScreen) {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
              once: true,
            },
          }
        );
      });
    }
  }, [isSmallScreen]);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedService(null);
  };
  const styles = {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(5px)", // Blur effect for background
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Increased shadow for depth
      padding: 4,
      maxWidth: "90%",
      maxHeight: "80%",
      overflowY: "auto",
      animation: "fade-in 0.3s", // Fade-in animation
    },
    closeButton: {
      position: "absolute",
      right: 16,
      top: 16,
      color: "gray",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      "&:hover": {
        color: "red", // Change color on hover for better visibility
      },
    },
  };
  // CSS for fade-in animation
  const fadeInAnimation = `
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

  // Include the CSS in your component
  const stylesCSS = document.createElement("style");
  stylesCSS.innerHTML = fadeInAnimation;
  document.head.appendChild(stylesCSS);
  const servicesData = [
    {
      title: "Sourcing and Supplying Services",
      image: "sourcing.jpeg",
      keyPoints: [
        {
          text: "Local Expertise",
          icon: <MdCheckCircle />,
          description:
            "Deep connections with farmers, manufacturers, and suppliers across various sectors.",
        },
        {
          text: "Quality Control",
          icon: <MdCheckCircle />,
          description:
            "Stringent quality assessments to ensure only the best products are selected.",
        },
        {
          text: "Customization",
          icon: <MdCheckCircle />,
          description:
            "Ability to source and supply specific varieties and grades tailored to your needs.",
        },
      ],
    },
    {
      title: "Logistics Management",
      image: "logistic.jpeg",
      keyPoints: [
        {
          text: "Comprehensive Logistics",
          icon: <MdCheckCircle />,
          description:
            "Efficient handling of shipping, documentation, and customs clearance.",
        },
        {
          text: "Timely Delivery",
          icon: <MdCheckCircle />,
          description: "Ensuring your products arrive on time.",
        },
        {
          text: "Secure Packaging",
          icon: <MdCheckCircle />,
          description:
            "Advanced solutions to maintain product quality during transit.",
        },
      ],
    },
    {
      title: "Export-Import Operations Management ",
      image: "impexp.jpeg",
      keyPoints: [
        {
          text: "Comprehensive Support",
          icon: <MdCheckCircle />,
          description:
            "Assistance in managing import documentation, regulations, and compliance procedures.",
        },
        {
          text: "Customs Clearance",
          icon: <MdCheckCircle />,
          description: "Expertise to ensure smooth customs processes.",
        },
        {
          text: "Risk Management",
          icon: <MdCheckCircle />,
          description: "Proactive strategies to minimize import-related risks.",
        },
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: "gray.100", py: 6 }}>
      <Container maxWidth="lg" ref={servicesRef}>
        <Typography
          variant="h4"
          align="center"
          color="primary.main"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" },
            fontWeight: "bold",
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          gutterBottom
          sx={{
            mt: 2,
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" },
          }}
        >
          &quot;Your Trusted Partner in Global Trade Solutions.&quot;
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                className="service-card"
                sx={{
                  height: "100%",
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    color="primary.main"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                    }}
                  >
                    <MdCheckCircle
                      style={{ marginRight: "0.5rem", color: "green" }}
                    />
                    {service.title}
                  </Typography>
                  {service.keyPoints.map((point, index) => (
                    <Box
                      key={index}
                      onClick={() => handleOpenModal(service)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        padding: "8px 0",
                        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>{point.icon}</span>
                      <Typography
                        color="text.secondary"
                        paragraph
                        sx={{
                          fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
                        }}
                      >
                        {point.text}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Modal for Service Details */}
        <Modal open={openModal} onClose={handleCloseModal} sx={styles.modal}>
          <Box sx={styles.modalContent}>
            <button onClick={handleCloseModal} style={styles.closeButton}>
              <MdClose />
            </button>
            {selectedService && (
              <>
                <Typography
                  variant="h5"
                  color="primary.main"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
                  }}
                >
                  {selectedService.title}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <CardMedia
                      component="img"
                      image={selectedService.image}
                      alt={selectedService.title}
                      sx={{
                        borderRadius: 2,
                        objectFit: "cover",
                        height: "200px", // Fixed height for uniformity
                        width: "100%", // Full width
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {selectedService.keyPoints.map((point, index) => (
                      <Typography
                        key={index}
                        paragraph
                        sx={{ lineHeight: 1.6 }}
                      >
                        <strong>{point.text}:</strong> {point.description}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        </Modal>

        {/* New Export Markets Section */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Card
            sx={{
              backgroundColor: "primary.light",
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              color="primary.contrastText"
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
                fontWeight: "bold",
              }}
            >
              <FaGlobe style={{ marginRight: "0.5rem" }} />
              Export Markets
            </Typography>
            <Typography
              color="primary.contrastText"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
              paragraph
            >
              We specialize in sourcing and exporting a diverse range of
              high-quality products to various global markets.
            </Typography>
            <Typography
              color="primary.contrastText"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
              paragraph
            >
              Our key export markets include:
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "United States",
                "European Union",
                "Middle East",
                "Southeast Asia",
                "Africa",
              ].map((market, index) => (
                <li key={index}>
                  <Typography
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
                    }}
                  >
                    • {market}
                  </Typography>
                </li>
              ))}
            </ul>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
