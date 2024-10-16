import { Box, Typography, Grid } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, forwardRef } from "react";
import gsap from "gsap";

const ImportExport = forwardRef((_, ref) => {
  // Removed props
  // Animation for Import/Export Section
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [ref]);

  return (
    <Box
      ref={ref} // Use the forwarded ref
      sx={{
        bgcolor: "#f0f0f0",
        borderRadius: "8px",
        p: 4,
        boxShadow: 2,
        mt: 4,
      }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
        Import & Export
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ borderRadius: "8px", overflow: "hidden" }}>
            <img
              src="https://img.freepik.com/premium-photo/cargo-ship-is-parked-harbor-with-sunset-background_1305390-2016.jpg?size=626&ext=jpg"
              alt="Import-Export"
              style={{
                width: "100%",
                height: "auto",
                transition: "transform 0.5s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              textAlign: "center",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Export-Import Made Easy
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Helping your company establish international trade.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {/* Export Section */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  bgcolor: "white",
                  p: 3,
                  borderRadius: "8px",
                  boxShadow: 1,
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Export
                </Typography>
                <Box sx={{ height: "2px", bgcolor: "gray", my: 1 }} />
                <ul>
                  {[
                    "Best approach for your company.",
                    "Sales to GCC, Africa, South-East Asia.",
                    "Price negotiation and business conditions.",
                    "Contract coordination with buyers.",
                    "Daily communication with customers.",
                    "Representation at exhibitions.",
                  ].map((text, index) => (
                    <li
                      key={index}
                      style={{ display: "flex", alignItems: "center" }}>
                      <FaCheckCircle
                        style={{ color: "#1976d2", marginRight: "8px" }}
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>

            {/* Import Section */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  bgcolor: "white",
                  p: 3,
                  borderRadius: "8px",
                  boxShadow: 1,
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Import
                </Typography>
                <Box sx={{ height: "2px", bgcolor: "gray", my: 1 }} />
                <ul>
                  {[
                    "We find the best suppliers for you.",
                    "Negotiation of delivery terms.",
                    "Inspection of quality of products.",
                    "Documentation and logistics.",
                    "Support throughout the process.",
                  ].map((text, index) => (
                    <li
                      key={index}
                      style={{ display: "flex", alignItems: "center" }}>
                      <FaCheckCircle
                        style={{ color: "#1976d2", marginRight: "8px" }}
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
});

export default ImportExport;
