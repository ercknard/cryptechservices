import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // For getting the current page URL

// MUI
import { Button, Typography, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import { useThemeContext } from "@/theme/themeProvider";

// Replace "sections" with "pages"
const NavItems = ["IT Services", "Security Services", "Projects", "Team"];

export default function Navbar() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation(); // Get current page URL path

  const [selectedDrawer, setSelectedDrawer] = useState<number | null>(null);

  const { activeSet } = useThemeContext();

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-ctlogo.png",
    2: "/static/images/green-ctlogo.png",
    3: "/static/images/yellow-ctlogo.png",
    4: "/static/images/orange-ctlogo.png",
    5: "/static/images/pink-ctlogo.png",
  };

  const imageSrc =
    colorSetImageMap[activeSet.toString()] || colorSetImageMap[1];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // 2rem offset (32px)
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // Function to get the current page (from URL path)
  const getCurrentPage = () => {
    const path = location.pathname;
    return path.substring(1).replace(/-/g, " ") || "home"; // Normalize the URL path
  };

  // Mobile view: AppBar with Drawer
  if (isMobileView) {
    return (
      <>
        <AppBar
          position="fixed"
          sx={{
            height: 60,
            zIndex: 10,
            px: 3,
            mb: { xs: 2.5, sm: 8 },
            paddingBottom: { xs: 9, md: 0 },
            boxShadow: 1,
            bgcolor: "custom.a1",
            backgroundImage: "none",
          }}
        >
          <Toolbar disableGutters>
            <Stack
              width={1}
              direction={"row"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box mr={{ xs: 1, sm: 3, md: 5 }} pt={1}>
                <Stack direction={"row"} spacing={1}>
                  <Button
                    component="a"
                    href="/" // Home Page link
                    sx={{
                      textDecoration: "none",
                      color: "custom.primaryText",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    }}
                  >
                    Cryptech Services
                  </Button>
                </Stack>
              </Box>

              <Stack marginTop={1}>
                <IconButton onClick={() => setSelectedDrawer(0)}>
                  <MenuIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>

        {/* MOBILE DRAWER */}
        <Drawer
          transitionDuration={400}
          anchor={"bottom"}
          open={selectedDrawer !== null}
          onClose={() => setSelectedDrawer(null)}
          PaperProps={{
            sx: {
              p: 3,
              height: "100vh",
              bgcolor: "custom.a1",
              backgroundImage: "none",
            },
          }}
        >
          <Stack spacing={2} height={1}>
            <Stack
              width={1}
              direction={"row"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box mr={{ xs: 1, sm: 3, md: 5 }}>
                <Stack direction={"row"} spacing={1}>
                  <Button
                    component="a"
                    href="/" // Home Page link
                    sx={{
                      textDecoration: "none",
                      color: "custom.primaryText",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    }}
                  >
                    Cryptech Services
                  </Button>
                </Stack>
              </Box>

              <IconButton onClick={() => setSelectedDrawer(null)}>
                <ClearIcon sx={{ fontSize: "1.5rem" }} />
              </IconButton>
            </Stack>

            <Box>
              <Stack
                direction={"column"}
                spacing={{ xs: 1, sm: 0, md: 5 }}
                display={"flex"}
                alignItems={"center"}
              >
                {NavItems.map((page) => {
                  const normalizedPage = page
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <Button
                      key={page}
                      component="a"
                      href={`/${normalizedPage}`} // Updated to use page as the href
                      sx={{
                        textDecoration:
                          getCurrentPage() === normalizedPage
                            ? "underline"
                            : "none", // Underline active page
                        textDecorationColor:
                          getCurrentPage() === normalizedPage
                            ? "custom.primaryText"
                            : "transparent", // Set underline color
                        textDecorationThickness:
                          getCurrentPage() === normalizedPage ? 4 : 0, // Adjust underline thickness
                        fontWeight: 600,
                      }}
                    >
                      <Typography
                        variant={"h5"}
                        fontWeight={"600"}
                        color={
                          getCurrentPage() === normalizedPage
                            ? "custom.primaryText"
                            : "custom.secondaryTextGrayed"
                        }
                      >
                        {page}
                      </Typography>
                    </Button>
                  );
                })}

                <Button
                  component="a"
                  href="#servers"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Drawer>
      </>
    );
  }

  // Desktop view: AppBar with links
  return (
    <Box display={{ xs: "none", sm: "flex" }}>
      <AppBar
        position="sticky"
        sx={{
          height: 65,
          zIndex: 10,
          px: 3,
          mb: 8,
          boxShadow: 1,
          bgcolor: "custom.secondaryBackground",
          backgroundImage: "none",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Stack
            width={1}
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              maxWidth: "1600px !important",
            }}
          >
            <Box display={"flex"}>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Button
                  component="a"
                  href="/" // Home Page link
                  sx={{
                    textDecoration: "none",
                    color: "custom.primaryText",
                    fontWeight: 600,
                  }}
                >
                  <Typography
                    variant="title"
                    fontSize={"1.25rem"}
                    color={"custom.primaryText"}
                  >
                    Cryptech
                  </Typography>
                  <Box
                    component="img"
                    width={{ md: 35 }}
                    alt="Logo"
                    src={imageSrc}
                    marginX={1}
                  />
                  <Typography
                    variant="title"
                    fontSize={"1.25rem"}
                    color={"custom.primaryText"}
                  >
                    Services
                  </Typography>
                </Button>
              </Stack>
            </Box>

            {/* RIGHT MENU */}
            <Box>
              <Stack
                direction="row"
                spacing={{ xs: 0, sm: 0, md: 3 }}
                display="flex"
                alignItems="center"
                marginTop={".25rem"}
              >
                {NavItems.map((page) => {
                  const normalizedPage = page.toLowerCase().replace(/\s+/g, "");
                  return (
                    <Button
                      key={page}
                      component="a"
                      href={`/${normalizedPage}`}
                      sx={{
                        textDecoration:
                          getCurrentPage() === normalizedPage
                            ? "underline"
                            : "none", // Underline active page
                        textDecorationColor:
                          getCurrentPage() === normalizedPage
                            ? "custom.primaryText"
                            : "transparent", // Set underline color
                        textDecorationThickness:
                          getCurrentPage() === normalizedPage ? 1 : 0, // Adjust underline thickness
                        fontWeight: 600,
                      }}
                    >
                      <Typography
                        color={
                          getCurrentPage() === normalizedPage
                            ? "custom.primaryText"
                            : "custom.primaryTextGrayed"
                        }
                      >
                        {page}
                      </Typography>
                    </Button>
                  );
                })}

                <Button
                  component="a"
                  href="/contactus"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
