import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import { useTheme } from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";
import supabase from "@/lib/supabase";

// Define the types for the statistics
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
}

const Games: React.FC = () => {
  const theme = useTheme();
  const { activeSet } = useThemeContext();
  const [games, setGames] = useState<Games[]>([]);
  const [selectedCard, setSelectedCard] = useState<number | null>(null); // State for tracking selected card

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
    // Fetch IT Services data from Supabase
    const fetchGames = async () => {
      const { data, error } = await supabase.from("ztable_games").select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        setGames(data); // Set the fetched IT services data
        console.log("Fetched projects:", data); // Log data here to check
      }
    };

    fetchGames();
  }, []);

  return (
    <Box
      position={"relative"}
      sx={{ paddingY: "5rem", backgroundColor: "custom.primaryBackground" }}
    >
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
                  Cryptech Services Servers
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography variant="h3" paddingBottom={1}>
                  Have all the things in the world with our
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  color="custom.primaryText"
                  gutterBottom
                >
                  Game Servers
                </Typography>
              </Stack>
              <Typography variant={"h6"} color="custom.primaryTextGrayed">
                Come play with us and join the fun!
              </Typography>
            </Stack>
          </Grid>

          {/* Conditionally render the selected game's details */}
          {selectedCard !== null && games[selectedCard] && (
            <Grid
              container
              xs={12}
              justifyContent={"center"}
              marginTop={5}
              marginBottom={5}
            >
              {/* Display the selected game */}
              <Grid item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    position: "relative",
                    marginTop: "2.5rem",
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
                    src={games[selectedCard].game_cover}
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
                        transform: "scale(-1.05)", // Slight zoom effect and scale flip
                      },
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={12} marginTop={3}>
                <Stack spacing={1.5}>
                  <Typography
                    fontSize={"1rem"}
                    color="custom.primaryText"
                    textAlign={"center"}
                  >
                    {games[selectedCard].game_name}
                  </Typography>
                  <Stack
                    direction={"row"}
                    spacing={1}
                    justifyContent={"center"}
                  >
                    <Typography
                      variant="h3"
                      fontWeight={600}
                      color="custom.primaryText"
                      gutterBottom
                    >
                      {games[selectedCard].game_mode}
                    </Typography>
                  </Stack>
                  <Typography
                    variant={"h6"}
                    color="custom.primaryTextGrayed"
                    textAlign={"center"}
                  >
                    {games[selectedCard].game_info}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={12} md={12} marginTop={3}>
                <Stack direction={"row"} spacing={5} justifyContent={"center"}>
                  {[
                    games[selectedCard].game_gallery1,
                    games[selectedCard].game_gallery2,
                    games[selectedCard].game_gallery3,
                    games[selectedCard].game_gallery4,
                    games[selectedCard].game_gallery5,
                  ].map((galleryImage, index) => (
                    <Box key={index} position={"relative"} width={"30%"}>
                      <Box
                        component={"img"}
                        src={galleryImage}
                        sx={{
                          width: "100%",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)", // Slight zoom effect on hover
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          )}
        </Grid>

        {/* Cards to Select the Grid View */}
        <Grid item xs={12} sm={12} md={12} marginTop={5}>
          <Stack direction={"row"} spacing={5} justifyContent="center">
            {games.slice(0, 3).map((game, index) => (
              <Card
                key={index}
                onClick={() => setSelectedCard(index)}
                sx={{
                  width: "200px",
                  padding: "1rem",
                  cursor: "pointer",
                  backgroundColor:
                    selectedCard === index
                      ? theme.palette.primary.main
                      : theme.palette.background.paper,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6">{`Card ${index + 1}`}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Select this card to view the game.
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Games;
