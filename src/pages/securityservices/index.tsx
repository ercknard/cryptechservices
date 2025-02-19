import React from "react";
import { DefaultHead } from "@/components/layout/Head";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import PagesCover from "@/components/layout/PagesCover";
import SecurityServices from "@/components/layout/SecurityServices";

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
          <Box
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "calc(100vw - 5px)",
              minHeight: "50vh",
              backgroundImage: `url(/static/images/project-cover.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "scaleX(-1)",
            }}
          />
          <Box zIndex={1}>
            <Stack direction={{ xs: "column", md: "column" }}>
              <Typography variant="title" fontWeight={600} paddingBottom={1}>
                Cryptech Services&apos;
              </Typography>
              <Typography
                variant="title"
                fontWeight={600}
                fontSize={"3rem"}
                color="custom.primaryText"
                gutterBottom
                lineHeight={"3rem"}
              >
                Security Services
              </Typography>
            </Stack>
          </Box>

          <PagesCover />
        </Box>

        <Box
          position={"relative"}
          paddingBottom={"3rem"}
          bgcolor={`${theme.palette.custom.primaryBackground}`}
        >
          <Box
            sx={{
              position: "absolute",
              left: "0",
              top: "-17.5%",
              width: "calc(100vw - 5px)",
              minHeight: "10rem",
              background: `linear-gradient(to top, ${theme.palette.custom.primaryBackground}, transparent)`,
            }}
          />
        </Box>
        <SecurityServices />
      </Wrapper>
    </>
  );
};

export default SecurityServicesPage;
