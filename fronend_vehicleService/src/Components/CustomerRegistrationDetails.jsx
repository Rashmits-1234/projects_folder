import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import axios from "axios";
import {
  Typography,
  Box,
  useTheme,
} from "@mui/material";

const ViewAllCustomerDetails = () => {
  const [customerDetails, setCustomerDetails] = useState([]);
  const [error, setError] = useState("");
  const theme = useTheme();

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/getAllCustomerDetails"
        );
        if (response.data.error) {
          setError("Error fetching customer details.");
        } else {
          setCustomerDetails(response.data.data);
        }
      } catch (error) {
        setError("Error fetching customer details.");
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
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
          All Customer Details
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
                <th>Customer Registration ID</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Vehicle Number</th>
              </tr>
            </thead>
            <tbody>
              {customerDetails.map((customer) => (
                <tr key={customer.customerRegId}>
                  <td>{customer.customerRegId}</td>
                  <td>{customer.customerName}</td>
                  <td>{customer.customerEmail}</td>
                  <td>{customer.vehicleNumber}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </Box>
  );
};

export default ViewAllCustomerDetails;