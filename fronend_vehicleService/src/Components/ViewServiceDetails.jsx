import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import axios from "axios";
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useTheme,
} from "@mui/material";

const ViewServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    serviceId: "",
    serviceDescription: "",
    packageName: "",
    packageCost: "",
    customerRegId: "",
  });

  const theme = useTheme();

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/serviceDetails"
        );
        if (response.data.error) {
          setError("Error fetching service details.");
        } else {
          setServiceDetails(response.data.data);
        }
      } catch (error) {
        setError("Error fetching service details.");
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceDetails();
  }, []);

  const handleUpdate = (service) => {
    setFormData({
      serviceId: service.serviceId,
      serviceDescription: service.serviceDescription,
      packageName: service.packageName,
      packageCost: service.packageCost,
      customerRegId: service.customerRegId,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      serviceId: "",
      serviceDescription: "",
      packageName: "",
      packageCost: "",
      customerRegId: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:8080/api/service/update",
        formData
      );
      if (!response.data.error) {
        const updatedServiceDetails = serviceDetails.map((service) =>
          service.serviceId === formData.serviceId ? formData : service
        );
        setServiceDetails(updatedServiceDetails);
        setShowModal(false);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Error updating service.");
      console.error("Error updating service:", error);
    }
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
          All Service Details
        </Typography>
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Service Description</th>
              <th>Package Name</th>
              <th>Package Cost</th>
              <th>Vehicle Registration ID</th>
              <th>Customer Registration ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {serviceDetails.map((service) => (
              <tr key={service.serviceId}>
                <td>{service.serviceId}</td>
                <td>{service.serviceDescription}</td>
                <td>{service.packageName}</td>
                <td>{service.packageCost}</td>
                <td>{service.vehicleRegId}</td>
                <td>{service.customerRegId}</td>
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdate(service)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Dialog open={showModal} onClose={handleCloseModal}>
          <DialogTitle>Update Service</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form to update the service details.
            </DialogContentText>
            <form onSubmit={handleFormSubmit}>
              <TextField
                margin="dense"
                label="Service Description"
                type="text"
                fullWidth
                name="serviceDescription"
                value={formData.serviceDescription}
                onChange={handleInputChange}
                required
              />
              <TextField
                margin="dense"
                label="Package Name"
                type="text"
                fullWidth
                name="packageName"
                value={formData.packageName}
                onChange={handleInputChange}
                required
              />
              <TextField
                margin="dense"
                label="Package Cost"
                type="number"
                fullWidth
                name="packageCost"
                value={formData.packageCost}
                onChange={handleInputChange}
                required
              />
              <TextField
                margin="dense"
                label="Customer Registration ID"
                type="text"
                fullWidth
                name="customerRegId"
                value={formData.customerRegId}
                onChange={handleInputChange}
                required
              />
              <DialogActions>
                <Button onClick={handleCloseModal} color="secondary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Update
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default ViewServiceDetails;
