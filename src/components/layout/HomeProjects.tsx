// components/ProjectsSection.tsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useThemeContext } from "@/theme/themeProvider";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Sample project data
const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1",
    imageUrl: "/static/images/Full-Stack Web Development.jpg",
    link: "#",
  },
  {
    title: "Project 2",
    description: "This is a description of Project 2",
    imageUrl: "/static/images/Full-Stack Web Development.jpg",
    link: "#",
  },
  {
    title: "Project 3",
    description: "This is a description of Project 3",
    imageUrl: "/static/images/Full-Stack Web Development.jpg",
    link: "#",
  },
  {
    title: "Project 4",
    description: "This is a description of Project 4",
    imageUrl: "/static/images/Full-Stack Web Development.jpg",
    link: "#",
  },
  {
    title: "Project 5",
    description: "This is a description of Project 5",
    imageUrl: "/static/images/Full-Stack Web Development.jpg",
    link: "#",
  },
];

const HomeProjects: React.FC = () => {
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
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "custom.secondaryBackground",
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
              <Typography fontSize={"1rem"} color="custom.primaryText">
                Cryptech Services Projects
              </Typography>
              <Stack direction={"row"} spacing={1}>
                <Typography variant="h3" paddingBottom={1}>
                  Introducing our High-end
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
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            style={{ paddingTop: "5rem", paddingBottom: "2.5rem" }}
          >
            {projects.map((project, index) => (
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
                    image={project.imageUrl}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
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
      </Container>
    </Box>
  );
};

export default HomeProjects;
