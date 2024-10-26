import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  Divider,
  Grid,
  IconButton,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    product: "",
  });
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://fortunaenterprise.in/contact.php", {
        // Change this to your actual domain
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setSubmissionMessage(result.message);
      setOpen(true);
    } catch (error) {
      setSubmissionMessage("Something went wrong. Please try again later.");
      setOpen(true);
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        product: "",
      });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        py: 6,
        px: 2,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 1,
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#f9f9f9",
          width: { xs: "100%", md: "80%", lg: "70%" },
          overflow: "hidden",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                color: "#00796b",
              }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ mb: 3 }} color="textSecondary">
              Please fill out the form below, and our team will get back to you
              promptly.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <TextField
                  id="product"
                  name="product"
                  label="Product"
                  variant="outlined"
                  value={formData.product}
                  onChange={handleChange}
                />

                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#005b5b",
                    },
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Stack>
            </form>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "#00796b",
              color: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Box
              sx={{
                border: "4px solid white",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Avatar
                alt="Fortuna Enterprise"
                src="company-logo-png.png" // Update with your logo path
                sx={{
                  width: 60,
                  height: 60,
                }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                color: "white",
              }}
            >
              Get in Touch
            </Typography>
            <Typography sx={{ mb: 2, fontSize: { xs: "0.85rem", md: "1rem" } }}>
              We’re here to assist you with all your import-export needs. Reach
              out to us through any of the following methods:
            </Typography>
            <Divider sx={{ mb: 2, backgroundColor: "whiteAlpha.400" }} />
            <Typography fontWeight="bold">Contact Information:</Typography>
            <Box
              sx={{ border: "1px solid white", borderRadius: 1, p: 2, mt: 2 }}
            >
              <Stack spacing={1}>
                <Typography display="flex" alignItems="center">
                  <FaPhoneAlt style={{ marginRight: 8 }} />
                  +91-7506615066
                </Typography>
                <Typography display="flex" alignItems="center">
                  <FaEnvelope style={{ marginRight: 8 }} />
                  <span
                    style={{ color: "#ffeb3b", textDecoration: "underline" }}
                  >
                    info@fortunaenterprise.in
                  </span>
                </Typography>
                <Typography display="flex" alignItems="center">
                  <FaMapMarkerAlt style={{ marginRight: 8 }} />
                  Fortuna Enterprise B-320, Atlantis K10, near Genda circle,
                  Vadodara - 390007
                </Typography>
              </Stack>
            </Box>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <IconButton
                color="inherit"
                href="#"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="#"
                aria-label="Twitter"
                target="_blank"
              >
                <FaTwitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/in/mahesh-gulechaa-941867210"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/fortunaenterprise_/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </IconButton>
            </Stack>
            {/* Google Map */}
            <Box
              sx={{
                mt: 3,
                width: "100%",
                height: "200px",
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
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={submissionMessage}
      />
    </Box>
  );
}

export default ContactUs;
