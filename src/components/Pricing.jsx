import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Box,
  Container,
  Divider,
} from "@mui/material";
import gsap from "gsap";

export default function PricingPlans() {
  const pricingRef = useRef(null);

  const pricingPlans = [
    {
      name: "Standard",
      services: [
        "Supplier Identification",
        "Sampling and Product Development",
        "Negotiation and Price Evaluation",
        "Quality Control and Inspection",
        "Logistics and Supply Chain Management",
        "Ongoing Supplier Management",
        "Supplier Performance Evaluation",
      ],
      productValues: [
        { value: "$1k - $5k", fee: "5%" },
        { value: "$5k - $10k", fee: "4%" },
        { value: "$10k - $25k", fee: "3%" },
        { value: "$25k - $50k", fee: "2%" },
        { value: "More than $50k", fee: "Negotiable" },
      ],
    },
  ];

  // Animation on Load
  useEffect(() => {
    gsap.fromTo(
      pricingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <Box sx={{ bgcolor: "#f0f4f8", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Pricing Plans
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Pricing Section */}
          <Grid item xs={12} md={6} ref={pricingRef}>
            <Card elevation={3} sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardHeader
                title="Standard Pricing"
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  padding: 2,
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Included Services:
                </Typography>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  {pricingPlans[0].services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" sx={{ mb: 1 }}>
                  Pricing Breakdown:
                </Typography>
                <Grid container spacing={2}>
                  {pricingPlans[0].productValues.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card
                        elevation={2}
                        sx={{
                          borderRadius: 2,
                          boxShadow: 1,
                          textAlign: "center",
                          padding: 2,
                          bgcolor: "white",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: 4,
                          },
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold">
                          {item.value}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {item.fee}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Google Map Section */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardHeader
                title="Our Location"
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  padding: 2,
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    mt: 2,
                    width: "100%",
                    height: "300px",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15887.12599008619!2d73.1659085!3d22.3176504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b84cad1c5f%3A0x5f36b27a05260b16!2sAtlantis%20K10!5e0!3m2!1sen!2sus!4v1697762919003!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
