import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";
import supabase from "@/lib/supabase";

const HomeSubscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const { activeSet } = useThemeContext();
  const [message, setMessage] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility

  const theme = useTheme();

  const handleSubscribe = async () => {
    if (email) {
      try {
        // Insert email into Supabase
        const { data, error } = await supabase
          .from("ztable_subscriptions") // Replace with your table name
          .insert([{ email }]);

        if (error) {
          setMessage("There was an error subscribing. Please try again.");
          setOpenSnackbar(true);
          setTimeout(() => {
            setOpenSnackbar(false); // Close the drawer after the Snackbar has time to show
          }, 5000); // Wait 500ms before closing the drawer
        } else {
          setMessage(`Thanks for subscribing with ${email}`);
          setEmail(""); // Clear the email field
          setOpenSnackbar(true); // Open Snackbar with success message
          setTimeout(() => {
            setOpenSnackbar(false); // Close the drawer after the Snackbar has time to show
          }, 5000); // Wait 500ms before closing the drawer
        }
      } catch (error) {
        setMessage("There was an error subscribing. Please try again.");
        setOpenSnackbar(true);
        setTimeout(() => {
          setOpenSnackbar(false); // Close the drawer after the Snackbar has time to show
        }, 5000); // Wait 500ms before closing the drawer
      }
    } else {
      setMessage("Please enter a valid email address.");
      setOpenSnackbar(true); // Open Snackbar with error message
      setTimeout(() => {
        setOpenSnackbar(false); // Close the drawer after the Snackbar has time to show
      }, 5000); // Wait 500ms before closing the drawer
    }
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false); // Close the Snackbar
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        paddingBottom: "5rem",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            background: `linear-gradient(to right, ${theme.palette.custom.primaryComponents}, ${theme.palette.custom.mainColor})`,
            color: "white",
            padding: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            zIndex: 10,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Stay Updated with Our Latest News!
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Get the latest updates directly in your inbox. Don&apos;t miss out
            on exclusive content.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              variant="outlined"
              label="Enter your email"
              type="email"
              value={email}
              onChange={handleChange}
              sx={{ marginRight: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </Box>

          <Box
            component="img"
            src={imageSrc}
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              height: "100%",
              transform: "scale(-1)",
              pointerEvents: "none",
              aspectRatio: "auto",
            }}
          />
        </Box>
      </Container>

      {/* Snackbar for message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000} // Hide after 6 seconds
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={message?.includes("valid") ? "error" : "success"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography color="custom.primaryText">{message}</Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HomeSubscribe;
