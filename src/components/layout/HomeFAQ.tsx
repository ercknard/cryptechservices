import React, { useState } from "react";
import {
  Collapse,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  Container,
  Stack,
} from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"; // Import arrow icons
import { useThemeContext } from "@/theme/themeProvider";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// FAQ type definition
type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.",
  },
  {
    question: "What is Material-UI?",
    answer:
      "Material-UI is a popular React UI framework that follows Google's Material Design guidelines.",
  },
  {
    question: "How do I install Material-UI?",
    answer:
      "You can install Material-UI using npm or yarn: npm install @mui/material @emotion/react @emotion/styled.",
  },
  {
    question: "How can I use Collapse in Material-UI?",
    answer:
      "You can use Collapse to show and hide content smoothly. It is usually used with buttons or other UI elements to toggle visibility.",
  },
  {
    question: "What is TypeScript?",
    answer:
      "TypeScript is a statically typed superset of JavaScript that adds optional types, interfaces, and other features to JavaScript.",
  },
];

const HomeFAQ = () => {
  const { activeSet } = useThemeContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
  };

  const imageSrc =
    colorSetImageMap[activeSet.toString()] || colorSetImageMap[1];

  const toggleCollapse = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        paddingY: "5rem",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack spacing={1.5}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontSize={"1rem"} color="custom.primaryText">
              FAQ&apos;s
            </Typography>
            <Button variant="outlined" color="primary" size="small" href={"#"}>
              Learn More <ArrowOutwardIcon fontSize="small" />
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="h3" paddingBottom={1}>
              Frequently Asked
            </Typography>
            <Typography
              variant="h3"
              fontWeight={600}
              color="custom.primaryText"
              gutterBottom
            >
              Questions
            </Typography>
          </Stack>
          <Typography variant={"h6"} color="custom.primaryTextGrayed">
            Find answers to your questions in our FAQ section, and if you need
            further support, our team is available on Discord to assist you.
            Join us now and get the help you.
          </Typography>
        </Stack>
        <List sx={{ marginTop: "2rem" }}>
          {faqData.map((faq, index) => (
            <ListItem key={index} sx={{ padding: 0 }}>
              <Box sx={{ width: "100%", marginBottom: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => toggleCollapse(index)}
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    padding: 2.5,
                    backgroundColor: "custom.primaryComponents",
                    display: "flex",
                    justifyContent: "space-between", // Align question and icon
                    alignItems: "center",
                    color: "custom.primaryText",
                  }}
                >
                  {faq.question}
                  {/* Conditionally render the arrow icon */}
                  {openIndex === index ? (
                    <ArrowUpward /> // Show arrow up when FAQ is expanded
                  ) : (
                    <ArrowDownward /> // Show arrow down when FAQ is collapsed
                  )}
                </Button>
                <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                  <Box
                    sx={{
                      paddingY: 2.5,
                      paddingX: 2,
                      backgroundColor: "custom.primaryBackground",
                      borderBottomRightRadius: "8px",
                      borderBottomLeftRadius: "8px",
                    }}
                  >
                    <Typography variant="body1">{faq.answer}</Typography>
                  </Box>
                </Collapse>
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
                  }}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default HomeFAQ;
