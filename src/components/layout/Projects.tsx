// components/ProjectsSection.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { useThemeContext } from "@/theme/themeProvider";
import { useTheme } from "@mui/material";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import supabase from "@/lib/supabase";

// Define the structure for IT services
interface FeaturedProjects {
  project_name: string;
  project_icon: string;
  project_initial_desc: string;
  project_main_desc: string;
  project_cover: string;
  project_link: string;
}

interface Projects {
  project_name: string;
  project_desc: string;
  project_link: string;
}

const Projects: React.FC = () => {
  const theme = useTheme();
  const { activeSet } = useThemeContext();
  const [featuredProjects, setFeaturedProjects] = useState<FeaturedProjects[]>(
    []
  );

  const [projects, setProjects] = useState<Projects[]>([]);
  const [selectedCard, setSelectedCard] = useState<number>(0); // Default index to 0
  const [animateOnSelect, setAnimateOnSelect] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string>(""); // State for dynamic background image

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

  useEffect(() => {
    // Fetch IT Services data from Supabase
    const fetchFeaturedProjects = async () => {
      const { data, error } = await supabase
        .from("ztable_featuredprojects")
        .select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        const sortedData = data.sort((a, b) => a.id - b.id);
        setFeaturedProjects(sortedData); // Set the fetched IT services data
        console.log("Fetched projects:", data); // Log data here to check
      }
    };

    fetchFeaturedProjects();
  }, []);

  useEffect(() => {
    // Fetch IT Services data from Supabase
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("ztable_otherprojects")
        .select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        const sortedData = data.sort((a, b) => a.id - b.id);

        setProjects(sortedData); // Set the fetched IT services data
        console.log("Fetched projects:", data); // Log data here to check
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (featuredProjects[selectedCard]) {
      setBackgroundImage(featuredProjects[selectedCard].project_cover); // Update background image when a game is selected
    }
  }, [selectedCard, featuredProjects]);

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
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "custom.primaryBackground",
        textAlign: "left",
        paddingY: "5rem",
      }}
    >
      {/* <Box
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
          opacity: "0.05",
        }}
      >

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
            opacity: ".05",
          }}
        />
      </Box> */}
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid
          container
          spacing={5}
          justifyContent="center"
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
                  Cryptech Services Projects
                </Typography>
              </Stack>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                <Typography variant="h3" paddingBottom={1}>
                  Featuring our High-end
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  color="custom.primaryText"
                  gutterBottom
                >
                  Projects
                </Typography>
              </Stack>
              <Typography variant={"h6"} color="custom.primaryTextGrayed">
                Explore our standout projects that showcase our ultimate
                capabilities.
              </Typography>
            </Stack>
          </Grid>
          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={500}
            autoplay={{
              delay: 7500, // 3 seconds per slide
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper"
            style={{ paddingTop: "5rem", paddingBottom: "2.5rem" }}
          >
            {featuredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <Grid
                  container
                  xs={11}
                  alignItems={"center"}
                  spacing={5}
                  marginX={"auto"}
                >
                  <Grid item xs={12} sm={6} md={5}>
                    <Box
                      sx={{
                        position: "relative",
                        transition: "transform 0.3s ease",
                        transform: animateOnSelect ? "scale(1.05)" : "scale(1)",
                        "&:hover": {
                          transform: "scale(1.05)",
                          transition: "transform 0.3s ease",
                        },
                      }}
                    >
                      {/* <Box
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
                      /> */}
                      <Box
                        component="img"
                        src={project.project_cover}
                        alt={project.project_name}
                        sx={{
                          width: "100%",
                          maxWidth: 600,
                          marginBottom: 2,
                          transition: "opacity .3s ease",
                          opacity: animateOnSelect ? ".5" : "1",
                        }}
                      />
                      {/* <Box
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
                      /> */}
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={7}>
                    <Box sx={{ position: "relative" }}>
                      {selectedCard !== null && (
                        <Box
                          sx={{
                            marginTop: "3rem",
                            transition: "opacity .3s ease",
                            opacity: animateOnSelect ? ".5" : "1",
                          }}
                        >
                          <Stack direction={"column"} spacing={3}>
                            <Typography variant="h4" gutterBottom>
                              {project.project_name}
                            </Typography>

                            <Typography
                              variant={"h6"}
                              color="custom.primaryTextGrayed"
                              sx={{ marginBottom: 2 }}
                            >
                              {project.project_main_desc}
                            </Typography>

                            <Grid
                              item
                              xs={12}
                              sm={12}
                              md={12}
                              mt={{ xs: 2.5, md: 0 }}
                            >
                              <Box display="flex" justifyContent="right">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  href={`${project.project_link}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  size="large"
                                >
                                  {project.project_name}
                                </Button>
                              </Box>
                            </Grid>
                          </Stack>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                </Grid>
                {/* <Box
                  component="img"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    right: "25%",
                    top: "0",
                    height: "100%",
                    pointerEvents: "none",
                    aspectRatio: "auto",
                    display: { xs: "none", md: "block" },
                  }}
                />

                <Box
                  component="img"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    left: "25%",
                    top: "50%",
                    height: "100%",
                    pointerEvents: "none",
                    aspectRatio: "auto",
                    transform: "scaleX(-1)",
                    display: { xs: "none", md: "block" },
                  }}
                /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>

        {/* <Grid container xs={12} sm={12} md={12} mt={2.5}>
          {featuredProjects.map((game, index) => (
            <Grid item xs={12} sm={12} md={4} spacing={1} key={index}>
              <Card
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
                  <Stack direction={"row"} spacing={2.5} alignItems={"center"}>
                    <Box
                      component={"img"}
                      src={game.project_cover}
                      sx={{
                        width: "20%",
                        height: "200%",
                        aspectRatio: "1/1",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                        opacity: ".9",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">{game.project_name}</Typography>
                    </Box>
                  </Stack>
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
            </Grid>
          ))}
        </Grid> */}

        <Grid container spacing={2} marginTop={4}>
          <Grid item xs={12} marginBottom={1}>
            <Typography variant="h4" color="text.secondary">
              Other Projects :
            </Typography>
          </Grid>

          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  padding: 1,
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "none",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" color="text.secondary">
                    {project.project_name}
                  </Typography>
                  <Typography variant="body1" color="custom.primaryTextGrayed">
                    {project.project_desc}
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
                    pointerEvents: "none",
                    opacity: 0.15,
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

export default Projects;
