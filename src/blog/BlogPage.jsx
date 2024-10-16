import React, { useState } from "react";
import {
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button,
} from "@mui/material";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const posts = [
    {
      title: "The Organic Trade Landscape: Trends to Watch",
      image: "https://via.placeholder.com/400x250.png?text=Organic+Trade",
      excerpt: "Explore the current trends in the organic trade landscape...",
      date: "2024-10-01",
      author: "John Doe",
      readTime: "5 min",
      category: "Trade",
    },
    {
      title:
        "Top 10 Tips for Successful Importing and Exporting of Organic Goods",
      image: "https://via.placeholder.com/400x250.png?text=Importing+Tips",
      excerpt:
        "Learn essential tips for navigating the import-export process...",
      date: "2024-09-25",
      author: "Jane Smith",
      readTime: "7 min",
      category: "Tips",
    },
    {
      title: "How to Navigate Agricultural Trade Regulations Effectively",
      image: "https://via.placeholder.com/400x250.png?text=Trade+Regulations",
      excerpt: "Understand the regulations governing agricultural trade...",
      date: "2024-09-15",
      author: "Alice Johnson",
      readTime: "6 min",
      category: "Regulations",
    },
    {
      title: "Sustainable Practices in Agriculture and Import-Export Business",
      image:
        "https://via.placeholder.com/400x250.png?text=Sustainable+Practices",
      excerpt:
        "Discover the importance of sustainability in agricultural practices...",
      date: "2024-09-05",
      author: "Bob Lee",
      readTime: "8 min",
      category: "Sustainability",
    },
    {
      title: "Leveraging Technology for Better Agricultural Trade Outcomes",
      image: "https://via.placeholder.com/400x250.png?text=Technology+in+Trade",
      excerpt: "Explore how technology is transforming agricultural trade...",
      date: "2024-08-30",
      author: "Emma Wilson",
      readTime: "5 min",
      category: "Technology",
    },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Box className="container mx-auto p-4">
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Our Blog
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Insights, Tips, and Trends in Agricultural Import-Export
        </Typography>

        {/* Search Bar */}
        <Box className="mb-6">
          <TextField
            label="Search Blog Posts"
            variant="outlined"
            fullWidth
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

        <Grid container spacing={4}>
          {filteredPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="shadow-lg rounded-lg overflow-hidden">
                <CardMedia
                  component="img"
                  height="250"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    className="text-xl font-bold">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="mt-2">
                    {post.excerpt}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="mt-2">
                    <strong>Category:</strong> {post.category} |{" "}
                    <strong>Read Time:</strong> {post.readTime}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Author:</strong> {post.author} |{" "}
                    <strong>Date:</strong> {post.date}
                  </Typography>
                  <Box mt={2} textAlign="right">
                    <Button variant="contained" color="primary">
                      Read More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Blog;
