import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import axios from "axios";
import { Typography, Box, useTheme } from "@mui/material";

const ViewAllVehicleDetails = () => {
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [error, setError] = useState("");

  const theme = useTheme();

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/getallvehicledetails"
        );
        if (response.data.error) {
          setError("Error fetching vehicle details.");
        } else {
          setVehicleDetails(response.data.data);
        }
      } catch (error) {
        setError("Error fetching vehicle details.");
        console.error("Error fetching vehicle details:", error);
      }
    };

    fetchVehicleDetails();
  }, []);

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
          All Vehicle Details
        </Typography>
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th>Vehicle Reg ID</th>
              <th>Vehicle Model</th>
              <th>Vehicle Number</th>
              <th>Customer Reg ID</th>
            </tr>
          </thead>
          <tbody>
            {vehicleDetails.map((vehicle) => (
              <tr key={vehicle.vehicleRegId}>
                <td>{vehicle.vehicleRegId}</td>
                <td>{vehicle.vehicleModel}</td>
                <td>{vehicle.vehicleNo}</td>
                <td>{vehicle.customerRegId}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Box>
  );
};

export default ViewAllVehicleDetails;
