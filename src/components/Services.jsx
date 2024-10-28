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
import { MdCheckCircle } from "react-icons/md"; // Importing an icon for services
import { FaGlobe } from "react-icons/fa"; // Icon for export markets

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
          }}>
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
          }}>
          &quot;Your Trusted Partner in Global Trade Solutions.&quot;
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {[
            {
              title: "Sourcing and Supplying Services",
              image: "sourcing.jpeg",
              content: [
                { text: "Local Expertise", highlight: true },
                "Deep connections with farmers, manufacturers, and suppliers across various sectors.",
                { text: "Quality Control", highlight: true },
                "Stringent quality assessments to ensure only the best products are selected.",
                { text: "Customization", highlight: true },
                "Ability to source and supply specific varieties and grades tailored to your needs.",
              ],
            },
            {
              title: "Logistics Management",
              image: "logistic.jpeg",
              content: [
                { text: "Comprehensive Logistics", highlight: true },
                "Efficient handling of shipping, documentation, and customs clearance.",
                { text: "Timely Delivery", highlight: true },
                "Ensuring your products arrive on time.",
                { text: "Secure Packaging", highlight: true },
                "Advanced solutions to maintain product quality during transit.",
              ],
            },
            {
              title: "Export-Import Operations Management ",
              image: "impexp.jpeg",
              content: [
                { text: "Comprehensive Support", highlight: true },
                "Assistance in managing import documentation, regulations, and compliance procedures.",
                { text: "Customs Clearance", highlight: true },
                "Expertise to ensure smooth customs processes.",
                { text: "Risk Management", highlight: true },
                "Proactive strategies to minimize import-related risks.",
              ],
            },
          ].map((service, index) => (
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
                }}>
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
                    }}>
                    <MdCheckCircle
                      style={{ marginRight: "0.5rem", color: "green" }}
                    />
                    {service.title}
                  </Typography>
                  {service.content.map((item, index) => (
                    <Typography
                      key={index}
                      color="text.secondary"
                      paragraph
                      sx={{
                        fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
                      }}>
                      {item.highlight ? (
                        <strong style={{ color: "primary.main" }}>
                          {item.text}
                        </strong>
                      ) : (
                        item
                      )}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* New Export Markets Section */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Card
            sx={{
              backgroundColor: "primary.light",
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}>
            <Typography
              variant="h5"
              color="primary.contrastText"
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
                fontWeight: "bold",
              }}>
              <FaGlobe style={{ marginRight: "0.5rem" }} />
              Export Markets
            </Typography>
            <Typography
              color="primary.contrastText"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
              paragraph>
              We specialize in sourcing and exporting a diverse range of
              high-quality products to various global markets.
            </Typography>
            <Typography
              color="primary.contrastText"
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
              paragraph>
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
                    }}>
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
