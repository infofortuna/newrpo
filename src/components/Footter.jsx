import { Box, Container, Grid, Typography, Link, Stack } from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#333", // Dark background color (you can change to '#666' for a gray background)
        color: "#fff",
        py: 4,
        mt: 4, // Margin-top to create space from the component above
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Fortuna Enterprise simplifies global trade, providing exceptional
              sourcing and logistics solutions. Our mission is to drive
              successful global trade through high-quality products and
              outstanding customer service.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="/pricing" color="inherit" underline="hover">
                Pricing
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Stack>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@fortunaenterprise.com
            </Typography>
            <Typography variant="body2">Phone: +91-1234567890</Typography>
            <Typography variant="body2">
              Address: 123 Fortune Lane, City, Country
            </Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1}>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="Facebook">
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="Twitter">
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="Instagram">
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="LinkedIn">
                <LinkedInIcon />
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Fortuna Enterprise. All Rights
            Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
