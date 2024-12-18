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
} from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";
import SocialLinksList from "./SocialLInksList";
import Particlesview from "./Particles";
import Marquee from "react-fast-marquee";
import { keyframes } from "@emotion/react";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const HomeMarquee: React.FC = ({}) => {
  const theme = useTheme();

  return (
    <Box>
      <Marquee
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          transform: "skewY(-1deg)",
          height: "4rem",
          backgroundColor: `${theme.palette.custom.mainColor}`, // Apply the theme-based background color
        }}
      ></Marquee>

      <Marquee
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          height: "4rem",
          backgroundColor: `${theme.palette.custom.secondaryComponents}`, // Apply the theme-based background color
        }}
        speed={50}
        gradient={true}
        gradientWidth={200}
        gradientColor={`${theme.palette.custom.primaryComponents}`}
      >
        <Typography> </Typography>
        <Typography fontSize={"1rem"}>CRYPTOCURRENCY</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>CYBER SECURITY</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>BLOCKCHAIN TECHNOLOGY</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>WEB DESIGN</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>WEB DEVELOPMENT</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>CONSULTATION</Typography>

        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>

        <Typography fontSize={"1rem"}>CRYPTOCURRENCY</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>CYBER SECURITY</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>BLOCKCHAIN TECHNOLOGY</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>WEB DESIGN</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>WEB DEVELOPMENT</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>CONSULTATION</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>

        <Typography fontSize={"1rem"}>CRYPTOCURRENCY</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>CYBER SECURITY</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>BLOCKCHAIN TECHNOLOGY</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>WEB DESIGN</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>WEB DEVELOPMENT</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
        <Typography fontSize={"1rem"}>CONSULTATION</Typography>
        <Typography
          marginLeft={"2rem"}
          marginRight={"2rem"}
          fontSize={"1.25rem"}
          sx={{ animation: `${spinAnimation} 5s linear infinite` }}
        >
          ❖
        </Typography>
      </Marquee>
    </Box>
  );
};

export default HomeMarquee;
