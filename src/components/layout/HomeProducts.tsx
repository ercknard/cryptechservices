import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  useTheme,
  Stack,
  Card,
  CardContent,
  Grid,
  Icon,
} from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";
import SocialLinksList from "./SocialLInksList";
import Particlesview from "./Particles";
import Marquee from "react-fast-marquee";
import { keyframes } from "@emotion/react";
import HomeMarquee from "./HomeMarquee";

// Dummy icons for now, replace with actual icons
import {
  Home,
  Build,
  Cloud,
  Code,
  Security,
  ShoppingCart,
} from "@mui/icons-material";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const HomeProducts: React.FC = ({}) => {
  const theme = useTheme();
  const { activeSet } = useThemeContext();
  const [selectedCard, setSelectedCard] = useState<number>(0); // Set default to index 0
  const [animateOnSelect, setAnimateOnSelect] = useState<boolean>(false);

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
  };

  const imageSrc =
    colorSetImageMap[activeSet.toString()] || colorSetImageMap[1];

  const cardInfo = [
    {
      icon: <Home fontSize="large" />,
      title: "Full-Stack Web Development",
      description: "Professional home services with the best quality.",
      fullDescription:
        "Our full-stack web development approach involves proficiently handling both front-end and back-end aspects to deliver comprehensive and dynamic web solutions.",
      image: "/static/images/Full-Stack Web Development.jpg",
    },
    {
      icon: <Build fontSize="large" />,
      title: "Web3 And DAPP Development",
      description: "Building robust and scalable web solutions.",
      fullDescription:
        "As experts in Web3 and DApp development, we harness the power of decentralized technologies to build immersive and user-friendly applications.",
      image: "/static/images/Web3 And DAPP Development.jpg",
    },
    {
      icon: <Cloud fontSize="large" />,
      title: "Solidity Development",
      description: "Reliable cloud computing services for your business.",
      fullDescription:
        "We specialize in Solidity smart contract development, creating secure and efficient blockchain-based solutions tailored to your specific decentralized application needs.",
      image: "/static/images/Solidity Development.jpg",
    },
    {
      icon: <Code fontSize="large" />,
      title: "Web Design",
      description: "Creative websites to take your business online.",
      fullDescription:
        "Our web design approach focuses on crafting user-centric and aesthetically pleasing websites that align with your brand identity and business goals.",
      image: "/static/images/Web Design.jpg",
    },
    {
      icon: <Security fontSize="large" />,
      title: "Graphic Design",
      description: "Keeping your data safe with top-notch security measures.",
      fullDescription:
        "Our graphic design services involve translating your brand identity and messaging into visually compelling designs.",
      image: "/static/images/Graphic Design.jpg",
    },
    {
      icon: <ShoppingCart fontSize="large" />,
      title: "Technical Consultation",
      description: "Custom e-commerce platforms for your online store.",
      fullDescription:
        "We offer technical consultation by deeply understanding your project goals and challenges, and then providing targeted expertise and strategic guidance to optimize your systems, resolve technical issues, and enhance overall project success.",
      image: "/static/images/stats-cover.jpg",
    },
  ];

  useEffect(() => {
    // Trigger animation when a card is selected
    if (selectedCard !== null) {
      setAnimateOnSelect(true);

      // Reset the animation after it finishes (using the same duration as your transition time)
      const timeout = setTimeout(() => {
        setAnimateOnSelect(false);
      }, 300); // Match the duration of the transition
      return () => clearTimeout(timeout);
    }
  }, [selectedCard]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "custom.primaryBackground",
        textAlign: "left",
        paddingY: "5rem",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems={"center"}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Stack spacing={1.5}>
              <Typography fontSize={"1rem"} color="custom.primaryText">
                Our Services
              </Typography>
              <Stack direction={"row"} spacing={1}>
                <Typography variant="h3" paddingBottom={1}>
                  Introducing our Top-notch
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  color="custom.primaryText"
                  gutterBottom
                >
                  Quality Services
                </Typography>
              </Stack>
              <Typography variant={"h6"} color="custom.primaryTextGrayed">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and your customers.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <Box
              sx={{
                position: "relative",
                transition: "transform 0.3s ease", // Smooth transition on hover or animation
                transform: animateOnSelect ? "scale(1.05)" : "scale(1)",
                "&:hover": {
                  transform: "scale(1.05)", // Scale the entire box on hover
                  transition: "transform 0.3s ease", // Smooth scaling transition
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "75%",
                  height: "75%",
                  transform: "translate(-50%, -50%)",
                  background: `${theme.palette.custom.mainColor}`,
                  transition: "background 0.3s ease", // Transition background color on hover
                  "&:hover": {
                    background: `${theme.palette.custom.secondaryComponents}`, // Change background on hover
                  },
                }}
              />

              <Box
                component="img"
                src={cardInfo[selectedCard].image}
                alt={cardInfo[selectedCard].title}
                sx={{
                  width: "100%",
                  maxWidth: 600,
                  marginBottom: 2,
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  aspectRatio: "1/1",
                  transition: "opacity .3s ease", // Smooth transition on hover or animation
                  opacity: animateOnSelect ? ".5" : "1",
                  // transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)", // Slight zoom effect on hover
                  },
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: `radial-gradient(at center, transparent, ${theme.palette.custom.primaryBackground})`,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 0.7, // Fade the background slightly on hover
                  },
                }}
              />

              <Box
                component={"img"}
                src={imageSrc}
                sx={{
                  position: "absolute",
                  left: "-10%",
                  top: "10%",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)", // Slight zoom effect on hover
                  },
                }}
              />

              <Box
                component={"img"}
                src={imageSrc}
                sx={{
                  position: "absolute",
                  left: "10%",
                  top: "-10%",
                  width: "100%",
                  height: "100%",
                  transform: "scale(-1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(-1.05)", // Slight zoom effect on hover
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={7}>
            <Box sx={{ position: "relative" }}>
              {selectedCard !== null && (
                <Box
                  sx={{
                    marginTop: "3rem",
                    transition: "opacity .3s ease", // Smooth transition on hover or animation
                    opacity: animateOnSelect ? ".5" : "1",
                  }}
                >
                  <Stack direction={"column"} spacing={2}>
                    <Typography variant="h4" gutterBottom>
                      {cardInfo[selectedCard].title}
                    </Typography>

                    <Typography
                      variant={"h6"}
                      color="custom.primaryTextGrayed"
                      sx={{ marginBottom: 2 }}
                    >
                      {cardInfo[selectedCard].fullDescription}
                    </Typography>
                  </Stack>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Cards Section */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ marginTop: "2.5rem" }}
        >
          {cardInfo.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  padding: 1,
                  position: "relative",
                  height: "100%",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor:
                    selectedCard === index
                      ? "custom.secondaryComponents"
                      : "none",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "custom.primaryComponents",
                  },
                }}
                onClick={() => setSelectedCard(index)} // Set the selected card
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Icon
                    sx={{
                      paddingRight: "2.5rem",
                      paddingBottom: "2.5rem",
                      color: theme.palette.custom.primaryText,
                    }}
                  >
                    {card.icon}
                  </Icon>
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.custom.primaryTextGrayed,
                      marginTop: 1,
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                <Box
                  component="img"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    right: "0",
                    top: "0",
                    height: "100%",
                    pointerEvents: "none",
                    aspectRatio: "auto",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeProducts;
