import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [posts, setPosts] = useState([
    {
      title: "Leveraging Technology for Better Agricultural Trade Outcomes",
      image:
        "https://media.istockphoto.com/id/471175766/photo/peeled-garlic-in-bowl.jpg?s=612x612&w=0&k=20&c=a9fLu-110l9bPbwkyHpmeiJxgWvh_sA2AVzKWrg7odQ=",
      excerpt: "Explore how technology is transforming agricultural trade...",
      date: "2024-08-30",
      author: "Emma Wilson",
      readTime: "5 min",
      category: "Technology",
    },
    {
      title: "Leveraging Technology for Better Agricultural Trade Outcomes",
      image:
        "https://media.istockphoto.com/id/471175766/photo/peeled-garlic-in-bowl.jpg?s=612x612&w=0&k=20&c=a9fLu-110l9bPbwkyHpmeiJxgWvh_sA2AVzKWrg7odQ=",
      excerpt: "Explore how technology is transforming agricultural trade...",
      date: "2024-08-30",
      author: "Emma Wilson",
      readTime: "5 min",
      category: "Technology",
    },
    {
      title: "Leveraging Technology for Better Agricultural Trade Outcomes",
      image:
        "https://media.istockphoto.com/id/471175766/photo/peeled-garlic-in-bowl.jpg?s=612x612&w=0&k=20&c=a9fLu-110l9bPbwkyHpmeiJxgWvh_sA2AVzKWrg7odQ=",
      excerpt: "Explore how technology is transforming agricultural trade...",
      date: "2024-08-30",
      author: "Emma Wilson",
      readTime: "5 min",
      category: "Technology",
    },
    // Additional posts...
  ]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDialogOpen = (post = null) => {
    setCurrentPost(post);
    setImagePreview(post ? post.image : "");
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setCurrentPost(null);
    setImagePreview("");
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setCurrentPost((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePost = () => {
    if (currentPost) {
      // Update existing post
      setPosts((prev) =>
        prev.map((post) =>
          post.title === currentPost.title ? currentPost : post
        )
      );
    } else {
      // Add new post
      setPosts((prev) => [
        ...prev,
        { ...currentPost, date: new Date().toISOString().split("T")[0] },
      ]);
    }
    handleDialogClose();
  };

  const handleDeletePost = (title) => {
    setPosts((prev) => prev.filter((post) => post.title !== title));
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Fortuna Enterprise Blog</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDialogOpen()}
            sx={{
              marginLeft: "auto",
              bgcolor: "#1976d2", // Custom color
              "&:hover": {
                bgcolor: "#155a8a", // Darker shade on hover
              },
              borderRadius: "20px",
              padding: "10px 20px",
              fontWeight: "bold",
            }}>
            Add Blog Post
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>

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
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleDialogOpen(post)}>
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeletePost(post.title)}>
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Dialog for Add/Edit Blog Post */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          {currentPost ? "Edit Blog Post" : "Add New Blog Post"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            name="title"
            value={currentPost?.title || ""}
            onChange={handleInputChange}
          />
          <Box mt={2}>
            <input
              accept="image/*"
              type="file"
              id="image-upload"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="image-upload">
              <Button variant="outlined" component="span">
                Upload Image
              </Button>
            </label>
            {imagePreview && (
              <CardMedia
                component="img"
                height="150"
                image={imagePreview}
                alt="Preview"
                style={{ marginTop: "10px" }}
              />
            )}
          </Box>
          <TextField
            margin="dense"
            label="Excerpt"
            type="text"
            fullWidth
            name="excerpt"
            value={currentPost?.excerpt || ""}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Category"
            type="text"
            fullWidth
            name="category"
            value={currentPost?.category || ""}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Read Time"
            type="text"
            fullWidth
            name="readTime"
            value={currentPost?.readTime || ""}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Author"
            type="text"
            fullWidth
            name="author"
            value={currentPost?.author || ""}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSavePost} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
