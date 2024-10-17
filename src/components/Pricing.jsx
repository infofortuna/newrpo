import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import gsap from "gsap";

export default function PricingPlans() {
  const formRef = useRef(null);
  const pricingRef = useRef(null);

  const pricingPlans = [
    {
      name: "Standard",
      description:
        "Paid in full at the time of advance deposit to the supplier.",
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
        { value: "$1k - $3k", fee: "$200" },
        { value: "$3k - $5k", fee: "$300" },
        { value: "$5k - $10k", fee: "$500" },
        { value: "$10k - $20k", fee: "$700" },
        { value: "$20k - $30k", fee: "$1000" },
        { value: "More than $30k", fee: "Negotiable" },
      ],
    },
  ];

  // Animation on Load
  useEffect(() => {
    gsap.fromTo(
      [formRef.current, pricingRef.current],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <Box sx={{ bgcolor: "background.default", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Pricing Plans
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Consultation regarding Indian market outlook, supplier complexity,
          price ranges, import plans, and procedures, custom compliances are
          free.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Form Section */}
          <Grid item xs={12} md={6} ref={formRef}>
            <Card elevation={3} sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardHeader
                title="Let us know your requirements"
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  textAlign: "center",
                }}
              />
              <CardContent>
                <form>
                  <TextField
                    label="Full Name *"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                  />
                  <TextField
                    label="Company Name *"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                  />
                  <TextField
                    label="Work Email *"
                    variant="outlined"
                    type="email"
                    fullWidth
                    required
                    margin="normal"
                  />
                  <TextField
                    label="WhatsApp Number *"
                    variant="outlined"
                    type="tel"
                    fullWidth
                    required
                    margin="normal"
                  />
                  <TextField
                    label="Product Requirement Specification *"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Pricing Section */}
          <Grid item xs={12} md={6} ref={pricingRef}>
            <Card elevation={3} sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardHeader
                title="Standard Pricing"
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  textAlign: "center",
                }}
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Paid in full at the time of advance deposit to the supplier.
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Included Services:
                </Typography>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  {pricingPlans[0].services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <Box component="table" sx={{ width: "100%", mt: 2 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left", padding: "8px" }}>
                        Product Value
                      </th>
                      <th style={{ textAlign: "left", padding: "8px" }}>
                        Service Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingPlans[0].productValues.map((item, index) => (
                      <tr key={index}>
                        <td style={{ padding: "8px" }}>{item.value}</td>
                        <td style={{ padding: "8px" }}>{item.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Google Map Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Our Location
          </Typography>
          <Box
            sx={{
              mt: 2,
              width: "100%",
              height: "300px",
              borderRadius: 2,
              overflow: "hidden",
            }}>
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
        </Box>
      </Container>
    </Box>
  );
}
