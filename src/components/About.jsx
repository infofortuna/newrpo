import { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const faqRef = useRef(null);

  // Animation on Load
  useEffect(() => {
    const cards = aboutRef.current.querySelectorAll(".about-card");
    const faqs = faqRef.current.querySelectorAll(".faq-item");

    // Animate About Cards
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      }
    );

    // Animate FAQ Items on Scroll
    faqs.forEach((faq) => {
      gsap.fromTo(
        faq,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: faq,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 8 }}>
      <Container maxWidth="lg" ref={aboutRef}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          color="primary.main"
          sx={{
            fontSize: { xs: "1.8rem", md: "2rem" }, // Adjusted size for responsiveness
          }}
        >
          Welcome to Fortuna Enterprise
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          color="text.secondary"
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" }, // 10% smaller on smaller screens
          }}
        >
          We simplify the complexities of global trade, connecting businesses
          with exceptional sourcing and logistics solutions to foster
          international growth, a commission basis and act as sourcing and
          buying agents, and brokers.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Card Settings */}
          {[
            {
              title: "Our Mission",
              description:
                "To provide high-quality agricultural and organic products that drive successful global trade.",
            },
            {
              title: "Our Vision",
              description:
                "To be the leading facilitator of international trade in agricultural goods, recognized for our commitment to excellence and sustainability.",
            },
            {
              title: "Our Values",
              description:
                "Integrity, quality, and reliability guide every aspect of our operations, ensuring trust and satisfaction in agricultural trade.",
            },
            {
              title: "Expert Team",
              description:
                "Our experienced professionals are dedicated to providing tailored solutions that meet your agricultural and organic goods needs.",
            },
            {
              title: "Innovative Solutions",
              description:
                "We leverage the latest technologies to streamline processes and enhance efficiency in global agricultural trade.",
            },
            {
              title: "Customer-Centric",
              description:
                "Your success is our priority. We work closely with you to understand your needs and exceed your expectations in the agricultural sector.",
            },
          ].map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                className="about-card"
                variant="outlined"
                sx={{
                  height: "100%", // Ensure all cards are the same height
                  display: "flex", // Flexbox to align content
                  flexDirection: "column", // Stack content vertically
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "scale(1.05)", // Slight scale effect
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    align="center"
                    color="primary.main"
                    sx={{
                      fontSize: { xs: "1.35rem", md: "1.5rem" }, // Adjusted size for responsiveness
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    align="center"
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" }, // 10% smaller on smaller screens
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6 }} />

        {/* FAQ Section */}
        <Box mt={6} ref={faqRef}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            color="primary.main"
            sx={{
              fontSize: { xs: "1.75rem", md: "2rem" }, // Adjusted size for responsiveness
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            gutterBottom
            sx={{
              fontSize: { xs: "0.9rem", md: "1rem" }, // 10% smaller on smaller screens
            }}
          >
            Here are some common queries we receive from our clients.
          </Typography>
          <Accordion sx={{ mb: 2 }} defaultExpanded>
            {faqData.map((faq, index) => (
              <Accordion key={index} className="faq-item" variant="outlined">
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography
                    fontWeight="bold"
                    sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontSize: { xs: "0.8rem", md: "0.9rem" } }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Accordion>
        </Box>

        <Button
          component={Link}
          to="/pricing"
          variant="contained"
          color="primary"
          sx={{
            mt: 4,
            display: "block",
            mx: "auto",
            borderRadius: "8px",
            padding: "12px 24px",
            transition: "background-color 0.2s, transform 0.2s",
            "&:hover": {
              bgcolor: "primary.dark",
              transform: "scale(1.05)", // Scale effect on hover
            },
          }}
        >
          Contact Us for More Information
        </Button>
      </Container>
    </Box>
  );
}

// Sample FAQ data
const faqData = [
  {
    question: "What types of products do you export?",
    answer:
      "We source products from a wide range of agriculture, including grains, pulses, cereals, processed foods, spices, mixed and blended curry powders, oils, and oleoresins.",
  },
  {
    question: "How do you ensure the quality of your products?",
    answer:
      "As per the regulations and compliance of the importing country, we provide inspection, testing, and certification as required.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "We export to various international markets, including North America, Europe, the Middle East, Asia-Pacific, and Africa.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We insist on advance payment and also require an irrevocable letter of credit.",
  },
  {
    question: "Can you provide samples before placing a bulk order?",
    answer:
      "Yes, we can provide samples upon request. Please contact us with your specific requirements, and we will arrange for samples to be sent to you. We will also charge for the samples at your cost.",
  },
  {
    question: "How do you handle shipping and logistics?",
    answer:
      "Our experienced logistics team manages all aspects of shipping, including packaging, documentation, customs clearance, and transportation, ensuring timely and secure delivery of your orders.",
  },
  {
    question: "What certifications do your products hold?",
    answer:
      "Our products hold various certifications ensuring they meet international safety and quality standards.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we provide a tracking number and relevant details so you can monitor the progress of your shipment in real-time.",
  },
  {
    question: "Who can I contact for more information?",
    answer:
      "For any further questions or assistance, please reach out to our customer support team via email:- info@fortunaenterprise.in or call us at +91-7506615066.",
  },
];

export default About;
