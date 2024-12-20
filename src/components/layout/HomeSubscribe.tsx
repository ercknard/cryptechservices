// components/SubscribeBanner.tsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  useTheme,
} from "@mui/material";
import { useThemeContext } from "@/theme/themeProvider";

const HomeSubscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const { activeSet } = useThemeContext();
  const [message, setMessage] = useState<string | null>(null);

  const theme = useTheme();
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

  const handleSubscribe = () => {
    if (email) {
      setMessage(`Thanks for subscribing with ${email}`);
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
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
          <Container sx={{ display: "flex", justifyContent: "center" }}>
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
          </Container>
          {message && (
            <Typography
              variant="body2"
              sx={{ marginTop: 2, textAlign: "center" }}
            >
              {message}
            </Typography>
          )}

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
    </Box>
  );
};

export default HomeSubscribe;
