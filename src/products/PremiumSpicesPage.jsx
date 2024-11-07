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
        "https://media.istockphoto.com/id/186612528/photo/spices.jpg?s=2048x2048&w=is&k=20&c=8L1w7tcw1TckWxG3DlZT35LztnvR8gWgwk_JB3zzXRI=",
    },
    {
      title: "Black Pepper",
      description: "The king of spices, perfect for enhancing any dish.",
      image:
        "https://cdn.pixabay.com/photo/2021/03/17/23/28/pepper-6119384_960_720.jpg",
    },
    {
      title: "Cardamom",
      description: "Highly aromatic spice, great for desserts and curries.",
      image:
        "https://cdn.pixabay.com/photo/2020/06/21/13/30/spices-5321160_960_720.jpg",
    },
    {
      title: "Coriander",
      description: "Adds a mild, slightly sweet taste to dishes.",
      image:
        "https://cdn.pixabay.com/photo/2019/07/05/16/09/coriander-4315254_960_720.jpg",
    },
    {
      title: "Chili Powder",
      description: "Adds a fiery heat to enhance your favorite meals.",
      image:
        "https://cdn.pixabay.com/photo/2019/05/21/16/35/chili-4211460_960_720.jpg",
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
