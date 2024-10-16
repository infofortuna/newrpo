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
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: 2,
        marginBottom: "2rem", // Space below the section
      }}>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{ marginBottom: "1.5rem", fontWeight: "bold" }}>
        Why Choose Fortuna Enterprise?
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              padding: "1.5rem",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)", // Zoom in effect
              },
            }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ marginBottom: "1rem" }}>
              Premium Organic Agriculture
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              We specialize in sourcing high-quality organic agricultural
              products from sustainable farms. Our commitment to organic
              practices ensures that you receive products that are not only good
              for you but also good for the planet.
            </Typography>
            <ul>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography variant="body2">
                  Certified organic sourcing.
                </Typography>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography variant="body2">
                  Traceable supply chain for all products.
                </Typography>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography variant="body2">
                  Commitment to sustainability and eco-friendliness.
                </Typography>
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              padding: "1.5rem",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)", // Zoom in effect
              },
            }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ marginBottom: "1rem" }}>
              Quality Assurance
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              We maintain strict quality control measures to ensure that all our
              products meet international standards. Our products are regularly
              tested for purity and quality, giving you peace of mind with every
              purchase.
            </Typography>
            <ul>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography variant="body2">
                  Rigorous quality control protocols.
                </Typography>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography variant="body2">
                  Regular inspections and certifications.
                </Typography>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography variant="body2">
                  Customer satisfaction is our priority.
                </Typography>
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
        <Typography variant="h6" component="h3" sx={{ marginBottom: "1rem" }}>
          Join Us in Promoting Organic Agriculture
        </Typography>
        <Typography variant="body1">
          Partner with Fortuna Enterprise for a sustainable future. Let&apos;s
          work together to provide high-quality organic agricultural products
          that benefit everyone.
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyUs;
