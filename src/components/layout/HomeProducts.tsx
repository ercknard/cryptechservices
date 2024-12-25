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
  Icon,
} from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import supabase from "@/lib/supabase";

// Define the structure for IT services
interface ITServices {
  service_name: string;
  service_icon: string;
  service_initial_desc: string;
  service_main_desc: string;
  service_cover: string;
}

// Import dummy icons for now
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import PublicIcon from "@mui/icons-material/Public";
import DrawIcon from "@mui/icons-material/Draw";

const HomeProducts: React.FC = () => {
  const theme = useTheme();
  const { activeSet } = useThemeContext();
  const [selectedCard, setSelectedCard] = useState<number>(0); // Default index to 0
  const [animateOnSelect, setAnimateOnSelect] = useState<boolean>(false);
  const [itServices, setItServices] = useState<ITServices[]>([]);

  const iconMap: { [key: string]: React.ElementType } = {
    LayersIcon,
    CurrencyBitcoinOutlinedIcon,
    PublicIcon,
    DesignServicesOutlinedIcon,
    DrawIcon,
    SupportAgentOutlinedIcon,
  };

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
    const fetchITServices = async () => {
      const { data, error } = await supabase
        .from("ztable_itservices")
        .select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        // Sort the fetched data by ID (ascending order)
        const sortedData = data.sort((a, b) => a.id - b.id);

        setItServices(sortedData); // Set the sorted IT services data

        // Automatically select the first service if it hasn't been selected already
        if (sortedData.length > 0 && selectedCard === 0) {
          setSelectedCard(0); // Set first card as selected if no card is selected
        }
      }
    };

    fetchITServices();
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    if (selectedCard !== null) {
      setAnimateOnSelect(true);

      // Reset the animation after it finishes (using the same duration as your transition time)
      const timeout = setTimeout(() => {
        setAnimateOnSelect(false);
      }, 300); // Match the duration of the transition
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
                  Our Services
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  href={"/itservices"}
                >
                  Learn More <ArrowOutwardIcon fontSize="small" />
                </Button>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography variant="h3" paddingBottom={1}>
                  Introducing our Top-notch
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  color="custom.primaryText"
                  gutterBottom
                >
                  IT Services
                </Typography>
              </Stack>
              <Typography variant={"h6"} color="custom.primaryTextGrayed">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and your customers.
              </Typography>
            </Stack>
          </Grid>

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
                component="img"
                src={itServices[selectedCard]?.service_cover}
                alt={itServices[selectedCard]?.service_name}
                sx={{
                  width: "100%",
                  maxWidth: 600,
                  marginBottom: 2,
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  aspectRatio: "1/1",
                  transition: "opacity .3s ease",
                  opacity: animateOnSelect ? ".5" : "1",
                  "&:hover": {
                    transform: "scale(1.2)",
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
                  <Stack direction={"column"} spacing={2}>
                    <Typography variant="h4" gutterBottom>
                      {itServices[selectedCard]?.service_name}
                    </Typography>

                    <Typography
                      variant={"h6"}
                      color="custom.primaryTextGrayed"
                      sx={{ marginBottom: 2 }}
                    >
                      {itServices[selectedCard]?.service_main_desc}
                    </Typography>
                  </Stack>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Cards Section */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ marginTop: "2.5rem" }}
        >
          {itServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  padding: 1,
                  position: "relative",
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
                onClick={() => setSelectedCard(index)} // Set the selected card
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Icon
                    sx={{
                      paddingRight: "2.5rem",
                      paddingBottom: "2.5rem",
                      color: theme.palette.custom.primaryText,
                    }}
                  >
                    {React.createElement(
                      iconMap[service.service_icon] || LayersIcon,
                      { fontSize: "large" }
                    )}
                  </Icon>
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {service.service_name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.custom.primaryTextGrayed,
                      marginTop: 1,
                    }}
                  >
                    {service.service_initial_desc}
                  </Typography>
                </CardContent>
                <Box
                  component="img"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    right: "0",
                    top: "0",
                    height: "100%",
                    pointerEvents: "none",
                    aspectRatio: "auto",
                    transition: "opacity 0.3s ease",
                    opacity: selectedCard === index ? "1" : ".1",
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

export default HomeProducts;
