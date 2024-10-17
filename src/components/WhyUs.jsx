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
        sx={{
          marginBottom: "1.5rem",
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" }, // Responsive font sizes
        }}>
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
              sx={{
                marginBottom: "1rem",
                fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font sizes
              }}>
              Premium Organic Agriculture
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "1rem",
                fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font sizes
              }}>
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
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Responsive font sizes
                  }}>
                  Certified organic sourcing.
                </Typography>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Responsive font sizes
                  }}>
                  Traceable supply chain for all products.
                </Typography>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Responsive font sizes
                  }}>
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
              sx={{
                marginBottom: "1rem",
                fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font sizes
              }}>
              Quality Assurance
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "1rem",
                fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font sizes
              }}>
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
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Responsive font sizes
                  }}>
                  Rigorous quality control protocols.
                </Typography>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Responsive font sizes
                  }}>
                  Regular inspections and certifications.
                </Typography>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaCheckCircle
                  style={{ color: "#4caf50", marginRight: "0.5rem" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Responsive font sizes
                  }}>
                  Customer satisfaction is our priority.
                </Typography>
              </li>
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
          }}>
          What We Do
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
                sx={{
                  marginBottom: "1rem",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font sizes
                }}>
                Market Research & Trend Analysis
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "1rem",
                  fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font sizes
                }}>
                We continuously track and analyze spice market trends to help
                our clients make informed, strategic investment decisions.
              </Typography>
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
                sx={{
                  marginBottom: "1rem",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font sizes
                }}>
                Client Acquisition
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "1rem",
                  fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font sizes
                }}>
                Our team actively seeks new clients, establishing connections
                both domestically and internationally to expand your reach.
              </Typography>
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
                sx={{
                  marginBottom: "1rem",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font sizes
                }}>
                Product Sourcing
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "1rem",
                  fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font sizes
                }}>
                We specialize in sourcing premium-quality spices from reliable
                suppliers across India, ensuring only the best for your
                business.
              </Typography>
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
                sx={{
                  marginBottom: "1rem",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font sizes
                }}>
                Logistics & Support
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "1rem",
                  fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font sizes
                }}>
                Offering end-to-end support, we manage the entire purchasing
                process to ensure a smooth, efficient experience.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            marginBottom: "1rem",
            fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive font sizes
          }}>
          Join Us in Promoting Organic Agriculture
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font sizes
          }}>
          Partner with Fortuna Enterprise for a sustainable future. Let&apos;s
          work together to provide high-quality organic agricultural products
          that benefit everyone.
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyUs;
