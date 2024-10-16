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
} from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const servicesRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation on Load for big screens
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

    // Animation on Scroll for small screens
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

  return (
    <Box sx={{ backgroundColor: "gray.100", py: 6 }}>
      <Container maxWidth="lg" ref={servicesRef}>
        <Typography variant="h4" align="center" color="indigo.600" gutterBottom>
          Our Services
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="gray.950"
          gutterBottom
          sx={{ mt: 2 }}>
          &quot;Your Trusted Partner in Global Trade Solutions.&quot;
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {/* Sourcing Services Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="service-card"
              sx={{
                height: "100%", // Ensure consistent height
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)", // Zoom in
                  boxShadow: 3,
                },
              }}>
              <CardMedia
                component="img"
                height="200"
                image="/global-sourcing.jpg"
                alt="Sourcing Services"
                sx={{
                  objectFit: "contain",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)" }, // Optional: Zoom on image hover
                }}
              />
              <CardContent>
                <Typography variant="h6" color="gray.800">
                  Sourcing Services
                </Typography>
                <Typography color="gray.600" paragraph>
                  <strong>Local Expertise:</strong> Deep connections with
                  manufacturers and suppliers across various sectors.
                </Typography>
                <Typography color="gray.600" paragraph>
                  <strong>Quality Control:</strong> Stringent quality
                  assessments to ensure only the best products are selected.
                </Typography>
                <Typography color="gray.600" paragraph>
                  <strong>Customization:</strong> Ability to source specific
                  varieties and grades as per client requirements.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Export Services Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="service-card"
              sx={{
                height: "100%", // Ensure consistent height
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)", // Zoom in
                  boxShadow: 3,
                },
              }}>
              <CardMedia
                component="img"
                height="200"
                image="/Export Services.jpg"
                alt="Export Services"
                sx={{
                  objectFit: "contain",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)" }, // Optional: Zoom on image hover
                }}
              />
              <CardContent>
                <Typography variant="h6" color="gray.800">
                  Export Services
                </Typography>
                <Typography color="gray.600" paragraph>
                  <strong>Logistics Management:</strong> Efficient handling of
                  shipping, documentation, and customs clearance.
                </Typography>
                <Typography color="gray.600" paragraph>
                  <strong>Timely Delivery:</strong> Reliable timelines to ensure
                  your orders arrive when needed.
                </Typography>
                <Typography color="gray.600" paragraph>
                  <strong>Secure Packaging:</strong> Advanced packaging
                  solutions to maintain product quality during transit.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Consulting Services Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className="service-card"
              sx={{
                height: "100%", // Ensure consistent height
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)", // Zoom in
                  boxShadow: 3,
                },
              }}>
              <CardMedia
                component="img"
                height="200"
                image="/Consulting Services.jpg"
                alt="Consulting Services"
                sx={{
                  objectFit: "contain",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)" }, // Optional: Zoom on image hover
                }}
              />
              <CardContent>
                <Typography variant="h6" color="gray.800">
                  Consulting Services
                </Typography>
                <Typography color="gray.600" paragraph>
                  <strong>Market Insights:</strong> Providing clients with
                  valuable information on global trade trends and demands.
                </Typography>
                <Typography color="gray.600" paragraph>
                  <strong>Regulatory Assistance:</strong> Guidance on compliance
                  with international trade regulations and standards.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Why Our Services Stand Out Section */}
        <Box mt={8} textAlign="center">
          <Typography variant="h5" color="gray.800" gutterBottom>
            Why Our Services Stand Out
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  p: 3,
                  height: "100%", // Ensure consistent height
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: 3 },
                }}>
                <Typography variant="h6" color="indigo.600" gutterBottom>
                  Efficiency
                </Typography>
                <Typography color="gray.600">
                  Streamlined processes that minimize delays and maximize
                  productivity.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  p: 3,
                  height: "100%", // Ensure consistent height
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: 3 },
                }}>
                <Typography variant="h6" color="indigo.600" gutterBottom>
                  Reliability
                </Typography>
                <Typography color="gray.600">
                  Consistent delivery of high-quality products you can trust.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  p: 3,
                  height: "100%", // Ensure consistent height
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: 3 },
                }}>
                <Typography variant="h6" color="indigo.600" gutterBottom>
                  Customer Support
                </Typography>
                <Typography color="gray.600">
                  Dedicated support team to assist you at every step.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box mt={8} textAlign="center">
          <Typography variant="body1" color="gray.600">
            At Fortuna Enterprise, we pride ourselves on our commitment to
            excellence and customer satisfaction. Contact us today to learn more
            about how we can assist you in your business endeavors.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
