import { Box, Grid, Typography, Paper, Modal } from "@mui/material";
import { useState } from "react";

const BusinessInfo = () => {
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
    <Box sx={{ borderBottom: "1px solid #ddd" }}>
      {/* Top Section */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={6} // Increased spacing
        sx={{
          py: 4,
          borderBottom: "1px solid #ddd",
          backgroundColor: "#f9f9f9",
        }} // Added background color
      >
        <Grid item>
          <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: "#FFA500", fontWeight: "bold" }}>
              2024
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", fontWeight: "medium" }}>
              Year Of Establishment
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: "#FFA500", fontWeight: "bold" }}>
              Merchant Exporter
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="h4" sx={{ color: "#FFA500", fontWeight: "bold" }}>
              GST Number
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", fontWeight: "medium" }}>
              24ABPPG2927G1ZQ
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Certificates Section */}
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" align="center" sx={{ mb: 2 }}>
          Certificates
        </Typography>
        <Grid container spacing={2}>
          {[
            { src: "/fssai1.jpg", alt: "FSSAI Certificate" },
            { src: "/SpiceC.jpg", alt: "Spice Certificate" },
            { src: "/IEC.jpg", alt: "IEC Certificate" },
            { src: "/Apeda_page-1.jpg", alt: "APEDA Certificate" },
            { src: "/gst.jpg", alt: "GST Certificate" },
          ].map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 2,
                  height: "300px", // Fixed height for images
                  display: "flex", // Flex to center content
                  alignItems: "center", // Center vertically
                  justifyContent: "center", // Center horizontally
                  cursor: "pointer", // Show pointer cursor on hover
                }}
                onClick={() => handleOpen(cert.src)} // Handle image click
              >
                <Box
                  component="img"
                  src={cert.src}
                  alt={cert.alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // Use 'contain' to fit the image in the box
                    transition: "transform 0.3s ease", // Smooth transition effects
                    "&:hover": {
                      transform: "scale(1.05)", // Slightly enlarge on hover
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
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Background for text
                    padding: 1,
                    borderRadius: 1,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1, // Show text on hover
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

export default BusinessInfo;
