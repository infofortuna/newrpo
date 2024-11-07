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
        "https://media.istockphoto.com/id/1180755247/photo/healthy-snacks.jpg?s=2048x2048&w=is&k=20&c=4xLOwqV6cyQEqayv9-f6OD_zCO5du4UuWzMzy13XpkM=",
    },
    {
      title: "Organic Sauces",
      description:
        "Made from fresh, natural ingredients to enhance your meals.",
      image:
        "https://cdn.pixabay.com/photo/2021/01/27/10/22/sauces-5959969_960_720.jpg",
    },
    {
      title: "Instant Oats",
      description: "Quick and nutritious breakfast option for busy mornings.",
      image:
        "https://cdn.pixabay.com/photo/2017/08/21/18/51/oats-2666062_960_720.jpg",
    },
    {
      title: "Nut Butter",
      description: "Smooth and creamy butters made from natural nuts.",
      image:
        "https://cdn.pixabay.com/photo/2020/01/09/13/34/nut-4749046_960_720.jpg",
    },
    {
      title: "Granola Bars",
      description: "Tasty, energy-boosting snacks packed with goodness.",
      image:
        "https://cdn.pixabay.com/photo/2018/06/11/16/17/granola-3761354_960_720.jpg",
    },
    {
      title: "Canned Vegetables",
      description: "Convenient and healthy canned vegetable options.",
      image:
        "https://cdn.pixabay.com/photo/2020/04/16/14/13/canned-food-5054504_960_720.jpg",
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
