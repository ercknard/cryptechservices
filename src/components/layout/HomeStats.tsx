// components/Stats.tsx

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Stack,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";

// Define the types for the statistics
interface StatsProps {
  yearsOfExperience: number;
  projectsCompleted: number;
  happyClients: number;
  teamMembers: number;
  gameServers: number;
}

const HomeStats: React.FC<StatsProps> = ({
  yearsOfExperience,
  projectsCompleted,
  happyClients,
  teamMembers,
  gameServers,
}) => {
  const theme = useTheme();
  const { activeSet } = useThemeContext();

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
  };

  const imageSrc =
    colorSetImageMap[activeSet.toString()] || colorSetImageMap[1];

  return (
    <Box position={"relative"} sx={{ paddingY: "5rem" }}>
      <Container>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          marginTop={2}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={6} md={7}>
            <Stack spacing={2}>
              <Typography fontSize={"1.25rem"} color="custom.primaryText">
                Welcome to Cryptech Services
              </Typography>

              <Typography variant={"h3"} fontWeight={"700"}>
                What do we offer?
              </Typography>

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
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "75%",
                  height: "75%",
                  transform: "translate(-50%, -50%)",
                  background: `${theme.palette.custom.mainColor}`,
                }}
              />
              <Box
                component={"img"}
                src="/static/images/stats-cover.jpg"
                sx={{
                  width: "100%",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
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
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center" marginTop={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "custom.primaryComponents",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Years of Experience as CT Team
                </Typography>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {yearsOfExperience}+
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "custom.primaryComponents",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Projects Completed
                </Typography>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {projectsCompleted}+
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "custom.primaryComponents",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Happy Clients
                </Typography>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {happyClients}+
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "custom.primaryComponents",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Team Members
                </Typography>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {teamMembers}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "custom.primaryComponents",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Game Servers
                </Typography>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {gameServers}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeStats;
