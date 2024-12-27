import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Stack,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import { useTheme } from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";
import supabase from "@/lib/supabase";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface Security {
  security_name: string;
  security_desc: string;
  security_cover: string;
  security_price: string;
  game_link: string;
  security_feature1?: string;
  security_feature2?: string;
  security_feature3?: string;
  security_feature4?: string;
  security_bg1: string;
  security_bg2: string;
  security_type: "standard" | "deluxe" | "deluxe_lts"; // Add this field
}

const SecurityServices: React.FC = () => {
  const theme = useTheme();
  const { activeSet } = useThemeContext(); // activeSet will determine the theme's background
  const [security, setSecurity] = useState<Security[]>([]);
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [animateOnSelect, setAnimateOnSelect] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  // Map to get background images based on activeSet (theme)
  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
  };
  const imageSrc =
    colorSetImageMap[activeSet.toString()] || colorSetImageMap[1];

  const colorSetmidImageMap: { [key: string]: string } = {
    1: "/static/images/blue-mid.svg",
    2: "/static/images/green-mid.svg",
    3: "/static/images/yellow-mid.svg",
    4: "/static/images/orange-mid.svg",
    5: "/static/images/pink-mid.svg",
  };
  const imagemidSrc =
    colorSetmidImageMap[activeSet.toString()] || colorSetmidImageMap[1];

  const colorSetfullImageMap: { [key: string]: string } = {
    1: "/static/images/blue-full.svg",
    2: "/static/images/green-full.svg",
    3: "/static/images/yellow-full.svg",
    4: "/static/images/orange-full.svg",
    5: "/static/images/pink-full.svg",
  };
  const imagefullSrc =
    colorSetfullImageMap[activeSet.toString()] || colorSetfullImageMap[1];

  // Fetch security services data
  useEffect(() => {
    const fetchSecurity = async () => {
      const { data, error } = await supabase
        .from("ztable_securityservices")
        .select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        // Sort the data by id (assuming 'id' is the name of the field to sort by)
        const sortedData = data.sort((a, b) => a.id - b.id);
        setSecurity(sortedData);
      }
    };

    fetchSecurity();
  }, []);

  // Update background when a security card is selected
  useEffect(() => {
    if (security[selectedCard]) {
      const selectedService = security[selectedCard];

      // Set background image based on security type
      if (selectedService.security_type === "standard") {
        setBackgroundImage(imageSrc);
      } else if (selectedService.security_type === "deluxe") {
        setBackgroundImage(imagefullSrc);
      } else if (selectedService.security_type === "deluxe_lts") {
        setBackgroundImage(imagemidSrc);
      }
    }
  }, [selectedCard, security, imageSrc, imagefullSrc, imagemidSrc]);

  // Handle animation on select card
  useEffect(() => {
    if (selectedCard !== null) {
      setAnimateOnSelect(true);

      const timeout = setTimeout(() => {
        setAnimateOnSelect(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [selectedCard]);

  return (
    <Box
      position={"relative"}
      sx={{ paddingY: "5rem", backgroundColor: "custom.primaryBackground" }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "calc(100vw - 5px)",
          minHeight: "10rem",
          background: `linear-gradient(to bottom, ${theme.palette.custom.primaryBackground}, transparent)`,
          zIndex: "2",
        }}
      />

      {/* Dynamically update the background image based on the selected game */}
      <Box
        component={"img"}
        src={backgroundImage}
        sx={{
          position: "absolute",
          right: "0",
          top: "0",
          height: "100%",
          transform: "scaleY(-1)",
          objectFit: "cover",
          opacity: ".05",
        }}
      />

      <Box
        component={"img"}
        src={backgroundImage}
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          height: "100%",
          transform: "scale(-1)",
          objectFit: "cover",
          opacity: ".05",
        }}
      />

      <Container>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          marginTop={2}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Stack spacing={1.5}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography fontSize={"1rem"} color="custom.primaryText">
                  Cryptech Security Services
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography variant="h3" paddingBottom={1}>
                  Improve IT defense with our
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  color="custom.primaryText"
                  gutterBottom
                >
                  Security Services
                </Typography>
              </Stack>
              <Typography variant={"h6"} color="custom.primaryTextGrayed">
                For SECURITY service packages we offer
              </Typography>
            </Stack>
          </Grid>

          {/* Selected Card Content */}
          {selectedCard !== null && security[selectedCard] && (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    position: "relative",
                    marginTop: "2.5rem",
                    transition: "transform 0.3s ease",
                    transform: animateOnSelect ? "scale(1.05)" : "scale(1)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease",
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
                      transition: "background 0.3s ease",
                      "&:hover": {
                        background: `${theme.palette.custom.secondaryComponents}`,
                      },
                      opacity: ".5",
                    }}
                  />
                  <Box
                    component={"img"}
                    src={security[selectedCard].security_cover}
                    sx={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "90%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                      opacity: ".9",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={12} marginTop={2.5}>
                <Stack
                  spacing={1.5}
                  sx={{
                    transition: "opacity 0.3s ease",
                    opacity: animateOnSelect ? ".5" : "1",
                  }}
                >
                  <Typography fontSize={"2rem"} color="custom.primaryText">
                    {security[selectedCard].security_name}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {security[selectedCard].security_price}
                  </Typography>
                  <Typography variant={"h6"} color="custom.primaryTextGrayed">
                    {security[selectedCard].security_desc}
                  </Typography>
                  <Stack direction={"column"} spacing={1} paddingLeft={2}>
                    <Typography variant="h6" gutterBottom>
                      ❖ {security[selectedCard].security_feature1}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      ❖ {security[selectedCard].security_feature2}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      ❖ {security[selectedCard].security_feature3}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      ❖ {security[selectedCard].security_feature4}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </>
          )}
        </Grid>

        {/* Card List */}
        <Grid container xs={12} sm={12} md={12} spacing={5} mt={2.5}>
          <Grid item xs={12} sm={12} md={12}>
            <Stack direction={"row"} spacing={4} justifyContent="center">
              {security.slice(0, 3).map((game, index) => (
                <Card
                  key={index}
                  onClick={() => setSelectedCard(index)}
                  sx={{
                    padding: 1,
                    position: "relative",
                    width: "100%",
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
                >
                  <CardContent>
                    <Typography variant="h6">{game.security_name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {game.security_desc}
                    </Typography>
                  </CardContent>
                  <Box
                    component={"img"}
                    src={imageSrc}
                    sx={{
                      position: "absolute",
                      right: "0",
                      top: "0",
                      height: "100%",
                      transition: "opacity 0.3s ease",
                      opacity: selectedCard === index ? "1" : ".1",
                    }}
                  />
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={12} md={12} spacing={5} mt={2} zIndex={1}>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                backgroundColor: "custom.primaryComponents",
                padding: "2rem",
                borderRadius: "0.5rem",
              }}
            >
              <Stack direction={"column"} spacing={1}>
                <Typography variant="display1" gutterBottom>
                  ❖ ¹Final price may be adjusted or negotiated after review of
                  report(s).
                </Typography>
                <Typography variant="display1" gutterBottom>
                  ❖ ²Additional Time may be arranged and allotted when
                  expiration time nears.
                </Typography>
                <Typography variant="display1" gutterBottom>
                  ❖ ³Final price may be adjusted if hours of support exceed 8
                  hours.
                </Typography>
                <Typography variant="display1" gutterBottom>
                  ❖ ⁴Currency denomination may be negotiated.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SecurityServices;
