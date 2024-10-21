import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Button, Typography, Container } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import Slider from "react-slick"; // Import Slider for the carousel
import WhyUs from "./WhyUs";
import ImportExport from "./ImportExport";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const paragraphRef = useRef(null);
  const importExportRef = useRef(null);

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Add fade effect for smooth transition
    cssEase: "linear",
  };

  useEffect(() => {
    const animations = [
      { ref: heroRef, from: { opacity: 0 }, to: { opacity: 1, duration: 1 } },
      {
        ref: titleRef,
        from: { y: -50, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.5 },
      },
      {
        ref: subtitleRef,
        from: { y: -50, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.8 },
      },
      {
        ref: ctaRef,
        from: { scale: 0.8, opacity: 0 },
        to: {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 1.1,
        },
      },
      {
        ref: paragraphRef,
        from: { y: 20, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 1.4 },
      },
    ];

    animations.forEach((animation) => {
      if (animation.ref.current) {
        gsap.fromTo(animation.ref.current, animation.from, {
          ...animation.to,
          overwrite: "auto",
        });
      }
    });

    return () => {
      animations.forEach((animation) => {
        if (animation.ref.current) {
          gsap.killTweensOf(animation.ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const importExportSection = importExportRef.current;
    if (importExportSection) {
      const animation = gsap.fromTo(
        importExportSection,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: importExportSection,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        animation.kill();
      };
    }
  }, []);

  return (
    <>
      <header
        className="text-center relative overflow-hidden"
        role="banner"
        ref={heroRef}
      >
        <Slider {...settings}>
          {/* Carousel slides */}
          <div>
            <img
              src="bg.jpg" // Replace with your image URLs
              alt="Background 1"
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="bg2.jpg" // Replace with your image URLs
              alt="Background 2"
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="bg3.webp" // Replace with your image URLs
              alt="Background 3"
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
        </Slider>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker overlay with 50% opacity
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: { xs: "2rem 1rem", md: "2rem 0" },
            color: "white",
          }}
        >
          <Container
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              ref={titleRef}
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                mb: 1,
                lineHeight: { xs: "1.2", md: "1.2" },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              Welcome to Fortuna Enterprise
            </Typography>
            <Typography
              variant="h2"
              ref={subtitleRef}
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                mb: 1,
                lineHeight: { xs: "1.3", md: "1.3" },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              Your Trusted Partner in Agriculture.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" }, mb: 2 }}
            >
              &ldquo;
              <span
                style={{
                  fontWeight: "bold",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                We work on a commission basis and act as sourcing and buying
                agents, and brokers.
              </span>
              &rdquo;
            </Typography>
            <Button
              variant="contained"
              color="warning"
              ref={ctaRef}
              sx={{
                mb: 2,
                px: 3,
                borderRadius: "20px",
                background: "linear-gradient(to right, #ffb74d, #ff9800)",
                "&:hover": {
                  background: "linear-gradient(to right, #ff9800, #ffb74d)",
                },
                display: "flex",
                alignItems: "center",
              }}
              href="/services"
              aria-label="Discover Our Organic Solutions"
            >
              <KeyboardArrowRight sx={{ mr: 1 }} />
              Discover Our Organic Solutions
            </Button>
          </Container>
        </Box>
      </header>

      <main className="main-content">
        <Container maxWidth="lg" sx={{ pt: 4 }}>
          <WhyUs />
          <ImportExport ref={importExportRef} />
        </Container>
      </main>
    </>
  );
};

export default Home;
