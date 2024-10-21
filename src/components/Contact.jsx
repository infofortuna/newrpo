import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function ContactForm() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        py: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "16px",
        borderRadius: "10px",
      }}
    >
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 4,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Grid container spacing={2} alignItems="stretch">
          {/* Left Side - Image Section (Large Screen) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: { xs: "none", md: "block" }, // Hide on small screens
            }}
          >
            <CardMedia
              component="img"
              image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
              alt="Contact Us"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>

          {/* Middle - Contact Form */}
          <Grid item xs={12} md={4}>
            <CardContent
              sx={{
                p: 4,
                backgroundColor: "#f9f9f9",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{ textAlign: "center", fontWeight: "bold", color: "#333" }}
              >
                Contact Us
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    size="medium"
                    sx={{ backgroundColor: "#ffffff" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    size="medium"
                    sx={{ backgroundColor: "#ffffff" }}
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                size="medium"
                sx={{ mt: 2, backgroundColor: "#ffffff" }}
              />

              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                size="medium"
                sx={{ mt: 2, backgroundColor: "#ffffff" }}
              />

              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                size="medium"
                multiline
                rows={4}
                sx={{ mt: 2, backgroundColor: "#ffffff" }}
              />

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    mr: 2,
                    borderColor: "#00796b",
                    color: "#00796b",
                    "&:hover": {
                      backgroundColor: "#e0f2f1",
                    },
                  }}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#00796b",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#004d40",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </CardContent>
          </Grid>

          {/* Right Side - Get in Touch (Large Screen) */}
          <Grid item xs={12} md={4}>
            <CardContent
              sx={{
                p: 4,
                backgroundColor: "#ffffff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  color: "#333",
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                sx={{ mb: 2, fontSize: { xs: "0.85rem", md: "1rem" } }}
              >
                We’re here to assist you with all your import-export needs.
                Reach out to us through any of the following methods:
              </Typography>
              <Divider sx={{ mb: 2, backgroundColor: "#cccccc" }} />
              <Typography fontWeight="bold">Contact Information:</Typography>
              <Box
                sx={{ border: "1px solid #ddd", borderRadius: 1, p: 2, mt: 2 }}
              >
                <Stack spacing={1}>
                  <Typography display="flex" alignItems="center">
                    <FaPhoneAlt style={{ marginRight: 8 }} />
                    +91-7506615066
                  </Typography>
                  <Typography display="flex" alignItems="center">
                    <FaEnvelope style={{ marginRight: 8 }} />
                    <span
                      style={{ color: "#00796b", textDecoration: "underline" }}
                    >
                      info@fortunaenterprise.in
                    </span>
                  </Typography>
                  <Typography display="flex" alignItems="center">
                    <FaMapMarkerAlt style={{ marginRight: 8 }} />
                    Fortuna Enterprise B-320, Atlantis K10, 3A, Sayaji Path,
                    Alkapuri, Vadodara, Gujarat 390005
                  </Typography>
                </Stack>
              </Box>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <IconButton color="primary" href="#" aria-label="Facebook">
                  <FaFacebook />
                </IconButton>
                <IconButton color="primary" href="#" aria-label="Twitter">
                  <FaTwitter />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://www.linkedin.com/in/mahesh-gulechaa-941867210"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://www.instagram.com/in/mahesh-gulechaa-941867210"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </IconButton>
              </Stack>
            </CardContent>
          </Grid>

          {/* Image Section (Visible on Small Screens) */}
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "block", md: "none" }, // Only visible on small screens
              mt: 2,
            }}
          >
            <CardMedia
              component="img"
              image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
              alt="Contact Us"
              sx={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default ContactForm;
