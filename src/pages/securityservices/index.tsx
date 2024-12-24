import React from "react";
import { DefaultHead } from "@/components/layout/Head";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import PagesCover from "@/components/layout/PagesCover";

const SecurityServicesPage = () => {
  const theme = useTheme();

  return (
    <>
      <DefaultHead title="Security Services" />
      <Wrapper>
        <Box
          paddingTop={"4.25rem"}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: "50vh",
            backgroundColor: "custom.primaryBackground",
            textAlign: "left",
            padding: "0 20px",
            justifyContent: "center",
          }}
        >
          <Box zIndex={1}>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="title" fontWeight={600} paddingBottom={1}>
                Cryptech Services&apos;
              </Typography>
              <Typography
                variant="title"
                fontWeight={600}
                fontSize={"3rem"}
                color="custom.primaryText"
                gutterBottom
              >
                Security Services
              </Typography>
            </Stack>
          </Box>

          <PagesCover />
        </Box>

        <Box position={"relative"} minHeight={"100vh"}>
          <Box
            sx={{
              position: "absolute",
              left: "0",
              top: "-10%",
              width: "calc(100vw - 5px)",
              minHeight: "10rem",
              background: `linear-gradient(to top, ${theme.palette.custom.secondaryBackground}, transparent)`,
            }}
          />
        </Box>
      </Wrapper>
    </>
  );
};

export default SecurityServicesPage;
