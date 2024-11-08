import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

function ProcessedFoodsPage() {
  const products = [
    {
      title: "Healthy Snacks",
      description: "Delicious and nutritious options for on-the-go enjoyment.",
      image:
        "https://media.istockphoto.com/id/1155403392/photo/mother-preparing-school-lunch-box.jpg?s=2048x2048&w=is&k=20&c=9un50Z9R9GeAuTx6C-lMhp4N9xC3ZjF7NJKM8w82AbE=",
    },
    {
      title: "Organic Sauces",
      description: "Made from natural ingredients to enhance your meals.",
      image:
        "https://media.istockphoto.com/id/497948923/photo/homemade-red-italian-marinara-sauce.jpg?s=2048x2048&w=is&k=20&c=8aTd_LYbC6r4VRR3VCMD2iBRVr9FRXt1Wvi85AyaT8o=",
    },
    {
      title: "Instant Oats",
      description: "Quick and nutritious breakfast option for busy mornings.",
      image:
        "https://media.istockphoto.com/id/178540827/photo/instant-oatmeal-with-dried-raspberries-on-slate-surface.jpg?s=2048x2048&w=is&k=20&c=JISOa6so-R3zUYpwMpvgX1symWetbGk7PMJpm227GFk=",
    },
    {
      title: "Nut Butter",
      description: "Smooth and creamy butters made from natural nuts.",
      image:
        "https://media.istockphoto.com/id/1250251387/photo/toast-with-peanut-butter-on-vintage-table-set-in-rustic-kitchen.jpg?s=2048x2048&w=is&k=20&c=fqiI7F0oahsjVctKFKjVc4mcENT0PWlnxUWjqZTXXho=",
    },
    {
      title: "Granola Bars",
      description: "Tasty, energy-boosting snacks packed with goodness.",
      image:
        "https://media.istockphoto.com/id/1363848757/photo/energy-granola-bars-with-different-seeds-nuts-and-dried-fruits-and-berries-on-white-marble.jpg?s=2048x2048&w=is&k=20&c=VMTq620yycX7_88Cnw8OJ-_-ReMcLXhH5WPZ3zthyCk=",
    },
    {
      title: "Canned Vegetables",
      description: "Convenient and healthy canned vegetable options.",
      image:
        "https://media.istockphoto.com/id/1155951289/photo/preserved-vegetables-in-glass-jars.jpg?s=2048x2048&w=is&k=20&c=l3RNhqrYZ-ubGbh5J-DaJcGcZGyv-2E4RgMTyoDxcCA=",
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Processed Foods
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

export default ProcessedFoodsPage;
