import React from "react";
import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LanguageIcon from "@mui/icons-material/Language";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";

const styles = {
  section: {
    py: 8,
    backgroundColor: "#f9f9f9",
  },
  title: {
    mb: 4,
    textAlign: "center",
  },
  valueIcon: {
    fontSize: "3rem",
    color: "#3f51b5",
    marginBottom: "0.5rem",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

const AboutUs = () => {
  return (
    <Box sx={styles.section}>
      <Container>
        <Typography variant="h2" sx={styles.title} gutterBottom>
          About Us
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={styles.card}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  At Vehicle Service Portal, our mission is to provide exceptional
                  automotive services with a focus on customer satisfaction and
                  safety. We strive to exceed expectations by delivering reliable
                  and professional service that enhances vehicle performance and
                  longevity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={styles.card}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  Our vision is to be a leading provider of vehicle service
                  solutions known for innovation, quality, and integrity. We aim
                  to set new standards in the industry by continuously improving
                  our services and expanding our capabilities to meet the diverse
                  needs of our customers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={styles.card}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Our Values
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <Box sx={{ ...styles.valueIcon, color: "#4caf50" }}>
                      <EmojiPeopleIcon fontSize="inherit" />
                    </Box>
                    <Typography variant="body1" align="center">
                      Responsible
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Box sx={{ ...styles.valueIcon, color: "#f44336" }}>
                      <FlashOnIcon fontSize="inherit" />
                    </Box>
                    <Typography variant="body1" align="center">
                      Dynamic
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Box sx={{ ...styles.valueIcon, color: "#ffc107" }}>
                      <LanguageIcon fontSize="inherit" />
                    </Box>
                    <Typography variant="body1" align="center">
                      Open
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Box sx={{ ...styles.valueIcon, color: "#2196f3" }}>
                      <SecurityIcon fontSize="inherit" />
                    </Box>
                    <Typography variant="body1" align="center">
                      Reliable
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Box sx={{ ...styles.valueIcon, color: "#9c27b0" }}>
                      <BuildIcon fontSize="inherit" />
                    </Box>
                    <Typography variant="body1" align="center">
                      Efficient
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={styles.card}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Technology Used
                </Typography>
                <Typography variant="body1">
                  We leverage cutting-edge technology to deliver superior vehicle
                  service solutions. Our platform integrates advanced diagnostic
                  tools, automated scheduling systems, and secure payment
                  gateways to ensure a seamless and efficient service experience
                  for our customers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={styles.card}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Experience
                </Typography>
                <Typography variant="body1">
                  With over a decade of experience in the automotive service industry,
                  we have built a reputation for excellence and reliability. Our
                  team of skilled technicians and customer service professionals
                  are dedicated to providing you with the best possible experience
                  when it comes to maintaining and servicing your vehicle.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
