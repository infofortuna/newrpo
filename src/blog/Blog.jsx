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
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
}));

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const [posts, setPosts] = useState([
    {
      id: 0,
      title: "Sustainable Practices in Agriculture and Import-Export Business",
      image:
        "https://imgs.search.brave.com/Axq9uTkoKZy3VR4BfeeUteJlBlZJhvIUvicerbDVZtE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29uc2VydmUtZW5l/cmd5LWZ1dHVyZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMDcvc3VzdGFp/bmFibGUtYWdyaWN1/bHR1cmUtMS5qcGc",
      excerpt:
        "Explore how sustainable practices in agriculture benefit the environment and economy.",
      date: "2024-10-17",
      author: "Fortuna Enterprise",
      readTime: "6 min",
      category: "Sustainability",
      fullContent: `As the world grapples with environmental challenges, the agricultural sector stands at the forefront of the quest for sustainability. At Fortuna Enterprise, we believe that adopting sustainable practices is not only essential for the environment but also beneficial for businesses and consumers alike. This blog post explores the significance of sustainability in agriculture and the import-export business, highlighting the steps we take to promote eco-friendly practices in our operations.

**Understanding Sustainability in Agriculture**
Sustainability in agriculture refers to farming practices that meet current food and textile needs without compromising the ability of future generations to meet their needs. This concept encompasses various dimensions:

- **Environmental Protection:** Sustainable agriculture minimizes environmental impact by preserving natural resources, reducing pollution, and enhancing biodiversity. This can involve techniques such as crop rotation, cover cropping, and organic farming methods.

- **Economic Viability:** Sustainable practices ensure that farming remains profitable for producers. This includes fair trade practices, providing farmers with a stable income and market access for their goods.

- **Social Equity:** A sustainable agricultural system promotes social equity by supporting local communities, ensuring fair wages for workers, and fostering community development.

**The Role of Fortuna Enterprise in Promoting Sustainability**
At Fortuna Enterprise, we are committed to fostering sustainable practices in our import-export operations. Here are some of the key strategies we employ:

1. **Partnering with Organic Farmers**  
We prioritize sourcing our products from certified organic farms that adhere to eco-friendly practices. This not only ensures the quality of our offerings but also supports farmers who are committed to sustainable agriculture. By fostering long-term relationships with local farmers, we create a reliable supply chain that benefits all parties involved.

2. **Emphasizing Quality Control**  
Sustainability starts with quality. Our stringent quality control processes involve regular inspections and testing of products to ensure they meet international standards. By maintaining high-quality products, we help reduce waste and promote consumer trust in organic agricultural goods.

3. **Streamlined Logistics Management**  
Efficient logistics is crucial for minimizing the carbon footprint of agricultural imports and exports. At Fortuna Enterprise, we utilize advanced logistics management systems to optimize shipping routes, reduce delivery times, and ensure secure packaging. This not only enhances efficiency but also preserves the freshness and quality of our products.

4. **Education and Advocacy**  
As part of our commitment to sustainability, we actively educate our clients and partners about the importance of eco-friendly practices in agriculture. Through workshops, seminars, and resources on our blog, we share insights on sustainable farming techniques, regulatory compliance, and market trends.

5. **Implementing Sustainable Packaging Solutions**  
We recognize the impact of packaging on the environment. Therefore, we are dedicated to using sustainable packaging materials that minimize waste and reduce environmental impact. Our packaging solutions are designed to be biodegradable or recyclable, ensuring that we contribute to a cleaner planet.

**The Benefits of Sustainable Practices**
Embracing sustainability in agriculture and the import-export business offers numerous benefits:

- **Enhanced Brand Reputation:** Companies that prioritize sustainability are viewed more favorably by consumers, which can lead to increased loyalty and market share.

- **Access to New Markets:** Many consumers are willing to pay a premium for sustainable products. By offering organic and sustainably sourced goods, Fortuna Enterprise can tap into these lucrative markets.

- **Long-term Cost Savings:** Sustainable practices often lead to reduced costs over time. For example, using organic farming methods can decrease dependence on expensive synthetic fertilizers and pesticides.

- **Resilience to Market Changes:** Sustainable agriculture promotes biodiversity, which can make farms more resilient to pests, diseases, and climate change, ensuring a more stable supply of products.

**Conclusion**
Sustainability is not just a trend; it is a necessity for the future of agriculture and the global economy. At Fortuna Enterprise, we are dedicated to promoting eco-friendly practices in our operations and ensuring that our products are not only of the highest quality but also responsibly sourced. By embracing sustainability, we aim to contribute to a healthier planet while meeting the needs of our clients and partners worldwide. Join us in our mission to foster a sustainable future for the agricultural sector and beyond.`,
    },
    {
      id: 1,
      title: "The Importance of Organic Farming in Modern Agriculture",
      image:
        "https://imgs.search.brave.com/XAZqqE6RG-bDZjL74Ea9-BSiy85n5jtOyB-U405qXaI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0M1/NjEyQVFIanA4am9n/Y0NRZkEvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNjAw/XzIwMDAvMC8xNTIw/MTYzNjYxODA2P2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD1jcnRH/WGhRTjZONWxlQVQ2/SHZyVTNtT3ZQRGhX/V2NfU0NlMHl6b3h5/ZG9v.jpeg",
      excerpt:
        "Explore the role of organic farming in promoting sustainable practices and improving food quality.",
      date: "2024-10-20",
      author: "Fortuna Enterprise",
      readTime: "5 min",
      category: "Organic Farming",
      fullContent: `In recent years, organic farming has gained significant attention as a sustainable alternative to conventional agriculture. At Fortuna Enterprise, we recognize the crucial role that organic farming plays in promoting environmental health, enhancing food quality, and supporting local economies. In this blog post, we will explore the importance of organic farming in modern agriculture and its benefits for both consumers and the planet.
    
    **What is Organic Farming?**
    Organic farming is a method of agriculture that emphasizes the use of natural processes and materials. It avoids synthetic fertilizers, pesticides, and genetically modified organisms (GMOs), focusing instead on practices that maintain soil health and promote biodiversity. Key principles of organic farming include:
    
    - **Soil Health:** Organic farmers prioritize building and maintaining healthy soils through techniques like crop rotation, composting, and cover cropping. Healthy soil is essential for growing nutritious crops and sustaining the environment.
    
    - **Biodiversity:** Organic farming encourages biodiversity by incorporating various plants and animals into farming systems. This diversity helps control pests naturally, reduces disease outbreaks, and enhances ecosystem resilience.
    
    - **Sustainability:** Organic practices aim to create a sustainable agricultural system that meets current food needs without compromising future generations' ability to meet their needs.
    
    **Benefits of Organic Farming**
    1. **Environmental Benefits**  
       Organic farming practices significantly reduce pollution and conserve water. By avoiding synthetic chemicals, organic farmers help protect waterways from contamination and promote soil conservation. Furthermore, organic farming supports healthy ecosystems by fostering biodiversity and improving soil structure.
    
    2. **Health Benefits**  
       Consumers increasingly seek organic products for their perceived health benefits. Organic fruits and vegetables are often fresher and free from harmful chemical residues. Studies have shown that organic foods may contain higher levels of antioxidants and essential nutrients, providing consumers with better-quality food options.
    
    3. **Economic Opportunities**  
       Organic farming creates economic opportunities for local farmers and communities. By supporting local organic farms, consumers contribute to their local economies and promote sustainable food systems. Organic farming also opens new markets for farmers, as demand for organic products continues to grow globally.
    
    4. **Climate Change Mitigation**  
       Organic farming can play a significant role in mitigating climate change. Practices such as cover cropping, reduced tillage, and agroforestry can sequester carbon in the soil, helping to offset greenhouse gas emissions. By promoting organic farming, we can contribute to climate resilience and sustainability.
    
    **Conclusion**  
    As we navigate the challenges of modern agriculture, organic farming stands out as a viable solution that prioritizes environmental health, consumer well-being, and economic sustainability. At Fortuna Enterprise, we are committed to supporting organic farming practices and promoting eco-friendly products in our operations. By choosing organic, we can all play a part in building a healthier, more sustainable future for agriculture and food systems worldwide.`,
    },
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

        {/* Blog Posts Grid */}
        <Grid container spacing={3}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <StyledCard
                onClick={() => handlePostClick(post)}
                sx={{ cursor: "pointer" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.author} | {post.date}
                  </Typography>
                  <Button size="small" onClick={() => handlePostClick(post)}>
                    Read More
                  </Button>
                </CardContent>
              </StyledCard>
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
              <strong>Read Time:</strong> {selectedPost?.readTime}
            </Typography>
            <Typography variant="body1" className="mt-2">
              {selectedPost?.fullContent}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePostModalClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default Blog;
