// components/TeamSection.tsx

import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  CardMedia,
  Container,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";
import supabase from "@/lib/supabase";
import { Theme } from "@mui/material/styles";

interface TeamMember {
  team_name: string;
  team_discord: string;
  team_email: string;
  team_role1?: string;
  team_role2?: string;
  team_role3?: string;
  team_image: string;
  team_mainrole: string;
}

const Team: React.FC = () => {
  const theme = useTheme();
  const { activeSet } = useThemeContext(); // activeSet will determine the theme's background
  const [teamMember, setTeamMember] = useState<TeamMember[]>([]);
  const [teamAdmin, setTeamAdmin] = useState<TeamMember[]>([]);
  const [teamMods, setTeamMods] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMember = async () => {
      const { data, error } = await supabase.from("ztable_team").select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        // Sort the data by id (assuming 'id' is the name of the field to sort by)
        const sortedData = data.sort((a, b) => a.id - b.id);
        setTeamMember(sortedData);
      }
    };

    fetchTeamMember();
  }, []);

  useEffect(() => {
    const fetchTeamAdmin = async () => {
      const { data, error } = await supabase.from("ztable_admin").select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        // Sort the data by id (assuming 'id' is the name of the field to sort by)
        const sortedData = data.sort((a, b) => a.id - b.id);
        setTeamAdmin(sortedData);
      }
    };

    fetchTeamAdmin();
  }, []);

  useEffect(() => {
    const fetchTeamMods = async () => {
      const { data, error } = await supabase.from("ztable_mods").select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        // Sort the data by id (assuming 'id' is the name of the field to sort by)
        const sortedData = data.sort((a, b) => a.id - b.id);
        setTeamMods(sortedData);
      }
    };

    fetchTeamMods();
  }, []);

  // Map to get background images based on activeSet (theme)
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
                  CS Team
                </Typography>
              </Stack>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                <Typography variant="h3" paddingBottom={1}>
                  Cryptech Services
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  color="custom.primaryText"
                  gutterBottom
                >
                  Team
                </Typography>
              </Stack>
              <Typography variant={"h6"} color="custom.primaryTextGrayed">
                Meet the talented team behind our innovative solutions.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} marginTop={10}>
            <Typography variant="h4" fontWeight={"700"} textAlign={"center"}>
              Admins
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"}>
              Please contact an Admin team member if you have an urgent request,
              Thank you.
            </Typography>
          </Grid>

          {teamAdmin.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={(theme: Theme) => ({
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  background: `linear-gradient(to top, ${theme.palette.custom.primaryBackground}, ${theme.palette.custom.primaryComponents})`, // Gradient with custom.primaryBackground
                  padding: 1,
                  borderWidth: "2px",
                  borderColor: "custom.mainColor",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                })}
              >
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.01 }}
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <CardMedia>
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      margin: "auto",
                      mt: 5,
                      mb: 5,
                      borderStyle: "dashed",
                      borderColor: "custom.mainColor",
                      borderWidth: "2px",
                    }}
                    src={`https://cdn.discordapp.com/avatars/${
                      member.team_discord.split(":")[1]
                    }/${member.team_discord.split(":")[2]}.png?size=1024`}
                    alt={member.team_name}
                  />
                </CardMedia>
                <CardContent
                  sx={{
                    textAlign: "center",
                    marginTop: "1rem",
                    // backgroundImage: `linear-gradient(to top,${theme.palette.custom.primaryComponents}, transparent)`,
                  }}
                >
                  {/* <Box position={"absolute"} top={".5rem"} left={".5rem"}>
                    <Typography variant="h6" color="custom.primaryText">
                      {member.team_role1}
                    </Typography>
                  </Box> */}
                  <Typography variant="h4" fontWeight={"600"}>
                    {member.team_name}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    marginTop={2}
                  >
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_role1}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_role2}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_role3}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    marginTop={1}
                  >
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_email}
                    </Typography>
                    {/* <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      Discord: {member.team_discord}
                    </Typography> */}
                  </Stack>
                </CardContent>
                <Box
                  component={"img"}
                  alt="Logo"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    right: "0",
                    top: "0",
                    height: "100%",
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                    opacity: 0.05,
                  }}
                />
                <Box
                  component={"img"}
                  alt="Logo"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    height: "100%",
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                    opacity: 0.05,
                    transform: "scaleX(-1)",
                  }}
                />
              </Card>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Typography variant="h4" fontWeight={"700"} textAlign={"center"}>
              Team
            </Typography>
          </Grid>

          {teamMember.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={(theme: Theme) => ({
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  background: `linear-gradient(to top, ${theme.palette.custom.primaryBackground}, ${theme.palette.custom.primaryComponents})`, // Gradient with custom.primaryBackground
                  padding: 1,
                  borderWidth: "2px",
                  borderColor: "custom.mainColor",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                })}
              >
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.01 }}
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <CardMedia>
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      margin: "auto",
                      mt: 5,
                      mb: 5,
                      borderStyle: "dashed",
                      borderColor: "custom.mainColor",
                      borderWidth: "2px",
                    }}
                    src={`https://cdn.discordapp.com/avatars/${
                      member.team_discord.split(":")[1]
                    }/${member.team_discord.split(":")[2]}.png?size=1024`}
                    alt={member.team_name}
                  />
                </CardMedia>
                <CardContent
                  sx={{
                    textAlign: "center",
                    marginTop: "1rem",
                    // backgroundImage: `linear-gradient(to top,${theme.palette.custom.primaryComponents}, transparent)`,
                  }}
                >
                  {/* <Box position={"absolute"} top={".5rem"} left={".5rem"}>
                    <Typography variant="h6" color="custom.primaryText">
                      {member.team_mainrole}
                    </Typography>
                  </Box> */}
                  <Typography variant="h5">{member.team_name}</Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    marginTop={2}
                  >
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_role1}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_role2}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_role3}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    marginTop={1}
                  >
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_email}
                    </Typography>
                  </Stack>
                </CardContent>
                <Box
                  component={"img"}
                  alt="Logo"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    right: "0",
                    top: "0",
                    height: "100%",
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                    opacity: 0.05,
                  }}
                />
                <Box
                  component={"img"}
                  alt="Logo"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    height: "100%",
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                    opacity: 0.05,
                    transform: "scaleX(-1)",
                  }}
                />
              </Card>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Typography variant="h4" fontWeight={"700"} textAlign={"center"}>
              Moderators
            </Typography>
          </Grid>

          {teamMods.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={(theme: Theme) => ({
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  background: `linear-gradient(to top, ${theme.palette.custom.primaryBackground}, ${theme.palette.custom.primaryComponents})`, // Gradient with custom.primaryBackground
                  padding: 1,
                  borderWidth: "2px",
                  borderColor: "custom.mainColor",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                })}
              >
                <svg
                  className="absolute bottom-0 left-0 mb-8"
                  viewBox="0 0 375 283"
                  fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.01 }}
                >
                  <rect
                    x="159.52"
                    y="175"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 159.52 175)"
                    fill="white"
                  />
                  <rect
                    y="107.48"
                    width="152"
                    height="152"
                    rx="8"
                    transform="rotate(-45 0 107.48)"
                    fill="white"
                  />
                </svg>
                <CardMedia>
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      margin: "auto",
                      mt: 5,
                      mb: 5,
                      borderStyle: "dashed",
                      borderColor: "custom.mainColor",
                      borderWidth: "2px",
                    }}
                    src={`https://cdn.discordapp.com/avatars/${
                      member.team_discord.split(":")[1]
                    }/${member.team_discord.split(":")[2]}.png?size=1024`}
                    alt={member.team_name}
                  />
                </CardMedia>
                <CardContent
                  sx={{
                    textAlign: "center",
                    marginTop: "1rem",
                    // backgroundImage: `linear-gradient(to top,${theme.palette.custom.primaryComponents}, transparent)`,
                  }}
                >
                  {/* <Box position={"absolute"} top={".5rem"} left={".5rem"}>
                    <Typography variant="h6" color="custom.primaryText">
                      {member.team_mainrole}
                    </Typography>
                  </Box> */}
                  <Typography variant="h5">{member.team_name}</Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    marginTop={2}
                  >
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_role1}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_role2}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_role3}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    marginTop={1}
                  >
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_email}
                    </Typography>
                  </Stack>
                </CardContent>
                <Box
                  component={"img"}
                  alt="Logo"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    right: "0",
                    top: "0",
                    height: "100%",
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                    opacity: 0.05,
                  }}
                />
                <Box
                  component={"img"}
                  alt="Logo"
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    height: "100%",
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                    opacity: 0.05,
                    transform: "scaleX(-1)",
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

export default Team;
