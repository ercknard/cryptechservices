import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  useTheme,
  Stack,
} from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";
import Particlesview from "./Particles";
import HomeMarquee from "./HomeMarquee";

const HeroSection: React.FC = ({}) => {
  const theme = useTheme();
  const { activeSet } = useThemeContext();

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
    6: "/static/images/white-upper-right.svg",
  };

  const imageSrc =
    colorSetImageMap[activeSet.toString()] || colorSetImageMap[1];

  // State to control which text is displayed
  const [showVision, setShowVision] = useState(true);

  // Effect to alternate text every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowVision((prev) => !prev); // Toggle between true and false
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: "85vh",
        backgroundColor: "custom.primaryBackground",
        textAlign: "left",
        padding: "0 20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "calc(100vw - 5px)",
          height: "85vh",
          backgroundImage: `url(/static/images/hero-cover.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "calc(100vw - 5px)",
          height: "85vh",
          background: "rgba(43, 43, 43, .5)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "calc(100vw - 5px)",
          height: "85vh",
          background: `radial-gradient(at right, transparent, ${theme.palette.custom.secondaryBackground}95, ${theme.palette.custom.secondaryBackground}99, ${theme.palette.custom.secondaryBackground}, ${theme.palette.custom.secondaryBackground})`,
        }}
      />

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          left: "0",
          top: "4.2rem",
          width: "calc(100vw - 5px)",
          height: "85vh",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "contained",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          left: "0",
          top: "4.2rem",
          width: "calc(100vw - 5px)",
          height: "85vh",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "contained",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "0",
          bottom: "0",
          width: "calc(100vw - 5px)",
          height: "50vh",
          background: `linear-gradient(to bottom, ${theme.palette.custom.primaryBackground}75, transparent)`,
          transform: "scaleY(-1)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box position="relative" zIndex={1}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <Typography
              variant="h2"
              fontWeight={600}
              paddingBottom={{ xs: 0, md: 1 }}
            >
              Creating a Better
            </Typography>
            <Typography
              variant="h2"
              fontWeight={600}
              color="custom.primaryText"
              gutterBottom
            >
              IT Solutions,
            </Typography>
          </Stack>
          <Typography
            variant="h5"
            color="custom.secondaryText"
            marginTop={{ xs: 1, md: 0 }}
          >
            Unlocking Tomorrow&apos;s Digital Frontier with{" "}
            <span style={{ fontWeight: "bold" }}>Cryptech Services: </span>
            <span
              style={{
                color: theme.palette.custom.mainColor,
                fontWeight: "bold",
              }}
            >
              {showVision ? "Your Vision" : "Our Expertise"}
            </span>
          </Typography>
          <Box marginY={2}>{/* <SocialLinksList /> */}</Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href={"#stats"}
          >
            Learn More
          </Button>
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      >
        <Particlesview />
      </Box>

      <HomeMarquee />
    </Box>
  );
};

export default HeroSection;
