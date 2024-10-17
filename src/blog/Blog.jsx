import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    excerpt: "",
    author: "",
    readTime: "",
    category: "",
    fullContent: "",
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Organic Trade Landscape: Trends to Watch",
      image: "https://via.placeholder.com/400x250.png?text=Organic+Trade",
      excerpt: "Explore the current trends in the organic trade landscape...",
      date: "2024-10-01",
      author: "John Doe",
      readTime: "5 min",
      category: "Trade",
      fullContent:
        "This is the full content of the first blog post. It delves into the details of organic trade trends and insights...",
    },
    {
      id: 2,
      title:
        "Top 10 Tips for Successful Importing and Exporting of Organic Goods",
      image: "https://via.placeholder.com/400x250.png?text=Importing+Tips",
      excerpt:
        "Learn essential tips for navigating the import-export process...",
      date: "2024-09-25",
      author: "Jane Smith",
      readTime: "7 min",
      category: "Tips",
      fullContent:
        "This is the full content of the second blog post, discussing important tips for successful importing and exporting...",
    },
    // ... more blog posts
  ]);

  const navigate = useNavigate();

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value && filteredPosts.length === 0) {
      setToastOpen(true);
    } else {
      setToastOpen(false);
    }
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setOpenPostModal(true);
  };

  const handlePostModalClose = () => {
    setOpenPostModal(false);
    setSelectedPost(null);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setNewPost({
      title: "",
      image: "",
      excerpt: "",
      author: "",
      readTime: "",
      category: "",
      fullContent: "",
    });
  };

  const handleAddPost = () => {
    const newId = posts.length
      ? Math.max(...posts.map((post) => post.id)) + 1
      : 1;
    setPosts([...posts, { id: newId, ...newPost }]);
    handleDialogClose();
  };

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
            onChange={handleSearchChange}
          />
        </Box>

        {/* Toast Notification */}
        <Snackbar
          open={toastOpen}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          onClose={() => setToastOpen(false)}>
          <Alert
            onClose={() => setToastOpen(false)}
            severity="warning"
            sx={{ width: "100%" }}>
            No matching blog posts found!
          </Alert>
        </Snackbar>

        {/* Add Blog Button */}
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDialogOpen}>
            Add New Blog
          </Button>
        </Box>

        {/* Blog List */}
        <Grid container spacing={4}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                className="shadow-lg rounded-lg overflow-hidden"
                onClick={() => handlePostClick(post)}
                style={{ cursor: "pointer" }}>
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Modal for Full Blog Content */}
        <Dialog open={openPostModal} onClose={handlePostModalClose}>
          <DialogTitle>{selectedPost?.title}</DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              height="300"
              image={selectedPost?.image}
              alt={selectedPost?.title}
            />
            <Typography variant="body2" color="text.secondary" className="mt-2">
              <strong>Author:</strong> {selectedPost?.author} |{" "}
              <strong>Date:</strong> {selectedPost?.date} |{" "}
              <strong>Read Time:</strong> {selectedPost?.readTime} |{" "}
              <strong>Category:</strong> {selectedPost?.category}
            </Typography>
            <Typography variant="body1" paragraph className="mt-4">
              {selectedPost?.fullContent}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePostModalClose} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {/* Add Blog Dialog */}
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Add New Blog Post</DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              margin="normal"
            />
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              value={newPost.image}
              onChange={(e) =>
                setNewPost({ ...newPost, image: e.target.value })
              }
              margin="normal"
            />
            <TextField
              label="Excerpt"
              variant="outlined"
              fullWidth
              value={newPost.excerpt}
              onChange={(e) =>
                setNewPost({ ...newPost, excerpt: e.target.value })
              }
              margin="normal"
            />
            <TextField
              label="Author"
              variant="outlined"
              fullWidth
              value={newPost.author}
              onChange={(e) =>
                setNewPost({ ...newPost, author: e.target.value })
              }
              margin="normal"
            />
            <TextField
              label="Read Time"
              variant="outlined"
              fullWidth
              value={newPost.readTime}
              onChange={(e) =>
                setNewPost({ ...newPost, readTime: e.target.value })
              }
              margin="normal"
            />
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={newPost.category}
              onChange={(e) =>
                setNewPost({ ...newPost, category: e.target.value })
              }
              margin="normal"
            />
            <TextField
              label="Full Content"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={newPost.fullContent}
              onChange={(e) =>
                setNewPost({ ...newPost, fullContent: e.target.value })
              }
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleAddPost} color="primary" variant="contained">
              Add Blog
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default Blog;
