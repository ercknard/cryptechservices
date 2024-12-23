import React from "react";
import { DefaultHead } from "@/components/layout/Head";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import { useThemeContext } from "@/theme/themeProvider";
import SocialLinksList from "@/components/layout/SocialLInksList";
import Particlesview from "@/components/layout/Particles";

const TeamPage = () => {
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
      <DefaultHead title="CT Team" />
      <Wrapper>
        <Box
          paddingTop={"4.25rem"}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: "50vh",
            backgroundColor: "custom.primaryBackground",
            textAlign: "left",
            padding: "0 20px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "calc(100vw - 5px)",
              minHeight: "50vh",
              backgroundImage: `url(/static/images/pages-cover.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
              background: `radial-gradient(at center, transparent, ${theme.palette.custom.secondaryBackground})`,
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
          <Box zIndex={1}>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="title" fontWeight={600} paddingBottom={1}>
                Cryptech Services&apos;
              </Typography>
              <Typography
                variant="title"
                fontWeight={600}
                fontSize={"3rem"}
                color="custom.primaryText"
                gutterBottom
              >
                Team
              </Typography>
            </Stack>
          </Box>

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
        </Box>

        <Box position={"relative"} minHeight={"100vh"}>
          <Box
            sx={{
              position: "absolute",
              left: "0",
              top: "-10%",
              width: "calc(100vw - 5px)",
              minHeight: "10rem",
              background: `linear-gradient(to top, ${theme.palette.custom.secondaryBackground}, transparent)`,
            }}
          />
        </Box>
      </Wrapper>
    </>
  );
};

export default TeamPage;
