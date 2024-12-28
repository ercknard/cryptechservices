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
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
  const { activeSet } = useThemeContext();
  const [featuredProjects, setFeaturedProjects] = useState<FeaturedProjects[]>(
    []
  );

  const [projects, setProjects] = useState<Projects[]>([]);

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
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
              <Stack direction={"row"} spacing={1}>
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
            spaceBetween={0}
            autoplay={{
              delay: 3000, // 3 seconds per slide
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
                <Card
                  sx={{
                    maxWidth: "35%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "custom.primaryComponents",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.project_cover}
                    alt={project.project_name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.project_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.project_main_desc}
                    </Typography>
                  </CardContent>
                </Card>
                <Box
                  component="img"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    right: "25%",
                    top: "0",
                    height: "100%",
                    pointerEvents: "none",
                    aspectRatio: "auto",
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
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>

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
                  cursor: "pointer",
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