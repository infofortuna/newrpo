
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

function AgriculturalProductsPage() {
  const products = [
    // Array of products for agricultural category
    {
      title: "Rice",
      description:
        "Sourced from the best farms in India, known for its quality.",
      image:
        "https://cdn.pixabay.com/photo/2023/09/25/16/18/agriculture-8275498_960_720.jpg",
    },
    {
      title: "Spices",
      description: "Turmeric, cumin, and black pepper, carefully selected.",
      image:
        "https://media.istockphoto.com/id/862309762/photo/abhyanga-snan-on-first-day-of-diwali-special-herbal-bath-with-ubtan-or-utne-a-mix-herbal.jpg?s=2048x2048&w=is&k=20&c=t0L953-QOsg7AhGuBfNn7MdIKQyRtjxDdakIauobmV8=",
    },
    // Add more products...
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Agricultural Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AgriculturalProductsPage;
