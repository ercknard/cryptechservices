import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { useThemeContext } from "@/theme/themeProvider";
import { useTheme } from "@mui/material/styles";
import { fetchGitHubEvents, Event } from "@/pages/api/CryptechEventsApi";
import DefaultDialog from "./DefaultDialog";
import { Alert, Card } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

type CustomTheme = {
  activeSet: number;
};

const GitFeedsSection: React.FC = () => {
  const theme = useTheme();
  const { activeSet } = useThemeContext();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      try {
        const eventsData = await fetchGitHubEvents();
        setEvents(eventsData);
      } catch (err) {
        setError("Failed to load events");
      }
      setLoading(false);
    };

    loadEvents();
  }, []);

  if (loading) {
    return (
      <Box
        id="git"
        position={"relative"}
        width={1}
        left={0}
        sx={{
          padding: { md: "4", xs: "1" },
          backgroundColor: "custom.secondaryBackground",
          paddingTop: { md: "7.5rem", xs: "3rem" },
          paddingBottom: { md: "7.5rem", xs: "3rem" },
        }}
      >
        <Container
          sx={{
            justifyContent: { sm: "center", xs: "left" },
            marginX: "auto",
          }}
        >
          <Box position={"relative"} zIndex={2}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              color="custom.secondaryTextGrayed"
            >
              Git Events
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              gutterBottom
              color="custom.primaryTextGrayed"
            >
              Stay updated with the latest Git events, including commits,
              merges, and branch updates of CryptechTest
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop={7.5}
            >
              <CircularProgress />
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        id="git"
        position={"relative"}
        width={1}
        left={0}
        sx={{
          padding: { md: "4", xs: "1" },
          backgroundColor: "custom.secondaryBackground",
          paddingTop: { md: "7.5rem", xs: "3rem" },
          paddingBottom: { md: "7.5rem", xs: "3rem" },
        }}
      >
        <Container
          sx={{
            justifyContent: { sm: "center", xs: "left" },
            marginX: "auto",
          }}
        >
          <Box position={"relative"} zIndex={2}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              color="custom.secondaryTextGrayed"
            >
              Git Events
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              gutterBottom
              color="custom.primaryTextGrayed"
            >
              Stay updated with the latest Git events, including commits,
              merges, and branch updates of CryptechTest
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop={7.5}
            >
              <Alert severity="error">{error}</Alert>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }

  const limitedEvents = events.slice(0, 6);
  const remainingEvents = events.slice(6);

  const colorSetBgBorderRight: { [key: string]: string } = {
    1: "/static/images/blue-border.png",
    2: "/static/images/green-border.png",
    3: "/static/images/yellow-border.png",
    4: "/static/images/orange-border.png",
    5: "/static/images/pink-border.png",
  };

  const imageBgBorderSrc =
    colorSetBgBorderRight[activeSet.toString()] || colorSetBgBorderRight[1];

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
  };

  const imageSrc =
    colorSetImageMap[activeSet.toString()] || colorSetImageMap[1];

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

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
        <Grid item xs={12} sm={12} md={12}>
          <Stack spacing={1.5}>
            <Typography fontSize={"1rem"} color="custom.primaryText">
              Cryptech Services Github
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h3" paddingBottom={1}>
                Github
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
                color="custom.primaryText"
                gutterBottom
              >
                Events
              </Typography>
            </Stack>
            <Typography variant={"h6"} color="custom.primaryTextGrayed">
              Stay updated with the latest Git events, including commits,
              merges, and branch updates of Cryptech Services.
            </Typography>
          </Stack>
        </Grid>

        <Grid container spacing={3} marginTop={"2rem"}>
          {limitedEvents.map((event) => (
            <Grid position={"relative"} item xs={12} sm={6} key={event.id}>
              <Card
                sx={{
                  padding: 3,
                  position: "relative",
                  height: "100%",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "none",
                  "&:hover": {
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "custom.primaryComponents",
                  },
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  marginBottom={2}
                >
                  <Stack
                    direction={{ sm: "row", xs: "column" }}
                    spacing={1}
                    alignItems={"center"}
                    marginBottom={2}
                  >
                    <Box
                      component="img"
                      width={{ xs: 40 }}
                      alt="Logo"
                      src={event.actor.avatar_url}
                    />
                    <Typography
                      variant="subtitle1"
                      color="custom.primaryTextGrayed"
                    >
                      {event.actor.display_login}
                    </Typography>
                  </Stack>
                  <Link
                    href={`https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="subtitle1"
                    color="custom.mainColor"
                  >
                    <ArrowOutwardIcon />
                  </Link>
                </Stack>

                <Stack
                  direction={{ md: "row", xs: "column" }}
                  spacing={1}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="custom.primaryText"
                  >
                    Event Type:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="custom.primaryTextGrayed"
                  >
                    {event.type}
                  </Typography>
                </Stack>

                <Stack
                  direction={{ md: "row", xs: "column" }}
                  spacing={1}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="custom.primaryText"
                  >
                    Repository:
                  </Typography>
                  <Link
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="subtitle1"
                  >
                    {event.repo.name}
                  </Link>
                </Stack>

                {event.payload.commits && event.payload.commits.length > 0 ? (
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    spacing={1}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="custom.primaryText"
                    >
                      Commit Message:
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="custom.primaryTextGrayed"
                    >
                      {event.payload.commits[0].message.substring(0, 32)}
                      {event.payload.commits[0].message.length > 20 && "..."}
                    </Typography>
                  </Stack>
                ) : (
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    spacing={1}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="textSecondary"
                    >
                      No commit message
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="custom.primaryTextGrayed"
                    >
                      .
                    </Typography>
                  </Stack>
                )}

                <Stack
                  direction={{ md: "row", xs: "column" }}
                  spacing={1}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="custom.primaryText"
                  >
                    Created At:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="custom.primaryTextGrayed"
                  >
                    {new Date(event.created_at).toLocaleString()}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>

        {remainingEvents.length > 0 && (
          <Box display="flex" justifyContent="right" marginTop={3}>
            <Button variant="outlined" onClick={handleDialogOpen}>
              View More Events
            </Button>
          </Box>
        )}

        <DefaultDialog
          maxWidth="md"
          open={openDialog}
          handleOnClose={handleDialogClose}
          title="CryptechTest Git Events"
        >
          <Grid container spacing={4} padding={1} paddingTop={5}>
            {remainingEvents.map((event) => (
              <Grid item xs={12} key={event.id}>
                <Card
                  sx={{
                    padding: 3,
                    position: "relative",
                    height: "100%",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    backgroundColor: "none",
                    borderRadius: "5px",
                    "&:hover": {
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                      backgroundColor: "custom.primaryComponents",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    marginBottom={2}
                  >
                    <Stack
                      direction={{ sm: "row", xs: "column" }}
                      spacing={1}
                      alignItems={"center"}
                      marginBottom={2}
                    >
                      <Box
                        component="img"
                        width={{ xs: 40 }}
                        alt="Logo"
                        src={event.actor.avatar_url}
                      />
                      <Typography
                        variant="subtitle1"
                        color="custom.primaryTextGrayed"
                      >
                        {event.actor.display_login}
                      </Typography>
                    </Stack>
                    <Link
                      href={`https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="subtitle1"
                      color="custom.mainColor"
                    >
                      <ArrowOutwardIcon />
                    </Link>
                  </Stack>

                  <Stack
                    direction={{ sm: "row", xs: "column" }}
                    spacing={1}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="custom.primaryText"
                    >
                      Event Type:
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="custom.primaryTextGrayed"
                    >
                      {event.type}
                    </Typography>
                  </Stack>

                  <Stack
                    direction={{ sm: "row", xs: "column" }}
                    spacing={1}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="custom.primaryText"
                    >
                      Repository:
                    </Typography>
                    <Link
                      href={event.repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="subtitle1"
                    >
                      {event.repo.name}
                    </Link>
                  </Stack>

                  {event.payload.commits && event.payload.commits.length > 0 ? (
                    <Stack
                      direction={{ sm: "row", xs: "column" }}
                      spacing={1}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="custom.primaryText"
                      >
                        Commit Message:
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="custom.primaryTextGrayed"
                      >
                        {event.payload.commits[0].message.substring(0, 32)}
                        {event.payload.commits[0].message.length > 20 && "..."}
                      </Typography>
                    </Stack>
                  ) : (
                    <Stack
                      direction={{ sm: "row", xs: "column" }}
                      spacing={1}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="textSecondary"
                      >
                        No commit message
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="custom.primaryTextGrayed"
                      >
                        .
                      </Typography>
                    </Stack>
                  )}

                  <Stack
                    direction={{ sm: "row", xs: "column" }}
                    spacing={1}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="custom.primaryText"
                    >
                      Created At:
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="custom.primaryTextGrayed"
                    >
                      {new Date(event.created_at).toLocaleString()}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </DefaultDialog>
      </Container>
    </Box>
  );
};

export default GitFeedsSection;
