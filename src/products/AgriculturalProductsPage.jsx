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
        "https://media.istockphoto.com/id/671580286/photo/rice.jpg?s=2048x2048&w=is&k=20&c=LoQzIZMwhbdXImggwJ--jaAkGdvSVvWFBdlBTa2ZEYo=",
    },
    {
      title: "Wheat",
      description:
        "High-quality wheat, perfect for all your baking and cooking needs. Sourced from the finest fields to ensure purity and excellent grain quality.",
      image:
        "https://media.istockphoto.com/id/874147316/photo/wheat-flields.jpg?s=2048x2048&w=is&k=20&c=9dJ9k7GCSWaupbIR0fbGqdUaj19xWSfGK0_sj5h-x1w=",
    },
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
