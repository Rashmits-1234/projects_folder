import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
  Tabs,
  Tab,
  Box,
  Card,
  CardContent,
  CardHeader,
  Modal,
  Backdrop,
  Fade,
  CardMedia,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import InvoiceReport from "./InvoiceReport";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showInvoiceReport, setShowInvoiceReport] = useState(false);
  const customerName = sessionStorage.getItem("customerName");

  const handleLogout = () => {
    sessionStorage.removeItem("customerName");
    sessionStorage.removeItem("customerRegId");
    navigate("/");
  };

  const handleShowPopup = (message) => {
    setPopupMessage(message);
    setOpenPopup(true);

    setTimeout(() => {
      setOpenPopup(false);
    }, 1000);
  };

  const handleViewInvoiceReport = () => {
    setShowInvoiceReport(true);
  };

  const serviceSteps = [
    {
      title: "Customer reception at the security gate",
      img: "https://smartbrains6.com/wp-content/uploads/2023/08/Parking-Managment-System-e1693315286312.jpg",
    },
    {
      title:
        "Customer introduced to the service advisor by the welcome desk coordinator",
      img: "https://www.jlwarranty.com/images/blog/800-serviceadvandwarranty.jpg",
    },
    {
      title: "Vehicle pre-service inspection by service advisor",
      img: "https://th.bing.com/th/id/R.91bdd9fb28d786b270635971b2713abb?rik=3j4WDqgdgrTiYg&riu=http%3a%2f%2fwww.autotrainingcentre.com%2fwp-content%2fuploads%2f2016%2f06%2fauto-service-writer.jpg&ehk=y3M7XozLrNXp%2bc6epWcLdahULJFfit2aFEdw6c6lu6k%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      title: "Explanation of job, cost, and time estimate",
      img: "https://th.bing.com/th/id/OIP.oAnc1tAJ2mHHxuwbzDttVQHaFj?w=195&h=146&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      title: "Vehicle service/repair",
      img: "https://th.bing.com/th/id/OIP.MfEVRN6uNVDSqL9W_XkJ4wAAAA?rs=1&pid=ImgDetMain",
    },
    {
      title: "Vehicle washing and cleaning",
      img: "https://th.bing.com/th/id/OIP.oFoQPZ0HsVIaO95YIDIzIAAAAA?rs=1&pid=ImgDetMain",
    },
    {
      title: "Vehicle service status communication to customers",
      img: "https://thumbs.dreamstime.com/b/communication-support-call-center-customer-service-help-desk-concept-223185178.jpg",
    },
    {
      title: "Post-service vehicle inspection and explanation of jobs done",
      img: "https://www.techicy.com/wp-content/uploads/2021/03/Vehicle-in-Inspection-737x420.png",
    },
    {
      title: "Explanation of invoice and vehicle handover",
      img: "https://th.bing.com/th/id/OIP.G-Uiw2PD5yhqnk-_fVyhOgAAAA?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="Customer-background">
      <AppBar position="fixed" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/customer-dashboard"
            sx={{ color: "white", textDecoration: "none", marginRight: "20px" }}
          >
            Customer Dashboard
          </Typography>
          <Typography variant="body1" sx={{ color: "white", flexGrow: 1 }}>
            {customerName && (
              <span style={{ fontFamily: "Arial", fontStyle: "italic" }}>
                Welcome, <strong>{customerName}</strong>!
              </span>
            )}
          </Typography>
          <Tabs value={false} indicatorColor="secondary">
            <Tab
              label="Logout"
              icon={<ExitToAppIcon />}
              onClick={handleLogout}
              sx={{ color: "white" }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Container sx={{ paddingTop: "100px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card sx={{ marginBottom: 4 }}>
              <CardHeader
                title={
                  <Typography variant="h4" align="center">
                    Welcome Desk
                  </Typography>
                }
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  Our Service Process
                </Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{ marginTop: 2 }}
                  justifyContent="center"
                >
                  {serviceSteps.map((step, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="140"
                          image={step.img}
                          alt={step.title}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            align="center"
                          >
                            {step.title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ marginBottom: 4 }}>
              <CardHeader title="Featured Offers" />
              <CardContent>
                <Typography variant="body1">
                  Special Discounts for You
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check out our latest offers and discounts tailored just for
                  you!
                </Typography>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleShowPopup(
                      "Stay tuned! We will notify you as soon as new offers are available."
                    )
                  }
                  sx={{ marginTop: 2 }}
                >
                  View Offers
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ marginBottom: 4 }}>
              <CardHeader title="Upcoming Events" />
              <CardContent>
                <Typography variant="body1">
                  Join Us for Exciting Events
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay updated on our upcoming events and participate in
                  exclusive workshops, seminars, and more!
                </Typography>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleShowPopup(
                      "We appreciate your interest! You'll be the first to know when new events are scheduled."
                    )
                  }
                  sx={{ marginTop: 2 }}
                >
                  View Events
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ marginBottom: 4 }}>
              <CardHeader title="Vehicle Service Portal" />
              <CardContent>
                <Typography variant="body1">
                  Manage Your Vehicle Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View and manage your vehicle service history, appointments,
                  and more!
                </Typography>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleShowPopup(
                      "Thank you for choosing us! We will notify you once the vehicle services are available."
                    )
                  }
                  sx={{ marginTop: 2 }}
                >
                  View Vehicle Services
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ marginBottom: 4 }}>
              <CardHeader title="Service Centers Near You" />
              <CardContent>
                <Typography variant="body1">Find Service Centers</Typography>
                <Typography variant="body2" color="text.secondary">
                  Locate authorized service centers near your location.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleShowPopup(
                      "We are here to help! We will inform you as soon as we have more details on service centers."
                    )
                  }
                  sx={{ marginTop: 2 }}
                >
                  Find Service Centers
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ marginBottom: 4 }}>
              <CardContent>
                <Typography variant="body1">
                  View Your Customer Details
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Access and review your personal information and account
                  details.
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleViewInvoiceReport}
                  sx={{ marginTop: 2 }}
                >
                  View Invoice Report
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {showInvoiceReport && (
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <InvoiceReport />
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Container>

      <Routes>
        <Route
          path="/customer-dashboard/invoice-report"
          element={<InvoiceReport />}
        />
      </Routes>

      <Modal
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        aria-labelledby="popup-message"
        aria-describedby="popup-message-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openPopup}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="popup-message"
              variant="h6"
              component="h2"
              gutterBottom
            >
              Notification
            </Typography>
            <Typography
              id="popup-message-description"
              variant="body1"
              sx={{ mb: 2 }}
            >
              {popupMessage}
            </Typography>
            <Button onClick={() => setOpenPopup(false)} variant="contained">
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CustomerDashboard;
