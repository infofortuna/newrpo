import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

function PremiumSpicesPage() {
  const products = [
    {
      title: "Turmeric",
      description: "Renowned for its vibrant color and health benefits.",
      image:
        "https://media.istockphoto.com/id/862309762/photo/abhyanga-snan-on-first-day-of-diwali-special-herbal-bath-with-ubtan-or-utne-a-mix-herbal.jpg?s=2048x2048&w=is&k=20&c=t0L953-QOsg7AhGuBfNn7MdIKQyRtjxDdakIauobmV8=",
    },
    {
      title: "Cumin",
      description: "A staple spice known for its distinct flavor.",
      image:
        "https://media.istockphoto.com/id/516361766/photo/cumin-seeds-in-glass-at-local-market-indian-spices.jpg?s=2048x2048&w=is&k=20&c=WIpqKsKFMPhhM1WAVrVvRMGkgZy45xVvOLilmml3Zl0=",
    },
    {
      title: "Black Pepper",
      description: "The king of spices, perfect for enhancing any dish.",
      image:
        "https://media.istockphoto.com/id/675377232/photo/black-pepper-grain-in-the-bowl-on-the-table-in-the-kitchen-healthy-eating-and-lifestyle.jpg?s=2048x2048&w=is&k=20&c=Fjee5QZ3FkjoslKpD6sQ0KgwQgbdrGJjqbtYXDdjCEc=",
    },
    {
      title: "Cardamom",
      description: "Highly aromatic spice, great for desserts and curries.",
      image:
        "https://media.istockphoto.com/id/518709136/photo/green-cardamom-pods-in-steel-bowl.jpg?s=2048x2048&w=is&k=20&c=mo6yBnCkdLnGpZ1XgRqsETXJ_tk1mleZgYtaNg3zXjw=",
    },
    {
      title: "Coriander",
      description: "Adds a mild, slightly sweet taste to dishes.",
      image:
        "https://media.istockphoto.com/id/475438973/photo/coriander-seeds-in-mortar-and-fresh-leaves-with-copy-space.jpg?s=2048x2048&w=is&k=20&c=e9ArMJVZJ97c1FvW-qAabNj6UyMYWfy30-P-3uMPKZs=",
    },
    {
      title: "Chili Powder",
      description: "Adds a fiery heat to enhance your favorite meals.",
      image:
        "https://media.istockphoto.com/id/1308870896/photo/chili-peppers.jpg?s=2048x2048&w=is&k=20&c=04kLEJUgVYNZUSGKxgN3j-mQi9_qMl5Ajat14dryDcA=",
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Premium Spices
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

export default PremiumSpicesPage;
