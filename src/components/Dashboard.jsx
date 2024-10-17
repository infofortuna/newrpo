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
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { format } from "date-fns";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("info");
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
  ]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    excerpt: "",
    date: "",
    author: "",
    readTime: "",
    category: "",
  });
  const [editPostId, setEditPostId] = useState(null);
  const [deletePostId, setDeletePostId] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value && filteredPosts.length === 0) {
      showToast("No matching blog posts found!", "warning");
    }
  };

  const showToast = (message, severity) => {
    setToastMessage(message);
    setToastSeverity(severity);
    setToastOpen(true);
  };

  const handleAddPost = () => {
    setOpenAddDialog(true);
  };

  const handleEditPost = (post) => {
    setNewPost(post);
    setEditPostId(post.id);
    setOpenEditDialog(true);
  };

  const handleDialogClose = () => {
    setOpenAddDialog(false);
    setOpenEditDialog(false);
    setOpenPostModal(false);
    setOpenDeleteDialog(false); // Close delete dialog
    setNewPost({
      title: "",
      image: "",
      excerpt: "",
      date: "",
      author: "",
      readTime: "",
      category: "",
    });
    setEditPostId(null);
    setDeletePostId(null);
    setSelectedPost(null);
  };

  const handlePostSubmit = () => {
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const postToAdd = { ...newPost, id: newId };
    setPosts([...posts, postToAdd]);
    showToast("Post added successfully!", "success");
    handleDialogClose();
  };

  const handlePostUpdate = () => {
    const updatedPosts = posts.map((post) =>
      post.id === editPostId ? newPost : post
    );
    setPosts(updatedPosts);
    showToast("Post updated successfully!", "success");
    handleDialogClose();
  };

  const handlePostDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    showToast("Post deleted successfully!", "success");
  };

  const handleNewPostChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setOpenPostModal(true);
  };

  const handleDeleteConfirmation = (id) => {
    setDeletePostId(id);
    setOpenDeleteDialog(true);
  };

  const confirmDeletePost = () => {
    handlePostDelete(deletePostId);
    handleDialogClose();
  };

  const isFormValid = () => {
    return (
      newPost.title &&
      newPost.image &&
      newPost.excerpt &&
      newPost.date &&
      newPost.author &&
      newPost.readTime &&
      newPost.category
    );
  };

  return (
    <Box className="container mx-auto p-4">
      <Typography variant="h4" align="center" gutterBottom>
        Blog Dashboard
      </Typography>

      {/* Search Bar */}
      <Box className="mb-6" display="flex" justifyContent="center">
        <TextField
          label="Search Blog Posts"
          variant="outlined"
          fullWidth
          onChange={handleSearchChange}
          aria-label="Search blog posts"
          sx={{ maxWidth: 600 }}
        />
      </Box>

      {/* Action Buttons */}
      <Box display="flex" justifyContent="center" mb={4}>
        <Button variant="contained" color="primary" onClick={handleAddPost}>
          Add New Post
        </Button>
      </Box>

      {/* Toast Notification */}
      <Snackbar
        open={toastOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}>
        <Alert
          onClose={() => setToastOpen(false)}
          severity={toastSeverity}
          sx={{ width: "100%" }}>
          {toastMessage}
        </Alert>
      </Snackbar>

      {/* Add Post Dialog */}
      <Dialog open={openAddDialog} onClose={handleDialogClose}>
        <DialogTitle>Add a New Blog Post</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            name="title"
            fullWidth
            variant="outlined"
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Image URL"
            name="image"
            fullWidth
            variant="outlined"
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Excerpt"
            name="excerpt"
            fullWidth
            variant="outlined"
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Date"
            name="date"
            fullWidth
            variant="outlined"
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Author"
            name="author"
            fullWidth
            variant="outlined"
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Read Time"
            name="readTime"
            fullWidth
            variant="outlined"
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Category"
            name="category"
            fullWidth
            variant="outlined"
            onChange={handleNewPostChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handlePostSubmit}
            color="primary"
            disabled={!isFormValid()}>
            Add Post
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Post Dialog */}
      <Dialog open={openEditDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Blog Post</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            name="title"
            fullWidth
            variant="outlined"
            value={newPost.title}
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Image URL"
            name="image"
            fullWidth
            variant="outlined"
            value={newPost.image}
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Excerpt"
            name="excerpt"
            fullWidth
            variant="outlined"
            value={newPost.excerpt}
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Date"
            name="date"
            fullWidth
            variant="outlined"
            value={newPost.date}
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Author"
            name="author"
            fullWidth
            variant="outlined"
            value={newPost.author}
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Read Time"
            name="readTime"
            fullWidth
            variant="outlined"
            value={newPost.readTime}
            onChange={handleNewPostChange}
          />
          <TextField
            margin="dense"
            label="Category"
            name="category"
            fullWidth
            variant="outlined"
            value={newPost.category}
            onChange={handleNewPostChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handlePostUpdate}
            color="primary"
            disabled={!isFormValid()}>
            Update Post
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleDialogClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this post?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={confirmDeletePost} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Blog Posts Grid */}
      <Grid container spacing={4}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card onClick={() => handlePostClick(post)}>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="140"
                  image={post.image}
                />
                <CardContent>
                  <Typography variant="h5">{post.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {format(new Date(post.date), "MMMM dd, yyyy")} -{" "}
                    {post.readTime} - {post.category}
                  </Typography>
                </CardContent>
                <Box display="flex" justifyContent="flex-end" padding={2}>
                  <Button
                    onClick={() => handleEditPost(post)}
                    color="primary"
                    size="small">
                    Edit
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteConfirmation(post.id);
                    }}
                    color="error"
                    size="small">
                    Delete
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center" color="text.secondary">
              No posts found. Try searching for something else or add a new
              post!
            </Typography>
          </Grid>
        )}
      </Grid>

      {/* Full Post Modal */}
      <Dialog
        open={openPostModal}
        onClose={() => setOpenPostModal(false)}
        maxWidth="lg"
        fullWidth>
        <DialogTitle>{selectedPost?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            {selectedPost?.fullContent}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPostModal(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
