import React, { useEffect, useState } from "react";
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
import supabase from "@/lib/supabase";

// FAQ type definition
type FaqsItem = {
  faqs_question: string;
  faqs_answer: string;
};

// FAQ type definition
type FaqItem = {
  question: string;
  answer: string;
};

const HomeFAQ = () => {
  const { activeSet } = useThemeContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FaqsItem[]>([]);

  const colorSetImageMap: { [key: string]: string } = {
    1: "/static/images/blue-upper-right.svg",
    2: "/static/images/green-upper-right.svg",
    3: "/static/images/yellow-upper-right.svg",
    4: "/static/images/orange-upper-right.svg",
    5: "/static/images/pink-upper-right.svg",
    6: "/static/images/white-upper-right.svg",
  };

  useEffect(() => {
    // Fetch IT Services data from Supabase
    const fetchFaqs = async () => {
      const { data, error } = await supabase.from("ztable_faqs").select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        setFaqs(data); // Set the fetched IT services data
        console.log("Fetched projects:", data); // Log data here to check
      }
    };

    fetchFaqs();
  }, []);

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
        paddingTop: { xs: "2rem", md: "5rem" },
        paddingBottom: "2.5rem",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack spacing={{ xs: 2.5, md: 1.5 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontSize={"1rem"} color="custom.primaryText">
              FAQ&apos;s
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              href={"/contactus"}
            >
              Contact Us <ArrowOutwardIcon fontSize="small" />
            </Button>
          </Stack>
          <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
            <Typography variant="h3" paddingBottom={{ xs: 0, md: 1 }}>
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
          {faqs.map((faq, index) => (
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
                  {faq.faqs_question}
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
                    <Typography variant="body1">{faq.faqs_answer}</Typography>
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
