import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Button, Typography, Container } from "@mui/material";
import WhyUs from "./WhyUs";
import ImportExport from "./ImportExport";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Example() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const paragraphRef = useRef(null);
  const importExportRef = useRef(null);

  // Hero Section Animation
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.5 }
      );
    }
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.8 }
      );
    }
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out", delay: 1.1 }
      );
    }
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 1.4 }
      );
    }
  }, []);

  // Import-Export Section Animation
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
            height: "100vh",
            backgroundImage: "url('heroImage1.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "rgba(0,0,0,0.5)",
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
                fontSize: { xs: "2rem", md: "4rem" },
                textAlign: "center",
                mb: 2,
              }}>
              Welcome to Fortuna Enterprise
            </Typography>
            <Typography variant="h5" ref={subtitleRef} sx={{ mb: 1 }}>
              Your Premier Partner in Global Import-Export Solutions
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Specializing in Quality Spice Sourcing, Textiles, and Consumer
              Goods
            </Typography>
            <Button
              variant="contained"
              color="warning"
              ref={ctaRef}
              sx={{ mb: 2 }}
              href="/services">
              Discover Our Services
            </Button>
            <Box
              ref={paragraphRef}
              sx={{ maxWidth: "600px", textAlign: "center" }}>
              <Typography variant="body2">
                At Fortuna Enterprise, we connect businesses worldwide with
                high-quality products. Our commitment to excellence and customer
                satisfaction is at the heart of everything we do.
              </Typography>
              <Typography variant="body2">
                Explore our diverse offerings, including agricultural products.
                Let us be your trusted partner in global trade!
              </Typography>
            </Box>
          </Container>
        </Box>
      </header>

      <main className="main-content">
        <Container maxWidth="lg" sx={{ pt: 4 }}>
          <WhyUs />
          {/* Import-Export Section */}
          <ImportExport ref={importExportRef} />
        </Container>
      </main>
    </>
  );
}
