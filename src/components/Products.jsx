import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import gsap from "gsap";

function Products() {
  const productsRef = useRef(null);

  // Animation on Load
  useEffect(() => {
    const cards = productsRef.current.querySelectorAll(".product-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2, // Add stagger effect for each card
      }
    );
  }, []);

  return (
    <Container
      ref={productsRef}
      sx={{ py: 4, bgcolor: "#f5f5f5", borderRadius: "8px" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}>
        Discover Our Diverse Product Offerings
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}>
        At Fortuna Enterprise, we specialize in sourcing and exporting a wide
        range of products, ensuring that our clients have access to high-quality
        goods that meet their needs.
      </Typography>
      <Grid container spacing={2}>
        {/* Agricultural Products Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="product-card"
            sx={{
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)", boxShadow: 3 },
            }}>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/rice-field_23-2147981283.jpg"
              alt="Agricultural Products"
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}>
                Agricultural Products
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Explore our carefully selected agricultural products, ensuring
                quality and authenticity.
              </Typography>
              <ul>
                <li>
                  ✓ Rice: Sourced from the best farms in India, known for its
                  quality and taste.
                </li>
                <li>
                  ✓ Spices: Including turmeric, cumin, and black pepper,
                  carefully selected for authenticity.
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Premium Spices Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="product-card"
            sx={{
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)", boxShadow: 3 },
            }}>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/variety-spices_23-2147864970.jpg"
              alt="Premium Spices"
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}>
                Premium Spices
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Discover our premium selection of organic spices, sourced
                directly from farms.
              </Typography>
              <ul>
                <li>
                  ✓ Turmeric: Renowned for its vibrant color and health
                  benefits.
                </li>
                <li>✓ Cumin: A staple spice known for its distinct flavor.</li>
                <li>
                  ✓ Black Pepper: The "king of spices," perfect for enhancing
                  any dish.
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Organic Foods Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="product-card"
            sx={{
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)", boxShadow: 3 },
            }}>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/organic-foods_23-2147981280.jpg"
              alt="Organic Foods"
              sx={{
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}>
                Organic Foods
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Enjoy our range of organic foods, sourced sustainably for your
                health and wellness.
              </Typography>
              <ul>
                <li>✓ Fresh Vegetables: Straight from organic farms.</li>
                <li>✓ Organic Fruits: Naturally ripened for the best taste.</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Products;
