import { useEffect, useRef } from "react";
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
      sx={{
        py: 4,
        bgcolor: "#f8f8f8",
        borderRadius: "8px",
        boxShadow: 3,
        mt: 2,
        mb: 2,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
      >
        Discover Our Diverse Product Offerings
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        At Fortuna Enterprise, we specialize in sourcing and exporting a wide
        range of products, ensuring that our clients have access to high-quality
        goods that meet their needs.
      </Typography>
      <Grid container spacing={4}>
        {/* Agricultural Products Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="product-card"
            sx={{
              height: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              border: "1px solid #e0e0e0",
              "&:hover": { transform: "scale(1.05)", boxShadow: 5 },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.pixabay.com/photo/2023/09/25/16/18/agriculture-8275498_960_720.jpg"
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
                sx={{ fontWeight: "bold", color: "#1976d2" }}
              >
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
              transition: "transform 0.3s, box-shadow 0.3s",
              border: "1px solid #e0e0e0",
              "&:hover": { transform: "scale(1.05)", boxShadow: 5 },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/862309762/photo/abhyanga-snan-on-first-day-of-diwali-special-herbal-bath-with-ubtan-or-utne-a-mix-herbal.jpg?s=2048x2048&w=is&k=20&c=t0L953-QOsg7AhGuBfNn7MdIKQyRtjxDdakIauobmV8="
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
                sx={{ fontWeight: "bold", color: "#1976d2" }}
              >
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

        {/* Processed Foods Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="product-card"
            sx={{
              height: "100%",
              transition: "transform 0.3s, box-shadow 0.3s",
              border: "1px solid #e0e0e0",
              "&:hover": { transform: "scale(1.05)", boxShadow: 5 },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/1147252758/photo/healthy-vegetarian-food-background-vegetables-pesto-and-lentil-curry-with-tofu.jpg?s=2048x2048&w=is&k=20&c=8zbnbstQR6nflAuEmk6OVnnROWRIrUTW4cGqDPQ3ce8="
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
                sx={{ fontWeight: "bold", color: "#1976d2" }}
              >
                Processed Foods
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Experience our selection of high-quality processed foods,
                crafted with care for your health and enjoyment. Each product is
                made from carefully sourced ingredients to ensure taste and
                nutritional value.
              </Typography>
              <ul>
                <li>
                  ✓ Healthy Snacks: Delicious and nutritious options for
                  on-the-go enjoyment.
                </li>
                <li>
                  ✓ Organic Sauces: Made from fresh, natural ingredients to
                  enhance your meals.
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Products;
