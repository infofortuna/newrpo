import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";

const BlogPage = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((post) => post.title === postId);

  if (!post) {
    return <Typography variant="h5">Post not found!</Typography>;
  }

  return (
    <Box className="container mx-auto p-4">
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <CardMedia
          component="img"
          height="400"
          image={post.image}
          alt={post.title}
        />
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            className="text-2xl font-bold">
            {post.title}
          </Typography>
          <Typography variant="body1" className="mt-2">
            {post.excerpt}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mt-2">
            <strong>Category:</strong> {post.category} |{" "}
            <strong>Read Time:</strong> {post.readTime}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Author:</strong> {post.author} | <strong>Date:</strong>{" "}
            {post.date}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogPage;
