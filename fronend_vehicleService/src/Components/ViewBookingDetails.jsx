import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import axios from "axios";
import { Typography, Box, useTheme } from "@mui/material";

const ViewAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const theme = useTheme();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/getAllBooking"
        );
        if (!response.data.error) {
          setBookings(response.data.data);
          setError("");
        } else {
          setError("Error fetching bookings. Please try again.");
        }
      } catch (error) {
        setError("Error fetching bookings. Please try again.");
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const formatTime = (time) => {
    const timeObj = new Date(`1970-01-01T${time}`);
    const formattedTime = timeObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return formattedTime;
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        padding: theme.spacing(4),
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom>
          View All Bookings
        </Typography>
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
        <div className="table-container">
          <Table striped bordered hover responsive="md">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Booking Date</th>
                <th>Booking Time</th>
                <th>Customer Registration ID</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.bookingId}>
                  <td>{booking.bookingId}</td>
                  <td>{booking.bookingDate}</td>
                  <td>{formatTime(booking.bookingTime)}</td>
                  <td>{booking.customerRegId}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </Box>
  );
};

export default ViewAllBookings;
