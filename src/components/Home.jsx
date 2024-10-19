import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Button, Typography, Container } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
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
      <header className="text-center relative overflow-hidden" ref={heroRef}>
        <Box
          sx={{
            height: { xs: "80vh", md: "100vh" },
            backgroundImage: "url('import.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: { xs: "2rem 1rem", md: "2rem 0" },
            filter: "brightness(0.9)",
          }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "transparent",
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
            }}
          />
          <Container
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}>
            <Typography
              variant="h1"
              ref={titleRef}
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                mb: 1,
                lineHeight: { xs: "1.2", md: "1.2" },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}>
              Welcome to Fortuna Enterprise
            </Typography>
            <Typography
              variant="h5"
              ref={subtitleRef}
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                mb: 1,
                lineHeight: { xs: "1.3", md: "1.3" },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}>
              Your Trusted Partner in Agricultural and Organic Goods
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" }, mb: 2 }}>
              Specializing in Quality Organic Produce and Agricultural Products
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
              aria-label="Discover Our Organic Solutions" // Added aria-label for accessibility
            >
              <KeyboardArrowRight sx={{ mr: 1 }} />
              Discover Our Organic Solutions
            </Button>
            <Box
              ref={paragraphRef}
              sx={{ maxWidth: "600px", textAlign: "center" }}>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" }, mb: 1 }}>
                At Fortuna Enterprise, we are dedicated to connecting businesses
                worldwide with premium agricultural and organic products. Our
                commitment to sustainable practices and customer satisfaction
                drives us in every partnership we forge.
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
                Explore our diverse offerings, including organic fruits,
                vegetables, and more. Let us be your trusted partner in the
                global agricultural trade!
              </Typography>
            </Box>
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
