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

interface TeamMember {
  team_name: string;
  team_discord: string;
  team_email: string;
  team_role1?: string;
  team_role2?: string;
  team_role3?: string;
  team_image: string;
}

const Team: React.FC = () => {
  const theme = useTheme();
  const { activeSet } = useThemeContext(); // activeSet will determine the theme's background
  const [teamMember, setTeamMember] = useState<TeamMember[]>([]);
  const [teamAdmin, setTeamAdmin] = useState<TeamMember[]>([]);

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
              <Stack direction={"row"} spacing={1}>
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

          <Box width={1} marginTop={4}>
            <Typography variant="h4" fontWeight={"700"} textAlign={"center"}>
              Admins
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"}>
              Please contact an Admin team member if you have an urgent request,
              Thank you.
            </Typography>
          </Box>

          {teamAdmin.map((member, index) => (
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
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "custom.primaryComponents",
                  },
                }}
              >
                <CardMedia>
                  <Avatar
                    sx={{ width: 150, height: 150, margin: "auto", mt: 2 }}
                    src={member.team_image}
                    alt={member.team_name}
                  />
                </CardMedia>
                <CardContent sx={{ textAlign: "center", marginTop: "1rem" }}>
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
                    marginTop={2}
                  >
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      {member.team_email}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="custom.primaryTextGrayed"
                    >
                      Discord: {member.team_discord}
                    </Typography>
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
                  }}
                />
              </Card>
            </Grid>
          ))}

          <Box width={1} marginTop={5}>
            <Typography variant="h4" fontWeight={"700"} textAlign={"center"}>
              Team
            </Typography>
          </Box>

          {teamMember.map((member, index) => (
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
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "custom.primaryComponents",
                  },
                }}
              >
                <CardMedia>
                  <Avatar
                    sx={{ width: 150, height: 150, margin: "auto", mt: 2 }}
                    src={member.team_image}
                    alt={member.team_name}
                  />
                </CardMedia>
                <CardContent sx={{ textAlign: "center", marginTop: ".5rem" }}>
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
                    marginTop={2}
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
                  src={imageSrc}
                  sx={{
                    position: "absolute",
                    right: "0",
                    top: "0",
                    height: "100%",
                    transition: "opacity 0.3s ease",
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
