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
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination as SwiperPagination, // Renaming Swiper Pagination
  Autoplay, // Renaming Swiper Navigation
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface Games {
  game_name: string;
  game_mode: string;
  game_info: string;
  game_cover: string;
  game_icon: string;
  game_link: string;
  game_isdown: string;
  game_gallery1: string;
  game_gallery2: string;
  game_gallery3: string;
  game_gallery4: string;
  game_gallery5: string;
  game_bg: string;
}

const SecurityServices: React.FC = () => {
  const theme = useTheme();
  const { activeSet } = useThemeContext();
  const [games, setGames] = useState<Games[]>([]); // Assuming 'Games' interface is defined
  const [selectedCard, setSelectedCard] = useState<number>(0); // Default index to 0
  const [animateOnSelect, setAnimateOnSelect] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string>(""); // State for dynamic background image

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
  };

  const imageSrc =
    colorSetImageMap[activeSet.toString()] || colorSetImageMap[1];

  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const CTExperience = currentYear - startYear;

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from("ztable_games").select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        // Sort the data by id (assuming 'id' is the name of the field to sort by)
        const sortedData = data.sort((a, b) => a.id - b.id);

        setGames(sortedData);

        if (sortedData.length > 0 && selectedCard === 0) {
          setBackgroundImage(sortedData[0].game_bg); // Set default background image to the first game's cover
        }
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    if (games[selectedCard]) {
      setBackgroundImage(games[selectedCard].game_bg); // Update background image when a game is selected
    }
  }, [selectedCard, games]);

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

      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          height: "100%",
          width: "100%",
          opacity: "0.1",
        }}
      >
        {/* Dynamically update the background image based on the selected game */}
        <Box
          component={"img"}
          src={backgroundImage}
          sx={{
            position: "absolute",
            left: "0",
            top: "0",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            opacity: ".75", // Controls the opacity to keep the content visible
          }}
        />
      </Box>

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

          {selectedCard !== null && games[selectedCard] && (
            <>
              <Grid item xs={12} sm={6} md={5}>
                <Box
                  sx={{
                    position: "relative",
                    marginTop: "2.5rem",
                    transition: "transform 0.3s ease",
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
                      transition: "background 0.3s ease",
                      "&:hover": {
                        background: `${theme.palette.custom.secondaryComponents}`,
                      },
                      opacity: ".5",
                    }}
                  />
                  <Box
                    component={"img"}
                    src={games[selectedCard].game_cover}
                    sx={{
                      width: "100%",
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                      opacity: ".9",
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
                        transform: "scale(1.05)",
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
                        transform: "scale(-1.05)",
                      },
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
                  <Typography fontSize={"1rem"} color="custom.primaryText">
                    {games[selectedCard].game_name}
                  </Typography>
                  <Stack direction={"row"} spacing={1}>
                    <Typography variant="h4" gutterBottom>
                      {games[selectedCard].game_mode}
                    </Typography>
                  </Stack>
                  <Typography variant={"h6"} color="custom.primaryTextGrayed">
                    {games[selectedCard].game_info}
                  </Typography>
                </Stack>
              </Grid>
            </>
          )}
        </Grid>

        <Grid container xs={12} sm={12} md={12} spacing={5} mt={2.5}>
          <Grid item xs={12} sm={12} md={12}>
            <Stack direction={"row"} spacing={4} justifyContent="center">
              {games.slice(0, 3).map((game, index) => (
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
                    <Typography variant="h6">{game.game_mode}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {game.game_name} server.
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
      </Container>
    </Box>
  );
};

export default SecurityServices;
