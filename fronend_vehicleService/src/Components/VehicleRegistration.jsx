import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const VehicleRegistrationForm = () => {
  const [formData, setFormData] = useState({
    customerRegId: "",
    vehicleModel: "",
    vehicleNumber: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      customerRegId: formData.customerRegId,
      vehicleRegister: [
        {
          vehicleModel: formData.vehicleModel,
          vehicleNo: formData.vehicleNumber,
        },
      ],
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/vehicleDetails/save",
        payload
      );
      console.log("Vehicle saved successfully:", response.data);
      setSuccessMessage("Vehicle registered successfully!");
      setErrorMessage("");
      setFormData({
        customerRegId: "",
        vehicleModel: "",
        vehicleNumber: "",
      });
    } catch (error) {
      console.error(
        "Error saving vehicle details:",
        error.response ? error.response.data : error.message
      );
      setErrorMessage("Error saving vehicle details. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="vehicle-background">
      <div className="vehicle-registration-container">
        <h2>Vehicle Registration</h2>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group" controlId="customerRegId">
            <Form.Label className="form-label">Customer Reg ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Customer Reg ID"
              name="customerRegId"
              value={formData.customerRegId}
              onChange={handleChange}
              className="form-control"
            />
          </Form.Group>
          <Form.Group className="form-group" controlId="vehicleModel">
            <Form.Label className="form-label">Vehicle Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Vehicle Model"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
              className="form-control"
            />
          </Form.Group>
          <Form.Group className="form-group" controlId="vehicleNumber">
            <Form.Label className="form-label">Vehicle Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Vehicle Number"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              className="form-control"
            />
          </Form.Group>
          <Button className="btn-primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default VehicleRegistrationForm;