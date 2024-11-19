import React from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
} from "@mui/material";
import VehicleRegistrationForm from "./VehicleRegistration";
import ServiceForm from "./ServiceDetails";
import BookingForm from "./BookingForm";
import ViewAllVehicleDetails from "./Viewvehicle";
import ViewServiceDetails from "./ViewServiceDetails";
import ViewAllBookings from "./ViewBookingDetails";
import ViewAllCustomerDetails from "./CustomerRegistrationDetails";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="Admin-background">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 64, padding: 16 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader title="Welcome, Admin!" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Manage vehicle registrations, service details, bookings, and more using the links below.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader title="Quick Actions" />
              <CardContent>
                <Button
                  variant="contained"
                  component={Link}
                  to="/admin-dashboard/vehicle-registration"
                  fullWidth
                  sx={{ mb: 1 }}
                >
                  Register New Vehicle
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/admin-dashboard/service-details"
                  fullWidth
                  sx={{ mb: 1 }}
                >
                  Add New Service
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/admin-dashboard/booking-form"
                  fullWidth
                >
                  Create New Booking
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader title="Reports and Analytics" />
              <CardContent>
                <Button
                  variant="contained"
                  component={Link}
                  to="/admin-dashboard/view-vehicle"
                  fullWidth
                  sx={{ mb: 1 }}
                >
                  View Vehicle History
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/admin-dashboard/view-bookings"
                  fullWidth
                  sx={{ mb: 1 }}
                >
                  View Bookings
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/admin-dashboard/view-service-details"
                  fullWidth
                  sx={{ mb: 1 }}
                >
                  View Service Details
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/admin-dashboard/view-customer-details"
                  fullWidth
                  sx={{ mb: 1 }}
                >
                  View Customer Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <Routes>
        <Route path="vehicle-registration" element={<VehicleRegistrationForm />} />
        <Route path="service-details" element={<ServiceForm />} />
        <Route path="booking-form" element={<BookingForm />} />
        <Route path="view-vehicle" element={<ViewAllVehicleDetails />} />
        <Route path="view-service-details" element={<ViewServiceDetails />} />
        <Route path="view-bookings" element={<ViewAllBookings />} />
        <Route path="view-customer-details" element={<ViewAllCustomerDetails />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
