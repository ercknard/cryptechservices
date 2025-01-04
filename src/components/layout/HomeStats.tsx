import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";

interface StatsProps {
  projectsCompleted: number;
  happyClients: number;
  teamMembers: number;
  gameServers: number;
}

const HomeStats: React.FC<StatsProps> = ({
  projectsCompleted,
  happyClients,
  teamMembers,
  gameServers,
}) => {
  const theme = useTheme();
  const { activeSet } = useThemeContext();
  const [selectedCard, setSelectedCard] = useState<number>(0); // Track selected card

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

  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const CTExperience = currentYear - startYear;

  // Auto transition interval
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCard((prev) => (prev + 1) % 5); // Loop through the cards
    }, 3000); // Change card every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      position={"relative"}
      sx={{ paddingY: { xs: "2rem", md: "5rem" } }}
      id={"stats"}
    >
      <Container>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          marginTop={2}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={6} md={7}>
            <Stack spacing={{ xs: 2.5, md: 1.5 }}>
              <Typography fontSize={"1rem"} color="custom.primaryText">
                Welcome to Cryptech Services
              </Typography>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                <Typography variant="h3" paddingBottom={{ xs: 0, md: 1 }}>
                  Let us be Your
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  color="custom.primaryText"
                  gutterBottom
                >
                  Partner
                </Typography>
              </Stack>
              <Typography variant={"h6"} color="custom.primaryTextGrayed">
                We specialize in providing robust web3 and fullstack development
                services, with a primary focus on cryptocurrency, blockchain
                technology, and web design. Additionally, we offer expert
                services in the realms of cybersecurity , as well as technical
                support and consultation.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <Box
              sx={{
                position: "relative",
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
                component={"img"}
                alt="Logo"
                src="/static/images/webp/stats-cover.webp"
                sx={{
                  width: "100%",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  transition: "transform 0.3s ease",
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
                  background: `radial-gradient(at center, transparent, ${theme.palette.custom.secondaryBackground})`,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 0.7, // Fade the background slightly on hover
                  },
                }}
              />

              <Box
                component={"img"}
                alt="Logo"
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
                alt="Logo"
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
                    transform: "scale(-1.05)", // Slight zoom effect and scale flip
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Card section */}
        <Grid container spacing={4} justifyContent="center" marginTop={2}>
          {[
            { title: CTExperience, subtitle: "Years of Experience as CT Team" },
            { title: `${projectsCompleted}+`, subtitle: "Projects Completed" },
            { title: `${happyClients}+`, subtitle: "Happy Clients" },
            { title: teamMembers, subtitle: "Team Members" },
            { title: gameServers, subtitle: "Game Servers" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  padding: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  transform:
                    selectedCard === index ? "scale(1.05)" : "scale(1)",
                  boxShadow:
                    selectedCard === index
                      ? "0px 8px 16px rgba(0, 0, 0, 0.2)"
                      : "none",
                  backgroundColor:
                    selectedCard === index
                      ? `${theme.palette.custom.secondaryComponents}`
                      : "none",
                }}
                onClick={() => setSelectedCard(index)} // Allow manual selection too
              >
                <CardContent>
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      {stat.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {stat.subtitle}
                    </Typography>
                  </Stack>
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
                    opacity: selectedCard === index ? `1` : ".1",
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

export default HomeStats;
