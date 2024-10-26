import { Box, Typography, Grid, Paper } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const WhyUs = () => {
  const whyUsRef = useRef(null);

  // Animation for Why Choose Us Section
  useEffect(() => {
    gsap.fromTo(
      whyUsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Box
      ref={whyUsRef}
      sx={{
        backgroundColor: "#f9fafb", // Light gray background
        padding: { xs: "1rem", sm: "2rem" }, // Responsive padding
        borderRadius: "8px",
        boxShadow: 2,
        marginBottom: "2rem", // Space below the section
      }}
      role="region"
      aria-labelledby="why-us-title"
    >
      <Typography
        id="why-us-title"
        variant="h2"
        component="h2"
        align="center"
        sx={{
          marginBottom: "1.5rem",
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" }, // Responsive font sizes
        }}
      >
        Why Choose Fortuna Enterprise?
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem",
              borderRadius: "12px",
              backgroundColor: "#ffffff",
              position: "relative",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              sx={{
                marginBottom: "1rem",
                fontSize: { xs: "1.5rem", sm: "1.8rem" },
                fontWeight: 600,
                textAlign: "center",
                color: "#333",
              }}
            >
              Premium Organic Agriculture: Sourcing Directly from Farmers
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "1rem",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                lineHeight: 1.6,
                textAlign: "center",
                color: "#555",
              }}
            >
              At Fortuna Enterprise, we specialize in sourcing high-quality
              organic agricultural products directly from sustainable farms. Our
              commitment to organic practices ensures that you receive products
              that are not only good for you but also good for the planet.
            </Typography>
            <ul style={{ padding: 0, listStyle: "none", margin: "0" }}>
              {[
                "Certified organic sourcing from trusted farmers.",
                "Transparent and traceable supply chain for all products.",
                "Commitment to sustainability and eco-friendliness.",
                "Supporting local communities through direct partnerships with farmers.",
                "Freshness and quality guaranteed through direct sourcing.",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                    backgroundColor: "#f9f9f9",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <FaCheckCircle
                    style={{ color: "#4caf50", marginRight: "0.5rem" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem",
              borderRadius: "12px",
              backgroundColor: "#ffffff",
              position: "relative",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              sx={{
                marginBottom: "1rem",
                fontSize: { xs: "1.5rem", sm: "1.8rem" },
                fontWeight: 600,
                textAlign: "center",
                color: "#333",
              }}
            >
              Quality Assurance
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "1rem",
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                lineHeight: 1.6,
                textAlign: "center",
                color: "#555",
              }}
            >
              We maintain strict quality control measures to ensure that all our
              products meet international standards. Our products are regularly
              tested for purity and quality, giving you peace of mind with every
              purchase.
            </Typography>
            <ul style={{ padding: 0, listStyle: "none", margin: "0" }}>
              {[
                "Rigorous quality control protocols.",
                "Regular inspections and certifications.",
                "Customer satisfaction is our priority.",
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                    backgroundColor: "#f9f9f9",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <FaCheckCircle
                    style={{ color: "#4caf50", marginRight: "0.5rem" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>

      {/* New What We Do Section */}
      <Box sx={{ marginTop: "2rem" }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            marginBottom: "1.5rem",
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" }, // Responsive font sizes
          }}
        >
          What We Do
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Market Research & Trend Analysis",
              description:
                "We continuously track and analyze spice market trends to help our clients make informed, strategic investment decisions.",
            },
            {
              title: "Client Acquisition",
              description:
                "Our team actively seeks new clients, establishing connections both domestically and internationally to expand your reach.",
            },
            {
              title: "Product Sourcing",
              description:
                "We specialize in sourcing premium-quality spices from reliable suppliers across India, ensuring only the best for your business.",
            },
            {
              title: "Logistics & Support",
              description:
                "Offering end-to-end support, we manage the entire purchasing process to ensure a smooth, efficient experience.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={2}
                sx={{
                  padding: "1.5rem",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)", // Zoom in effect
                  },
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    color: "#333",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyUs;
