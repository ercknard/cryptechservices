import React from "react";
import { Box, useTheme } from "@mui/material";
import Particlesview from "@/components/layout/Particles";
import { useThemeContext } from "@/theme/themeProvider";

const PagesCover = () => {
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
    <>
      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "calc(100vw - 5px)",
          minHeight: "50vh",
          background: "rgba(43, 43, 43, .5)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "calc(100vw - 5px)",
          minHeight: "50vh",
          background: `radial-gradient(at top, transparent, ${theme.palette.custom.primaryBackground})`,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "calc(100vw - 5px)",
          minHeight: "50vh",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "contained",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          display: { xs: "none", md: "block" },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "calc(100vw - 5px)",
          minHeight: "50vh",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "contained",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          transform: "scaleX(-1)",
          pointerEvents: "none",
          display: { xs: "none", md: "block" },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "0",
          bottom: "0",
          width: "calc(100vw - 5px)",
          minHeight: "50vh",
          background: `linear-gradient(to bottom, ${theme.palette.custom.primaryBackground}, transparent)`,
          transform: "scaleY(-1)",
        }}
      />

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
    </>
  );
};

export default PagesCover;
