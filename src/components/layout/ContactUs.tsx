"use client";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";

// Define the shape of the errors object
interface FormErrors {
  fullname?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

export default function ContactUs() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Form validation
  const [errors, setErrors] = useState<FormErrors>({});

  // Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    const tempErrors: FormErrors = {}; // Use the FormErrors type here
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/nodemailer", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
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
      <Box sx={{ maxWidth: "lg", position: "relative", zIndex: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "32px",
                minWidth: "500px",
                maxWidth: "100%",
              }}
            >
              <Typography variant="h5" sx={{ color: "white", fontWeight: 700 }}>
                Send us a message.
              </Typography>

              <TextField
                label="Full Name"
                variant="outlined"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                fullWidth
                required
                margin="normal"
                error={!!errors?.fullname}
                helperText={errors?.fullname && "Full name cannot be empty"}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white", borderBottom: "1px solid white" },
                }}
              />

              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                margin="normal"
                error={!!errors?.email}
                helperText={errors?.email && "Email cannot be empty"}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white", borderBottom: "1px solid white" },
                }}
              />

              <TextField
                label="Subject"
                variant="outlined"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                fullWidth
                required
                margin="normal"
                error={!!errors?.subject}
                helperText={errors?.subject && "Subject cannot be empty"}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white", borderBottom: "1px solid white" },
                }}
              />

              <TextField
                label="Message"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                error={!!errors?.message}
                helperText={errors?.message && "Message body cannot be empty"}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white", borderBottom: "1px solid white" },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 4,
                  backgroundColor: "#007BFF",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {buttonText}
                <SendIcon sx={{ ml: 1 }} />
              </Button>

              <Box sx={{ mt: 2, color: "white" }}>
                {showSuccessMessage && (
                  <Typography variant="body2" sx={{ color: "green" }}>
                    Thank you! Your message has been delivered.
                  </Typography>
                )}
                {showFailureMessage && (
                  <Typography variant="body2" sx={{ color: "red" }}>
                    Oops! Something went wrong, please try again.
                  </Typography>
                )}
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
