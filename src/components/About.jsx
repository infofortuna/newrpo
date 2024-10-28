import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Certifications from "./Certifications";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  // Certifications data
  const certifications = [
    {
      title: "ISO 9001:2015 Certified",
      image: "/path/to/iso9001.jpg", // Replace with the actual image path
      description: "Quality management system certification.",
    },
    {
      title: "HACCP Certified",
      image: "/path/to/haccp.jpg", // Replace with the actual image path
      description: "Hazard analysis and critical control points certification.",
    },
    {
      title: "FDA Approved for Food Exports",
      image: "/path/to/fda.jpg", // Replace with the actual image path
      description: "Certification for compliance with food safety regulations.",
    },
  ];

  // Animation on Load
  useEffect(() => {
    const cards = aboutRef.current?.querySelectorAll(".about-card");

    // Ensure cards are found before animation
    if (cards && cards.length) {
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
    }
  }, []);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(circle, rgba(0, 60, 100, 0.8), rgba(30, 80, 120, 0.6)),
                radial-gradient(at bottom right, rgba(10, 40, 80, 0.5), rgba(5, 20, 60, 0.3)),
                url('3rd.webp')`,
          backgroundSize: "cover",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            letterSpacing: "2px",
            fontWeight: "bold",
          }}
        >
          ABOUT US
        </Typography>
      </Box>

      {/* Main About Content */}
      <Container maxWidth="lg" ref={aboutRef}>
        {/* About Section with Flex Design */}
        <Box
          className="about-card"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
            mt: 4,
          }}
        >
          {/* Left Side - Image */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <img
              src="import.webp"
              alt="Fortuna Enterprise"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </Box>

          {/* Right Side - Details */}
          <Box sx={{ flex: 2 }}>
            <Typography variant="h4" color="primary.main" gutterBottom>
              Fortuna Enterprise
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We simplify the complexities of global trade, connecting
              businesses with exceptional sourcing and logistics solutions to
              foster international growth, a commission basis and act as
              sourcing and buying agents, and brokers.
            </Typography>
          </Box>
        </Box>

        {/* Vision Section */}
        <Box
          className="about-card"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
            mt: 4,
          }}
        >
          {/* Left Side - Vision Details */}
          <Box sx={{ flex: 2 }}>
            <Typography variant="h4" color="primary.main" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" color="text.secondary">
              To be the leading facilitator of international trade in
              agricultural goods, recognized for our commitment to excellence
              and sustainability. We envision a world where quality agricultural
              products are accessible to all, enhancing food security and
              promoting healthy lifestyles globally.
            </Typography>
          </Box>

          {/* Right Side - Vision Image */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <img
              src="/vision.webp"
              alt="Our Vision"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </Box>
        </Box>

        {/* Mission Section */}
        <Box
          className="about-card"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
            mt: 4,
          }}
        >
          {/* Left Side - Mission Image */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <img
              src="/mission.webp"
              alt="Our Mission"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </Box>
          {/* Right Side - Mission Details */}
          <Box sx={{ flex: 2 }}>
            <Typography variant="h4" color="primary.main" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary">
              To provide high-quality agricultural and organic products that
              drive successful global trade. We are committed to connecting
              producers and consumers through a transparent, efficient, and
              sustainable supply chain, ensuring that every product meets our
              rigorous standards of quality and safety.
            </Typography>
          </Box>
        </Box>

        {/* Certification Section */}
        <Certifications certifications={certifications} />

        {/* FAQ Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" color="primary.main" gutterBottom>
            Frequently Asked Questions
          </Typography>
          {faqData.map((faq, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Q{index + 1}: {faq.question}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {faq.answer}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const faqData = [
  {
    question: "How can I place an order?",
    answer:
      " You can place an order by contacting us through our website or reaching out directly via email.",
  },
  {
    question: "What products do you specialize in?",
    answer:
      " We specialize in exporting spices, agricultural products, and processed foods.",
  },
  {
    question: "What Certification do you have?",
    answer: "APEDA, Spices Board of India, and FSSAI.",
  },
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
      "Once your order is shipped, we will provide you with a tracking number and details to help you monitor the progress of your shipment.",
  },
];

export default About;
