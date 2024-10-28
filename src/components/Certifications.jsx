import { Box, Typography, Grid, Paper, Modal } from "@mui/material";
import { useState } from "react";

// Business certificates data
const businessCertificates = [
  { src: "/fssai1.jpg", alt: "FSSAI Certificate" },
  { src: "/SpiceC.jpg", alt: "Spice Certificate" },
  { src: "/IEC.jpg", alt: "IEC Certificate" },
  { src: "/Apeda_page-1.jpg", alt: "APEDA Certificate" },
  { src: "/gst.jpg", alt: "GST Certificate" },
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  return (
    <Box sx={{ mt: 6, px: { xs: 2, sm: 4 } }}>
      {/* Top Section */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{
          py: 4,
          borderBottom: "2px solid #FFA500",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Grid item>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "center", borderRadius: 2 }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#FFA500", fontWeight: "bold" }}
            >
              2024
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", fontWeight: "medium" }}
            >
              Year Of Establishment
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "center", borderRadius: 2 }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#FFA500", fontWeight: "bold" }}
            >
              Merchant Exporter
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            sx={{ padding: 2, textAlign: "center", borderRadius: 2 }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#FFA500", fontWeight: "bold" }}
            >
              GST Number
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", fontWeight: "medium" }}
            >
              24ABPPG2927G1ZQ
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Certifications Header */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h4" color="primary.main" gutterBottom>
          Certifications
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          We are certified by various national bodies that prove our quality and
          standard of services. Below are some of our certifications:
        </Typography>
      </Box>

      {/* Certificates Section */}
      <Box sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {businessCertificates.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 5,
                  },
                }}
                onClick={() => handleOpen(cert.src)}
              >
                <Box
                  component="img"
                  src={cert.src}
                  alt={cert.alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    right: 0,
                    color: "#fff",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    padding: 1,
                    borderRadius: 1,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  {cert.alt}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal for displaying the clicked image */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={selectedImage}
          alt="Large View"
          sx={{
            maxWidth: "90%",
            maxHeight: "90%",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Modal>
    </Box>
  );
};

export default Certifications;

{
  /* General Certifications */
}
{
  /* Uncomment if you wish to display general certifications
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: 2,
              }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <Typography variant="h6" color="primary.main">
                {cert.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cert.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid> */
}

// const certifications = [
//   {
//     title: "ISO 9001:2015 Certified",
//     image: "/path/to/iso9001.jpg", // Replace with the actual image path
//     description: "Quality management system certification.",
//   },
//   {
//     title: "HACCP Certified",
//     image: "/path/to/haccp.jpg", // Replace with the actual image path
//     description: "Hazard analysis and critical control points certification.",
//   },
//   {
//     title: "FDA Approved for Food Exports",
//     image: "/path/to/fda.jpg", // Replace with the actual image path
//     description: "Certification for compliance with food safety regulations.",
//   },
// ];
