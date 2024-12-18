import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Email, GitHub, Twitter, MarkEmailRead } from "@mui/icons-material";

const SocialLinksList: React.FC = () => {
  return (
    <Stack direction={"row"} spacing={2} marginY={1}>
      <Typography>Connect With Us: </Typography>

      <Box
        component="a"
        href="mailto:example@example.com"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            color: "custom.primaryText", // Change color on hover
          },
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <Email />
          <Typography>Email</Typography>
        </Stack>
      </Box>

      <Box
        component="a"
        href="https://discord.com/invite/your-invite-link"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            color: "custom.primaryText", // Change color on hover
          },
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <MarkEmailRead />
          <Typography>Discord</Typography>
        </Stack>
      </Box>

      <Box
        component="a"
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            color: "custom.primaryText", // Change color on hover
          },
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <Twitter />
          <Typography>Twitter</Typography>
        </Stack>
      </Box>

      <Box
        component="a"
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": {
            color: "custom.primaryText", // Change color on hover
          },
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <GitHub />
          <Typography>Github</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SocialLinksList;
