import React from "react";
import { DefaultHead } from "@/components/layout/Head";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import HomeStats from "@/components/layout/HomeStats";
import HomeProducts from "@/components/layout/HomeProducts";

const HomePage = () => {
  return (
    <>
      <DefaultHead />
      <Box position={"fixed"} width={1} left={0} zIndex={100}>
        <Navbar />
      </Box>
      <Box>
        <HeroSection />
        <HomeStats
          yearsOfExperience={5}
          projectsCompleted={50}
          happyClients={120}
          teamMembers={8}
          gameServers={3}
        />
        <HomeProducts />
        <Footer />
        {/* <Typography variant="h1">
          This is the home page of the application.
        </Typography>
        <Typography variant="h2">
          This is the home page of the application.
        </Typography>
        <Typography variant="h3">
          This is the home page of the application.
        </Typography>
        <Typography variant="h4">
          This is the home page of the application.
        </Typography>
        <Typography variant="h5">
          This is the home page of the application.
        </Typography>
        <Typography variant="h6">
          This is the home page of the application.
        </Typography>
        <Typography variant="subtitle1">
          This is the home page of the application.
        </Typography>
        <Typography variant="subtitle2">
          This is the home page of the application.
        </Typography>
        <Typography variant="body1">
          This is the home page of the application.
        </Typography>
        <Typography variant="body2">
          This is the home page of the application.
        </Typography>
        <Typography variant="caption">
          This is the home page of the application.
        </Typography> */}
      </Box>
    </>
  );
};

export default HomePage;
